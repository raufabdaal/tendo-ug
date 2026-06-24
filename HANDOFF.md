# HANDOFF — for the next session

*Written: 2026-06-24, end of Phase 1*

## TL;DR for the next agent

Read in this order:
1. `AGENT_BRIEF.md` (founder's working style — non-negotiable)
2. `STATUS.md` (Phase 0 + Phase 1 done locally; only blocker is the redeploy)
3. `DECISIONS.md` (read DEV-001 through DEV-007 to understand all the choices already made)
4. `docs/spec/PRD.md` and `docs/spec/content-guidelines.md`
5. `content/curriculum/p7-math.json` (the spine for Phase 2 content work)

## Where you're picking up

Phase 1 is **functionally done**:
- Next.js 15 app in `app/` with 3 routes
- 3 fully-built topics (Venn diagrams, Roman numerals, Fractions) — notes + 7-question quizzes each
- localStorage progress tracking via `components/ProgressBadge.tsx` and `components/Quiz.tsx`
- Build + start verified locally (see STATUS.md "Verified locally" section)

**The only thing left for Phase 1 is the deploy.** That's a founder task. See `MANUAL_TASKS.md` MT-004.

## Next session = Phase 2

**Goal:** 10+ topics live, content-generation workflow productionised.

**Order of operations:**

1. Confirm live URL works (post MT-004). If 404 again, walk through Vercel settings together.
2. Write `docs/prompts/topic-note.md` and `docs/prompts/quiz.md` — the reusable AI prompts that follow `docs/spec/content-guidelines.md` exactly.
3. Build a small Node script `scripts/draft-topic.mjs` that:
   - Reads `content/curriculum/p7-math.json`
   - Finds sub-topics with `status: todo`
   - Calls Groq with the prompt
   - Writes draft to `content/topics/_review-queue/<id>.mdx`
   - Marks the curriculum entry as `status: drafted`
4. Founder reviews drafts manually (open file, edit, move to `content/topics/<id>.mdx`).
5. Update `lib/topics.ts` to read from MDX (or migrate to MDX rendering — defer this decision based on how many topics we have).
6. Aim for 10 topics by end of session.

## Watch-outs (from `DEV_JOURNAL.md`)

- **Vercel monorepo gotcha:** if Next.js is inside `app/` not at repo root → set Framework Preset = Next.js explicitly AND set Root Directory = `app`. This is the exact thing that caused the 404 the founder hit. MT-004 has the steps.
- **No em dashes** in user-facing copy. Check every new topic note before merging.
- **Coupled file changes must land together** — when adding a topic, both `lib/topics.ts` AND any MDX file (Phase 2) must commit in one PR/push.
- **localStorage runs only in the browser** — use `"use client"` and `typeof window !== "undefined"` checks (already done in `Quiz.tsx`/`ProgressBadge.tsx`).

## Architectural reminders

- Phase 1 chose plain CSS over Tailwind (DEV-007). Don't introduce Tailwind without flagging.
- Phase 1 chose inline `lib/topics.ts` data over MDX (DEV-006). When you switch to MDX in Phase 2, log a DEV-008 explaining when/why.
- No auth in v0 (DEV-002). Resist the urge to add Clerk/Supabase "while we're at it."
- The `content/curriculum/p7-math.json` is the canonical syllabus map. If you add a topic in `lib/topics.ts`, check the `id` matches a sub-topic in the JSON.

## Open questions to ask the founder at session start

1. Did the redeploy work? Live URL?
2. Are you actively pitching schools this week? If yes, which topics matter most to add next?
3. Any teacher willing to do content review for Phase 2?
