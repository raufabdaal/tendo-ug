# Design Philosophy — Tendo

*Version 1 · 2026-06-24 · Living document, evolve via `DECISIONS.md` (DEV-### entries).*

## The one rule

> **A P7 student should feel calm, capable, and respected.** Not entertained, not gamified into anxiety, not condescended to. The interface gets out of the way so the math is the thing.

Everything below ladders up to that.

## What we learned from Sasa (and why Tendo starts here)

Sasa v1 was "Apple-restrained, museum-quiet, premium." It felt cold. We rebuilt around warmth: cream, peach, real buttons, color-coded subjects. **Tendo starts at that endpoint** — we don't re-do the cold v1.

## Visual language

### Palette

- **Foundation:** warm cream `#FAF6F0` (background), deep charcoal `#1F1B17` (body text). Not pure white, not pure black. Easier on eyes in fluorescent-lit Ugandan classrooms.
- **Tendo accent:** terracotta `#C25A3C` — used for primary actions (Start quiz, Next topic) and for the brand mark. Distinct from Sasa's peach so the two products read as siblings, not twins.
- **Subject color (Math):** indigo `#3B4A8A`. Each future subject gets its own (English = sage green; Science = ochre; SST = brick red). Color identifies subject across the app, never decorates.
- **State colors:** success `#3F8A4D`, error `#B6432A`, info `#3B4A8A`. Used sparingly, never together.

### Type

- **Headings:** a humanist sans (Inter, fallback system-ui). Generous line-height (1.3 for headings, 1.6 for body).
- **Body:** same family for v0 (one type family = one less network request on slow data).
- **Math notation:** display math as actual readable HTML / KaTeX where it matters. Never as low-res images.

### Layout

- **Generous whitespace.** A topic page should breathe. Body column max 720px on desktop; full-width on phone with 20px horizontal padding.
- **One primary action per screen.** "Take quiz" on the topic page. "Submit answer" on the quiz screen. No dueling CTAs.
- **Real, solid buttons.** Filled rectangles with 8px radius. No hairline pills. No ghost-with-icon-only mystery buttons. Per Sasa lesson DEV-002.

### Buttons (concrete)

- Primary: terracotta background, cream text, 8px radius, 14px vertical / 24px horizontal padding, semibold.
- Secondary: cream background, charcoal text, 1.5px terracotta border, same dimensions.
- Disabled ("Coming soon"): cream background, muted text, no border, cursor not-allowed.

### Iconography

- Lucide-style line icons, 1.5px stroke, 20px default. No emoji as load-bearing UI (cultural risk, render differences across Android versions).

## Voice and tone

### How Tendo talks to students

- **Plain, warm, second-person.** "You got 7 out of 10. The first one is the trickiest, watch."
- **Never patronising.** A P7 student is 12 or 13 years old and has been studying for PLE for months. Don't call them "little learner." Don't add exclamation marks to everything.
- **Honest about wrong answers.** "That's not right. Here's why..." beats "Oops! Try again!"
- **Locally grounded vocabulary.** "Boda fare" for word problems, not "taxi fare." "Matoke" can appear in fraction problems. But: no stereotyping. No pretending every kid lives in a village.

### What we never say

- "Awesome!" / "Amazing!" / "You crushed it!" — reads as a Silicon Valley import.
- "AI says..." — even when AI drafted the content. The student doesn't need to know the kitchen.
- Em dashes (—). Read as AI-generated in 2026. Use commas, semicolons, or parens.
- Idioms students might not parse: "knock it out of the park," "low-hanging fruit."

## Local context (without stereotyping)

Per `AGENT_BRIEF.md`: warmth without clichés. So:

- ❌ No flags, no kente patterns, no stock African imagery.
- ❌ No "ubuntu," no "harambee," no decorative Africanisms.
- ✅ Math word problems can reference shillings, boda fares, sacks of maize, terms of school, matatu seats — the texture of daily life, used because it's the texture of daily life.
- ✅ Place names (Kampala, Mbarara, Gulu, Jinja) can appear in distance/time problems. Treated as normal, not exotic.

## Empty states are doors, not walls

(Sasa lesson, applied.)

- The first time a student opens the app, the home page is not a sea of locked content. It's: "Welcome. Start with **Whole Numbers**, then **Fractions**. About 12 minutes each." With a giant primary button.
- A topic with no quiz yet does not show a broken "Take quiz" button. It shows: "Quiz coming in Phase 2 (next month). For now, here's a worked example." That's honest UI.

## Accessibility floor

- Tap targets ≥ 44×44 px (phone use).
- Color is never the only signal (success/error always have an icon AND a color).
- 4.5:1 contrast ratio minimum on body text.
- Quiz keyboard-navigable (Tab + Enter to submit) for desktop / projector use.

## Performance is a design choice

- No web fonts loaded over network in Phase 1. System font stack until we have a CDN strategy.
- No hero images on the home page. A typographic landing is faster and feels more serious.
- Lazy-load quiz content; don't ship all 40 topics' JSON on first load.

## Things we will revisit (and log as DEV-### when we do)

- Whether to add a "study streak" or any gamification. (Tentatively: no, see Section 1's rule.)
- Whether to support a dark mode. (Probably not in v0; cream background is already restful.)
- Whether to render math equations server-side or client-side. (TBD in Phase 1.)
