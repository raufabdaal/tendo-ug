# HANDOFF — for the next session

*Written: 2026-06-25, end of Phase 4*

## TL;DR for the next agent

Read in this order:
1. `AGENT_BRIEF.md` — founder's working style
2. `STATUS.md` — Phases 0-4 done; Phase 5 has multiple paths, founder picks
3. `DECISIONS.md` — DEV-001 through DEV-017. Newest: DEV-014/15/16/17 explain Practice + Worksheets + auto-verify
4. `docs/spec/content-sources.md` — how content is sourced and what we tell schools
5. `docs/sales/value-prop.md` — current "six features that turn maybe into yes"

## Where you're picking up

Phase 4 is **functionally done**. Site is feature-rich enough for a serious pitch:
- 13 topics with notes, worked examples, quizzes
- 3 past papers (student + teacher modes)
- Endless Practice on every topic
- Worksheet generator for teachers
- Class dashboard with charts, drill-down, demo-class seeding
- Teacher Fellowship feedback loop

The only step left for Phase 4 is the founder's push.

## Next session = Phase 5 (founder picks ONE)

Lay out the four options at session start; the founder picks one.

### Option A — Supabase backend (the unlock for paid pilots)
- Free Supabase account, schema for `schools`, `class_codes`, `students`, `attempts`, `reports`
- Class-code join flow (`/join/[code]`)
- Migrate Quiz, PaperAttempt, PracticeRunner to write to Supabase + localStorage
- Dashboard reads real data instead of demo class
- ~2 sessions of work

### Option B — Content depth
- Bank: 210 → 350 questions (push to ~25/topic)
- 2 more past papers (PLE 2021, 2022)
- Promote 5 "coming soon" topics (Prime factorisation, Integers, Travel graphs, Probability intro, Algebraic expressions) to full topics
- ~1 session

### Option C — NotebookLM videos for top 10 topics
- Founder generates videos (manual, in NotebookLM)
- We add `videoUrl?: string` to Topic, wire Watch tab to embed YouTube when present
- ~0.5 session on our side; founder's time on NotebookLM is the bottleneck

### Option D — P6 Math content track
- Build `content/curriculum/p6-math.json` (80% overlap with P7)
- Add P6 topic shells to home page
- Start porting topics from P7 to P6 versions (lighter content)
- ~2 sessions

## Watch-outs

- **Vercel deploy blocks vulnerable Next.js versions.** Currently pinned at 15.5.19. Bump if a new CVE drops.
- **Push to `main` auto-promotes to production.** The "Redeploy" button does NOT.
- **The question bank now drives multiple features.** When adding/removing/editing a question, both Practice mode AND worksheet output reflect the change. Bank quality matters more than ever.
- **localStorage keys in use:** `tendo:progress` (topic quiz scores), `tendo:papers` (paper attempts), `tendo:practice` (practice sessions), `tendo:reports` (problem reports), `tendo:demo-class` (seeded demo students). When Phase 5A (Supabase) migrates, all five need a migration path.
- **No em dashes in user-facing copy.** Still applies.
- **Watch tab is per-topic placeholder.** When we have a video for one topic, just add `videoUrl` to that topic; the panel logic should handle "has video" vs "no video" gracefully.

## Architectural reminders

- Plain CSS, no Tailwind (DEV-007)
- Data in TypeScript not MDX (DEV-006)
- No auth, localStorage only — UNTIL Phase 5A flips this
- No streaks/gamification beyond the practice streak counter (DEV-010 still applies; the practice counter is per-session, not persistent leaderboards)
- All content auto-verified in v0; honest content-sources doc backs us up (DEV-016)
- Pre-generated bank, not runtime AI (DEV-017) — unless we explicitly add a "Generate fresh" button in Phase 6+

## Open questions to ask the founder

1. Did the Phase 4 push work? Tested the worksheet generator end-to-end (generate → print)?
2. Which of options A/B/C/D should we do next?
3. Has any school given a verbal "yes" yet? Their needs reshape priorities.
4. The bank is at ~210 questions. Comfortable shipping at that scale, or push to 350 before Phase 5?
