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

Important workflow truth: the founder has **not yet pushed** the Social Studies + English grouped work. The next action is a grouped manual copy, commit and push.

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

SST supports topic pages, quizzes, practice mode, diagrams for all 10 topics, worksheet generation and 12-question banks per topic.

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

English supports topic pages, quizzes, practice mode, worksheet generation, 12-question banks per topic and writing templates/diagrams for all 7 topics.

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

### 1. Manual grouped push
Prepare/copy the grouped files for Social Studies + English + shared app/docs changes, then commit and push.

### 2. Production verification after push
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

## Copy categories for the grouped push

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
