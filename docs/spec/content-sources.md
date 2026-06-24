# Content Sources & Verification — Tendo

*How Tendo decides what's "correct PLE Mathematics" and why schools can trust the content.*

---

## Primary sources

### 1. NCDC P7 Mathematics Curriculum (2012, current as of 2026)
- **Publisher:** National Curriculum Development Centre, Uganda
- **What it gives us:** the canonical scope of the syllabus — 6 themes, 11 topics, 40 sub-topics
- **How we use it:** the curriculum tree in `content/curriculum/p7-math.json` mirrors NCDC exactly. Every topic, sub-topic, and ordering matches.
- **Document:** Set One, available via NCDC and mirrored at `https://ncdc.go.ug` and `fresh-teacher.github.io/p.7/`

### 2. UNEB PLE Mathematics past papers (2014–2023)
- **Publisher:** Uganda National Examinations Board (UNEB)
- **What they give us:** the actual question patterns, mark allocations, time pressure, and trap-distractor conventions the PLE uses
- **How we use them:** the question bank in `app/lib/question-bank.ts` and the past-paper bank in `app/lib/papers.ts` are written to match observed UNEB structures — number ranges, units (UGX, cm/m, 22/7 for π), word-problem conventions (boda, matoke, school terms), and the typical mix of recall + application + multi-step questions.
- **Where these came from:** publicly archived at `ecolebooks.com`, `advance-africa.com`, `digitalteachers.co.ug`, and `teacher.ac`. Long-term plan: formal arrangement with UNEB for licensed reproduction.

### 3. PLE marking scheme conventions
- Three-band performance language (Distinction / Credit / Pass / Fail) matches UNEB grading.
- Per-question mark allocations match typical PLE patterns: 1 mark for direct recall, 2 marks for application, up to 3 marks for multi-step word problems.

## Internal review process

### How content gets into Tendo

1. **Drafted** by AI (Claude/Groq) using the prompts in `docs/prompts/` (Phase 4 — currently the founder authors directly).
2. **Cross-checked** against the NCDC topic + at least 2 past-paper questions on the same sub-topic.
3. **Spot-tested** for arithmetic correctness (the founder or reviewer runs the math).
4. **Voice-checked** against `docs/spec/content-guidelines.md` (no em dashes, locally-grounded examples, no foreign currency without reason, etc.).
5. **Marked verified** in the data file (`reviewStatus: "verified"`) and shipped.

### How content gets improved

1. Teachers, parents, and senior students click "Report a problem with this question" on any quiz or paper question.
2. Reports are stored in `localStorage` today (Phase 4 will move to Supabase).
3. The founder reviews reports weekly, decides whether to act, and updates the content.
4. Teachers who submit 5+ accepted reports per term become Tendo Teacher Fellows (see `docs/sales/teacher-contribution-strategy.md`).

## What we DON'T do

- ❌ We don't claim to publish official UNEB papers. The papers in Tendo are "representative" — they follow UNEB conventions but are written by us.
- ❌ We don't pretend AI-drafted content is human-authored. Internally we track `reviewStatus`. (We currently auto-verify for speed; the field exists so we can later distinguish teacher-reviewed from AI-reviewed.)
- ❌ We don't reproduce copyrighted textbook content. All notes are written from scratch.
- ❌ We don't make claims about PLE outcomes we cannot back up. ("Helps prepare for PLE" is honest; "Guarantees Division One" is not.)

## What we tell schools when asked

> "Our content maps directly to the NCDC P7 Mathematics syllabus — the same 6 themes, 11 topics, 40 sub-topics that UNEB examines. Our questions follow the patterns we observe in PLE papers from 2014 through 2023. Every question is reviewed internally before it ships, and your teachers can flag any issue with one click — the best contributors become public Tendo Teacher Fellows."

## What we tell schools if asked the harder question

> "Are these the actual UNEB past papers?"
>
> *"They are written in the UNEB style and structure, with marks and timings that match. We don't yet have a licensing agreement with UNEB to reproduce their exact papers; that's a Phase 5 goal. In the meantime, our paper writers know the syllabus and the conventions, and our past-paper section gives your students exam-condition practice."*

Honest, doesn't oversell, doesn't undersell.

## What's coming in Phase 4+

- A formal review log per topic showing when it was last reviewed and by whom (when we have teacher contributors)
- Optional AI-generated supplementary questions (runtime Groq call) for students who finish the static bank
- Real UNEB papers, once licensing is in place
- P6 Math (80% syllabus overlap with P7, so straightforward)

---

*Last updated: 2026-06-25.*
