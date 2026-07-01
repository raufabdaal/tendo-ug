# DECISIONS — Tendo (append-only)

> Architecture, product, pilot, and workflow decisions. Historical entries are preserved. Superseded items stay for context.

---

## DEV-001 · 2026-06-24 · Scope = P6 & P7 only (PLE-bound), not P1

**Previous decision:** Founder's early brief implied P1 and P7.
**Problem reported:** Founder clarified that P1 was a typo and the correct scope is P6 and P7.
**New decision:** v0 serves **P7 first** and **P6 second**.
**Reasoning:** P6 and P7 are aligned around PLE preparation and are commercially much easier to serve together than P1 and P7.
**Tracked across:** `docs/spec/PRD.md`, `content/curriculum/p7-math.json`, sales docs.

---

## DEV-002 · 2026-06-24 · No login in v0; localStorage progress only

**Previous decision:** open question.
**New decision:** v0 has **no login**. Progress is stored in `localStorage`.
**Reasoning:** Faster demo, lower build complexity, zero cost, no sign-up friction for school pilots.
**Tracked across:** `docs/spec/PRD.md`, `preview.html`, app state handling.

---

## DEV-003 · 2026-06-24 · B2B2C model: sell to schools, schools resell to parents

**Previous decision:** model was still fluid.
**New decision:** **Schools are the customer.**
**Reasoning:** Better CAC, trusted payment channel, stronger distribution, better alignment with school incentives.
**Tracked across:** `docs/sales/*`, `docs/spec/PRD.md`.

---

## DEV-004 · 2026-06-24 · Hybrid AI-draft + human review content workflow

**Previous decision:** open question.
**New decision:** Content is drafted quickly, then reviewed and refined before school-facing use.
**Reasoning:** Faster than fully manual authoring, safer than unreviewed AI output.
**Tracked across:** `docs/spec/content-guidelines.md`, prompts, content workflow.

---

## DEV-005 · 2026-06-24 · Math only in v0; other subjects remain clearly marked as coming soon

**Previous decision:** broader subject ambition existed.
**New decision:** v0 ships **Mathematics only**.
**Reasoning:** Simplifies delivery and makes the strongest measurable school story.
**Tracked across:** home page, PRD, sales docs.

---

## DEV-006 · 2026-06-24 · Phase 1 content lives in TypeScript, not MDX

**Previous decision:** MDX had been considered.
**New decision:** Use `app/lib/topics.ts` as the main content layer for Phase 1 and the early product.
**Reasoning:** Faster iteration, strict typing, lower setup overhead.
**Tracked across:** `app/lib/topics.ts`, route implementation.

---

## DEV-007 · 2026-06-24 · Plain CSS, no Tailwind, no UI library

**Previous decision:** Tailwind was a possible direction.
**New decision:** Use plain CSS in `app/app/globals.css`.
**Reasoning:** Lower dependency load, clearer styling surface, simpler maintenance.
**Tracked across:** package setup and styling architecture.

---

## DEV-008 · 2026-06-24 · Pin to patched Next.js line

**Previous decision:** older Next.js version was used initially.
**Problem reported:** Vercel blocked deployment due to a vulnerable Next.js version.
**New decision:** Pin to the patched Next.js 15.x line (`15.5.19` at the time).
**Reasoning:** Security compliance and successful deploys.
**Tracked across:** `app/package.json`, `app/package-lock.json`.

---

## DEV-009 · 2026-06-25 · Teacher dashboard is localStorage-backed in v0 with honest limitations

**Previous decision:** no teacher-facing dashboard.
**New decision:** Build the dashboard now on `localStorage`, with honest framing that real multi-device reporting needs a later backend.
**Reasoning:** Preserves demo value without pretending a backend already exists.
**Tracked across:** `app/components/TeacherDashboard.tsx`.

---

## DEV-010 · 2026-06-25 · No streaks, no leaderboard, no parent app in v0

**Previous decision:** more gamified directions were discussed.
**New decision:** Explicitly keep v0 serious and restrained.
**Reasoning:** Better fit for school buyers and less product sprawl.
**Tracked across:** product scope, sales framing.

---

## DEV-011 · 2026-06-25 · Teacher dashboard is a stronger sales feature than video-first work

**Previous decision:** video had strong internal momentum.
**New decision:** Prioritise past papers, dashboard, and teacher-facing leverage before deeper video investment.
**Reasoning:** Schools buy reporting and seriousness faster than they buy media polish.
**Tracked across:** roadmap and Phase 2 / Phase 3 implementation.

---

## DEV-012 · 2026-06-25 · Teacher Fellowship as the feedback/QA strategy

**Previous decision:** no structured teacher contribution system.
**New decision:** Use teacher feedback/reporting plus a recognition model rather than a paid reviewer model.
**Reasoning:** Low-cost quality loop and stronger teacher buy-in.
**Tracked across:** `app/components/ReportProblem.tsx`, sales docs, strategy docs.

---

## DEV-013 · 2026-06-25 · Visible review-status pill on topics and papers

⚠️ **Superseded by DEV-016.** Kept here for historical continuity.

**Original decision:** show `verified` / `review pending` visibly in the UI.
**Reasoning at the time:** honest UI and content-status visibility.

---

## DEV-014 · 2026-06-25 · Practice mode and worksheet generator are separate jobs backed by one bank

**Previous decision:** no clear split existed.
**New decision:**
- **Practice mode** = student drill
- **Worksheet generator** = teacher-controlled printable sampling
**Reasoning:** Same content, different user jobs, better product clarity.
**Tracked across:** practice routes and worksheet generator routes/components.

---

## DEV-015 · 2026-06-25 · Watch stays as a tab; Listen becomes an in-read control

**Previous decision:** Watch / Listen / Read had equal tab weight.
**New decision:** Keep Watch as a placeholder/video slot, but demote Listen into the reading experience.
**Reasoning:** TTS is useful, but not strong enough to deserve equal visual weight.
**Tracked across:** `app/components/TopicTabs.tsx`, `app/app/globals.css`.

---

## DEV-016 · 2026-06-25 · Auto-verify content for ship-speed; keep `reviewStatus` internally

**Previous decision:** visible review-status UI from DEV-013.
**Problem reported:** time pressure made visible status labelling less useful than shipping and improving.
**New decision:**
- mark content as verified internally
- remove visible review-pill UI
- keep the field in the schema for future richer review attribution
**Reasoning:** faster shipping without losing future flexibility.
**Tracked across:** topic list UI, topic page UI, topic/paper data.

---

## DEV-017 · 2026-06-25 · Pre-generated question bank, not runtime AI generation

**Previous decision:** runtime AI generation had been considered.
**New decision:** Use a static question bank sampled by practice and worksheet flows.
**Reasoning:** zero cost, zero latency, higher reliability, easier quality control.
**Tracked across:** `app/lib/question-bank.ts`, practice and worksheet features.

---

## DEV-018 · 2026-06-25 · Per-topic optional `videoUrl` with placeholder-first UX

**Previous decision:** Watch tab had no path to a live embedded video.
**New decision:** Add optional `videoUrl` per topic and embed YouTube when present.
**Reasoning:** makes topic-level videos a one-line content change instead of a component rewrite.
**Tracked across:** `app/lib/topics.ts`, `app/components/TopicTabs.tsx`, `docs/ops/notebooklm-video-guide.md`.

---

## PILOT-001 · 2026-06-30 · First pilot customer: Trainup a Child Uganda, starting with one P7 Math class

**Context:** A real school pilot opportunity exists.
**Decision:** Start with **one P7 Mathematics class** at Trainup a Child Uganda.
**Reasoning:** Small enough to observe and fix issues quickly, while still being meaningful evidence for broader rollout.
**Tracked across:** `docs/ops/trainup-pilot-plan.md`, `STATUS.md`, `HANDOFF.md`.

---

## PILOT-002 · 2026-06-30 · Position Tendo as study, not only revision

**Previous framing:** revision platform.
**New decision:** Reframe Tendo as a **study** platform.
**Reasoning:** Better matches the intended value, longer product relationship, and the type of content now being written.
**Tracked across:** proposal docs, pilot plan, topic-note rewrites.

---

## PILOT-003 · 2026-06-30 · School provides its own branding and can provide its own videos

**Decision:** For the Trainup pilot, the school-specific layer supports branding and topic-level video slots.
**Reasoning:** School-specific presentation improves credibility and buy-in.
**Tracked across:** school config layer, pilot plan, topic video support.

---

## PILOT-004 · 2026-06-30 · Fix answer-position bias before the school sees the product

**Problem reported:** Correct answers defaulted to option A in too many places.
**Decision:** Randomise answer positions across topic quizzes and the question bank.
**Reasoning:** This was a credibility blocker for real school use.
**Tracked across:** `app/lib/topics.ts`, `app/lib/question-bank.ts`, `scripts/shuffle-correct-answers.js`.

---

## WORKFLOW-001 · 2026-06-30 · Manual overwrite workflow is the default delivery method

**Context:** The founder applies workspace changes manually to the GitHub-connected local copy.
**Decision:** Every meaningful update must clearly state:
- what changed
- why it changed
- which files changed
- whether to overwrite or add each file
**Reasoning:** Cleaner commits, safer merges, and lower risk of overwriting unrelated files.
**Tracked across:** `docs/ops/update-handoff-protocol.md`, session reporting style.

---

## WORKFLOW-002 · 2026-07-01 · Repo docs are now the source of truth for active project state

**Context:** Important operating notes had been split between the repo and external workspace docs.
**Decision:** Active project documentation should live inside `tendo-ug`, with root tracking docs kept current and high-value operational notes stored under `docs/ops/`.
**Reasoning:** This is safer for the founder's manual overwrite workflow and safer as a GitHub-backed record.
**Tracked across:** `STATUS.md`, `HANDOFF.md`, `CHECKLIST.md`, `CHANGELOG.md`, `docs/ops/*`.

---

## SUBJECT-001 · 2026-07-01 · P7 Mathematics can now be treated as complete enough to move focus

**Context:** Maths had been the highest-pressure subject and had to be finished honestly before attention shifted elsewhere.
**Decision:** Treat P7 Mathematics as done for current product scope, with any further maths work considered enhancement unless a materially missing curriculum issue is discovered.
**Reasoning:** Maths now has broad coverage, aligned practice, improved structure, and explicit visual planning; remaining issues are polish and enrichment rather than core subject-completion blockers.
**Tracked across:** `docs/ops/p7-maths-final-completion-audit-2026-07-01.md`, `app/lib/topics.ts`, `app/app/math/p7/page.tsx`, root tracking docs.

---

## SUBJECT-002 · 2026-07-01 · P7 Integrated Science became the second active subject before Social Studies

**Context:** After Mathematics was completed, the working docs expected Social Studies next. The founder redirected the next-subject push to Science instead.
**Decision:** Build **P7 Integrated Science** as the next active subject before Social Studies.
**Reasoning:** The founder chose Science as the immediate next pressure subject, and the NCDC P7 Integrated Science syllabus has a clear 8-topic structure suitable for a grouped build.
**Tracked across:** `app/lib/science-topics.ts`, `content/curriculum/p7-science.json`, Science routes, `docs/ops/p7-science-quality-audit-2026-07-01.md`, root tracking docs.

---

## DEV-019 · 2026-07-01 · Worksheet generator supports subject filtering

**Context:** Adding Science to the central question bank made the teacher worksheet topic list crowded and potentially confusing.
**Decision:** Add subject filters for **Maths only**, **Science only**, and **Mixed** worksheets.
**Reasoning:** Teachers need control over worksheet scope now that Tendo is multi-subject. Filtering keeps the UI usable while still allowing mixed revision worksheets.
**Tracked across:** `app/lib/question-bank.ts`, `app/components/WorksheetGenerator.tsx`, `app/app/teacher/worksheet/page.tsx`.

---

## CONTENT-001 · 2026-07-01 · Sensitive Science health wording must be safety-focused and age-appropriate

**Context:** The NCDC P7 Integrated Science `Population and Health` topic includes outdated/sensitive wording around social problems among young people.
**Decision:** Do not reproduce harmful or explicit wording directly in learner-facing content. Use respectful, safety-focused, adult-guided language while preserving curriculum intent around community health and safe behaviour.
**Reasoning:** P7 learners need protection, clarity and respect. The app should support teachers and pupils without normalising stigma or unsafe phrasing.
**Tracked across:** `app/lib/science-topics.ts`, `docs/ops/p7-science-quality-audit-2026-07-01.md`.

---

## SUBJECT-003 · 2026-07-01 · P7 Social Studies is complete enough for current product scope

**Context:** After Science was pushed, Social Studies became the next active subject. The NCDC P7 SST syllabus has one broad theme, Living Together in Africa, with 10 official topics.
**Decision:** Treat P7 Social Studies as done enough to move on after completing the topic build, routes, practice banks, worksheet support, diagrams, heavy-topic depth pass and completion audit.
**Reasoning:** SST now has all official topics live and has passed the same “done enough” standard used for Maths and Science. Remaining work is enhancement, teacher review and future exam-paper integration.
**Tracked across:** `app/lib/social-topics.ts`, `content/curriculum/p7-social-studies.json`, `app/app/social-studies/*`, `app/components/TopicDiagram.tsx`, `app/lib/question-bank.ts`, `docs/ops/p7-social-studies-first-wave-audit-2026-07-01.md`.

---

## SUBJECT-004 · 2026-07-01 · P7 English is complete enough for current product scope

**Context:** The founder chose to continue into English before the grouped Social Studies + English push, with Religious Education explicitly paused.

**Decision:** Treat P7 English as done enough for current product scope after completing all 7 official NCDC topics, routes, practice banks, worksheet support, writing templates, writing-heavy depth passes and the English quality audit.

**Reasoning:** English now meets the same product-completion standard used for Maths, Science and Social Studies. Remaining English work — deeper composition rubrics, more comprehension passages, UNEB-style tagging and teacher marking guides — is enhancement rather than a blocker.

**Tracked across:** `app/lib/english-topics.ts`, `content/curriculum/p7-english.json`, `app/app/english/*`, `app/components/TopicDiagram.tsx`, `app/lib/question-bank.ts`, `app/components/WorksheetGenerator.tsx`, `docs/ops/p7-english-quality-audit-2026-07-01.md`, root tracking docs.

---

## TEACHER-002 · 2026-07-01 · Worksheet generator should produce classroom-ready sheets

**Context:** After four P7 subjects were active, the teacher worksheet generator became one of the highest-value classroom tools. The founder asked to improve teacher-facing usefulness before deepening the non-maths subjects further.

**Decision:** Upgrade worksheets from basic generated quizzes into more classroom-ready sheets with metadata, marks, timing, custom instructions, clearer subject pools and a separate answer key.

**Reasoning:** Teachers need printable materials that can be used immediately in class, not just app-generated question lists. Separating the answer key also makes pupil handouts cleaner and more realistic.

**Tracked across:** `app/components/WorksheetGenerator.tsx`, `app/app/teacher/worksheet/page.tsx`, `app/app/globals.css`, `docs/ops/teacher-worksheet-usefulness-pass-2026-07-01.md`.

---

## CONTENT-002 · 2026-07-01 · English depth is measured by writing richness, not maths-style topic count

**Context:** The founder noticed that English, Science and Social Studies have fewer top-level topics than Mathematics. The official English outline has fewer broad themes, but each theme requires deeper writing, grammar, vocabulary, comprehension and communication practice.

**Decision:** Do not inflate English by inventing unnecessary topic pages. Instead, deepen each official English topic with writing prompts, planning steps, marking checklists, model openings and a larger practice bank.

**Reasoning:** This keeps Tendo aligned to the NCDC outline while making English genuinely useful for PLE preparation and classroom teaching.

**Tracked across:** `app/lib/topics.ts`, `app/components/TopicTabs.tsx`, `app/lib/english-topics.ts`, `app/lib/question-bank.ts`, `docs/ops/p7-english-deepening-pass-2026-07-01.md`.

---

## CONTENT-003 · 2026-07-01 · Science depth is measured by application and experiment readiness

**Context:** Science has fewer official top-level topics than Mathematics, but each topic needs observation, experiment, application, diagram and safety practice.

**Decision:** Deepen Science by adding guided application/experiment tasks and increasing practice-bank depth, rather than inventing non-official extra topic pages.

**Reasoning:** This keeps Tendo aligned with the NCDC Science outline while making each broad Science topic more useful for classroom teaching and PLE preparation.

**Tracked across:** `app/lib/science-topics.ts`, `app/lib/question-bank.ts`, `app/components/TopicTabs.tsx`, `docs/ops/p7-science-deepening-pass-2026-07-01.md`.

---

## CONTENT-004 · 2026-07-01 · Social Studies depth is measured by map, source and case-study readiness

**Context:** Social Studies has fewer official top-level topics than Mathematics because NCDC organises P7 SST under the broad theme Living Together in Africa.

**Decision:** Deepen Social Studies through guided map tasks, history/source reasoning, country case studies, development problem-solving and organisation-function practice instead of inventing extra topic pages.

**Reasoning:** This preserves curriculum alignment while making SST more useful for PLE preparation and classroom teaching.

**Tracked across:** `app/lib/social-topics.ts`, `app/lib/question-bank.ts`, `docs/ops/p7-social-studies-deepening-pass-2026-07-01.md`.

---

## PRODUCT-005 · 2026-07-01 · Four-subject P7 core is product-level complete for current scope

**Context:** After Maths completion, Science, Social Studies and English were built, pushed and then deepened. The teacher worksheet generator was also improved for classroom use.

**Decision:** Treat the four-subject P7 core — Mathematics, English, Integrated Science and Social Studies — as product-level complete for the present Tendo scope.

**Reasoning:** The app now has four active subjects, guided practice for English/Science/SST, strong central question-bank totals, worksheet generation for all four subjects, audit documentation and a passing production build. Remaining work is enhancement, teacher feedback and future exam-paper/marking-rubric sophistication rather than core subject completion.

**Tracked across:** `docs/ops/four-subject-core-closeout-audit-2026-07-01.md`, `STATUS.md`, `HANDOFF.md`, `CHECKLIST.md`, `CHANGELOG.md`.
