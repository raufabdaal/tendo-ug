# STATUS — Tendo

*Updated: 2026-07-01*

> **Current state:** P7 Mathematics, P7 Integrated Science, P7 Social Studies and P7 English are now complete enough for current product scope. The founder has **not pushed** the Social Studies + English grouped work yet; the next recommended action is a grouped copy/commit/push after copying the required files into the real local repo.

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

Science is already pushed by the founder and should not be reopened casually.

### 3. P7 Social Studies is complete enough
Social Studies includes all 10 NCDC-aligned topics under **Living Together in Africa**.

Social Studies now has:
- `/social-studies/p7` landing page
- topic pages and practice pages
- diagrams for all 10 topics
- central question-bank and worksheet support
- 12-question practice banks per topic
- curriculum map at `content/curriculum/p7-social-studies.json`
- completion audit at `docs/ops/p7-social-studies-first-wave-audit-2026-07-01.md`

Honest status: **complete enough to move on**, with future improvements treated as enhancement.

### 4. P7 English is complete enough
English includes all 7 official NCDC Set One P7 English topics.

English now has:
- `/english/p7` landing page
- topic pages and practice pages
- all 7 official topics across Terms I–III
- central question-bank and worksheet support
- 12-question practice banks per topic
- writing templates/diagrams for all 7 topics
- curriculum map at `content/curriculum/p7-english.json`
- quality audit at `docs/ops/p7-english-quality-audit-2026-07-01.md`

Honest status: **complete enough for the grouped Social Studies + English push**. Later English improvements should focus on longer writing rubrics, teacher marking guides, more comprehension passages and UNEB-style paper tagging.

### 5. Religious Education is intentionally paused
Religious Education is **not being worked on for now**, per founder direction.

### 6. Repo documentation is the source of truth
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
- English practice questions: 84 total across 7 topics
- Science practice questions: 120 total across 8 topics
- Social Studies practice questions: 120 total across 10 topics

---

## What still needs work right now

### 1. Push the grouped Social Studies + English milestone
The founder intentionally stretched pushes. Since English is now done enough, this is the meaningful grouped milestone to copy into the real local repo, commit and push.

### 2. Later enrichment for completed subjects
Possible future enhancements:
- richer exam-style banks for heaviest Science, SST and English topics
- more English composition/comprehension rubrics
- real UNEB paper tagging by subject
- teacher review and feedback pass
- more precise maps/diagrams if requested by teachers

---

## Immediate next steps

Recommended next move:
1. Copy the grouped Social Studies + English files into the real local `tendo-ug` repo.
2. Let GitHub Desktop detect the changes.
3. Commit as a grouped milestone.
4. Push to `main` when ready.
5. Verify production after Vercel deploy completes.

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
