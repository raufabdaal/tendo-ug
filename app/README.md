# Tendo — Next.js app (Phase 1)

This is the runnable Next.js 15 app for Tendo. The non-code parts of the project (docs, sales, curriculum source) live one level up at `../`.

## Run locally

From the project root:

```bash
./launch.sh        # macOS / Linux
launch.bat         # Windows
```

Or directly:

```bash
cd app
npm install
npm run dev
# → http://localhost:3000
```

## Deploy to Vercel

Set in Vercel project settings:
- **Framework Preset:** Next.js (explicit, do not rely on auto-detect)
- **Root Directory:** `app`
- **Include source files outside of Root Directory:** off for Phase 1 (we don't read sibling folders yet)

## What's here in Phase 1

- `app/` — App Router pages (`/`, `/math/p7`, `/math/p7/[topic]`)
- `lib/topics.ts` — three fully-built topics (Venn, Roman, Fractions) as TypeScript data
- `components/Quiz.tsx` — client-side quiz runner with localStorage persistence
- `components/ProgressBadge.tsx` — per-topic "best score" badge

## What's not here yet (Phase 2+)

- MDX-driven content (currently inline TypeScript)
- Past PLE papers
- Per-school subdomains
- Teacher report dashboard
