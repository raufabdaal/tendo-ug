# CHECKLIST — Tendo at a glance

*Updated: 2026-06-25*

## Phase 0 — Foundation
- [x] Workspace skeleton
- [x] Session-ritual docs (STATUS, HANDOFF, CHANGELOG, etc.)
- [x] Curriculum map (P7 Math) — 6/6 themes, 11/11 topics, 40/40 sub-topics structured
- [x] PRD + design philosophy + content guidelines
- [x] Sales pack (value-prop, pitch, pricing, packet, objections)
- [x] `preview.html` clickable demo
- [x] DECISIONS.md (DEV-001 to DEV-005)

## Phase 1 — App shell + 3 topics live (DONE LOCALLY)
- [x] MT-001 GitHub repo created (founder did this)
- [x] MT-002 Vercel connected (auto-deploy still needs settings fix → MT-004)
- [x] Next.js 15 scaffolded in `app/` (plain CSS, no Tailwind per DEV-007)
- [x] Route: `/` (subject picker)
- [x] Route: `/math/p7` (topic list, themed)
- [x] Route: `/math/p7/[topic]` (notes + quiz)
- [x] localStorage progress
- [x] Topic 1: Sets → Venn Diagrams
- [x] Topic 2: Numeracy → Roman Numerals
- [x] Topic 3: Numeracy → Fractions
- [x] Build verified locally (HTTP 200 on all routes)
- [ ] **MT-004:** Live URL on Vercel verified (deep route + home both 200) ← only blocker

## Phase 2 — Sales-leverage features (DONE LOCALLY)
- [x] Past PLE Papers data structure (`lib/papers.ts`)
- [x] PLE Math 2018 ingested (20 questions, all 6 themes, topic-tagged)
- [x] Student attempt mode with banded result + "where you went wrong"
- [x] Teacher browse-by-topic mode with Copy + Print worksheet
- [x] Watch / Listen / Read tabs on every topic
- [x] Audio narration via browser Web Speech API (free)
- [x] Teacher Dashboard at `/teacher` (localStorage-backed, honest banner)
- [x] "Copy report for parents" → clipboard
- [x] Print stylesheet for worksheets + dashboard
- [x] Home page surfaces Past Papers + Teacher Dashboard
- [x] Sales materials updated (value-prop, pitch deck, school packet, objections)
- [ ] **Founder pushes** → Vercel auto-deploys → verify in incognito

## Phase 4 — Practice + Worksheets + UI cleanup (DONE LOCALLY)
- [x] Question bank (~210 questions, 13 topics, difficulty-tagged)
- [x] Endless Practice mode per topic (streaks, accuracy, session stats)
- [x] Worksheet generator for teachers (topics, count, difficulty, answer key, print/copy)
- [x] Listen tab removed; replaced with icon-button inside Read view
- [x] Watch tab kept as per-topic "coming soon" placeholder
- [x] All content auto-verified; pill removed from UI
- [x] Content sources doc (`docs/spec/content-sources.md`)
- [x] Home page + teacher dashboard linked to worksheet generator
- [x] Sales pack updated (value-prop, pitch deck, school packet)
- [ ] **Founder pushes** → Vercel auto-deploys

## Phase 5 — Founder picks ONE
- [ ] A: Supabase backend (real class codes, cross-device)
- [ ] B: Content depth (210→350 questions, 2 more papers, 5 more topics)
- [ ] C: NotebookLM videos for top 10 topics — **wiring done; 3 Math videos in progress (Fractions, Percentages, Equations)**
- [ ] D: P6 Math track

## Phase 3 — Content depth + killer dashboard + Fellowship (DONE LOCALLY)
- [x] Topic count 3 → 13 (added Decimals, Percentages, Perimeter, Area, Volume, Equations, Substitution, Mean/median/mode, Clocks, Money)
- [x] Past papers 1 → 3 (added 2019, 2020)
- [x] reviewStatus field + visible pills
- [x] "Load demo class" with 22 seeded students
- [x] Topic bar chart (high/mid/low bands per topic)
- [x] Student drill-down view
- [x] Class-level + per-student "Copy report"
- [x] Report-a-problem on every quiz + paper question
- [x] Teacher Fellowship strategy doc
- [x] Sales pack updated (value-prop, pitch deck, objections)
- [ ] **Founder spot-checks 10 new topics + 2 new papers** before push
- [ ] **Founder pushes** → Vercel auto-deploys

## Phase 4 — Real backend (Supabase, class codes, cross-device)
- [ ] MT-008: Supabase account created
- [ ] Schema: schools, class_codes, students, topic_attempts, paper_attempts, reports
- [ ] Class-code join flow (`/join/[code]`)
- [ ] Teacher login (Supabase Auth)
- [ ] Migrate Quiz + PaperAttempt to write Supabase + localStorage
- [ ] Migrate TeacherDashboard to read Supabase when teacher logged in
- [ ] Verify cross-device end-to-end
- [ ] Privacy doc (`docs/spec/privacy.md`)

## Phase 4 — School pilot
- [ ] First school signed (paid or pilot)
- [ ] Custom subdomain for the school
- [ ] Basic usage analytics for the head teacher
- [ ] Testimonial captured

## Phase 5 — P6 + adjacent subjects
- [ ] `p6-math.json` curriculum map
- [ ] P6 topics live
- [ ] English / Science / SST subject shells

## Totals
- **Topics live:** 13 / 40 (all auto-verified, awaiting teacher review per Fellowship)
- **Past papers live:** 3 / 5
- **Question bank:** ~210 questions
- **Routes (SSG):** 43
- **Sales-leverage features shipped:** 7 (past papers, audio, dashboard, demo-class, Fellowship, Practice mode, Worksheet generator)
- **Schools signed:** 0
- **Monthly recurring cost:** UGX 0
- **Past papers live:** 0 / 5 (target for v0)
- **Schools signed:** 0
- **Monthly recurring cost:** UGX 0
