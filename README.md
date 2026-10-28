# Signward website and blog

The public website and security blog for [Signward](https://signward.app), a wallet-drainer and phishing guard for Chrome and Firefox.

Built with [Astro](https://astro.build) and deployed to Cloudflare Pages. The blog explains how crypto scams work and how to avoid them, in plain language and with sources.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs to dist/
```

## How it deploys

A GitHub Action builds the site and deploys `dist/` to the Cloudflare Pages project on every push to `main`. Blog hero images are generated at deploy time and committed back; a post always falls back to a branded card if image generation is unavailable.

The browser extension itself lives in a separate repository.
