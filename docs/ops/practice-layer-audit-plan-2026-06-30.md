# Practice Layer Audit Plan — 2026-06-30

## Why this milestone starts now

The published Read sections have now received major quality upgrades across three batches.
That means the next major quality question is no longer:
- "Can a child read this?"

It is now:
- "Do the quizzes and practice questions actually match what the child has been taught?"

This milestone audits the **assessment layer**.

---

## Audit scope

### Layer 1 — topic quizzes in `app/lib/topics.ts`
Check for each published topic:
- alignment with the rewritten Read lesson
- difficulty progression
- distractor quality
- explanation quality
- whether questions are too summary-like or too narrow

### Layer 2 — question bank in `app/lib/question-bank.ts`
Check:
- topic coverage
- difficulty spread
- realism of distractors
- repetition / shallow variation
- fit for both student practice and teacher worksheets

---

## Output we want

For each topic, classify practice quality as:
- **Strong**
- **Usable but needs revision**
- **Weak / rewrite needed**

Also identify:
- which topics can stay as they are for now
- which need quiz cleanup only
- which need deeper bank rewrites
- whether some greyed-out topics should be brought forward next because the current published set is now becoming stronger

---

## Founder guidance reflected in this plan

The founder wants us to move at the maximum point that still preserves quality.
So this audit will not be artificially slow, but it will still avoid half-baked recommendations.

That means:
- we move in larger quality-safe batches
- we document clearly
- we use the current stronger content base to make sharper decisions about what to build next
