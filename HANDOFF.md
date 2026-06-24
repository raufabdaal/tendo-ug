# HANDOFF — for the next session

*Written: 2026-06-25, end of Phase 2*

## TL;DR for the next agent

Read in this order:
1. `AGENT_BRIEF.md` — founder's working style, non-negotiable
2. `STATUS.md` — Phase 0, 1, 2 all done; Phase 3 (video polish) is next
3. `DECISIONS.md` — DEV-001 through DEV-011. **Especially DEV-010 and DEV-011** explaining why no streaks/parent-app and why we built dashboard before video
4. `docs/sales/value-prop.md` — the "three features that turn maybe into yes" section is the new pitching frame
5. `content/curriculum/p7-math.json` — the spine for content work

## Where you're picking up

Phase 2 is **functionally done**:
- Past PLE papers (student + teacher modes) at `/papers`
- Watch / Listen / Read tabs on every topic (audio via free browser Web Speech API)
- Teacher dashboard at `/teacher` with localStorage-backed activity table + parent-ready report export

The only step left for Phase 2 is the founder's `git push`. Site auto-deploys to production.

## Next session = Phase 3 (demo polish)

**Goal:** The Watch tab is no longer a placeholder. Past papers count goes 1 → 3. Topic count goes 3 → 8.

**Order of operations:**

1. Confirm with founder that Phase 2 deployed cleanly. Visit the 4 new routes in incognito.
2. **MT-006:** Walk founder through generating ~10 NotebookLM videos for the highest-stakes topics. This is a founder-only manual task (NotebookLM has no API). Founder uploads to a Tendo YouTube channel; we embed by URL.
3. Update `app/lib/topics.ts` `Topic` interface to add an optional `videoUrl?: string` field.
4. Update `TopicTabs.tsx` Watch panel to render the YouTube embed when `videoUrl` is present; keep the "Coming soon" panel when not.
5. Ingest 2 more real PLE Math papers (2019, 2020) into `lib/papers.ts`. Source: ecolebooks, advance-africa.
6. Add 5 more topic notes (Decimals, Percentages, Area, Equations, Substitution) — each one becomes a real topic page AND moves out of `COMING_SOON`.

## Watch-outs (from `DEV_JOURNAL.md` and recent lessons)

- **Vercel deploy via `git push` auto-promotes to production.** The "Redeploy" button does NOT. (Lesson 2026-06-24 in `DEV_JOURNAL.md`.)
- **Next.js version must be patched.** Vercel actively blocks vulnerable versions. Currently pinned at 15.5.19; bump if a new CVE drops.
- **Web Speech API quality varies by device.** Chrome on Android = decent. Safari on iOS = robotic. Document this is "good enough for v0, swap to ElevenLabs in Phase 5+ if revenue justifies."
- **No em dashes** in user-facing copy. Check new topic notes before merging.
- **Honest UI rule:** the teacher dashboard explicitly tells the user the data is per-device. Don't remove that banner until Phase 4 makes it cross-device.

## Architectural reminders

- Data still lives in TypeScript (`lib/topics.ts`, `lib/papers.ts`). MDX migration deferred to Phase 3 or later, when topic count justifies it. (DEV-006.)
- No Tailwind, no UI library. All styling in `app/app/globals.css`. (DEV-007.)
- No auth in v0; class codes + Supabase in Phase 4. (DEV-002, DEV-009.)
- Browser TTS over paid TTS. (DEV-011 reasoning.)
- No streaks/leaderboards/parent-app. (DEV-010.)

## Open questions to ask the founder at session start

1. Did the Phase 2 push work? Live URLs verified?
2. Do you have a YouTube channel for Tendo, or do we set one up as MT-006?
3. Which 10 topics should get videos first? (Recommend: the 5 we'll add as full notes + the 3 already live + 2 high-PLE-frequency topics like Percentages and Time.)
4. Any school showing interest now that you've been demoing? That changes what we polish next.
