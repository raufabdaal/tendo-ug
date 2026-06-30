# Trainup a Child Uganda — Tendo Pilot Plan

> Slow and steady. Each phase is usable before the next phase starts.

## The goal

Make Tendo ready for **Trainup a Child Uganda** to pilot with one P7 class.

- Product positioning: **a platform where upper-primary students can study**, not just revise.
- First scope: **P7 Mathematics only** for the pilot (the only subject currently built).
- Long-term picture: the platform is designed for **all four PLE subjects** (Math, English, Science, SST).
- The school will provide its own videos and branding; we build the structure for that.

## Current quality issues we must fix

1. **Correct answer bias:** Every question in `app/lib/topics.ts` and `app/lib/question-bank.ts` has `correct: 0`. That means every worksheet, quiz, and practice question has the answer as option A. This looks fake to teachers and students.
2. **Revision framing:** Topic notes are written as revision notes ("Why this matters"). They need to be rewritten as full learning notes ("What you will learn", "Try this", "Common mistakes").
3. **NCDC coverage:** The current 13 topics cover only a subset of the 40 PLE Math sub-topics. We need to map exactly what is missing and what is good enough for the pilot.
4. **School branding:** There is no multi-school customization layer yet. We need to add a way to brand the app for Trainup (and later copy that for other schools).

## Proposed phases

### Phase 1 — Fix the answer bias (this session)

- Randomize `correct` answer positions in `app/lib/topics.ts` (91 quiz questions) and `app/lib/question-bank.ts` (~195 practice questions).
- Spot-check 5–10 questions per topic to make sure the math and distractors are reasonable.
- Verify the worksheet generator now shows answers across A/B/C/D.
- Update `CHANGELOG.md` and `STATUS.md`.

### Phase 2 — Restructure topic notes as full study material

- Rewrite the note structure for the 13 published topics from "revision notes" to "learn notes".
- New required sections per topic:
  1. What you will learn (learning objectives)
  2. Key idea (the core concept)
  3. Worked example
  4. Common mistakes
  5. Try this (one practice question with explanation)
  6. Quick recap
- Do this topic-by-topic, starting with the highest-stakes ones (Fractions, Percentages, Equations, Area, Venn Diagrams).
- Stop after each topic to spot-check quality.

### Phase 3 — Map to full NCDC P7 syllabus and fill gaps

- Compare the current 13 topics against the 40 sub-topics in `content/curriculum/p7-math.json`.
- Identify which sub-topics are covered and which are missing.
- For the pilot, decide: build the missing high-priority topics, or flag them as "coming soon".
- Add a student-facing curriculum map so students can see what they have covered.

### Phase 4 — School branding and customization

- Add a lightweight school config system (e.g., a `SCHOOL` constant or a config file) that can be swapped per deployment.
- Allow the school to set:
  - School name
  - Logo / brand color
  - Custom subdomain or path
  - Their own video URLs per topic
- Create a Trainup-branded landing page / home page variant.
- Document the process so the same setup can be copied for the next school.

### Phase 5 — Pilot deployment for Trainup

- Create a separate deployment or path for Trainup a Child Uganda.
- Add the school’s provided videos to the topics they want.
- Run end-to-end tests: student topic, quiz, practice, worksheet, dashboard.
- Provide a simple onboarding checklist for the school.

## What we do NOT do in this pilot

- We do not build English / Science / SST yet. The platform is architected for them, but the pilot only needs P7 Math.
- We do not add a payment or billing system. The pilot is free.
- We do not add a real backend (Supabase). The pilot runs on localStorage, and the school dashboard can use the demo class.

## Decision to log

- **PILOT-001:** First paying/pilot customer is Trainup a Child Uganda, 3000 primary students, pilot starts with one P7 Math class.
- **PILOT-002:** Pilot scope is P7 Math only; other subjects are part of the vision but not in the pilot build.
- **PILOT-003:** School provides its own videos; Tendo provides the video URL slots and branding layer.
- **PILOT-004:** Quality comes before breadth. The answer bias is fixed before any school sees the app.

## Next action

Start Phase 1: fix the answer bias across the quiz and question bank.
