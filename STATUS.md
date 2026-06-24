# STATUS — Tendo

*Updated: 2026-06-25, end of Phase 4 session*

## Where we are: **Phase 4 — Practice + Worksheets + UI cleanup (DONE LOCALLY)**

Phases 0-3 also done. Site live on Vercel at `tendo-ug.vercel.app`.

## What shipped this session

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
**Push to GitHub.** Vercel auto-deploys, auto-promotes to production (push-to-main rule, DEV_JOURNAL 2026-06-24).

Then in incognito, test these new URLs:
- `https://tendo-ug.vercel.app/math/p7/fractions-core/practice`
- `https://tendo-ug.vercel.app/teacher/worksheet` (generate one, print it, that's the killer demo)

### Phase 5 options (founder picks)
- **Supabase backend** — real class codes, cross-device progress, real dashboard not demo. Unlocks paid pilots.
- **More content depth** — push bank to 300+ questions; add 2 more PLE papers (2021, 2022); add 5 more "coming soon" topics as full topics. Stays free-tier.
- **NotebookLM video pipeline** — manual generation, YouTube embed wiring, ~10 high-stakes topics first.
- **P6 Math** — start parallel content track for the second class.

## Decisions made this session

See `DECISIONS.md`:
- DEV-017: Pre-generated bank, not runtime AI generation
- DEV-016: Auto-verify content, hide pill, keep field (supersedes DEV-013)
- DEV-015: Watch tab placeholder kept, Listen demoted to icon
- DEV-014: Practice (unlimited) vs Worksheet (controlled sampling) split

## Cost so far

**UGX 0 / USD 0.** No change.
