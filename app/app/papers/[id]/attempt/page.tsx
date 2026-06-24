import Link from "next/link";
import { notFound } from "next/navigation";
import { PAPERS, getPaper } from "@/lib/papers";
import PaperAttempt from "@/components/PaperAttempt";

export function generateStaticParams() {
  return PAPERS.map((p) => ({ id: p.id }));
}

export default async function PaperAttemptPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const paper = getPaper(id);
  if (!paper) notFound();

  return (
    <>
      <Link href={`/papers/${paper.id}`} className="back">← {paper.paperName}</Link>
      <div className="eyebrow">{paper.examBody} · {paper.year} · Student mode</div>
      <h1>Attempt {paper.year} PLE Maths</h1>

      <PaperAttempt
        paperId={paper.id}
        paperName={paper.paperName}
        questions={paper.questions}
        totalMarks={paper.totalMarks}
      />
    </>
  );
}
