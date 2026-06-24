// Past PLE Math papers. Phase 2 seed: PLE Math 2018.
// Phase 3 additions: PLE Math 2019, 2020 (representative style).
// Real UNEB papers will be ingested into content/papers/ as our content arrangement formalises.

export interface PaperQuestion {
  num: number;
  q: string;
  choices: string[];
  correct: number;
  why: string;
  topicId: string;
  topicLabel: string;
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
  reviewStatus: "verified" | "draft";
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
    reviewStatus: "verified",
    blurb:
      "A representative selection of PLE-style Mathematics questions covering the 2018 examined themes. Use 'Attempt' mode to practise as a student. Use 'Browse by topic' mode if you are a teacher preparing a worksheet.",
    questions: [
      { num: 1, q: "Work out: 24 + 36 ÷ 4", choices: ["33", "15", "27", "9"], correct: 0, why: "Order of operations: divide first. 36 ÷ 4 = 9. Then 24 + 9 = 33.", topicId: "four-basic-operations", topicLabel: "Numeracy · Operations", marks: 1 },
      { num: 2, q: "Write 'MCMLXXXIV' as a Hindu-Arabic numeral.", choices: ["1984", "1884", "1994", "2084"], correct: 0, why: "M=1000, CM=900, LXXX=80, IV=4. Total = 1984.", topicId: "roman-numerals-mm", topicLabel: "Numeracy · Roman numerals", marks: 1 },
      { num: 3, q: "Find the value of (2/3) + (1/6).", choices: ["5/6", "3/9", "1/2", "3/6"], correct: 0, why: "Common denominator 6: 2/3 = 4/6, plus 1/6 = 5/6.", topicId: "fractions-core", topicLabel: "Numeracy · Fractions", marks: 1 },
      { num: 4, q: "In a class of 50 pupils, 32 like English and 28 like Maths. 15 like both. How many like only English?", choices: ["17", "32", "13", "5"], correct: 0, why: "Only English = 32 − 15 (the overlap) = 17.", topicId: "venn-diagrams-2-events", topicLabel: "Sets · Venn diagrams", marks: 2 },
      { num: 5, q: "From question 4, how many pupils like neither subject?", choices: ["5", "0", "10", "13"], correct: 0, why: "Only English 17, only Maths 13, both 15. At least one = 45. Neither = 50 − 45 = 5.", topicId: "venn-diagrams-2-events", topicLabel: "Sets · Venn diagrams", marks: 2 },
      { num: 6, q: "Round 4,847 to the nearest hundred.", choices: ["4,800", "4,900", "5,000", "4,850"], correct: 0, why: "The tens digit is 4 (less than 5), so we round down. 4,847 → 4,800.", topicId: "numbers-up-to-99-999-999", topicLabel: "Numeracy · Whole numbers", marks: 1 },
      { num: 7, q: "Find the prime factorisation of 60.", choices: ["2 × 2 × 3 × 5", "2 × 30", "4 × 15", "6 × 10"], correct: 0, why: "60 = 2 × 2 × 3 × 5 (all factors must be prime).", topicId: "prime-factorisation", topicLabel: "Numeracy · Prime factorisation", marks: 2 },
      { num: 8, q: "What is 25% of 240?", choices: ["60", "40", "24", "120"], correct: 0, why: "25% = 1/4. One quarter of 240 = 60.", topicId: "proportion-percentages", topicLabel: "Numeracy · Percentages", marks: 1 },
      { num: 9, q: "A trader bought a shirt at UGX 15,000 and sold it for UGX 18,000. Find the profit percentage.", choices: ["20%", "15%", "30%", "3%"], correct: 0, why: "Profit = 18,000 − 15,000 = 3,000. % profit = (3,000 / 15,000) × 100 = 20%.", topicId: "money", topicLabel: "Measurement · Money", marks: 2 },
      { num: 10, q: "Find the perimeter of a rectangle 8 cm long and 5 cm wide.", choices: ["26 cm", "40 cm", "13 cm", "30 cm"], correct: 0, why: "Perimeter of a rectangle = 2(L + W) = 2(8 + 5) = 2 × 13 = 26 cm.", topicId: "perimeter", topicLabel: "Measurement · Perimeter", marks: 2 },
      { num: 11, q: "Find the area of a triangle with base 12 cm and height 5 cm.", choices: ["30 cm²", "60 cm²", "17 cm²", "120 cm²"], correct: 0, why: "Area = (1/2) × base × height = (1/2) × 12 × 5 = 30 cm².", topicId: "area", topicLabel: "Measurement · Area", marks: 2 },
      { num: 12, q: "Convert 14:30 to 12-hour clock.", choices: ["2:30 pm", "2:30 am", "4:30 pm", "12:30 pm"], correct: 0, why: "Subtract 12 from any 24-hour value above 12. 14 − 12 = 2, so it is 2:30 pm.", topicId: "12-24-hour-clocks", topicLabel: "Measurement · Time", marks: 1 },
      { num: 13, q: "Solve for x: 3x + 7 = 22", choices: ["5", "7", "9", "15"], correct: 0, why: "Subtract 7 from both sides: 3x = 15. Divide by 3: x = 5.", topicId: "equations", topicLabel: "Algebra · Equations", marks: 2 },
      { num: 14, q: "If a = 4 and b = 3, find the value of 2a + 5b.", choices: ["23", "17", "15", "12"], correct: 0, why: "2 × 4 + 5 × 3 = 8 + 15 = 23.", topicId: "substitution", topicLabel: "Algebra · Substitution", marks: 2 },
      { num: 15, q: "Find the mean of: 4, 6, 8, 10, 12.", choices: ["8", "10", "40", "6"], correct: 0, why: "Sum = 40. Count = 5. Mean = 40 ÷ 5 = 8.", topicId: "central-tendency-range", topicLabel: "Data · Mean, median, mode", marks: 1 },
      { num: 16, q: "What is the median of: 7, 3, 9, 5, 1?", choices: ["5", "7", "3", "25"], correct: 0, why: "Arrange in order: 1, 3, 5, 7, 9. The middle value is 5.", topicId: "central-tendency-range", topicLabel: "Data · Mean, median, mode", marks: 1 },
      { num: 17, q: "A bag contains 4 red and 6 blue balls. What is the probability of picking a red ball?", choices: ["2/5", "4/6", "2/3", "1/4"], correct: 0, why: "P(red) = 4 / (4 + 6) = 4/10 = 2/5.", topicId: "probability-intro", topicLabel: "Sets · Probability", marks: 2 },
      { num: 18, q: "A car covers 240 km in 4 hours. Find its average speed.", choices: ["60 km/h", "240 km/h", "44 km/h", "120 km/h"], correct: 0, why: "Speed = distance ÷ time = 240 ÷ 4 = 60 km/h.", topicId: "data-handling", topicLabel: "Data · Travel graphs", marks: 2 },
      { num: 19, q: "Find the volume of a cuboid 5 cm long, 4 cm wide and 3 cm high.", choices: ["60 cm³", "12 cm³", "47 cm³", "30 cm³"], correct: 0, why: "Volume = L × W × H = 5 × 4 × 3 = 60 cm³.", topicId: "volume", topicLabel: "Measurement · Volume", marks: 2 },
      { num: 20, q: "Akello had 24 mangoes. She gave 1/3 to her brother and 1/4 of the remainder to her cousin. How many did she give the cousin?", choices: ["4", "6", "8", "2"], correct: 0, why: "1/3 of 24 = 8 (to brother). Remainder = 16. 1/4 of 16 = 4 (to cousin).", topicId: "fractions-core", topicLabel: "Numeracy · Fractions", marks: 2 },
    ],
  },
  {
    id: "ple-math-2019",
    year: 2019,
    examBody: "UNEB",
    paperName: "PLE Mathematics 2019 (representative)",
    durationMinutes: 135,
    totalMarks: 100,
    reviewStatus: "verified",
    blurb:
      "A representative selection of PLE-style Mathematics questions in the 2019 format. Slightly heavier on measurement and data handling than 2018.",
    questions: [
      { num: 1, q: "Round 7,562 to the nearest thousand.", choices: ["8,000", "7,000", "7,500", "7,600"], correct: 0, why: "The hundreds digit is 5, so we round up. 7,562 → 8,000.", topicId: "numbers-up-to-99-999-999", topicLabel: "Numeracy · Whole numbers", marks: 1 },
      { num: 2, q: "Write CDXLIV in Hindu-Arabic.", choices: ["444", "644", "446", "404"], correct: 0, why: "CD = 400, XL = 40, IV = 4. Total = 444.", topicId: "roman-numerals-mm", topicLabel: "Numeracy · Roman numerals", marks: 1 },
      { num: 3, q: "Simplify 4/6 to its lowest terms.", choices: ["2/3", "1/2", "4/6", "8/12"], correct: 0, why: "Divide top and bottom by 2: 2/3.", topicId: "fractions-core", topicLabel: "Numeracy · Fractions", marks: 1 },
      { num: 4, q: "Convert 0.8 to a fraction in its simplest form.", choices: ["4/5", "8/10", "1/8", "80/100"], correct: 0, why: "0.8 = 8/10. Divide top and bottom by 2: 4/5.", topicId: "decimals", topicLabel: "Numeracy · Decimals", marks: 1 },
      { num: 5, q: "In a class of 60, 35 do football and 28 do music. 12 do both. How many do at least one?", choices: ["51", "63", "47", "9"], correct: 0, why: "At least one = 35 + 28 − 12 = 51 (subtract the overlap once).", topicId: "venn-diagrams-2-events", topicLabel: "Sets · Venn diagrams", marks: 2 },
      { num: 6, q: "From question 5, how many do neither?", choices: ["9", "0", "12", "23"], correct: 0, why: "Neither = 60 − 51 = 9.", topicId: "venn-diagrams-2-events", topicLabel: "Sets · Venn diagrams", marks: 2 },
      { num: 7, q: "Find 35% of 200.", choices: ["70", "65", "35", "7"], correct: 0, why: "35% of 200 = (35 × 200) ÷ 100 = 70.", topicId: "proportion-percentages", topicLabel: "Numeracy · Percentages", marks: 2 },
      { num: 8, q: "A radio bought at UGX 90,000 was sold at UGX 108,000. What is the profit percentage?", choices: ["20%", "18%", "16.7%", "12%"], correct: 0, why: "Profit = 18,000. Profit % = (18,000 ÷ 90,000) × 100 = 20%.", topicId: "money", topicLabel: "Measurement · Money", marks: 2 },
      { num: 9, q: "A shirt marked UGX 24,000 is sold at a 25% discount. What is the new price?", choices: ["UGX 18,000", "UGX 20,000", "UGX 6,000", "UGX 30,000"], correct: 0, why: "Discount = 25% of 24,000 = 6,000. New price = 24,000 − 6,000 = 18,000.", topicId: "money", topicLabel: "Measurement · Money", marks: 2 },
      { num: 10, q: "Find the perimeter of a square with side 9 cm.", choices: ["36 cm", "81 cm", "18 cm", "27 cm"], correct: 0, why: "P = 4 × 9 = 36 cm.", topicId: "perimeter", topicLabel: "Measurement · Perimeter", marks: 1 },
      { num: 11, q: "Find the area of a rectangle 15 m by 8 m.", choices: ["120 m²", "23 m²", "46 m²", "120 m"], correct: 0, why: "A = L × W = 15 × 8 = 120 m². Trap: writing m loses a mark.", topicId: "area", topicLabel: "Measurement · Area", marks: 2 },
      { num: 12, q: "A cuboid is 8 cm by 5 cm by 4 cm. Find its volume.", choices: ["160 cm³", "17 cm³", "120 cm³", "40 cm³"], correct: 0, why: "V = L × W × H = 8 × 5 × 4 = 160 cm³.", topicId: "volume", topicLabel: "Measurement · Volume", marks: 2 },
      { num: 13, q: "How many litres are in 8,500 cm³?", choices: ["8.5 litres", "85 litres", "0.85 litres", "850 litres"], correct: 0, why: "1,000 cm³ = 1 litre, so 8,500 cm³ = 8.5 litres.", topicId: "volume", topicLabel: "Measurement · Volume", marks: 1 },
      { num: 14, q: "A bus left Kampala at 07:30 and reached Mbale at 12:15. How long did the journey take?", choices: ["4 hours 45 minutes", "5 hours 15 minutes", "4 hours 15 minutes", "5 hours 45 minutes"], correct: 0, why: "07:30 to 12:30 = 5 hours, so to 12:15 = 4 hours 45 minutes.", topicId: "12-24-hour-clocks", topicLabel: "Measurement · Time", marks: 2 },
      { num: 15, q: "Solve for x: 5x − 4 = 21.", choices: ["5", "4", "6", "17"], correct: 0, why: "Add 4: 5x = 25. Divide by 5: x = 5.", topicId: "equations", topicLabel: "Algebra · Equations", marks: 2 },
      { num: 16, q: "If p = 6 and q = 2, find p² − 3q.", choices: ["30", "32", "12", "0"], correct: 0, why: "p² = 36. 3q = 6. 36 − 6 = 30.", topicId: "substitution", topicLabel: "Algebra · Substitution", marks: 2 },
      { num: 17, q: "Find the range of: 22, 15, 9, 27, 13, 18.", choices: ["18", "15", "27", "12"], correct: 0, why: "Range = max − min = 27 − 9 = 18.", topicId: "central-tendency-range", topicLabel: "Data · Mean, median, mode", marks: 1 },
      { num: 18, q: "The mean of 5 numbers is 14. Four of them are 10, 12, 18, 16. Find the fifth.", choices: ["14", "12", "16", "70"], correct: 0, why: "Total = 5 × 14 = 70. Sum of four = 56. Fifth = 70 − 56 = 14.", topicId: "central-tendency-range", topicLabel: "Data · Mean, median, mode", marks: 2 },
      { num: 19, q: "A box contains 5 red, 3 blue and 2 green balls. What is the probability of picking a green ball?", choices: ["1/5", "2/3", "1/2", "1/10"], correct: 0, why: "P(green) = 2 / (5+3+2) = 2/10 = 1/5.", topicId: "probability-intro", topicLabel: "Sets · Probability", marks: 2 },
      { num: 20, q: "A travel graph shows a car going 90 km in 1 hour 30 minutes. What is the average speed?", choices: ["60 km/h", "90 km/h", "45 km/h", "135 km/h"], correct: 0, why: "1 hour 30 min = 1.5 hours. Speed = 90 ÷ 1.5 = 60 km/h.", topicId: "data-handling", topicLabel: "Data · Travel graphs", marks: 2 },
    ],
  },
  {
    id: "ple-math-2020",
    year: 2020,
    examBody: "UNEB",
    paperName: "PLE Mathematics 2020 (representative)",
    durationMinutes: 135,
    totalMarks: 100,
    reviewStatus: "verified",
    blurb:
      "A representative selection in the 2020 PLE Mathematics style. Notable for more multi-step word problems and a heavier algebra section.",
    questions: [
      { num: 1, q: "Work out: 144 ÷ (8 + 4).", choices: ["12", "22", "18", "17"], correct: 0, why: "Brackets first: 8 + 4 = 12. Then 144 ÷ 12 = 12.", topicId: "four-basic-operations", topicLabel: "Numeracy · Operations", marks: 1 },
      { num: 2, q: "Write 1576 in Roman numerals.", choices: ["MDLXXVI", "MDCLXXVI", "MCDLXXVI", "MDXXVI"], correct: 0, why: "M=1000, D=500, LXX=70, VI=6. Total = 1576 → MDLXXVI.", topicId: "roman-numerals-mm", topicLabel: "Numeracy · Roman numerals", marks: 1 },
      { num: 3, q: "Express 9/12 in lowest terms.", choices: ["3/4", "1/3", "4/3", "9/12"], correct: 0, why: "Divide top and bottom by 3: 3/4.", topicId: "fractions-core", topicLabel: "Numeracy · Fractions", marks: 1 },
      { num: 4, q: "Calculate 2.5 + 1.75.", choices: ["4.25", "4.5", "3.75", "27.5"], correct: 0, why: "Line up the points: 2.50 + 1.75 = 4.25.", topicId: "decimals", topicLabel: "Numeracy · Decimals", marks: 1 },
      { num: 5, q: "What is 0.6 × 0.5?", choices: ["0.30", "0.11", "3.0", "0.030"], correct: 0, why: "6 × 5 = 30. Two decimal places total, so 0.30.", topicId: "decimals", topicLabel: "Numeracy · Decimals", marks: 1 },
      { num: 6, q: "Akello, Mukasa and Kato shared UGX 90,000 in the ratio 2:3:4. How much did Mukasa get?", choices: ["UGX 30,000", "UGX 20,000", "UGX 40,000", "UGX 22,500"], correct: 0, why: "Total parts = 2+3+4 = 9. One part = 90,000 ÷ 9 = 10,000. Mukasa = 3 × 10,000 = 30,000.", topicId: "proportion-percentages", topicLabel: "Numeracy · Proportion", marks: 2 },
      { num: 7, q: "Express 27 out of 75 as a percentage.", choices: ["36%", "27%", "48%", "30%"], correct: 0, why: "(27 ÷ 75) × 100 = 0.36 × 100 = 36%.", topicId: "proportion-percentages", topicLabel: "Numeracy · Percentages", marks: 2 },
      { num: 8, q: "In a class of 45 pupils, 20 like Maths only, 12 like English only and 8 like both. How many like neither?", choices: ["5", "13", "20", "0"], correct: 0, why: "Total liking at least one = 20 + 12 + 8 = 40. Neither = 45 − 40 = 5.", topicId: "venn-diagrams-2-events", topicLabel: "Sets · Venn diagrams", marks: 2 },
      { num: 9, q: "A bookshop bought 50 books at UGX 12,000 each and sold all at UGX 15,000 each. Find the total profit.", choices: ["UGX 150,000", "UGX 750,000", "UGX 3,000", "UGX 600,000"], correct: 0, why: "Profit per book = 3,000. Total profit = 50 × 3,000 = 150,000.", topicId: "money", topicLabel: "Measurement · Money", marks: 2 },
      { num: 10, q: "A jacket marked UGX 80,000 is sold at a 15% discount. What is the selling price?", choices: ["UGX 68,000", "UGX 12,000", "UGX 92,000", "UGX 65,000"], correct: 0, why: "Discount = 15% of 80,000 = 12,000. SP = 80,000 − 12,000 = 68,000.", topicId: "money", topicLabel: "Measurement · Money", marks: 2 },
      { num: 11, q: "The perimeter of a rectangle is 50 cm. Its length is 15 cm. What is its width?", choices: ["10 cm", "35 cm", "5 cm", "20 cm"], correct: 0, why: "2(L + W) = 50 → L + W = 25 → W = 25 − 15 = 10 cm.", topicId: "perimeter", topicLabel: "Measurement · Perimeter", marks: 2 },
      { num: 12, q: "Find the area of a triangle with base 14 cm and height 9 cm.", choices: ["63 cm²", "126 cm²", "23 cm²", "63 cm"], correct: 0, why: "A = (1/2) × b × h = (1/2) × 14 × 9 = 63 cm². Trap: 126 forgets the half.", topicId: "area", topicLabel: "Measurement · Area", marks: 2 },
      { num: 13, q: "A cube has side 5 cm. Find its volume.", choices: ["125 cm³", "25 cm³", "15 cm³", "75 cm³"], correct: 0, why: "V = 5 × 5 × 5 = 125 cm³.", topicId: "volume", topicLabel: "Measurement · Volume", marks: 1 },
      { num: 14, q: "Convert 19:45 to the 12-hour clock.", choices: ["7:45 pm", "9:45 pm", "7:45 am", "9:45 am"], correct: 0, why: "19 > 12, subtract 12: 7, and it is pm. 7:45 pm.", topicId: "12-24-hour-clocks", topicLabel: "Measurement · Time", marks: 1 },
      { num: 15, q: "A train left at 21:50 and arrived at 02:15 the next day. How long did it take?", choices: ["4 hours 25 minutes", "5 hours 25 minutes", "3 hours 25 minutes", "4 hours 65 minutes"], correct: 0, why: "21:50 to 00:00 = 2 hours 10 minutes. 00:00 to 02:15 = 2 hours 15 minutes. Total = 4 hours 25 minutes.", topicId: "12-24-hour-clocks", topicLabel: "Measurement · Time", marks: 2 },
      { num: 16, q: "Solve: 2(x + 3) = 16.", choices: ["5", "8", "10", "13"], correct: 0, why: "Divide both sides by 2: x + 3 = 8. Subtract 3: x = 5.", topicId: "equations", topicLabel: "Algebra · Equations", marks: 2 },
      { num: 17, q: "If a = 5 and b = 2, find 3a − b².", choices: ["11", "13", "14", "21"], correct: 0, why: "3 × 5 = 15. b² = 4. 15 − 4 = 11.", topicId: "substitution", topicLabel: "Algebra · Substitution", marks: 2 },
      { num: 18, q: "Find the median of: 12, 7, 19, 5, 14, 9, 11.", choices: ["11", "12", "9", "14"], correct: 0, why: "Order: 5, 7, 9, 11, 12, 14, 19. Middle (4th) = 11.", topicId: "central-tendency-range", topicLabel: "Data · Mean, median, mode", marks: 2 },
      { num: 19, q: "A bag has 3 red, 4 white and 5 blue balls. What is the probability of NOT picking a red ball?", choices: ["3/4", "1/4", "3/12", "9/12"], correct: 0, why: "P(not red) = (4 + 5) / 12 = 9/12 = 3/4.", topicId: "probability-intro", topicLabel: "Sets · Probability", marks: 2 },
      { num: 20, q: "A motorist travels 180 km at an average speed of 60 km/h. How long does the journey take?", choices: ["3 hours", "120 minutes", "240 minutes", "30 minutes"], correct: 0, why: "Time = distance ÷ speed = 180 ÷ 60 = 3 hours.", topicId: "data-handling", topicLabel: "Data · Travel graphs", marks: 2 },
    ],
  },
];

export function getPaper(id: string): PastPaper | undefined {
  return PAPERS.find((p) => p.id === id);
}

export function groupByTopic(paper: PastPaper): Map<string, PaperQuestion[]> {
  const m = new Map<string, PaperQuestion[]>();
  for (const q of paper.questions) {
    const arr = m.get(q.topicLabel) ?? [];
    arr.push(q);
    m.set(q.topicLabel, arr);
  }
  for (const arr of m.values()) arr.sort((a, b) => a.num - b.num);
  return m;
}
