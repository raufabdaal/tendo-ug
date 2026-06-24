"use client";

import { useEffect, useState } from "react";

interface Progress {
  bestScore: number;
  lastTotal: number;
  attempts: number;
}

export default function ProgressBadge({ topicId }: { topicId: string }) {
  const [progress, setProgress] = useState<Progress | null>(null);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem("tendo:progress");
      if (!raw) return;
      const data = JSON.parse(raw);
      if (data[topicId]) setProgress(data[topicId]);
    } catch {
      // ignore
    }
  }, [topicId]);

  if (!progress) return <span className="badge badge-soon">Not started</span>;
  const pct = Math.round((progress.bestScore / progress.lastTotal) * 100);
  return <span className="badge badge-done">Best {progress.bestScore}/{progress.lastTotal} · {pct}%</span>;
}
