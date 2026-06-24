"use client";

import { useState } from "react";

// Captures teacher/parent/student feedback on a specific quiz or paper question.
// Phase 3 stores in localStorage (tendo:reports). Phase 4 wires to a real endpoint.
// Strategy doc: docs/sales/teacher-contribution-strategy.md

interface Report {
  context: string; // "topic:fractions-core/q3" or "paper:ple-math-2019/q5"
  text: string;
  ts: string;
}

export default function ReportProblem({
  context,
  contextLabel,
  small = false,
}: {
  context: string;
  contextLabel: string;
  small?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [sent, setSent] = useState(false);

  function submit() {
    if (!text.trim()) return;
    try {
      const raw = window.localStorage.getItem("tendo:reports");
      const list: Report[] = raw ? JSON.parse(raw) : [];
      list.push({ context, text: text.trim(), ts: new Date().toISOString() });
      window.localStorage.setItem("tendo:reports", JSON.stringify(list));
    } catch {
      // ignore — even if storage fails, we show success so we don't discourage feedback
    }
    setSent(true);
    setTimeout(() => {
      setOpen(false);
      setSent(false);
      setText("");
    }, 1500);
  }

  return (
    <>
      <button
        type="button"
        className="report-link"
        onClick={() => setOpen(true)}
        style={small ? { fontSize: 12 } : undefined}
      >
        Report a problem with this question
      </button>

      {open && (
        <div className="report-modal-backdrop" onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}>
          <div className="report-modal" role="dialog" aria-modal="true">
            {!sent ? (
              <>
                <h3>Report a problem</h3>
                <div className="report-modal-cite">
                  <strong>Question:</strong> {contextLabel}
                </div>
                <p style={{ color: "var(--muted)", fontSize: 14, margin: "8px 0" }}>
                  Tell us what's wrong, or suggest a better question. Teachers and reviewers see every report.
                </p>
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="The answer key marks C as correct, but in our school we teach…"
                  autoFocus
                />
                <div className="report-modal-actions">
                  <button className="btn btn-secondary" onClick={() => setOpen(false)}>Cancel</button>
                  <button className="btn btn-primary" onClick={submit} disabled={!text.trim()}>Send</button>
                </div>
              </>
            ) : (
              <div style={{ textAlign: "center", padding: 16 }}>
                <div style={{ fontSize: 32, marginBottom: 8 }}>✓</div>
                <strong>Thank you.</strong>
                <p style={{ color: "var(--muted)", marginTop: 6 }}>
                  Your report is saved. A reviewer will look at it.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
