"use client";

import { useEffect, useState } from "react";
import type { Topic, TopicVisual } from "@/lib/topics";
import TopicDiagram from "@/components/TopicDiagram";

type Tab = "watch" | "read";

function parseHash(hash: string): { subtopicId: string | null; moduleIndex: number } {
  const trimmed = hash.replace(/^#/, "");
  if (!trimmed) return { subtopicId: null, moduleIndex: 0 };
  const [subtopicId, moduleStr] = trimmed.split("/");
  const moduleIndex = parseInt(moduleStr, 10);
  return {
    subtopicId: subtopicId || null,
    moduleIndex: isNaN(moduleIndex) ? 0 : moduleIndex,
  };
}

function buildHash(subtopicId: string | null, moduleIndex: number): string {
  if (!subtopicId) return "";
  if (moduleIndex === 0) return `#${subtopicId}`;
  return `#${subtopicId}/${moduleIndex}`;
}

export default function TopicTabs({ topic }: { topic: Topic }) {
  const [tab, setTab] = useState<Tab>("read");
  const [speechSupported, setSpeechSupported] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [paused, setPaused] = useState(false);
  const [selectedSubtopicId, setSelectedSubtopicId] = useState<string | null>(null);
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);

  // Sync modular selection with URL hash so browser back/forward works inside the topic.
  useEffect(() => {
    if (!topic.subtopics) return;
    const { subtopicId, moduleIndex } = parseHash(window.location.hash);
    setSelectedSubtopicId(subtopicId);
    setActiveModuleIndex(moduleIndex);

    const onHashChange = () => {
      const next = parseHash(window.location.hash);
      setSelectedSubtopicId(next.subtopicId);
      setActiveModuleIndex(next.moduleIndex);
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [topic.subtopics]);

  // Detect Web Speech API support on client (DEV-014: TTS moved from tab into Read view)
  useEffect(() => {
    setSpeechSupported(typeof window !== "undefined" && "speechSynthesis" in window);
    return () => {
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const script = buildScript(topic);

  function toggleSpeech() {
    if (!speechSupported) return;
    const synth = window.speechSynthesis;
    if (speaking) {
      if (paused) { synth.resume(); setPaused(false); }
      else { synth.pause(); setPaused(true); }
      return;
    }
    synth.cancel();
    const u = new SpeechSynthesisUtterance(script);
    u.rate = 0.95;
    u.pitch = 1.0;
    u.onend = () => { setSpeaking(false); setPaused(false); };
    u.onerror = () => { setSpeaking(false); setPaused(false); };
    synth.speak(u);
    setSpeaking(true);
    setPaused(false);
  }

  function stopSpeech() {
    if (typeof window === "undefined") return;
    window.speechSynthesis.cancel();
    setSpeaking(false);
    setPaused(false);
  }

  return (
    <>
      <div className="tabs" role="tablist">
        <button
          role="tab"
          aria-selected={tab === "watch"}
          className={"tab" + (tab === "watch" ? " active" : "")}
          onClick={() => { setTab("watch"); stopSpeech(); }}
        >
          ▶ Watch {topic.videoUrl ? null : <span className="tab-pill">soon</span>}
        </button>
        <button
          role="tab"
          aria-selected={tab === "read"}
          className={"tab" + (tab === "read" ? " active" : "")}
          onClick={() => setTab("read")}
        >
          📖 Read
        </button>
      </div>

      {tab === "watch" && (
        <div className="watch-panel">
          {topic.videoUrl ? (
            <div className="video-wrapper">
              <iframe
                src={toEmbedUrl(topic.videoUrl)}
                title={`Video: ${topic.title}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="watch-empty">
              <div style={{ fontSize: 32 }}>🎬</div>
              <strong>Video coming soon</strong>
              <p className="watch-soon">
                A short explainer video for this topic is being prepared. Tap Read to study now.
              </p>
            </div>
          )}
        </div>
      )}

      {tab === "read" && (
        <div className="note">
          {speechSupported && (
            <div className="read-listen-bar">
              <button
                type="button"
                className="listen-icon-btn"
                onClick={toggleSpeech}
                aria-label={speaking ? (paused ? "Resume listening" : "Pause listening") : "Listen to this topic"}
                title={speaking ? (paused ? "Resume" : "Pause") : "Listen to this topic"}
              >
                {!speaking && <span aria-hidden>🔊</span>}
                {speaking && !paused && <span aria-hidden>⏸</span>}
                {speaking && paused && <span aria-hidden>▶</span>}
                <span className="listen-icon-label">
                  {!speaking && "Listen"}
                  {speaking && !paused && "Pause"}
                  {speaking && paused && "Resume"}
                </span>
              </button>
              {speaking && (
                <button type="button" className="listen-stop-btn" onClick={stopSpeech} aria-label="Stop listening">
                  ✕ Stop
                </button>
              )}
            </div>
          )}

          {topic.subtopics ? (
            <ModularTopicView
              topic={topic}
              selectedSubtopicId={selectedSubtopicId}
              activeModuleIndex={activeModuleIndex}
              onSelectSubtopic={(id, idx = 0) => {
                window.location.hash = buildHash(id, idx);
              }}
              onExitSubtopic={() => {
                window.location.hash = "";
              }}
            />
          ) : topic.note.study ? (
            <>
              <section className="study-big-idea">
                <div className="study-label">Big idea</div>
                <p>{topic.note.study.bigIdea}</p>
              </section>

              {topic.note.learningObjectives && (
                <section className="study-card">
                  <h2>What you will learn</h2>
                  <ul>
                    {topic.note.learningObjectives.map((obj, i) => <li key={i}>{obj}</li>)}
                  </ul>
                </section>
              )}

              {topic.note.study.keyVocabulary && topic.note.study.keyVocabulary.length > 0 && (
                <section className="study-card">
                  <h2>Key words</h2>
                  <div className="vocab-grid">
                    {topic.note.study.keyVocabulary.map((item, i) => (
                      <div key={i} className="vocab-card">
                        <strong>{item.term}</strong>
                        <span>{item.meaning}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {topic.note.study.sections && topic.note.study.sections.length > 0 && (
                <section className="study-card">
                  <h2>Learn it in parts</h2>
                  <div className="lesson-section-list">
                    {topic.note.study.sections.map((section, i) => (
                      <div key={i} className="lesson-section-card">
                        <h3>{section.title}</h3>
                        <ul>
                          {section.points.map((point, j) => <li key={j}>{point}</li>)}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {topic.note.study.visual && (
                <StudyVisualBrief visual={topic.note.study.visual} />
              )}

              <TopicDiagram topicId={topic.id} />

              {topic.note.study.examTip && (
                <section className="exam-tip">
                  <strong>PLE tip:</strong> {topic.note.study.examTip}
                </section>
              )}
            </>
          ) : (
            <>
              {topic.note.learningObjectives && (
                <>
                  <h2>What you will learn</h2>
                  <ul>
                    {topic.note.learningObjectives.map((obj, i) => <li key={i}>{obj}</li>)}
                  </ul>
                </>
              )}

              <TopicDiagram topicId={topic.id} />

              <h2>What you need to know</h2>
              {topic.note.whatYouNeedToKnow.map((p, i) => <p key={i}>{p}</p>)}
            </>
          )}

          {!topic.subtopics && (
            <>
              <h2>Worked example</h2>
              <div className="worked">
                <div><strong>Problem:</strong> {topic.note.worked.problem}</div>
                {topic.note.worked.steps.map((s, i) => {
                  const dot = s.indexOf(".");
                  const head = dot > -1 ? s.slice(0, dot + 1) : s;
                  const rest = dot > -1 ? s.slice(dot + 1) : "";
                  return <div key={i} className="step"><strong>{head}</strong>{rest}</div>;
                })}
                <div className="answer">{topic.note.worked.answer}</div>
              </div>

              {topic.note.commonMistakes && (
                <>
                  <h2>Common mistakes</h2>
                  <ul>
                    {topic.note.commonMistakes.map((m, i) => <li key={i}>{m}</li>)}
                  </ul>
                </>
              )}

              {topic.note.tryThis && (
                <div className="try-this">
                  <h2>Try this</h2>
                  <p>{topic.note.tryThis.question}</p>
                  <div className="quiz-choices">
                    {topic.note.tryThis.choices.map((choice, i) => (
                      <button key={i} className="choice" disabled>
                        <span className="choice-letter">{String.fromCharCode(65 + i)}</span>
                        {choice}
                      </button>
                    ))}
                  </div>
                  <p className="try-this-hint"><strong>Answer:</strong> {topic.note.tryThis.explanation}</p>
                </div>
              )}

              {topic.note.writingTasks && topic.note.writingTasks.length > 0 && (
                <div className="writing-practice-pack">
                  <h2>Guided practice</h2>
                  {topic.note.writingTasks.map((task, i) => (
                    <section key={i} className="writing-task-card">
                      <h3>{task.title}</h3>
                      <p className="writing-prompt"><strong>Task:</strong> {task.prompt}</p>
                      <div className="writing-task-grid">
                        <div>
                          <h4>Plan before writing</h4>
                          <ol>
                            {task.planningSteps.map((step, j) => <li key={j}>{step}</li>)}
                          </ol>
                        </div>
                        <div>
                          <h4>Marking checklist</h4>
                          <ul>
                            {task.checklist.map((item, j) => <li key={j}>{item}</li>)}
                          </ul>
                        </div>
                      </div>
                      {task.modelOpening && <p className="model-opening"><strong>Model opening:</strong> {task.modelOpening}</p>}
                    </section>
                  ))}
                </div>
              )}

              <h2>Quick recap</h2>
              <ul>
                {topic.note.recap.map((r, i) => <li key={i}>{r}</li>)}
              </ul>
            </>
          )}
        </div>
      )}
    </>
  );
}

function ModularTopicView({
  topic,
  selectedSubtopicId,
  activeModuleIndex,
  onSelectSubtopic,
  onExitSubtopic,
}: {
  topic: Topic;
  selectedSubtopicId: string | null;
  activeModuleIndex: number;
  onSelectSubtopic: (id: string, moduleIndex?: number) => void;
  onExitSubtopic: () => void;
}) {
  const subtopics = topic.subtopics!;

  if (!selectedSubtopicId) {
    return (
      <section className="modular-directory">
        <h2>Study this topic in parts</h2>
        <p className="modular-directory-intro">Choose one part to start. Each part has small steps you can finish one at a time.</p>
        <div className="subtopic-grid">
          {subtopics.map((subtopic) => (
            <button
              key={subtopic.subtopicId}
              className="subtopic-card"
              onClick={() => onSelectSubtopic(subtopic.subtopicId, 0)}
            >
              <div className="subtopic-number">{subtopics.indexOf(subtopic) + 1}</div>
              <div className="subtopic-card-body">
                <div className="subtopic-card-title">{subtopic.title}</div>
                <div className="subtopic-card-meta">{subtopic.modules.length} modules</div>
              </div>
              <div className="subtopic-card-arrow" aria-hidden="true">→</div>
            </button>
          ))}
        </div>
      </section>
    );
  }

  const subtopic = subtopics.find((s) => s.subtopicId === selectedSubtopicId);
  if (!subtopic) return null;

  const module = subtopic.modules[activeModuleIndex];
  const totalModules = subtopic.modules.length;

  return (
    <section className="modular-viewer">
      <button
        type="button"
        className="modular-back"
        onClick={onExitSubtopic}
      >
        ← Back to all parts
      </button>

      <div className="modular-subtopic-header">
        <div className="modular-subtopic-title">{subtopic.title}</div>
        <div className="modular-module-counter">Module {activeModuleIndex + 1} of {totalModules}</div>
      </div>

      <article className="modular-module">
        <h3 className="modular-module-title">{module.title}</h3>
        <p className="modular-big-idea">{module.bigIdea}</p>

        <ul className="modular-learn-it">
          {module.learnIt.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>

        {module.visual && <StudyVisualBrief visual={module.visual} />}

        {module.workedExample && (
          <div className="modular-worked">
            <h4>Worked example</h4>
            <p className="modular-worked-q"><strong>Question:</strong> {module.workedExample.question}</p>
            {module.workedExample.steps.map((step, i) => (
              <p key={i} className="modular-worked-step">{step}</p>
            ))}
            <p className="modular-worked-answer"><strong>Answer:</strong> {module.workedExample.answer.replace(/^Answer:\s*/, "")}</p>
          </div>
        )}

        {module.tryThis && (
          <div className="modular-try-this">
            <h4>Quick check</h4>
            <p>{module.tryThis.question}</p>
            <div className="modular-try-choices">
              {module.tryThis.choices.map((choice, i) => (
                <div key={i} className="modular-try-choice">
                  <span className="modular-try-letter">{String.fromCharCode(65 + i)}</span>
                  {choice}
                </div>
              ))}
            </div>
            <p className="modular-try-answer"><strong>Answer:</strong> {module.tryThis.explanation}</p>
          </div>
        )}

        {module.examTip && (
          <p className="modular-exam-tip">
            <strong>PLE tip:</strong> {module.examTip}
          </p>
        )}
      </article>

      <div className="modular-pagination">
        <button
          type="button"
          className="btn btn-secondary"
          disabled={activeModuleIndex === 0}
          onClick={() => onSelectSubtopic(selectedSubtopicId, activeModuleIndex - 1)}
        >
          ← Previous
        </button>

        <div className="modular-progress" aria-hidden="true">
          {subtopic.modules.map((_, i) => (
            <button
              key={i}
              type="button"
              className={"modular-progress-dot" + (i === activeModuleIndex ? " active" : "")}
              onClick={() => onSelectSubtopic(selectedSubtopicId, i)}
              aria-label={`Go to module ${i + 1}`}
            />
          ))}
        </div>

        {activeModuleIndex < totalModules - 1 ? (
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => onSelectSubtopic(selectedSubtopicId, activeModuleIndex + 1)}
          >
            Next →
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-primary"
            onClick={onExitSubtopic}
          >
            Finish part
          </button>
        )}
      </div>
    </section>
  );
}

function StudyVisualBrief({ visual }: { visual: TopicVisual }) {
  if (!visual) return null;
  const kind = visual.kind ?? "diagram";
  const steps = visual.description
    .split(/\.\s+/)
    .map((part) => part.trim().replace(/\.$/, ""))
    .filter(Boolean)
    .slice(0, 3);

  return (
    <section className={`visual-brief visual-brief-${kind}`}>
      <div className="visual-preview" aria-hidden="true">
        <VisualPreview kind={kind} />
      </div>
      <div className="visual-brief-copy">
        <div className="visual-kind">{kind}</div>
        <h2>{visual.title}</h2>
        <p>{visual.description}</p>
        {steps.length > 0 && (
          <ol className="visual-checklist">
            {steps.map((step, i) => <li key={i}>{step}</li>)}
          </ol>
        )}
      </div>
    </section>
  );
}

function VisualPreview({ kind }: { kind: NonNullable<NonNullable<Topic["note"]["study"]>["visual"]>["kind"] | "diagram" }) {
  if (kind === "timeline") {
    return <svg viewBox="0 0 160 110" role="img"><line x1="20" y1="55" x2="140" y2="55" /><circle cx="32" cy="55" r="8" /><circle cx="80" cy="55" r="8" /><circle cx="128" cy="55" r="8" /><text x="26" y="88">1</text><text x="74" y="88">2</text><text x="122" y="88">3</text></svg>;
  }
  if (kind === "flow") {
    return <svg viewBox="0 0 160 110" role="img"><rect x="12" y="34" width="36" height="34" rx="8" /><path d="M52 51 H72" /><rect x="76" y="34" width="36" height="34" rx="8" /><path d="M116 51 H136" /><circle cx="144" cy="51" r="12" /></svg>;
  }
  if (kind === "comparison") {
    return <svg viewBox="0 0 160 110" role="img"><rect x="16" y="24" width="54" height="62" rx="10" /><rect x="90" y="24" width="54" height="62" rx="10" /><line x1="80" y1="20" x2="80" y2="90" /></svg>;
  }
  if (kind === "map") {
    return <svg viewBox="0 0 160 110" role="img"><path d="M64 18 C100 24 118 48 108 76 C98 94 72 98 56 76 C42 58 48 34 64 18 Z" /><line x1="18" y1="56" x2="142" y2="56" /><line x1="80" y1="12" x2="80" y2="98" /></svg>;
  }
  if (kind === "cards") {
    return <svg viewBox="0 0 160 110" role="img"><rect x="16" y="22" width="38" height="50" rx="8" /><rect x="61" y="32" width="38" height="50" rx="8" /><rect x="106" y="22" width="38" height="50" rx="8" /></svg>;
  }
  return <svg viewBox="0 0 160 110" role="img"><rect x="18" y="18" width="124" height="74" rx="12" /><circle cx="58" cy="55" r="24" /><path d="M92 34 L124 76" /><line x1="92" y1="76" x2="124" y2="34" /></svg>;
}

function buildScript(topic: Topic): string {
  const parts: string[] = [];
  parts.push(topic.title + ".");
  parts.push(topic.note.intro);
  if (topic.subtopics) {
    parts.push("This topic is studied in parts.");
    for (const subtopic of topic.subtopics) {
      parts.push(subtopic.title + ".");
      for (const mod of subtopic.modules) {
        parts.push(mod.title + ".");
        parts.push(mod.bigIdea);
        parts.push(mod.learnIt.join(" "));
        if (mod.workedExample) {
          parts.push("Worked example.");
          parts.push(mod.workedExample.question);
          parts.push(mod.workedExample.steps.join(" "));
          parts.push(mod.workedExample.answer);
        }
        if (mod.examTip) parts.push(mod.examTip);
      }
    }
    return parts.join(" ");
  }
  if (topic.note.study) {
    parts.push("Big idea.");
    parts.push(topic.note.study.bigIdea);
    if (topic.note.study.keyVocabulary) {
      parts.push("Key words.");
      parts.push(topic.note.study.keyVocabulary.map((item) => `${item.term}: ${item.meaning}`).join(" "));
    }
    if (topic.note.study.sections) {
      parts.push("Learn it in parts.");
      parts.push(topic.note.study.sections.map((section) => `${section.title}. ${section.points.join(" ")}`).join(" "));
    }
    if (topic.note.study.examTip) parts.push(topic.note.study.examTip);
  } else {
    if (topic.note.learningObjectives) {
      parts.push("What you will learn.");
      parts.push(topic.note.learningObjectives.join(" "));
    }
    parts.push("What you need to know.");
    parts.push(topic.note.whatYouNeedToKnow.join(" "));
  }
  parts.push("Here is a worked example.");
  parts.push(topic.note.worked.problem);
  parts.push(topic.note.worked.steps.join(" "));
  parts.push(topic.note.worked.answer);
  if (topic.note.commonMistakes) {
    parts.push("Common mistakes.");
    parts.push(topic.note.commonMistakes.join(" "));
  }
  if (topic.note.tryThis) {
    parts.push("Try this.");
    parts.push(topic.note.tryThis.question);
    parts.push(topic.note.tryThis.explanation);
  }
  if (topic.note.writingTasks && topic.note.writingTasks.length > 0) {
    parts.push("Writing practice.");
    for (const task of topic.note.writingTasks) {
      parts.push(task.title);
      parts.push(task.prompt);
      parts.push(task.planningSteps.join(" "));
      parts.push(task.checklist.join(" "));
      if (task.modelOpening) parts.push(task.modelOpening);
    }
  }
  parts.push("Quick recap.");
  parts.push(topic.note.recap.join(" "));
  return parts.join(" ");
}

function toEmbedUrl(url: string): string {
  // Convert a YouTube watch or short link into the embed form so the iframe works.
  const yt = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/);
  if (yt && yt[1]) return `https://www.youtube.com/embed/${yt[1]}`;
  return url;
}
