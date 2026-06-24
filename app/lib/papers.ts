// Past PLE Math papers. Phase 2 seed: one representative 2018-style paper.
// Real UNEB papers will be ingested into content/papers/ in Phase 3 content work.
//
// Each question is tagged to a topic id so the Teacher Browse mode can filter
// by syllabus area. correct is the index (0-3) into choices.

export interface PaperQuestion {
  num: number;
  q: string;
  choices: string[];
  correct: number;
  why: string;
  topicId: string; // matches curriculum sub-topic id (see content/curriculum/p7-math.json)
  topicLabel: string; // for teacher browse view
  marks: number;
}

export interface PastPaper {
  id: string;
  year: number;
  examBody: "UNEB";
  paperName: string;
  durationMinutes: number;
  totalMarks: number;
  blurb: string;
  questions: PaperQuestion[];
}

export const PAPERS: PastPaper[] = [
  {
    id: "ple-math-2018",
    year: 2018,
    examBody: "UNEB",
    paperName: "PLE Mathematics 2018 (representative)",
    durationMinutes: 135,
    totalMarks: 100,
    blurb:
      "A representative selection of PLE-style Mathematics questions covering the 2018 examined themes. Use 'Attempt' mode to practise as a student. Use 'Browse by topic' mode if you are a teacher preparing a worksheet.",
    questions: [
      {
        num: 1,
        q: "Work out: 24 + 36 ÷ 4",
        choices: ["33", "15", "27", "9"],
        correct: 0,
        why: "Order of operations: divide first. 36 ÷ 4 = 9. Then 24 + 9 = 33.",
        topicId: "four-basic-operations",
        topicLabel: "Numeracy · Operations",
        marks: 1,
      },
      {
        num: 2,
        q: "Write 'MCMLXXXIV' as a Hindu-Arabic numeral.",
        choices: ["1984", "1884", "1994", "2084"],
        correct: 0,
        why: "M=1000, CM=900, LXXX=80, IV=4. Total = 1984.",
        topicId: "roman-numerals-mm",
        topicLabel: "Numeracy · Roman numerals",
        marks: 1,
      },
      {
        num: 3,
        q: "Find the value of (2/3) + (1/6).",
        choices: ["5/6", "3/9", "1/2", "3/6"],
        correct: 0,
        why: "Common denominator 6: 2/3 = 4/6, plus 1/6 = 5/6.",
        topicId: "fractions-core",
        topicLabel: "Numeracy · Fractions",
        marks: 1,
      },
      {
        num: 4,
        q: "In a class of 50 pupils, 32 like English and 28 like Maths. 15 like both. How many like only English?",
        choices: ["17", "32", "13", "5"],
        correct: 0,
        why: "Only English = 32 − 15 (the overlap) = 17.",
        topicId: "venn-diagrams-2-events",
        topicLabel: "Sets · Venn diagrams",
        marks: 2,
      },
      {
        num: 5,
        q: "From question 4, how many pupils like neither subject?",
        choices: ["5", "0", "10", "13"],
        correct: 0,
        why: "Only English 17, only Maths 13, both 15. At least one = 45. Neither = 50 − 45 = 5.",
        topicId: "venn-diagrams-2-events",
        topicLabel: "Sets · Venn diagrams",
        marks: 2,
      },
      {
        num: 6,
        q: "Round 4,847 to the nearest hundred.",
        choices: ["4,800", "4,900", "5,000", "4,850"],
        correct: 0,
        why: "The tens digit is 4 (less than 5), so we round down. 4,847 → 4,800.",
        topicId: "numbers-up-to-99-999-999",
        topicLabel: "Numeracy · Whole numbers",
        marks: 1,
      },
      {
        num: 7,
        q: "Find the prime factorisation of 60.",
        choices: ["2 × 2 × 3 × 5", "2 × 30", "4 × 15", "6 × 10"],
        correct: 0,
        why: "60 = 2 × 2 × 3 × 5 (all factors must be prime).",
        topicId: "prime-factorisation",
        topicLabel: "Numeracy · Prime factorisation",
        marks: 2,
      },
      {
        num: 8,
        q: "What is 25% of 240?",
        choices: ["60", "40", "24", "120"],
        correct: 0,
        why: "25% = 1/4. One quarter of 240 = 60.",
        topicId: "proportion-percentages",
        topicLabel: "Numeracy · Percentages",
        marks: 1,
      },
      {
        num: 9,
        q: "A trader bought a shirt at UGX 15,000 and sold it for UGX 18,000. Find the profit percentage.",
        choices: ["20%", "15%", "30%", "3%"],
        correct: 0,
        why: "Profit = 18,000 − 15,000 = 3,000. % profit = (3,000 / 15,000) × 100 = 20%.",
        topicId: "money",
        topicLabel: "Measurement · Money",
        marks: 2,
      },
      {
        num: 10,
        q: "Find the perimeter of a rectangle 8 cm long and 5 cm wide.",
        choices: ["26 cm", "40 cm", "13 cm", "30 cm"],
        correct: 0,
        why: "Perimeter of a rectangle = 2(L + W) = 2(8 + 5) = 2 × 13 = 26 cm.",
        topicId: "perimeter",
        topicLabel: "Measurement · Perimeter",
        marks: 2,
      },
      {
        num: 11,
        q: "Find the area of a triangle with base 12 cm and height 5 cm.",
        choices: ["30 cm²", "60 cm²", "17 cm²", "120 cm²"],
        correct: 0,
        why: "Area = (1/2) × base × height = (1/2) × 12 × 5 = 30 cm².",
        topicId: "area",
        topicLabel: "Measurement · Area",
        marks: 2,
      },
      {
        num: 12,
        q: "Convert 14:30 to 12-hour clock.",
        choices: ["2:30 pm", "2:30 am", "4:30 pm", "12:30 pm"],
        correct: 0,
        why: "Subtract 12 from any 24-hour value above 12. 14 − 12 = 2, so it is 2:30 pm.",
        topicId: "12-24-hour-clocks",
        topicLabel: "Measurement · Time",
        marks: 1,
      },
      {
        num: 13,
        q: "Solve for x: 3x + 7 = 22",
        choices: ["5", "7", "9", "15"],
        correct: 0,
        why: "Subtract 7 from both sides: 3x = 15. Divide by 3: x = 5.",
        topicId: "equations",
        topicLabel: "Algebra · Equations",
        marks: 2,
      },
      {
        num: 14,
        q: "If a = 4 and b = 3, find the value of 2a + 5b.",
        choices: ["23", "17", "15", "12"],
        correct: 0,
        why: "2 × 4 + 5 × 3 = 8 + 15 = 23.",
        topicId: "substitution",
        topicLabel: "Algebra · Substitution",
        marks: 2,
      },
      {
        num: 15,
        q: "Find the mean of: 4, 6, 8, 10, 12.",
        choices: ["8", "10", "40", "6"],
        correct: 0,
        why: "Sum = 40. Count = 5. Mean = 40 ÷ 5 = 8.",
        topicId: "central-tendency-range",
        topicLabel: "Data · Mean, median, mode",
        marks: 1,
      },
      {
        num: 16,
        q: "What is the median of: 7, 3, 9, 5, 1?",
        choices: ["5", "7", "3", "25"],
        correct: 0,
        why: "Arrange in order: 1, 3, 5, 7, 9. The middle value is 5.",
        topicId: "central-tendency-range",
        topicLabel: "Data · Mean, median, mode",
        marks: 1,
      },
      {
        num: 17,
        q: "A bag contains 4 red and 6 blue balls. What is the probability of picking a red ball?",
        choices: ["2/5", "4/6", "2/3", "1/4"],
        correct: 0,
        why: "P(red) = 4 / (4 + 6) = 4/10 = 2/5.",
        topicId: "probability-intro",
        topicLabel: "Sets · Probability",
        marks: 2,
      },
      {
        num: 18,
        q: "A car covers 240 km in 4 hours. Find its average speed.",
        choices: ["60 km/h", "240 km/h", "44 km/h", "120 km/h"],
        correct: 0,
        why: "Speed = distance ÷ time = 240 ÷ 4 = 60 km/h.",
        topicId: "data-handling",
        topicLabel: "Data · Travel graphs",
        marks: 2,
      },
      {
        num: 19,
        q: "Find the volume of a cuboid 5 cm long, 4 cm wide and 3 cm high.",
        choices: ["60 cm³", "12 cm³", "47 cm³", "30 cm³"],
        correct: 0,
        why: "Volume = L × W × H = 5 × 4 × 3 = 60 cm³.",
        topicId: "volume",
        topicLabel: "Measurement · Volume",
        marks: 2,
      },
      {
        num: 20,
        q: "Akello had 24 mangoes. She gave 1/3 to her brother and 1/4 of the remainder to her cousin. How many did she give the cousin?",
        choices: ["4", "6", "8", "2"],
        correct: 0,
        why: "1/3 of 24 = 8 (to brother). Remainder = 16. 1/4 of 16 = 4 (to cousin).",
        topicId: "fractions-core",
        topicLabel: "Numeracy · Fractions",
        marks: 2,
      },
    ],
  },
];

export function getPaper(id: string): PastPaper | undefined {
  return PAPERS.find((p) => p.id === id);
}

// Group a paper's questions by topic label, sorted by question number.
export function groupByTopic(paper: PastPaper): Map<string, PaperQuestion[]> {
  const m = new Map<string, PaperQuestion[]>();
  for (const q of paper.questions) {
    const arr = m.get(q.topicLabel) ?? [];
    arr.push(q);
    m.set(q.topicLabel, arr);
  }
  // Sort each group by question number
  for (const arr of m.values()) arr.sort((a, b) => a.num - b.num);
  return m;
}
