"use client";

import { useState } from "react";
import Link from "next/link";
import type { PaperQuestion } from "@/lib/papers";
import ReportProblem from "./ReportProblem";

const LETTERS = ["A", "B", "C", "D"] as const;
type Phase = "answering" | "feedback" | "done";

export default function PaperAttempt({
  paperId,
  paperName,
  questions,
  totalMarks,
}: {
  paperId: string;
  paperName: string;
  questions: PaperQuestion[];
  totalMarks: number;
}) {
  const [index, setIndex] = useState(0);
  const [picks, setPicks] = useState<Array<number | null>>(
    () => questions.map(() => null),
  );
  const [phase, setPhase] = useState<Phase>("answering");
  const [started, setStarted] = useState(false);

  if (!started) {
    return (
      <div>
        <h2>Ready?</h2>
        <p>
          You will see one question at a time. After you pick an answer you get instant feedback
          with the explanation. At the end you see your total mark and where you went wrong.
          Your result is saved on this device.
        </p>
        <p>
          <strong>{questions.length} questions · {totalMarks} marks total.</strong> Take your time.
        </p>
        <button className="btn btn-primary btn-block" onClick={() => setStarted(true)}>
          Start attempt
        </button>
      </div>
    );
  }

  if (phase === "done") {
    const earned = questions.reduce(
      (sum, q, i) => sum + (picks[i] === q.correct ? q.marks : 0),
      0,
    );
    const correctCount = picks.filter((p, i) => p === questions[i].correct).length;
    const pct = Math.round((earned / totalMarks) * 100);

    persistPaperResult(paperId, earned, totalMarks, correctCount, questions.length);

    let band: string;
    let bandClass: string;
    if (pct >= 80) { band = "Distinction (D1 territory)"; bandClass = "result-d1"; }
    else if (pct >= 60) { band = "Credit"; bandClass = "result-credit"; }
    else if (pct >= 40) { band = "Pass"; bandClass = "result-pass"; }
    else { band = "Needs more practice"; bandClass = "result-fail"; }

    return (
      <div>
        <div className="result-big">
          <div className="result-score">{earned} / {totalMarks}</div>
          <div className="result-score-sub">{correctCount} correct of {questions.length} · {pct}%</div>
        </div>
        <div className={"band " + bandClass}>{band}</div>

        <h2 style={{ marginTop: 36 }}>Where you went wrong</h2>
        {questions.map((q, i) => {
          const right = picks[i] === q.correct;
          if (right) return null;
          return (
            <div key={q.num} className="review-card">
              <div className="review-num">Question {q.num}</div>
              <div className="review-q">{q.q}</div>
              <div className="review-line">
                <span className="review-label">Your answer:</span>{" "}
                <span className="review-wrong">
                  {picks[i] !== null ? `${LETTERS[picks[i]!]} · ${q.choices[picks[i]!]}` : "(skipped)"}
                </span>
              </div>
              <div className="review-line">
                <span className="review-label">Correct:</span>{" "}
                <span className="review-right">{LETTERS[q.correct]} · {q.choices[q.correct]}</span>
              </div>
              <div className="review-why">{q.why}</div>
            </div>
          );
        })}
        {correctCount === questions.length && (
          <p style={{ textAlign: "center", color: "var(--success)", marginTop: 20 }}>
            Every question correct. Excellent work.
          </p>
        )}

        <div style={{ marginTop: 32 }}>
          <Link href="/papers" className="btn btn-primary btn-block" style={{ marginBottom: 10 }}>
            Pick another paper
          </Link>
          <button
            className="btn btn-secondary btn-block"
            onClick={() => {
              setPicks(questions.map(() => null));
              setIndex(0);
              setPhase("answering");
            }}
          >
            Retake this paper
          </button>
        </div>
      </div>
    );
  }

  const item = questions[index];
  const progress = ((index + (phase === "feedback" ? 1 : 0)) / questions.length) * 100;
  const myPick = picks[index];

  function pick(i: number) {
    if (phase !== "answering") return;
    const next = [...picks];
    next[index] = i;
    setPicks(next);
    setPhase("feedback");
  }

  function advance() {
    if (index + 1 >= questions.length) {
      setPhase("done");
    } else {
      setIndex((n) => n + 1);
      setPhase("answering");
    }
  }

  return (
    <div>
      <div className="progress-bar"><div className="progress-fill" style={{ width: `${progress}%` }} /></div>
      <div className="eyebrow">
        Question {index + 1} of {questions.length} · {item.marks} {item.marks === 1 ? "mark" : "marks"}
      </div>
      <div className="quiz-q">{item.q}</div>

      <div className="quiz-choices">
        {item.choices.map((c, i) => {
          let cls = "choice";
          if (phase === "feedback") {
            if (i === item.correct) cls += " correct";
            else if (i === myPick) cls += " wrong";
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
            <strong>{myPick === item.correct ? "Correct." : "Not quite."}</strong> {item.why}
          </div>
          <div style={{ textAlign: "right", marginBottom: 8 }}>
            <ReportProblem
              context={`paper:${paperId}/q${item.num}`}
              contextLabel={`${paperName} · Q${item.num}: ${item.q.slice(0, 60)}${item.q.length > 60 ? "…" : ""}`}
              small
            />
          </div>
          <button className="btn btn-primary btn-block" onClick={advance}>
            {index + 1 === questions.length ? "See result" : "Next question"}
          </button>
        </>
      )}

      <div className="foot" style={{ marginTop: 32 }}>
        {paperName} · leaving this page resets your attempt.
      </div>
    </div>
  );
}

function persistPaperResult(
  paperId: string,
  earned: number,
  total: number,
  correct: number,
  questions: number,
) {
  if (typeof window === "undefined") return;
  try {
    const raw = window.localStorage.getItem("tendo:papers");
    const data = raw ? JSON.parse(raw) : {};
    const prev = data[paperId];
    data[paperId] = {
      lastEarned: earned,
      lastTotal: total,
      lastCorrect: correct,
      questions,
      best: prev ? Math.max(prev.best ?? 0, earned) : earned,
      attempts: (prev?.attempts ?? 0) + 1,
      updatedAt: new Date().toISOString(),
    };
    window.localStorage.setItem("tendo:papers", JSON.stringify(data));
  } catch {
    // ignore
  }
}
