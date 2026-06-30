# DECISIONS — Tendo (append-only)

> Architecture, product, pilot, and workflow decisions. Historical entries are preserved. Superseded items stay for context.

---

## DEV-001 · 2026-06-24 · Scope = P6 & P7 only (PLE-bound), not P1

**Previous decision:** Founder's early brief implied P1 and P7.
**Problem reported:** Founder clarified that P1 was a typo and the correct scope is P6 and P7.
**New decision:** v0 serves **P7 first** and **P6 second**.
**Reasoning:** P6 and P7 are aligned around PLE preparation and are commercially much easier to serve together than P1 and P7.
**Tracked across:** `docs/spec/PRD.md`, `content/curriculum/p7-math.json`, sales docs.

---

## DEV-002 · 2026-06-24 · No login in v0; localStorage progress only

**Previous decision:** open question.
**New decision:** v0 has **no login**. Progress is stored in `localStorage`.
**Reasoning:** Faster demo, lower build complexity, zero cost, no sign-up friction for school pilots.
**Tracked across:** `docs/spec/PRD.md`, `preview.html`, app state handling.

---

## DEV-003 · 2026-06-24 · B2B2C model: sell to schools, schools resell to parents

**Previous decision:** model was still fluid.
**New decision:** **Schools are the customer.**
**Reasoning:** Better CAC, trusted payment channel, stronger distribution, better alignment with school incentives.
**Tracked across:** `docs/sales/*`, `docs/spec/PRD.md`.

---

## DEV-004 · 2026-06-24 · Hybrid AI-draft + human review content workflow

**Previous decision:** open question.
**New decision:** Content is drafted quickly, then reviewed and refined before school-facing use.
**Reasoning:** Faster than fully manual authoring, safer than unreviewed AI output.
**Tracked across:** `docs/spec/content-guidelines.md`, prompts, content workflow.

---

## DEV-005 · 2026-06-24 · Math only in v0; other subjects remain clearly marked as coming soon

**Previous decision:** broader subject ambition existed.
**New decision:** v0 ships **Mathematics only**.
**Reasoning:** Simplifies delivery and makes the strongest measurable school story.
**Tracked across:** home page, PRD, sales docs.

---

## DEV-006 · 2026-06-24 · Phase 1 content lives in TypeScript, not MDX

**Previous decision:** MDX had been considered.
**New decision:** Use `app/lib/topics.ts` as the main content layer for Phase 1 and the early product.
**Reasoning:** Faster iteration, strict typing, lower setup overhead.
**Tracked across:** `app/lib/topics.ts`, route implementation.

---

## DEV-007 · 2026-06-24 · Plain CSS, no Tailwind, no UI library

**Previous decision:** Tailwind was a possible direction.
**New decision:** Use plain CSS in `app/app/globals.css`.
**Reasoning:** Lower dependency load, clearer styling surface, simpler maintenance.
**Tracked across:** package setup and styling architecture.

---

## DEV-008 · 2026-06-24 · Pin to patched Next.js line

**Previous decision:** older Next.js version was used initially.
**Problem reported:** Vercel blocked deployment due to a vulnerable Next.js version.
**New decision:** Pin to the patched Next.js 15.x line (`15.5.19` at the time).
**Reasoning:** Security compliance and successful deploys.
**Tracked across:** `app/package.json`, `app/package-lock.json`.

---

## DEV-009 · 2026-06-25 · Teacher dashboard is localStorage-backed in v0 with honest limitations

**Previous decision:** no teacher-facing dashboard.
**New decision:** Build the dashboard now on `localStorage`, with honest framing that real multi-device reporting needs a later backend.
**Reasoning:** Preserves demo value without pretending a backend already exists.
**Tracked across:** `app/components/TeacherDashboard.tsx`.

---

## DEV-010 · 2026-06-25 · No streaks, no leaderboard, no parent app in v0

**Previous decision:** more gamified directions were discussed.
**New decision:** Explicitly keep v0 serious and restrained.
**Reasoning:** Better fit for school buyers and less product sprawl.
**Tracked across:** product scope, sales framing.

---

## DEV-011 · 2026-06-25 · Teacher dashboard is a stronger sales feature than video-first work

**Previous decision:** video had strong internal momentum.
**New decision:** Prioritise past papers, dashboard, and teacher-facing leverage before deeper video investment.
**Reasoning:** Schools buy reporting and seriousness faster than they buy media polish.
**Tracked across:** roadmap and Phase 2 / Phase 3 implementation.

---

## DEV-012 · 2026-06-25 · Teacher Fellowship as the feedback/QA strategy

**Previous decision:** no structured teacher contribution system.
**New decision:** Use teacher feedback/reporting plus a recognition model rather than a paid reviewer model.
**Reasoning:** Low-cost quality loop and stronger teacher buy-in.
**Tracked across:** `app/components/ReportProblem.tsx`, sales docs, strategy docs.

---

## DEV-013 · 2026-06-25 · Visible review-status pill on topics and papers

⚠️ **Superseded by DEV-016.** Kept here for historical continuity.

**Original decision:** show `verified` / `review pending` visibly in the UI.
**Reasoning at the time:** honest UI and content-status visibility.

---

## DEV-014 · 2026-06-25 · Practice mode and worksheet generator are separate jobs backed by one bank

**Previous decision:** no clear split existed.
**New decision:**
- **Practice mode** = student drill
- **Worksheet generator** = teacher-controlled printable sampling
**Reasoning:** Same content, different user jobs, better product clarity.
**Tracked across:** practice routes and worksheet generator routes/components.

---

## DEV-015 · 2026-06-25 · Watch stays as a tab; Listen becomes an in-read control

**Previous decision:** Watch / Listen / Read had equal tab weight.
**New decision:** Keep Watch as a placeholder/video slot, but demote Listen into the reading experience.
**Reasoning:** TTS is useful, but not strong enough to deserve equal visual weight.
**Tracked across:** `app/components/TopicTabs.tsx`, `app/app/globals.css`.

---

## DEV-016 · 2026-06-25 · Auto-verify content for ship-speed; keep `reviewStatus` internally

**Previous decision:** visible review-status UI from DEV-013.
**Problem reported:** time pressure made visible status labelling less useful than shipping and improving.
**New decision:**
- mark content as verified internally
- remove visible review-pill UI
- keep the field in the schema for future richer review attribution
**Reasoning:** faster shipping without losing future flexibility.
**Tracked across:** topic list UI, topic page UI, topic/paper data.

---

## DEV-017 · 2026-06-25 · Pre-generated question bank, not runtime AI generation

**Previous decision:** runtime AI generation had been considered.
**New decision:** Use a static question bank sampled by practice and worksheet flows.
**Reasoning:** zero cost, zero latency, higher reliability, easier quality control.
**Tracked across:** `app/lib/question-bank.ts`, practice and worksheet features.

---

## DEV-018 · 2026-06-25 · Per-topic optional `videoUrl` with placeholder-first UX

**Previous decision:** Watch tab had no path to a live embedded video.
**New decision:** Add optional `videoUrl` per topic and embed YouTube when present.
**Reasoning:** makes topic-level videos a one-line content change instead of a component rewrite.
**Tracked across:** `app/lib/topics.ts`, `app/components/TopicTabs.tsx`, `docs/ops/notebooklm-video-guide.md`.

---

## PILOT-001 · 2026-06-30 · First pilot customer: Trainup a Child Uganda, starting with one P7 Math class

**Context:** A real school pilot opportunity exists.
**Decision:** Start with **one P7 Mathematics class** at Trainup a Child Uganda.
**Reasoning:** Small enough to observe and fix issues quickly, while still being meaningful evidence for broader rollout.
**Tracked across:** `docs/ops/trainup-pilot-plan.md`, `STATUS.md`, `HANDOFF.md`.

---

## PILOT-002 · 2026-06-30 · Position Tendo as study, not only revision

**Previous framing:** revision platform.
**New decision:** Reframe Tendo as a **study** platform.
**Reasoning:** Better matches the intended value, longer product relationship, and the type of content now being written.
**Tracked across:** proposal docs, pilot plan, topic-note rewrites.

---

## PILOT-003 · 2026-06-30 · School provides its own branding and can provide its own videos

**Decision:** For the Trainup pilot, the school-specific layer supports branding and topic-level video slots.
**Reasoning:** School-specific presentation improves credibility and buy-in.
**Tracked across:** school config layer, pilot plan, topic video support.

---

## PILOT-004 · 2026-06-30 · Fix answer-position bias before the school sees the product

**Problem reported:** Correct answers defaulted to option A in too many places.
**Decision:** Randomise answer positions across topic quizzes and the question bank.
**Reasoning:** This was a credibility blocker for real school use.
**Tracked across:** `app/lib/topics.ts`, `app/lib/question-bank.ts`, `scripts/shuffle-correct-answers.js`.

---

## WORKFLOW-001 · 2026-06-30 · Manual overwrite workflow is the default delivery method

**Context:** The founder applies workspace changes manually to the GitHub-connected local copy.
**Decision:** Every meaningful update must clearly state:
- what changed
- why it changed
- which files changed
- whether to overwrite or add each file
**Reasoning:** Cleaner commits, safer merges, and lower risk of overwriting unrelated files.
**Tracked across:** `docs/ops/update-handoff-protocol.md`, session reporting style.
