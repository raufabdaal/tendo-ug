# CHANGELOG — Tendo

> Newest at the top. Dated, append-only. Sessions are blocks.

<<<<<<< HEAD
## v0.5.3 — 2026-07-01 — Trainup branding and Fractions as a study module

**Session theme:** Founder confirmed we go slow and steady: milestone-based deploys, no redeploys on small changes, P7 Math first, Fractions first, then the rest of Math, then other subjects. We started with the `/trainup` branding path and a full study rewrite of the Fractions topic.

**Added:**
- `app/lib/school.ts` — school config layer with Tendo and Trainup a Child Uganda configs.
- `app/components/BrandBar.tsx` — shows Trainup branding when the user is on `/trainup`.
- `app/app/trainup/page.tsx` — Trainup-branded landing page at `/trainup`.
- Extended `TopicNote` interface with `learningObjectives`, `commonMistakes`, and `tryThis`.
- Rewrote the **Fractions**, **Percentages**, **Equations**, **Decimals**, **Venn diagrams**, **Area**, **Perimeter**, **Volume**, **Money**, and **Mean, median, mode and range** topics as full NCDC-aligned study modules with learning objectives, common mistakes, and try-this exercises.

**Changed:**
- `app/components/TopicTabs.tsx` — now renders the new study sections and includes them in the listen-aloud script.
- `app/app/globals.css` — added styles for the brand bar and the "Try this" section.
- `STATUS.md` — updated to show Phase 2 progress.

**Verified locally:**
- `npm run build` succeeds — 44 routes (the new `/trainup` route), all SSG, no errors.

**Next session:** Continue Phase 2 — rewrite the next high-stakes topic (e.g., Percentages or Equations) as full study material, or start the NCDC P7 syllabus audit.

---

## v0.5.2 — 2026-06-30 — Trainup pilot focus: fix answer bias, plan the pilot
=======
## v0.5.1 — 2026-06-25 — Video wiring for Watch tab
>>>>>>> 51a291d5b347cbd7e752e478bb96b9e5b5418023

**Session theme:** Founder wanted to pick up after a chat crash and focus on the Watch tab first. Wired per-topic video URLs and wrote a NotebookLM → YouTube → embed pipeline so the founder can generate the first 3 Math videos without needing more code changes.

> **Note on the previous session:** The multi-subject Phase 5 work (English / Science / SST) was not pushed to GitHub before the previous chat crashed. Those files existed only as uploaded docs, not in the `tendo-ug` GitHub repo. This session resumed from the repo state, which is Phase 4 (Math only).

**Added:**
- `videoUrl?: string` field on the `Topic` interface in `app/lib/topics.ts`.
- `docs/ops/notebooklm-video-guide.md` — full prompt-and-workflow guide for generating 3 Math videos (Fractions, Percentages, Equations) with NotebookLM, Canva/PowerPoint, Loom/OBS, and YouTube.
<<<<<<< HEAD
- `docs/sales/school-proposal.html` — print-ready official proposal for schools, with inline CSS and print styles.
- `docs/sales/school-proposal.md` — editable Markdown version of the same proposal.
=======
>>>>>>> 51a291d5b347cbd7e752e478bb96b9e5b5418023
- `toEmbedUrl()` helper in `app/components/TopicTabs.tsx` — converts YouTube watch/short links into iframe-ready embed URLs.
- Responsive `.video-wrapper` CSS in `app/app/globals.css` for 16:9 embeds.
- Placeholder `// videoUrl: ...` comments on `fractions-core`, `proportion-percentages`, and `equations` topics so the founder knows exactly where to paste URLs.

**Changed:**
- `app/components/TopicTabs.tsx` — the Watch tab now shows the embedded video if `videoUrl` is set, otherwise keeps the "Video coming soon" placeholder. The "soon" pill is hidden when a video is present.
- `app/lib/topics.ts` — `Topic` interface now carries optional `videoUrl` with a JSDoc comment explaining the placeholder behavior.
- `app/app/globals.css` — added responsive video wrapper styles under the Topic tabs section.

**Verified locally:**
- `npm run build` succeeds — 43 routes, all SSG, no type errors.
- `npm run dev` spot-check on `/math/p7/fractions-core` shows Watch tab placeholder and Read tab unchanged.

**Decisions logged:** DEV-018 (optional per-topic videoUrl, YouTube embeds, placeholder-first).

**Cost:** UGX 0 / USD 0 unchanged.

**Next session:** Founder generates the 3 Math videos using the NotebookLM guide, uploads to YouTube, pastes the URLs into `app/lib/topics.ts`, then pushes. After that, we either deepen Math with more videos or return to subject deepening / Supabase backend.

---

## v0.5.0 — 2026-06-25 — Phase 4: Endless practice + worksheet generator + UI cleanup

**Session theme:** Founder said keep video as per-topic placeholder, drop Listen tab, auto-verify content for speed, and build "infinite questions for students + infinite questions for teachers." Rebuilt the AI-generated angle as a pre-generated bank for zero-ops reliability.

**Added:**
- `app/lib/question-bank.ts` — **~210 questions** across all 13 topics (12-15 per topic), each tagged with difficulty (easy/medium/hard). Helpers: `getBank`, `sampleFromTopic`, `sampleAcrossTopics`, `shuffle`, `totalBankQuestions`.
- `app/components/PracticeRunner.tsx` — endless practice runner with streak counter, accuracy %, session stats, persists to `tendo:practice` in localStorage.
- `app/app/math/p7/[topic]/practice/page.tsx` — per-topic practice route (13 SSG routes).
- `app/components/WorksheetGenerator.tsx` — teacher worksheet builder: pick topics (chips), count, difficulty, answer-key on/off, school name, title. Generate → Shuffle → Print or Copy as text.
- `app/app/teacher/worksheet/page.tsx` — worksheet generator route.
- `docs/spec/content-sources.md` — transparent doc on NCDC + UNEB sources, our review process, what we say to schools when asked the hard question.

**Changed:**
- `app/components/TopicTabs.tsx` — **rewritten**. Listen tab removed. Watch tab kept as per-topic "coming soon" placeholder ready for NotebookLM. Web Speech API now lives as a "🔊 Listen" icon-button inside the Read view with Pause/Resume/Stop.
- `app/lib/topics.ts` — all 13 topics flipped to `reviewStatus: "verified"`. Field retained for future per-teacher attribution.
- `app/lib/papers.ts` — all 3 papers flipped to `reviewStatus: "verified"`.
- `app/app/math/p7/page.tsx` — removed visible review-pending pill from topic cards.
- `app/app/math/p7/[topic]/page.tsx` — removed visible review pill from topic title; added a `PracticeCTA` inline component below the standard quiz pointing to Practice mode.
- `app/app/page.tsx` — added "Worksheet generator" tile under the For Teachers section.
- `app/app/teacher/page.tsx` — added "Generate a worksheet for class" button above the dashboard.
- `app/app/globals.css` — added ~280 lines of new styles (listen icon, practice CTA, practice bar, difficulty pills, worksheet form, topic chips, printable worksheet).
- `docs/sales/value-prop.md` — "features that turn maybe into yes" now lists 6, with Worksheet Generator and Endless Practice as top items.
- `docs/sales/pitch-deck-outline.md` — Slide 5 expanded to 7 bullets, Worksheet generator framed as the teacher-time-saver closer.
- `docs/sales/school-packet.md` — one-page rewritten to list new features.

**Verified locally:**
- `npm run build` succeeds — **43 routes** (was 29), all SSG, max First Load JS 125kB (teacher dashboard) and 118kB (practice/worksheet).
- All 7 spot-tested routes return HTTP 200.
- Topic list and topic page no longer show review pills (confirmed via grep on rendered HTML).
- Practice route SSG'd for all 13 topics; worksheet generator at `/teacher/worksheet` loads correctly.

**Decisions logged:** DEV-014 (Practice + Worksheet split), DEV-015 (Watch stays / Listen demoted), DEV-016 (auto-verify, pill hidden, field retained), DEV-017 (pre-generated bank not runtime AI).

**Cost:** UGX 0 / USD 0 unchanged.

**Next session:** Founder pushes. Then either (a) Phase 5 = Supabase backend for real class codes + cross-device, or (b) content depth — push the bank to 300+ questions and add 2 more past papers.

---

## v0.4.0 — 2026-06-25 — Phase 3: Content depth + killer dashboard + Teacher Fellowship

**Session theme:** Founder said "ditch video for now. catch the next big things that actually matter — the teacher dash, and finishing the subject content." Plus a strategic insight: use pilot teachers as free QA via a Fellowship recognition system.

**Three parallel tracks, one session:**

### Track 1 — Killer Teacher Dashboard
- `app/lib/demo-class.ts` — generates 22 deterministic mock students with realistic varying activity (Ugandan names, banded performance)
- `app/components/TeacherDashboard.tsx` — rewritten with:
  - Mode tabs ("Demo class" vs "This device")
  - One-click "Load demo class" so the dashboard is alive in a pitch on any device
  - Class summary stats (active this week, avg topics, class avg, paper attempts)
  - **Inline SVG bar chart** showing high/mid/low score distribution per topic
  - Student drill-down (click any row → full per-student breakdown)
  - "Copy report for parents" (class-level AND per-student) → clipboard
  - "Print this page" → browser PDF
  - Mobile-responsive (charts stack on narrow viewports)

### Track 2 — Content depth
- `app/lib/topics.ts` — added 10 AI-drafted topics: Decimals, Percentages, Perimeter, Area, Volume, Equations, Substitution, Mean/median/mode, 12/24-hour clocks, Money. Each has 7 quiz questions. Topic count: 3 → 13.
- `app/lib/papers.ts` — added 2 more past papers: PLE Math 2019, 2020 (20 questions each, topic-tagged). Paper count: 1 → 3.
- Added `reviewStatus: "verified" | "draft"` field on `Topic` and `PastPaper` interfaces. Phase 1 topics + PLE 2018 = verified. Phase 3 additions = draft (founder spot-check pending).

### Track 3 — Teacher Fellowship
- `app/components/ReportProblem.tsx` — modal-based feedback component, stores reports in `localStorage` under `tendo:reports`. Wired into Quiz feedback and Paper attempt feedback.
- `docs/sales/teacher-contribution-strategy.md` — new doc, ~2000 words: framing, three contribution channels, what we promise teachers, sales script, economics, risks.
- Visible "verified" / "review pending" pills on topic list and topic detail pages.

**Updated:**
- `app/app/math/p7/page.tsx` — review-pending pill on topic cards
- `app/app/math/p7/[topic]/page.tsx` — review pill in topic title
- `app/components/Quiz.tsx` — "Report a problem" link after each feedback
- `app/components/PaperAttempt.tsx` — same
- `app/app/globals.css` — added mode-tabs, topic-chart, review-pill, report-modal styles (~200 lines)
- `docs/sales/value-prop.md` — "four features" section (was "three")
- `docs/sales/pitch-deck-outline.md` — Slide 5 updated (six bullets, dashboard + Fellowship as closers)
- `docs/sales/objections.md` — objection 6 (teachers replaced) extended with Fellowship paragraph

**Verified locally:**
- `npm run build` succeeds — 27 routes (was 13), all SSG, max First Load JS 125kB (teacher dashboard)
- All 8 spot-tested routes return HTTP 200
- 20 "review-draft" pill instances in topic list HTML (10 topics × 2 attribute occurrences) = all draft topics correctly labelled

**Decisions logged:** DEV-012 (Teacher Fellowship strategy), DEV-013 (visible review-status pills).

**Cost:** UGX 0 / USD 0 unchanged.

**Next session:** Founder reviews the 10 AI-drafted topics + 2 new papers (spot-check for errors), pushes, then we start Phase 4 (real Supabase backend for class codes + cross-device progress, which unlocks the dashboard from "demo only" to "real classroom").

---

## v0.3.0 — 2026-06-25 — Phase 2: Past papers, audio narration, teacher dashboard

**Session theme:** Partner pushed for video-first UX; we reframed to the three highest-leverage sales features instead. Video deferred to Phase 3 polish (NotebookLM for ~10 topics).

**Added:**
- `app/lib/papers.ts` — past PLE paper schema; seeded with PLE Math 2018 (20 questions, all 6 themes, tagged by topic)
- `app/components/PaperAttempt.tsx` — student attempt flow with per-question marks, banded result (D1/Credit/Pass/Needs more practice), "where you went wrong" review, localStorage persistence at `tendo:papers`
- `app/components/PaperBrowse.tsx` — teacher browse-by-topic view; toggle answers; copy-to-clipboard worksheet; print-to-PDF via browser
- `app/components/TopicTabs.tsx` — Watch · Listen · Read tabs on every topic; "Listen" uses Web Speech API (browser TTS, $0 per `DEV_JOURNAL.md` cost-discipline table); "Watch" placeholder for Phase 3 NotebookLM videos
- `app/components/TeacherDashboard.tsx` — class progress dashboard reading from localStorage; stat cards; topic + paper tables; "Copy report for parents" → clipboard; "Print this page" via browser; "Clear demo data" reset
- Routes: `/papers` (index), `/papers/[id]` (cover with student/teacher mode picker), `/papers/[id]/attempt`, `/papers/[id]/browse`, `/teacher`
- Print stylesheet in `globals.css` for teacher worksheet output
- 6 new "Coming, Phase 2/3" topic placeholders in `COMING_SOON` (matches the past paper question topics)

**Updated:**
- Home page (`app/page.tsx`) adds "Past PLE papers" and "For teachers" sections
- Topic page (`math/p7/[topic]/page.tsx`) now uses `TopicTabs` instead of inline notes
- `docs/sales/value-prop.md` — added "three features that turn maybe into yes" section
- `docs/sales/pitch-deck-outline.md` — Slide 4 updated to mention Watch/Listen/Read and past paper screen; Slide 5 expanded with teacher dashboard as the closer
- `docs/sales/school-packet.md` — bullet list updated
- `docs/sales/objections.md` — objection 6 (teacher replacement) revised to lean on Teacher Browse mode

**Verified locally:**
- `npm run build` succeeds — 13 routes, all SSG, largest First Load JS 113kB (teacher dashboard, still under our 200kB ceiling)
- All 7 newly-touched routes return HTTP 200 on local prod server
- Content spot-checks: home shows Past PLE + Teacher cards; Browse view shows toggle + Print; topic page shows Watch + Listen tabs; existing topic content intact

**Decisions logged:** DEV-009 (TLS dashboard honest-UI banner), DEV-010 (no streaks/parent-portal), DEV-011 (dashboard before video).

**Cost:** UGX 0 / USD 0 unchanged.

**Next:** Founder pushes. Vercel auto-deploys. Then Phase 3 = generate ~10 NotebookLM videos for highest-traffic topics and embed in the Watch tab.

---

## v0.2.1 — 2026-06-24 — Bump Next.js to patched 15.5.19 (Vercel deploy unblocker)

**Why:** Vercel deploy of v0.2.0 failed (red status) with *"Vulnerable version of Next.js detected"* citing CVE-2025-66478. Build itself was perfect (8 routes, SSG, all working) but Vercel blocks vulnerable framework versions in 2026.

**Changed:**
- `app/package.json`: `next` 15.0.3 → 15.5.19; `react` and `react-dom` RC → `^19.0.0` stable
- Regenerated `app/package-lock.json` (28 packages, down from 36)
- Verified `npm run build` succeeds (slightly smaller First Load JS: 106kB vs 109kB)
- Verified all 5 routes return HTTP 200 via curl on the local prod server, 404 path returns 404

**Logged:** DEV-008.

**Next:** Founder pushes, the deploy goes green, we promote to production, Tendo is live.

---

## v0.2.0 — 2026-06-24 — Phase 1: Next.js app live (local)

**Session theme:** Founder hit a Vercel 404 (project deployed before any app code existed). Decided to build the real Phase 1 app immediately rather than ship a static-redirect workaround.

**Added:**
- `app/` — Next.js 15 App Router setup (`package.json`, `next.config.ts`, `tsconfig.json`, `next-env.d.ts`, `.gitignore`)
- `app/app/globals.css` — full design system as plain CSS, mirrors `preview.html` exactly
- `app/app/layout.tsx` — sticky brand nav, shared `<main>` container
- `app/app/page.tsx` — subject picker (Math active; English/Science/SST as "Coming, Phase 2")
- `app/app/math/p7/page.tsx` — topic list grouped by NCDC theme, with `ProgressBadge` per topic
- `app/app/math/p7/[topic]/page.tsx` — topic detail with notes + worked example + Quiz component; uses `generateStaticParams` for SSG
- `app/app/not-found.tsx` — branded 404
- `app/lib/topics.ts` — three full topics (Venn diagrams, Roman numerals, Fractions) typed as `Topic[]`, each with 7 quiz questions
- `app/components/Quiz.tsx` — client-side quiz runner: answer → feedback → next → result, with localStorage persistence at key `tendo:progress`
- `app/components/ProgressBadge.tsx` — client-side "Best X/Y · NN%" badge
- `app/README.md` — how to run, how to deploy
- `MT-004` in `MANUAL_TASKS.md` — redeploy instructions with the correct Vercel settings

**Verified locally:**
- `npm install` (36 packages, 16s)
- `npm run build` (8 pages, all SSG, ~110kB First Load JS per route)
- `npm run start` + curl on all 5 real routes → HTTP 200
- `/math/p7/nonexistent` → HTTP 404 (sanity check)
- Content spot-checks: brand on home, worked example on Venn, quiz button visible, "Akello" mango problem present in Fractions

**Decisions logged:** DEV-006 (data-in-TS for Phase 1, MDX deferred to Phase 2), DEV-007 (no Tailwind, plain CSS).

**Updated:**
- `STATUS.md` — Phase 1 marked done locally; only blocker is the redeploy.
- `HANDOFF.md` — rewritten for the Phase 2 agent.
- `CHECKLIST.md` — Phase 1 boxes ticked.
- `launch.sh` and `launch.bat` — now run `npm install` on first launch then `npm run dev`.

**Cost:** UGX 0 / USD 0 unchanged. Vercel Hobby tier, free GitHub.

**Next session:** Phase 2 — AI content engine and 10 topics live.

---

## v0.1.0 — 2026-06-24 — Phase 0: Foundation

**Session theme:** Stand up the project, lock the business model, write the sales pack, ship a clickable demo.

**Added:**
- Full workspace skeleton at `tendo/` (3 top-level folders + entry-point files, per workspace-hygiene rules)
- `START_HERE.md`, `README.md`
- Session-ritual files: `STATUS.md`, `HANDOFF.md`, `CHANGELOG.md`, `CHECKLIST.md`, `DECISIONS.md`, `MANUAL_TASKS.md`
- `.env.example` (template only, no real secrets), `.gitignore`
- `launch.sh` and `launch.bat` (Phase 1 will wire them to `pnpm dev`)
- `content/curriculum/p7-math.json` — full NCDC P7 Math syllabus structured as 6 themes / 11 topics / 40 sub-topics
- `docs/spec/PRD.md` — product requirements doc
- `docs/spec/design-philosophy.md` — Tendo's design language (warm, restrained, locally grounded)
- `docs/spec/content-guidelines.md` — voice, structure, quiz authoring rules
- `docs/sales/value-prop.md` — the wedge and the school-economics math
- `docs/sales/pitch-deck-outline.md` — slide-by-slide deck for school visits
- `docs/sales/pricing.md` — three pricing tiers with UGX and USD
- `docs/sales/school-packet.md` — one-page leave-behind for head teachers
- `docs/sales/objections.md` — top 10 likely objections with crisp responses
- `docs/ops/secrets-guide.md` — how we'll handle API keys when Phase 2 needs them
- `preview.html` — double-clickable static sales demo (Topic list → Notes → Quiz → Result)

**Decisions logged (see `DECISIONS.md`):** DEV-001 through DEV-005

**Cost:** UGX 0 / USD 0. No accounts, no recurring spend.

**Next session:** Phase 1 — scaffold Next.js app, build 3 real topics, deploy to Vercel.
