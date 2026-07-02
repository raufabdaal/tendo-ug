# Lesson Structure v2 Release Review — 2026-07-02

## Purpose

Final review before the grouped restructuring push.

This pass was triggered by founder/partner feedback that study content was not structured in an understandable enough way and that images/diagrams could feel off. The goal was to convert the study pages into a more child-friendly, instructional lesson format and align visuals with learning needs.

---

## Verdict

**Ready for grouped founder review/push prep.**

The four active P7 subjects now use Lesson Structure v2 consistently:

- Mathematics
- English
- Integrated Science
- Social Studies

This does not mean the product can never be improved. It means the previous structural concern is no longer a core blocker for the current Tendo scope.

---

## Verified coverage

| Subject | Topics | `note.study` | Visual brief | PLE tip |
|---|---:|---:|---:|---:|
| Mathematics | 38 | 38 | 38 | 38 |
| English | 7 | 7 | 7 | 7 |
| Integrated Science | 8 | 8 | 8 | 8 |
| Social Studies | 10 | 10 | 10 | 10 |
| **Total** | **63** | **63** | **63** | **63** |

All 63 active topic pages now have:

- Big idea
- Key words
- Learn it in parts
- Visual brief
- PLE tip
- existing worked example
- common mistakes
- try-this question
- guided practice where available
- recap and quiz

---

## Diagram / visual review

`TopicDiagram.tsx` now lists diagram support for all 63 active topics.

Verification:

- active topic IDs: 63
- diagram IDs listed: 63
- missing diagram IDs: 0
- extra diagram IDs: 0

Visual alignment improvements:

- Visual brief UI now renders as an instructional card instead of a placeholder-like dashed note.
- Maths diagram coverage was expanded to all 38 Maths topics.
- Reusable Maths instructional diagram types were added for:
  - formula cards
  - conversion ladders
  - number lines
  - flow diagrams
  - table/chart helpers
  - comparison cards
- Existing Science, SST and English diagrams remain instructional rather than decorative.

---

## Subject notes

### Mathematics

Maths is now fully converted to Lesson Structure v2 across all 38 topics.

The Maths pass focused on:

- step-by-step methods
- formula choice
- unit warnings
- conversion ladders
- number lines
- algebra translation flows
- common PLE traps such as double-counting, wrong units, wrong operation and decimal misalignment

Important nuance: Maths has 38 live topic pages and 13 central-bank topics / 195 central-bank questions. This is known and not a release blocker because all Maths topic pages still have quizzes, but full Maths central-bank parity across all 38 topics remains a future enhancement if desired.

### English

English is fully converted across all 7 official P7 topics.

The English pass focused on:

- writing formats
- audience and purpose
- tone
- letter, speech, poster, announcement and ceremony templates
- child-friendly vocabulary
- PLE writing tips

### Integrated Science

Science is fully converted across all 8 official P7 topics.

The Science pass focused on:

- key process clarity
- labelled diagrams
- safety notes
- experiment/application thinking
- respectful Population and Health wording

### Social Studies

Social Studies is fully converted across all 10 official P7 topics.

The SST pass focused on:

- maps
- timelines
- cause/effect flows
- comparison cards
- vocabulary
- PLE-ready explanation structure

---

## Build verification

Latest local production build from `app/` passed:

```txt
✓ Compiled successfully
✓ Generating static pages (147/147)
```

---

## Files most relevant to this release

App-critical:

- `app/lib/topics.ts`
- `app/lib/english-topics.ts`
- `app/lib/science-topics.ts`
- `app/lib/social-topics.ts`
- `app/components/TopicTabs.tsx`
- `app/components/TopicDiagram.tsx`
- `app/app/globals.css`

Documentation:

- `docs/spec/tendo-lesson-structure-v2.md`
- `docs/ops/lesson-structure-v2-release-review-2026-07-02.md`
- `STATUS.md`
- `HANDOFF.md`
- `CHECKLIST.md`
- `CHANGELOG.md`
- `DECISIONS.md`

---

## Remaining enhancements after push

Not blockers for this grouped release:

- Full Maths central-bank parity across all 38 topics.
- More bespoke hand-drawn diagrams for individual topics instead of reusable diagram templates.
- Deeper English comprehension passages and marking rubrics.
- Teacher feedback loop after pilot use.
- More UNEB-style paper tagging across all subjects.

---

## Recommendation

Proceed with one grouped push when the founder is ready.

This grouped milestone is stronger than pushing subject-by-subject because it addresses the original feedback holistically: lesson structure, child-friendliness and visual alignment across the whole active P7 product.
