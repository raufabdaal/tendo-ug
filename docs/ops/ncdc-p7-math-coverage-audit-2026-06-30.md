# NCDC P7 Mathematics Coverage Audit

*Date: 2026-06-30*
*Purpose: establish exactly what is already study-ready in the repo, what exists but still needs upgrades, and what is still missing against `content/curriculum/p7-math.json`.*

---

## Executive summary

The current repo is **stronger than the old docs suggest**.

- **Published topics in app:** 13
- **Topics listed as coming soon in app:** 20
- **Total NCDC curriculum sub-topics in `p7-math.json`:** 41
- **NCDC sub-topics represented either as published or coming soon:** 32 / 41
- **NCDC sub-topics not yet represented at all in `topics.ts` / `COMING_SOON`:** 9 / 41

### Study-ready now
The following published topics already use the fuller study structure with:
- learning objectives
- concept explanation
- worked example
- common mistakes (where added)
- try-this practice
- recap

These are the strongest topics to continue demoing for the Trainup pilot:

1. Venn diagrams (2 events)
2. Fractions, ordering and operations
3. Decimals
4. Proportion and percentages
5. Perimeter
6. Area
7. Volume
8. Equations
9. Mean, median, mode and range
10. Money (profit, loss, discount, interest)

### Published but lighter / older in structure
These topics are published and usable, but they still look closer to the earlier concise-note format than the newer study-first format:

1. Roman numerals up to MM
2. Substitution
3. 12-hour and 24-hour clocks

These should be considered **usable but not yet at the new study-module standard**.

### Biggest curriculum gap
The product is still **measurement + fractions + algebra heavy**.
The weakest areas, relative to the NCDC map, are:

- Geometry construction coverage
- Whole-number operations coverage
- Data handling coverage beyond central tendency
- Integers coverage
- Time beyond clock conversion

---

## A. Published topics in the current app

### Theme 1 — Sets
- ✅ `venn-diagrams-2-events`

### Theme 2 — Numeracy
- ✅ `roman-numerals-mm`
- ✅ `fractions-core`
- ✅ `decimals`
- ✅ `proportion-percentages`

### Theme 3 — Interpretation of Graphs and Data
- ✅ `central-tendency-range`

### Theme 5 — Measurement
- ✅ `perimeter`
- ✅ `area`
- ✅ `volume`
- ✅ `12-24-hour-clocks`
- ✅ `money`

### Theme 6 — Algebra
- ✅ `equations`
- ✅ `substitution`

---

## B. Published topics already at the newer study-module standard

These topics clearly include the richer instructional structure required for the Trainup pilot.

### Fully rewritten / study-ready
- `venn-diagrams-2-events`
- `fractions-core`
- `decimals`
- `proportion-percentages`
- `perimeter`
- `area`
- `volume`
- `equations`
- `central-tendency-range`
- `money`

### Partially upgraded / still should be rewritten to match the new standard
- `roman-numerals-mm`
- `substitution`
- `12-24-hour-clocks`

### Why these 3 are not yet at the same level
Compared with the richer topics above, these three still lack some of the newer study-module elements, especially:
- less developed learning scaffolding
- shorter explanatory sections
- no common-mistakes section
- no try-this section
- less explicit NCDC study framing

---

## C. Topics already represented as “coming soon” in the app

These exist in `COMING_SOON`, so they are at least mapped into the UI:

### Sets
- `finite-infinite-sets`
- `subsets`
- `probability-intro`

### Numeracy
- `numbers-up-to-99-999-999`
- `bases`
- `four-basic-operations`
- `prime-factorisation`
- `tests-of-divisibility`
- `integers-core`

### Data
- `data-handling` *(note: this label should be aligned to the curriculum id `pie-charts-travel-graphs` if we want clean one-to-one mapping)*
- `coordinates`

### Geometry
- `parallel-skew-lines`
- `line-segments-angles`
- `simple-polygons`
- `bearing-scale-drawing`

### Measurement
- `length`
- `capacity`
- `mass`

### Algebra
- `inequalities`
- `algebraic-expressions`

---

## D. NCDC sub-topics still missing completely from app/topic mapping

These 9 sub-topics exist in `content/curriculum/p7-math.json` but are **not yet represented** either as published topics or as coming-soon cards.

1. `expanded-form-indices` — Expanded form using indices
2. `standard-form` — Standard form (scientific notation)
3. `number-patterns` — Number patterns and sequences
4. `clock-arithmetic` — Clock arithmetic (modular/finite systems)
5. `pie-charts-travel-graphs` — Pie charts and travel graphs
6. `probability-of-numbers` — Probability of numbers
7. `regular-polygons` — Regular polygons
8. `timetables` — Timetables (travel, class, work)
9. `algebra-real-life` — Algebra in real-life situations

This means the curriculum map in the app is currently **not yet a complete mirror of the NCDC file**.

---

## E. Curriculum coverage breakdown by theme

## Theme 1 — Sets
Curriculum sub-topics: 4

- ✅ Venn diagrams (published)
- 🟡 Finite and infinite sets (coming soon)
- 🟡 Subsets (coming soon)
- 🟡 Probability introduction (coming soon)

**Assessment:** good visibility, partial delivery.

## Theme 2 — Numeracy
Curriculum sub-topics: 16

Published:
- ✅ Roman numerals
- ✅ Fractions
- ✅ Decimals
- ✅ Proportion and percentages

Coming soon:
- 🟡 Numbers up to 99,999,999
- 🟡 Bases
- 🟡 Four basic operations
- 🟡 Prime factorisation
- 🟡 Tests of divisibility
- 🟡 Integers

Missing entirely:
- 🔴 Expanded form using indices
- 🔴 Standard form
- 🔴 Number patterns and sequences
- 🔴 Clock arithmetic

**Assessment:** numeracy has several core high-value items still absent. This is one of the biggest remaining curriculum risks.

## Theme 3 — Interpretation of Graphs and Data
Curriculum sub-topics: 4

Published:
- ✅ Mean, median, mode and range

Coming soon:
- 🟡 Coordinates
- 🟡 Data handling placeholder currently labelled `data-handling`

Missing entirely:
- 🔴 Pie charts and travel graphs (exact curriculum id not yet represented cleanly)
- 🔴 Probability of numbers

**Assessment:** currently under-covered beyond central tendency.

## Theme 4 — Geometry
Curriculum sub-topics: 5

Coming soon:
- 🟡 Parallel and skew lines
- 🟡 Line segments and angles
- 🟡 Simple polygons
- 🟡 Bearing and scale drawing

Missing entirely:
- 🔴 Regular polygons

**Assessment:** this is the thinnest whole theme in the current build. No published geometry topic yet.

## Theme 5 — Measurement
Curriculum sub-topics: 9

Published:
- ✅ 12-hour and 24-hour clocks
- ✅ Perimeter
- ✅ Area
- ✅ Volume
- ✅ Money

Coming soon:
- 🟡 Length
- 🟡 Capacity
- 🟡 Mass and weight

Missing entirely:
- 🔴 Timetables

**Assessment:** strongest theme overall, but time needs one more topic and the measurement basics still need to be built.

## Theme 6 — Algebra
Curriculum sub-topics: 5

Published:
- ✅ Substitution
- ✅ Equations

Coming soon:
- 🟡 Algebraic expressions
- 🟡 Inequalities and solution sets

Missing entirely:
- 🔴 Algebra in real-life situations

**Assessment:** decent pilot foundation, but not yet complete against NCDC.

---

## F. Priority order for the next math work

This priority order is based on three things:
1. NCDC alignment
2. likelihood of appearing in PLE
3. usefulness for the Trainup pilot as a study platform

## Tier 1 — Highest priority next builds
These would strengthen the curriculum map fastest.

1. **Integers**
   - already listed in coming soon
   - important bridge topic in numeracy
   - close to existing algebra work

2. **Four basic operations**
   - foundational for many later topics
   - a clear NCDC requirement
   - useful for weaker learners in a real school setting

3. **Pie charts and travel graphs**
   - high-visibility data handling gap
   - especially good for “study” positioning, not just drill

4. **Timetables**
   - pairs naturally with the existing clock topic
   - practical, exam-relevant, easy to teach well

5. **Algebraic expressions**
   - natural build next to substitution and equations

## Tier 2 — High-value follow-up
1. Number patterns and sequences
2. Length
3. Capacity
4. Mass and weight
5. Regular polygons
6. Algebra in real-life situations

## Tier 3 — Lower immediate pilot urgency but still needed for full NCDC coverage
1. Finite and infinite sets
2. Subsets
3. Probability introduction
4. Bases
5. Prime factorisation
6. Tests of divisibility
7. Coordinates
8. Parallel and skew lines
9. Line segments and angles
10. Simple polygons
11. Bearing and scale drawing
12. Expanded form using indices
13. Standard form
14. Clock arithmetic
15. Probability of numbers

---

## G. Non-content issues found during the audit

## 1. Curriculum count mismatch in historical docs
Some docs refer to **40 sub-topics**, but the current `p7-math.json` contains **41** sub-topics.
This should be standardised in the next doc sweep.

## 2. App mapping mismatch for data handling
The curriculum uses:
- `pie-charts-travel-graphs`

But `COMING_SOON` currently uses:
- `data-handling`

That should be aligned so coverage tracking is exact.

## 3. Missing curriculum placeholders
The following curriculum topics need at least placeholder cards if you want the app to represent the full NCDC map:
- `expanded-form-indices`
- `standard-form`
- `number-patterns`
- `clock-arithmetic`
- `pie-charts-travel-graphs`
- `probability-of-numbers`
- `regular-polygons`
- `timetables`
- `algebra-real-life`

## 4. Study-structure consistency gap
Not all published topics are equally mature.
Current inconsistency:
- some topics are full study modules
- some are still concise earlier-style topics

This is not fatal, but it means the app is currently **partially standardised**, not fully standardised.

---

## H. Recommended next production-safe sequence

1. **Doc sweep first**
   - clear merge conflict markers
   - rewrite the status docs to reflect the true current state
   - standardise counts and current priorities

2. **Math standardisation second**
   - upgrade the 3 lighter published topics:
     - Roman numerals
     - Substitution
     - 12-hour and 24-hour clocks

3. **Then build the next missing high-priority NCDC topics**
   - Integers
   - Four basic operations
   - Pie charts and travel graphs
   - Timetables
   - Algebraic expressions

4. **Keep documenting after each topic rewrite/build**
   - what changed
   - which NCDC item it satisfies
   - whether it is study-ready
   - what still remains

---

## Bottom line

The repo is already in a strong pilot-prep position for P7 Math, but it is **not yet fully NCDC-complete**.

### Best current interpretation
- **Strong, study-ready now:** 10 topics
- **Published but still needing rewrite standardisation:** 3 topics
- **Visible in UI but not built yet:** 20 topics
- **Not even mapped into UI yet:** 9 topics

That gives us a clear continuation path without guessing.
