// Generates an AI hero image per blog post via the OpenAI image API.
// Output: web/public/hero/<slug>.png (committed to the repo, never regenerated).
// This script ALWAYS exits 0: any failure just means the post falls back to
// the branded /og/<slug>.png card.
import { readdir, readFile, writeFile, mkdir, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const here = path.dirname(fileURLToPath(import.meta.url));
const webDir = path.resolve(here, '..');
const blogDir = path.join(webDir, 'src', 'content', 'blog');
const heroDir = path.join(webDir, 'public', 'hero');

const MODEL = 'gpt-image-1-mini'; // cheapest current image model this account can use; gpt-image-1 is gated
const SIZE = '1536x1024';
const QUALITY = 'medium'; // cost-conscious; use "low" to spend less

// Fixed suffix so every image shares one look.
const STYLE_SUFFIX =
  'Style: a modern, clean, flat editorial illustration for a crypto and wallet security topic. ' +
  'Deep teal and dark ink palette with off-white. Abstract and conceptual. ' +
  'NO text, NO words, NO letters, NO logos, NO user-interface screenshots, NO real brand marks.';

const exists = (p) => access(p).then(() => true, () => false);

/** Same rule as slugOf in src/lib/blog.ts: strip the leading YYYY-MM-DD- prefix. */
const slugFromFile = (file) =>
  file.replace(/\.md$/, '').replace(/^\d{4}-\d{2}-\d{2}-/, '');

/** Minimal front-matter reader: top-level `key: value` scalars only. */
function readFrontmatter(src) {
  const m = src.replace(/^﻿/, '').match(/^---\r?\n([\s\S]*?)\r?\n---/);
  const out = {};
  if (!m) return out;
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^([A-Za-z][\w-]*):\s*(.*)$/);
    if (!kv) continue;
    let v = kv[2].trim();
    if (/^".*"$/.test(v)) {
      try { v = JSON.parse(v); } catch { v = v.slice(1, -1); }
    } else if (/^'.*'$/.test(v)) {
      v = v.slice(1, -1).replace(/''/g, "'");
    }
    out[kv[1]] = v;
  }
  return out;
}

function buildPrompt(fm) {
  const subject =
    fm.heroPrompt && String(fm.heroPrompt).trim()
      ? String(fm.heroPrompt).trim()
      : `A conceptual illustration for a ${fm.category || 'security'} article titled "${fm.title}". ` +
        'Express the central idea as an abstract visual metaphor.';
  return `${subject}\n\n${STYLE_SUFFIX}`;
}

async function generate(prompt, key) {
  const res = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` },
    body: JSON.stringify({ model: MODEL, prompt, size: SIZE, quality: QUALITY, n: 1 }),
  });
  if (!res.ok) {
    const body = (await res.text()).slice(0, 300);
    throw new Error(`OpenAI HTTP ${res.status}: ${body}`);
  }
  const json = await res.json();
  const b64 = json?.data?.[0]?.b64_json;
  if (typeof b64 !== 'string' || b64.length < 100) throw new Error('malformed response (no b64_json)');
  const buf = Buffer.from(b64, 'base64');
  if (buf.length < 8 || buf.readUInt32BE(0) !== 0x89504e47) throw new Error('response is not a PNG');
  return buf;
}

async function main() {
  const key = process.env.OPENAI_API_KEY;
  if (!key) {
    console.warn('[gen-hero] no OPENAI_API_KEY, skipping hero generation (posts use the branded card).');
    return;
  }
  const files = (await readdir(blogDir)).filter((f) => f.endsWith('.md')).sort();
  await mkdir(heroDir, { recursive: true });
  for (const file of files) {
    const slug = slugFromFile(file);
    const target = path.join(heroDir, `${slug}.jpg`);
    try {
      if (await exists(target)) {
        console.log(`[gen-hero] ${slug}: exists, skipping`);
        continue;
      }
      const fm = readFrontmatter(await readFile(path.join(blogDir, file), 'utf8'));
      if (String(fm.draft).toLowerCase() === 'true') {
        console.log(`[gen-hero] ${slug}: draft, skipping`);
        continue;
      }
      console.log(`[gen-hero] ${slug}: generating`);
      const png = await generate(buildPrompt(fm), key);
      // The API returns a multi-MB PNG; re-encode to a web-weight JPG for Core Web Vitals.
      const jpg = await sharp(png).jpeg({ quality: 82, mozjpeg: true }).toBuffer();
      await writeFile(target, jpg);
      console.log(`[gen-hero] ${slug}: wrote ${path.relative(webDir, target)} (${jpg.length} bytes)`);
    } catch (err) {
      console.warn(`[gen-hero] ${slug}: failed, skipping (${err?.message || err})`);
    }
  }
}

main()
  .catch((err) => console.warn(`[gen-hero] unexpected error, skipping (${err?.message || err})`))
  .finally(() => process.exit(0));
