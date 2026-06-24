"use client";

import { useState } from "react";
import type { PaperQuestion } from "@/lib/papers";

const LETTERS = ["A", "B", "C", "D"] as const;

export default function PaperBrowse({
  grouped,
}: {
  grouped: Array<[string, PaperQuestion[]]>;
}) {
  const [showAnswers, setShowAnswers] = useState(true);
  const [printMode, setPrintMode] = useState(false);

  function copyWorksheet() {
    const lines: string[] = [];
    lines.push("TENDO · WORKSHEET");
    lines.push("");
    grouped.forEach(([topic, qs]) => {
      lines.push(`--- ${topic.toUpperCase()} ---`);
      lines.push("");
      qs.forEach((q) => {
        lines.push(`Q${q.num} (${q.marks} mark${q.marks === 1 ? "" : "s"}) ${q.q}`);
        q.choices.forEach((c, i) => lines.push(`   ${LETTERS[i]}) ${c}`));
        if (showAnswers) {
          lines.push(`   ANSWER: ${LETTERS[q.correct]} — ${q.why}`);
        }
        lines.push("");
      });
    });
    const text = lines.join("\n");
    try {
      navigator.clipboard.writeText(text);
      alert("Worksheet copied. Paste into Word or WhatsApp.");
    } catch {
      // Fallback: open in a new tab as plain text
      const w = window.open();
      if (w) {
        w.document.write(`<pre>${text.replace(/</g, "&lt;")}</pre>`);
      }
    }
  }

  function printWorksheet() {
    setPrintMode(true);
    setTimeout(() => {
      window.print();
      setPrintMode(false);
    }, 100);
  }

  return (
    <>
      <div className="teacher-toolbar no-print">
        <label className="toggle">
          <input
            type="checkbox"
            checked={showAnswers}
            onChange={(e) => setShowAnswers(e.target.checked)}
          />
          Show answers
        </label>
        <button className="btn btn-secondary" onClick={copyWorksheet}>
          Copy as text
        </button>
        <button className="btn btn-primary" onClick={printWorksheet}>
          Print worksheet
        </button>
      </div>

      {grouped.map(([topic, qs]) => (
        <div key={topic} className="topic-block">
          <h3 className="topic-block-title">{topic}</h3>
          {qs.map((q) => (
            <div key={q.num} className={"question-row" + (printMode ? " printed" : "")}>
              <div className="q-head">
                <strong>Q{q.num}.</strong> <span>{q.q}</span>
                <span className="q-marks">{q.marks} {q.marks === 1 ? "mark" : "marks"}</span>
              </div>
              <ol className="q-choices">
                {q.choices.map((c, i) => (
                  <li key={i} className={showAnswers && i === q.correct ? "choice-correct-row" : ""}>
                    <span className="q-letter">{LETTERS[i]})</span> {c}
                    {showAnswers && i === q.correct && <span className="q-tick"> ✓</span>}
                  </li>
                ))}
              </ol>
              {showAnswers && (
                <div className="q-why">
                  <strong>Why:</strong> {q.why}
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
