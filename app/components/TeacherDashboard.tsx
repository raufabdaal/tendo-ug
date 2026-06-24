"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { TOPICS } from "@/lib/topics";
import { PAPERS } from "@/lib/papers";
import {
  generateDemoClass,
  saveDemoClass,
  loadDemoClass,
  clearDemoClass,
  type DemoStudent,
} from "@/lib/demo-class";

type View = "class" | "student";
type Mode = "demo" | "device";

interface TopicProgress { bestScore: number; lastTotal: number; attempts: number; updatedAt: string; }
interface PaperProgress { best: number; lastTotal: number; questions?: number; attempts: number; updatedAt: string; }

export default function TeacherDashboard() {
  const [mode, setMode] = useState<Mode>("device");
  const [demoClass, setDemoClass] = useState<DemoStudent[] | null>(null);
  const [deviceTopics, setDeviceTopics] = useState<Record<string, TopicProgress>>({});
  const [devicePapers, setDevicePapers] = useState<Record<string, PaperProgress>>({});
  const [view, setView] = useState<View>("class");
  const [selectedStudentId, setSelectedStudentId] = useState<string | null>(null);
  const [hydrated, setHydrated] = useState(false);

  // Hydrate once on client
  useEffect(() => {
    try {
      const t = window.localStorage.getItem("tendo:progress");
      const p = window.localStorage.getItem("tendo:papers");
      if (t) setDeviceTopics(JSON.parse(t));
      if (p) setDevicePapers(JSON.parse(p));
    } catch {}
    const dc = loadDemoClass();
    if (dc) {
      setDemoClass(dc);
      setMode("demo");
    }
    setHydrated(true);
  }, []);

  if (!hydrated) return <div className="dash-empty">Loading…</div>;

  function handleLoadDemoClass() {
    const students = generateDemoClass();
    saveDemoClass(students);
    setDemoClass(students);
    setMode("demo");
    setView("class");
  }

  function handleClearDemoClass() {
    if (!confirm("Clear the demo class data? This removes the 22 sample students but keeps real device activity.")) return;
    clearDemoClass();
    setDemoClass(null);
    setMode("device");
    setView("class");
  }

  function handleClearDeviceData() {
    if (!confirm("Clear your own device's progress? This affects only this device.")) return;
    try {
      window.localStorage.removeItem("tendo:progress");
      window.localStorage.removeItem("tendo:papers");
      setDeviceTopics({});
      setDevicePapers({});
    } catch {}
  }

  const hasDevice = Object.keys(deviceTopics).length > 0 || Object.keys(devicePapers).length > 0;
  const hasDemo = demoClass !== null && demoClass.length > 0;

  return (
    <>
      {/* Mode banner / picker */}
      {!hasDemo && !hasDevice && (
        <div className="dash-empty">
          <strong>No activity yet on this device.</strong>
          To see what a real classroom looks like, load a demo class of 22 sample students.
          Or open a topic / past paper yourself first, then come back.
          <div style={{ marginTop: 16, display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
            <button className="btn btn-primary" onClick={handleLoadDemoClass}>
              Load demo class (22 students)
            </button>
            <Link href="/math/p7" className="btn btn-secondary">
              Try a topic yourself
            </Link>
          </div>
        </div>
      )}

      {(hasDemo || hasDevice) && (
        <div className="mode-tabs">
          {hasDemo && (
            <button
              className={"mode-tab" + (mode === "demo" ? " active" : "")}
              onClick={() => { setMode("demo"); setView("class"); setSelectedStudentId(null); }}
            >
              Demo class
              <span className="mode-tab-pill">{demoClass!.length} students</span>
            </button>
          )}
          {hasDevice && (
            <button
              className={"mode-tab" + (mode === "device" ? " active" : "")}
              onClick={() => { setMode("device"); setView("class"); setSelectedStudentId(null); }}
            >
              This device
              <span className="mode-tab-pill">you</span>
            </button>
          )}
          {!hasDemo && hasDevice && (
            <button className="mode-tab-link" onClick={handleLoadDemoClass}>
              + Load demo class
            </button>
          )}
        </div>
      )}

      {mode === "demo" && hasDemo && (
        <DemoClassView
          students={demoClass!}
          view={view}
          setView={setView}
          selectedStudentId={selectedStudentId}
          setSelectedStudentId={setSelectedStudentId}
          onClear={handleClearDemoClass}
        />
      )}

      {mode === "device" && hasDevice && (
        <DeviceView topics={deviceTopics} papers={devicePapers} onClear={handleClearDeviceData} />
      )}
    </>
  );
}

// ─────────────────────────────────────────────────────────────
// DEMO CLASS view: class summary, per-topic chart, drill-down
// ─────────────────────────────────────────────────────────────
function DemoClassView({
  students,
  view,
  setView,
  selectedStudentId,
  setSelectedStudentId,
  onClear,
}: {
  students: DemoStudent[];
  view: View;
  setView: (v: View) => void;
  selectedStudentId: string | null;
  setSelectedStudentId: (s: string | null) => void;
  onClear: () => void;
}) {
  // Compute class summary
  const summary = useMemo(() => computeClassSummary(students), [students]);

  function openStudent(id: string) {
    setSelectedStudentId(id);
    setView("student");
  }

  if (view === "student" && selectedStudentId) {
    const student = students.find((s) => s.id === selectedStudentId);
    if (!student) {
      return <div className="dash-empty">Student not found.</div>;
    }
    return <StudentDrillDown student={student} onBack={() => { setView("class"); setSelectedStudentId(null); }} />;
  }

  return (
    <>
      <div className="callout">
        <strong>Demo class — for the sales pitch.</strong> These are 22 sample students with realistic
        varied activity. In the school-pilot version, every student logs in with a class code and this
        shows your real P7 class.
      </div>

      <div className="dash-stat-grid">
        <div className="dash-stat">
          <div className="dash-stat-num">{summary.activeStudents}</div>
          <div className="dash-stat-label">active students this week</div>
        </div>
        <div className="dash-stat">
          <div className="dash-stat-num">{summary.avgTopicsPerStudent.toFixed(1)}</div>
          <div className="dash-stat-label">topics per student (avg)</div>
        </div>
        <div className="dash-stat">
          <div className="dash-stat-num">{summary.classAvgPct}%</div>
          <div className="dash-stat-label">class average score</div>
        </div>
        <div className="dash-stat">
          <div className="dash-stat-num">{summary.paperAttempts}</div>
          <div className="dash-stat-label">past paper attempts</div>
        </div>
      </div>

      <h2>Performance by topic</h2>
      <p className="dash-help">
        Each bar shows what proportion of your class scored high (green), middle (blue) or low (red) on that topic. Topics where the red bar is large need re-teaching.
      </p>
      <TopicBarChart summary={summary} />

      <h2>Students</h2>
      <p className="dash-help">Click a student to see their topic-by-topic breakdown.</p>
      <table className="dash-table">
        <thead>
          <tr>
            <th>Student</th>
            <th>Topics done</th>
            <th>Avg score</th>
            <th>Last seen</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {students
            .map((s) => ({ s, stat: studentStat(s) }))
            .sort((a, b) => b.stat.avgPct - a.stat.avgPct)
            .map(({ s, stat }) => {
              const cls = stat.avgPct >= 70 ? "high" : stat.avgPct >= 40 ? "mid" : "low";
              return (
                <tr key={s.id} className="dash-row-clickable" onClick={() => openStudent(s.id)}>
                  <td><strong>{s.name}</strong></td>
                  <td>{stat.topicsDone}</td>
                  <td><span className={`dash-pct ${cls}`}>{stat.avgPct}%</span></td>
                  <td>{stat.lastSeen ? formatDate(stat.lastSeen) : "—"}</td>
                  <td><span className="dash-arrow">›</span></td>
                </tr>
              );
            })}
        </tbody>
      </table>

      <div className="dash-action-bar">
        <button className="btn btn-primary" onClick={() => copyClassReport(students, summary)}>
          Copy report for parents
        </button>
        <button className="btn btn-secondary" onClick={() => window.print()}>
          Print this page
        </button>
        <button
          className="btn btn-secondary dash-clear"
          onClick={onClear}
        >
          Clear demo class
        </button>
      </div>
    </>
  );
}

// ─────────────────────────────────────────────────────────────
// STUDENT drill-down
// ─────────────────────────────────────────────────────────────
function StudentDrillDown({ student, onBack }: { student: DemoStudent; onBack: () => void }) {
  const stat = studentStat(student);
  const topicEntries = Object.entries(student.topicActivity);
  const paperEntries = Object.entries(student.paperActivity);

  return (
    <>
      <button className="back no-print" onClick={onBack} style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}>
        ← Back to class
      </button>
      <div className="eyebrow">Demo class · P7-DEMO</div>
      <h1 style={{ marginTop: 4 }}>{student.name}</h1>

      <div className="dash-stat-grid">
        <div className="dash-stat">
          <div className="dash-stat-num">{stat.topicsDone}</div>
          <div className="dash-stat-label">topics practiced</div>
        </div>
        <div className="dash-stat">
          <div className="dash-stat-num">{stat.avgPct}%</div>
          <div className="dash-stat-label">average best score</div>
        </div>
        <div className="dash-stat">
          <div className="dash-stat-num">{paperEntries.length}</div>
          <div className="dash-stat-label">past papers attempted</div>
        </div>
        <div className="dash-stat">
          <div className="dash-stat-num" style={{ fontSize: 16, paddingTop: 8 }}>
            {stat.lastSeen ? formatDate(stat.lastSeen) : "—"}
          </div>
          <div className="dash-stat-label">last active</div>
        </div>
      </div>

      <h2>Topic-by-topic</h2>
      {topicEntries.length === 0 ? (
        <div className="dash-empty">No topic activity yet.</div>
      ) : (
        <table className="dash-table">
          <thead><tr><th>Topic</th><th>Best score</th><th>Attempts</th></tr></thead>
          <tbody>
            {topicEntries.map(([tid, p]) => {
              const t = TOPICS.find((x) => x.id === tid);
              const pct = Math.round((p.bestScore / p.lastTotal) * 100);
              const cls = pct >= 70 ? "high" : pct >= 40 ? "mid" : "low";
              return (
                <tr key={tid}>
                  <td>{t?.title ?? tid}</td>
                  <td><span className={`dash-pct ${cls}`}>{p.bestScore}/{p.lastTotal} · {pct}%</span></td>
                  <td>{p.attempts}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}

      {paperEntries.length > 0 && (
        <>
          <h2>Past papers</h2>
          <table className="dash-table">
            <thead><tr><th>Paper</th><th>Best mark</th><th>Attempts</th></tr></thead>
            <tbody>
              {paperEntries.map(([pid, p]) => {
                const pp = PAPERS.find((x) => x.id === pid);
                const pct = Math.round((p.best / p.lastTotal) * 100);
                const cls = pct >= 70 ? "high" : pct >= 40 ? "mid" : "low";
                return (
                  <tr key={pid}>
                    <td>{pp?.paperName ?? pid}</td>
                    <td><span className={`dash-pct ${cls}`}>{p.best}/{p.lastTotal} · {pct}%</span></td>
                    <td>{p.attempts}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}

      <div className="dash-action-bar">
        <button className="btn btn-primary" onClick={() => copyStudentReport(student, stat)}>
          Copy report for parent
        </button>
        <button className="btn btn-secondary" onClick={() => window.print()}>
          Print this page
        </button>
      </div>
    </>
  );
}

// ─────────────────────────────────────────────────────────────
// DEVICE view (the original single-device fallback)
// ─────────────────────────────────────────────────────────────
function DeviceView({
  topics,
  papers,
  onClear,
}: {
  topics: Record<string, TopicProgress>;
  papers: Record<string, PaperProgress>;
  onClear: () => void;
}) {
  const topicEntries = Object.entries(topics);
  const paperEntries = Object.entries(papers);
  const avgPct = topicEntries.length === 0 ? null :
    Math.round((topicEntries.reduce((s, [, p]) => s + p.bestScore / p.lastTotal, 0) / topicEntries.length) * 100);
  const lastActive = mostRecent([...topicEntries.map(([, p]) => p.updatedAt), ...paperEntries.map(([, p]) => p.updatedAt)]);

  return (
    <>
      <div className="callout">
        <strong>This device only.</strong> Shows activity from THIS browser. In the school-pilot version,
        students log in with a class code so their progress reports from any phone.
      </div>

      <div className="dash-stat-grid">
        <div className="dash-stat">
          <div className="dash-stat-num">{topicEntries.length}</div>
          <div className="dash-stat-label">topics practiced</div>
        </div>
        <div className="dash-stat">
          <div className="dash-stat-num">{avgPct === null ? "—" : `${avgPct}%`}</div>
          <div className="dash-stat-label">avg best score</div>
        </div>
        <div className="dash-stat">
          <div className="dash-stat-num">{paperEntries.length}</div>
          <div className="dash-stat-label">past papers attempted</div>
        </div>
        <div className="dash-stat">
          <div className="dash-stat-num" style={{ fontSize: 16, paddingTop: 8 }}>
            {lastActive ? formatDate(lastActive) : "—"}
          </div>
          <div className="dash-stat-label">last active</div>
        </div>
      </div>

      {topicEntries.length > 0 && (
        <>
          <h2>Topic activity</h2>
          <table className="dash-table">
            <thead><tr><th>Topic</th><th>Best score</th><th>Attempts</th><th>Last seen</th></tr></thead>
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
            <thead><tr><th>Paper</th><th>Best mark</th><th>Attempts</th><th>Last seen</th></tr></thead>
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

      <div className="dash-action-bar">
        <button className="btn btn-secondary" onClick={() => window.print()}>
          Print this page
        </button>
        <button className="btn btn-secondary dash-clear" onClick={onClear}>
          Clear device data
        </button>
      </div>
    </>
  );
}

// ─────────────────────────────────────────────────────────────
// Bar chart (inline SVG, no library)
// ─────────────────────────────────────────────────────────────
function TopicBarChart({ summary }: { summary: ClassSummary }) {
  const rows = summary.topicBreakdown;
  if (rows.length === 0) {
    return <div className="dash-empty">No topic activity to chart yet.</div>;
  }

  return (
    <div className="topic-chart">
      {rows.map((row) => {
        const total = row.high + row.mid + row.low;
        const hi = total === 0 ? 0 : (row.high / total) * 100;
        const md = total === 0 ? 0 : (row.mid / total) * 100;
        const lo = total === 0 ? 0 : (row.low / total) * 100;
        return (
          <div key={row.topicId} className="topic-chart-row">
            <div className="topic-chart-label" title={row.title}>{row.title}</div>
            <div className="topic-chart-bar-wrap">
              <div className="topic-chart-bar">
                {hi > 0 && <div className="bar-seg bar-high" style={{ width: `${hi}%` }} title={`${row.high} students scored ≥70%`} />}
                {md > 0 && <div className="bar-seg bar-mid" style={{ width: `${md}%` }} title={`${row.mid} students scored 40-69%`} />}
                {lo > 0 && <div className="bar-seg bar-low" style={{ width: `${lo}%` }} title={`${row.low} students scored <40%`} />}
              </div>
              <div className="topic-chart-meta">{total} {total === 1 ? "student" : "students"}</div>
            </div>
          </div>
        );
      })}
      <div className="topic-chart-legend">
        <span><i className="legend-dot bar-high" /> ≥70%</span>
        <span><i className="legend-dot bar-mid" /> 40–69%</span>
        <span><i className="legend-dot bar-low" /> &lt;40%</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Stats helpers
// ─────────────────────────────────────────────────────────────
interface ClassSummary {
  activeStudents: number;
  avgTopicsPerStudent: number;
  classAvgPct: number;
  paperAttempts: number;
  topicBreakdown: Array<{ topicId: string; title: string; high: number; mid: number; low: number }>;
}

function computeClassSummary(students: DemoStudent[]): ClassSummary {
  const oneWeekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
  let active = 0;
  let totalTopics = 0;
  let pctSum = 0;
  let pctCount = 0;
  let paperAttempts = 0;

  const topicAggregates = new Map<string, { high: number; mid: number; low: number }>();

  for (const s of students) {
    const tEntries = Object.entries(s.topicActivity);
    totalTopics += tEntries.length;

    let mostRecentTs = 0;
    for (const [tid, p] of tEntries) {
      const pct = (p.bestScore / p.lastTotal) * 100;
      pctSum += pct;
      pctCount += 1;
      const ts = new Date(p.updatedAt).getTime();
      if (ts > mostRecentTs) mostRecentTs = ts;
      const agg = topicAggregates.get(tid) ?? { high: 0, mid: 0, low: 0 };
      if (pct >= 70) agg.high += 1;
      else if (pct >= 40) agg.mid += 1;
      else agg.low += 1;
      topicAggregates.set(tid, agg);
    }

    for (const [, p] of Object.entries(s.paperActivity)) {
      paperAttempts += p.attempts;
      const ts = new Date(p.updatedAt).getTime();
      if (ts > mostRecentTs) mostRecentTs = ts;
    }

    if (mostRecentTs >= oneWeekAgo) active += 1;
  }

  const topicBreakdown = Array.from(topicAggregates.entries())
    .map(([tid, agg]) => {
      const t = TOPICS.find((x) => x.id === tid);
      return { topicId: tid, title: t?.title ?? tid, ...agg };
    })
    .sort((a, b) => (b.high + b.mid + b.low) - (a.high + a.mid + a.low));

  return {
    activeStudents: active,
    avgTopicsPerStudent: students.length === 0 ? 0 : totalTopics / students.length,
    classAvgPct: pctCount === 0 ? 0 : Math.round(pctSum / pctCount),
    paperAttempts,
    topicBreakdown,
  };
}

interface StudentStat { topicsDone: number; avgPct: number; lastSeen: string | null; }

function studentStat(s: DemoStudent): StudentStat {
  const tEntries = Object.entries(s.topicActivity);
  const avgPct = tEntries.length === 0 ? 0 :
    Math.round((tEntries.reduce((sum, [, p]) => sum + (p.bestScore / p.lastTotal), 0) / tEntries.length) * 100);
  const allDates = [
    ...tEntries.map(([, p]) => p.updatedAt),
    ...Object.values(s.paperActivity).map((p) => p.updatedAt),
  ];
  return { topicsDone: tEntries.length, avgPct, lastSeen: mostRecent(allDates) };
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
  } catch { return iso; }
}

// ─────────────────────────────────────────────────────────────
// Report exports (clipboard)
// ─────────────────────────────────────────────────────────────
function copyClassReport(students: DemoStudent[], summary: ClassSummary) {
  const date = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  const lines: string[] = [];
  lines.push("TENDO · P7 class progress report");
  lines.push(`Generated ${date}`);
  lines.push("");
  lines.push("SUMMARY");
  lines.push(`Active this week: ${summary.activeStudents} of ${students.length} students`);
  lines.push(`Class average score: ${summary.classAvgPct}%`);
  lines.push(`Topics attempted (avg per student): ${summary.avgTopicsPerStudent.toFixed(1)}`);
  lines.push(`Past paper attempts: ${summary.paperAttempts}`);
  lines.push("");
  lines.push("TOPICS NEEDING ATTENTION (most red bars)");
  summary.topicBreakdown
    .filter((r) => r.low > 0)
    .sort((a, b) => b.low - a.low)
    .slice(0, 5)
    .forEach((r) => {
      const total = r.high + r.mid + r.low;
      lines.push(`  ${r.title}: ${r.low} of ${total} students scored below 40%`);
    });
  lines.push("");
  lines.push("TOP PERFORMERS");
  students
    .map((s) => ({ s, stat: studentStat(s) }))
    .filter((x) => x.stat.topicsDone > 0)
    .sort((a, b) => b.stat.avgPct - a.stat.avgPct)
    .slice(0, 5)
    .forEach(({ s, stat }) => lines.push(`  ${s.name}: ${stat.avgPct}% across ${stat.topicsDone} topics`));
  copyToClipboard(lines.join("\n"));
}

function copyStudentReport(s: DemoStudent, stat: StudentStat) {
  const date = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  const lines: string[] = [];
  lines.push("TENDO · Student progress report");
  lines.push(`Generated ${date}`);
  lines.push("");
  lines.push(`Name: ${s.name}`);
  lines.push(`Class: ${s.classCode}`);
  lines.push("");
  lines.push("SUMMARY");
  lines.push(`Topics practiced: ${stat.topicsDone}`);
  lines.push(`Average best score: ${stat.avgPct}%`);
  lines.push(`Last active: ${stat.lastSeen ? formatDate(stat.lastSeen) : "—"}`);
  lines.push("");
  lines.push("TOPICS");
  Object.entries(s.topicActivity).forEach(([tid, p]) => {
    const t = TOPICS.find((x) => x.id === tid);
    const pct = Math.round((p.bestScore / p.lastTotal) * 100);
    lines.push(`  ${t?.title ?? tid}: ${p.bestScore}/${p.lastTotal} (${pct}%) · ${p.attempts} attempt${p.attempts === 1 ? "" : "s"}`);
  });
  copyToClipboard(lines.join("\n"));
}

function copyToClipboard(text: string) {
  try {
    navigator.clipboard.writeText(text);
    alert("Report copied. Paste into WhatsApp, email or your parents' group.");
  } catch {
    const w = window.open();
    if (w) w.document.write(`<pre>${text.replace(/</g, "&lt;")}</pre>`);
  }
}
