# CHANGELOG — Tendo

> Newest at the top. Dated, append-only. This file records what happened; `STATUS.md` explains where the project stands now.

## v0.5.4 — 2026-06-30 — Documentation sweep begins for Trainup + NCDC study-ready alignment

**Session theme:** Before continuing deeper content work, the docs needed to stop behaving like two merged timelines. This sweep begins the cleanup so the repo reflects the real current state: Trainup pilot prep, study-first framing, NCDC alignment, and a move from demo-ready to study-ready.

**Added:**
- `docs/ops/update-handoff-protocol.md` — standing delivery protocol for manual overwrite workflow.
- `docs/ops/doc-sweep-plan-2026-06-30.md` — plan for cleaning the project documents in a reliable order.
- `docs/ops/ncdc-p7-math-coverage-audit-2026-06-30.md` — detailed curriculum coverage audit against `content/curriculum/p7-math.json`.
- `docs/ops/session-note-2026-06-30-next-step-alignment.md` — internal note capturing the founder's clarified direction for the next pass.

**Changed:**
- `STATUS.md` — rewritten to reflect the real current state: Trainup pilot prep, about 10 stronger study-ready topics, documentation cleanup, practice-layer alignment next.
- `HANDOFF.md` — rewritten to remove mixed historical states and give the next session a clean operating picture.
- `CHECKLIST.md` — rewritten so the current milestone is Trainup pilot prep and NCDC study-ready alignment, not older phase labels alone.
- `DECISIONS.md` — rewritten cleanly to remove conflict markers while preserving the major product, pilot, and workflow decisions.
- `CHANGELOG.md` — this entry documents the sweep itself and resets the file as a clean historical narrative.

**Why this mattered:**
- The docs had unresolved merge-conflict leftovers.
- The repo had started telling two stories at once: older video-first work and newer Trainup pilot / study-ready work.
- Future content work would keep inheriting confusion unless the documentation layer was cleaned first.

**Result:**
- The project docs now point more clearly at the real next work:
  1. finish the doc sweep
  2. audit the practice/question layer
  3. standardise the 3 lighter published topics
  4. continue building missing high-priority NCDC topics

**Next session:** Practice/question alignment audit, then topic standardisation and curriculum-structure cleanup.

---

## v0.5.3 — 2026-06-30 — Trainup branding and first major study-module rewrites

**Session theme:** Shift from generic revision/demo product toward a school-facing study platform for the Trainup pilot.

**Added:**
- `app/lib/school.ts` — school config layer with Tendo and Trainup a Child Uganda configs.
- `app/components/BrandBar.tsx` — school-brand bar for Trainup pathing.
- `app/app/trainup/page.tsx` — Trainup-branded landing page.
- Extended `TopicNote` interface with `learningObjectives`, `commonMistakes`, and `tryThis`.

**Changed:**
- Rewrote the following topics into fuller NCDC-aligned study modules:
  - Fractions
  - Proportion and percentages
  - Equations
  - Decimals
  - Venn diagrams
  - Area
  - Perimeter
  - Volume
  - Money
  - Mean, median, mode and range
- `app/components/TopicTabs.tsx` — updated to render the richer study sections and include them in the listen-aloud flow.
- `app/app/globals.css` — styling support for newer study-module sections and branding work.

**Verified locally:**
- Build succeeded with the new `/trainup` route.

**Next session at the time:** Continue the pilot-prep study rewrite work or audit curriculum coverage.

---

## v0.5.2 — 2026-06-30 — Trainup pilot plan and answer-bias quality fix

**Session theme:** Prepare the product for a real school pilot by fixing obvious quality issues before any school sees the product.

**Added:**
- `docs/ops/trainup-pilot-plan.md` — phased pilot-prep plan.
- `scripts/shuffle-correct-answers.js` — script to randomise answer positions.

**Changed:**
- Shuffled correct-answer positions across topic quizzes and the question bank.
- Logged Trainup pilot decisions in the operational docs.

**Why this mattered:**
- The answer-position bias was a credibility problem for teachers and students.
- The project needed a quality-first pilot plan before broader rollout.

---

## v0.5.1 — 2026-06-25 — Video wiring for the Watch tab

**Session theme:** Make the Watch tab ready for real topic-level video embeds without requiring repeated component rewrites.

**Added:**
- Optional `videoUrl?: string` field on topics.
- `docs/ops/notebooklm-video-guide.md`.
- `toEmbedUrl()` helper and responsive video wrapper styling.
- Placeholder video comments on starter topics.

**Changed:**
- Watch tab now embeds video when `videoUrl` exists and shows an honest placeholder otherwise.

**Verified locally:**
- Build succeeded.
- Topic-page watch behaviour spot-checked.

---

## v0.5.0 — 2026-06-25 — Practice mode, worksheet generator, and UI cleanup

**Session theme:** Turn the product from a fixed-topic demo into something with repeatable student practice and teacher utility.

**Added:**
- Static question bank
- Practice mode
- Worksheet generator
- Content-sources documentation

**Changed:**
- Listen tab removed as a full tab and moved into the reading experience.
- Review-pill UI removed.
- Home and teacher pages updated to surface the new tools.

**Verified locally:**
- Build succeeded.
- Practice and worksheet flows worked.

---

## v0.4.0 — 2026-06-25 — More topics, stronger teacher dashboard, and Fellowship strategy

**Added:**
- 10 more P7 Math topics
- 2 more past papers
- demo class
- richer teacher dashboard
- report-a-problem flow
- teacher contribution strategy docs

**Changed:**
- Sales materials and dashboard flows expanded.

---

## v0.3.0 — 2026-06-25 — Past papers, topic tabs, and teacher dashboard foundations

**Added:**
- Past paper system
- student attempt flow
- teacher browse mode
- Watch / Listen / Read structure
- teacher dashboard

**Changed:**
- Home page and topic page evolved into a more complete study flow.

---

## v0.2.1 — 2026-06-24 — Next.js security/version bump for Vercel deploy

**Changed:**
- Next.js moved to a patched 15.x line.
- React moved to stable 19.

**Why:**
- Vercel blocked the older vulnerable framework version.

---

## v0.2.0 — 2026-06-24 — Phase 1 app shell built

**Added:**
- Next.js app setup
- home route
- topic list route
- topic detail route
- first 3 topics
- quiz + progress tracking

**Verified locally:**
- Local build and route checks passed.

---

## v0.1.0 — 2026-06-24 — Foundation

**Added:**
- project skeleton
- session docs
- P7 Math curriculum map
- product/spec/sales docs
- clickable preview demo

**Cost:**
- UGX 0 / USD 0.
