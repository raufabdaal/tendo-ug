"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { sampleFromTopic, type BankQuestion } from "@/lib/question-bank";
import ReportProblem from "./ReportProblem";

const LETTERS = ["A", "B", "C", "D"] as const;
const SESSION_SIZE = 7; // questions per "round" before the running tally pauses

type Phase = "answering" | "feedback";

export default function PracticeRunner({
  topicId,
  topicTitle,
  backHref,
}: {
  topicId: string;
  topicTitle: string;
  backHref?: string;
}) {
  const [questions, setQuestions] = useState<BankQuestion[]>([]);
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [phase, setPhase] = useState<Phase>("answering");
  const [sessionRight, setSessionRight] = useState(0);
  const [sessionTotal, setSessionTotal] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);

  // Seed first batch of questions on mount
  useEffect(() => {
    setQuestions(sampleFromTopic(topicId, SESSION_SIZE));
  }, [topicId]);

  if (questions.length === 0) {
    return <div className="dash-empty">Loading practice…</div>;
  }

  const item = questions[index];

  function pick(i: number) {
    if (phase !== "answering") return;
    setPicked(i);
    setPhase("feedback");
    setSessionTotal((n) => n + 1);
    if (i === item.correct) {
      setSessionRight((n) => n + 1);
      setStreak((s) => {
        const next = s + 1;
        setBestStreak((b) => Math.max(b, next));
        return next;
      });
    } else {
      setStreak(0);
    }
  }

  function next() {
    if (index + 1 >= questions.length) {
      // Top up with a fresh batch
      setQuestions(sampleFromTopic(topicId, SESSION_SIZE));
      setIndex(0);
    } else {
      setIndex((n) => n + 1);
    }
    setPicked(null);
    setPhase("answering");
  }

  function endSession() {
    if (sessionTotal > 0) {
      // Persist a session summary for the dashboard
      try {
        const raw = window.localStorage.getItem("tendo:practice");
        const data = raw ? JSON.parse(raw) : {};
        const prev = data[topicId];
        data[topicId] = {
          totalAnswered: (prev?.totalAnswered ?? 0) + sessionTotal,
          totalRight: (prev?.totalRight ?? 0) + sessionRight,
          bestStreak: Math.max(prev?.bestStreak ?? 0, bestStreak),
          lastSession: { right: sessionRight, total: sessionTotal, streak: bestStreak },
          updatedAt: new Date().toISOString(),
        };
        window.localStorage.setItem("tendo:practice", JSON.stringify(data));
      } catch {}
    }
  }

  const pct = sessionTotal === 0 ? 0 : Math.round((sessionRight / sessionTotal) * 100);
  const difficultyBadge = (
    <span className={"diff-pill diff-" + item.difficulty}>{item.difficulty}</span>
  );

  return (
    <>
      <div className="practice-bar">
        <div className="practice-stat">
          <div className="practice-stat-num">{sessionRight}<span className="of">/{sessionTotal}</span></div>
          <div className="practice-stat-label">this session</div>
        </div>
        <div className="practice-stat">
          <div className="practice-stat-num">{pct}%</div>
          <div className="practice-stat-label">accuracy</div>
        </div>
        <div className="practice-stat">
          <div className="practice-stat-num">{streak}<span className="of"> · best {bestStreak}</span></div>
          <div className="practice-stat-label">current streak</div>
        </div>
      </div>

      <div className="practice-q-meta">
        <div className="eyebrow">Question {sessionTotal + (phase === "answering" ? 1 : 0)}</div>
        {difficultyBadge}
      </div>
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
            <strong>{picked === item.correct ? "Correct." : "Not quite."}</strong> {item.why}
          </div>
          <div style={{ textAlign: "right", marginBottom: 8 }}>
            <ReportProblem
              context={`practice:${topicId}/${item.q.slice(0, 30)}`}
              contextLabel={`${topicTitle} · ${item.q.slice(0, 60)}${item.q.length > 60 ? "…" : ""}`}
              small
            />
          </div>
          <button className="btn btn-primary btn-block" onClick={next}>
            Next question →
          </button>
        </>
      )}

      <div className="practice-actions">
        <Link
          href={backHref ?? `/math/p7/${topicId}`}
          className="btn btn-secondary"
          onClick={endSession}
        >
          End practice
        </Link>
      </div>

      <div className="foot" style={{ marginTop: 32 }}>
        Practice mode · questions are drawn fresh each round.
      </div>
    </>
  );
}
