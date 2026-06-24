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

## DEV-011 · 2026-06-25 · Teacher Dashboard is the killer demo feature, built before video

**Previous decision:** Phase 2 was originally framed as "more topics + content engine."
**Problem reported:** Marketing partner correctly observed that head teachers (the buyer) don't experience student engagement directly. They experience reports. Founder proposed video first; we challenged that and reframed.
**New decision:** Phase 2 ships three sales-leverage features in this order: (1) Past PLE papers with student + teacher modes, (2) Watch/Listen/Read tabs with free browser TTS, (3) Teacher dashboard with WhatsApp-pasteable progress report. Video deferred to Phase 3 as polish, generated externally in NotebookLM for ~10 high-stakes topics, hosted on YouTube.
**Reasoning:**
- Head teachers buy products that make their school look serious to parents. The dashboard screenshot does that; an auto-video pipeline does not.
- TTS is free and zero-build vs. video which is bandwidth-expensive on Ugandan student devices.
- All three features integrate cleanly with existing localStorage progress, no new infrastructure.
**Tracked across:** `app/components/PaperAttempt.tsx`, `app/components/PaperBrowse.tsx`, `app/components/TopicTabs.tsx`, `app/components/TeacherDashboard.tsx`, all new routes under `/papers` and `/teacher`, sales pack updates.

---

## DEV-010 · 2026-06-25 · No streaks, no gamification, no parent-portal in v0

**Previous decision (from founder's brainstorm):** Marketing partner pushed for streaks, leaderboards, and a parent-facing app to maximise "wow factor."
**New decision:** Explicit no. The parent's view of Tendo is the WhatsApp message from the school plus the teacher's exported report. No streaks, no leaderboards, no badges.
**Reasoning:**
- Streaks/leaderboards create anxiety, encourage cheating on auto-marked quizzes, and look "consumer-tech" to head teachers (the wrong signal — they want serious).
- A parent app is a second product. Defer to Phase 5+ when there's revenue to justify the support cost.
- Per `AGENT_BRIEF.md`: "restraint over decoration."
**Tracked across:** absence in all PRD/spec docs, explicit mention in objections sheet.

---

## DEV-009 · 2026-06-25 · Teacher dashboard runs on localStorage in v0 with explicit honest-UI banner

**Previous decision:** No teacher-facing UI existed.
**Problem anticipated:** A real teacher dashboard needs a real backend (Supabase). Building Supabase auth + DB is a multi-day Phase 4 commitment. But pitching schools needs the dashboard NOW.
**New decision:** Build the dashboard reading from localStorage on the teacher's device. Display a prominent banner that says "Demo dashboard. This shows the activity on THIS device. In the school-pilot version, each student logs in with a class code and their progress reports here from any phone they use."
**Reasoning:** Honest UI (per `AGENT_BRIEF.md`) preserves trust while letting us demo the feature today. The transition to real auth in Phase 4 is a backend swap; the UI doesn't change.
**Tracked across:** `app/components/TeacherDashboard.tsx` (the banner is in the JSX), Phase 4 plan in HANDOFF.md.

---

## DEV-008 · 2026-06-24 · Pinned to a patched Next.js (15.5.19, not 15.0.3)

**Previous decision (DEV-006 / Phase 1 scaffold):** I pinned `next@15.0.3` and `react@19.0.0-rc-*` because that was what I had in my head as current.
**Problem reported:** Vercel build succeeded on 15.0.3 but the deployment failed with: *"Vulnerable version of Next.js detected, please update immediately."* — Vercel now blocks deploys of Next.js versions affected by [CVE-2025-66478](https://nextjs.org/blog/CVE-2025-66478).
**New decision:** Bumped `next` to `15.5.19` (latest 15.x patched as of 2026-06-24) and React/React-DOM to `^19.0.0` (stable, not RC). Pinned-major, caret-minor — predictable but auto-patches security updates.
**Reasoning:** No code changes needed; Next.js 15.0 → 15.5 is backward-compatible. Build verified locally (8 routes SSG, all curls return 200). Avoids the Vercel deploy-block.
**Tracked across:** `app/package.json`, `app/package-lock.json`.

**Lesson:** When scaffolding, check the latest *patched* version on the day of, not just "latest" in memory. Vercel actively blocks vulnerable framework versions in 2026 — a fact worth knowing.

---

## DEV-007 · 2026-06-24 · No Tailwind / no UI library — plain CSS in `app/app/globals.css`

**Previous decision:** Sasa uses Tailwind (and that worked).
**Problem anticipated:** Tailwind would mean ~50 more npm packages, a `tailwind.config.ts`, a `postcss.config.mjs`, more things that can version-mismatch, and a `className` soup that's harder for a vibe coder to scan. Tendo's mandate is "least complex, most effective." We don't need responsive grid magic for a single-column 760px text-first app.
**New decision:** All styling in one file (`app/app/globals.css`), CSS custom properties for the design tokens, semantic class names that match what's in `docs/spec/design-philosophy.md`.
**Reasoning:** Smaller install, faster builds, fewer surprises, easier for the founder to read and tweak directly. If/when we need atomic utilities at scale, we add Tailwind and log a reversal.
**Tracked across:** `app/package.json` (no tailwind dependency), `app/app/globals.css`, all `.tsx` files (no `className="grid grid-cols..."`).

---

## DEV-006 · 2026-06-24 · Phase 1 content lives in `lib/topics.ts`, not MDX

**Previous decision (from Sasa):** Sasa uses MDX for content; we initially planned the same for Tendo (see `content/topics/` folder).
**Problem anticipated:** To ship Phase 1 in one session, we'd need either (a) a working MDX pipeline plus 3 hand-authored MDX files, or (b) typed TypeScript data plus 3 entries. (b) is dramatically faster and lets us validate the UX without committing to a content schema before we know what feels right.
**New decision:** All Phase 1 topic content lives in `app/lib/topics.ts` as a `Topic[]` constant with full type safety. Phase 2 will migrate to MDX once we have 5+ topics and know what shape really fits.
**Reasoning:** Defers a decision we don't have enough data for. Type-checking gives us compile-time errors if a topic is malformed. The schema in `lib/topics.ts` is the source of truth for what an MDX frontmatter will eventually need to express.
**Tracked across:** `app/lib/topics.ts`, `app/app/math/p7/[topic]/page.tsx`, `content/topics/` (empty, awaiting Phase 2).

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
