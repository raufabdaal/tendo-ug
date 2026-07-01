# P7 English deepening pass — 2026-07-01

## Verdict

P7 English has moved from “complete enough” to a stronger, writing-rich state closer to the depth standard expected for the finished core product.

The subject still has fewer top-level topics than Mathematics because the official P7 English outline has fewer broad themes. The right completion standard for English is therefore not topic count; it is depth inside each theme: writing formats, guided prompts, planning steps, checklists, templates, grammar/vocabulary practice and teacher usability.

---

## What changed

### 1. Topic pages now support writing practice packs
The shared topic UI now supports an optional `writingTasks` field.

Each writing task can show:
- title
- prompt
- planning steps
- marking checklist
- optional model opening

Updated files:
- `app/lib/topics.ts`
- `app/components/TopicTabs.tsx`
- `app/app/globals.css`

### 2. English now has writing practice on all 7 topics
Writing tasks were added for:

1. School Holidays
   - composition: my useful holiday
2. Letter Writing
   - formal letter: request for permission
   - informal letter: holiday news
3. Examinations
   - paragraph: how to prepare for examinations
4. Electronic Media
   - announcement: school radio message
5. Rights, Responsibilities and Freedom
   - balanced paragraph: rights and responsibilities
   - short talk: caring for animals
6. Environmental Protection
   - speech: protecting our environment
   - poster message: clean water source
7. Ceremonies
   - invitation: marriage ceremony
   - condolence message: funeral

### 3. English practice-bank depth increased
English multiple-choice practice was expanded from 12 questions per topic to 20 questions per topic.

Current English practice depth:
- 7 topics
- 20 questions per topic
- 140 English practice questions total

This gives English stronger daily-practice usefulness while the writing packs handle the open-ended writing side that MCQs cannot fully assess.

---

## Why this matters

English cannot be judged by the same topic-count standard as Maths. Maths has many discrete examinable subtopics. English has fewer official themes, but each theme carries multiple skills:
- vocabulary
- grammar
- comprehension
- writing format
- tone/register
- paragraphing
- public communication
- respectful language

This pass addresses that by adding structured writing practice and more practice-bank depth without inventing extra official topics.

---

## Build verification

Latest build after English deepening:

- `✓ Compiled successfully`
- `✓ Generating static pages (147/147)`

---

## Remaining future English enhancements

Still useful later, but no longer a blocker for product depth:
- dedicated comprehension passages per topic
- teacher marking rubrics with marks breakdown
- short-answer grammar questions, not only MCQs
- UNEB-style English paper sections
- model full compositions/letters/speeches where appropriate
