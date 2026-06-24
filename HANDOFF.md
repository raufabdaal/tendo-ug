# HANDOFF — for the next session

*Written: 2026-06-24, end of Phase 0*

## TL;DR for the next agent

Read in this order:
1. `AGENT_BRIEF.md` (founder's working style — non-negotiable)
2. `STATUS.md` (you're at the end of Phase 0; Phase 1 is next)
3. `docs/spec/PRD.md` (what we're building and why)
4. `docs/sales/value-prop.md` (the wedge — needed if founder asks sales questions)
5. `content/curriculum/p7-math.json` (the spine: every topic that will ever exist in v0)

## Where you're picking up

Phase 0 is **closed**. The workspace skeleton, all foundational docs, and the static sales demo (`preview.html`) are in place. There is no Next.js code yet.

## Next session = Phase 1

**Goal:** A live URL on Vercel with 3 fully-built topics that a head teacher can click through.

**Order of operations:**

1. Show the founder `STATUS.md` and confirm Phase 1 is still the goal.
2. Trigger **MT-001** (create GitHub repo) — give numbered steps, do not ask for a PAT.
3. Trigger **MT-002** (connect to Vercel) — same.
4. Scaffold Next.js 15 + Tailwind + MDX inside `app/` (mirror Sasa's setup; reference `docs/spec/design-philosophy.md`).
5. Build the 3 routes:
   - `/` — subject picker (Math only active; English/Science/SST shown but "Coming soon — Phase 2")
   - `/math/p7` — theme/topic list rendered from `p7-math.json`
   - `/math/p7/[topic]` — notes (MDX) + quiz (auto-graded MCQ) + "next topic" CTA
6. Wire localStorage for progress.
7. Deploy and **fetch the live URL to verify** (per `DEV_JOURNAL.md` Part 4 — don't trust the build log).
8. Update STATUS / HANDOFF / CHANGELOG. Move on to content generation (Phase 2).

## Watch-outs (from `DEV_JOURNAL.md`)

- **Vercel monorepo gotcha:** if Next.js is inside `app/` not at repo root, set Framework Preset = Next.js explicitly AND enable "Include source files outside of Root Directory" so `content/` is reachable at build.
- **No em dashes** in user-facing copy. They read as "AI-generated." Use commas, semicolons, or parens.
- **No design polish before functionality.** Restraint over decoration. Real solid buttons.
- **Coupled file changes must land together** — call them out at end of any multi-file edit.

## Open questions for the founder (ask at session start)

1. Is the name "Tendo" final, or testing it with a few people first?
2. Any specific school we're pitching first? That changes the URL we put in MT-001 (`tendo-<schoolname>.vercel.app` is a nice touch).
3. Confirm: build P7 first, P6 right after? (Per DEV-001.)
