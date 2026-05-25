#!/usr/bin/env npx tsx
/**
 * sync-github.ts
 *
 * Polls GitHub for new or recently-pushed repos, fetches their READMEs,
 * and writes scripts/pending-projects.json for merge-projects.ts to consume.
 *
 * Usage:
 *   npx tsx scripts/sync-github.ts           # normal run
 *   npx tsx scripts/sync-github.ts --dry-run  # print output, no file writes
 */

import { readFileSync, writeFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const PROJECTS_FILE = join(ROOT, "src/data/projects.ts");
const LAST_SYNC_FILE = join(__dirname, ".last-sync");
const PENDING_FILE = join(__dirname, "pending-projects.json");

const GITHUB_USER = "Sujan30";
const DRY_RUN = process.argv.includes("--dry-run");

// ── Helpers ──────────────────────────────────────────────────────────────────

function log(msg: string) {
  console.log(`[sync-github] ${msg}`);
}

async function githubFetch(path: string) {
  const url = `https://api.github.com${path}`;
  const res = await fetch(url, {
    headers: { "User-Agent": "personal-website-sync/1.0" },
  });
  if (!res.ok) throw new Error(`GitHub API ${res.status} for ${url}`);
  return res.json();
}

function extractKnownUrls(): Set<string> {
  const src = readFileSync(PROJECTS_FILE, "utf-8");
  const matches = [...src.matchAll(/githubUrl:\s*["']([^"']+)["']/g)];
  return new Set(matches.map((m) => m[1].replace(/\/$/, "").toLowerCase()));
}

function getLastSync(): Date | null {
  if (!existsSync(LAST_SYNC_FILE)) return null;
  const raw = readFileSync(LAST_SYNC_FILE, "utf-8").trim();
  const d = new Date(raw);
  return isNaN(d.getTime()) ? null : d;
}

// ── Main ─────────────────────────────────────────────────────────────────────

interface Repo {
  name: string;
  html_url: string;
  pushed_at: string;
  description: string | null;
  fork: boolean;
  private: boolean;
}

interface PendingProject {
  repoName: string;
  repoUrl: string;
  readme: string;
}

async function main() {
  log(`Starting GitHub sync for user: ${GITHUB_USER}${DRY_RUN ? " (dry-run)" : ""}`);

  const knownUrls = extractKnownUrls();
  log(`Known projects in projects.ts: ${knownUrls.size}`);

  const lastSync = getLastSync();
  log(`Last sync: ${lastSync ? lastSync.toISOString() : "never"}`);

  // Fetch all repos (handles up to 100; add pagination if needed later)
  const repos: Repo[] = await githubFetch(
    `/users/${GITHUB_USER}/repos?sort=updated&per_page=100`
  );

  const candidates: Repo[] = repos.filter((r) => {
    if (r.fork || r.private) return false;
    const normalizedUrl = r.html_url.replace(/\/$/, "").toLowerCase();
    const isNew = !knownUrls.has(normalizedUrl);
    const pushedAt = new Date(r.pushed_at);
    const isUpdated = lastSync !== null && pushedAt > lastSync && knownUrls.has(normalizedUrl);
    return isNew || isUpdated;
  });

  log(`Candidates (new or updated): ${candidates.length}`);
  if (candidates.length === 0) {
    log("Nothing to sync. Exiting.");
    if (!DRY_RUN) writeFileSync(LAST_SYNC_FILE, new Date().toISOString());
    return;
  }

  const pending: PendingProject[] = [];

  for (const repo of candidates) {
    log(`Fetching README for: ${repo.name}`);
    try {
      const readmeData: { content?: string } = await githubFetch(
        `/repos/${GITHUB_USER}/${repo.name}/readme`
      );
      const readme = readmeData.content
        ? Buffer.from(readmeData.content, "base64").toString("utf-8").slice(0, 4000)
        : "(no README)";

      pending.push({
        repoName: repo.name,
        repoUrl: repo.html_url,
        readme,
      });
    } catch {
      log(`  Skipping ${repo.name} — no README or fetch error`);
    }
  }

  log(`Pending projects to process: ${pending.length}`);

  if (DRY_RUN) {
    console.log("\n--- pending-projects.json (dry-run) ---");
    console.log(JSON.stringify(pending, null, 2));
  } else {
    writeFileSync(PENDING_FILE, JSON.stringify(pending, null, 2));
    writeFileSync(LAST_SYNC_FILE, new Date().toISOString());
    log(`Written to ${PENDING_FILE}`);
    log(`Updated ${LAST_SYNC_FILE}`);
  }
}

main().catch((e) => {
  console.error("[sync-github] Fatal:", e.message);
  process.exit(1);
});
