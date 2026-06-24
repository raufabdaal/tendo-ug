"use client";

import { useEffect, useRef, useState } from "react";
import type { Topic } from "@/lib/topics";

type Tab = "watch" | "listen" | "read";

export default function TopicTabs({ topic }: { topic: Topic }) {
  const [tab, setTab] = useState<Tab>("read");
  const [speechSupported, setSpeechSupported] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [paused, setPaused] = useState(false);

  // Detect Web Speech API support on client (DEV_JOURNAL: free TTS, $0 cost)
  useEffect(() => {
    setSpeechSupported(typeof window !== "undefined" && "speechSynthesis" in window);
    return () => {
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // Stop any ongoing speech when leaving the listen tab
  useEffect(() => {
    if (tab !== "listen" && typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
      setPaused(false);
    }
  }, [tab]);

  // The full read-aloud script
  const script = buildScript(topic);

  function play() {
    if (!speechSupported) return;
    const synth = window.speechSynthesis;
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

  function pauseOrResume() {
    const synth = window.speechSynthesis;
    if (paused) { synth.resume(); setPaused(false); }
    else { synth.pause(); setPaused(true); }
  }

  function stop() {
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
          onClick={() => setTab("watch")}
        >
          ▶ Watch <span className="tab-pill">soon</span>
        </button>
        <button
          role="tab"
          aria-selected={tab === "listen"}
          className={"tab" + (tab === "listen" ? " active" : "")}
          onClick={() => setTab("listen")}
        >
          🔊 Listen
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
          <div style={{ fontSize: 32 }}>🎬</div>
          <strong>Video coming soon</strong>
          <p className="watch-soon">
            A short explainer video for this topic is being prepared. For now, tap Listen for the
            audio version, or Read below.
          </p>
        </div>
      )}

      {tab === "listen" && (
        <div className="listen-panel">
          <div style={{ fontSize: 32 }}>🔊</div>
          <strong>Listen to this topic</strong>
          {!speechSupported && (
            <p className="watch-soon">
              Your browser does not support audio playback. Please use the Read tab instead.
            </p>
          )}
          {speechSupported && (
            <>
              <div className="listen-controls">
                {!speaking && (
                  <button className="btn btn-primary" onClick={play}>
                    Play
                  </button>
                )}
                {speaking && (
                  <>
                    <button className="btn btn-secondary" onClick={pauseOrResume}>
                      {paused ? "Resume" : "Pause"}
                    </button>
                    <button className="btn btn-primary" onClick={stop}>
                      Stop
                    </button>
                  </>
                )}
              </div>
              <div className="listen-status">
                {speaking ? (paused ? "Paused." : "Playing…") : "Tap Play to listen. Then scroll down to follow along with the notes."}
              </div>
            </>
          )}
        </div>
      )}

      {/* Read view: always render the notes (so search engines and "Read" tab see them) */}
      <div className="note" style={{ display: tab === "read" ? "block" : "none" }}>
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

        <h2>Quick recap</h2>
        <ul>
          {topic.note.recap.map((r, i) => <li key={i}>{r}</li>)}
        </ul>
      </div>

      {/* When Listen or Watch is selected, also show the notes underneath for follow-along */}
      {tab !== "read" && (
        <details style={{ marginBottom: 18 }}>
          <summary style={{ cursor: "pointer", color: "var(--muted)", fontSize: 14, padding: "8px 0" }}>
            Show the written notes too
          </summary>
          <div className="note" style={{ marginTop: 12 }}>
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
            <h2>Quick recap</h2>
            <ul>
              {topic.note.recap.map((r, i) => <li key={i}>{r}</li>)}
            </ul>
          </div>
        </details>
      )}
    </>
  );
}

function buildScript(topic: Topic): string {
  const parts: string[] = [];
  parts.push(topic.title + ".");
  parts.push(topic.note.intro);
  parts.push("What you need to know.");
  parts.push(topic.note.whatYouNeedToKnow.join(" "));
  parts.push("Here is a worked example.");
  parts.push(topic.note.worked.problem);
  parts.push(topic.note.worked.steps.join(" "));
  parts.push(topic.note.worked.answer);
  parts.push("Quick recap.");
  parts.push(topic.note.recap.join(" "));
  return parts.join(" ");
}
