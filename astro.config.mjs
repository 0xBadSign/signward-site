import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://signward.app',
  output: 'static',
  // No trailing slash, and emit page.html rather than page/index.html, so blog URLs
  // match the hand-written pages (/privacy, /donate) and the canonical tags exactly,
  // with no 308 slash redirect.
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [
    sitemap({
      customPages: ['', 'privacy', 'incidents', 'feedback', 'donate'].map((p) => 'https://signward.app/' + p),
    }),
  ],
});
