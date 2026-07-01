# P7 Integrated Science quality audit — 2026-07-01

## Scope

Audit of the first P7 Integrated Science build wave in `app/lib/science-topics.ts` against the NCDC Primary Seven Set One Integrated Science topic outline.

This is not a final subject closeout. It is a quality pass before claiming Science is complete.

## NCDC topic map checked

P7 Integrated Science has 8 topics across 4 themes:

1. Human Body — Muscular-skeletal system
2. Matter and Energy — Electricity and magnetism
3. The Environment — Energy resources in the environment
4. Matter and Energy — Simple machines and friction
5. Human Body — Excretory system
6. Matter and Energy — Light energy
7. The Environment — Interdependence of things in the environment
8. The Community, Population and Family Life — Population and health

All 8 are present as published topics and have topic pages, diagrams, quiz questions and practice support.

## Audit findings

### Passed

- Topic coverage matches the 8-topic NCDC outline.
- Topic grouping by theme is correct.
- Each topic has learner-facing explanation, learning objectives, worked example, common mistakes, try-this question, recap and 7 quiz questions.
- Quiz answer indices were checked for valid range.
- Science topics are included in the central practice/worksheet question bank.
- Diagrams exist for all 8 Science topics through `TopicDiagram`.
- Science practice banks were deepened from quiz-only starter banks to 15 questions per topic: 7 topic quiz questions plus 8 additional practice questions per topic.

### Fixed in this pass

- Added a clearer muscular-skeletal objective for disorders and prevention.
- Adjusted excretory-system objective wording to explicitly mention skin, kidneys and lungs.
- Strengthened Light Energy wording around eye diseases/disorders and safe eye care.
- Strengthened Population and Health wording so sensitive health/social-problem content stays respectful, safety-focused and adult-guided.
- Added worksheet subject filtering so teachers can generate Maths only, Science only, or mixed worksheets without the topic list becoming confusing.
- Added 64 extra Science practice questions across the 8 topics, covering easy, medium and hard difficulty levels.

## Sensitive wording note — Population and Health

The NCDC outline contains outdated/sensitive wording under social problems among young people. The app should not reproduce that wording directly in child-facing content. Current learner-facing wording uses:

- anti-social behaviour
- health risks among young people
- unsafe sexual behaviour
- respectful, safety-focused and teacher/parent/health-worker guided discussion

This keeps the topic aligned to community health and safety without harmful or explicit presentation.

## Remaining Science gaps before calling Science “done”

Science is live and useful, but not yet fully done.

Recommended next quality/depth work:

1. Add a second depth layer for high-period topics if teacher feedback shows learners need more exam-style drill.
2. Deepen high-period topic explanations if classroom feedback requires it, especially:
   - Electricity and Magnetism
   - Simple Machines and Friction
   - Light Energy
   - Population and Health
3. Consider splitting or adding subtopic cards later if teachers need more classroom depth.
4. Update root tracking docs/changelog after the next grouped Science milestone.

## Current verdict

P7 Integrated Science is now stronger than the first wave: all 8 topics are live, diagrammed, practice-enabled, worksheet-enabled and backed by 15-question topic banks. It is safe to treat as a serious active subject build, but do not yet call the whole subject complete until the next depth/feedback pass is done.


---

## Later deepening update

After this original Science quality audit, Science was deepened further in `docs/ops/p7-science-deepening-pass-2026-07-01.md`. The current Science state is 20 practice questions per topic and guided application/experiment tasks for all 8 topics.
