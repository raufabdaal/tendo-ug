# Prompts (Phase 2 placeholder)

This folder will hold the reusable AI prompts that the content drafting pipeline uses. Per DEV-004, every topic note and quiz is AI-drafted, then human-reviewed.

## Files coming in Phase 2

- `topic-note.md` — the prompt that turns a `(theme, topic, sub-topic)` triplet from `p7-math.json` into a Tendo-style topic note (per `docs/spec/content-guidelines.md`).
- `quiz.md` — the prompt that generates 7 multiple-choice questions in Tendo's format.
- `paper-explainer.md` — the prompt that explains a past PLE paper question.

## Why prompts live in version control

- Reproducibility: any topic can be re-drafted from the same prompt.
- Improvement: when a draft comes out wrong, we edit the prompt, not the output.
- Auditability: future contributors can see exactly what the AI was instructed to do.

## How prompts will be invoked

A small local script (Phase 2) reads `p7-math.json`, walks through `status: todo` sub-topics, calls the AI (Groq + Gemini fallback) with the prompt, writes the result to `content/topics/_review-queue/<sub-topic-id>.mdx` with `status: draft`. Founder reviews, edits, moves to `content/topics/<sub-topic-id>.mdx` with `status: published`.
