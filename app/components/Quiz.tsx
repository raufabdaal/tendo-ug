"use client";

import { useState } from "react";
import Link from "next/link";
import type { QuizQuestion } from "@/lib/topics";
import ReportProblem from "./ReportProblem";

const LETTERS = ["A", "B", "C", "D"] as const;

type Phase = "answering" | "feedback" | "done";

export default function Quiz({
  questions,
  topicId,
  topicTitle,
}: {
  questions: QuizQuestion[];
  topicId: string;
  topicTitle: string;
}) {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [phase, setPhase] = useState<Phase>("answering");
  const [picked, setPicked] = useState<number | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);

  if (!showQuiz) {
    return (
      <button className="btn btn-primary btn-block" onClick={() => setShowQuiz(true)}>
        Take the quiz · {questions.length} questions
      </button>
    );
  }

  if (phase === "done") {
    const total = questions.length;
    const pct = Math.round((score / total) * 100);
    persistResult(topicId, score, total);
    let msg: string;
    if (pct === 100) msg = "Full marks. Try a harder topic next.";
    else if (pct >= 70) msg = "Strong. Read the explanations for the ones you missed and try again tomorrow.";
    else if (pct >= 40) msg = "Getting there. Re-read the topic notes, then retake the quiz.";
    else msg = "Take another look at the topic notes. Then come back and retake the quiz.";

    return (
      <div>
        <div className="result-big">
          <div className="result-score">{score} / {total}</div>
          <div className="result-score-sub">{pct}%</div>
        </div>
        <div className="result-msg">{msg}</div>
        <Link href="/math/p7" className="btn btn-primary btn-block" style={{ marginBottom: 10 }}>
          Pick another topic
        </Link>
        <button
          className="btn btn-secondary btn-block"
          onClick={() => {
            setIndex(0);
            setScore(0);
            setPicked(null);
            setPhase("answering");
          }}
        >
          Retake this quiz
        </button>
        <div className="foot">
          In the full app, your teacher will see (per topic) which of your class has revised this and what they scored.
        </div>
      </div>
    );
  }

  const item = questions[index];
  const progress = ((index + (phase === "feedback" ? 1 : 0)) / questions.length) * 100;

  function pick(i: number) {
    if (phase !== "answering") return;
    setPicked(i);
    if (i === item.correct) setScore((s) => s + 1);
    setPhase("feedback");
  }

  function next() {
    if (index + 1 >= questions.length) {
      setPhase("done");
    } else {
      setIndex((n) => n + 1);
      setPicked(null);
      setPhase("answering");
    }
  }

  return (
    <div>
      <div className="progress-bar"><div className="progress-fill" style={{ width: `${progress}%` }} /></div>
      <div className="eyebrow">Question {index + 1} of {questions.length}</div>
      <div className="quiz-q">{item.q}</div>

      <div className="quiz-choices">
        {item.choices.map((c, i) => {
          let cls = "choice";
          if (phase === "feedback") {
            if (i === item.correct) cls += " correct";
            else if (i === picked) cls += " wrong";
          }
          return (
            <button
              key={i}
              className={cls}
              disabled={phase !== "answering"}
              onClick={() => pick(i)}
              type="button"
            >
              <span className="choice-letter">{LETTERS[i]}</span>
              <span>{c}</span>
            </button>
          );
        })}
      </div>

      {phase === "feedback" && (
        <>
          <div className="feedback">
            <strong>{picked === item.correct ? "Correct." : "Not quite."}</strong>{" "}
            {item.why}
          </div>
          <div style={{ textAlign: "right", marginBottom: 8 }}>
            <ReportProblem
              context={`topic:${topicId}/q${index + 1}`}
              contextLabel={`${topicTitle} · Q${index + 1}: ${item.q.slice(0, 60)}${item.q.length > 60 ? "…" : ""}`}
              small
            />
          </div>
          <button className="btn btn-primary btn-block" onClick={next}>
            {index + 1 === questions.length ? "See result" : "Next question"}
          </button>
        </>
      )}

      <div className="foot" style={{ marginTop: 32 }}>
        {topicTitle} · leaving this page resets the quiz.
      </div>
    </div>
  );
}

// localStorage-backed progress (DEV-002: no auth in v0)
function persistResult(topicId: string, score: number, total: number) {
  if (typeof window === "undefined") return;
  try {
    const raw = window.localStorage.getItem("tendo:progress");
    const data = raw ? JSON.parse(raw) : {};
    const prev = data[topicId];
    data[topicId] = {
      lastScore: score,
      lastTotal: total,
      bestScore: prev ? Math.max(prev.bestScore ?? 0, score) : score,
      attempts: (prev?.attempts ?? 0) + 1,
      updatedAt: new Date().toISOString(),
    };
    window.localStorage.setItem("tendo:progress", JSON.stringify(data));
  } catch {
    // localStorage may be unavailable (private mode, etc.) — fail silent
  }
}
