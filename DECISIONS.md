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

## DEV-017 · 2026-06-25 · Pre-generated question bank, not runtime AI generation

**Previous decision:** Marketing partner wanted "infinite AI-generated questions" for both students and teachers.
**Problem anticipated:** Runtime AI generation needs (a) API keys with rotation, (b) error handling for API outages, (c) 2-5 second latency per question on Ugandan internet, (d) ongoing cost once free tiers rate-limit, (e) doesn't work offline. Quality also varies per call.
**New decision:** Pre-generate a static question bank (~200 questions across 13 topics, 12-15 per topic) in `app/lib/question-bank.ts`. Practice mode and Worksheet generator both sample from it. From a student/teacher perspective, the experience is "infinite" because they'll never repeat in a session. If a school later wants TRUE runtime generation, we add a "Generate fresh questions" button that calls Groq — but that's a Phase 5+ nice-to-have, not a Phase 4 must-have.
**Reasoning:**
- Zero ops, zero cost, zero latency, offline-capable
- Every question reviewed before ship; runtime AI can't promise that
- Bank can be expanded over time (Phase 5: scrape more past papers, add ~5/topic per release)
- Difficulty tagging (easy/medium/hard) gives the worksheet generator filterable variety
**Tracked across:** `app/lib/question-bank.ts`, `app/components/PracticeRunner.tsx`, `app/components/WorksheetGenerator.tsx`, `app/app/math/p7/[topic]/practice/page.tsx`, `app/app/teacher/worksheet/page.tsx`.

---

## DEV-016 · 2026-06-25 · Auto-verify content for ship-speed; keep `reviewStatus` field internal

**Previous decision (DEV-013):** Every topic and paper had a visible `verified` or `review pending` pill so head teachers could see what was reviewed.
**Problem reported:** Founder said: "since we're low on time, you can auto-verify for now since our time has actually been cut in half. my plan is to have everything ready for the teachers to review and we'll iterate on their feedback once everything is done."
**New decision:**
- Every topic and paper is flipped to `reviewStatus: "verified"` in data.
- The visible pill is **removed from the UI** on topic list and topic detail pages.
- The field is **kept in the schema** so when Phase 5 starts capturing per-teacher review attribution, we can re-introduce a meaningful pill ("reviewed by Mr. Mukasa, St Mary's Kitende") instead of a generic AI-vs-human distinction.
- Content provenance and review process is documented honestly in `docs/spec/content-sources.md` for anyone (head teacher, journalist, parent) who asks.
**Reasoning:**
- Time pressure is real and the cost of shipping AI-drafted (but spot-checked) content is low if review pipeline is real.
- The Teacher Fellowship strategy (DEV-012) is the actual review pipeline. Pre-shipping pills would have created visual noise without commercial benefit.
- Honest UI ≠ visible labels for everything. It means we don't claim things we can't back up. The content-sources doc backs it up.
**Tracked across:** `app/app/math/p7/page.tsx` (pill removed), `app/app/math/p7/[topic]/page.tsx` (pill removed), `app/lib/topics.ts` (all `draft` → `verified`), `app/lib/papers.ts` (same), `docs/spec/content-sources.md` (new).

---

## DEV-015 · 2026-06-25 · Watch tab stays as per-topic placeholder; Listen demoted from tab to in-text icon

**Previous decision (DEV-014, earlier today):** Three tabs — Watch / Listen / Read.
**Problem reported:** Founder + partner reviewed: video isn't going away (NotebookLM clips coming per-topic when ready), but Listen as a full tab gives too much weight to mediocre browser TTS.
**New decision:**
- Watch tab stays in first position with a per-topic "video coming soon" placeholder, ready to be initiated topic-by-topic when NotebookLM clips are made.
- Listen tab is removed.
- Web Speech API stays available as a small icon ("🔊 Listen") inside the Read view, with Pause / Resume / Stop controls.
**Reasoning:**
- Video stays a planned feature without committing to it as a v0 must-have.
- TTS as an icon vs tab matches its actual quality: useful but not headline.
- Less UI weight on the topic page reduces cognitive load.
**Tracked across:** `app/components/TopicTabs.tsx` (rewritten), `app/app/globals.css` (listen-icon styles added, tab variant simplified).

---

## DEV-014 · 2026-06-25 · Practice mode is an unlimited drill; Worksheet generator is teacher-controlled sampling

**Previous decision:** No equivalent. Marketing partner suggested "infinite AI-generated questions."
**New decision:** Build two distinct features both backed by the same pre-generated bank.
- **Practice mode** (`/math/p7/[topic]/practice`): student picks a topic, gets one random question at a time with streak counter, per-question feedback, no end. Persists session stats to `tendo:practice`.
- **Worksheet generator** (`/teacher/worksheet`): teacher picks topics + count + difficulty + answer-key toggle, gets a printable/copyable worksheet with school name and a "shuffle again" button.
**Reasoning:**
- Same content, two different jobs (study vs. assignment).
- Both are demos head teachers respond to ("my students never run out of practice" / "my teachers save an hour a week").
- Code separation lets them evolve independently (Practice may add adaptive difficulty in Phase 5; Worksheet may add multi-page printable in Phase 5).
**Tracked across:** `app/components/PracticeRunner.tsx`, `app/components/WorksheetGenerator.tsx`, routes, home page tile, teacher dashboard link.

---

## DEV-013 · 2026-06-25 · Visible review-status pill on every topic and paper (SUPERSEDED by DEV-016)

⚠️ Superseded by DEV-016 (auto-verify + pill removed from UI). Field retained in schema. Original entry below for history.

---

### Original DEV-013

**Previous decision:** No visible content-quality signal.
**Problem anticipated:** Phase 3 adds ~10 AI-drafted topics. Without a visible signal, founder couldn't tell drafts from verified content during pitch prep, and head teachers couldn't tell what's been teacher-reviewed.
**New decision:** Every Topic and PastPaper has a `reviewStatus: "verified" | "draft"` field. The UI shows a small pill: green "verified" or grey "review pending" next to the title and on topic list cards.
**Reasoning:**
- Honest UI (per AGENT_BRIEF.md): we never pretend AI content is teacher-verified.
- Sales credibility: head teachers see we run a review process, not just AI dumps.
- Teacher Fellowship hook: pilot teachers can literally see which content their feedback would promote to verified.
**Tracked across:** `app/lib/topics.ts` (Topic interface + per-topic flag), `app/lib/papers.ts` (PastPaper interface), `app/app/math/p7/page.tsx`, `app/app/math/p7/[topic]/page.tsx`, `app/app/globals.css` (review-pill classes).

---

## DEV-012 · 2026-06-25 · Teacher Fellowship — contribution without payment

**Previous decision:** No teacher-feedback system. Content was author-only.
**Problem reported:** Founder asked: "since we're going to work with the schools, can we use the teachers to make the app better at no cost on our end?" This is a real strategic opening.
**New decision:**
- Built: `ReportProblem` component wired into every quiz question and past-paper question. Stores reports in `localStorage` (Phase 3); Supabase endpoint in Phase 4.
- Strategy: "Tendo Teacher Fellowship" — teachers who contribute 5+ accepted reviews per term receive a public recognition title, certificate, and name on their school's Tendo page. No cash. See `docs/sales/teacher-contribution-strategy.md`.
**Reasoning:**
- Free QA at scale, sustainable indefinitely.
- Converts "teachers feel replaced" objection into "teachers gain visibility" opportunity.
- After 12 months of pilot data, our content is verifiably more accurate than any competitor's, with provenance. Genuine moat.
- Cash compensation would change the relationship into employment and is unsustainable. Status/recognition compensation aligns with Ugandan teacher career incentives where public-school salary movement is limited.
**Tracked across:** `app/components/ReportProblem.tsx`, `app/components/Quiz.tsx` (integration), `app/components/PaperAttempt.tsx` (integration), `docs/sales/teacher-contribution-strategy.md`, updates to `value-prop.md`, `objections.md`, `pitch-deck-outline.md`.

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

---

## PILOT-001 · 2026-06-30 · First pilot customer: Trainup a Child Uganda, P7 Math only

**Context:** A school is ready to pilot Tendo. They have ~3,000 primary students and are affluent.
**Decision:** The pilot starts with **one P7 Mathematics class** at Trainup a Child Uganda. If the pilot works, the goal is long-term integration across the school, not a one-term experiment.
**Reasoning:**
- P7 Math is the most complete part of the product today.
- Starting with one class keeps the pilot small enough to observe and fix issues quickly.
- A successful P7 Math pilot is the strongest evidence for a school-wide rollout.
**Tracked across:** `docs/ops/trainup-pilot-plan.md`, `STATUS.md`, `HANDOFF.md`.

---

## PILOT-002 · 2026-06-30 · Position Tendo as "study", not "revision"

**Previous framing:** The product was described as a "revision" platform.
**Problem reported:** The founder clarified that the end goal is for students to actually learn from the platform, not just review before exams. "Revision" under-sells the product and misrepresents the learning content we need to build.
**New decision:** All student-facing language and content are being reframed as **study**. Topic notes must become full learning material, not revision summaries. The product is "a structured study programme for every upper-primary student."
**Reasoning:**
- A study platform has a longer, more valuable relationship with the school.
- It aligns with the long-term integration goal.
- It changes what content we build: full explanations, common mistakes, and practice, not just cram notes.
**Tracked across:** `docs/sales/school-proposal.md`, `docs/sales/school-proposal.html`, `docs/ops/trainup-pilot-plan.md`, and future topic-note rewrites.

---

## PILOT-003 · 2026-06-30 · School provides its own videos and branding

**Decision:** For the Trainup pilot, the school will provide its own video content and branding assets. Tendo provides the `videoUrl` slot per topic and a school-branding layer.
**Reasoning:**
- A school-specific video with its own teachers is more credible to parents than a generic Tendo video.
- The branding layer makes the platform feel like the school's own tool, which increases adoption.
- Once the branding system is built for Trainup, it can be copied for the next school with only asset swaps.
**Tracked across:** `app/lib/topics.ts` (videoUrl field), `docs/ops/trainup-pilot-plan.md`, Phase 4 of the pilot plan.

---

## PILOT-004 · 2026-06-30 · Fix quality before the school sees the app: randomize correct answers

**Problem reported:** Every question in the quiz (`app/lib/topics.ts`) and question bank (`app/lib/question-bank.ts`) had `correct: 0`. That meant every worksheet, quiz, and practice question had the correct answer as option A. This looks fake and would destroy credibility with teachers and students immediately.
**Decision:**
- Build a script (`scripts/shuffle-correct-answers.js`) that shuffles each question's choices so the correct answer lands on a random A/B/C/D position.
- Run it across all 285 questions (91 quiz + 194 bank).
- Verify the distribution is roughly even and the build still passes.
**Reasoning:**
- The answer bias is a critical quality bug that blocks any credible pilot.
- Randomizing is a fast, deterministic fix. It does not replace a full content audit, but it removes the most visible sign of low quality.
- Going forward, every new question must have its correct answer intentionally placed, not defaulted to A.
**Tracked across:** `app/lib/topics.ts`, `app/lib/question-bank.ts`, `scripts/shuffle-correct-answers.js`, `CHANGELOG.md`.

---

## DEV-018 · 2026-06-25 · Per-topic optional `videoUrl` with YouTube embed and placeholder-first UX

**Previous decision (DEV-015):** The Watch tab was a per-topic "coming soon" placeholder with no code path to display a real video.
**Problem reported:** Founder wanted to start adding videos now and needed a repeatable pipeline that didn't require a code change for every video.
**New decision:**
- Add an optional `videoUrl?: string` field to the `Topic` interface in `app/lib/topics.ts`.
- In `app/components/TopicTabs.tsx`, if `videoUrl` is present, render a responsive 16:9 iframe using a YouTube embed URL; otherwise keep the "Video coming soon" placeholder.
- Add a `toEmbedUrl()` helper that converts normal YouTube watch links (`youtube.com/watch?v=...`) and short links (`youtu.be/...`) into the iframe-safe embed form.
- Add CSS in `app/app/globals.css` for a responsive `.video-wrapper` that keeps the 16:9 ratio on all screen sizes.
- Keep the placeholder comments on topics that don't yet have videos, so adding a video is only a matter of uncommenting and pasting a URL.
**Reasoning:**
- Video generation is manual (NotebookLM + Canva/Loom + YouTube), so the code must make adding a video a one-line data change, not a component rewrite.
- YouTube is the default host because it is free, handles bandwidth globally, and has a stable embed URL format.
- Placeholder-first keeps the UI honest: topics without videos still say "coming soon", and topics with videos immediately show the player without extra UI work.
**Tracked across:** `app/lib/topics.ts`, `app/components/TopicTabs.tsx`, `app/app/globals.css`, `docs/ops/notebooklm-video-guide.md`.
