# HANDOFF — for the next session

*Written: 2026-06-30*

## Read this first

1. `STATUS.md`
2. `docs/ops/ncdc-p7-math-coverage-audit-2026-06-30.md`
3. `docs/ops/update-handoff-protocol.md`
4. `DECISIONS.md`
5. `CHECKLIST.md`

---

## Where the project really is

The project is in **Trainup pilot-prep mode** and in the middle of a broader **NCDC-alignment sweep**.

This is the key thing to understand:

The app is no longer being treated as just a polished demo.
We are now trying to make it **study-ready for real use**, starting with **P7 Mathematics**.

That means the work is now happening on four layers at once:
1. topic study notes
2. quizzes / question-bank quality
3. curriculum structure and navigation
4. documentation / handoff quality

---

## What is already done

### Product / feature layer
Already built and usable:
- Next.js app shell
- P7 Math topic pages
- auto-graded quizzes
- past papers
- teacher dashboard
- practice mode
- worksheet generator
- Watch / Listen / Read topic experience
- Trainup branding layer and `/trainup` route

### Pilot-prep work already completed
- Fixed the all-answers-are-A bias across quiz + question-bank content
- Added `docs/ops/trainup-pilot-plan.md`
- Added Trainup branding support
- Shifted product framing from **revision** to **study**
- Rewrote about 10 topics into fuller NCDC-aligned study modules

### Strongest current study-ready topics
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
These are live but still need standardisation:
- Roman numerals
- Substitution
- 12-hour and 24-hour clocks

---

## Current curriculum truth

A proper coverage audit has now been done.

See:
- `docs/ops/ncdc-p7-math-coverage-audit-2026-06-30.md`

Important takeaways:
- **13** topics are currently published
- about **10** are at or near the new study-ready standard
- several more are only placeholders
- some NCDC sub-topics are not yet represented cleanly in the app

Do not assume the app is fully curriculum-complete.
It is not.

---

## What still needs work

### 1. Practice/question alignment
The topic-note rewrites were only the first pass.
The next major quality task is to audit:
- topic quizzes in `app/lib/topics.ts`
- practice / worksheet bank in `app/lib/question-bank.ts`

We need to classify:
- what is strong
- what is mathematically okay but too demo-like
- what is too weak for real study use
- which topics need practice rewritten first

### 2. Curriculum structure in the UI
The current layout is still too loose for a real study product.
Likely future improvements:
- group by **term**
- group by topic / sub-topic more clearly
- mark published vs coming soon vs study-ready more clearly

### 3. Remaining NCDC topic coverage
After standardising current content, likely next high-priority builds are:
- Integers
- Four basic operations
- Pie charts and travel graphs
- Timetables
- Algebraic expressions

---

## What was just done in this sweep

This session started the **documentation cleanup**.
The goal is to remove merge-conflict leftovers and restore a reliable project narrative before deeper content work continues.

The process/reporting workflow is now formalised in:
- `docs/ops/update-handoff-protocol.md`

This matters because the founder applies changes manually by downloading the workspace and overwriting local files.
So future sessions must always clearly report:
- what changed
- why it changed
- which files changed
- whether to overwrite or add them

---

## Watch-outs

- The founder has **not** asked for broad sensitive-file changes. Avoid touching `.gitignore`, env files, or unrelated config unless necessary.
- Pushes to `main` auto-promote to production.
- Production is currently healthy, so prioritise **clarity and quality alignment**, not emergency fixes.
- The docs used to contain mixed historical states. Do not trust older phase language blindly without checking current repo reality.
- The app is still **Math only** in code, despite earlier multi-subject ambitions.
- Fractions video is live. Other video placeholders exist, but video is not the main current priority.

---

## Best next move after the doc sweep

1. Finish cleaning the remaining core docs:
   - `CHECKLIST.md`
   - `DECISIONS.md`
   - `CHANGELOG.md`
2. Then run a **practice-layer audit**
3. Then standardise the 3 lighter published topics
4. Then continue filling missing high-priority NCDC topics

If you need to choose only one next content task after the docs, the best choice is:

**Audit the practice/question layer first.**

That is the biggest quality gap between “demo-ready” and “study-ready”.
