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

      <div className="card card-disabled">
        <div className="card-row">
          <div>
            <div className="card-title">English</div>
            <div className="card-sub">Comprehension, grammar, composition</div>
          </div>
          <span className="badge badge-phase">Coming, Phase 2</span>
        </div>
      </div>

      <div className="card card-disabled">
        <div className="card-row">
          <div>
            <div className="card-title">Integrated Science</div>
            <div className="card-sub">Health, environment, agriculture</div>
          </div>
          <span className="badge badge-phase">Coming, Phase 2</span>
        </div>
      </div>

      <div className="card card-disabled">
        <div className="card-row">
          <div>
            <div className="card-title">Social Studies</div>
            <div className="card-sub">Uganda, East Africa, geography</div>
          </div>
          <span className="badge badge-phase">Coming, Phase 2</span>
        </div>
      </div>

      <div className="foot">
        All progress saved on this device. No login required.
      </div>
    </>
  );
}
