// Pre-generated PLE Mathematics question bank.
// Used by:
//   - Student "Infinite practice" mode (random sample from a topic's bank)
//   - Teacher "Worksheet generator" (sample N questions across selected topics)
//
// Sources for question patterns: NCDC P7 Mathematics syllabus (2012, still current),
// observed PLE 2014–2023 question structures, and PLE marking scheme conventions.
// All questions are auto-verified by Tendo's review process and open to teacher
// feedback via the Report-a-problem flow.

import type { QuizQuestion } from "./topics";

export type BankQuestion = QuizQuestion & {
  difficulty: "easy" | "medium" | "hard";
};

export interface TopicBank {
  topicId: string;
  topicTitle: string;
  themeName: string;
  questions: BankQuestion[];
}

export const BANK: TopicBank[] = [
  // ────────────────── SETS ──────────────────
  {
    topicId: "venn-diagrams-2-events",
    topicTitle: "Venn diagrams (2 events)",
    themeName: "Sets",
    questions: [
      { q: "In a class of 30, 18 like Maths and 14 like Science. 7 like both. How many like Maths only?", choices: ["7", "18", "11", "25"], correct: 3, why: "Maths only = 18 − 7 = 11.", difficulty: "easy"   },
      { q: "From the same class, how many like neither subject?", choices: ["7", "0", "5", "12"], correct: 3, why: "Liking at least one = 11 + 7 + 7 = 25. Neither = 30 − 25 = 5.", difficulty: "medium"   },
      { q: "50 pupils were asked. 28 like rice, 22 like posho, 12 like both. How many like at least one?", choices: ["62", "50", "38", "12"], correct: 0, why: "28 + 22 − 12 = 38.", difficulty: "medium"   },
      { q: "60 students do football or netball. 40 do football, 25 do netball. How many do both?", choices: ["5", "15", "65", "20"], correct: 0, why: "40 + 25 − both = 60, so both = 5.", difficulty: "medium"   },
      { q: "In a Venn diagram, the region INSIDE both circles represents:", choices: ["Total", "First group only", "Neither group", "Both groups"], correct: 3, why: "The overlap is exactly 'in both'.", difficulty: "easy"   },
      { q: "If 40 pupils like fruits, 22 like mangoes and 25 oranges, with 8 liking both, how many like only mangoes?", choices: ["22", "14", "8", "30"], correct: 1, why: "Only mangoes = 22 − 8 = 14.", difficulty: "easy"   },
      { q: "Out of 80 pupils, 50 play cricket, 30 play hockey, 10 play neither. How many play both?", choices: ["70", "20", "30", "10"], correct: 3, why: "Play at least one = 70. So 50 + 30 − both = 70, both = 10.", difficulty: "hard"   },
      { q: "A school has 100 students. 60 study French, 50 study Kiswahili, 20 study both. How many study only French?", choices: ["40", "60", "20", "80"], correct: 3, why: "Only French = 60 − 20 = 40.", difficulty: "easy"   },
      { q: "From the same school, how many study neither language?", choices: ["30", "20", "10", "0"], correct: 3, why: "At least one = 40 + 30 + 20 = 90. Neither = 100 − 90 = 10.", difficulty: "medium"   },
      { q: "If Group A is a subset of Group B, what does the Venn diagram look like?", choices: ["They are identical", "A is entirely inside B", "They don't touch", "They share only some elements"], correct: 3, why: "Subset means every member of A is also in B, so A sits fully inside B.", difficulty: "medium"   },
      { q: "n(A) = 12, n(B) = 18, n(A ∩ B) = 5. Find n(A ∪ B).", choices: ["15", "30", "25", "35"], correct: 3, why: "n(A ∪ B) = 12 + 18 − 5 = 25.", difficulty: "medium"   },
      { q: "In a survey of 90 people, 55 read newspapers and 40 watch TV. 15 do both. How many do at least one?", choices: ["10", "95", "80", "110"], correct: 0, why: "55 + 40 − 15 = 80.", difficulty: "medium"   },
      { q: "Akello says: 'Set A has 20 members, the overlap with B has 20.' What does this tell us?", choices: ["B is a subset of A", "A is a subset of B", "A and B are equal", "There is no B"], correct: 0, why: "If every member of A is in the overlap, A sits entirely inside B.", difficulty: "hard"   },
      { q: "Out of 25 pupils, 12 like apples only, 8 like bananas only, 3 like both. How many like neither?", choices: ["0", "3", "2", "5"], correct: 1, why: "At least one = 12 + 8 + 3 = 23. Neither = 25 − 23 = 2.", difficulty: "medium"   },
      { q: "If n(A ∪ B) = 40, n(A) = 25, n(B) = 22, find n(A ∩ B).", choices: ["7", "3", "47", "17"], correct: 0, why: "25 + 22 − overlap = 40, so overlap = 7.", difficulty: "hard"   },
    ],
  },

  // ────────────────── ROMAN NUMERALS ──────────────────
  {
    topicId: "roman-numerals-mm",
    topicTitle: "Roman numerals up to MM",
    themeName: "Numeracy · Whole Numbers",
    questions: [
      { q: "What is IX in Hindu-Arabic?", choices: ["10", "11", "9", "4"], correct: 0, why: "IX = 10 − 1 = 9.", difficulty: "easy"   },
      { q: "Write 49 in Roman numerals.", choices: ["VLIV", "IL", "XXXXIX", "XLIX"], correct: 3, why: "49 = 40 (XL) + 9 (IX) = XLIX.", difficulty: "medium"   },
      { q: "What is MMXVI?", choices: ["2106", "1916", "2016", "2026"], correct: 0, why: "MM = 2000, X = 10, VI = 6. Total = 2016.", difficulty: "easy"   },
      { q: "Write 444 in Roman numerals.", choices: ["CDXLIIII", "CCCCXLIV", "CDXLIV", "DXLIV"], correct: 0, why: "400 (CD) + 40 (XL) + 4 (IV) = CDXLIV.", difficulty: "medium"   },
      { q: "Convert XCIX to a number.", choices: ["91", "109", "89", "99"], correct: 2, why: "XC = 90, IX = 9. Total = 99.", difficulty: "medium"   },
      { q: "What is the value of M?", choices: ["10000", "1000", "500", "100"], correct: 3, why: "M = 1000.", difficulty: "easy"   },
      { q: "Write 88 in Roman numerals.", choices: ["XCVIII", "LXXXVIII", "IIC", "LXXXIIX"], correct: 1, why: "80 (LXXX) + 8 (VIII) = LXXXVIII.", difficulty: "medium"   },
      { q: "Which is NOT a valid Roman numeral?", choices: ["MCM", "VL", "XL", "XIV"], correct: 3, why: "V cannot appear in a subtractive pair. 45 is written XLV, not VL.", difficulty: "hard"   },
      { q: "What is DCCLIV?", choices: ["754", "654", "1254", "744"], correct: 2, why: "D=500, CC=200, L=50, IV=4. Total = 754.", difficulty: "medium"   },
      { q: "Write 1500 in Roman numerals.", choices: ["MCM", "MD", "DM", "MID"], correct: 1, why: "M (1000) + D (500) = MD.", difficulty: "easy"   },
      { q: "What is the year 2024 in Roman numerals?", choices: ["MMXXIV", "MMXXIIII", "MMXIV", "MMXIV"], correct: 0, why: "MM (2000) + XX (20) + IV (4) = MMXXIV.", difficulty: "medium"   },
      { q: "Which value is bigger: CDXC or CDIX?", choices: ["They are equal", "CDXC", "CDIX", "Cannot tell"], correct: 2, why: "CDXC = 490, CDIX = 409. So CDXC is bigger.", difficulty: "hard"   },
      { q: "Convert 999 to Roman numerals.", choices: ["DCCCCXCIX", "CMXCIX", "XMIX", "IM"], correct: 3, why: "900 (CM) + 90 (XC) + 9 (IX) = CMXCIX.", difficulty: "hard"   },
      { q: "What is LXIV?", choices: ["64", "66", "54", "44"], correct: 2, why: "L = 50, X = 10, IV = 4. Total = 64.", difficulty: "easy"   },
    ],
  },

  // ────────────────── FRACTIONS ──────────────────
  {
    topicId: "fractions-core",
    topicTitle: "Fractions",
    themeName: "Numeracy · Fractions",
    questions: [
      { q: "Which is larger: 3/4 or 5/8?", choices: ["5/8", "Cannot tell", "Equal", "3/4"], correct: 1, why: "3/4 = 6/8 > 5/8.", difficulty: "easy"   },
      { q: "Calculate 2/3 + 1/4.", choices: ["1/2", "11/12", "3/7", "3/12"], correct: 2, why: "Common denominator 12: 8/12 + 3/12 = 11/12.", difficulty: "medium"   },
      { q: "Subtract: 5/6 − 1/3.", choices: ["1/2", "4/3", "4/6", "1/3"], correct: 2, why: "1/3 = 2/6. So 5/6 − 2/6 = 3/6 = 1/2.", difficulty: "medium"   },
      { q: "Multiply: 2/5 × 3/4.", choices: ["8/15", "6/9", "5/9", "3/10"], correct: 3, why: "(2×3)/(5×4) = 6/20 = 3/10.", difficulty: "medium"   },
      { q: "Divide: 3/4 ÷ 1/2.", choices: ["3/2", "3/8", "1/2", "4/3"], correct: 1, why: "3/4 × 2/1 = 6/4 = 3/2.", difficulty: "medium"   },
      { q: "Simplify 18/24.", choices: ["9/12", "3/4", "2/3", "6/8"], correct: 0, why: "Divide top and bottom by 6: 3/4.", difficulty: "easy"   },
      { q: "What is 2/3 of 45?", choices: ["67", "15", "30", "90"], correct: 2, why: "(2 × 45) ÷ 3 = 90 ÷ 3 = 30.", difficulty: "medium"   },
      { q: "Akello had 24 mangoes. She gave 1/3 to her brother, then 1/4 of the rest to her cousin. How many did she give the cousin?", choices: ["6", "4", "8", "2"], correct: 1, why: "1/3 of 24 = 8. Remainder = 16. 1/4 of 16 = 4.", difficulty: "hard"   },
      { q: "Express 2 3/5 as an improper fraction.", choices: ["23/5", "13/5", "6/5", "10/5"], correct: 3, why: "2 × 5 + 3 = 13. So 13/5.", difficulty: "medium"   },
      { q: "Convert 17/4 to a mixed number.", choices: ["17 1/4", "3 5/4", "4 1/4", "4 3/4"], correct: 3, why: "17 ÷ 4 = 4 remainder 1. So 4 1/4.", difficulty: "medium"   },
      { q: "A tank is 5/8 full. 1/4 of the full tank is added. What fraction is in it now?", choices: ["6/12", "7/8", "5/12", "Full"], correct: 0, why: "1/4 = 2/8. So 5/8 + 2/8 = 7/8.", difficulty: "medium"   },
      { q: "Order from smallest to largest: 1/2, 2/3, 3/4, 5/8.", choices: ["1/2, 5/8, 2/3, 3/4", "1/2, 2/3, 5/8, 3/4", "5/8, 1/2, 3/4, 2/3", "3/4, 2/3, 5/8, 1/2"], correct: 0, why: "Common denominator 24: 12, 15, 16, 18. So 1/2, 5/8, 2/3, 3/4.", difficulty: "hard"  },
      { q: "Mukasa drank 1/3 of a bottle, then his sister drank 1/2 of what was left. What fraction is left in the bottle?", choices: ["1/6", "1/3", "1/2", "2/3"], correct: 1, why: "After Mukasa: 2/3. Sister drinks 1/2 of 2/3 = 1/3. Left = 2/3 − 1/3 = 1/3.", difficulty: "hard"   },
      { q: "What is 1 1/2 + 2 1/4?", choices: ["3 3/4", "3 1/6", "4", "3 2/6"], correct: 0, why: "1 1/2 = 1 2/4. 1 2/4 + 2 1/4 = 3 3/4.", difficulty: "medium"   },
      { q: "Find 3/8 of 64.", choices: ["192", "8", "21", "24"], correct: 1, why: "(3 × 64) ÷ 8 = 192 ÷ 8 = 24.", difficulty: "medium"   },
    ],
  },

  // ────────────────── DECIMALS ──────────────────
  {
    topicId: "decimals",
    topicTitle: "Decimals",
    themeName: "Numeracy · Fractions",
    questions: [
      { q: "What is 3.6 + 0.45?", choices: ["4.5", "4.05", "3.81", "8.1"], correct: 1, why: "Line up the points: 3.60 + 0.45 = 4.05.", difficulty: "easy"   },
      { q: "Work out 0.4 × 0.3.", choices: ["0.012", "0.12", "0.7", "1.2"], correct: 3, why: "4 × 3 = 12. Two decimal places: 0.12.", difficulty: "medium"   },
      { q: "Convert 0.6 to a fraction in simplest form.", choices: ["6/10", "3/5", "60/100", "1/6"], correct: 1, why: "0.6 = 6/10 = 3/5.", difficulty: "easy"   },
      { q: "5 − 1.75 = ?", choices: ["3.75", "3.25", "4.25", "4.75"], correct: 1, why: "5.00 − 1.75 = 3.25.", difficulty: "easy"   },
      { q: "Divide 4.8 ÷ 0.6.", choices: ["48", "8", "80", "0.8"], correct: 3, why: "Move both points one place: 48 ÷ 6 = 8.", difficulty: "medium"   },
      { q: "Order smallest to largest: 0.7, 0.07, 0.77, 0.707.", choices: ["0.07, 0.707, 0.7, 0.77", "0.7, 0.77, 0.707, 0.07", "0.07, 0.7, 0.707, 0.77", "0.7, 0.707, 0.07, 0.77"], correct: 2, why: "Compare digit by digit: 0.07 < 0.7 < 0.707 < 0.77.", difficulty: "hard"  },
      { q: "Convert 0.125 to a fraction in simplest form.", choices: ["1/4", "125/1000", "1/8", "1/2"], correct: 0, why: "125/1000 = 1/8.", difficulty: "medium"   },
      { q: "What is 7.2 ÷ 8?", choices: ["9", "0.9", "0.09", "1.4"], correct: 0, why: "7.2 ÷ 8 = 0.9.", difficulty: "medium"   },
      { q: "Express 3/4 as a decimal.", choices: ["0.34", "0.43", "0.75", "0.7"], correct: 1, why: "3 ÷ 4 = 0.75.", difficulty: "easy"   },
      { q: "What is 2.5 × 4?", choices: ["8.5", "10", "6.5", "100"], correct: 1, why: "2.5 × 4 = 10.", difficulty: "easy"   },
      { q: "Round 4.367 to 2 decimal places.", choices: ["4.37", "4.36", "4.4", "4.366"], correct: 2, why: "Third decimal is 7 (≥5), so round up: 4.37.", difficulty: "medium"   },
      { q: "A pen costs UGX 0.5 of a book. The book costs UGX 3,000. What does the pen cost?", choices: ["UGX 1,000", "UGX 500", "UGX 1,500", "UGX 2,500"], correct: 2, why: "0.5 = 1/2. Half of 3,000 = 1,500.", difficulty: "medium"  },
      { q: "What is 0.25 + 0.5 + 0.125?", choices: ["0.0875", "0.875", "1.5", "0.75"], correct: 0, why: "Line up points: 0.250 + 0.500 + 0.125 = 0.875.", difficulty: "medium"   },
      { q: "Convert 1.6 to a mixed number in simplest form.", choices: ["8/5", "1 6/10", "16/10", "1 3/5"], correct: 0, why: "0.6 = 3/5. So 1.6 = 1 3/5.", difficulty: "medium"   },
      { q: "What is 3 ÷ 0.5?", choices: ["0.6", "1.5", "3.5", "6"], correct: 2, why: "Move points: 30 ÷ 5 = 6.", difficulty: "medium"   },
    ],
  },

  // ────────────────── PERCENTAGES ──────────────────
  {
    topicId: "proportion-percentages",
    topicTitle: "Proportion and percentages",
    themeName: "Numeracy · Fractions",
    questions: [
      { q: "What is 20% of 150?", choices: ["15", "30", "20", "300"], correct: 2, why: "20% = 1/5. 150 ÷ 5 = 30.", difficulty: "easy"   },
      { q: "Express 18 as a percentage of 60.", choices: ["60%", "18%", "30%", "42%"], correct: 2, why: "(18 ÷ 60) × 100 = 30%.", difficulty: "medium"   },
      { q: "A trader bought maize at UGX 80,000 and sold at UGX 100,000. What is the profit percentage?", choices: ["100%", "25%", "80%", "20%"], correct: 3, why: "Profit 20,000. % = (20,000 ÷ 80,000) × 100 = 25%.", difficulty: "medium"   },
      { q: "A dress was UGX 50,000 with 15% discount. New price?", choices: ["UGX 45,000", "UGX 35,000", "UGX 42,500", "UGX 7,500"], correct: 2, why: "Discount = 7,500. 50,000 − 7,500 = 42,500.", difficulty: "medium"  },
      { q: "Convert 3/8 to a percentage.", choices: ["30%", "37.5%", "38%", "24%"], correct: 2, why: "(3/8) × 100 = 37.5%.", difficulty: "medium"   },
      { q: "30% of pupils in a class of 40 are girls. How many boys?", choices: ["12", "28", "30", "10"], correct: 0, why: "Girls = 12. Boys = 40 − 12 = 28.", difficulty: "easy"   },
      { q: "After a 10% pay rise, Mukasa earns UGX 220,000 per week. What was his original pay?", choices: ["UGX 198,000", "UGX 200,000", "UGX 210,000", "UGX 242,000"], correct: 1, why: "New = 110% of original. Original = 220,000 × 100 ÷ 110 = 200,000.", difficulty: "hard"  },
      { q: "Express 45/60 as a percentage.", choices: ["15%", "45%", "75%", "60%"], correct: 3, why: "(45 ÷ 60) × 100 = 75%.", difficulty: "medium"   },
      { q: "What is 12.5% of 800?", choices: ["80", "150", "100", "125"], correct: 0, why: "12.5% = 1/8. 800 ÷ 8 = 100.", difficulty: "medium"   },
      { q: "Convert 0.45 to a percentage.", choices: ["45%", "4.5%", "0.45%", "450%"], correct: 0, why: "0.45 × 100 = 45%.", difficulty: "easy"   },
      { q: "A class of 50 has 20 boys. What percentage are girls?", choices: ["50%", "40%", "60%", "20%"], correct: 3, why: "Girls = 30. (30/50) × 100 = 60%.", difficulty: "medium"   },
      { q: "If 25% of a number is 50, what is the number?", choices: ["12.5", "200", "75", "100"], correct: 1, why: "25% = 1/4, so number = 50 × 4 = 200.", difficulty: "medium"   },
      { q: "A trader makes 15% profit on goods costing UGX 60,000. What is the selling price?", choices: ["UGX 69,000", "UGX 9,000", "UGX 75,000", "UGX 51,000"], correct: 0, why: "Profit = 9,000. SP = 60,000 + 9,000 = 69,000.", difficulty: "hard"  },
      { q: "Mary scored 75% in a test marked out of 80. How many did she get right?", choices: ["55", "60", "75", "80"], correct: 2, why: "75% of 80 = (75 × 80) ÷ 100 = 60.", difficulty: "medium"   },
      { q: "Akello, Mukasa and Kato shared UGX 120,000 in the ratio 1:2:3. How much did Kato get?", choices: ["UGX 20,000", "UGX 40,000", "UGX 60,000", "UGX 30,000"], correct: 2, why: "Total parts = 6. One part = 20,000. Kato = 3 × 20,000 = 60,000.", difficulty: "hard"  },
    ],
  },

  // ────────────────── PERIMETER ──────────────────
  {
    topicId: "perimeter",
    topicTitle: "Perimeter",
    themeName: "Measurement",
    questions: [
      { q: "Perimeter of a rectangle 9 cm × 4 cm?", choices: ["18 cm", "36 cm", "26 cm", "13 cm"], correct: 3, why: "P = 2(9 + 4) = 26 cm.", difficulty: "easy"   },
      { q: "Perimeter of a square with side 7 cm?", choices: ["21 cm", "49 cm", "14 cm", "28 cm"], correct: 0, why: "P = 4 × 7 = 28 cm.", difficulty: "easy"   },
      { q: "A triangle has sides 5 cm, 6 cm, 7 cm. Perimeter?", choices: ["13 cm", "18 cm", "11 cm", "210 cm"], correct: 3, why: "5 + 6 + 7 = 18 cm.", difficulty: "easy"   },
      { q: "Perimeter of a square is 36 cm. Side length?", choices: ["6 cm", "9 cm", "12 cm", "18 cm"], correct: 0, why: "Side = 36 ÷ 4 = 9 cm.", difficulty: "easy"   },
      { q: "Rectangle perimeter 30 m, length 9 m. Width?", choices: ["12 m", "6 m", "3 m", "21 m"], correct: 2, why: "2(L + W) = 30. L + W = 15. W = 6 m.", difficulty: "medium"   },
      { q: "Circumference of a circle, radius 7 cm. Take π = 22/7.", choices: ["49 cm", "22 cm", "44 cm", "154 cm"], correct: 0, why: "C = 2 × (22/7) × 7 = 44 cm.", difficulty: "medium"   },
      { q: "A regular hexagon (6 equal sides) of side 12 m. Perimeter?", choices: ["144 m", "36 m", "60 m", "72 m"], correct: 3, why: "6 × 12 = 72 m.", difficulty: "medium"   },
      { q: "A circle has diameter 14 cm. Find its circumference (π = 22/7).", choices: ["44 cm", "88 cm", "22 cm", "14 cm"], correct: 1, why: "C = π × d = (22/7) × 14 = 44 cm.", difficulty: "medium"   },
      { q: "An equilateral triangle has perimeter 27 cm. Side length?", choices: ["9 cm", "13.5 cm", "3 cm", "27 cm"], correct: 1, why: "All three sides equal: 27 ÷ 3 = 9 cm.", difficulty: "easy"   },
      { q: "Perimeter of a regular pentagon (5 equal sides) of 8 cm?", choices: ["32 cm", "40 cm", "16 cm", "13 cm"], correct: 3, why: "5 × 8 = 40 cm.", difficulty: "easy"   },
      { q: "A rectangular field is 50 m by 30 m. How much wire is needed to fence it round once?", choices: ["160 m", "80 m", "1500 m", "100 m"], correct: 2, why: "P = 2(50 + 30) = 160 m.", difficulty: "medium"   },
      { q: "If you fence it three times round, how much wire is needed?", choices: ["240 m", "160 m", "320 m", "480 m"], correct: 0, why: "Once = 160 m. Three times = 480 m.", difficulty: "medium"   },
      { q: "A square has area 64 cm². Find its perimeter.", choices: ["256 cm", "16 cm", "8 cm", "32 cm"], correct: 0, why: "Side = √64 = 8 cm. Perimeter = 4 × 8 = 32 cm.", difficulty: "hard"   },
      { q: "Perimeter of a rectangle is 50 cm. Length is twice the width. Find length.", choices: ["50/3 ≈ 16.7 cm", "25 cm", "16.7 cm", "Cannot tell"], correct: 3, why: "If W = x, L = 2x. 2(2x + x) = 50 → 6x = 50 → x ≈ 8.33. L = 2x ≈ 16.7 cm.", difficulty: "hard"   },
      { q: "A semicircle has straight side 14 cm. Find its perimeter (π = 22/7).", choices: ["44 cm", "36 cm", "22 cm", "14 cm"], correct: 0, why: "Half circumference = (1/2) × π × d = (1/2) × (22/7) × 14 = 22 cm. Add straight side 14 = 36 cm.", difficulty: "hard"   },
    ],
  },

  // ────────────────── AREA ──────────────────
  {
    topicId: "area",
    topicTitle: "Area",
    themeName: "Measurement",
    questions: [
      { q: "Area of a rectangle 12 cm × 8 cm?", choices: ["96 cm", "96 cm²", "20 cm²", "40 cm²"], correct: 3, why: "A = L × W = 96 cm².", difficulty: "easy"   },
      { q: "Area of a square, side 9 m?", choices: ["18 m²", "81 m²", "36 m²", "81 m"], correct: 2, why: "9 × 9 = 81 m².", difficulty: "easy"   },
      { q: "Triangle base 10 cm, height 6 cm. Area?", choices: ["60 cm²", "30 cm²", "16 cm²", "120 cm²"], correct: 0, why: "(1/2) × 10 × 6 = 30 cm².", difficulty: "medium"   },
      { q: "Rectangle area 48 cm², width 6 cm. Length?", choices: ["8 cm", "42 cm", "12 cm", "16 cm"], correct: 1, why: "L = 48 ÷ 6 = 8 cm.", difficulty: "medium"   },
      { q: "Area of a circle, radius 7 cm (π = 22/7).", choices: ["44 cm²", "154 cm²", "49 cm²", "22 cm²"], correct: 1, why: "(22/7) × 7 × 7 = 154 cm².", difficulty: "medium"   },
      { q: "A square garden has perimeter 40 m. Area?", choices: ["40 m²", "100 m²", "1600 m²", "10 m²"], correct: 0, why: "Side = 10 m. Area = 100 m².", difficulty: "medium"   },
      { q: "L-shape: 10 cm × 4 cm rectangle joined to a 4 cm square. Total area?", choices: ["40 cm²", "60 cm²", "16 cm²", "56 cm²"], correct: 1, why: "40 + 16 = 56 cm².", difficulty: "hard"   },
      { q: "Triangle base 14 cm, height 9 cm. Area?", choices: ["23 cm²", "126 cm²", "63 cm²", "63 cm"], correct: 0, why: "(1/2) × 14 × 9 = 63 cm². Trap: forgetting the half gives 126.", difficulty: "medium"   },
      { q: "A rectangular plot is 25 m × 16 m. Area?", choices: ["400 m²", "82 m²", "41 m²", "200 m²"], correct: 2, why: "25 × 16 = 400 m².", difficulty: "easy"   },
      { q: "A circle has diameter 14 cm. Find its area (π = 22/7).", choices: ["154 cm²", "44 cm²", "22 cm²", "616 cm²"], correct: 0, why: "Radius = 7. Area = (22/7) × 49 = 154 cm².", difficulty: "medium"   },
      { q: "A square field has side 25 m. How many m² of grass?", choices: ["250 m²", "100 m²", "625 m²", "50 m²"], correct: 3, why: "25 × 25 = 625 m².", difficulty: "easy"   },
      { q: "Area of a triangle with base 8 cm and height 5 cm?", choices: ["13 cm²", "40 cm²", "20 cm²", "10 cm²"], correct: 0, why: "(1/2) × 8 × 5 = 20 cm².", difficulty: "easy"   },
      { q: "A rectangular floor is 6 m × 4 m. How many 50 cm × 50 cm tiles are needed?", choices: ["24", "48", "96", "12"], correct: 2, why: "Floor = 24 m² = 240,000 cm². Tile = 2,500 cm². 240,000 ÷ 2,500 = 96.", difficulty: "hard"   },
      { q: "A square has area 144 cm². Find its side.", choices: ["14 cm", "36 cm", "12 cm", "72 cm"], correct: 3, why: "Side = √144 = 12 cm.", difficulty: "medium"   },
      { q: "A triangle has area 50 cm² and base 10 cm. Find the height.", choices: ["20 cm", "5 cm", "25 cm", "10 cm"], correct: 2, why: "Area = (1/2) × b × h → 50 = (1/2) × 10 × h → h = 10 cm.", difficulty: "hard"   },
    ],
  },

  // ────────────────── VOLUME ──────────────────
  {
    topicId: "volume",
    topicTitle: "Volume",
    themeName: "Measurement",
    questions: [
      { q: "Volume of a cuboid 5 × 4 × 3 cm?", choices: ["12 cm³", "47 cm³", "60 cm²", "60 cm³"], correct: 1, why: "5 × 4 × 3 = 60 cm³.", difficulty: "easy"   },
      { q: "Volume of a cube, side 6 cm?", choices: ["216 cm³", "36 cm³", "18 cm³", "12 cm³"], correct: 0, why: "6 × 6 × 6 = 216 cm³.", difficulty: "easy"   },
      { q: "Box V = 240 cm³, L = 10 cm, W = 6 cm. Height?", choices: ["24 cm", "60 cm", "4 cm³", "4 cm"], correct: 2, why: "H = 240 ÷ 60 = 4 cm.", difficulty: "medium"   },
      { q: "How many litres in 5,000 cm³?", choices: ["50 litres", "500 litres", "0.5 litres", "5 litres"], correct: 1, why: "1,000 cm³ = 1 litre. 5,000 cm³ = 5 litres.", difficulty: "easy"   },
      { q: "20 litres = ? cm³.", choices: ["200,000 cm³", "2,000 cm³", "200 cm³", "20,000 cm³"], correct: 3, why: "20 × 1,000 = 20,000 cm³.", difficulty: "medium"  },
      { q: "Swimming pool 25 × 10 × 2 m. Volume?", choices: ["500 m³", "250 m³", "37 m³", "50 m³"], correct: 2, why: "25 × 10 × 2 = 500 m³.", difficulty: "medium"   },
      { q: "How many 2 cm cubes fit in a 6 cm cube?", choices: ["12", "9", "3", "27"], correct: 2, why: "Big = 216 cm³, small = 8 cm³. 216 ÷ 8 = 27.", difficulty: "hard"   },
      { q: "A cuboid 8 × 5 × 4 cm. Volume?", choices: ["160 cm³", "17 cm³", "120 cm³", "40 cm³"], correct: 1, why: "8 × 5 × 4 = 160 cm³.", difficulty: "easy"   },
      { q: "8,500 cm³ in litres?", choices: ["8.5 litres", "85 litres", "0.85 litres", "850 litres"], correct: 3, why: "8,500 ÷ 1,000 = 8.5 litres.", difficulty: "medium"   },
      { q: "A water tank holds 2 m³. How many litres?", choices: ["20,000 litres", "200 litres", "2,000 litres", "20 litres"], correct: 2, why: "1 m³ = 1,000 litres. 2 m³ = 2,000 litres.", difficulty: "medium"  },
      { q: "A cubic box has side 10 cm. Volume in cm³?", choices: ["100 cm³", "1,000 cm³", "300 cm³", "30 cm³"], correct: 1, why: "10 × 10 × 10 = 1,000 cm³.", difficulty: "easy"  },
      { q: "A jerrycan holds 5 litres. How many cm³?", choices: ["50,000 cm³", "500 cm³", "5,000 cm³", "50 cm³"], correct: 2, why: "5 × 1,000 = 5,000 cm³.", difficulty: "easy"  },
      { q: "A cuboid measures 12 × 5 × 4 cm. How many litres does it hold?", choices: ["240 litres", "0.24 litres", "24 litres", "2.4 litres"], correct: 1, why: "V = 240 cm³ = 0.24 litres.", difficulty: "hard"   },
      { q: "A cube has volume 125 cm³. Find its side.", choices: ["25 cm", "5 cm", "11 cm", "15 cm"], correct: 0, why: "Side = ∛125 = 5 cm.", difficulty: "hard"   },
      { q: "A rectangular tank is 1.5 m × 1 m × 1 m. How many litres of water does it hold when full?", choices: ["1,500 litres", "150 litres", "15,000 litres", "15 litres"], correct: 0, why: "V = 1.5 m³ = 1,500 litres.", difficulty: "medium"  },
    ],
  },

  // ────────────────── EQUATIONS ──────────────────
  {
    topicId: "equations",
    topicTitle: "Equations",
    themeName: "Algebra",
    questions: [
      { q: "Solve: x + 7 = 15.", choices: ["7", "22", "8", "15"], correct: 2, why: "x = 15 − 7 = 8.", difficulty: "easy"   },
      { q: "Solve: 3y = 21.", choices: ["18", "63", "24", "7"], correct: 1, why: "y = 21 ÷ 3 = 7.", difficulty: "easy"   },
      { q: "Solve: 2n + 5 = 17.", choices: ["6", "11", "12", "22"], correct: 1, why: "2n = 12, n = 6.", difficulty: "easy"   },
      { q: "Solve: 5m − 8 = 22.", choices: ["6", "14", "2.8", "30"], correct: 0, why: "5m = 30, m = 6.", difficulty: "medium"   },
      { q: "Solve: x/3 = 9.", choices: ["3", "27", "6", "12"], correct: 1, why: "x = 9 × 3 = 27.", difficulty: "easy"   },
      { q: "Sum of a number and 12 is 30. Find the number.", choices: ["2.5", "42", "18", "12"], correct: 3, why: "x + 12 = 30, x = 18.", difficulty: "easy"   },
      { q: "Three times a number plus 4 equals 25. Find the number.", choices: ["21", "8.67", "29", "7"], correct: 1, why: "3x + 4 = 25, 3x = 21, x = 7.", difficulty: "medium"   },
      { q: "Solve: 4x − 9 = 11.", choices: ["5", "0.5", "20", "2.75"], correct: 1, why: "4x = 20, x = 5.", difficulty: "medium"   },
      { q: "Solve: 2(x + 3) = 16.", choices: ["5", "8", "10", "13"], correct: 0, why: "x + 3 = 8, x = 5.", difficulty: "medium"   },
      { q: "Solve: 3(x − 2) = 12.", choices: ["10", "4", "6", "14"], correct: 2, why: "x − 2 = 4, x = 6.", difficulty: "medium"   },
      { q: "A number doubled and then increased by 5 gives 19. Find the number.", choices: ["12", "9.5", "7", "8"], correct: 1, why: "2x + 5 = 19, 2x = 14, x = 7.", difficulty: "medium"   },
      { q: "Akello is x years old. Her brother is 3 years older. Together they are 25. Find x.", choices: ["8", "12", "11", "14"], correct: 3, why: "x + (x + 3) = 25, 2x = 22, x = 11.", difficulty: "hard"   },
      { q: "Solve: 7x = 49.", choices: ["42", "7", "56", "1/7"], correct: 0, why: "x = 7.", difficulty: "easy"   },
      { q: "Solve: x − 8 = 15.", choices: ["7", "120", "-7", "23"], correct: 1, why: "x = 15 + 8 = 23.", difficulty: "easy"   },
      { q: "Solve: 6x + 4 = 5x + 10.", choices: ["1.4", "14", "6", "-6"], correct: 2, why: "6x − 5x = 10 − 4, x = 6.", difficulty: "hard"   },
    ],
  },

  // ────────────────── SUBSTITUTION ──────────────────
  {
    topicId: "substitution",
    topicTitle: "Substitution",
    themeName: "Algebra",
    questions: [
      { q: "x = 5. Find 3x + 2.", choices: ["17", "15", "10", "30"], correct: 2, why: "15 + 2 = 17.", difficulty: "easy"   },
      { q: "a = 6, b = 2. Find a − b.", choices: ["12", "4", "8", "3"], correct: 2, why: "6 − 2 = 4.", difficulty: "easy"   },
      { q: "p = 4. Find p².", choices: ["2", "8", "16", "12"], correct: 2, why: "4 × 4 = 16.", difficulty: "easy"   },
      { q: "m = 3, n = 5. Find 2m + 3n.", choices: ["16", "21", "30", "15"], correct: 1, why: "6 + 15 = 21.", difficulty: "medium"   },
      { q: "x = 10, y = 4. Find xy.", choices: ["40", "14", "6", "2.5"], correct: 1, why: "10 × 4 = 40.", difficulty: "easy"   },
      { q: "a = 7. Find 2(a + 3).", choices: ["17", "13", "20", "10"], correct: 1, why: "2 × 10 = 20.", difficulty: "medium"   },
      { q: "k = 5. Find 30 ÷ k − 2.", choices: ["6", "4", "8", "0"], correct: 1, why: "30 ÷ 5 = 6, then 6 − 2 = 4.", difficulty: "medium"   },
      { q: "p = 6, q = 2. Find p² − 3q.", choices: ["32", "0", "12", "30"], correct: 1, why: "36 − 6 = 30.", difficulty: "medium"   },
      { q: "a = 5, b = 2. Find 3a − b².", choices: ["13", "21", "14", "11"], correct: 1, why: "15 − 4 = 11.", difficulty: "medium"   },
      { q: "x = 4, y = 3. Find 2(x + y).", choices: ["14", "10", "7", "11"], correct: 3, why: "2 × 7 = 14.", difficulty: "medium"   },
      { q: "m = 8. Find m² ÷ 4.", choices: ["8", "2", "16", "32"], correct: 2, why: "64 ÷ 4 = 16.", difficulty: "medium"   },
      { q: "a = 3, b = 5, c = 2. Find a + b × c.", choices: ["20", "16", "13", "30"], correct: 2, why: "Multiply first: 5 × 2 = 10. Then 3 + 10 = 13.", difficulty: "hard"   },
      { q: "x = 2. Find x³ + x.", choices: ["10", "8", "6", "12"], correct: 2, why: "8 + 2 = 10.", difficulty: "medium"   },
      { q: "p = 9, q = 3. Find p ÷ q + q.", choices: ["3", "12", "9", "6"], correct: 3, why: "9 ÷ 3 = 3, then 3 + 3 = 6.", difficulty: "medium"   },
      { q: "If a = −2, find 3a + 5.", choices: ["1", "11", "−1", "−11"], correct: 1, why: "3 × (−2) = −6. −6 + 5 = −1.", difficulty: "hard"   },
    ],
  },

  // ────────────────── MEAN/MEDIAN/MODE/RANGE ──────────────────
  {
    topicId: "central-tendency-range",
    topicTitle: "Mean, median, mode and range",
    themeName: "Data",
    questions: [
      { q: "Find the mean of: 4, 6, 8, 10, 12.", choices: ["10", "6", "40", "8"], correct: 1, why: "Sum = 40, ÷ 5 = 8.", difficulty: "easy"   },
      { q: "Median of: 7, 3, 9, 5, 1?", choices: ["5", "7", "3", "25"], correct: 0, why: "Order: 1,3,5,7,9. Middle = 5.", difficulty: "easy"   },
      { q: "Mode of: 2, 3, 3, 5, 7, 3, 5?", choices: ["3", "5", "2", "4"], correct: 2, why: "3 appears 3 times.", difficulty: "easy"   },
      { q: "Range of: 14, 9, 22, 17, 11?", choices: ["13", "22", "9", "73"], correct: 1, why: "22 − 9 = 13.", difficulty: "easy"   },
      { q: "Mean of 4 numbers is 12. Three are 10, 11, 15. Find the fourth.", choices: ["13", "9", "12", "48"], correct: 0, why: "Total = 48. Sum of three = 36. Fourth = 12.", difficulty: "hard"   },
      { q: "Median of: 2, 4, 6, 8?", choices: ["6", "4", "5", "4.5"], correct: 0, why: "Even count: (4+6)/2 = 5.", difficulty: "medium"   },
      { q: "Which two are modes of: 8, 8, 9, 10, 10?", choices: ["8 and 10", "9 only", "10 only", "8, 9, 10"], correct: 0, why: "Both 8 and 10 appear twice.", difficulty: "medium"  },
      { q: "Find the mean of: 15, 20, 25, 30, 10.", choices: ["100", "25", "15", "20"], correct: 2, why: "Sum = 100, ÷ 5 = 20.", difficulty: "easy"   },
      { q: "Range of: 100, 45, 78, 32, 91?", choices: ["32", "100", "68", "346"], correct: 2, why: "100 − 32 = 68.", difficulty: "easy"   },
      { q: "Median of: 11, 7, 15, 9, 13, 5, 17?", choices: ["15", "11", "13", "9"], correct: 3, why: "Order: 5,7,9,11,13,15,17. Middle = 11.", difficulty: "medium"   },
      { q: "Five marks add to 80. What is the mean?", choices: ["40", "80", "5", "16"], correct: 0, why: "Mean = 80 ÷ 5 = 16.", difficulty: "easy"   },
      { q: "Mean of 6 numbers is 15. What is their total?", choices: ["2.5", "21", "90", "9"], correct: 3, why: "Total = mean × count = 15 × 6 = 90.", difficulty: "medium"   },
      { q: "The mode of 4, 5, 6, 4, 7, 4, 5 is?", choices: ["7", "4", "6", "5"], correct: 3, why: "4 appears 3 times, more than any other.", difficulty: "easy"   },
      { q: "If a class scored: 60, 70, 80, 90, what was the range?", choices: ["30", "75", "300", "20"], correct: 2, why: "90 − 60 = 30.", difficulty: "easy"   },
      { q: "Mean of 5 numbers is 20. If 4 of them are 15, 18, 22, 25, find the fifth.", choices: ["20", "100", "80", "25"], correct: 2, why: "Total = 100. Sum of four = 80. Fifth = 20.", difficulty: "hard"   },
    ],
  },

  // ────────────────── TIME (12/24 HOUR) ──────────────────
  {
    topicId: "12-24-hour-clocks",
    topicTitle: "12-hour and 24-hour clocks",
    themeName: "Measurement · Time",
    questions: [
      { q: "Convert 2:30 pm to 24-hour clock.", choices: ["16:30", "02:30", "14:30", "12:30"], correct: 3, why: "PM: add 12. 2 + 12 = 14.", difficulty: "easy"   },
      { q: "Convert 21:15 to 12-hour clock.", choices: ["9:15 pm", "11:15 pm", "9:15 am", "1:15 pm"], correct: 2, why: "21 − 12 = 9, pm. So 9:15 pm.", difficulty: "easy"   },
      { q: "What is 12 noon in 24-hour time?", choices: ["00:00", "12:00", "24:00", "12:00 pm"], correct: 0, why: "12 noon = 12:00. Midnight = 00:00.", difficulty: "easy"   },
      { q: "Class 08:15 to 11:00. Duration?", choices: ["3 hours 45 minutes", "2 hours 45 minutes", "2 hours 15 minutes", "3 hours 15 minutes"], correct: 3, why: "08:15 to 11:15 is 3 hours, so to 11:00 is 2 h 45 min.", difficulty: "medium"   },
      { q: "Train 18:50 to 21:35. Duration?", choices: ["2 hours 15 minutes", "2 hours 45 minutes", "3 hours 15 minutes", "3 hours 45 minutes"], correct: 2, why: "2 h to 20:50, then 45 min. Total = 2 h 45 min.", difficulty: "medium"   },
      { q: "Express 11:45 pm in 24-hour time.", choices: ["00:45", "11:45", "13:45", "23:45"], correct: 0, why: "PM, 11 + 12 = 23. So 23:45.", difficulty: "easy"   },
      { q: "Bus 21:50 to 02:15 next day. Duration?", choices: ["5 hours 25 minutes", "4 hours 25 minutes", "3 hours 25 minutes", "4 hours 65 minutes"], correct: 1, why: "21:50 to 00:00 = 2 h 10 min. 00:00 to 02:15 = 2 h 15 min. Total = 4 h 25 min.", difficulty: "hard"   },
      { q: "Convert 19:45 to 12-hour.", choices: ["9:45 am", "9:45 pm", "7:45 pm", "7:45 am"], correct: 3, why: "19 − 12 = 7, pm.", difficulty: "easy"   },
      { q: "Convert 7:30 am to 24-hour.", choices: ["0730", "19:30", "7:30", "07:30"], correct: 0, why: "AM hour pads to 07:30.", difficulty: "easy"   },
      { q: "What time is 3 hours after 22:30?", choices: ["00:30", "25:30", "19:30", "01:30"], correct: 3, why: "22:30 + 1:30 = 00:00, + 1:30 = 01:30.", difficulty: "medium"   },
      { q: "How many minutes from 09:15 to 10:00?", choices: ["55 minutes", "45 minutes", "15 minutes", "85 minutes"], correct: 3, why: "60 − 15 = 45 minutes.", difficulty: "easy"   },
      { q: "A film starts at 14:20 and lasts 1 hour 50 minutes. When does it end?", choices: ["15:50", "15:10", "16:10", "16:30"], correct: 3, why: "14:20 + 1:00 = 15:20. + 50 min = 16:10.", difficulty: "medium"   },
      { q: "Convert 00:30 to 12-hour.", choices: ["12:30 pm", "00:30 am", "0:30 am", "12:30 am"], correct: 1, why: "00:30 is 30 minutes past midnight = 12:30 am.", difficulty: "medium"   },
      { q: "Akello sleeps at 21:45 and wakes at 06:15. How long does she sleep?", choices: ["9 hours", "8 hours", "8 hours 30 minutes", "7 hours 30 minutes"], correct: 1, why: "21:45 to 00:00 = 2 h 15 min. 00:00 to 06:15 = 6 h 15 min. Total = 8 h 30 min.", difficulty: "hard"   },
      { q: "Three trains arrive at 06:50, 09:25 and 11:40. Interval between first and last?", choices: ["4 hours 30 minutes", "5 hours", "5 hours 50 minutes", "4 hours 50 minutes"], correct: 3, why: "06:50 to 11:40: 4 h to 10:50, then 50 min more = 4 h 50 min.", difficulty: "hard"   },
    ],
  },

  // ────────────────── MONEY ──────────────────
  {
    topicId: "money",
    topicTitle: "Money (profit, loss, discount)",
    themeName: "Measurement · Money",
    questions: [
      { q: "Bought UGX 8,000, sold UGX 10,000. Profit?", choices: ["UGX 2,000", "UGX 18,000", "UGX 1,250", "UGX 800"], correct: 0, why: "10,000 − 8,000 = 2,000.", difficulty: "easy"  },
      { q: "Bought sugar UGX 4,000/kg, sold UGX 4,800/kg. Profit %?", choices: ["20%", "16.7%", "80%", "8%"], correct: 1, why: "Profit 800. (800 ÷ 4,000) × 100 = 20%.", difficulty: "medium"   },
      { q: "Shirt UGX 30,000, 10% discount. Pay?", choices: ["UGX 3,000", "UGX 33,000", "UGX 27,000", "UGX 20,000"], correct: 2, why: "Discount 3,000. 30,000 − 3,000 = 27,000.", difficulty: "easy"  },
      { q: "Bought UGX 50,000, sold UGX 40,000. Loss %?", choices: ["20%", "25%", "10%", "80%"], correct: 2, why: "Loss 10,000. (10,000 ÷ 50,000) × 100 = 20%.", difficulty: "medium"   },
      { q: "Buy 3 get 1 free, pens UGX 2,000 each. Effective discount %?", choices: ["25%", "33%", "50%", "75%"], correct: 0, why: "4 for 6,000 instead of 8,000. Save 2,000 of 8,000 = 25%.", difficulty: "hard"   },
      { q: "Simple interest: 5% per year on UGX 200,000 for 3 years?", choices: ["UGX 15,000", "UGX 10,000", "UGX 60,000", "UGX 30,000"], correct: 3, why: "Per year 10,000. × 3 = 30,000.", difficulty: "medium"  },
      { q: "Sold basket UGX 18,000 at loss of 2,000. Cost?", choices: ["UGX 16,000", "UGX 20,000", "UGX 36,000", "UGX 2,000"], correct: 1, why: "CP = SP + Loss = 20,000.", difficulty: "medium"  },
      { q: "Jacket marked UGX 80,000, 15% discount. SP?", choices: ["UGX 92,000", "UGX 12,000", "UGX 68,000", "UGX 65,000"], correct: 2, why: "Discount 12,000. SP = 68,000.", difficulty: "medium"  },
      { q: "Bought 50 books at UGX 12,000 each, sold all at UGX 15,000. Total profit?", choices: ["UGX 150,000", "UGX 750,000", "UGX 3,000", "UGX 600,000"], correct: 0, why: "Profit per book 3,000. × 50 = 150,000.", difficulty: "medium"  },
      { q: "Radio bought UGX 90,000, sold UGX 108,000. Profit %?", choices: ["12%", "18%", "20%", "16.7%"], correct: 3, why: "Profit 18,000. (18,000 ÷ 90,000) × 100 = 20%.", difficulty: "medium"   },
      { q: "An item makes 20% profit when sold at UGX 60,000. Find the cost price.", choices: ["UGX 12,000", "UGX 48,000", "UGX 72,000", "UGX 50,000"], correct: 3, why: "SP = 120% of CP. CP = 60,000 × 100/120 = 50,000.", difficulty: "hard"  },
      { q: "Bought 10 kg of rice at UGX 3,500/kg and sold all at UGX 4,000/kg. Total profit?", choices: ["UGX 5,000", "UGX 500", "UGX 35,000", "UGX 40,000"], correct: 0, why: "Profit per kg 500. × 10 = 5,000.", difficulty: "medium"  },
      { q: "A car costs UGX 8,000,000. 25% deposit. Deposit amount?", choices: ["UGX 2,000,000", "UGX 6,000,000", "UGX 800,000", "UGX 200,000"], correct: 0, why: "25% = 1/4. 8,000,000 ÷ 4 = 2,000,000.", difficulty: "medium"  },
      { q: "After a 12% loss, a phone was sold at UGX 220,000. Find the cost price.", choices: ["UGX 232,000", "UGX 250,000", "UGX 200,000", "UGX 246,400"], correct: 1, why: "SP = 88% of CP. CP = 220,000 × 100/88 = 250,000.", difficulty: "hard"  },
      { q: "Simple interest of UGX 36,000 on UGX 240,000 over 2 years. Find the rate.", choices: ["30%", "7.5%", "5%", "15%"], correct: 3, why: "I = (P × R × T)/100. 36,000 = (240,000 × R × 2)/100. R = 7.5%.", difficulty: "hard"   },
    ],
  },
];

// ─────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────

export function getBank(topicId: string): TopicBank | undefined {
  return BANK.find((b) => b.topicId === topicId);
}

export function listBankTopics(): Array<{ topicId: string; topicTitle: string; themeName: string; count: number }> {
  return BANK.map((b) => ({
    topicId: b.topicId,
    topicTitle: b.topicTitle,
    themeName: b.themeName,
    count: b.questions.length,
  }));
}

/** Fisher-Yates shuffle. Pure, no global state. */
export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Pick N questions from a topic, randomised. If N exceeds the bank, returns the whole bank shuffled. */
export function sampleFromTopic(topicId: string, n: number): BankQuestion[] {
  const bank = getBank(topicId);
  if (!bank) return [];
  return shuffle(bank.questions).slice(0, Math.min(n, bank.questions.length));
}

/** Sample N questions across multiple topics, mixed and randomised. */
export function sampleAcrossTopics(topicIds: string[], n: number): Array<BankQuestion & { topicTitle: string; topicId: string }> {
  const pool: Array<BankQuestion & { topicTitle: string; topicId: string }> = [];
  for (const tid of topicIds) {
    const b = getBank(tid);
    if (!b) continue;
    for (const q of b.questions) {
      pool.push({ ...q, topicId: b.topicId, topicTitle: b.topicTitle });
    }
  }
  return shuffle(pool).slice(0, Math.min(n, pool.length));
}

export function totalBankQuestions(): number {
  return BANK.reduce((sum, b) => sum + b.questions.length, 0);
}
