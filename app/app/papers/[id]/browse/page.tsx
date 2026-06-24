import Link from "next/link";
import { notFound } from "next/navigation";
import { PAPERS, getPaper, groupByTopic } from "@/lib/papers";
import PaperBrowse from "@/components/PaperBrowse";

export function generateStaticParams() {
  return PAPERS.map((p) => ({ id: p.id }));
}

export default async function PaperBrowsePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const paper = getPaper(id);
  if (!paper) notFound();

  const grouped = Array.from(groupByTopic(paper).entries());

  return (
    <>
      <Link href={`/papers/${paper.id}`} className="back no-print">← {paper.paperName}</Link>
      <div className="eyebrow no-print">{paper.examBody} · {paper.year} · Teacher mode</div>
      <h1>{paper.paperName} · by topic</h1>
      <p className="lead no-print">
        Every question grouped by syllabus topic. Toggle answers on or off, then copy to WhatsApp or
        print a worksheet for class.
      </p>

      <PaperBrowse grouped={grouped} />
    </>
  );
}
