import Link from "next/link";
import { TRAINUP_SCHOOL } from "@/lib/school";

export default function TrainupHomePage() {
  const school = TRAINUP_SCHOOL;

  return (
    <>
      <div className="eyebrow">{school.name}</div>
      <h1>P7 Mathematics study programme</h1>
      <p className="lead">
        Welcome to the Trainup a Child Uganda study platform. Here, P7 students can learn every topic, practise with real questions, and try past PLE papers — all on their phone.
      </p>

      <h2>Start studying</h2>

      <Link href="/math/p7" className="card">
        <div className="card-row">
          <div>
            <div className="card-title">P7 Mathematics topics</div>
            <div className="card-sub">Structured notes, examples, and quizzes for every topic</div>
          </div>
          <span className="badge badge-math">Open</span>
        </div>
      </Link>

      <Link href="/papers" className="card">
        <div className="card-row">
          <div>
            <div className="card-title">Past PLE papers</div>
            <div className="card-sub">UNEB past papers with instant marking and review</div>
          </div>
          <span className="badge badge-math">Open</span>
        </div>
      </Link>

      <Link href="/teacher" className="card">
        <div className="card-row">
          <div>
            <div className="card-title">Teacher dashboard</div>
            <div className="card-sub">Worksheets, class reports, and progress tracking</div>
          </div>
          <span className="badge badge-math">Open</span>
        </div>
      </Link>

      <div className="foot">
        A partnership between {school.name} and Tendo. All progress saves on this device.
      </div>
    </>
  );
}
