"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { TOPICS } from "@/lib/topics";
import { PAPERS } from "@/lib/papers";

interface TopicProgress {
  bestScore: number;
  lastTotal: number;
  attempts: number;
  updatedAt: string;
}
interface PaperProgress {
  best: number;
  lastTotal: number;
  questions: number;
  attempts: number;
  updatedAt: string;
}

interface Stats {
  topicsCompleted: number;
  totalTopics: number;
  averageScorePct: number | null;
  lastActiveDate: string | null;
  papersAttempted: number;
}

export default function TeacherDashboard() {
  const [topicProgress, setTopicProgress] = useState<Record<string, TopicProgress>>({});
  const [paperProgress, setPaperProgress] = useState<Record<string, PaperProgress>>({});
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const t = window.localStorage.getItem("tendo:progress");
      const p = window.localStorage.getItem("tendo:papers");
      if (t) setTopicProgress(JSON.parse(t));
      if (p) setPaperProgress(JSON.parse(p));
    } catch {
      // ignore
    }
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return <div className="dash-empty">Loading…</div>;
  }

  const topicEntries = Object.entries(topicProgress);
  const paperEntries = Object.entries(paperProgress);
  const hasAny = topicEntries.length > 0 || paperEntries.length > 0;

  // Compute summary stats
  const stats: Stats = {
    topicsCompleted: topicEntries.length,
    totalTopics: TOPICS.length,
    averageScorePct:
      topicEntries.length > 0
        ? Math.round(
            (topicEntries.reduce((sum, [, p]) => sum + p.bestScore / p.lastTotal, 0) /
              topicEntries.length) *
              100,
          )
        : null,
    lastActiveDate: mostRecent([
      ...topicEntries.map(([, p]) => p.updatedAt),
      ...paperEntries.map(([, p]) => p.updatedAt),
    ]),
    papersAttempted: paperEntries.length,
  };

  function exportReport() {
    const date = new Date().toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    const lines: string[] = [];
    lines.push("TENDO · Class progress report");
    lines.push(`Generated ${date}`);
    lines.push("");
    lines.push("SUMMARY");
    lines.push(`Topics practiced: ${stats.topicsCompleted} of ${stats.totalTopics}`);
    if (stats.averageScorePct !== null) {
      lines.push(`Average best score: ${stats.averageScorePct}%`);
    }
    lines.push(`Past papers attempted: ${stats.papersAttempted}`);
    if (stats.lastActiveDate) {
      lines.push(`Last active: ${formatDate(stats.lastActiveDate)}`);
    }
    lines.push("");
    if (topicEntries.length > 0) {
      lines.push("TOPICS");
      topicEntries.forEach(([id, p]) => {
        const title = TOPICS.find((t) => t.id === id)?.title ?? id;
        const pct = Math.round((p.bestScore / p.lastTotal) * 100);
        lines.push(`  ${title}: ${p.bestScore}/${p.lastTotal} (${pct}%) · ${p.attempts} attempt${p.attempts === 1 ? "" : "s"}`);
      });
      lines.push("");
    }
    if (paperEntries.length > 0) {
      lines.push("PAST PAPERS");
      paperEntries.forEach(([id, p]) => {
        const name = PAPERS.find((pp) => pp.id === id)?.paperName ?? id;
        const pct = Math.round((p.best / p.lastTotal) * 100);
        lines.push(`  ${name}: ${p.best}/${p.lastTotal} (${pct}%) · ${p.attempts} attempt${p.attempts === 1 ? "" : "s"}`);
      });
    }
    const text = lines.join("\n");
    try {
      navigator.clipboard.writeText(text);
      alert("Report copied. Paste into WhatsApp, email or your parents' group.");
    } catch {
      const w = window.open();
      if (w) w.document.write(`<pre>${text}</pre>`);
    }
  }

  function clearData() {
    if (!confirm("Clear all progress data on this device? This cannot be undone.")) return;
    try {
      window.localStorage.removeItem("tendo:progress");
      window.localStorage.removeItem("tendo:papers");
      setTopicProgress({});
      setPaperProgress({});
    } catch {
      // ignore
    }
  }

  return (
    <>
      <div className="callout">
        <strong>Demo dashboard.</strong> This shows the activity on THIS device. In the school-pilot
        version, each student logs in with a class code and their progress reports here from any
        phone they use.
      </div>

      <div className="dash-stat-grid">
        <div className="dash-stat">
          <div className="dash-stat-num">{stats.topicsCompleted}</div>
          <div className="dash-stat-label">topics practiced</div>
        </div>
        <div className="dash-stat">
          <div className="dash-stat-num">{stats.averageScorePct === null ? "—" : `${stats.averageScorePct}%`}</div>
          <div className="dash-stat-label">avg best score</div>
        </div>
        <div className="dash-stat">
          <div className="dash-stat-num">{stats.papersAttempted}</div>
          <div className="dash-stat-label">past papers attempted</div>
        </div>
        <div className="dash-stat">
          <div className="dash-stat-num" style={{ fontSize: 16, paddingTop: 8 }}>
            {stats.lastActiveDate ? formatDate(stats.lastActiveDate) : "—"}
          </div>
          <div className="dash-stat-label">last active</div>
        </div>
      </div>

      {!hasAny && (
        <div className="dash-empty">
          <strong>No activity on this device yet.</strong>
          For the demo, open the app on this device, complete a topic quiz, then come back here.
          You will see the score appear automatically.
          <div style={{ marginTop: 16 }}>
            <Link href="/math/p7" className="btn btn-primary">Try a topic now</Link>
          </div>
        </div>
      )}

      {topicEntries.length > 0 && (
        <>
          <h2>Topic activity</h2>
          <table className="dash-table">
            <thead>
              <tr>
                <th>Topic</th>
                <th>Best score</th>
                <th>Attempts</th>
                <th>Last seen</th>
              </tr>
            </thead>
            <tbody>
              {topicEntries.map(([id, p]) => {
                const t = TOPICS.find((x) => x.id === id);
                const pct = Math.round((p.bestScore / p.lastTotal) * 100);
                const cls = pct >= 70 ? "high" : pct >= 40 ? "mid" : "low";
                return (
                  <tr key={id}>
                    <td>{t?.title ?? id}</td>
                    <td><span className={`dash-pct ${cls}`}>{p.bestScore}/{p.lastTotal} · {pct}%</span></td>
                    <td>{p.attempts}</td>
                    <td>{formatDate(p.updatedAt)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}

      {paperEntries.length > 0 && (
        <>
          <h2>Past paper attempts</h2>
          <table className="dash-table">
            <thead>
              <tr>
                <th>Paper</th>
                <th>Best mark</th>
                <th>Attempts</th>
                <th>Last seen</th>
              </tr>
            </thead>
            <tbody>
              {paperEntries.map(([id, p]) => {
                const paper = PAPERS.find((x) => x.id === id);
                const pct = Math.round((p.best / p.lastTotal) * 100);
                const cls = pct >= 70 ? "high" : pct >= 40 ? "mid" : "low";
                return (
                  <tr key={id}>
                    <td>{paper?.paperName ?? id}</td>
                    <td><span className={`dash-pct ${cls}`}>{p.best}/{p.lastTotal} · {pct}%</span></td>
                    <td>{p.attempts}</td>
                    <td>{formatDate(p.updatedAt)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}

      {hasAny && (
        <div style={{ marginTop: 24, display: "flex", gap: 10, flexWrap: "wrap" }}>
          <button className="btn btn-primary" onClick={exportReport}>
            Copy report for parents
          </button>
          <button className="btn btn-secondary" onClick={() => window.print()}>
            Print this page
          </button>
          <button
            className="btn btn-secondary"
            onClick={clearData}
            style={{ marginLeft: "auto", borderColor: "var(--error)", color: "var(--error)" }}
          >
            Clear demo data
          </button>
        </div>
      )}
    </>
  );
}

function mostRecent(iso: string[]): string | null {
  const valid = iso.filter(Boolean);
  if (valid.length === 0) return null;
  return valid.sort().reverse()[0];
}

function formatDate(iso: string): string {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
  } catch {
    return iso;
  }
}
