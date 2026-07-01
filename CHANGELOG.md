# CHANGELOG — Tendo

> Newest at the top. Dated, append-only. This file records what happened; `STATUS.md` explains where the project stands now.

## v0.5.13 — 2026-07-01 — Four-subject P7 core closeout audit completed

**Session theme:** Close out the post-push verification, teacher usefulness and non-maths subject-deepening sequence with a full four-subject audit.

**Added:**
- `docs/ops/four-subject-core-closeout-audit-2026-07-01.md` — final closeout audit for Maths, English, Science, Social Studies and teacher worksheet readiness.

**Changed:**
- `STATUS.md`, `HANDOFF.md`, `CHECKLIST.md` — updated to reflect the four-subject core closeout and current practice totals.
- `docs/ops/p7-english-quality-audit-2026-07-01.md` and `docs/ops/p7-science-quality-audit-2026-07-01.md` — clarified later deepening updates where earlier first-wave totals were stale.

**Verified totals:**
- Mathematics: 195 central-bank questions
- English: 140 central-bank questions
- Integrated Science: 160 central-bank questions
- Social Studies: 200 central-bank questions
- Total central question-bank pool: 695 questions

**Verified locally:**
- Production build passed with `✓ Generating static pages (147/147)`.

**Result:**
- The four-subject P7 core is product-level complete for present scope. Remaining work is enhancement and teacher-feedback iteration.

---

## v0.5.12 — 2026-07-01 — P7 Social Studies deepened with guided SST tasks and larger practice bank

**Session theme:** Continue deepening non-maths subjects toward maths-level product completeness, after English and Science.

**Changed:**
- `app/lib/social-topics.ts` — added guided map/history/development/organisation tasks for all 10 SST topics.
- `app/lib/question-bank.ts` — expanded Social Studies practice depth to 20 questions per topic.
- `docs/ops/p7-social-studies-deepening-pass-2026-07-01.md` — documented the SST deepening pass.
- Root docs updated to reflect Social Studies strengthening.

**Social Studies practice now:**
- 10 topics
- 20 questions per topic
- 200 Social Studies practice questions total
- guided map/history/development tasks for all 10 topics

**Verified locally:**
- Production build passed with `✓ Generating static pages (147/147)`.

**Result:**
- Social Studies now has stronger PLE-oriented depth inside the official NCDC Living Together in Africa outline.

---

## v0.5.11 — 2026-07-01 — P7 Science deepened with guided application tasks and larger practice bank

**Session theme:** Continue deepening non-maths subjects toward maths-level product completeness, after English.

**Changed:**
- `app/components/TopicTabs.tsx` — renamed the practice section to Guided practice so it fits Science and SST, not only English writing.
- `app/lib/science-topics.ts` — added guided application/experiment tasks for all 8 Science topics.
- `app/lib/question-bank.ts` — expanded Science practice depth to 20 questions per topic.
- `app/app/globals.css` — reused guided-practice card styles for Science.
- `docs/ops/p7-science-deepening-pass-2026-07-01.md` — documented the Science deepening pass.
- Root docs updated to reflect Science strengthening.

**Science practice now:**
- 8 topics
- 20 questions per topic
- 160 Science practice questions total
- guided application/experiment tasks for all 8 topics

**Verified locally:**
- Production build passed with `✓ Generating static pages (147/147)`.

**Result:**
- Science now has stronger classroom and exam-prep depth inside the official 8 NCDC topics.

---

## v0.5.10 — 2026-07-01 — P7 English deepened with writing-practice packs and larger practice bank

**Session theme:** Start deepening the non-maths subjects toward maths-level product completeness, beginning with English.

**Changed:**
- `app/lib/topics.ts` — topic notes now support optional writing-practice tasks.
- `app/components/TopicTabs.tsx` — Read tab renders writing-practice cards with prompts, planning steps, checklists and model openings.
- `app/lib/english-topics.ts` — added writing-practice packs for all 7 English topics.
- `app/lib/question-bank.ts` — expanded English practice depth to 20 questions per topic.
- `app/app/globals.css` — added writing-practice card styles.
- `docs/ops/p7-english-deepening-pass-2026-07-01.md` — documented the English deepening pass.
- Root docs updated to reflect English strengthening.

**English practice now:**
- 7 topics
- 20 questions per topic
- 140 English practice questions total
- writing-practice packs for all 7 topics

**Verified locally:**
- Production build passed with `✓ Generating static pages (147/147)`.

**Result:**
- English now has more depth inside fewer official NCDC themes, which is the correct standard for English compared with Maths.

---

## v0.5.9 — 2026-07-01 — Teacher worksheet generator made more classroom-ready

**Session theme:** After the Social Studies + English push was confirmed working, the next execution step was teacher-facing usefulness.

**Changed:**
- `app/components/WorksheetGenerator.tsx` — added subject pool summary cards, class/term/time/marks fields, quick length buttons, custom instructions and a separate answer-key section.
- `app/app/teacher/worksheet/page.tsx` — clarified the worksheet pool as question-bank topics and updated teacher-facing copy.
- `app/app/globals.css` — added styles for worksheet summary cards, quick picks, metadata grid and printable answer key.
- `docs/ops/teacher-worksheet-usefulness-pass-2026-07-01.md` — added audit note for the teacher-facing pass.
- Root docs updated to reflect the teacher usefulness pass.

**Verified locally:**
- Production build passed with `✓ Generating static pages (147/147)`.

**Result:**
- The worksheet generator is more credible for real classroom use: cleaner pupil sheet, separate answer key, better metadata and clearer subject/question-pool controls.

---

## v0.5.8 — 2026-07-01 — P7 English built, practiced, templated and completed enough for grouped push

**Session theme:** The founder intentionally stretched the Social Studies push and asked to continue into English before pushing. Religious Education was explicitly paused. This milestone completes P7 English enough to group with the unpushed Social Studies work.

**Added:**
- `app/lib/english-topics.ts` — all 7 NCDC-aligned P7 English topics across Terms I–III.
- `app/app/english/p7/page.tsx` — English topic landing page grouped by term.
- `app/app/english/p7/[topic]/page.tsx` — English topic detail route.
- `app/app/english/p7/[topic]/practice/page.tsx` — English practice route.
- `content/curriculum/p7-english.json` — NCDC-based English curriculum map.
- `docs/ops/p7-english-quality-audit-2026-07-01.md` — English quality and closeout audit.

**Changed:**
- `app/app/page.tsx` — English is now active.
- `app/components/TopicDiagram.tsx` — added English writing templates/diagrams for all 7 topics.
- `app/app/english/p7/page.tsx` — shows template counts and writing-template cues.
- `app/lib/question-bank.ts` — added English subject metadata and 12-question banks per topic.
- `app/components/WorksheetGenerator.tsx` — added English-only worksheets.
- `app/app/teacher/worksheet/page.tsx` — updated worksheet copy to include English.
- `app/lib/english-topics.ts` — deepened writing-heavy topics: Letter Writing; Rights, Responsibilities and Freedom; Environmental Protection; Ceremonies.
- Root docs updated to reflect English completion and the grouped Social Studies + English push.

**English coverage now live:**
1. School Holidays
2. Letter Writing
3. Examinations
4. Electronic Media
5. Rights, Responsibilities and Freedom
6. Environmental Protection
7. Ceremonies

**Verified locally:**
- Production build passed with `✓ Generating static pages (147/147)`.

**Result:**
- P7 English is complete enough to move on and to push as part of the grouped Social Studies + English milestone. Remaining English work is enhancement, not a core blocker.

---

## v0.5.7 — 2026-07-01 — P7 Social Studies built, diagrammed, practiced and completed enough to move on

**Session theme:** After the Science milestone was pushed, Social Studies became the next active subject. This milestone turns SST from coming-soon into a complete enough P7 subject build for current product scope.

**Added:**
- `app/lib/social-topics.ts` — all 10 NCDC-aligned P7 Social Studies topics under Living Together in Africa.
- `app/app/social-studies/p7/page.tsx` — Social Studies topic landing page grouped by term.
- `app/app/social-studies/p7/[topic]/page.tsx` — Social Studies topic detail route.
- `app/app/social-studies/p7/[topic]/practice/page.tsx` — Social Studies practice route.
- `content/curriculum/p7-social-studies.json` — NCDC-based SST curriculum map.
- `docs/ops/p7-social-studies-first-wave-audit-2026-07-01.md` — upgraded to completion audit after depth/diagram passes.

**Changed:**
- `app/app/page.tsx` — Social Studies is now active.
- `app/components/TopicDiagram.tsx` — added diagrams for all 10 SST topics.
- `app/app/social-studies/p7/page.tsx` — shows diagram counts and visual cues.
- `app/lib/question-bank.ts` — added Social Studies subject metadata and 12-question banks per topic.
- `app/components/WorksheetGenerator.tsx` — added Social Studies-only worksheets.
- `app/app/teacher/worksheet/page.tsx` — updated worksheet copy to include Social Studies.
- `app/lib/social-topics.ts` — heavy topics deepened after the first wave.
- Root docs updated to reflect SST completion status.

**SST coverage now live:**
1. Location of Africa on the Map of the World
2. Physical Features of Africa
3. Climate of Africa
4. Vegetation of Africa
5. People of Africa, Ethnic Groups and Settlement Patterns
6. Foreign Influence in Africa
7. Nationalism and the Road to Independence of Africa
8. Post-Independence Africa
9. Economic Developments in Africa
10. Major World Organisations

**Verified locally:**
- Production build passed with `✓ Generating static pages (132/132)`.

**Result:**
- P7 Social Studies is complete enough to move on. Remaining work is enhancement and teacher feedback, not core subject completion.

---

## v0.5.6 — 2026-07-01 — P7 Integrated Science built, diagrammed, practiced, audited, and added to worksheets

**Session theme:** After finishing Mathematics, the founder redirected the next-subject push from Social Studies to **P7 Integrated Science**. This milestone turns Science from unavailable/coming-soon into a serious active subject build.

**Added:**
- `app/lib/science-topics.ts` — P7 Integrated Science content data layer with all 8 NCDC-aligned topics.
- `app/app/science/p7/page.tsx` — Science strand/topic landing page.
- `app/app/science/p7/[topic]/page.tsx` — Science topic detail route.
- `app/app/science/p7/[topic]/practice/page.tsx` — Science practice route.
- `content/curriculum/p7-science.json` — P7 Science curriculum map based on the NCDC Primary Seven Set One Integrated Science outline.
- `docs/ops/p7-science-quality-audit-2026-07-01.md` — Science quality and closeout audit note.

**Changed:**
- `app/app/page.tsx` — Integrated Science is now an active subject card linking to `/science/p7`.
- `app/components/TopicDiagram.tsx` — added diagrams for all 8 Science topics and retained maths diagrams.
- `app/components/TopicTabs.tsx` — renders topic diagrams inside the Read flow.
- `app/components/PracticeRunner.tsx` — supports subject-specific back links so Science practice returns to Science, not Maths.
- `app/lib/question-bank.ts` — added subject metadata, Science banks, and 64 additional Science practice questions.
- `app/components/WorksheetGenerator.tsx` — added subject filters: Maths only, Science only, Mixed.
- `app/app/teacher/worksheet/page.tsx` — updated worksheet page copy/metadata to include Science.
- `app/app/globals.css` — added styles for Science/Maths landing diagrams and worksheet subject filters; removed stale merge-conflict markers.
- `app/lib/science-topics.ts` — deepened the heavy Science topics: Electricity and Magnetism, Simple Machines and Friction, Light Energy, and Population and Health.
- `STATUS.md`, `HANDOFF.md`, `CHECKLIST.md`, `DECISIONS.md`, `CHANGELOG.md` — updated root docs so they no longer incorrectly say Social Studies is the current next subject.

**Science coverage now live:**
1. Muscular-skeletal system
2. Electricity and magnetism
3. Energy resources in the environment
4. Simple machines and friction
5. Excretory system
6. Light energy
7. Interdependence of things in the environment
8. Population and health

**Quality notes:**
- Population and Health was handled with respectful, safety-focused wording instead of directly reproducing outdated/sensitive curriculum phrasing in learner-facing content.
- Science practice now has 15 questions per topic: 7 quiz questions plus 8 additional practice-bank questions.
- Worksheet generator can now cleanly generate Maths-only, Science-only, or mixed worksheets.

**Verified locally:**
- TypeScript check passed from `app/`.
- Production build passed with `✓ Generating static pages (111/111)`.

**Result:**
- P7 Integrated Science is live, structured, diagrammed, practice-enabled, worksheet-enabled, quality-audited and deepened.
- Honest status: Science is strong enough to demo and continue from. The founder can decide whether to accept this as “done enough” before moving to Social Studies.

---

## v0.5.5 — 2026-07-01 — P7 Mathematics completed, docs consolidated into repo, and handoff reset for Social Studies next

**Session theme:** Finish P7 Mathematics properly, close the documentation gap, and make the repo itself the single source of truth before moving to the next subject.

**Added:**
- `docs/ops/p7-maths-final-completion-audit-2026-07-01.md` — final founder-safe audit for whether mathematics can truthfully be treated as done.
- `docs/ops/p7-maths-diagram-visual-plan-2026-07-01.md` — consolidated in-repo plan for first-wave maths diagrams and visual support.

**Changed:**
- `app/lib/topics.ts` — expanded P7 Mathematics coverage substantially and cleared the held final wave with:
  - probability of numbers and events
  - regular polygons
  - algebra in real-life situations
  - plus the wider completed topic-build waves already prepared during the maths finish push
- `app/lib/question-bank.ts` — audited and corrected so the practice layer no longer lags behind the topic content.
- `app/app/math/p7/page.tsx` — reworked the maths landing page to feel more study-first, less flat, and more honestly structured; also fixed stale footer counting.
- `STATUS.md` — rewritten to reflect the real current state: P7 Mathematics is now complete enough to move focus, docs are being consolidated into the repo, and Social Studies is the next major execution target.
- `HANDOFF.md` — rewritten as a clean next-session operating brief for post-maths execution.
- `CHECKLIST.md` — updated so maths closeout is reflected accurately and the next core subject push is visible.
- `DECISIONS.md` — appended with the maths-completion and repo-docs-source-of-truth decisions.
- `CHANGELOG.md` — this entry records the maths closeout and documentation consolidation milestone.

**Removed / superseded operationally:**
- External workspace-only maths planning notes are no longer the authoritative source. Equivalent high-value docs now live inside `tendo-ug/docs/ops/`.

**Why this mattered:**
- The product could not safely move to another subject while maths still felt half-finished.
- The workspace had started splitting key documentation between repo files and external workspace docs, which is unsafe for your manual overwrite workflow.
- Root tracking docs had gone stale relative to the real maths state.

**Result:**
- P7 Mathematics is now in a founder-safe “done” state.
- The repo is now the intended home for live project documentation.
- The next subject can be started without losing the maths narrative or operational context.

**Next session:** Start Social Studies intentionally, using the same curriculum-first and study-ready standard used to finish Mathematics.

---

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
