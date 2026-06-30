# HANDOFF — for the next session

*Written: 2026-06-25, end of video-wiring session*

## TL;DR for the next agent

Read in this order:
1. `AGENT_BRIEF.md` — founder's working style
2. `STATUS.md` — Phase 4 done; video wiring just landed; founder is generating the first 3 Math videos
3. `DECISIONS.md` — DEV-001 through DEV-018. Newest: DEV-018 (per-topic videoUrl + YouTube embed + placeholder-first)
4. `docs/ops/notebooklm-video-guide.md` — the prompts and workflow the founder is following
5. `docs/spec/content-sources.md` — how content is sourced and what we tell schools

## Where you're picking up

The project is in **pilot-prep mode for Trainup a Child Uganda**.

**Phase 1 and 2 are done:**
- All-answers-are-A bias fixed (91 quiz + 194 bank questions now randomized).
- `/trainup` path shows Trainup branding and a school-specific landing page.
- **Fractions, Percentages, Equations, and Decimals** are rewritten as full study modules (learning objectives, common mistakes, try-this exercises).
- The `TopicNote` type now supports the new study structure.

**Product framing:** Tendo is a **study** platform. The proposal PDF reflects this.

**Still ready from earlier:**
- Watch tab video support; Fractions video is locked in.
- School proposal PDF at `docs/sales/school-proposal.pdf`.
- The app is still Phase 4 / Math only. The multi-subject Phase 5 work from the crashed chat was not pushed to GitHub.

**Next decision:** Continue Phase 2 topic-by-topic. I recommend the next topic be **Percentages** or **Equations** — both high-stakes and both already have strong question banks. Or we can pause to audit the NCDC P7 syllabus coverage before writing more content.

## Next session (founder picks)

### If the founder has 3 video URLs
- Uncomment the `// videoUrl: ...` lines in `app/lib/topics.ts` for the three topics.
- Replace the placeholder with the real YouTube watch link (e.g., `https://www.youtube.com/watch?v=ABC123`).
- Run `npm run build` and `npm run dev` to verify the Watch tab loads the video.
- Push to `main`. Vercel auto-deploys and auto-promotes.

### If the founder wants to expand video coverage before deepening subjects
- Pick the next 2–3 high-stakes Math topics (e.g., `area`, `volume`, `venn-diagrams-2-events`).
- Add `// videoUrl: ...` placeholder comments to those topics.
- Copy the relevant prompt from the guide and adapt it to the topic's worked example.
- No code changes needed beyond adding the URL once the video is uploaded.

### If the founder wants to pick up the multi-subject Phase 5 work
- The uploaded docs (from the crashed chat) describe a Phase 5 state with English, Science, and SST live.
- **That code is not in the GitHub repo.** The repo is still Math-only at the end of Phase 4.
- Rebuilding it means: adding a `Subject` registry, refactoring `topics.ts`/`papers.ts`/`question-bank.ts` with `subjectId`, and creating parallel route trees for each subject. This is a full session, not a quick add-on.

## Watch-outs

- **Vercel deploy blocks vulnerable Next.js versions.** Currently pinned at 15.5.19. Bump if a new CVE drops.
- **Push to `main` auto-promotes to production.** The "Redeploy" button does NOT.
- **The question bank now drives multiple features.** When adding/removing/editing a question, both Practice mode AND worksheet output reflect the change. Bank quality matters more than ever.
- **localStorage keys in use:** `tendo:progress` (topic quiz scores), `tendo:papers` (paper attempts), `tendo:practice` (practice sessions), `tendo:reports` (problem reports), `tendo:demo-class` (seeded demo students). When the Supabase phase migrates, all five need a migration path.
- **No em dashes in user-facing copy.** Still applies.
- **YouTube watch links are auto-converted to embeds.** You can paste either `https://www.youtube.com/watch?v=VIDEO_ID` or `https://youtu.be/VIDEO_ID` — the `toEmbedUrl` helper in `TopicTabs` will handle it.
- **Placeholder comments must be replaced before the videos are visible.** The placeholder text remains on the site until the real URL is uncommented.

## Architectural reminders

- Plain CSS, no Tailwind (DEV-007)
- Data in TypeScript not MDX (DEV-006)
- No auth, localStorage only — UNTIL the Supabase phase flips this
- No streaks/gamification beyond the practice streak counter (DEV-010 still applies; the practice counter is per-session, not persistent leaderboards)
- All content auto-verified in v0; honest content-sources doc backs us up (DEV-016)
- Pre-generated bank, not runtime AI (DEV-017) — unless we explicitly add a "Generate fresh" button in a later phase
- Optional `videoUrl` per topic; no global video config needed (DEV-018)

## Open questions to ask the founder

1. Did you generate the 3 Math videos with NotebookLM? Do you have the YouTube URLs ready?
2. Did the Watch tab load the video correctly after you pasted the URL?
3. After videos, should we make more Math videos or pick up the multi-subject Phase 5 work?
4. Has any school given a verbal "yes" yet? Their needs reshape priorities.
