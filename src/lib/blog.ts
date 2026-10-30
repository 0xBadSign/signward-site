import { existsSync } from 'node:fs';
import path from 'node:path';
import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

export const SITE = 'https://signward.app';
export const CHROME_URL =
  'https://chromewebstore.google.com/detail/signward-drainer-phishing/ljncjhmjjljmoclcapgbnohminlfjgil';

export const FIREFOX_URL = 'https://addons.mozilla.org/firefox/addon/signward-drainer-guard/';

export const CATEGORY_LABEL: Record<Post['data']['category'], string> = {
  news: 'News',
  explainer: 'Explainer',
  incident: 'Incident',
  guide: 'Guide',
};

/** URL slug: the file id without its leading YYYY-MM-DD- date prefix. */
export function slugOf(post: Post): string {
  return post.id.replace(/^\d{4}-\d{2}-\d{2}-/, '');
}

/**
 * Image for a post: the AI hero at /hero/<slug>.png when that file exists in
 * public/ at build time, otherwise the branded card at /og/<slug>.png.
 * (Astro builds run with cwd = web/.)
 */
export function heroFor(slug: string): { src: string; isHero: boolean } {
  const file = path.resolve(process.cwd(), 'public', 'hero', `${slug}.jpg`);
  return existsSync(file)
    ? { src: `/hero/${slug}.jpg`, isHero: true }
    : { src: `/og/${slug}.png`, isHero: false };
}

export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', ({ data }) =>
    import.meta.env.PROD ? !data.draft : true,
  );
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function ymd(d: Date): string {
  return d.toISOString().slice(0, 10);
}

export function humanDate(d: Date): string {
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

/** ISO 8601 timestamp with the +03:00 offset used across the site. */
export function isoWithOffset(d: Date): string {
  return `${ymd(d)}T00:00:00+03:00`;
}
