// Seed data for "Load demo class" on the teacher dashboard.
// Creates ~22 realistic-looking P7 students with varying activity.
// Stored in localStorage under tendo:demo-class so it can be loaded/cleared cleanly.
//
// This is DEMO-ONLY data for the sales pitch. Real per-student data comes via
// Supabase class codes in Phase 4 (see DEV-009).

export interface DemoStudent {
  id: string;
  name: string;
  classCode: string;
  topicActivity: Record<string, { bestScore: number; lastTotal: number; attempts: number; updatedAt: string }>;
  paperActivity: Record<string, { best: number; lastTotal: number; attempts: number; updatedAt: string }>;
}

// Ugandan names — common, neutral, mixed regions
const NAMES = [
  "Akello Joy", "Mukasa Daniel", "Namutebi Sarah", "Okello Brian", "Nakato Faith",
  "Ssemakula Trevor", "Achieng Patricia", "Kato Allan", "Auma Rebecca", "Wanyama Joshua",
  "Nabirye Mariam", "Tumusiime Ronald", "Apio Stella", "Mugisha Henry", "Nakimera Esther",
  "Opio Kenneth", "Kemigisha Doreen", "Ssali Vincent", "Atim Christine", "Lubega Ivan",
  "Nansubuga Ruth", "Kiprotich Samuel",
];

const TOPIC_IDS = [
  "venn-diagrams-2-events",
  "roman-numerals-mm",
  "fractions-core",
  "decimals",
  "proportion-percentages",
  "perimeter",
  "area",
  "volume",
  "equations",
  "substitution",
  "central-tendency-range",
  "12-24-hour-clocks",
  "money",
];

const PAPER_IDS = ["ple-math-2018", "ple-math-2019", "ple-math-2020"];

const PAPER_TOTAL_MARKS: Record<string, number> = {
  "ple-math-2018": 100,
  "ple-math-2019": 100,
  "ple-math-2020": 100,
};

const TOPIC_QUIZ_LEN = 7;

// Seeded pseudo-random so the demo class looks the same each time
let seed = 7;
function rnd(): number {
  seed = (seed * 1664525 + 1013904223) % 4294967296;
  return seed / 4294967296;
}
function pickInt(min: number, max: number): number {
  return Math.floor(rnd() * (max - min + 1)) + min;
}
function pickDateWithinDays(daysAgo: number): string {
  const d = new Date();
  d.setDate(d.getDate() - pickInt(0, daysAgo));
  d.setHours(pickInt(8, 20), pickInt(0, 59), 0, 0);
  return d.toISOString();
}

export function generateDemoClass(): DemoStudent[] {
  seed = 7; // reset for determinism
  const students: DemoStudent[] = [];

  for (let i = 0; i < NAMES.length; i++) {
    // Performance band per student — creates a realistic spread.
    // ~30% high, ~50% mid, ~20% low.
    const r = rnd();
    const band: "high" | "mid" | "low" = r < 0.3 ? "high" : r < 0.8 ? "mid" : "low";

    // How many topics this student has attempted (more for engaged students)
    const topicCount =
      band === "high" ? pickInt(8, 13) : band === "mid" ? pickInt(4, 9) : pickInt(1, 4);

    // Shuffle topic ids then take topicCount
    const shuffled = [...TOPIC_IDS].sort(() => rnd() - 0.5);
    const attempted = shuffled.slice(0, topicCount);

    const topicActivity: DemoStudent["topicActivity"] = {};
    for (const tid of attempted) {
      // Score band per topic, lightly biased to student band
      const baseBest =
        band === "high" ? pickInt(5, 7) : band === "mid" ? pickInt(3, 6) : pickInt(1, 4);
      topicActivity[tid] = {
        bestScore: baseBest,
        lastTotal: TOPIC_QUIZ_LEN,
        attempts: pickInt(1, 3),
        updatedAt: pickDateWithinDays(14),
      };
    }

    // Past papers — fewer kids attempt these
    const paperActivity: DemoStudent["paperActivity"] = {};
    const paperAttempts =
      band === "high" ? pickInt(1, 3) : band === "mid" ? pickInt(0, 2) : pickInt(0, 1);
    const shuffledPapers = [...PAPER_IDS].sort(() => rnd() - 0.5).slice(0, paperAttempts);
    for (const pid of shuffledPapers) {
      const total = PAPER_TOTAL_MARKS[pid];
      const pctTarget =
        band === "high" ? pickInt(65, 88) : band === "mid" ? pickInt(40, 70) : pickInt(20, 45);
      const best = Math.round((pctTarget / 100) * total);
      paperActivity[pid] = {
        best,
        lastTotal: total,
        attempts: pickInt(1, 2),
        updatedAt: pickDateWithinDays(21),
      };
    }

    students.push({
      id: `demo-${i + 1}`,
      name: NAMES[i],
      classCode: "P7-DEMO",
      topicActivity,
      paperActivity,
    });
  }

  return students;
}

const STORAGE_KEY = "tendo:demo-class";

export function saveDemoClass(students: DemoStudent[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
}

export function loadDemoClass(): DemoStudent[] | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function clearDemoClass() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(STORAGE_KEY);
}
