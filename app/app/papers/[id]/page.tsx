import Link from "next/link";
import { notFound } from "next/navigation";
import { PAPERS, getPaper } from "@/lib/papers";

export function generateStaticParams() {
  return PAPERS.map((p) => ({ id: p.id }));
}

export default async function PaperCoverPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const paper = getPaper(id);
  if (!paper) notFound();

  return (
    <>
      <Link href="/papers" className="back">← All papers</Link>
      <div className="eyebrow">{paper.examBody} · {paper.year}</div>
      <h1>{paper.paperName}</h1>

      <div className="callout">{paper.blurb}</div>

      <div className="paper-meta">
        <div><span className="meta-label">Questions:</span> {paper.questions.length}</div>
        <div><span className="meta-label">Total marks:</span> {paper.totalMarks}</div>
        <div><span className="meta-label">Suggested time:</span> {paper.durationMinutes} minutes</div>
      </div>

      <h2>How do you want to use this paper?</h2>

      <Link href={`/papers/${paper.id}/attempt`} className="card">
        <div className="card-row">
          <div>
            <div className="card-title">Attempt as a student</div>
            <div className="card-sub">Answer one question at a time. Get instant marks and explanations at the end.</div>
          </div>
          <span className="badge badge-math">Student mode</span>
        </div>
      </Link>

      <Link href={`/papers/${paper.id}/browse`} className="card">
        <div className="card-row">
          <div>
            <div className="card-title">Browse as a teacher</div>
            <div className="card-sub">See every question grouped by topic. Copy or print a worksheet for class.</div>
          </div>
          <span className="badge badge-math">Teacher mode</span>
        </div>
      </Link>
    </>
  );
}
