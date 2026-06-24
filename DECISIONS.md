# DECISIONS — Tendo (append-only)

> Architecture & product decisions and reversals. Format per `AGENT_BRIEF.md`. Never edit historical entries; supersede with a new one.

---

## DEV-001 · 2026-06-24 · Scope = P6 & P7 only (PLE-bound), not P1

**Previous decision (from founder's opening brief):** "core classes we're targeting p1 and p7"
**Problem reported:** Founder clarified during questionnaire: "no no it has to be p6 and p7 the p1 was typo"
**New decision:** v0 serves **P7 first**, **P6 second**. Both PLE-bound, ~80% syllabus overlap.
**Reasoning:** P1 and P7 are wildly different user profiles (6-year-old learning to read vs 13-year-old cramming for PLE). P6+P7 are aligned both pedagogically (PLE prep) and commercially (same parent-paying-for-exam-success motive).
**Tracked across:** `docs/spec/PRD.md`, `content/curriculum/p7-math.json`, all sales docs.

---

## DEV-002 · 2026-06-24 · No login in v0; localStorage progress only

**Previous decision:** none (open question at scoping)
**Problem anticipated:** Real auth (Clerk/Supabase) adds ~3 days of work, requires phone numbers (privacy issue for minors), and slows the demo down with a sign-up wall. Schools can't quickly show parents the product if it gates on login.
**New decision:** v0 ships with **no login**. Progress is stored in `localStorage`. Phase 4 (when we sign the first paying school) introduces a per-school slug + simple class code.
**Reasoning:** Mirrors Sasa's working pattern. Free. Pluggable later. Removes the biggest demo-killer.
**Tracked across:** `docs/spec/PRD.md`, `preview.html` (no auth UI), Phase 1 plan in `HANDOFF.md`.

---

## DEV-003 · 2026-06-24 · B2B2C — sell to schools, schools resell to parents

**Previous decision:** Founder had floated both direct-to-student-free and parent-paid models in earlier brainstorming.
**New decision:** **Schools are the customer.** They package Tendo into their fee structure (or sell as a per-term add-on). We charge schools a **per-student maintenance fee** quarterly or annually.
**Reasoning:**
- Parents already trust schools with payment decisions for tuition, uniforms, scholastic materials.
- One school sale = 30–200 student licenses in one go; vastly better CAC than direct.
- Schools have a built-in distribution mechanism (the school WhatsApp group, the parent meeting, the report-card envelope).
- Aligns Tendo's success with the school's PLE performance reputation — they actively *want* it to work.
**Tracked across:** `docs/sales/*` (entire sales pack is built around school-as-buyer), `docs/spec/PRD.md`.

---

## DEV-004 · 2026-06-24 · Content sourced via hybrid AI-draft + human review

**Previous decision:** none (open question at scoping)
**New decision:** Every topic note and quiz is **drafted by AI** from two sources — (a) NCDC syllabus structure (`p7-math.json`), and (b) past PLE papers — then lands in a **review queue** for human (founder or recruited teacher) approval before publishing. Prompts live in `docs/prompts/`.
**Reasoning:**
- Pure AI = inaccuracy risk on a subject as concrete as math. Unacceptable for a paid product.
- Pure human = too slow to populate 40 sub-topics.
- Hybrid hits both speed and accuracy. Same pattern is documented in `DEV_JOURNAL.md` as "free-tier AI is good enough for v0."
**Tracked across:** `docs/spec/content-guidelines.md`, `docs/prompts/` (Phase 2), Phase 2 plan.

---

## DEV-005 · 2026-06-24 · Math only in v0; other subjects "Coming soon — Phase 2"

**Previous decision:** Founder originally implied multi-subject coverage for the secondary platform (Sasa).
**Problem anticipated:** Trying to do English + Math + Science + SST simultaneously is what made Sasa "too complex too fast" (founder's words). Tendo's mandate is "least complex, most effective."
**New decision:** v0 ships **Mathematics only** (P7). The other three PLE subjects (English, Integrated Science, Social Studies) appear in the UI as labelled, disabled cards with a "Coming soon" tag — per `AGENT_BRIEF.md` rule on honest UI ("Label 'Coming soon' with the phase number").
**Reasoning:**
- Math is the most measurable subject — easiest "grades went up" story for sales.
- Math content is the most quiz-friendly (objectively right/wrong answers).
- Past papers are richest for math.
- Showing the other three as Coming Soon signals breadth without overpromising.
**Tracked across:** `docs/spec/PRD.md`, `preview.html`, all sales docs (only Math is promised today).
