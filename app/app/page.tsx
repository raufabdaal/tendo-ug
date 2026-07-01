import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <div className="eyebrow">Welcome</div>
      <h1>Revision that follows the syllabus.</h1>
      <p className="lead">
        Pick a subject. Pick a topic. Read for two minutes. Take a quick quiz. Repeat. That is the entire app.
      </p>

      <h2>Subjects</h2>

      <Link href="/math/p7" className="card">
        <div className="card-row">
          <div>
            <div className="card-title">Mathematics</div>
            <div className="card-sub">P7 · 6 themes · 40 sub-topics</div>
          </div>
          <span className="badge badge-math">Active</span>
        </div>
      </Link>

      <Link href="/english/p7" className="card">
        <div className="card-row">
          <div>
            <div className="card-title">English</div>
            <div className="card-sub">P7 · writing, media, rights, environment</div>
          </div>
          <span className="badge badge-math">Active</span>
        </div>
      </Link>

      <Link href="/science/p7" className="card">
        <div className="card-row">
          <div>
            <div className="card-title">Integrated Science</div>
            <div className="card-sub">P7 · Human body, energy, environment, health</div>
          </div>
          <span className="badge badge-math">Active</span>
        </div>
      </Link>

      <Link href="/social-studies/p7" className="card">
        <div className="card-row">
          <div>
            <div className="card-title">Social Studies</div>
            <div className="card-sub">P7 · Living Together in Africa</div>
          </div>
          <span className="badge badge-math">Active</span>
        </div>
      </Link>

      <h2>Past PLE papers</h2>

      <Link href="/papers" className="card">
        <div className="card-row">
          <div>
            <div className="card-title">UNEB past papers</div>
            <div className="card-sub">Attempt as a student, or browse by topic as a teacher</div>
          </div>
          <span className="badge badge-math">Open</span>
        </div>
      </Link>

      <h2>For teachers</h2>

      <Link href="/teacher" className="card">
        <div className="card-row">
          <div>
            <div className="card-title">Teacher dashboard</div>
            <div className="card-sub">See what your class has practiced and how they scored</div>
          </div>
          <span className="badge badge-math">Open</span>
        </div>
      </Link>

      <Link href="/teacher/worksheet" className="card">
        <div className="card-row">
          <div>
            <div className="card-title">Worksheet generator</div>
            <div className="card-sub">Mix topics, pick a length, print a class worksheet in two clicks</div>
          </div>
          <span className="badge badge-math">New</span>
        </div>
      </Link>

      <div className="foot">
        All progress saved on this device. No login required.
      </div>
    </>
  );
}
