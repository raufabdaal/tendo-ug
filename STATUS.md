# STATUS — Tendo

*Updated: 2026-07-02*

> **Current state:** P7 Mathematics, P7 Integrated Science, P7 Social Studies and P7 English are complete enough for current product scope. The Lesson Structure v2 + visual alignment grouped milestone has been pushed and verified live. Pilot Readiness Pack v1 has started, and key-word definitions were polished into more teacher-like sentence phrasing before pilot use.

## Current focus

### 1. P7 Mathematics is complete enough
Mathematics has reached a founder-safe “done enough” state for current product scope.

That means:
- 38 published P7 Mathematics topics exist
- visible maths coming-soon backlog is clear
- practice mode and worksheet generation support the subject
- the maths landing page is structured by strand
- diagrams exist for selected visual topics
- closeout docs live inside the repo

Further maths work should be treated as enhancement unless a materially missing curriculum issue is discovered.

### 2. P7 Integrated Science is complete enough
Science includes all 8 NCDC-aligned P7 Integrated Science topics, with routes, diagrams, quizzes, practice banks, worksheet support and a quality audit.

Science is already pushed by the founder and has now been deepened further: all 8 topics include guided application/experiment tasks and 20 practice questions per topic.

### 3. P7 Social Studies is complete enough
Social Studies includes all 10 NCDC-aligned topics under **Living Together in Africa**.

Social Studies now has:
- `/social-studies/p7` landing page
- topic pages and practice pages
- diagrams for all 10 topics
- central question-bank and worksheet support
- 20-question practice banks per topic
- guided map/history/development tasks for every SST topic
- curriculum map at `content/curriculum/p7-social-studies.json`
- completion audit at `docs/ops/p7-social-studies-first-wave-audit-2026-07-01.md`

Honest status: **complete enough and now strengthened further**. Social Studies now has guided map/history/development tasks for all 10 topics and 20 practice questions per topic.

### 4. P7 English is complete enough
English includes all 7 official NCDC Set One P7 English topics.

English now has:
- `/english/p7` landing page
- topic pages and practice pages
- all 7 official topics across Terms I–III
- central question-bank and worksheet support
- 20-question practice banks per topic
- guided writing-practice tasks for every English topic
- writing templates/diagrams for all 7 topics
- curriculum map at `content/curriculum/p7-english.json`
- quality audit at `docs/ops/p7-english-quality-audit-2026-07-01.md`

Honest status: **complete enough and now strengthened further**. English now has writing-practice packs on all 7 topics and 20 practice questions per topic, making the subject deeper despite having fewer official top-level topics than Maths. Later English improvements should focus on full comprehension passages, teacher marking rubrics and UNEB-style paper sections.

### 5. Religious Education is intentionally paused
Religious Education is **not being worked on for now**, per founder direction.

### 6. Teacher-facing usefulness pass started
The worksheet generator has been strengthened after the grouped Social Studies + English push.

Teacher worksheet improvements now include:
- subject question-pool summary cards
- class, term/week, time and marks fields
- quick length buttons
- custom instruction line
- clean pupil questions with a separate answer key
- clearer page copy around question-bank topics

Next teacher-facing improvements should add richer English writing tasks and more short-answer/scaffolded questions for Science, Social Studies and English.

### 7. Four-subject core closeout audit completed
The four-subject P7 core has now been audited after the teacher, English, Science and Social Studies deepening passes.

Current closeout verdict: **product-level complete for present scope**, with remaining work treated as enhancement and teacher-feedback iteration.

See: `docs/ops/four-subject-core-closeout-audit-2026-07-01.md`

### 8. Repo documentation is the source of truth
Root docs must stay current:
- `STATUS.md`
- `HANDOFF.md`
- `CHECKLIST.md`
- `DECISIONS.md`
- `CHANGELOG.md`

Operational notes should live under `docs/ops/` where useful.

---

## What is already in strong shape

### Product features already built
- Next.js app shell
- Topic pages with notes + quizzes
- Subject landing pages for Maths, English, Science and Social Studies
- Past papers
- Teacher dashboard
- Practice mode
- Worksheet generator
- Worksheet subject filters: Maths only / English only / Science only / Social Studies only / Mixed
- Watch / Read topic structure with in-read audio support
- Trainup branding layer and `/trainup` route

### Current subject totals
- Published P7 Mathematics topics: 38
- Published P7 Integrated Science topics: 8
- Published P7 Social Studies topics: 10
- Published P7 English topics: 7
- English practice questions: 140 total across 7 topics
- Science practice questions: 160 total across 8 topics
- Social Studies practice questions: 200 total across 10 topics
- Total central question-bank pool: 695 questions across 38 bank topics

---

## Lesson Structure v2 restructuring has started

A new child-friendly study-page structure has been introduced after founder/partner feedback that the current study content can feel insufficiently structured.

Lesson Structure v2 is now live in workspace for all 10 Social Studies topics, all 8 Integrated Science topics, all 7 English topics and all 38 Mathematics topics.

The new structure adds:
- Big idea
- Key words
- Learn it in parts
- Visual brief
- PLE tip

See: `docs/spec/tendo-lesson-structure-v2.md`

The grouped Lesson Structure v2 milestone has been pushed and verified live. Maths is fully converted across all 38 topics, all four active P7 subjects use the new study flow, and the visual layer has been aligned so visual briefs and diagrams act more like instructional teaching aids.

## What still needs work right now

### 1. Post-push verification and cleanup
The grouped Social Studies + English milestone is now live. The immediate next task is to verify live behaviour, clean stale documentation wording and tighten any teacher-facing rough edges.

### 2. Curriculum alignment and content expansion
The content gaps and accuracy issues identified in the curriculum review have been addressed:
- **Maths**: Fixed math bugs (correct indices misalignment) in Venn diagrams in `topics.ts`.
- **Social Studies**: Expanded specific topic facts to match curriculum tested content (e.g., Lake Victoria borders).
- All 4 active subjects (Maths, SST, Science, English) have been audited against their curriculum JSON specifications. 
- Future content work should focus on formatting any extensive topic notes into structured sections to ensure depth while maintaining clarity.

### 3. Later enrichment for completed subjects
Possible future enhancements:
- richer exam-style banks for heaviest Science, SST and English topics
- more English composition/comprehension rubrics
- real UNEB paper tagging by subject
- teacher review and feedback pass
- more precise maps/diagrams if requested by teachers

---

## Immediate next steps

Recommended next move:
1. Use Pilot Readiness Pack v1 in the first teacher/school conversation.
2. Collect structured teacher and learner feedback.
3. Prioritise fixes based on real classroom blockers.
4. Decide whether the next build milestone is P6 expansion, teacher workflow, or deeper subject-specific practice.

---

## Operational reminders

- Push to `main` auto-promotes to production.
- The founder uses a **manual overwrite workflow** from downloaded workspace files into the GitHub-connected local copy.
- Every meaningful update must clearly state:
  - what changed
  - why it changed
  - which files changed
  - whether to overwrite or add each file
- Repo docs are the canonical record.
- Build command should run from `app/`, not repo root:
  - `cd app && npm run build`

See:
- `docs/ops/update-handoff-protocol.md`

---

## Cost so far

**UGX 0 / USD 0.** Still free-tier first.
