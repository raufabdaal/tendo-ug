import Link from "next/link";
import { PAPERS } from "@/lib/papers";

export default function PapersIndex() {
  return (
    <>
      <Link href="/" className="back">← Home</Link>
      <div className="eyebrow">UNEB · Past papers</div>
      <h1>Past PLE Mathematics papers</h1>
      <p className="lead">
        Real exam-style questions, fully marked, with explanations. Students attempt them.
        Teachers browse them by topic and print worksheets.
      </p>

      <h2>Available papers</h2>

      {PAPERS.map((p) => (
        <Link key={p.id} href={`/papers/${p.id}`} className="card">
          <div className="card-row">
            <div>
              <div className="card-title">{p.paperName}</div>
              <div className="card-sub">
                {p.examBody} · {p.year} · {p.questions.length} questions · {p.totalMarks} marks · {p.durationMinutes} minutes
              </div>
            </div>
            <span className="badge badge-math">Available</span>
          </div>
        </Link>
      ))}

      <div className="card card-disabled">
        <div className="card-row">
          <div>
            <div className="card-title">PLE Mathematics 2019, 2020, 2021, 2022, 2023</div>
            <div className="card-sub">5 more papers coming as content is reviewed</div>
          </div>
          <span className="badge badge-phase">Coming, Phase 3</span>
        </div>
      </div>

      <div className="foot">
        Papers are based on the UNEB syllabus and structure. We will move to full original UNEB papers
        as our content arrangement with UNEB is formalised.
      </div>
    </>
  );
}
