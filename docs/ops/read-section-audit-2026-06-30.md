# Read Section Audit — 2026-06-30

## Why this audit comes before quiz work

The founder raised the right concern:

> Even if there is a video, is the Read section really enough for a child to understand what is required?

That is the correct question.

If the Read section is too short, too robotic, too summary-like, or too compressed, then better quizzes alone will not make the product study-ready.

So before auditing the question layer in depth, we should check whether the **teaching layer** is actually teaching.

---

## Main finding

The current Read experience is **better than a bare summary**, but it is still **not yet strong enough to be treated as textbook-grade study material**.

It is in a middle state:
- stronger than a cram-note page
- weaker than a real learnable lesson

That means the founder's concern is valid.
This is not paranoia.

---

## What is working already

## 1. The app already has a move in the right direction
The newer topics do include more than the original lightweight note format.
Many now have:
- learning objectives
- multi-paragraph explanation
- worked example
- common mistakes
- try-this prompt
- recap

That is a real improvement over the earlier summary-only style.

## 2. The content is at least structured predictably
`TopicTabs.tsx` renders a repeatable lesson structure:
- What you will learn
- What you need to know
- Worked example
- Common mistakes
- Try this
- Quick recap

This predictability is useful for learners.

## 3. Some topics already have enough concept mass to be a decent first lesson
The stronger rewritten topics such as:
- Fractions
- Decimals
- Proportion and percentages
- Equations
- Area
- Volume
- Money

have enough material to feel more substantial than a revision card.

---

## The bigger problems

## 1. The Read section is still too compressed for full study in many topics
Even the stronger topics often try to compress too much into one scrollable page.

This creates a problem:
- the page looks full
- but the learner may still not have had the concept broken down enough

For a real student, especially one struggling alone on a phone, the content often still needs:
- more step-by-step build-up
- smaller sub-ideas
- more gradual examples
- more learner-friendly wording

In short:
**the material often explains what the topic is, but not yet enough of how to learn it.**

## 2. The current structure still sounds like a good teacher summary, not a full self-study lesson
The section label **"What you need to know"** is one clue.
It sounds efficient, but it also sounds like a compressed note dump.

For a self-study learner, better teaching language might be closer to:
- Start here
- First idea
- Next idea
- Let's work through one example
- Watch out for this mistake
- Now try one
- What to remember

That is more guided and less mechanical.

## 3. The voice is still somewhat robotic
The founder is right about this.

The content is not terrible, but in many places it still reads like:
- correct information
- organised clearly
- but written from the outside

Instead of feeling like a patient teacher speaking to a Ugandan upper-primary learner, it sometimes feels like a neat AI-assembled explanation.

Typical signs:
- over-formal transitions
- repetitive instructional phrasing
- very clean but emotionally flat wording
- explanatory paragraphs that are accurate but not warm enough

## 4. One topic page is still trying to do too much at once
This is the structural issue the founder noticed.

A whole curriculum topic often should not be flattened into a single uninterrupted Read page.
For actual study use, some topics need to be broken into **digestible sub-sections**.

Examples:

### Fractions
Could naturally split into:
- what a fraction means
- equivalent fractions and ordering
- adding/subtracting fractions
- multiplying/dividing fractions
- word problems with fractions

### Percentages
Could split into:
- meaning of percent
- finding a percentage of a quantity
- expressing one number as a percentage of another
- increase and decrease
- profit, loss, and discount
- simple interest

### Time
Could split into:
- 12-hour and 24-hour conversion
- duration
- timetables

Right now, some pages are acting like **one-page compressed chapter summaries**.
That is acceptable for revision, but not yet ideal for self-study.

---

## Curriculum alignment note

The founder asked whether we can just pull abundant internet content or even textbook-like material.

### Important boundary
We should **not** blindly paste whole copyrighted book content.

### Better approach
We should do this instead:
1. Use the NCDC curriculum map as the non-negotiable scope boundary.
2. Use publicly available curriculum-aligned materials as reference and comparison.
3. Re-express the teaching in our own structure and voice.
4. Use future teacher feedback to improve clarity and examples.

That gives us:
- curriculum alignment
- safer content provenance
- better product consistency
- less legal risk

Teacher feedback can and should become the final improvement layer, but it should refine a strong base, not rescue a weak one.

---

## Product conclusion

## Best next move
Before a deep quiz/question-bank audit, we should do a **Read-layer redesign decision**.

Not necessarily rewrite all content immediately, but first decide:

### A. Keep one page per topic, but improve the teaching depth and voice
or
### B. Move toward sub-topic lesson chunks inside each topic

The founder's instinct strongly points toward **B** for at least the heavier topics.

I agree.

---

## Recommended design direction

## Tier 1: immediate content standardisation
First improve the current read experience without needing a full route refactor yet.

For the published topics, rewrite toward this lesson flow:
- What you will learn
- Start with this idea
- Learn it step by step
- Worked example 1
- Worked example 2 (where needed)
- Common mistakes
- Try one yourself
- What to remember

Also improve the tone:
- shorter sentences
- less formal phrasing
- more direct student-facing language
- more Uganda-grounded examples where useful

## Tier 2: structure redesign for heavier topics
Then, for larger topics, split into digestible sub-lessons.

Possible future structure:
- Topic page = overview
- Read section = sub-topic cards or mini-lessons
- each sub-topic can hold a smaller explanation + one example + one quick check

This would make the product much closer to an actual study tool.

---

## My recommendation on sequence

Given the founder's concern, the best course is:

1. **Audit the read layer first**
2. **Rewrite/upgrade the weaker read experience first**
3. **Then audit quizzes and question bank against the improved teaching layer**

Why this order?
Because quizzes should test what the student has been clearly taught.
If the teaching layer is not strong enough yet, the assessment layer will be built on shaky ground.

---

## Immediate next practical move

I recommend the next milestone be:

### “Read-layer standard redesign + first topic upgrades”

This milestone should do two things:
1. define the improved lesson-writing pattern
2. apply it first to the weaker published topics:
   - Roman numerals
   - Substitution
   - 12-hour and 24-hour clocks

Then we reassess whether the stronger 10 topics also need a second-pass rewrite for deeper study use.

---

## Bottom line

The founder's concern is correct.

The current Read sections are:
- **not bad**
- **not enough yet** for the long-term goal of real independent study

So the best next move is **not** to jump straight into quiz auditing.
The better next move is to strengthen the teaching layer first, then align the practice layer after that.
