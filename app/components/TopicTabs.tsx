"use client";

import { useEffect, useState } from "react";
import type { Topic } from "@/lib/topics";
import TopicDiagram from "@/components/TopicDiagram";

type Tab = "watch" | "read";

export default function TopicTabs({ topic }: { topic: Topic }) {
  const [tab, setTab] = useState<Tab>("read");
  const [speechSupported, setSpeechSupported] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [paused, setPaused] = useState(false);

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
        </div>
      )}
    </>
  );
}

function buildScript(topic: Topic): string {
  const parts: string[] = [];
  parts.push(topic.title + ".");
  parts.push(topic.note.intro);
  if (topic.note.learningObjectives) {
    parts.push("What you will learn.");
    parts.push(topic.note.learningObjectives.join(" "));
  }
  parts.push("What you need to know.");
  parts.push(topic.note.whatYouNeedToKnow.join(" "));
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
