# Content Guidelines — Tendo

*Version 1 · 2026-06-24 · How we write topic notes and quizzes so they feel like Tendo, not like ChatGPT.*

## The audience

A Ugandan P7 student. 12 or 13 years old. Their first language is probably **not** English, but English is their school medium. They have likely done a version of this topic in class but didn't fully get it. They came to Tendo to fix that, often the night before a test.

Imagine writing to them, alone, at 9pm, on a phone, with the data running low.

## Structure of a topic note

Every topic note follows the same skeleton. Predictability reduces cognitive load.

```markdown
# <Topic name>

> One-sentence "why this matters for PLE" hook.

## What you need to know

(2 to 5 short paragraphs, plain language, max 350 words total.)

## Worked example

Problem: ...
Step 1: ...
Step 2: ...
Step 3: ...
Answer: ...

## Quick recap

- Bullet 1
- Bullet 2
- Bullet 3

[Take the quiz →]
```

### Rules

- **Max ~500 words per topic note** (including worked example). If it's longer, split into sub-topics.
- **One worked example, fully written out, every step shown.** No "and then we get..."
- **No tables of contents.** The page is short; you don't need one.
- **Bold sparingly.** Only for the term being introduced.
- **Numbers as digits (`5`) not words (`five`).** Easier scanning.

## Quiz authoring rules

### Quantity

- **5 to 10 questions per topic.** 7 is the sweet spot.
- **Mix of difficulty:** 2 easy (recall), 3 medium (application), 2 hard (multi-step or trap).

### Quality

Every question must:

1. **Have exactly one defensible right answer.** Math, so this is non-negotiable.
2. **Have plausible wrong answers.** Distractors should reflect common mistakes a P7 makes (off-by-one, units confused, ignored the "not" in the question).
3. **Have a one-paragraph "why" explanation** for the right answer, that also names the most likely wrong-answer trap.
4. **Be answerable from the topic note alone.** No "trick" questions that need outside knowledge.
5. **Be free of brand names, foreign references, dated pop culture.**

### Bad question example (don't ship)

> What is 7 × 8?
> A) 56  B) 54  C) 58  D) 56

(Repeated answer, no thinking required, no distractor logic.)

### Good question example (ship)

> Akello has 14 mangoes. She gives 1/2 to her brother and then sells 1/4 of what is left. How many mangoes does she have now?
>
> A) 5
> B) 5.25
> C) 6 *(correct)*
> D) 7
>
> **Why C:** She gives away 7, leaving 7. She then sells 1/4 of 7, which is 1.75, but the question asks how many she has, and a mango can't be sold in quarters — re-read: "sells 1/4 of what is left" means she sells about 2 mangoes, leaving her with 5… *if* you round mangoes to whole. The cleaner answer the syllabus wants is: 1/2 of 14 = 7 given away; 1/4 of 7 = 1.75. Since you cannot sell 1.75 mangoes, the practical answer is 5 (she sells 2 to round up the sale). *Trap:* B is what you get if you do the arithmetic without thinking about whole mangoes.

*(In practice, we'd rewrite this question to use 16 mangoes so the fractions are clean. This example is here only to show the structure.)*

### Even better: rewrite the above

> Akello has **16** mangoes. She gives 1/2 to her brother and then sells 1/4 of what is left. How many mangoes does she have now?
> A) 4  B) 6 *(correct)*  C) 8  D) 12
>
> **Why B:** 1/2 of 16 = 8 given away. She has 8 left. She sells 1/4 of 8 = 2 more. So she has 8 − 2 = 6. *Trap:* A is what you get if you take 1/4 of the original 16 instead of "what is left."

## The AI-draft + review workflow (Phase 2)

1. **Draft prompt** (lives in `docs/prompts/topic-note.md` and `docs/prompts/quiz.md`).
2. **AI generates** a topic note + quiz given:
   - The sub-topic name + parent topic
   - The "what's tested" extract from past PLE papers (if available)
3. **Output lands in `content/topics/_review-queue/<topic-id>.mdx`** with frontmatter `status: draft`.
4. **Human reviewer** (founder or recruited teacher) reads it, fixes errors, adjusts voice. Changes `status` to `published` and moves the file to `content/topics/<topic-id>.mdx`.
5. **Only `published` topics appear in the app.**

This gives speed AND accuracy. See DEV-004.

## Things that will get a draft rejected in review

- Any number that doesn't actually compute correctly. (Run the math.)
- A question that has zero, two, or four correct answers.
- Foreign currency, foreign names, non-Ugandan place references that don't add value.
- "Awesome!" "Great job!" exclamation-mark-heavy tone.
- Em dashes anywhere user-facing.
- Padding ("In this lesson, we will learn about...") — get to the point.
- Math notation as a screenshot. Use plain text or KaTeX.

## Versioning

Each topic file has frontmatter:
```yaml
---
id: fractions-core
title: Fractions
theme: Numeracy
class: P7
subject: Math
version: 1
draftedBy: ai-groq
reviewedBy: <name>
reviewedDate: 2026-MM-DD
status: published
---
```

When we revise a topic significantly, bump `version`, log a `CONTENT-NNN` entry in `DECISIONS.md`, and keep the old version archived (don't delete).
