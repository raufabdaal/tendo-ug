import type { ReactElement } from "react";

type DiagramProps = {
  topicId: string;
};

type DiagramSpec = {
  title: string;
  caption: string;
  svg: ReactElement;
};

const diagramText = {
  fill: "#1F1B17",
  muted: "#7A7065",
  terracotta: "#C25A3C",
  indigo: "#3B4A8A",
  success: "#3F8A4D",
  cream: "#FAF6F0",
  creamDeep: "#F2EBDE",
  border: "#E7DFD0",
};

export const TOPIC_DIAGRAM_IDS = [
  "venn-diagrams-2-events",
  "subsets",
  "line-segments-angles",
  "coordinates",
  "data-handling",
  "bearing-scale-drawing",
  "parallel-skew-lines",
  "simple-polygons",
  "regular-polygons",
  "integers-core",
] as const;

export function hasTopicDiagram(topicId: string): boolean {
  return TOPIC_DIAGRAM_IDS.includes(topicId as (typeof TOPIC_DIAGRAM_IDS)[number]);
}

export default function TopicDiagram({ topicId }: DiagramProps) {
  const diagram = getDiagram(topicId);
  if (!diagram) return null;

  return (
    <section className="topic-diagram" aria-labelledby={`diagram-${topicId}`}>
      <div className="topic-diagram-copy">
        <div className="topic-diagram-kicker">See it</div>
        <h2 id={`diagram-${topicId}`}>{diagram.title}</h2>
        <p>{diagram.caption}</p>
      </div>
      <div className="topic-diagram-art">{diagram.svg}</div>
    </section>
  );
}

function getDiagram(topicId: string): DiagramSpec | null {
  switch (topicId) {
    case "venn-diagrams-2-events":
      return {
        title: "The four parts of a two-set Venn diagram",
        caption: "Fill the overlap first, then the only-regions, then the outside part for neither.",
        svg: (
          <svg viewBox="0 0 520 260" role="img" aria-label="Two overlapping circles showing only A, both, only B, and neither">
            <rect x="18" y="22" width="484" height="216" rx="18" fill={diagramText.cream} stroke={diagramText.border} strokeWidth="3" />
            <circle cx="205" cy="130" r="82" fill="#E5E8F2" stroke={diagramText.indigo} strokeWidth="4" />
            <circle cx="315" cy="130" r="82" fill="#F5E1DB" stroke={diagramText.terracotta} strokeWidth="4" />
            <text x="132" y="70" fill={diagramText.indigo} fontWeight="700" fontSize="24">A</text>
            <text x="372" y="70" fill={diagramText.terracotta} fontWeight="700" fontSize="24">B</text>
            <text x="150" y="135" fill={diagramText.fill} fontSize="18" fontWeight="700">Only A</text>
            <text x="255" y="135" fill={diagramText.fill} fontSize="18" fontWeight="700">Both</text>
            <text x="338" y="135" fill={diagramText.fill} fontSize="18" fontWeight="700">Only B</text>
            <text x="48" y="218" fill={diagramText.muted} fontSize="17" fontWeight="700">Neither / outside both circles</text>
          </svg>
        ),
      };
    case "subsets":
      return {
        title: "A subset sits completely inside another set",
        caption: "Every member of the smaller set must also belong to the bigger set.",
        svg: (
          <svg viewBox="0 0 520 240" role="img" aria-label="A smaller circle fully inside a bigger circle showing a subset">
            <rect x="20" y="20" width="480" height="200" rx="18" fill={diagramText.cream} stroke={diagramText.border} strokeWidth="3" />
            <circle cx="260" cy="120" r="88" fill="#E5E8F2" stroke={diagramText.indigo} strokeWidth="4" />
            <circle cx="260" cy="120" r="42" fill="#F5E1DB" stroke={diagramText.terracotta} strokeWidth="4" />
            <text x="180" y="66" fill={diagramText.indigo} fontWeight="700" fontSize="20">Set B</text>
            <text x="240" y="128" fill={diagramText.terracotta} fontWeight="700" fontSize="20">A</text>
            <text x="160" y="206" fill={diagramText.fill} fontWeight="700" fontSize="18">A is a subset of B</text>
          </svg>
        ),
      };
    case "line-segments-angles":
      return {
        title: "Angle types by size",
        caption: "Compare each angle with 90°, 180°, and 360° before naming it.",
        svg: (
          <svg viewBox="0 0 620 250" role="img" aria-label="Angle gallery showing acute, right, obtuse, straight, and reflex angles">
            {[
              { x: 72, y: 162, label: "Acute", deg: "45°" },
              { x: 190, y: 162, label: "Right", deg: "90°" },
              { x: 310, y: 162, label: "Obtuse", deg: "125°" },
              { x: 430, y: 162, label: "Straight", deg: "180°" },
              { x: 548, y: 162, label: "Reflex", deg: "220°" },
            ].map(({ x, y, label, deg }) => (
              <g key={label}>
                <circle cx={x} cy={y} r="48" fill={diagramText.cream} stroke={diagramText.border} strokeWidth="2" />
                <line x1={x} y1={y} x2={x + 42} y2={y} stroke={diagramText.fill} strokeWidth="4" strokeLinecap="round" />
                {label === "Acute" && <line x1={x} y1={y} x2={x + 32} y2={y - 34} stroke={diagramText.terracotta} strokeWidth="4" strokeLinecap="round" />}
                {label === "Right" && <line x1={x} y1={y} x2={x} y2={y - 42} stroke={diagramText.terracotta} strokeWidth="4" strokeLinecap="round" />}
                {label === "Obtuse" && <line x1={x} y1={y} x2={x - 24} y2={y - 36} stroke={diagramText.terracotta} strokeWidth="4" strokeLinecap="round" />}
                {label === "Straight" && <line x1={x} y1={y} x2={x - 42} y2={y} stroke={diagramText.terracotta} strokeWidth="4" strokeLinecap="round" />}
                {label === "Reflex" && <path d={`M ${x} ${y - 36} A 38 38 0 1 1 ${x + 35} ${y + 15}`} fill="none" stroke={diagramText.terracotta} strokeWidth="5" strokeLinecap="round" />}
                <text x={x} y="52" textAnchor="middle" fill={diagramText.fill} fontWeight="700" fontSize="17">{label}</text>
                <text x={x} y="78" textAnchor="middle" fill={diagramText.muted} fontWeight="700" fontSize="15">{deg}</text>
              </g>
            ))}
          </svg>
        ),
      };
    case "coordinates":
      return {
        title: "Coordinates: across first, then up",
        caption: "The point (4, 3) means move 4 units along the horizontal axis, then 3 units up.",
        svg: (
          <svg viewBox="0 0 520 320" role="img" aria-label="Coordinate grid showing point four across and three up">
            <rect x="36" y="20" width="450" height="260" rx="14" fill={diagramText.cream} stroke={diagramText.border} strokeWidth="3" />
            {Array.from({ length: 7 }).map((_, i) => <line key={`v${i}`} x1={82 + i * 54} y1="52" x2={82 + i * 54} y2="254" stroke={diagramText.border} strokeWidth="2" />)}
            {Array.from({ length: 5 }).map((_, i) => <line key={`h${i}`} x1="82" y1={254 - i * 50} x2="406" y2={254 - i * 50} stroke={diagramText.border} strokeWidth="2" />)}
            <line x1="82" y1="254" x2="430" y2="254" stroke={diagramText.fill} strokeWidth="4" />
            <line x1="82" y1="254" x2="82" y2="36" stroke={diagramText.fill} strokeWidth="4" />
            <path d="M 82 254 L 298 254 L 298 104" fill="none" stroke={diagramText.terracotta} strokeWidth="5" strokeDasharray="10 8" />
            <circle cx="298" cy="104" r="10" fill={diagramText.terracotta} />
            <text x="310" y="96" fill={diagramText.fill} fontWeight="700" fontSize="20">(4, 3)</text>
            <text x="190" y="286" fill={diagramText.indigo} fontWeight="700" fontSize="17">4 across</text>
            <text x="316" y="184" fill={diagramText.indigo} fontWeight="700" fontSize="17">3 up</text>
            <text x="428" y="276" fill={diagramText.muted} fontWeight="700" fontSize="16">x</text>
            <text x="62" y="42" fill={diagramText.muted} fontWeight="700" fontSize="16">y</text>
          </svg>
        ),
      };
    case "data-handling":
      return {
        title: "Graphs tell a story",
        caption: "A bigger pie sector shows a bigger share. On a travel graph, rising means moving, flat means resting, and falling means returning.",
        svg: (
          <svg viewBox="0 0 640 300" role="img" aria-label="Pie chart and travel graph examples">
            <g transform="translate(150 145)">
              <circle r="92" fill={diagramText.cream} stroke={diagramText.border} strokeWidth="3" />
              <path d="M0 0 L0 -92 A92 92 0 0 1 79.7 46 Z" fill="#C25A3C" />
              <path d="M0 0 L79.7 46 A92 92 0 0 1 -79.7 46 Z" fill="#3B4A8A" />
              <path d="M0 0 L-79.7 46 A92 92 0 0 1 0 -92 Z" fill="#3F8A4D" />
              <circle r="3" fill={diagramText.fill} />
              <text x="-58" y="124" fill={diagramText.fill} fontWeight="700" fontSize="17">Pie chart</text>
            </g>
            <g transform="translate(330 48)">
              <rect x="0" y="0" width="270" height="204" rx="14" fill={diagramText.cream} stroke={diagramText.border} strokeWidth="3" />
              <line x1="38" y1="166" x2="236" y2="166" stroke={diagramText.fill} strokeWidth="3" />
              <line x1="38" y1="166" x2="38" y2="28" stroke={diagramText.fill} strokeWidth="3" />
              <polyline points="38,166 92,102 145,102 218,54" fill="none" stroke={diagramText.terracotta} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
              <text x="58" y="92" fill={diagramText.indigo} fontWeight="700" fontSize="15">moving</text>
              <text x="102" y="124" fill={diagramText.indigo} fontWeight="700" fontSize="15">resting</text>
              <text x="150" y="45" fill={diagramText.indigo} fontWeight="700" fontSize="15">moving</text>
              <text x="74" y="230" fill={diagramText.fill} fontWeight="700" fontSize="17">Travel graph</text>
            </g>
          </svg>
        ),
      };
    case "bearing-scale-drawing":
      return {
        title: "Bearings are measured clockwise from north",
        caption: "Write bearings with three figures: east is 090°, south is 180°, and west is 270°.",
        svg: (
          <svg viewBox="0 0 540 300" role="img" aria-label="Compass showing bearings measured clockwise from north">
            <rect x="28" y="22" width="484" height="246" rx="18" fill={diagramText.cream} stroke={diagramText.border} strokeWidth="3" />
            <circle cx="188" cy="145" r="88" fill="#fffaf3" stroke={diagramText.border} strokeWidth="3" />
            <line x1="188" y1="145" x2="188" y2="58" stroke={diagramText.fill} strokeWidth="4" />
            <line x1="188" y1="145" x2="274" y2="145" stroke={diagramText.terracotta} strokeWidth="5" strokeLinecap="round" />
            <path d="M 188 84 A 61 61 0 0 1 249 145" fill="none" stroke={diagramText.indigo} strokeWidth="5" />
            <text x="181" y="50" fill={diagramText.fill} fontWeight="700" fontSize="18">N</text>
            <text x="280" y="151" fill={diagramText.terracotta} fontWeight="700" fontSize="18">E</text>
            <text x="224" y="100" fill={diagramText.indigo} fontWeight="700" fontSize="18">090°</text>
            <g transform="translate(330 88)">
              <line x1="0" y1="42" x2="124" y2="42" stroke={diagramText.fill} strokeWidth="5" />
              <line x1="0" y1="28" x2="0" y2="56" stroke={diagramText.fill} strokeWidth="3" />
              <line x1="124" y1="28" x2="124" y2="56" stroke={diagramText.fill} strokeWidth="3" />
              <text x="0" y="20" fill={diagramText.muted} fontWeight="700" fontSize="15">0 cm</text>
              <text x="92" y="20" fill={diagramText.muted} fontWeight="700" fontSize="15">4 cm</text>
              <text x="0" y="88" fill={diagramText.fill} fontWeight="700" fontSize="17">Scale: 1 cm = 5 km</text>
              <text x="0" y="116" fill={diagramText.terracotta} fontWeight="700" fontSize="17">4 cm = 20 km</text>
            </g>
          </svg>
        ),
      };
    case "parallel-skew-lines":
      return {
        title: "Parallel lines are flat; skew lines need 3D thinking",
        caption: "Skew lines do not meet, but they are also not parallel because they are in different planes.",
        svg: (
          <svg viewBox="0 0 620 300" role="img" aria-label="Parallel lines and cuboid edge example for skew lines">
            <g transform="translate(48 60)">
              <line x1="0" y1="42" x2="190" y2="42" stroke={diagramText.indigo} strokeWidth="7" strokeLinecap="round" />
              <line x1="0" y1="100" x2="190" y2="100" stroke={diagramText.indigo} strokeWidth="7" strokeLinecap="round" />
              <text x="28" y="154" fill={diagramText.fill} fontWeight="700" fontSize="18">Parallel</text>
            </g>
            <g transform="translate(330 58)">
              <polygon points="40,52 154,52 204,96 88,96" fill={diagramText.cream} stroke={diagramText.border} strokeWidth="3" />
              <polygon points="40,52 88,96 88,190 40,146" fill="#F2EBDE" stroke={diagramText.border} strokeWidth="3" />
              <polygon points="154,52 204,96 204,190 154,146" fill="#E5E8F2" stroke={diagramText.border} strokeWidth="3" />
              <polygon points="40,146 154,146 204,190 88,190" fill="#fffaf3" stroke={diagramText.border} strokeWidth="3" />
              <line x1="40" y1="52" x2="154" y2="52" stroke={diagramText.terracotta} strokeWidth="7" strokeLinecap="round" />
              <line x1="204" y1="96" x2="204" y2="190" stroke={diagramText.indigo} strokeWidth="7" strokeLinecap="round" />
              <text x="70" y="235" fill={diagramText.fill} fontWeight="700" fontSize="18">Skew on a box</text>
            </g>
          </svg>
        ),
      };
    case "simple-polygons":
    case "regular-polygons":
      return {
        title: topicId === "regular-polygons" ? "Regular polygons have equal sides and equal angles" : "Name polygons by counting their sides",
        caption: topicId === "regular-polygons" ? "A square is regular because all sides and all angles are equal." : "A polygon must be closed and made of straight sides.",
        svg: (
          <svg viewBox="0 0 620 260" role="img" aria-label="Polygon examples labelled by number of sides">
            <g transform="translate(80 84)">
              <polygon points="0,86 50,0 100,86" fill="#E5E8F2" stroke={diagramText.indigo} strokeWidth="4" />
              <text x="50" y="126" textAnchor="middle" fill={diagramText.fill} fontWeight="700" fontSize="17">Triangle</text>
              <text x="50" y="150" textAnchor="middle" fill={diagramText.muted} fontSize="15">3 sides</text>
            </g>
            <g transform="translate(250 84)">
              <rect x="0" y="0" width="92" height="92" fill="#F5E1DB" stroke={diagramText.terracotta} strokeWidth="4" />
              <text x="46" y="126" textAnchor="middle" fill={diagramText.fill} fontWeight="700" fontSize="17">Square</text>
              <text x="46" y="150" textAnchor="middle" fill={diagramText.muted} fontSize="15">regular</text>
            </g>
            <g transform="translate(438 76)">
              <polygon points="52,0 106,38 86,104 18,104 -2,38" fill="#E2F0E4" stroke={diagramText.success} strokeWidth="4" />
              <text x="52" y="134" textAnchor="middle" fill={diagramText.fill} fontWeight="700" fontSize="17">Pentagon</text>
              <text x="52" y="158" textAnchor="middle" fill={diagramText.muted} fontSize="15">5 sides</text>
            </g>
          </svg>
        ),
      };
    case "integers-core":
      return {
        title: "Integers sit on both sides of zero",
        caption: "Numbers to the right are greater. Numbers to the left are smaller.",
        svg: (
          <svg viewBox="0 0 620 210" role="img" aria-label="Number line from negative five to positive five">
            <rect x="34" y="34" width="552" height="134" rx="18" fill={diagramText.cream} stroke={diagramText.border} strokeWidth="3" />
            <line x1="90" y1="104" x2="530" y2="104" stroke={diagramText.fill} strokeWidth="4" />
            <path d="M530 104 l-14 -9 v18 z" fill={diagramText.fill} />
            {[-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5].map((n, i) => {
              const x = 90 + i * 44;
              return <g key={n}><line x1={x} y1="91" x2={x} y2="117" stroke={n === 0 ? diagramText.terracotta : diagramText.muted} strokeWidth="3" /><text x={x} y="145" textAnchor="middle" fill={n === 0 ? diagramText.terracotta : diagramText.fill} fontWeight="700" fontSize="16">{n}</text></g>;
            })}
            <text x="130" y="72" fill={diagramText.indigo} fontWeight="700" fontSize="17">negative</text>
            <text x="420" y="72" fill={diagramText.success} fontWeight="700" fontSize="17">positive</text>
          </svg>
        ),
      };
    default:
      return null;
  }
}
