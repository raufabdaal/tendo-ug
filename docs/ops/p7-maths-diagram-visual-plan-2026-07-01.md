# P7 Mathematics Diagram / Visual Plan

Date: 2026-07-01
Repo: `tendo-ug`
Scope: P7 Mathematics
Status: Planning pass before implementation

## Why this pass matters
The maths content is now much stronger, but some topics will feel significantly clearer and more teachable with simple visual support. The goal is not to decorate the product. The goal is to reduce friction in topics where a learner understands faster when they can see the structure, layout, path, or relationship.

This plan stays aligned to Uganda NCDC P7 Mathematics and prioritises visuals that improve understanding, not visuals that merely make the screen look busy.

## Product reality
Current maths lessons are text-first with quiz support. The current product does not yet have a dedicated diagram component system for topic pages. That means the safest near-term move is:

1. identify the highest-value maths topics for visuals,
2. define what kind of visual each needs,
3. separate must-have visuals from nice-to-have visuals,
4. avoid a giant design system detour before maths completion is called.

## Recommendation
Do visuals in two layers.

### Layer 1 — lightweight, high-impact, near-term
Add simple inline or reusable SVG-based diagrams to the most diagram-dependent topics first.

Best first candidates:
- Venn diagrams (2 events)
- Line segments and angles
- Simple polygons
- Regular polygons
- Coordinates
- Parallel and skew lines
- Bearing and scale drawing
- Pie charts and travel graphs
- 12-hour and 24-hour clocks
- Timetables

### Layer 2 — concept aids after the first wave
Add supporting visuals for topics where text works, but a visual would still reduce confusion.

Good second candidates:
- Fractions, ordering and operations
- Decimals
- Number patterns
- Integers
- Probability (introduction)
- Probability of numbers and events
- Perimeter
- Area
- Volume
- Length / Mass / Capacity conversion ladders

## Priority ranking by learning impact

### Priority A — should get visuals first
These topics are the most visual by nature and give the biggest clarity gain.

1. Venn diagrams (2 events)
   - Visual needed: two-circle Venn with labelled regions: only A, both, only B, neither
   - Why: learners understand overlap faster from a diagram than from prose

2. Line segments and angles
   - Visual needed: small angle gallery showing acute, right, obtuse, straight, reflex
   - Why: this is almost inherently visual

3. Coordinates
   - Visual needed: coordinate grid with sample plotted point and axis labels
   - Why: “across first, then up” becomes instantly clearer

4. Pie charts and travel graphs
   - Visual needed: one sample pie chart and one sample distance-time graph with flat/rising/falling sections
   - Why: graph reading is much easier when the learner sees the shape behaviour

5. Bearing and scale drawing
   - Visual needed: compass/north reference with clockwise angle examples; simple scale example
   - Why: bearings are hard to imagine from text only

6. Parallel and skew lines
   - Visual needed: one flat-plane parallel/intersecting example and one cuboid-style skew example
   - Why: skew lines are especially hard without a picture

7. Simple polygons / Regular polygons
   - Visual needed: labelled family examples with equal-side/equal-angle cues
   - Why: classification is much faster visually

### Priority B — strong value, but not first blocker
8. Venn-adjacent subsets
   - Visual needed: one set completely inside another

9. 12-hour and 24-hour clocks
   - Visual needed: analogue + digital examples or clean conversion examples

10. Timetables
   - Visual needed: sample mini timetable with highlighted row/column reading path

11. Integers
   - Visual needed: horizontal number line with negative and positive values

12. Probability topics
   - Visual needed: sample counters/cards and favourable-vs-total cue

### Priority C — useful but can wait
13. Fractions
   - Visual needed: fraction bars or part-whole rectangles

14. Perimeter / Area / Volume
   - Visual needed: shape outlines / tiled rectangles / cuboids

15. Length / Mass / Capacity
   - Visual needed: conversion ladder or unit staircase

16. Number patterns
   - Visual needed: sequence arrows or term-to-term flow

## Suggested implementation shape
Safest next implementation path:

### Option 1 — single reusable `TopicDiagram` component
Create a small reusable component that renders a diagram based on a `topicId` map.

Pros:
- keeps diagrams separate from long topic text
- easy to roll out topic by topic
- avoids bloating `topics.ts` with SVG markup

Cons:
- requires a little component wiring

### Option 2 — diagram metadata in topic data
Store optional visual metadata in each topic object and render a generic block in `TopicTabs`.

Pros:
- content and visual stay attached

Cons:
- may make `topics.ts` much heavier and harder to maintain
- riskier during this final stretch

### Recommendation
Use **Option 1** first.

A practical pattern:
- `app/components/TopicDiagram.tsx`
- `app/lib/topic-diagrams.tsx` or a simple internal switch/map
- render the diagram near the top of the Read tab, after the intro and before the detailed teaching notes

## UX recommendation
For now, each supported topic should get:
- a short heading like `See it`
- one compact visual
- a one-line caption reinforcing the teaching point

Avoid:
- giant illustrations
- decorative stock images
- anything that pushes the main learning text too far down
- diagrams that require external image hosting for basic rendering

## Technical recommendation
Because the in-app preview has no network access, diagrams should be:
- inline SVG,
- or local assets,
- or CSS-built simple visuals.

Preferred choice: **inline SVG**

Why:
- crisp on all screens
- easy to colour and label
- no external dependencies
- safe in workspace preview and deployed app

## First implementation wave I would recommend
If we choose to implement before calling maths done, keep it intentionally small.

### Best first 4 diagrams
1. `venn-diagrams-2-events`
2. `line-segments-angles`
3. `coordinates`
4. `data-handling`

That gives strong visual support across:
- sets
- geometry
- graph interpretation

### Best second 4 diagrams
5. `bearing-scale-drawing`
6. `parallel-skew-lines`
7. `simple-polygons`
8. `regular-polygons`

## Completion judgment
The maths product can be considered materially complete without implementing all diagrams immediately **only if**:
- topic coverage is strong and honest,
- structure is improved,
- diagram strategy is explicit,
- the most visual topics are clearly queued for implementation.

But if we want the cleanest possible founder-level completion claim, then implementing at least a **small first-wave diagram set** would strengthen that claim meaningfully.

## Final recommendation
Do not try to diagram every maths topic before moving to other subjects.

Instead:
1. finish maths structure and final audit,
2. decide whether to add a very small first-wave diagram component now,
3. if yes, implement only the highest-value 4 to 8 topics,
4. then call maths complete with a truthful note that advanced visual enrichment can continue later.
