# HANDOFF — for the next session

*Written: 2026-07-01*

## Read this first

1. `STATUS.md`
2. `CHECKLIST.md`
3. `CHANGELOG.md`
4. `DECISIONS.md`
5. `docs/ops/p7-english-quality-audit-2026-07-01.md`
6. `docs/ops/p7-social-studies-first-wave-audit-2026-07-01.md`
7. `docs/ops/update-handoff-protocol.md`

---

## Where the project really is

The project has now completed four major P7 subject pushes/builds for current scope:

1. **P7 Mathematics** — founder-safe complete for current scope.
2. **P7 Integrated Science** — complete enough and already pushed by the founder.
3. **P7 Social Studies** — complete enough after the SST build, diagrams, practice-bank, depth and audit passes.
4. **P7 English** — complete enough after the English build, practice-bank, templates, writing-depth and audit passes.

Important workflow truth: the founder has now pushed the Social Studies + English grouped work successfully. The next action is post-push verification, cleanup and teacher-facing strengthening.

Religious Education is intentionally paused and should not be started unless the founder explicitly asks.

---

## What is already done

### Product / feature layer
Already built and usable:
- Next.js app shell
- topic pages
- quizzes
- past papers
- teacher dashboard
- practice mode
- worksheet generator
- worksheet subject filters: Maths only / English only / Science only / Social Studies only / Mixed
- Watch / Read structure with in-read speech support
- Trainup branding layer and `/trainup` route

### P7 Mathematics state
- `app/lib/topics.ts` carries 38 published maths topics
- routes: `/math/p7`, `/math/p7/[topic]`, `/math/p7/[topic]/practice`
- selected maths diagrams exist through `app/components/TopicDiagram.tsx`
- maths closeout docs exist in repo

### P7 Integrated Science state
Science includes all 8 NCDC P7 Integrated Science topics:
1. Muscular-skeletal system
2. Electricity and magnetism
3. Energy resources in the environment
4. Simple machines and friction
5. Excretory system
6. Light energy
7. Interdependence of things in the environment
8. Population and health

Science files/routes:
- `app/lib/science-topics.ts`
- `content/curriculum/p7-science.json`
- `app/app/science/p7/page.tsx`
- `app/app/science/p7/[topic]/page.tsx`
- `app/app/science/p7/[topic]/practice/page.tsx`
- `docs/ops/p7-science-quality-audit-2026-07-01.md`

### P7 Social Studies state
Social Studies includes all 10 NCDC P7 SST topics under Living Together in Africa:
1. Location of Africa on the Map of the World
2. Physical Features of Africa
3. Climate of Africa
4. Vegetation of Africa
5. The People of Africa, Ethnic Groups and Settlement Patterns
6. Foreign Influence in Africa
7. Nationalism and the Road to Independence of Africa
8. Post-Independence Africa
9. Economic Developments in Africa
10. Major World Organisations

Relevant files:
- `app/lib/social-topics.ts`
- `content/curriculum/p7-social-studies.json`
- `app/app/social-studies/p7/page.tsx`
- `app/app/social-studies/p7/[topic]/page.tsx`
- `app/app/social-studies/p7/[topic]/practice/page.tsx`
- `docs/ops/p7-social-studies-first-wave-audit-2026-07-01.md`

SST supports topic pages, quizzes, practice mode, diagrams for all 10 topics, worksheet generation, 20-question banks per topic and guided map/history/development tasks for all 10 topics.

### P7 English state
English includes all 7 official NCDC P7 English topics:
1. School Holidays
2. Letter Writing
3. Examinations
4. Electronic Media
5. Rights, Responsibilities and Freedom
6. Environmental Protection
7. Ceremonies

Relevant files:
- `app/lib/english-topics.ts`
- `content/curriculum/p7-english.json`
- `app/app/english/p7/page.tsx`
- `app/app/english/p7/[topic]/page.tsx`
- `app/app/english/p7/[topic]/practice/page.tsx`
- `docs/ops/p7-english-quality-audit-2026-07-01.md`

English supports topic pages, quizzes, practice mode, worksheet generation, 20-question banks per topic, writing templates/diagrams for all 7 topics and writing-practice packs for all 7 topics.

---

## Teacher-facing usefulness pass

After the grouped Social Studies + English push, the worksheet generator was improved for classroom use.

Current worksheet improvements include:
- question-pool summary cards by subject
- class, term/week, time and marks fields
- quick worksheet length buttons
- custom instruction line
- separate printable answer key
- cleaner copy/text export layout

Relevant files:
- `app/components/WorksheetGenerator.tsx`
- `app/app/teacher/worksheet/page.tsx`
- `app/app/globals.css`
- `docs/ops/teacher-worksheet-usefulness-pass-2026-07-01.md`

---

## English deepening pass

English was strengthened after the teacher worksheet pass. The key point: English has fewer official top-level topics than Maths, but each topic now carries more internal writing depth.

Added:
- shared optional `writingTasks` support in topic notes
- writing-practice cards in the Read tab
- writing packs for all 7 English topics
- English practice expanded to 20 questions per topic / 140 total
- `docs/ops/p7-english-deepening-pass-2026-07-01.md`

Relevant files:
- `app/lib/topics.ts`
- `app/components/TopicTabs.tsx`
- `app/lib/english-topics.ts`
- `app/lib/question-bank.ts`
- `app/app/globals.css`
- `docs/ops/p7-english-deepening-pass-2026-07-01.md`

---

## Science deepening pass

Science was strengthened after English. The key point: Science has 8 official NCDC topics, but now each topic has guided application/experiment-style practice and deeper question-bank support.

Added:
- guided practice tasks for all 8 Science topics
- Science practice expanded to 20 questions per topic / 160 total
- continued careful wording for Population and Health
- `docs/ops/p7-science-deepening-pass-2026-07-01.md`

Relevant files:
- `app/lib/science-topics.ts`
- `app/lib/question-bank.ts`
- `app/components/TopicTabs.tsx`
- `app/app/globals.css`
- `docs/ops/p7-science-deepening-pass-2026-07-01.md`

---

## Social Studies deepening pass

Social Studies was strengthened after Science. The key point: SST has 10 official NCDC topics under one broad theme, but each topic now carries guided map, history, development or organisation-practice depth.

Added:
- guided practice tasks for all 10 SST topics
- SST practice expanded to 20 questions per topic / 200 total
- `docs/ops/p7-social-studies-deepening-pass-2026-07-01.md`

Relevant files:
- `app/lib/social-topics.ts`
- `app/lib/question-bank.ts`
- `docs/ops/p7-social-studies-deepening-pass-2026-07-01.md`

---

## Four-subject core closeout

A final closeout audit was completed after the teacher-facing, English, Science and Social Studies deepening passes.

Current verdict: the four-subject P7 core is product-level complete for present scope. Remaining work is enhancement, not subject-completion blocking.

See:
- `docs/ops/four-subject-core-closeout-audit-2026-07-01.md`

Important honest note:
- Mathematics has 38 live topic pages and 195 central-bank practice questions across 13 banked topics.
- English, Science and Social Studies now have 100% central-bank coverage across their official topic lists.
- Full Maths bank parity across all 38 topic pages is a future enhancement if the founder wants that as the next quality bar.

---

## Latest verification

Latest production build from `app/` passed:
- `✓ Compiled successfully`
- `✓ Generating static pages (147/147)`

Build command:
```bash
cd app && npm run build
```

---

## What still needs work

### 1. Production verification and cleanup
Verify the pushed routes and clean stale wording in docs or UI that still implies the grouped push is pending.

### 2. Teacher-facing usefulness improvements
After GitHub Desktop push, wait for Vercel and verify:
- `/english/p7`
- `/social-studies/p7`
- `/teacher/worksheet`
- home page subject cards

### 3. Future enhancement, not current blocker
Possible next enhancements:
- more English composition rubrics and comprehension passages
- exam-paper tagging for English/SST/Science
- teacher review pass
- maps/diagrams enrichment

---

## Watch-outs

- The founder uses a **manual overwrite workflow**. Keep file instructions explicit.
- Pushes to `main` auto-promote to production.
- Avoid copying generated/cache folders.
- Do not copy `tmp/`.
- Do not start Religious Education for now.
- Do not reopen maths scope casually.

---

## Copy categories reference

Use the final assistant response/checklist as the practical source, but broadly:

### App-critical — copy this
- new Social Studies files/routes/data/curriculum
- new English files/routes/data/curriculum
- shared updated app files: home page, question bank, worksheet generator, teacher worksheet copy, topic diagrams, topic tabs/practice runner if changed in this workspace

### Documentation — copy this
- root tracking docs
- Social Studies audit
- English audit
- Science/Maths audit docs if not already present locally

### Do not copy
- `tmp/`
- `app/.next/`
- `app/node_modules/`
- generated/cache/build folders
