# CHECKLIST — Tendo at a glance

*Updated: 2026-06-24*

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

## Phase 3 — Demo polish (video + breadth)
- [ ] MT-006: Tendo YouTube channel created
- [ ] 10 NotebookLM videos generated for top topics
- [ ] Watch tab wired to embed YouTube
- [ ] PLE Math 2019, 2020 ingested (3 papers total)
- [ ] 5 more topic notes (Decimals, Percentages, Area, Equations, Substitution)
- [ ] Topic count 3 → 8

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
- **Topics live:** 3 / 40
- **Past papers live:** 1 / 5 (target for v0)
- **Sales-leverage features shipped:** 3 (past papers, audio, teacher dashboard)
- **Past papers live:** 0 / 5 (target for v0)
- **Schools signed:** 0
- **Monthly recurring cost:** UGX 0
