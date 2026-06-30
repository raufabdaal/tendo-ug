# STATUS — Tendo

*Updated: 2026-06-30*

> **Current state:** Trainup pilot prep in progress. The app is no longer just a sales demo. We are now aligning it into a real **study-ready**, **NCDC-first** P7 Mathematics product.

## Current focus

### 1. Trainup a Child Uganda pilot prep
We have a real pilot direction with **Trainup a Child Uganda**.

- Pilot scope: **one P7 Mathematics class** first
- Product framing: **study**, not just revision
- Current subject scope in code: **P7 Math only**
- Long-term product vision: all four PLE subjects, but that is **not** the current build focus

### 2. NCDC alignment sweep
We have started a broader cleanup to align the product more tightly to the **Uganda NCDC primary curriculum**.

This is not only about rewriting topic notes.
The current alignment work now includes four layers:
1. **Topic study notes**
2. **Topic quizzes + practice/question bank quality**
3. **Curriculum structure and presentation in the UI**
4. **Documentation / handoff quality**

### 3. Move from demo-ready to study-ready
The first pass proved the product structure and sales story.
The next pass is about making the product something schools can actually use for learning.

---

## What is already in strong shape

### Product features already built
- Next.js P7 Math app shell
- Topic pages with notes + quizzes
- Past papers
- Teacher dashboard
- Practice mode
- Worksheet generator
- Watch / Listen / Read structure
- Trainup branding layer and `/trainup` route
- Fractions video already connected

### Pilot quality work already completed
- Fixed the **all-answers-are-A** bias across quizzes and the question bank
- Added pilot plan for Trainup
- Added school-branding support
- Shifted product framing from **revision** to **study**

### Topics already rewritten to the newer study-module standard
These are the strongest current study-ready topics:
- Venn diagrams
- Fractions
- Decimals
- Proportion and percentages
- Perimeter
- Area
- Volume
- Equations
- Mean, median, mode and range
- Money

### Published but still lighter than the new standard
These are usable, but still need rewrite standardisation:
- Roman numerals
- Substitution
- 12-hour and 24-hour clocks

---

## Current curriculum truth

### Published topics in app
**13 topics** are currently published.

### NCDC study-ready audit
A coverage audit was completed to compare the app against `content/curriculum/p7-math.json`.

See:
- `docs/ops/ncdc-p7-math-coverage-audit-2026-06-30.md`

Key outcome:
- about **10 topics** are at or near the newer study-ready standard
- **3 published topics** still need standardisation
- several NCDC topics are only placeholders
- some NCDC sub-topics are still not mapped cleanly into the app yet

---

## Biggest open issues right now

### 1. Documentation layer is messy
The core status docs had unresolved merge-conflict leftovers and mixed historical states.
This sweep is now cleaning that up.

### 2. Practice layer still needs alignment
The rewritten topic notes were only the first pass.
The quizzes and question-bank content still need a topic-by-topic NCDC / study-readiness audit.

### 3. Curriculum presentation is still mediocre
The content structure in the app still needs a clearer syllabus-style presentation.
Likely future direction:
- group by **term**
- show topic clusters more clearly
- distinguish published / study-ready / coming soon more clearly

### 4. NCDC coverage is still incomplete
The product is strong in some P7 Math areas, but not yet complete against the full curriculum.
Weakest overall areas right now:
- Geometry
- Data handling beyond central tendency
- Whole-number numeracy foundations
- Integers / timetables / algebraic expressions and other unmapped items

---

## Immediate next steps

### Documentation sweep
Clean, reconcile, and standardise:
- `STATUS.md`
- `HANDOFF.md`
- `CHECKLIST.md`
- `DECISIONS.md`
- `CHANGELOG.md`

### Then content alignment work
After the doc sweep:
1. audit the **practice/question** layer
2. standardise the 3 lighter published topics
3. improve curriculum/topic structure in the UI
4. continue building the next high-priority missing NCDC topics

Recommended next content candidates after the sweep:
- Integers
- Four basic operations
- Pie charts and travel graphs
- Timetables
- Algebraic expressions

---

## Operational reminders

- Push to `main` auto-promotes to production.
- The current production site is healthy; this session is not a production-firefighting session.
- The founder uses a **manual overwrite workflow** from downloaded workspace files into the GitHub-connected local copy.
- Every meaningful update must clearly state:
  - what changed
  - why it changed
  - which files changed
  - whether to overwrite or add each file

See:
- `docs/ops/update-handoff-protocol.md`

---

## Cost so far

**UGX 0 / USD 0.** Still free-tier first.
