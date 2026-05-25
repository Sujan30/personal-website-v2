#!/usr/bin/env npx tsx
/**
 * merge-projects.ts
 *
 * Reads scripts/pending-projects.json, calls Claude CLI to extract structured
 * project data from each README, then merges new entries into src/data/projects.ts.
 *
 * Usage:
 *   npx tsx scripts/merge-projects.ts           # normal run
 *   npx tsx scripts/merge-projects.ts --dry-run  # print diff, no file writes
 *   npx tsx scripts/merge-projects.ts --commit   # also git commit after write
 */

import { readFileSync, writeFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const PROJECTS_FILE = join(ROOT, "src/data/projects.ts");
const PENDING_FILE = join(__dirname, "pending-projects.json");

const DRY_RUN = process.argv.includes("--dry-run");
const DO_COMMIT = process.argv.includes("--commit");

// ── Helpers ──────────────────────────────────────────────────────────────────

function log(msg: string) {
  console.log(`[merge-projects] ${msg}`);
}

interface PendingProject {
  repoName: string;
  repoUrl: string;
  readme: string;
}

interface ExtractedProject {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  impact?: string;
}

function extractMaxId(src: string): number {
  const matches = [...src.matchAll(/id:\s*(\d+)/g)];
  if (matches.length === 0) return 0;
  return Math.max(...matches.map((m) => parseInt(m[1], 10)));
}

function claudeExtract(pending: PendingProject): ExtractedProject | null {
  const prompt = `You are a project data extractor for a developer portfolio. Given a GitHub repo name, URL, and README content, output a single valid JSON object — no markdown, no explanation, just the JSON.

Required fields:
- title (string): Clean display name for the project
- description (string): 1-2 sentence summary of what it does and how. Be concrete, not vague.
- techStack (string[]): Array of tech names used (frameworks, languages, APIs, etc.)
- githubUrl (string): The repo URL provided

Optional fields (include only if clearly derivable from the README):
- liveUrl (string): URL to live demo or deployment
- impact (string): Metrics, outcomes, or notable facts (e.g. user counts, performance gains)

Repo name: ${pending.repoName}
Repo URL: ${pending.repoUrl}

README:
${pending.readme}`;

  try {
    const escaped = prompt.replace(/'/g, `'\\''`);
    const output = execSync(`claude -p '${escaped}'`, {
      encoding: "utf-8",
      timeout: 60_000,
    }).trim();

    // Strip markdown code fences if Claude wraps in ```json ... ```
    const cleaned = output.replace(/^```(?:json)?\n?/, "").replace(/\n?```$/, "");
    return JSON.parse(cleaned) as ExtractedProject;
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e);
    log(`  Claude call failed for ${pending.repoName}: ${msg}`);
    return null;
  }
}

function buildProjectEntry(extracted: ExtractedProject, id: number): string {
  const lines: string[] = [];
  lines.push(`  {`);
  lines.push(`    id: ${id},`);
  lines.push(`    title: ${JSON.stringify(extracted.title)},`);
  lines.push(`    description: ${JSON.stringify(extracted.description)},`);
  lines.push(`    techStack: ${JSON.stringify(extracted.techStack)},`);
  lines.push(`    githubUrl: ${JSON.stringify(extracted.githubUrl)},`);
  if (extracted.liveUrl) lines.push(`    liveUrl: ${JSON.stringify(extracted.liveUrl)},`);
  if (extracted.impact) lines.push(`    impact: ${JSON.stringify(extracted.impact)},`);
  lines.push(`  },`);
  return lines.join("\n");
}

// ── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  if (!existsSync(PENDING_FILE)) {
    log("No pending-projects.json found. Run sync-github.ts first.");
    process.exit(0);
  }

  const pending: PendingProject[] = JSON.parse(readFileSync(PENDING_FILE, "utf-8"));
  log(`Pending projects: ${pending.length}${DRY_RUN ? " (dry-run)" : ""}`);

  if (pending.length === 0) {
    log("Nothing to merge.");
    return;
  }

  const projectsSrc = readFileSync(PROJECTS_FILE, "utf-8");
  let nextId = extractMaxId(projectsSrc) + 1;

  const newEntries: string[] = [];

  for (const p of pending) {
    log(`Processing: ${p.repoName}`);
    const extracted = claudeExtract(p);
    if (!extracted) {
      log(`  Skipping ${p.repoName} — extraction failed`);
      continue;
    }
    const entry = buildProjectEntry(extracted, nextId++);
    newEntries.push(entry);
    log(`  Generated entry: "${extracted.title}" (id: ${nextId - 1})`);
  }

  if (newEntries.length === 0) {
    log("No valid entries extracted. Nothing written.");
    return;
  }

  // Prepend new entries right after `export const projects: Project[] = [`
  const insertMarker = "export const projects: Project[] = [";
  const insertIdx = projectsSrc.indexOf(insertMarker);
  if (insertIdx === -1) {
    log("Could not find projects array marker in projects.ts. Aborting.");
    process.exit(1);
  }

  const afterMarker = insertIdx + insertMarker.length;
  const updated =
    projectsSrc.slice(0, afterMarker) +
    "\n" +
    newEntries.join("\n") +
    "\n" +
    projectsSrc.slice(afterMarker);

  if (DRY_RUN) {
    console.log("\n--- projects.ts diff (dry-run, new entries) ---");
    newEntries.forEach((e) => console.log(e));
    return;
  }

  writeFileSync(PROJECTS_FILE, updated);
  log(`Wrote ${newEntries.length} new project(s) to ${PROJECTS_FILE}`);

  // Clear pending file after successful merge
  writeFileSync(PENDING_FILE, "[]");

  if (DO_COMMIT) {
    log("Building and committing...");
    execSync("npm run build", { cwd: ROOT, stdio: "inherit" });
    execSync(`git add src/data/projects.ts`, { cwd: ROOT });
    execSync(`git commit -m "chore: auto-sync projects from GitHub"`, { cwd: ROOT, stdio: "inherit" });
    execSync(`git push`, { cwd: ROOT, stdio: "inherit" });
    log("Pushed. Vercel will redeploy.");
  } else {
    log("Done. Run with --commit to also build, commit, and push.");
  }
}

main().catch((e) => {
  console.error("[merge-projects] Fatal:", e.message);
  process.exit(1);
});
