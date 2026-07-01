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
  "muscular-skeletal-system",
  "electricity-and-magnetism",
  "energy-resources-environment",
  "simple-machines-friction",
  "excretory-system",
  "light-energy",
  "interdependence-environment",
  "population-and-health",
  "location-of-africa",
  "physical-features-of-africa",
  "climate-of-africa",
  "vegetation-of-africa",
  "people-ethnic-groups-settlement",
  "foreign-influence-africa",
  "nationalism-road-independence",
  "post-independence-africa",
  "economic-developments-africa",
  "major-world-organisations",
  "school-holidays",
  "letter-writing",
  "examinations",
  "electronic-media",
  "rights-responsibilities-freedom",
  "environmental-protection",
  "ceremonies",
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
    case "muscular-skeletal-system":
      return {
        title: "Bones, joints and muscles work together",
        caption: "The skeleton supports and protects the body. Muscles pull on bones at joints to cause movement.",
        svg: (
          <svg viewBox="0 0 620 300" role="img" aria-label="Simple human skeleton showing skull ribs backbone arm and leg bones">
            <rect x="34" y="24" width="552" height="246" rx="18" fill={diagramText.cream} stroke={diagramText.border} strokeWidth="3" />
            <circle cx="160" cy="72" r="28" fill="#fffaf3" stroke={diagramText.fill} strokeWidth="4" />
            <line x1="160" y1="100" x2="160" y2="178" stroke={diagramText.fill} strokeWidth="5" strokeLinecap="round" />
            <ellipse cx="160" cy="126" rx="54" ry="32" fill="none" stroke={diagramText.indigo} strokeWidth="4" />
            <line x1="106" y1="126" x2="214" y2="126" stroke={diagramText.indigo} strokeWidth="3" />
            <line x1="130" y1="150" x2="84" y2="194" stroke={diagramText.terracotta} strokeWidth="5" strokeLinecap="round" />
            <line x1="190" y1="150" x2="236" y2="194" stroke={diagramText.terracotta} strokeWidth="5" strokeLinecap="round" />
            <line x1="150" y1="178" x2="118" y2="236" stroke={diagramText.success} strokeWidth="6" strokeLinecap="round" />
            <line x1="170" y1="178" x2="204" y2="236" stroke={diagramText.success} strokeWidth="6" strokeLinecap="round" />
            <text x="300" y="82" fill={diagramText.fill} fontWeight="700" fontSize="20">Skull protects the brain</text>
            <text x="300" y="124" fill={diagramText.indigo} fontWeight="700" fontSize="20">Ribs protect heart and lungs</text>
            <text x="300" y="166" fill={diagramText.terracotta} fontWeight="700" fontSize="20">Joints allow movement</text>
            <text x="300" y="208" fill={diagramText.success} fontWeight="700" fontSize="20">Muscles pull bones</text>
          </svg>
        ),
      };
    case "electricity-and-magnetism":
      return {
        title: "A complete circuit lets current flow",
        caption: "The bulb lights only when the dry cell, wires, switch and bulb make a complete path.",
        svg: (
          <svg viewBox="0 0 620 300" role="img" aria-label="Simple electric circuit and bar magnet">
            <rect x="34" y="24" width="552" height="246" rx="18" fill={diagramText.cream} stroke={diagramText.border} strokeWidth="3" />
            <rect x="96" y="86" width="42" height="86" rx="6" fill="#fffaf3" stroke={diagramText.fill} strokeWidth="4" />
            <line x1="107" y1="72" x2="127" y2="72" stroke={diagramText.fill} strokeWidth="4" />
            <line x1="117" y1="62" x2="117" y2="82" stroke={diagramText.fill} strokeWidth="4" />
            <line x1="252" y1="126" x2="320" y2="126" stroke={diagramText.fill} strokeWidth="5" strokeLinecap="round" />
            <circle cx="394" cy="126" r="32" fill="#fffaf3" stroke={diagramText.terracotta} strokeWidth="4" />
            <path d="M386 139 q8 -24 16 0" fill="none" stroke={diagramText.terracotta} strokeWidth="4" />
            <path d="M138 126 H252 M320 126 H362 M426 126 H496 V210 H117 V172" fill="none" stroke={diagramText.indigo} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            <text x="86" y="206" fill={diagramText.fill} fontWeight="700" fontSize="17">dry cell</text>
            <text x="260" y="104" fill={diagramText.fill} fontWeight="700" fontSize="17">switch</text>
            <text x="376" y="82" fill={diagramText.fill} fontWeight="700" fontSize="17">bulb</text>
            <g transform="translate(248 222)">
              <rect x="0" y="0" width="128" height="34" rx="8" fill={diagramText.terracotta} />
              <rect x="128" y="0" width="128" height="34" rx="8" fill={diagramText.indigo} />
              <text x="58" y="23" fill="white" fontWeight="800" fontSize="17">N</text>
              <text x="194" y="23" fill="white" fontWeight="800" fontSize="17">S</text>
            </g>
          </svg>
        ),
      };
    case "energy-resources-environment":
      return {
        title: "Energy comes from different resources",
        caption: "Some resources renew naturally, while fossil fuels can get finished and may pollute the environment.",
        svg: (
          <svg viewBox="0 0 620 300" role="img" aria-label="Energy resources from sun water wind plants animals and fossil fuels">
            <rect x="34" y="24" width="552" height="246" rx="18" fill={diagramText.cream} stroke={diagramText.border} strokeWidth="3" />
            <circle cx="122" cy="88" r="34" fill="#F4B942" />
            <text x="86" y="142" fill={diagramText.fill} fontWeight="700" fontSize="17">Sun</text>
            <path d="M238 112 q28 -44 56 0 t56 0" fill="none" stroke={diagramText.indigo} strokeWidth="7" strokeLinecap="round" />
            <text x="252" y="150" fill={diagramText.fill} fontWeight="700" fontSize="17">Water</text>
            <g transform="translate(444 76)">
              <line x1="44" y1="36" x2="44" y2="88" stroke={diagramText.fill} strokeWidth="5" />
              <line x1="44" y1="36" x2="16" y2="12" stroke={diagramText.success} strokeWidth="5" strokeLinecap="round" />
              <line x1="44" y1="36" x2="78" y2="20" stroke={diagramText.success} strokeWidth="5" strokeLinecap="round" />
              <line x1="44" y1="36" x2="34" y2="2" stroke={diagramText.success} strokeWidth="5" strokeLinecap="round" />
              <text x="16" y="116" fill={diagramText.fill} fontWeight="700" fontSize="17">Wind</text>
            </g>
            <text x="84" y="220" fill={diagramText.success} fontWeight="700" fontSize="18">Plants</text>
            <text x="232" y="220" fill={diagramText.success} fontWeight="700" fontSize="18">Animals</text>
            <text x="390" y="220" fill={diagramText.terracotta} fontWeight="700" fontSize="18">Fossil fuels</text>
            <text x="380" y="248" fill={diagramText.muted} fontWeight="700" fontSize="15">coal / petroleum</text>
          </svg>
        ),
      };
    case "simple-machines-friction":
      return {
        title: "Simple machines make work easier",
        caption: "Ramps, levers and pulleys help move loads. Friction can help grip or cause wear.",
        svg: (
          <svg viewBox="0 0 620 300" role="img" aria-label="Ramp lever pulley and friction examples">
            <rect x="34" y="24" width="552" height="246" rx="18" fill={diagramText.cream} stroke={diagramText.border} strokeWidth="3" />
            <polygon points="82,202 236,202 236,112" fill="#E5E8F2" stroke={diagramText.indigo} strokeWidth="4" />
            <rect x="170" y="130" width="42" height="34" rx="5" fill={diagramText.terracotta} />
            <text x="112" y="236" fill={diagramText.fill} fontWeight="700" fontSize="17">Inclined plane</text>
            <line x1="300" y1="172" x2="438" y2="126" stroke={diagramText.terracotta} strokeWidth="8" strokeLinecap="round" />
            <polygon points="358,174 378,174 368,144" fill={diagramText.fill} />
            <text x="330" y="214" fill={diagramText.fill} fontWeight="700" fontSize="17">Lever</text>
            <circle cx="510" cy="96" r="30" fill="#fffaf3" stroke={diagramText.indigo} strokeWidth="5" />
            <path d="M510 126 V202" stroke={diagramText.indigo} strokeWidth="5" />
            <rect x="486" y="202" width="48" height="30" rx="5" fill={diagramText.terracotta} />
            <text x="478" y="260" fill={diagramText.fill} fontWeight="700" fontSize="17">Pulley</text>
            <path d="M272 248 h112" stroke={diagramText.muted} strokeWidth="6" strokeLinecap="round" />
            <text x="246" y="276" fill={diagramText.muted} fontWeight="700" fontSize="15">rough surface = more friction</text>
          </svg>
        ),
      };
    case "excretory-system":
      return {
        title: "Urine follows a clear path out of the body",
        caption: "The kidneys filter blood, ureters carry urine, the bladder stores it, and the urethra takes it out.",
        svg: (
          <svg viewBox="0 0 620 300" role="img" aria-label="Urinary system showing kidneys ureters bladder and urethra">
            <rect x="34" y="24" width="552" height="246" rx="18" fill={diagramText.cream} stroke={diagramText.border} strokeWidth="3" />
            <ellipse cx="230" cy="92" rx="34" ry="50" fill="#F5E1DB" stroke={diagramText.terracotta} strokeWidth="4" transform="rotate(-18 230 92)" />
            <ellipse cx="390" cy="92" rx="34" ry="50" fill="#F5E1DB" stroke={diagramText.terracotta} strokeWidth="4" transform="rotate(18 390 92)" />
            <path d="M242 136 C250 176 286 184 300 216" fill="none" stroke={diagramText.indigo} strokeWidth="5" strokeLinecap="round" />
            <path d="M378 136 C370 176 334 184 320 216" fill="none" stroke={diagramText.indigo} strokeWidth="5" strokeLinecap="round" />
            <ellipse cx="310" cy="226" rx="46" ry="30" fill="#E5E8F2" stroke={diagramText.indigo} strokeWidth="4" />
            <line x1="310" y1="256" x2="310" y2="274" stroke={diagramText.indigo} strokeWidth="5" strokeLinecap="round" />
            <text x="182" y="42" fill={diagramText.fill} fontWeight="700" fontSize="18">kidneys</text>
            <text x="404" y="172" fill={diagramText.fill} fontWeight="700" fontSize="18">ureters</text>
            <text x="352" y="234" fill={diagramText.fill} fontWeight="700" fontSize="18">bladder</text>
            <text x="224" y="278" fill={diagramText.fill} fontWeight="700" fontSize="18">urethra</text>
          </svg>
        ),
      };
    case "light-energy":
      return {
        title: "Light travels, reflects and refracts",
        caption: "Light travels in straight lines, bounces from mirrors, and bends when it passes between materials.",
        svg: (
          <svg viewBox="0 0 620 300" role="img" aria-label="Light rays showing shadow reflection and refraction">
            <rect x="34" y="24" width="552" height="246" rx="18" fill={diagramText.cream} stroke={diagramText.border} strokeWidth="3" />
            <circle cx="104" cy="88" r="26" fill="#F4B942" />
            <line x1="136" y1="88" x2="232" y2="88" stroke={diagramText.terracotta} strokeWidth="5" strokeLinecap="round" />
            <rect x="240" y="58" width="28" height="70" rx="5" fill={diagramText.fill} />
            <polygon points="268,58 366,28 366,148 268,128" fill="#7A7065" opacity="0.24" />
            <text x="190" y="150" fill={diagramText.fill} fontWeight="700" fontSize="17">shadow</text>
            <line x1="410" y1="64" x2="500" y2="64" stroke={diagramText.indigo} strokeWidth="5" />
            <line x1="455" y1="38" x2="455" y2="90" stroke={diagramText.fill} strokeWidth="4" />
            <path d="M390 118 L452 160 L520 128" fill="none" stroke={diagramText.terracotta} strokeWidth="5" strokeLinecap="round" />
            <line x1="452" y1="104" x2="452" y2="184" stroke={diagramText.indigo} strokeWidth="4" strokeDasharray="8 6" />
            <text x="392" y="214" fill={diagramText.fill} fontWeight="700" fontSize="17">reflection + refraction</text>
          </svg>
        ),
      };
    case "interdependence-environment":
      return {
        title: "Living and non-living things depend on each other",
        caption: "Plants, animals, water, air, soil and sunlight form connected relationships in the environment.",
        svg: (
          <svg viewBox="0 0 620 300" role="img" aria-label="Interdependence cycle among plants animals and non-living things">
            <rect x="34" y="24" width="552" height="246" rx="18" fill={diagramText.cream} stroke={diagramText.border} strokeWidth="3" />
            <circle cx="310" cy="146" r="92" fill="none" stroke={diagramText.border} strokeWidth="5" />
            <text x="286" y="58" fill={diagramText.success} fontWeight="800" fontSize="20">Plants</text>
            <text x="438" y="154" fill={diagramText.terracotta} fontWeight="800" fontSize="20">Animals</text>
            <text x="170" y="154" fill={diagramText.indigo} fontWeight="800" fontSize="20">Air / water / soil</text>
            <path d="M336 72 C410 86 454 114 462 140" fill="none" stroke={diagramText.success} strokeWidth="5" markerEnd="url(#arrowScience)" />
            <path d="M438 174 C374 242 260 244 204 178" fill="none" stroke={diagramText.terracotta} strokeWidth="5" markerEnd="url(#arrowScience)" />
            <path d="M202 126 C220 78 252 58 288 56" fill="none" stroke={diagramText.indigo} strokeWidth="5" markerEnd="url(#arrowScience)" />
            <defs><marker id="arrowScience" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill={diagramText.fill} /></marker></defs>
            <text x="250" y="150" fill={diagramText.fill} fontWeight="700" fontSize="18">interdependence</text>
          </svg>
        ),
      };
    case "population-and-health":
      return {
        title: "Health surveys help communities act",
        caption: "Learners collect information, identify health problems, and plan prevention activities.",
        svg: (
          <svg viewBox="0 0 620 300" role="img" aria-label="Health survey flow from collect data to plan action">
            <rect x="34" y="24" width="552" height="246" rx="18" fill={diagramText.cream} stroke={diagramText.border} strokeWidth="3" />
            {[
              { x: 80, label: "Ask", sub: "questions" },
              { x: 220, label: "Record", sub: "data" },
              { x: 370, label: "Find", sub: "problems" },
              { x: 500, label: "Act", sub: "prevent" },
            ].map((item, i) => (
              <g key={item.label}>
                <circle cx={item.x} cy="138" r="46" fill={i % 2 === 0 ? "#E5E8F2" : "#F5E1DB"} stroke={i % 2 === 0 ? diagramText.indigo : diagramText.terracotta} strokeWidth="4" />
                <text x={item.x} y="134" textAnchor="middle" fill={diagramText.fill} fontWeight="800" fontSize="17">{item.label}</text>
                <text x={item.x} y="156" textAnchor="middle" fill={diagramText.muted} fontWeight="700" fontSize="14">{item.sub}</text>
                {i < 3 && <path d={`M ${item.x + 50} 138 H ${item.x + 90}`} stroke={diagramText.fill} strokeWidth="4" markerEnd="url(#arrowHealth)" />}
              </g>
            ))}
            <defs><marker id="arrowHealth" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill={diagramText.fill} /></marker></defs>
            <text x="140" y="230" fill={diagramText.fill} fontWeight="700" fontSize="18">Survey → organise → report → health action</text>
          </svg>
        ),
      };
    case "location-of-africa":
      return {
        title: "Africa on the world map",
        caption: "Africa is crossed by the Equator and Prime Meridian, and is surrounded by major oceans and seas.",
        svg: (
          <svg viewBox="0 0 640 320" role="img" aria-label="Simple map diagram showing Africa crossed by Equator and Prime Meridian">
            <rect x="30" y="24" width="580" height="260" rx="18" fill={diagramText.cream} stroke={diagramText.border} strokeWidth="3" />
            <ellipse cx="320" cy="154" rx="220" ry="108" fill="#E5E8F2" stroke={diagramText.indigo} strokeWidth="3" />
            <path d="M315 62 C370 70 410 112 398 158 C390 188 368 214 350 250 C316 240 286 216 278 176 C270 138 286 112 300 92 Z" fill="#F5E1DB" stroke={diagramText.terracotta} strokeWidth="4" />
            <line x1="78" y1="154" x2="562" y2="154" stroke={diagramText.success} strokeWidth="5" strokeDasharray="10 9" />
            <line x1="320" y1="46" x2="320" y2="266" stroke={diagramText.indigo} strokeWidth="5" strokeDasharray="10 9" />
            <text x="456" y="145" fill={diagramText.success} fontWeight="800" fontSize="18">Equator</text>
            <text x="330" y="64" fill={diagramText.indigo} fontWeight="800" fontSize="18">Prime Meridian</text>
            <text x="286" y="166" fill={diagramText.fill} fontWeight="900" fontSize="22">Africa</text>
            <text x="92" y="58" fill={diagramText.muted} fontWeight="700" fontSize="15">Atlantic Ocean west</text>
            <text x="410" y="252" fill={diagramText.muted} fontWeight="700" fontSize="15">Indian Ocean east</text>
            <text x="250" y="38" fill={diagramText.muted} fontWeight="700" fontSize="15">Mediterranean Sea north</text>
          </svg>
        ),
      };
    case "physical-features-of-africa":
      return {
        title: "Major physical features shape life",
        caption: "Mountains, rivers, lakes, plateaus and rift valleys influence settlement, transport, power and tourism.",
        svg: (
          <svg viewBox="0 0 640 320" role="img" aria-label="Africa physical features diagram showing mountains rivers lakes and rift valley">
            <rect x="34" y="24" width="572" height="260" rx="18" fill={diagramText.cream} stroke={diagramText.border} strokeWidth="3" />
            <path d="M82 230 L142 126 L198 230 Z" fill="#E5E8F2" stroke={diagramText.indigo} strokeWidth="4" />
            <path d="M126 154 L142 126 L160 158" fill="#fffaf3" stroke={diagramText.border} strokeWidth="3" />
            <text x="105" y="252" fill={diagramText.fill} fontWeight="800" fontSize="16">Mountains</text>
            <path d="M270 60 C244 112 296 132 262 176 C242 204 268 230 238 256" fill="none" stroke={diagramText.indigo} strokeWidth="7" strokeLinecap="round" />
            <text x="286" y="156" fill={diagramText.fill} fontWeight="800" fontSize="16">River</text>
            <ellipse cx="424" cy="108" rx="72" ry="36" fill="#E5E8F2" stroke={diagramText.indigo} strokeWidth="4" />
            <text x="398" y="114" fill={diagramText.fill} fontWeight="800" fontSize="16">Lake</text>
            <path d="M398 204 C440 160 482 170 536 126" fill="none" stroke={diagramText.terracotta} strokeWidth="8" strokeLinecap="round" />
            <path d="M426 232 C468 188 510 198 566 154" fill="none" stroke={diagramText.terracotta} strokeWidth="8" strokeLinecap="round" opacity="0.55" />
            <text x="430" y="260" fill={diagramText.fill} fontWeight="800" fontSize="16">Rift valley</text>
            <rect x="82" y="64" width="120" height="36" rx="12" fill="#F2EBDE" stroke={diagramText.border} strokeWidth="3" />
            <text x="105" y="88" fill={diagramText.fill} fontWeight="800" fontSize="16">Plateau</text>
          </svg>
        ),
      };
    case "climate-of-africa":
      return {
        title: "Climate changes across Africa",
        caption: "Latitude, altitude, winds, distance from the sea and human activities influence climate.",
        svg: (
          <svg viewBox="0 0 640 320" role="img" aria-label="Climate diagram for Africa showing wet equator dry deserts and cooler highlands">
            <rect x="34" y="24" width="572" height="260" rx="18" fill={diagramText.cream} stroke={diagramText.border} strokeWidth="3" />
            <path d="M318 60 C370 72 406 112 398 158 C390 190 368 218 350 252 C316 242 286 216 278 176 C270 138 286 112 300 92 Z" fill="#F5E1DB" stroke={diagramText.terracotta} strokeWidth="4" />
            <rect x="272" y="138" width="136" height="36" rx="18" fill="#DDEDDD" stroke={diagramText.success} strokeWidth="3" />
            <text x="284" y="162" fill={diagramText.success} fontWeight="900" fontSize="16">Wet equator</text>
            <rect x="282" y="78" width="112" height="34" rx="17" fill="#F2EBDE" stroke={diagramText.terracotta} strokeWidth="3" />
            <text x="304" y="101" fill={diagramText.terracotta} fontWeight="900" fontSize="15">Desert</text>
            <path d="M104 222 L150 132 L200 222 Z" fill="#E5E8F2" stroke={diagramText.indigo} strokeWidth="4" />
            <text x="98" y="246" fill={diagramText.indigo} fontWeight="800" fontSize="16">Cooler highlands</text>
            <path d="M488 98 C452 112 452 146 496 156" fill="none" stroke={diagramText.indigo} strokeWidth="5" markerEnd="url(#arrowClimate)" />
            <text x="470" y="82" fill={diagramText.fill} fontWeight="800" fontSize="16">Winds</text>
            <defs><marker id="arrowClimate" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill={diagramText.indigo} /></marker></defs>
            <text x="236" y="274" fill={diagramText.fill} fontWeight="800" fontSize="17">Climate affects farming, settlement and vegetation</text>
          </svg>
        ),
      };
    case "vegetation-of-africa":
      return {
        title: "Vegetation follows climate and relief",
        caption: "Rainfall, temperature and altitude help explain forests, savanna, deserts and mountain vegetation.",
        svg: (
          <svg viewBox="0 0 640 320" role="img" aria-label="Vegetation zones diagram showing rainforest savanna desert and mountain vegetation">
            <rect x="34" y="24" width="572" height="260" rx="18" fill={diagramText.cream} stroke={diagramText.border} strokeWidth="3" />
            {[
              { x: 92, color: "#3F8A4D", label: "Rainforest", sub: "wet" },
              { x: 226, color: "#9CAA54", label: "Savanna", sub: "grass + trees" },
              { x: 360, color: "#C25A3C", label: "Desert", sub: "dry" },
              { x: 494, color: "#3B4A8A", label: "Mountain", sub: "altitude" },
            ].map((zone) => (
              <g key={zone.label}>
                <rect x={zone.x} y="80" width="104" height="130" rx="18" fill="#fffaf3" stroke={diagramText.border} strokeWidth="3" />
                <circle cx={zone.x + 52} cy="128" r="30" fill={zone.color} opacity="0.9" />
                <text x={zone.x + 52} y="230" textAnchor="middle" fill={diagramText.fill} fontWeight="900" fontSize="16">{zone.label}</text>
                <text x={zone.x + 52} y="253" textAnchor="middle" fill={diagramText.muted} fontWeight="700" fontSize="13">{zone.sub}</text>
              </g>
            ))}
            <text x="138" y="58" fill={diagramText.fill} fontWeight="800" fontSize="18">Plant cover changes from wet to dry areas</text>
          </svg>
        ),
      };
    case "people-ethnic-groups-settlement":
      return {
        title: "Migration has push and pull reasons",
        caption: "People move because some conditions push them away while others attract them to new places.",
        svg: (
          <svg viewBox="0 0 640 320" role="img" aria-label="Migration diagram showing push factors pull factors and settlement">
            <rect x="34" y="24" width="572" height="260" rx="18" fill={diagramText.cream} stroke={diagramText.border} strokeWidth="3" />
            <rect x="72" y="82" width="150" height="132" rx="18" fill="#F5E1DB" stroke={diagramText.terracotta} strokeWidth="4" />
            <text x="116" y="114" fill={diagramText.terracotta} fontWeight="900" fontSize="20">Push</text>
            <text x="96" y="148" fill={diagramText.fill} fontWeight="700" fontSize="15">war</text>
            <text x="96" y="174" fill={diagramText.fill} fontWeight="700" fontSize="15">drought</text>
            <text x="96" y="200" fill={diagramText.fill} fontWeight="700" fontSize="15">land shortage</text>
            <path d="M240 148 H396" stroke={diagramText.fill} strokeWidth="6" markerEnd="url(#arrowMigration)" />
            <rect x="418" y="82" width="150" height="132" rx="18" fill="#DDEDDD" stroke={diagramText.success} strokeWidth="4" />
            <text x="466" y="114" fill={diagramText.success} fontWeight="900" fontSize="20">Pull</text>
            <text x="442" y="148" fill={diagramText.fill} fontWeight="700" fontSize="15">water</text>
            <text x="442" y="174" fill={diagramText.fill} fontWeight="700" fontSize="15">fertile land</text>
            <text x="442" y="200" fill={diagramText.fill} fontWeight="700" fontSize="15">security</text>
            <defs><marker id="arrowMigration" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill={diagramText.fill} /></marker></defs>
            <text x="210" y="254" fill={diagramText.fill} fontWeight="800" fontSize="18">movement → settlement patterns → cultural change</text>
          </svg>
        ),
      };
    case "foreign-influence-africa":
      return {
        title: "Foreign influence had political, economic and social effects",
        caption: "Explorers, traders, missionaries and colonialists came for different reasons and changed African societies in different ways.",
        svg: (
          <svg viewBox="0 0 640 320" role="img" aria-label="Foreign influence flow diagram with groups reasons and effects">
            <rect x="34" y="24" width="572" height="260" rx="18" fill={diagramText.cream} stroke={diagramText.border} strokeWidth="3" />
            <rect x="70" y="72" width="150" height="150" rx="18" fill="#E5E8F2" stroke={diagramText.indigo} strokeWidth="4" />
            <text x="102" y="104" fill={diagramText.indigo} fontWeight="900" fontSize="18">Groups</text>
            <text x="92" y="136" fill={diagramText.fill} fontWeight="700" fontSize="14">traders</text>
            <text x="92" y="160" fill={diagramText.fill} fontWeight="700" fontSize="14">explorers</text>
            <text x="92" y="184" fill={diagramText.fill} fontWeight="700" fontSize="14">missionaries</text>
            <text x="92" y="208" fill={diagramText.fill} fontWeight="700" fontSize="14">colonialists</text>
            <path d="M238 148 H384" stroke={diagramText.fill} strokeWidth="5" markerEnd="url(#arrowForeign)" />
            <rect x="406" y="72" width="164" height="150" rx="18" fill="#F5E1DB" stroke={diagramText.terracotta} strokeWidth="4" />
            <text x="454" y="104" fill={diagramText.terracotta} fontWeight="900" fontSize="18">Effects</text>
            <text x="430" y="136" fill={diagramText.fill} fontWeight="700" fontSize="14">political</text>
            <text x="430" y="160" fill={diagramText.fill} fontWeight="700" fontSize="14">economic</text>
            <text x="430" y="184" fill={diagramText.fill} fontWeight="700" fontSize="14">social</text>
            <defs><marker id="arrowForeign" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill={diagramText.fill} /></marker></defs>
            <text x="202" y="254" fill={diagramText.fill} fontWeight="800" fontSize="18">Different groups → different reasons → mixed effects</text>
          </svg>
        ),
      };
    case "nationalism-road-independence":
      return {
        title: "Road to independence",
        caption: "Nationalism, Pan-Africanism and organised action helped African countries regain self-rule.",
        svg: (
          <svg viewBox="0 0 640 320" role="img" aria-label="Timeline from colonial rule to nationalism to independence">
            <rect x="34" y="24" width="572" height="260" rx="18" fill={diagramText.cream} stroke={diagramText.border} strokeWidth="3" />
            <line x1="92" y1="160" x2="548" y2="160" stroke={diagramText.fill} strokeWidth="6" markerEnd="url(#arrowIndependence)" />
            {[
              { x: 120, label: "Colonial rule", color: diagramText.terracotta },
              { x: 272, label: "Nationalism", color: diagramText.indigo },
              { x: 424, label: "Pan-Africanism", color: diagramText.success },
              { x: 536, label: "Independence", color: diagramText.terracotta },
            ].map((item) => (
              <g key={item.label}>
                <circle cx={item.x} cy="160" r="24" fill="#fffaf3" stroke={item.color} strokeWidth="5" />
                <text x={item.x} y="214" textAnchor="middle" fill={diagramText.fill} fontWeight="800" fontSize="15">{item.label}</text>
              </g>
            ))}
            <defs><marker id="arrowIndependence" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill={diagramText.fill} /></marker></defs>
            <text x="170" y="92" fill={diagramText.fill} fontWeight="800" fontSize="18">parties · petitions · strikes · negotiations · struggle</text>
          </svg>
        ),
      };
    case "post-independence-africa":
      return {
        title: "African cooperation after independence",
        caption: "OAU, AU and regional groupings help countries work together on peace, trade and development.",
        svg: (
          <svg viewBox="0 0 640 320" role="img" aria-label="African cooperation diagram showing OAU AU and regional groupings">
            <rect x="34" y="24" width="572" height="260" rx="18" fill={diagramText.cream} stroke={diagramText.border} strokeWidth="3" />
            <circle cx="320" cy="150" r="62" fill="#F5E1DB" stroke={diagramText.terracotta} strokeWidth="5" />
            <text x="294" y="146" fill={diagramText.fill} fontWeight="900" fontSize="20">AU</text>
            <text x="278" y="172" fill={diagramText.muted} fontWeight="700" fontSize="14">from OAU</text>
            {[
              { x: 138, y: 84, label: "COMESA" },
              { x: 498, y: 84, label: "ECOWAS" },
              { x: 146, y: 232, label: "SADC" },
              { x: 500, y: 232, label: "IGAD" },
            ].map((item) => (
              <g key={item.label}>
                <circle cx={item.x} cy={item.y} r="42" fill="#E5E8F2" stroke={diagramText.indigo} strokeWidth="4" />
                <text x={item.x} y={item.y + 5} textAnchor="middle" fill={diagramText.fill} fontWeight="900" fontSize="15">{item.label}</text>
                <line x1={item.x} y1={item.y} x2="320" y2="150" stroke={diagramText.border} strokeWidth="4" />
              </g>
            ))}
            <text x="198" y="274" fill={diagramText.fill} fontWeight="800" fontSize="17">peace · trade · development · cooperation</text>
          </svg>
        ),
      };
    case "economic-developments-africa":
      return {
        title: "Resources become development through good use",
        caption: "Resources need skills, infrastructure, peace, value addition and environmental care to support development.",
        svg: (
          <svg viewBox="0 0 640 320" role="img" aria-label="Economic development flow from resources to processing to jobs and trade">
            <rect x="34" y="24" width="572" height="260" rx="18" fill={diagramText.cream} stroke={diagramText.border} strokeWidth="3" />
            {[
              { x: 112, label: "Resources", sub: "oil · land · minerals" },
              { x: 300, label: "Value addition", sub: "process" },
              { x: 494, label: "Development", sub: "jobs · trade" },
            ].map((item, i) => (
              <g key={item.label}>
                <rect x={item.x - 70} y="102" width="140" height="92" rx="18" fill={i === 1 ? "#F5E1DB" : "#E5E8F2"} stroke={i === 1 ? diagramText.terracotta : diagramText.indigo} strokeWidth="4" />
                <text x={item.x} y="140" textAnchor="middle" fill={diagramText.fill} fontWeight="900" fontSize="16">{item.label}</text>
                <text x={item.x} y="166" textAnchor="middle" fill={diagramText.muted} fontWeight="700" fontSize="13">{item.sub}</text>
                {i < 2 && <path d={`M ${item.x + 76} 148 H ${item.x + 118}`} stroke={diagramText.fill} strokeWidth="5" markerEnd="url(#arrowEcon)" />}
              </g>
            ))}
            <defs><marker id="arrowEcon" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill={diagramText.fill} /></marker></defs>
            <text x="154" y="246" fill={diagramText.fill} fontWeight="800" fontSize="17">Good governance + infrastructure + skills + environment</text>
          </svg>
        ),
      };
    case "major-world-organisations":
      return {
        title: "World organisations connect countries",
        caption: "The UN and Commonwealth support cooperation, peace, rights, health, education and development.",
        svg: (
          <svg viewBox="0 0 640 320" role="img" aria-label="World organisations diagram showing UN agencies and Commonwealth">
            <rect x="34" y="24" width="572" height="260" rx="18" fill={diagramText.cream} stroke={diagramText.border} strokeWidth="3" />
            <circle cx="186" cy="150" r="62" fill="#E5E8F2" stroke={diagramText.indigo} strokeWidth="5" />
            <text x="172" y="144" fill={diagramText.fill} fontWeight="900" fontSize="24">UN</text>
            <text x="145" y="170" fill={diagramText.muted} fontWeight="700" fontSize="14">peace + rights</text>
            <circle cx="454" cy="150" r="62" fill="#F5E1DB" stroke={diagramText.terracotta} strokeWidth="5" />
            <text x="394" y="146" fill={diagramText.fill} fontWeight="900" fontSize="20">Commonwealth</text>
            <text x="418" y="170" fill={diagramText.muted} fontWeight="700" fontSize="14">cooperation</text>
            {[
              { x: 104, y: 72, label: "WHO" },
              { x: 272, y: 72, label: "UNICEF" },
              { x: 104, y: 238, label: "FAO" },
              { x: 272, y: 238, label: "UNESCO" },
            ].map((item) => (
              <g key={item.label}>
                <rect x={item.x - 38} y={item.y - 18} width="76" height="36" rx="12" fill="#fffaf3" stroke={diagramText.border} strokeWidth="3" />
                <text x={item.x} y={item.y + 5} textAnchor="middle" fill={diagramText.fill} fontWeight="900" fontSize="14">{item.label}</text>
              </g>
            ))}
            <line x1="248" y1="150" x2="392" y2="150" stroke={diagramText.border} strokeWidth="5" />
          </svg>
        ),
      };
    case "school-holidays":
      return {
        title: "Holiday writing: plan or activity?",
        caption: "Use future tense for plans and past tense for completed holiday activities.",
        svg: (
          <svg viewBox="0 0 640 300" role="img" aria-label="Holiday writing diagram comparing future plans and past activities">
            <rect x="34" y="24" width="572" height="246" rx="18" fill={diagramText.cream} stroke={diagramText.border} strokeWidth="3" />
            <rect x="72" y="82" width="220" height="132" rx="18" fill="#E5E8F2" stroke={diagramText.indigo} strokeWidth="4" />
            <text x="122" y="116" fill={diagramText.indigo} fontWeight="900" fontSize="20">Plan</text>
            <text x="100" y="152" fill={diagramText.fill} fontWeight="700" fontSize="16">I will visit...</text>
            <text x="100" y="182" fill={diagramText.fill} fontWeight="700" fontSize="16">I am going to...</text>
            <rect x="350" y="82" width="220" height="132" rx="18" fill="#F5E1DB" stroke={diagramText.terracotta} strokeWidth="4" />
            <text x="410" y="116" fill={diagramText.terracotta} fontWeight="900" fontSize="20">Activity</text>
            <text x="378" y="152" fill={diagramText.fill} fontWeight="700" fontSize="16">I visited...</text>
            <text x="378" y="182" fill={diagramText.fill} fontWeight="700" fontSize="16">I helped...</text>
            <text x="150" y="242" fill={diagramText.fill} fontWeight="800" fontSize="18">future tense vs past tense</text>
          </svg>
        ),
      };
    case "letter-writing":
      return {
        title: "Formal letter layout",
        caption: "Formal letters need addresses, date, greeting, subject, body and a polite close.",
        svg: (
          <svg viewBox="0 0 640 360" role="img" aria-label="Formal letter layout template">
            <rect x="132" y="24" width="376" height="310" rx="14" fill="#fffaf3" stroke={diagramText.border} strokeWidth="4" />
            {[
              { y: 58, label: "Writer's address" },
              { y: 92, label: "Date" },
              { y: 128, label: "Receiver's address" },
              { y: 164, label: "Dear Sir/Madam," },
              { y: 198, label: "RE: Subject / heading" },
              { y: 238, label: "Body: reason + details" },
              { y: 288, label: "Yours faithfully," },
              { y: 316, label: "Signature + name" },
            ].map((item, i) => (
              <g key={item.label}>
                <line x1="170" y1={item.y} x2={i === 5 ? 464 : 360} y2={item.y} stroke={i === 5 ? diagramText.terracotta : diagramText.indigo} strokeWidth="4" strokeLinecap="round" />
                <text x="172" y={item.y - 8} fill={diagramText.fill} fontWeight="700" fontSize="13">{item.label}</text>
              </g>
            ))}
          </svg>
        ),
      };
    case "examinations":
      return {
        title: "Examination strategy",
        caption: "Read instructions, manage time, answer clearly, then check your work.",
        svg: (
          <svg viewBox="0 0 640 300" role="img" aria-label="Examination strategy flow diagram">
            <rect x="34" y="24" width="572" height="246" rx="18" fill={diagramText.cream} stroke={diagramText.border} strokeWidth="3" />
            {[
              { x: 108, label: "Read", sub: "instructions" },
              { x: 248, label: "Plan", sub: "time" },
              { x: 388, label: "Answer", sub: "clearly" },
              { x: 528, label: "Check", sub: "work" },
            ].map((item, i) => (
              <g key={item.label}>
                <circle cx={item.x} cy="142" r="45" fill={i % 2 ? "#F5E1DB" : "#E5E8F2"} stroke={i % 2 ? diagramText.terracotta : diagramText.indigo} strokeWidth="4" />
                <text x={item.x} y="138" textAnchor="middle" fill={diagramText.fill} fontWeight="900" fontSize="17">{item.label}</text>
                <text x={item.x} y="160" textAnchor="middle" fill={diagramText.muted} fontWeight="700" fontSize="13">{item.sub}</text>
                {i < 3 && <path d={`M ${item.x + 50} 142 H ${item.x + 84}`} stroke={diagramText.fill} strokeWidth="4" markerEnd="url(#arrowExam)" />}
              </g>
            ))}
            <defs><marker id="arrowExam" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill={diagramText.fill} /></marker></defs>
          </svg>
        ),
      };
    case "electronic-media":
      return {
        title: "Check before you share",
        caption: "Responsible media use means listening carefully, checking facts and protecting private information.",
        svg: (
          <svg viewBox="0 0 640 300" role="img" aria-label="Electronic media safety diagram">
            <rect x="34" y="24" width="572" height="246" rx="18" fill={diagramText.cream} stroke={diagramText.border} strokeWidth="3" />
            <rect x="86" y="86" width="130" height="110" rx="18" fill="#E5E8F2" stroke={diagramText.indigo} strokeWidth="4" />
            <text x="126" y="134" fill={diagramText.fill} fontWeight="900" fontSize="18">Radio</text>
            <rect x="256" y="86" width="130" height="110" rx="18" fill="#F5E1DB" stroke={diagramText.terracotta} strokeWidth="4" />
            <text x="286" y="134" fill={diagramText.fill} fontWeight="900" fontSize="18">Phone</text>
            <rect x="426" y="86" width="130" height="110" rx="18" fill="#DDEDDD" stroke={diagramText.success} strokeWidth="4" />
            <text x="438" y="134" fill={diagramText.fill} fontWeight="900" fontSize="18">Television</text>
            <text x="172" y="236" fill={diagramText.fill} fontWeight="900" fontSize="18">Listen/read → check facts → share safely</text>
          </svg>
        ),
      };
    case "rights-responsibilities-freedom":
      return {
        title: "Rights go with responsibilities",
        caption: "A right is enjoyed better when the matching responsibility is respected.",
        svg: (
          <svg viewBox="0 0 640 300" role="img" aria-label="Rights and responsibilities balance scale">
            <rect x="34" y="24" width="572" height="246" rx="18" fill={diagramText.cream} stroke={diagramText.border} strokeWidth="3" />
            <line x1="320" y1="78" x2="320" y2="220" stroke={diagramText.fill} strokeWidth="6" />
            <line x1="170" y1="116" x2="470" y2="116" stroke={diagramText.fill} strokeWidth="6" />
            <path d="M170 116 L122 194 H218 Z" fill="#E5E8F2" stroke={diagramText.indigo} strokeWidth="4" />
            <path d="M470 116 L422 194 H518 Z" fill="#F5E1DB" stroke={diagramText.terracotta} strokeWidth="4" />
            <text x="142" y="178" fill={diagramText.fill} fontWeight="900" fontSize="18">Rights</text>
            <text x="430" y="178" fill={diagramText.fill} fontWeight="900" fontSize="18">Duties</text>
            <text x="220" y="252" fill={diagramText.fill} fontWeight="800" fontSize="18">education ↔ attend and learn</text>
          </svg>
        ),
      };
    case "environmental-protection":
      return {
        title: "A strong environmental message",
        caption: "Name the problem, explain why it matters, then give a clear action.",
        svg: (
          <svg viewBox="0 0 640 300" role="img" aria-label="Environmental message template">
            <rect x="34" y="24" width="572" height="246" rx="18" fill={diagramText.cream} stroke={diagramText.border} strokeWidth="3" />
            {[
              { x: 120, label: "Problem", sub: "rubbish" },
              { x: 320, label: "Why it matters", sub: "disease" },
              { x: 520, label: "Action", sub: "use bins" },
            ].map((item, i) => (
              <g key={item.label}>
                <rect x={item.x - 70} y="94" width="140" height="94" rx="18" fill={i === 1 ? "#F5E1DB" : "#E5E8F2"} stroke={i === 1 ? diagramText.terracotta : diagramText.indigo} strokeWidth="4" />
                <text x={item.x} y="132" textAnchor="middle" fill={diagramText.fill} fontWeight="900" fontSize="16">{item.label}</text>
                <text x={item.x} y="160" textAnchor="middle" fill={diagramText.muted} fontWeight="700" fontSize="14">{item.sub}</text>
                {i < 2 && <path d={`M ${item.x + 76} 142 H ${item.x + 116}`} stroke={diagramText.fill} strokeWidth="5" markerEnd="url(#arrowEnvMsg)" />}
              </g>
            ))}
            <defs><marker id="arrowEnvMsg" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill={diagramText.fill} /></marker></defs>
          </svg>
        ),
      };
    case "ceremonies":
      return {
        title: "Invitation format checklist",
        caption: "An invitation should tell guests the occasion, date, time, venue and host.",
        svg: (
          <svg viewBox="0 0 640 340" role="img" aria-label="Invitation card format checklist">
            <rect x="130" y="42" width="380" height="246" rx="20" fill="#fffaf3" stroke={diagramText.border} strokeWidth="4" />
            <text x="240" y="84" fill={diagramText.terracotta} fontWeight="900" fontSize="24">INVITATION</text>
            {[
              "Occasion: marriage / funeral / ceremony",
              "Date and time",
              "Venue",
              "Host / family",
              "Polite request to attend",
            ].map((line, i) => (
              <g key={line}>
                <circle cx="172" cy={124 + i * 32} r="7" fill={diagramText.success} />
                <text x="190" y={130 + i * 32} fill={diagramText.fill} fontWeight="700" fontSize="15">{line}</text>
              </g>
            ))}
          </svg>
        ),
      };
    default:
      return null;
  }
}
