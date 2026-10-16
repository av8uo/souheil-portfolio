# Souheil — Portfolio

Personal website of Souheil, full-stack app developer and AI Agents Architect.

**Stack:** Next.js (static export), React, TypeScript, Tailwind CSS, Motion.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
```

The static site is written to `out/` and served by Cloudflare Workers
(static assets, config in `wrangler.jsonc`). Deploy with:

```bash
npm run build && npx wrangler deploy
```

## Edit content

All text (services, projects, stack, certifications) lives in `lib/data.ts`.
