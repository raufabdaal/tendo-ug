import Link from "next/link";
import TeacherDashboard from "@/components/TeacherDashboard";

export const metadata = {
  title: "Teacher dashboard — Tendo",
  description: "See what your class has practiced and how they scored.",
};

export default function TeacherPage() {
  return (
    <>
      <Link href="/" className="back">← Home</Link>
      <div className="eyebrow">For teachers</div>
      <h1>Class dashboard</h1>
      <p className="lead">
        At a glance: what your class has practiced, how they scored, and which topics need more attention.
      </p>

      <div style={{ marginBottom: 18 }}>
        <Link href="/teacher/worksheet" className="btn btn-secondary">
          → Generate a worksheet for class
        </Link>
      </div>

      <TeacherDashboard />
    </>
  );
}
