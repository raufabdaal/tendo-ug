# STATUS — Tendo

*Updated: 2026-06-25, video wiring session*

## Current focus: Video support is wired; first video locked in; awaiting the other 2 Math videos

Phase 4 (Practice + Worksheets + UI cleanup) is done locally. The GitHub repo is at the Phase 4 state (Math only). The previous session's multi-subject Phase 5 work (English / Science / SST) was **not pushed to GitHub** before the chat crashed; those files existed only as uploaded docs, not in the repo.

The Watch tab now supports per-topic YouTube embeds. **Fractions video is live:** `https://youtu.be/HuitLoh1Q9g`. Percentages and Equations still have placeholder comments waiting for URLs.

Site live on Vercel at `tendo-ug.vercel.app`.

## What shipped this session

### 1. Per-topic video wiring
- `videoUrl?: string` added to the `Topic` interface in `app/lib/topics.ts`.
- `app/components/TopicTabs.tsx` now embeds a YouTube video when `videoUrl` is set, and shows the placeholder when it is not.
- Added `toEmbedUrl()` helper so you can paste a normal YouTube watch link and the tab converts it to an embed URL.
- Responsive `.video-wrapper` CSS added to `app/app/globals.css`.
- Placeholder `// videoUrl: ...` comments added to `fractions-core`, `proportion-percentages`, and `equations`.

### 2. NotebookLM video guide
- New doc: `docs/ops/notebooklm-video-guide.md` with step-by-step workflow, tool recommendations, and prompts for the 3 starter topics.

## Phase 4 recap (already shipped)

### 1. ~210-question bank (`app/lib/question-bank.ts`)
- 13 topics × 12–15 questions each, difficulty-tagged (easy/medium/hard)
- Drives both Practice mode and Worksheet generator
- Pre-generated, zero-ops, offline-capable (DEV-017)

### 2. Endless Practice mode
- Route: `/math/p7/[topic]/practice` (one per topic, 13 routes)
- Streak counter, accuracy %, session stats
- Different questions every round
- "Start practice" CTA added to every topic page

### 3. Worksheet generator (the killer teacher feature)
- Route: `/teacher/worksheet`
- Topic chips (pick any combination), count (1-50), difficulty filter, answer-key on/off
- School name + title fields for branding
- Generate → Shuffle → Print or Copy as text
- Output is print-ready (special @media print styles)

### 4. UI cleanup
- Listen tab removed; Web Speech TTS now lives as a "🔊 Listen" icon-button inside the Read view (cleaner)
- Watch tab stays as per-topic "coming soon" — ready to be initiated topic-by-topic with NotebookLM clips later
- Visible review-pending pill removed; content auto-verified (DEV-016)

### 5. Content sourcing transparency
- New doc `docs/spec/content-sources.md` — honest record of NCDC + UNEB sources, our review process, what to say to a head teacher who asks

## Verified locally

- `npm run build` → **43 routes**, all SSG, no errors
- All 7 spot-tested routes return HTTP 200
- Bank: ~210 questions verified by grep on the source

## What's next 🎯

### Immediate (founder)
**Generate the first 3 Math videos.** Follow `docs/ops/notebooklm-video-guide.md` for Fractions, Percentages, and Equations. Upload to YouTube, then paste the URLs into `app/lib/topics.ts` by uncommenting the `// videoUrl: ...` lines and replacing the placeholder. Push to `main`; Vercel auto-deploys.

After pushing, test in incognito:
- `https://tendo-ug.vercel.app/math/p7/fractions-core` — click **Watch** and confirm the video plays.
- `https://tendo-ug.vercel.app/math/p7/proportion-percentages` — should show placeholder until a URL is added.
- `https://tendo-ug.vercel.app/teacher/worksheet` — still the killer demo for teachers.

### Phase 5 options (after the 3 videos are live)
- **More Math videos** — repeat the pipeline for the remaining 10 topics, or at least the top 5 high-stakes ones.
- **Deepen subjects** — add English / Science / SST (this requires a multi-subject refactor; the uploaded Phase 5 docs describe it, but the current GitHub repo is still Math-only).
- **Supabase backend** — real class codes, cross-device progress, real dashboard not demo. Unlocks paid pilots.
- **More content depth** — push bank to 300+ questions; add 2 more PLE papers (2021, 2022); promote 5 "coming soon" topics to full topics.
- **P6 Math** — start parallel content track for the second class.

## Decisions made this session

See `DECISIONS.md`:
- DEV-018: Per-topic `videoUrl` + YouTube embed + placeholder-first approach
- DEV-017: Pre-generated bank, not runtime AI generation
- DEV-016: Auto-verify content, hide pill, keep field (supersedes DEV-013)
- DEV-015: Watch tab placeholder kept, Listen demoted to icon
- DEV-014: Practice (unlimited) vs Worksheet (controlled sampling) split

## Cost so far

**UGX 0 / USD 0.** No change.
