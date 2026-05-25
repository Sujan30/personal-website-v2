// Run: npx tsx scripts/sync-projects.ts
import fs from 'node:fs';
import path from 'node:path';

const USER = 'Sujan30';
const TOKEN = process.env.GH_TOKEN;
const CONFIG_PATH = path.join(process.cwd(), 'src/data/projects.config.json');
const OUT_PATH = path.join(process.cwd(), 'src/data/projects.generated.json');

type RepoConfig = { repo: string };
const config: RepoConfig[] = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf-8'));

const headers: Record<string, string> = { Accept: 'application/vnd.github+json' };
if (TOKEN) headers.Authorization = `Bearer ${TOKEN}`;

async function fetchReadme(repo: string): Promise<string> {
  const r = await fetch(`https://api.github.com/repos/${USER}/${repo}/readme`, { headers });
  if (!r.ok) throw new Error(`readme ${repo}: ${r.status}`);
  const j = await r.json() as { content: string };
  return Buffer.from(j.content, 'base64').toString('utf-8');
}

function parseMarker(md: string): Record<string, unknown> | null {
  const m = md.match(/<!--\s*site:start\s*-->([\s\S]*?)<!--\s*site:end\s*-->/);
  if (!m) return null;

  const out: Record<string, unknown> = { stats: [], subStats: [] };
  let mode: 'root' | 'stats' | 'subStats' = 'root';

  for (const line of m[1].split('\n')) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    if (/^stats:/.test(trimmed))    { mode = 'stats';    continue; }
    if (/^subStats:/.test(trimmed)) { mode = 'subStats'; continue; }

    if (trimmed.startsWith('- ') && (mode === 'stats' || mode === 'subStats')) {
      const [value, label] = trimmed.slice(2).split('|').map((s) => s.trim());
      (out[mode] as { value: string; label: string }[]).push({ value, label });
      continue;
    }

    mode = 'root';
    const colonIdx = trimmed.indexOf(':');
    if (colonIdx === -1) continue;
    const key = trimmed.slice(0, colonIdx).trim();
    const val = trimmed.slice(colonIdx + 1).trim();
    out[key] = val;
  }

  if (typeof out.stack === 'string') {
    out.tags = out.stack.split(',').map((s: string) => s.trim());
  }
  if (out.featured !== undefined) out.featured = out.featured === 'true';

  return out;
}

async function main() {
  const out: unknown[] = [];

  for (const { repo } of config) {
    try {
      const md = await fetchReadme(repo);
      const parsed = parseMarker(md);
      if (!parsed) {
        console.warn(`${repo}: no <!-- site:start --> marker, skipping`);
        continue;
      }
      out.push({ slug: repo.toLowerCase(), github: `https://github.com/${USER}/${repo}`, ...parsed });
    } catch (e) {
      console.error(`${repo}:`, (e as Error).message);
    }
  }

  fs.writeFileSync(OUT_PATH, JSON.stringify(out, null, 2));
  console.log(`✓ wrote ${out.length} projects to ${OUT_PATH}`);
}

main();
