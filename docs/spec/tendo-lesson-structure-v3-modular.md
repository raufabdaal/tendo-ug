# Tendo Lesson Structure v3 — Modular Topic Architecture

## Problem we are solving

Lesson Structure v2 fixed the *shape* of a topic page, but it did not fix the *grain size* of the content. When a whole NCDC topic is generated or displayed as one page, the model and the UI both compress the material into a summary. Learners get study leaflets, not textbook depth.

## Solution

Move from a **Flat Topic Structure** to a **Hierarchical Module Structure**.

- A **Topic** becomes a container or directory.
- A **Subtopic** matches one NCDC sub-competency from the curriculum JSON.
- A **Module** is one atomic, paginated learning step inside a subtopic.

Content is generated one module at a time, which gives each generation enough room for depth, local Ugandan context, worked examples, and step-by-step explanations.

## New data model

```ts
export interface SubtopicModule {
  moduleId: string;
  title: string;
  bigIdea: string;
  learnIt: string[];              // main content points/paragraphs
  workedExample?: {
    question: string;
    steps: string[];
    answer: string;
  };
  tryThis?: {
    question: string;
    choices: string[];
    correct: number;              // index 0-3
    explanation: string;
  };
  visual?: {
    title: string;
    description: string;
    kind?: "map" | "diagram" | "timeline" | "comparison" | "flow" | "cards";
  };
  examTip?: string;
}

export interface Subtopic {
  subtopicId: string;
  title: string;
  modules: SubtopicModule[];
}
```

A `Topic` gets one new optional field:

```ts
export interface Topic {
  // ... existing fields
  subtopics?: Subtopic[];
}
```

If `subtopics` is present, the app renders the modular v3 Read view. Otherwise it falls back to v2 or legacy v1 safely.

## UI behaviour

- **Read tab starts as a topic directory.** It lists the subtopics for that topic.
- **Clicking a subtopic opens a paginated module viewer.** The viewer shows "Module 1 of 4", has Previous/Next buttons, and a "Back to subtopics" link.
- **Each module displays:** title, big idea, learn-it content, optional worked example, optional try-this, optional visual brief, optional exam tip.
- The existing topic-level `TopicDiagram` still renders at the bottom of the Read tab.
- The existing quiz and practice CTA stay below the Read tab.

## Content rules

1. **Map every subtopic directly to the `subTopics` array in `content/curriculum/p7-{subject}.json`.** Do not invent competencies.
2. **Generate one module at a time.** Do not generate a whole subtopic or whole topic in one pass.
3. **Source strictly from NCDC.** For each module, pull from the official P7 Set One PDF (`tmp/p7-set-one.pdf`) and the curriculum JSON. Do not invent facts, countries, capitals, or definitions.
4. **Each module should be small enough to teach one thing well:** concept → example → check.
5. **Ugandan teacher voice.** Definitions should sound like a Ugandan classroom, not a dictionary.

## Migration strategy

- **Subject-by-subject, topic-by-topic.** Only the topic currently being worked on gets `subtopics`. All other topics keep their existing v2 `note.study`.
- **Pilot subject:** Social Studies (P7).
- **First topic:** `location-of-africa`.
- After one topic proves the flow, convert the remaining Social Studies topics one by one.
- Only after Social Studies is fully migrated consider Mathematics, Science, or English.

## Files changed for the spike

- `app/lib/topics.ts` — new modular types.
- `app/lib/social-topics.ts` — add `subtopics` to `location-of-africa` only.
- `app/components/TopicTabs.tsx` — render modular directory + module viewer when `subtopics` exists.
- `app/app/globals.css` — styles for modular directory and module viewer.
- Root docs: `STATUS.md`, `CHANGELOG.md`, `CHECKLIST.md`.

## Future work (not blockers)

- TTS script that reads the active module instead of the whole topic.
- Per-module diagrams in `TopicDiagram`.
- Module-level progress tracking.
- Worked-example and try-this banks generated per module.
