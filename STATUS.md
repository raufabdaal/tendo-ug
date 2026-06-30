# STATUS — Tendo

*Updated: 2026-06-25, video wiring session*

> **Updated 2026-07-01: Trainup pilot — Phase 1 and 2 in progress.**

## Current focus: Trainup a Child Uganda pilot

We have a school ready to pilot: **Trainup a Child Uganda** (~3,000 primary students, affluent). The pilot will start with **one P7 Mathematics class** and, if it works, roll out school-wide and continue long-term.

The product positioning is **study**, not just revision. The platform is architected for all four PLE subjects, but the pilot build is **P7 Math only**.

## What shipped this session

### Phase 1 — Pilot plan and quality fix (done)
- `docs/ops/trainup-pilot-plan.md` with the four-phase quality-first approach.
- Decisions PILOT-001 to PILOT-004 logged in `DECISIONS.md`.
- Fixed the all-answers-are-A bias: shuffled **91 quiz questions** and **194 bank questions** so correct answers are spread across A/B/C/D.

### Phase 2 — Trainup branding and first three topics as full study material (done)
- `app/lib/school.ts` + `BrandBar` component: `/trainup` path shows Trainup branding.
- New route `/trainup` with a Trainup-branded landing page.
- Extended `TopicNote` type to support `learningObjectives`, `commonMistakes`, and `tryThis`.
- Rewrote the **Fractions**, **Percentages**, **Equations**, **Decimals**, **Venn diagrams**, **Area**, **Perimeter**, and **Volume** topics as full study modules (not revision notes).

## Still open from previous sessions

- **Fractions video is live:** `https://youtu.be/HuitLoh1Q9g`. The other two Math video slots are still placeholders.
- **Multi-subject Phase 5 work (English / Science / SST)** was not pushed to GitHub before the previous chat crash; those files existed only as uploaded docs. The current repo remains Math only.
- **School proposal PDF** at `docs/sales/school-proposal.pdf` is ready for Trainup outreach.

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
