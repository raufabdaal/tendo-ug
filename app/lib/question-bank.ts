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
import { SCIENCE_TOPICS } from "./science-topics";

export type BankQuestion = QuizQuestion & {
  difficulty: "easy" | "medium" | "hard";
};

export type SubjectId = "mathematics" | "science";
export type SubjectName = "Mathematics" | "Integrated Science";

export interface TopicBank {
  topicId: string;
  topicTitle: string;
  themeName: string;
  subjectId: SubjectId;
  subjectName: SubjectName;
  questions: BankQuestion[];
}

type TopicBankSeed = Omit<TopicBank, "subjectId" | "subjectName">;

export const BANK: TopicBankSeed[] = [
  // ────────────────── SETS ──────────────────
  {
    topicId: "venn-diagrams-2-events",
    topicTitle: "Venn diagrams (2 events)",
    themeName: "Sets",
    questions: [
      { q: "In a class of 30, 18 like Maths and 14 like Science. 7 like both. How many like Maths only?", choices: ["7", "18", "11", "25"], correct: 2, why: "Maths only means those in Maths but not in both. So 18 − 7 = 11.", difficulty: "easy" },
      { q: "From the same class, how many like neither subject?", choices: ["7", "0", "5", "12"], correct: 2, why: "Maths only = 11 and Science only = 14 − 7 = 7. At least one = 11 + 7 + 7 = 25, so neither = 30 − 25 = 5.", difficulty: "medium" },
      { q: "50 pupils were asked. 28 like rice, 22 like posho, 12 like both. How many like at least one?", choices: ["62", "50", "38", "12"], correct: 2, why: "Number who like at least one = 28 + 22 − 12 = 38.", difficulty: "medium" },
      { q: "60 students do football or netball. 40 do football, 25 do netball. How many do both?", choices: ["5", "15", "65", "20"], correct: 0, why: "Use 40 + 25 − both = 60. So both = 65 − 60 = 5.", difficulty: "medium" },
      { q: "In a Venn diagram, the region inside both circles represents:", choices: ["Total", "First group only", "Neither group", "Both groups"], correct: 3, why: "The overlap shows the members that belong to both groups.", difficulty: "easy" },
      { q: "If 40 pupils like fruits, 22 like mangoes and 25 like oranges, with 8 liking both, how many like only mangoes?", choices: ["22", "14", "8", "30"], correct: 1, why: "Only mangoes = 22 − 8 = 14.", difficulty: "easy" },
      { q: "Out of 80 pupils, 50 play cricket, 30 play hockey, 10 play neither. How many play both?", choices: ["70", "20", "30", "10"], correct: 3, why: "If 10 play neither, then 70 play at least one. So 50 + 30 − both = 70, giving both = 10.", difficulty: "hard" },
      { q: "A school has 100 students. 60 study French, 50 study Kiswahili, 20 study both. How many study only French?", choices: ["40", "60", "20", "80"], correct: 0, why: "Only French = 60 − 20 = 40.", difficulty: "easy" },
      { q: "From the same school, how many study neither language?", choices: ["30", "20", "10", "0"], correct: 2, why: "French only = 40 and Kiswahili only = 30. At least one = 40 + 20 + 30 = 90, so neither = 100 − 90 = 10.", difficulty: "medium" },
      { q: "If Group A is a subset of Group B, what does the Venn diagram look like?", choices: ["They are identical", "A is entirely inside B", "They don't touch", "They share only some elements"], correct: 1, why: "If A is a subset of B, every member of A is also in B, so A lies completely inside B.", difficulty: "medium" },
      { q: "n(A) = 12, n(B) = 18, n(A ∩ B) = 5. Find n(A ∪ B).", choices: ["15", "30", "25", "35"], correct: 2, why: "Use n(A ∪ B) = n(A) + n(B) − n(A ∩ B) = 12 + 18 − 5 = 25.", difficulty: "medium" },
      { q: "In a survey of 90 people, 55 read newspapers and 40 watch TV. 15 do both. How many do at least one?", choices: ["10", "95", "80", "110"], correct: 2, why: "People who do at least one = 55 + 40 − 15 = 80.", difficulty: "medium" },
      { q: "Akello says: 'Set A has 20 members, the overlap with B has 20.' What does this tell us?", choices: ["B is a subset of A", "A is a subset of B", "A and B are equal", "There is no B"], correct: 1, why: "If all 20 members of A are in the overlap, then every member of A is also in B. So A is a subset of B.", difficulty: "hard" },
      { q: "Out of 25 pupils, 12 like apples only, 8 like bananas only, 3 like both. How many like neither?", choices: ["0", "3", "2", "5"], correct: 2, why: "At least one = 12 + 8 + 3 = 23. Therefore neither = 25 − 23 = 2.", difficulty: "medium" },
      { q: "If n(A ∪ B) = 40, n(A) = 25, n(B) = 22, find n(A ∩ B).", choices: ["7", "3", "47", "17"], correct: 0, why: "25 + 22 − overlap = 40, so overlap = 47 − 40 = 7.", difficulty: "hard" },
    ],
  },

  // ────────────────── ROMAN NUMERALS ──────────────────
  {
    topicId: "roman-numerals-mm",
    topicTitle: "Roman numerals up to MM",
    themeName: "Numeracy · Whole Numbers",
    questions: [
      { q: "What is IX in Hindu-Arabic?", choices: ["10", "11", "9", "4"], correct: 2, why: "IX means 10 − 1, so the value is 9.", difficulty: "easy" },
      { q: "Write 49 in Roman numerals.", choices: ["VLIV", "IL", "XXXXIX", "XLIX"], correct: 3, why: "49 = 40 + 9. In Roman numerals, 40 = XL and 9 = IX, so 49 = XLIX.", difficulty: "medium" },
      { q: "What is MMXVI?", choices: ["2106", "1916", "2016", "2026"], correct: 2, why: "MM = 2000, X = 10 and VI = 6. Total = 2016.", difficulty: "easy" },
      { q: "Write 444 in Roman numerals.", choices: ["CDXLIIII", "CCCCXLIV", "CDXLIV", "DXLIV"], correct: 2, why: "444 = 400 + 40 + 4. That is CD + XL + IV = CDXLIV.", difficulty: "medium" },
      { q: "Convert XCIX to a number.", choices: ["91", "109", "89", "99"], correct: 3, why: "XC = 90 and IX = 9. So XCIX = 99.", difficulty: "medium" },
      { q: "What is the value of M?", choices: ["10000", "1000", "500", "100"], correct: 1, why: "The Roman numeral M stands for 1000.", difficulty: "easy" },
      { q: "Write 88 in Roman numerals.", choices: ["XCVIII", "LXXXVIII", "IIC", "LXXXIIX"], correct: 1, why: "88 = 80 + 8. 80 = LXXX and 8 = VIII, so 88 = LXXXVIII.", difficulty: "medium" },
      { q: "Which is NOT a valid Roman numeral?", choices: ["MCM", "VL", "XL", "XIV"], correct: 1, why: "VL is not valid. 45 is written XLV, and V is not used in this subtractive way.", difficulty: "hard" },
      { q: "What is DCCLIV?", choices: ["754", "654", "1254", "744"], correct: 0, why: "D = 500, CC = 200, L = 50 and IV = 4. Total = 754.", difficulty: "medium" },
      { q: "Write 1500 in Roman numerals.", choices: ["MCM", "MD", "DM", "MID"], correct: 1, why: "1500 = 1000 + 500, so it is written as MD.", difficulty: "easy" },
      { q: "What is the year 2024 in Roman numerals?", choices: ["MMXXIV", "MMXXIIII", "MMXIV", "MMXIX"], correct: 0, why: "2024 = 2000 + 20 + 4, so it is MM + XX + IV = MMXXIV.", difficulty: "medium" },
      { q: "Which value is bigger: CDXC or CDIX?", choices: ["They are equal", "CDXC", "CDIX", "Cannot tell"], correct: 1, why: "CDXC = 490 while CDIX = 409, so CDXC is bigger.", difficulty: "hard" },
      { q: "Convert 999 to Roman numerals.", choices: ["DCCCCXCIX", "CMXCIX", "XMIX", "IM"], correct: 1, why: "999 = 900 + 90 + 9, so it is CM + XC + IX = CMXCIX.", difficulty: "hard" },
      { q: "What is LXIV?", choices: ["64", "66", "54", "44"], correct: 0, why: "LXIV = 50 + 10 + 4 = 64.", difficulty: "easy" },
      { q: "Write 90 in Roman numerals.", choices: ["XC", "LC", "IC", "LXXXX"], correct: 0, why: "90 is written as XC, which means 100 − 10.", difficulty: "medium" },
    ],
  },

  // ────────────────── FRACTIONS ──────────────────
  {
    topicId: "fractions-core",
    topicTitle: "Fractions",
    themeName: "Numeracy · Fractions",
    questions: [
      { q: "Which is larger: 3/4 or 5/8?", choices: ["5/8", "Cannot tell", "Equal", "3/4"], correct: 3, why: "Change 3/4 to eighths: 3/4 = 6/8. Since 6/8 is greater than 5/8, 3/4 is larger.", difficulty: "easy" },
      { q: "Calculate 2/3 + 1/4.", choices: ["1/2", "11/12", "3/7", "3/12"], correct: 1, why: "Use denominator 12. 2/3 = 8/12 and 1/4 = 3/12. Then 8/12 + 3/12 = 11/12.", difficulty: "medium" },
      { q: "Subtract: 5/6 − 1/3.", choices: ["1/2", "4/3", "4/6", "1/3"], correct: 0, why: "Change 1/3 to 2/6. Then 5/6 − 2/6 = 3/6, which simplifies to 1/2.", difficulty: "medium" },
      { q: "Multiply: 2/5 × 3/4.", choices: ["8/15", "6/9", "5/9", "3/10"], correct: 3, why: "Multiply the numerators and denominators: 2 × 3 = 6 and 5 × 4 = 20. So 6/20 = 3/10.", difficulty: "medium" },
      { q: "Divide: 3/4 ÷ 1/2.", choices: ["3/2", "3/8", "1/2", "4/3"], correct: 0, why: "Turn 1/2 upside down and multiply: 3/4 × 2/1 = 6/4 = 3/2.", difficulty: "medium" },
      { q: "Simplify 18/24.", choices: ["9/12", "3/4", "2/3", "6/8"], correct: 1, why: "Divide top and bottom by 6: 18 ÷ 6 = 3 and 24 ÷ 6 = 4. So the simplest form is 3/4.", difficulty: "easy" },
      { q: "What is 2/3 of 45?", choices: ["67", "15", "30", "90"], correct: 2, why: "2/3 of 45 means (2 × 45) ÷ 3 = 90 ÷ 3 = 30.", difficulty: "medium" },
      { q: "Akello had 24 mangoes. She gave 1/3 to her brother, then 1/4 of the rest to her cousin. How many did she give the cousin?", choices: ["6", "4", "8", "2"], correct: 1, why: "First find 1/3 of 24, which is 8. The remainder is 16. Then 1/4 of 16 = 4, so she gave her cousin 4 mangoes.", difficulty: "hard" },
      { q: "Express 2 3/5 as an improper fraction.", choices: ["23/5", "13/5", "6/5", "10/5"], correct: 1, why: "Multiply the whole number by the denominator, then add the numerator: 2 × 5 + 3 = 13. So the fraction is 13/5.", difficulty: "medium" },
      { q: "Convert 17/4 to a mixed number.", choices: ["17 1/4", "3 5/4", "4 1/4", "4 3/4"], correct: 2, why: "17 ÷ 4 = 4 remainder 1. So 17/4 = 4 1/4.", difficulty: "medium" },
      { q: "A tank is 5/8 full. 1/4 of the full tank is added. What fraction is in it now?", choices: ["6/12", "7/8", "5/12", "Full"], correct: 1, why: "Change 1/4 to eighths: 1/4 = 2/8. Then 5/8 + 2/8 = 7/8.", difficulty: "medium" },
      { q: "Order from smallest to largest: 1/2, 2/3, 3/4, 5/8.", choices: ["1/2, 5/8, 2/3, 3/4", "1/2, 2/3, 5/8, 3/4", "5/8, 1/2, 3/4, 2/3", "3/4, 2/3, 5/8, 1/2"], correct: 0, why: "Use denominator 24: 1/2 = 12/24, 5/8 = 15/24, 2/3 = 16/24, and 3/4 = 18/24. So the order is 1/2, 5/8, 2/3, 3/4.", difficulty: "hard" },
      { q: "Mukasa drank 1/3 of a bottle, then his sister drank 1/2 of what was left. What fraction is left in the bottle?", choices: ["1/6", "1/3", "1/2", "2/3"], correct: 1, why: "After Mukasa drinks 1/3, 2/3 is left. His sister drinks half of 2/3, which is 1/3. So 1/3 remains.", difficulty: "hard" },
      { q: "What is 1 1/2 + 2 1/4?", choices: ["3 3/4", "3 1/6", "4", "3 2/6"], correct: 0, why: "Change 1 1/2 to 1 2/4. Then 1 2/4 + 2 1/4 = 3 3/4.", difficulty: "medium" },
      { q: "Find 3/8 of 64.", choices: ["192", "8", "21", "24"], correct: 3, why: "3/8 of 64 = (3 × 64) ÷ 8 = 192 ÷ 8 = 24.", difficulty: "medium" },
    ],
  },

  // ────────────────── DECIMALS ──────────────────
  {
    topicId: "decimals",
    topicTitle: "Decimals",
    themeName: "Numeracy · Fractions",
    questions: [
      { q: "What is 3.6 + 0.45?", choices: ["4.5", "4.05", "3.81", "8.1"], correct: 1, why: "Line up the decimal points: 3.60 + 0.45 = 4.05.", difficulty: "easy" },
      { q: "Work out 0.4 × 0.3.", choices: ["0.012", "0.12", "0.7", "1.2"], correct: 1, why: "Multiply 4 × 3 = 12, then place the decimal point two places back. So 0.4 × 0.3 = 0.12.", difficulty: "medium" },
      { q: "Convert 0.6 to a fraction in simplest form.", choices: ["6/10", "3/5", "60/100", "1/6"], correct: 1, why: "0.6 = 6/10, and 6/10 simplifies to 3/5.", difficulty: "easy" },
      { q: "5 − 1.75 = ?", choices: ["3.75", "3.25", "4.25", "4.75"], correct: 1, why: "Write 5 as 5.00, then subtract: 5.00 − 1.75 = 3.25.", difficulty: "easy" },
      { q: "Divide 4.8 ÷ 0.6.", choices: ["48", "8", "80", "0.8"], correct: 1, why: "Move both decimal points one place right: 4.8 ÷ 0.6 becomes 48 ÷ 6 = 8.", difficulty: "medium" },
      { q: "Order smallest to largest: 0.7, 0.07, 0.77, 0.707.", choices: ["0.07, 0.707, 0.7, 0.77", "0.7, 0.77, 0.707, 0.07", "0.07, 0.7, 0.707, 0.77", "0.7, 0.707, 0.07, 0.77"], correct: 2, why: "Compare place values carefully: 0.07 < 0.700 < 0.707 < 0.770.", difficulty: "hard" },
      { q: "Convert 0.125 to a fraction in simplest form.", choices: ["1/4", "125/1000", "1/8", "1/2"], correct: 2, why: "0.125 = 125/1000. Divide top and bottom by 125 to get 1/8.", difficulty: "medium" },
      { q: "What is 7.2 ÷ 8?", choices: ["9", "0.9", "0.09", "1.4"], correct: 1, why: "72 tenths divided by 8 gives 9 tenths, so 7.2 ÷ 8 = 0.9.", difficulty: "medium" },
      { q: "Express 3/4 as a decimal.", choices: ["0.34", "0.43", "0.75", "0.7"], correct: 2, why: "3 ÷ 4 = 0.75.", difficulty: "easy" },
      { q: "What is 2.5 × 4?", choices: ["8.5", "10", "6.5", "100"], correct: 1, why: "2.5 × 4 = 10.", difficulty: "easy" },
      { q: "Round 4.367 to 2 decimal places.", choices: ["4.37", "4.36", "4.4", "4.366"], correct: 0, why: "Look at the third decimal digit, which is 7. Since it is 5 or more, 4.36 rounds up to 4.37.", difficulty: "medium" },
      { q: "A pen costs 0.5 of the price of a book. The book costs UGX 3,000. What does the pen cost?", choices: ["UGX 1,000", "UGX 500", "UGX 1,500", "UGX 2,500"], correct: 2, why: "0.5 means one half. Half of UGX 3,000 is UGX 1,500.", difficulty: "medium" },
      { q: "What is 0.25 + 0.5 + 0.125?", choices: ["0.0875", "0.875", "1.5", "0.75"], correct: 1, why: "Write them as 0.250 + 0.500 + 0.125 = 0.875.", difficulty: "medium" },
      { q: "Convert 1.6 to a mixed number in simplest form.", choices: ["8/5", "1 6/10", "16/10", "1 3/5"], correct: 3, why: "1.6 = 1 + 0.6, and 0.6 = 3/5. So 1.6 = 1 3/5.", difficulty: "medium" },
      { q: "What is 3 ÷ 0.5?", choices: ["0.6", "1.5", "3.5", "6"], correct: 3, why: "Dividing by 0.5 is the same as asking how many halves are in 3. There are 6 halves in 3.", difficulty: "medium" },
    ],
  },

  // ────────────────── PERCENTAGES ──────────────────
  {
    topicId: "proportion-percentages",
    topicTitle: "Proportion and percentages",
    themeName: "Numeracy · Fractions",
    questions: [
      { q: "What is 20% of 150?", choices: ["15", "30", "20", "300"], correct: 1, why: "20% means 20 out of 100, which is the same as 1/5. So 1/5 of 150 = 30.", difficulty: "easy" },
      { q: "Express 18 as a percentage of 60.", choices: ["60%", "18%", "30%", "42%"], correct: 2, why: "18 ÷ 60 = 0.3. Then 0.3 × 100 = 30%.", difficulty: "medium" },
      { q: "A trader bought maize at UGX 80,000 and sold it at UGX 100,000. What is the profit percentage?", choices: ["100%", "25%", "80%", "20%"], correct: 1, why: "Profit = 100,000 − 80,000 = 20,000. Profit % = (20,000 ÷ 80,000) × 100 = 25%.", difficulty: "medium" },
      { q: "A dress cost UGX 50,000 and was sold at a 15% discount. What was the new price?", choices: ["UGX 45,000", "UGX 35,000", "UGX 42,500", "UGX 7,500"], correct: 2, why: "15% of 50,000 is 7,500. New price = 50,000 − 7,500 = UGX 42,500.", difficulty: "medium" },
      { q: "Convert 3/8 to a percentage.", choices: ["30%", "37.5%", "38%", "24%"], correct: 1, why: "3/8 = 0.375. Multiply by 100 to get 37.5%.", difficulty: "medium" },
      { q: "30% of pupils in a class of 40 are girls. How many boys are there?", choices: ["12", "28", "30", "10"], correct: 1, why: "30% of 40 = 12 girls. Boys = 40 − 12 = 28.", difficulty: "easy" },
      { q: "After a 10% pay rise, Mukasa earns UGX 220,000 per week. What was his original pay?", choices: ["UGX 198,000", "UGX 200,000", "UGX 210,000", "UGX 242,000"], correct: 1, why: "After a 10% rise, the new pay is 110% of the old pay. So original pay = 220,000 × 100 ÷ 110 = UGX 200,000.", difficulty: "hard" },
      { q: "Express 45/60 as a percentage.", choices: ["15%", "45%", "75%", "60%"], correct: 2, why: "45 ÷ 60 = 0.75, and 0.75 × 100 = 75%.", difficulty: "medium" },
      { q: "What is 12.5% of 800?", choices: ["80", "150", "100", "125"], correct: 2, why: "12.5% is the same as 1/8. So 1/8 of 800 = 100.", difficulty: "medium" },
      { q: "Convert 0.45 to a percentage.", choices: ["45%", "4.5%", "0.45%", "450%"], correct: 0, why: "Multiply the decimal by 100. So 0.45 = 45%.", difficulty: "easy" },
      { q: "A class of 50 has 20 boys. What percentage are girls?", choices: ["50%", "40%", "60%", "20%"], correct: 2, why: "Girls = 50 − 20 = 30. Then 30/50 × 100 = 60%.", difficulty: "medium" },
      { q: "If 25% of a number is 50, what is the number?", choices: ["12.5", "200", "75", "100"], correct: 1, why: "25% means one quarter. If one quarter is 50, the whole number is 50 × 4 = 200.", difficulty: "medium" },
      { q: "A trader makes 15% profit on goods costing UGX 60,000. What is the selling price?", choices: ["UGX 69,000", "UGX 9,000", "UGX 75,000", "UGX 51,000"], correct: 0, why: "15% of 60,000 is 9,000. Selling price = 60,000 + 9,000 = UGX 69,000.", difficulty: "hard" },
      { q: "Mary scored 75% in a test marked out of 80. How many marks did she get?", choices: ["55", "60", "75", "80"], correct: 1, why: "75% of 80 = 75/100 × 80 = 60.", difficulty: "medium" },
      { q: "Akello, Mukasa and Kato shared UGX 120,000 in the ratio 1:2:3. How much did Kato get?", choices: ["UGX 20,000", "UGX 40,000", "UGX 60,000", "UGX 30,000"], correct: 2, why: "Total ratio parts = 1 + 2 + 3 = 6. One part = 120,000 ÷ 6 = 20,000. Kato gets 3 parts, so he gets UGX 60,000.", difficulty: "hard" },
    ],
  },

  // ────────────────── PERIMETER ──────────────────
  {
    topicId: "perimeter",
    topicTitle: "Perimeter",
    themeName: "Measurement",
    questions: [
      { q: "Perimeter of a rectangle 9 cm × 4 cm?", choices: ["18 cm", "36 cm", "26 cm", "13 cm"], correct: 2, why: "Perimeter of a rectangle = 2(length + width) = 2(9 + 4) = 26 cm.", difficulty: "easy" },
      { q: "Perimeter of a square with side 7 cm?", choices: ["21 cm", "49 cm", "14 cm", "28 cm"], correct: 3, why: "Perimeter of a square = 4 × side = 4 × 7 = 28 cm.", difficulty: "easy" },
      { q: "A triangle has sides 5 cm, 6 cm, 7 cm. Perimeter?", choices: ["13 cm", "18 cm", "11 cm", "210 cm"], correct: 1, why: "Perimeter of a triangle = sum of all its sides = 5 + 6 + 7 = 18 cm.", difficulty: "easy" },
      { q: "Perimeter of a square is 36 cm. Side length?", choices: ["6 cm", "9 cm", "12 cm", "18 cm"], correct: 1, why: "A square has 4 equal sides, so side = 36 ÷ 4 = 9 cm.", difficulty: "easy" },
      { q: "Rectangle perimeter 30 m, length 9 m. Width?", choices: ["12 m", "6 m", "3 m", "21 m"], correct: 1, why: "2(L + W) = 30, so L + W = 15. Since L = 9, width = 15 − 9 = 6 m.", difficulty: "medium" },
      { q: "Circumference of a circle, radius 7 cm. Take π = 22/7.", choices: ["49 cm", "22 cm", "44 cm", "154 cm"], correct: 2, why: "Circumference = 2πr = 2 × 22/7 × 7 = 44 cm.", difficulty: "medium" },
      { q: "A regular hexagon has side 12 m. What is its perimeter?", choices: ["144 m", "36 m", "60 m", "72 m"], correct: 3, why: "A regular hexagon has 6 equal sides, so perimeter = 6 × 12 = 72 m.", difficulty: "medium" },
      { q: "A circle has diameter 14 cm. Find its circumference (π = 22/7).", choices: ["44 cm", "88 cm", "22 cm", "14 cm"], correct: 0, why: "Circumference = πd = 22/7 × 14 = 44 cm.", difficulty: "medium" },
      { q: "An equilateral triangle has perimeter 27 cm. Side length?", choices: ["9 cm", "13.5 cm", "3 cm", "27 cm"], correct: 0, why: "All three sides are equal, so each side = 27 ÷ 3 = 9 cm.", difficulty: "easy" },
      { q: "Perimeter of a regular pentagon with side 8 cm?", choices: ["32 cm", "40 cm", "16 cm", "13 cm"], correct: 1, why: "A pentagon has 5 sides, so perimeter = 5 × 8 = 40 cm.", difficulty: "easy" },
      { q: "A rectangular field is 50 m by 30 m. How much wire is needed to fence it round once?", choices: ["160 m", "80 m", "1500 m", "100 m"], correct: 0, why: "Perimeter = 2(50 + 30) = 160 m.", difficulty: "medium" },
      { q: "If you fence it three times round, how much wire is needed?", choices: ["240 m", "160 m", "320 m", "480 m"], correct: 3, why: "One round needs 160 m. Three rounds need 3 × 160 = 480 m.", difficulty: "medium" },
      { q: "A square has area 64 cm². Find its perimeter.", choices: ["256 cm", "16 cm", "8 cm", "32 cm"], correct: 3, why: "If the area is 64 cm², the side is √64 = 8 cm. Perimeter = 4 × 8 = 32 cm.", difficulty: "hard" },
      { q: "Perimeter of a rectangle is 50 cm. Length is twice the width. Find length.", choices: ["50/3 ≈ 16.7 cm", "25 cm", "16.7 cm", "Cannot tell"], correct: 2, why: "Let width = x and length = 2x. Then 2(2x + x) = 50, so 6x = 50 and x = 25/3. Length = 2x = 50/3 ≈ 16.7 cm.", difficulty: "hard" },
      { q: "A semicircle has straight side 14 cm. Find its perimeter (π = 22/7).", choices: ["44 cm", "36 cm", "22 cm", "14 cm"], correct: 1, why: "The straight side is the diameter. Half the circumference is 1/2 × π × d = 1/2 × 22/7 × 14 = 22 cm. Add the diameter 14 cm to get 36 cm.", difficulty: "hard" },
    ],
  },

  // ────────────────── AREA ──────────────────
  {
    topicId: "area",
    topicTitle: "Area",
    themeName: "Measurement",
    questions: [
      { q: "Area of a rectangle 12 cm × 8 cm?", choices: ["96 cm", "96 cm²", "20 cm²", "40 cm²"], correct: 1, why: "Area of a rectangle = length × width. So 12 × 8 = 96 cm².", difficulty: "easy" },
      { q: "Area of a square, side 9 m?", choices: ["18 m²", "81 m²", "36 m²", "81 m"], correct: 1, why: "Area of a square = side × side. So 9 × 9 = 81 m².", difficulty: "easy" },
      { q: "Triangle base 10 cm, height 6 cm. Area?", choices: ["60 cm²", "30 cm²", "16 cm²", "120 cm²"], correct: 1, why: "Area of a triangle = 1/2 × base × height = 1/2 × 10 × 6 = 30 cm².", difficulty: "medium" },
      { q: "Rectangle area 48 cm², width 6 cm. Length?", choices: ["8 cm", "42 cm", "12 cm", "16 cm"], correct: 0, why: "Length = area ÷ width = 48 ÷ 6 = 8 cm.", difficulty: "medium" },
      { q: "Area of a circle, radius 7 cm (π = 22/7).", choices: ["44 cm²", "154 cm²", "49 cm²", "22 cm²"], correct: 1, why: "Area = πr² = 22/7 × 7 × 7 = 154 cm².", difficulty: "medium" },
      { q: "A square garden has perimeter 40 m. Area?", choices: ["40 m²", "100 m²", "1600 m²", "10 m²"], correct: 1, why: "Each side is 40 ÷ 4 = 10 m. Area = 10 × 10 = 100 m².", difficulty: "medium" },
      { q: "L-shape: 10 cm × 4 cm rectangle joined to a 4 cm square. Total area?", choices: ["40 cm²", "60 cm²", "16 cm²", "56 cm²"], correct: 3, why: "Find each part first: rectangle = 10 × 4 = 40 cm² and square = 4 × 4 = 16 cm². Total area = 56 cm².", difficulty: "hard" },
      { q: "Triangle base 14 cm, height 9 cm. Area?", choices: ["23 cm²", "126 cm²", "63 cm²", "63 cm"], correct: 2, why: "Area = 1/2 × 14 × 9 = 63 cm². 126 cm² is the answer you get if you forget to halve.", difficulty: "medium" },
      { q: "A rectangular plot is 25 m × 16 m. Area?", choices: ["400 m²", "82 m²", "41 m²", "200 m²"], correct: 0, why: "Area = 25 × 16 = 400 m².", difficulty: "easy" },
      { q: "A circle has diameter 14 cm. Find its area (π = 22/7).", choices: ["154 cm²", "44 cm²", "22 cm²", "616 cm²"], correct: 0, why: "The radius is half the diameter, so r = 7 cm. Area = 22/7 × 7 × 7 = 154 cm².", difficulty: "medium" },
      { q: "A square field has side 25 m. How many m² of grass?", choices: ["250 m²", "100 m²", "625 m²", "50 m²"], correct: 2, why: "Area of the square = 25 × 25 = 625 m².", difficulty: "easy" },
      { q: "Area of a triangle with base 8 cm and height 5 cm?", choices: ["13 cm²", "40 cm²", "20 cm²", "10 cm²"], correct: 2, why: "Area = 1/2 × 8 × 5 = 20 cm².", difficulty: "easy" },
      { q: "A rectangular floor is 6 m × 4 m. How many 50 cm × 50 cm tiles are needed?", choices: ["24", "48", "96", "12"], correct: 2, why: "Floor area = 6 × 4 = 24 m² = 240,000 cm². One tile = 50 × 50 = 2,500 cm². So 240,000 ÷ 2,500 = 96 tiles.", difficulty: "hard" },
      { q: "A square has area 144 cm². Find its side.", choices: ["14 cm", "36 cm", "12 cm", "72 cm"], correct: 2, why: "The side of a square is the square root of its area. √144 = 12 cm.", difficulty: "medium" },
      { q: "A triangle has area 50 cm² and base 10 cm. Find the height.", choices: ["20 cm", "5 cm", "25 cm", "10 cm"], correct: 3, why: "Use 50 = 1/2 × 10 × h. That gives 50 = 5h, so h = 10 cm.", difficulty: "hard" },
    ],
  },

  // ────────────────── VOLUME ──────────────────
  {
    topicId: "volume",
    topicTitle: "Volume",
    themeName: "Measurement",
    questions: [
      { q: "Volume of a cuboid 5 × 4 × 3 cm?", choices: ["12 cm³", "47 cm³", "60 cm²", "60 cm³"], correct: 3, why: "Volume of a cuboid = length × width × height = 5 × 4 × 3 = 60 cm³.", difficulty: "easy" },
      { q: "Volume of a cube, side 6 cm?", choices: ["216 cm³", "36 cm³", "18 cm³", "12 cm³"], correct: 0, why: "Volume of a cube = side × side × side = 6 × 6 × 6 = 216 cm³.", difficulty: "easy" },
      { q: "Box V = 240 cm³, L = 10 cm, W = 6 cm. Height?", choices: ["24 cm", "60 cm", "4 cm³", "4 cm"], correct: 3, why: "Height = volume ÷ (length × width) = 240 ÷ (10 × 6) = 240 ÷ 60 = 4 cm.", difficulty: "medium" },
      { q: "How many litres in 5,000 cm³?", choices: ["50 litres", "500 litres", "0.5 litres", "5 litres"], correct: 3, why: "1,000 cm³ = 1 litre. So 5,000 cm³ = 5 litres.", difficulty: "easy" },
      { q: "20 litres = ? cm³.", choices: ["200,000 cm³", "2,000 cm³", "200 cm³", "20,000 cm³"], correct: 3, why: "Multiply litres by 1,000. So 20 × 1,000 = 20,000 cm³.", difficulty: "medium" },
      { q: "Swimming pool 25 × 10 × 2 m. Volume?", choices: ["500 m³", "250 m³", "37 m³", "50 m³"], correct: 0, why: "Volume = 25 × 10 × 2 = 500 m³.", difficulty: "medium" },
      { q: "How many 2 cm cubes fit in a 6 cm cube?", choices: ["12", "9", "3", "27"], correct: 3, why: "The big cube has volume 6 × 6 × 6 = 216 cm³. Each small cube has volume 2 × 2 × 2 = 8 cm³. So 216 ÷ 8 = 27 cubes.", difficulty: "hard" },
      { q: "A cuboid 8 × 5 × 4 cm. Volume?", choices: ["160 cm³", "17 cm³", "120 cm³", "40 cm³"], correct: 0, why: "Volume = 8 × 5 × 4 = 160 cm³.", difficulty: "easy" },
      { q: "8,500 cm³ in litres?", choices: ["8.5 litres", "85 litres", "0.85 litres", "850 litres"], correct: 0, why: "Divide by 1,000: 8,500 ÷ 1,000 = 8.5 litres.", difficulty: "medium" },
      { q: "A water tank holds 2 m³. How many litres?", choices: ["20,000 litres", "200 litres", "2,000 litres", "20 litres"], correct: 2, why: "1 m³ = 1,000 litres. Therefore 2 m³ = 2,000 litres.", difficulty: "medium" },
      { q: "A cubic box has side 10 cm. Volume in cm³?", choices: ["100 cm³", "1,000 cm³", "300 cm³", "30 cm³"], correct: 1, why: "10 × 10 × 10 = 1,000 cm³.", difficulty: "easy" },
      { q: "A jerrycan holds 5 litres. How many cm³?", choices: ["50,000 cm³", "500 cm³", "5,000 cm³", "50 cm³"], correct: 2, why: "5 litres = 5 × 1,000 = 5,000 cm³.", difficulty: "easy" },
      { q: "A cuboid measures 12 × 5 × 4 cm. How many litres does it hold?", choices: ["240 litres", "0.24 litres", "24 litres", "2.4 litres"], correct: 1, why: "Volume = 12 × 5 × 4 = 240 cm³. Since 1,000 cm³ = 1 litre, 240 cm³ = 0.24 litres.", difficulty: "hard" },
      { q: "A cube has volume 125 cm³. Find its side.", choices: ["25 cm", "5 cm", "11 cm", "15 cm"], correct: 1, why: "5 × 5 × 5 = 125, so the side of the cube is 5 cm.", difficulty: "hard" },
      { q: "A rectangular tank is 1.5 m × 1 m × 1 m. How many litres of water does it hold when full?", choices: ["1,500 litres", "150 litres", "15,000 litres", "15 litres"], correct: 0, why: "Volume = 1.5 × 1 × 1 = 1.5 m³. Since 1 m³ = 1,000 litres, 1.5 m³ = 1,500 litres.", difficulty: "medium" },
    ],
  },

  // ────────────────── EQUATIONS ──────────────────
  {
    topicId: "equations",
    topicTitle: "Equations",
    themeName: "Algebra",
    questions: [
      { q: "Solve: x + 7 = 15.", choices: ["7", "22", "8", "15"], correct: 2, why: "Subtract 7 from both sides: x = 15 − 7 = 8.", difficulty: "easy" },
      { q: "Solve: 3y = 21.", choices: ["18", "63", "24", "7"], correct: 3, why: "Divide both sides by 3: y = 21 ÷ 3 = 7.", difficulty: "easy" },
      { q: "Solve: 2n + 5 = 17.", choices: ["6", "11", "12", "22"], correct: 0, why: "Subtract 5 first: 2n = 12. Then divide by 2 to get n = 6.", difficulty: "easy" },
      { q: "Solve: 5m − 8 = 22.", choices: ["6", "14", "2.8", "30"], correct: 0, why: "Add 8 to both sides: 5m = 30. Then divide by 5, so m = 6.", difficulty: "medium" },
      { q: "Solve: x/3 = 9.", choices: ["3", "27", "6", "12"], correct: 1, why: "Multiply both sides by 3: x = 9 × 3 = 27.", difficulty: "easy" },
      { q: "The sum of a number and 12 is 30. Find the number.", choices: ["2.5", "42", "18", "12"], correct: 2, why: "Let the number be x. Then x + 12 = 30, so x = 18.", difficulty: "easy" },
      { q: "Three times a number plus 4 equals 25. Find the number.", choices: ["21", "8.67", "29", "7"], correct: 3, why: "Let the number be x. Then 3x + 4 = 25, so 3x = 21 and x = 7.", difficulty: "medium" },
      { q: "Solve: 4x − 9 = 11.", choices: ["5", "0.5", "20", "2.75"], correct: 0, why: "Add 9 to both sides: 4x = 20. Then divide by 4 to get x = 5.", difficulty: "medium" },
      { q: "Solve: 2(x + 3) = 16.", choices: ["5", "8", "10", "13"], correct: 0, why: "First divide both sides by 2: x + 3 = 8. Then subtract 3, so x = 5.", difficulty: "medium" },
      { q: "Solve: 3(x − 2) = 12.", choices: ["10", "4", "6", "14"], correct: 2, why: "Divide both sides by 3: x − 2 = 4. Then add 2, so x = 6.", difficulty: "medium" },
      { q: "A number doubled and then increased by 5 gives 19. Find the number.", choices: ["12", "9.5", "7", "8"], correct: 2, why: "Let the number be x. Then 2x + 5 = 19, so 2x = 14 and x = 7.", difficulty: "medium" },
      { q: "Akello is x years old. Her brother is 3 years older. Together they are 25. Find x.", choices: ["8", "12", "11", "14"], correct: 2, why: "Brother = x + 3. So x + (x + 3) = 25, giving 2x = 22 and x = 11.", difficulty: "hard" },
      { q: "Solve: 7x = 49.", choices: ["42", "7", "56", "1/7"], correct: 1, why: "Divide both sides by 7: x = 49 ÷ 7 = 7.", difficulty: "easy" },
      { q: "Solve: x − 8 = 15.", choices: ["7", "120", "-7", "23"], correct: 3, why: "Add 8 to both sides: x = 15 + 8 = 23.", difficulty: "easy" },
      { q: "Solve: 6x + 4 = 5x + 10.", choices: ["1.4", "14", "6", "-6"], correct: 2, why: "Subtract 5x from both sides: x + 4 = 10. Then subtract 4, so x = 6.", difficulty: "hard" },
    ],
  },

  // ────────────────── SUBSTITUTION ──────────────────
  {
    topicId: "substitution",
    topicTitle: "Substitution",
    themeName: "Algebra",
    questions: [
      { q: "x = 5. Find 3x + 2.", choices: ["17", "15", "10", "30"], correct: 0, why: "Substitute x = 5. Then 3x + 2 = 3(5) + 2 = 15 + 2 = 17.", difficulty: "easy" },
      { q: "a = 6, b = 2. Find a − b.", choices: ["12", "4", "8", "3"], correct: 1, why: "Substitute the values: a − b = 6 − 2 = 4.", difficulty: "easy" },
      { q: "p = 4. Find p².", choices: ["2", "8", "16", "12"], correct: 2, why: "p² means p × p. So 4 × 4 = 16.", difficulty: "easy" },
      { q: "m = 3, n = 5. Find 2m + 3n.", choices: ["16", "21", "30", "15"], correct: 1, why: "2m + 3n = 2(3) + 3(5) = 6 + 15 = 21.", difficulty: "medium" },
      { q: "x = 10, y = 4. Find xy.", choices: ["40", "14", "6", "2.5"], correct: 0, why: "xy means x × y. So 10 × 4 = 40.", difficulty: "easy" },
      { q: "a = 7. Find 2(a + 3).", choices: ["17", "13", "20", "10"], correct: 2, why: "First work inside the bracket: 7 + 3 = 10. Then 2 × 10 = 20.", difficulty: "medium" },
      { q: "k = 5. Find 30 ÷ k − 2.", choices: ["6", "4", "8", "0"], correct: 1, why: "30 ÷ 5 = 6, then 6 − 2 = 4.", difficulty: "medium" },
      { q: "p = 6, q = 2. Find p² − 3q.", choices: ["32", "0", "12", "30"], correct: 3, why: "p² = 6² = 36. Also 3q = 3 × 2 = 6. So 36 − 6 = 30.", difficulty: "medium" },
      { q: "a = 5, b = 2. Find 3a − b².", choices: ["13", "21", "14", "11"], correct: 3, why: "3a = 3 × 5 = 15 and b² = 2² = 4. So 15 − 4 = 11.", difficulty: "medium" },
      { q: "x = 4, y = 3. Find 2(x + y).", choices: ["14", "10", "7", "11"], correct: 0, why: "x + y = 4 + 3 = 7. Then 2 × 7 = 14.", difficulty: "medium" },
      { q: "m = 8. Find m² ÷ 4.", choices: ["8", "2", "16", "32"], correct: 2, why: "m² = 8² = 64. Then 64 ÷ 4 = 16.", difficulty: "medium" },
      { q: "a = 3, b = 5, c = 2. Find a + b × c.", choices: ["20", "16", "13", "30"], correct: 2, why: "Multiply first: b × c = 5 × 2 = 10. Then add a: 3 + 10 = 13.", difficulty: "hard" },
      { q: "x = 2. Find x³ + x.", choices: ["10", "8", "6", "12"], correct: 0, why: "x³ = 2 × 2 × 2 = 8. Then 8 + 2 = 10.", difficulty: "medium" },
      { q: "p = 9, q = 3. Find p ÷ q + q.", choices: ["3", "12", "9", "6"], correct: 3, why: "p ÷ q = 9 ÷ 3 = 3. Then 3 + 3 = 6.", difficulty: "medium" },
      { q: "If a = −2, find 3a + 5.", choices: ["1", "11", "−1", "−11"], correct: 2, why: "3a = 3 × (−2) = −6. Then −6 + 5 = −1.", difficulty: "hard" },
    ],
  },

  // ────────────────── MEAN/MEDIAN/MODE/RANGE ──────────────────
  {
    topicId: "central-tendency-range",
    topicTitle: "Mean, median, mode and range",
    themeName: "Data",
    questions: [
      { q: "Find the mean of: 4, 6, 8, 10, 12.", choices: ["10", "6", "40", "8"], correct: 3, why: "Add the numbers first: 4 + 6 + 8 + 10 + 12 = 40. Then divide by 5 to get 8.", difficulty: "easy" },
      { q: "Find the median of: 7, 3, 9, 5, 1.", choices: ["5", "7", "3", "25"], correct: 0, why: "Arrange them in order: 1, 3, 5, 7, 9. The middle number is 5.", difficulty: "easy" },
      { q: "Find the mode of: 2, 3, 3, 5, 7, 3, 5.", choices: ["3", "5", "2", "4"], correct: 0, why: "The mode is the number that appears most often. 3 appears three times.", difficulty: "easy" },
      { q: "Find the range of: 14, 9, 22, 17, 11.", choices: ["13", "22", "9", "73"], correct: 0, why: "Range = largest number − smallest number = 22 − 9 = 13.", difficulty: "easy" },
      { q: "The mean of 4 numbers is 12. Three of the numbers are 10, 11 and 15. Find the fourth number.", choices: ["13", "9", "12", "48"], correct: 2, why: "If the mean is 12 for 4 numbers, the total is 12 × 4 = 48. The three known numbers add to 36, so the fourth number is 48 − 36 = 12.", difficulty: "hard" },
      { q: "Find the median of: 2, 4, 6, 8.", choices: ["6", "4", "5", "4.5"], correct: 2, why: "There are 4 numbers, so take the average of the two middle numbers: (4 + 6) ÷ 2 = 5.", difficulty: "medium" },
      { q: "Which two numbers are the modes of: 8, 8, 9, 10, 10?", choices: ["8 and 10", "9 only", "10 only", "8, 9 and 10"], correct: 0, why: "8 appears twice and 10 appears twice. They both occur most often, so they are both modes.", difficulty: "medium" },
      { q: "Find the mean of: 15, 20, 25, 30, 10.", choices: ["100", "25", "15", "20"], correct: 3, why: "The total is 100. Divide by 5 to get a mean of 20.", difficulty: "easy" },
      { q: "Find the range of: 100, 45, 78, 32, 91.", choices: ["32", "100", "68", "346"], correct: 2, why: "The largest number is 100 and the smallest is 32. So the range is 100 − 32 = 68.", difficulty: "easy" },
      { q: "Find the median of: 11, 7, 15, 9, 13, 5, 17.", choices: ["15", "11", "13", "9"], correct: 1, why: "Arrange them in order: 5, 7, 9, 11, 13, 15, 17. The middle number is 11.", difficulty: "medium" },
      { q: "Five marks add up to 80. What is the mean?", choices: ["40", "80", "5", "16"], correct: 3, why: "Mean = total ÷ number of items = 80 ÷ 5 = 16.", difficulty: "easy" },
      { q: "The mean of 6 numbers is 15. What is their total?", choices: ["2.5", "21", "90", "9"], correct: 2, why: "Total = mean × number of items = 15 × 6 = 90.", difficulty: "medium" },
      { q: "Find the mode of 4, 5, 6, 4, 7, 4, 5.", choices: ["7", "4", "6", "5"], correct: 1, why: "4 appears three times, which is more than any other number.", difficulty: "easy" },
      { q: "If a class scored 60, 70, 80 and 90, what was the range?", choices: ["30", "75", "300", "20"], correct: 0, why: "Range = 90 − 60 = 30.", difficulty: "easy" },
      { q: "The mean of 5 numbers is 20. If 4 of them are 15, 18, 22 and 25, find the fifth number.", choices: ["20", "100", "80", "25"], correct: 0, why: "Total for 5 numbers = 20 × 5 = 100. The four known numbers add to 80, so the fifth number is 100 − 80 = 20.", difficulty: "hard" },
    ],
  },

  // ────────────────── TIME (12/24 HOUR) ──────────────────
  {
    topicId: "12-24-hour-clocks",
    topicTitle: "12-hour and 24-hour clocks",
    themeName: "Measurement · Time",
    questions: [
      { q: "Convert 2:30 pm to 24-hour clock.", choices: ["16:30", "02:30", "14:30", "12:30"], correct: 2, why: "For pm times except 12 pm, add 12 to the hour. So 2:30 pm = 14:30.", difficulty: "easy" },
      { q: "Convert 21:15 to 12-hour clock.", choices: ["9:15 pm", "11:15 pm", "9:15 am", "1:15 pm"], correct: 0, why: "21:15 is after midday. Subtract 12 from 21 to get 9, so the time is 9:15 pm.", difficulty: "easy" },
      { q: "What is 12 noon in 24-hour time?", choices: ["00:00", "12:00", "24:00", "12:00 pm"], correct: 1, why: "12 noon is written as 12:00 in the 24-hour clock. Midnight is 00:00.", difficulty: "easy" },
      { q: "Class starts at 08:15 and ends at 11:00. How long is the class?", choices: ["3 hours 45 minutes", "2 hours 45 minutes", "2 hours 15 minutes", "3 hours 15 minutes"], correct: 1, why: "From 08:15 to 10:15 is 2 hours, and from 10:15 to 11:00 is 45 minutes. Total = 2 hours 45 minutes.", difficulty: "medium" },
      { q: "A train leaves at 18:50 and arrives at 21:35. What is the duration?", choices: ["2 hours 15 minutes", "2 hours 45 minutes", "3 hours 15 minutes", "3 hours 45 minutes"], correct: 1, why: "From 18:50 to 20:50 is 2 hours, then to 21:35 is 45 minutes. Total = 2 hours 45 minutes.", difficulty: "medium" },
      { q: "Express 11:45 pm in 24-hour time.", choices: ["00:45", "11:45", "13:45", "23:45"], correct: 3, why: "For pm times except 12 pm, add 12 to the hour. So 11:45 pm = 23:45.", difficulty: "easy" },
      { q: "A bus leaves at 21:50 and arrives at 02:15 the next day. What is the duration?", choices: ["5 hours 25 minutes", "4 hours 25 minutes", "3 hours 25 minutes", "4 hours 65 minutes"], correct: 1, why: "From 21:50 to 00:00 is 2 hours 10 minutes. From 00:00 to 02:15 is 2 hours 15 minutes. Total = 4 hours 25 minutes.", difficulty: "hard" },
      { q: "Convert 19:45 to 12-hour time.", choices: ["9:45 am", "9:45 pm", "7:45 pm", "7:45 am"], correct: 2, why: "Subtract 12 from 19 to get 7. So 19:45 = 7:45 pm.", difficulty: "easy" },
      { q: "Convert 7:30 am to 24-hour time.", choices: ["0730", "19:30", "7:30", "07:30"], correct: 3, why: "In 24-hour time, morning hours before 10 use a zero in front. So 7:30 am = 07:30.", difficulty: "easy" },
      { q: "What time is 3 hours after 22:30?", choices: ["00:30", "25:30", "19:30", "01:30"], correct: 3, why: "22:30 + 1 hour = 23:30, + 1 hour = 00:30, + 1 hour = 01:30.", difficulty: "medium" },
      { q: "How many minutes are there from 09:15 to 10:00?", choices: ["55 minutes", "45 minutes", "15 minutes", "85 minutes"], correct: 1, why: "From 09:15 to 10:00 is 45 minutes.", difficulty: "easy" },
      { q: "A film starts at 14:20 and lasts 1 hour 50 minutes. When does it end?", choices: ["15:50", "15:10", "16:10", "16:30"], correct: 2, why: "14:20 + 1 hour = 15:20. Add 50 minutes to get 16:10.", difficulty: "medium" },
      { q: "Convert 00:30 to 12-hour time.", choices: ["12:30 pm", "00:30 am", "0:30 am", "12:30 am"], correct: 3, why: "00:30 is 30 minutes after midnight, which is 12:30 am.", difficulty: "medium" },
      { q: "Akello sleeps at 21:45 and wakes at 06:15. How long does she sleep?", choices: ["9 hours", "8 hours", "8 hours 30 minutes", "7 hours 30 minutes"], correct: 2, why: "From 21:45 to 00:00 is 2 hours 15 minutes. From 00:00 to 06:15 is 6 hours 15 minutes. Total = 8 hours 30 minutes.", difficulty: "hard" },
      { q: "Three trains arrive at 06:50, 09:25 and 11:40. What is the interval between the first and last train?", choices: ["4 hours 30 minutes", "5 hours", "5 hours 50 minutes", "4 hours 50 minutes"], correct: 3, why: "From 06:50 to 10:50 is 4 hours. From 10:50 to 11:40 is 50 minutes. Total = 4 hours 50 minutes.", difficulty: "hard" },
    ],
  },

  // ────────────────── MONEY ──────────────────
  {
    topicId: "money",
    topicTitle: "Money (profit, loss, discount)",
    themeName: "Measurement · Money",
    questions: [
      { q: "Bought UGX 8,000, sold UGX 10,000. Profit?", choices: ["UGX 2,000", "UGX 18,000", "UGX 1,250", "UGX 800"], correct: 0, why: "Profit = selling price − cost price = 10,000 − 8,000 = UGX 2,000.", difficulty: "easy" },
      { q: "Bought sugar at UGX 4,000 per kg and sold it at UGX 4,800 per kg. Profit percentage?", choices: ["20%", "16.7%", "80%", "8%"], correct: 0, why: "Profit = 4,800 − 4,000 = 800. Profit % = (800 ÷ 4,000) × 100 = 20%.", difficulty: "medium" },
      { q: "A shirt costs UGX 30,000 and is sold at a 10% discount. How much is paid?", choices: ["UGX 3,000", "UGX 33,000", "UGX 27,000", "UGX 20,000"], correct: 2, why: "10% of 30,000 is 3,000. Subtract the discount: 30,000 − 3,000 = UGX 27,000.", difficulty: "easy" },
      { q: "Bought an item at UGX 50,000 and sold it at UGX 40,000. Loss percentage?", choices: ["20%", "25%", "10%", "80%"], correct: 0, why: "Loss = 50,000 − 40,000 = 10,000. Loss % = (10,000 ÷ 50,000) × 100 = 20%.", difficulty: "medium" },
      { q: "Buy 3 pens and get 1 free. If each pen costs UGX 2,000, what is the effective discount percentage?", choices: ["25%", "33%", "50%", "75%"], correct: 0, why: "Four pens would normally cost 8,000, but you pay 6,000. You save 2,000 out of 8,000, so the discount is 25%.", difficulty: "hard" },
      { q: "Find the simple interest on UGX 200,000 at 5% per year for 3 years.", choices: ["UGX 15,000", "UGX 10,000", "UGX 60,000", "UGX 30,000"], correct: 3, why: "Simple interest = (P × R × T)/100 = (200,000 × 5 × 3)/100 = UGX 30,000.", difficulty: "medium" },
      { q: "A basket was sold at UGX 18,000 at a loss of UGX 2,000. Find the cost price.", choices: ["UGX 16,000", "UGX 20,000", "UGX 36,000", "UGX 2,000"], correct: 1, why: "Cost price = selling price + loss = 18,000 + 2,000 = UGX 20,000.", difficulty: "medium" },
      { q: "A jacket marked UGX 80,000 is sold at a 15% discount. Find the selling price.", choices: ["UGX 92,000", "UGX 12,000", "UGX 68,000", "UGX 65,000"], correct: 2, why: "15% of 80,000 is 12,000. Selling price = 80,000 − 12,000 = UGX 68,000.", difficulty: "medium" },
      { q: "Bought 50 books at UGX 12,000 each and sold each at UGX 15,000. Total profit?", choices: ["UGX 150,000", "UGX 750,000", "UGX 3,000", "UGX 600,000"], correct: 0, why: "Profit on one book = 15,000 − 12,000 = 3,000. For 50 books, total profit = 3,000 × 50 = UGX 150,000.", difficulty: "medium" },
      { q: "A radio was bought at UGX 90,000 and sold at UGX 108,000. Profit percentage?", choices: ["12%", "18%", "20%", "16.7%"], correct: 2, why: "Profit = 108,000 − 90,000 = 18,000. Profit % = (18,000 ÷ 90,000) × 100 = 20%.", difficulty: "medium" },
      { q: "An item makes 20% profit when sold at UGX 60,000. Find the cost price.", choices: ["UGX 12,000", "UGX 48,000", "UGX 72,000", "UGX 50,000"], correct: 3, why: "Selling price is 120% of cost price. So cost price = 60,000 × 100/120 = UGX 50,000.", difficulty: "hard" },
      { q: "Bought 10 kg of rice at UGX 3,500 per kg and sold all at UGX 4,000 per kg. Total profit?", choices: ["UGX 5,000", "UGX 500", "UGX 35,000", "UGX 40,000"], correct: 0, why: "Profit per kg = 4,000 − 3,500 = 500. For 10 kg, total profit = 500 × 10 = UGX 5,000.", difficulty: "medium" },
      { q: "A car costs UGX 8,000,000. A buyer pays a 25% deposit. Find the deposit.", choices: ["UGX 2,000,000", "UGX 6,000,000", "UGX 800,000", "UGX 200,000"], correct: 0, why: "25% is one quarter. One quarter of 8,000,000 is UGX 2,000,000.", difficulty: "medium" },
      { q: "After a 12% loss, a phone was sold at UGX 220,000. Find the cost price.", choices: ["UGX 232,000", "UGX 250,000", "UGX 200,000", "UGX 246,400"], correct: 1, why: "After a 12% loss, the selling price is 88% of the cost price. So cost price = 220,000 × 100/88 = UGX 250,000.", difficulty: "hard" },
      { q: "Simple interest is UGX 36,000 on UGX 240,000 over 2 years. Find the rate.", choices: ["30%", "7.5%", "5%", "15%"], correct: 1, why: "Use I = (P × R × T)/100. So 36,000 = (240,000 × R × 2)/100, which gives R = 7.5%.", difficulty: "hard" },
    ],
  },
];

// ─────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────

const MATHS_BANK: TopicBank[] = BANK.map((bank) => ({
  ...bank,
  subjectId: "mathematics",
  subjectName: "Mathematics",
}));


const SCIENCE_EXTRA_QUESTIONS: Record<string, BankQuestion[]> = {
  "muscular-skeletal-system": [
    { q: "Which bone protects the spinal cord?", choices: ["Backbone", "Skull", "Rib", "Femur"], correct: 0, why: "The backbone surrounds and protects the spinal cord.", difficulty: "easy" },
    { q: "Which bones protect the heart and lungs?", choices: ["Ribs", "Tibia and fibula", "Radius and ulna", "Pelvis only"], correct: 0, why: "The ribs form a cage around the chest and protect the heart and lungs.", difficulty: "easy" },
    { q: "Which disease is commonly linked to lack of vitamin D or calcium in children?", choices: ["Rickets", "Malaria", "Diarrhoea", "Conjunctivitis"], correct: 0, why: "Rickets affects bone development and is linked to lack of vitamin D, calcium or poor feeding.", difficulty: "medium" },
    { q: "A dislocation happens when:", choices: ["A bone moves out of its joint", "The lungs remove carbon dioxide", "A magnet loses its poles", "Light bends in water"], correct: 0, why: "A dislocation is when a bone is forced out of its normal position at a joint.", difficulty: "medium" },
    { q: "Which activity can help strengthen muscles and bones?", choices: ["Regular safe exercise", "Sitting badly all day", "Avoiding all protein foods", "Carrying loads on one side only"], correct: 0, why: "Safe exercise helps muscles and bones grow stronger.", difficulty: "easy" },
    { q: "Why is correct posture important?", choices: ["It helps prevent strain and body deformities", "It forms urine", "It makes magnets stronger", "It stops all breathing"], correct: 0, why: "Correct posture helps the body stay balanced and reduces strain on bones and muscles.", difficulty: "medium" },
    { q: "Which joint is found at the neck and allows turning of the head?", choices: ["Pivot joint", "Hinge joint", "Fixed joint", "Ball-and-socket joint"], correct: 0, why: "A pivot joint in the neck helps the head turn from side to side.", difficulty: "hard" },
    { q: "Which pair correctly matches bone and position?", choices: ["Femur — thigh", "Humerus — lower leg", "Tibia — upper arm", "Skull — chest"], correct: 0, why: "The femur is the long bone of the thigh.", difficulty: "medium" },
  ],
  "electricity-and-magnetism": [
    { q: "Which type of electricity flows through wires in a complete circuit?", choices: ["Current electricity", "Static electricity", "Magnetic electricity", "Solar eclipse"], correct: 0, why: "Current electricity is electricity that flows through a circuit.", difficulty: "easy" },
    { q: "What is the purpose of a fuse in an electric circuit?", choices: ["To break the circuit when current is too high", "To make wires wet", "To remove magnetism", "To reflect light"], correct: 0, why: "A fuse protects a circuit by melting and breaking it when current becomes too high.", difficulty: "medium" },
    { q: "Which material is magnetic?", choices: ["Iron nail", "Plastic spoon", "Dry wood", "Rubber band"], correct: 0, why: "Iron is attracted by magnets, so an iron nail is magnetic.", difficulty: "easy" },
    { q: "How can a temporary magnet be made using electricity?", choices: ["By winding wire around an iron core and passing current", "By placing wood in water", "By rubbing glass with paper only", "By bending a mirror"], correct: 0, why: "Current through a coil around iron can make an electromagnet, which is a temporary magnet.", difficulty: "hard" },
    { q: "Which action is safest when using electricity?", choices: ["Keeping water away from sockets", "Touching bare wires", "Repairing live wires with wet hands", "Overloading one socket"], correct: 0, why: "Water can conduct electricity, so it should be kept away from sockets and appliances.", difficulty: "easy" },
    { q: "What happens in a short circuit?", choices: ["Current follows an unintended low-resistance path", "Light becomes a shadow", "Bones form urine", "A pulley becomes a wedge"], correct: 0, why: "A short circuit gives current an unintended easy path and can cause heat, fire or damage.", difficulty: "hard" },
    { q: "A dynamo changes mainly:", choices: ["Mechanical energy into electrical energy", "Urine into sweat", "Soil into air", "Sound into bones"], correct: 0, why: "A dynamo uses movement and magnetism to generate electrical energy.", difficulty: "medium" },
    { q: "Which statement about magnet poles is correct?", choices: ["Unlike poles attract", "Like poles attract", "Magnets have no poles", "South poles disappear in water"], correct: 0, why: "North and south poles attract, while like poles repel.", difficulty: "easy" },
  ],
  "energy-resources-environment": [
    { q: "Which energy resource is obtained from moving air?", choices: ["Wind energy", "Coal", "Petroleum", "Biogas only"], correct: 0, why: "Moving air is wind, and wind can provide energy.", difficulty: "easy" },
    { q: "Why are fossil fuels called non-renewable?", choices: ["They take a very long time to form", "They grow back every week", "They are made by pupils", "They come only from sunlight"], correct: 0, why: "Fossil fuels form over millions of years and can get finished.", difficulty: "medium" },
    { q: "Which local example uses animal energy?", choices: ["Oxen pulling a plough", "A mirror reflecting light", "A dry cell in a torch", "A pupil writing with chalk"], correct: 0, why: "Oxen provide animal power when they pull farm tools.", difficulty: "medium" },
    { q: "Which energy resource is commonly used in solar panels?", choices: ["Sunlight", "Coal dust", "Animal dung only", "Tidal water only"], correct: 0, why: "Solar panels use energy from sunlight.", difficulty: "easy" },
    { q: "What environmental problem can result from burning too much fossil fuel?", choices: ["Air pollution", "Better eyesight", "More humus directly", "Stronger bones"], correct: 0, why: "Burning fossil fuels can release smoke and gases that pollute air.", difficulty: "medium" },
    { q: "Which pair is correctly matched?", choices: ["Water — hydro-electricity", "Coal — wind turbine", "Sun — biogas", "Animal dung — petroleum"], correct: 0, why: "Hydro-electricity is generated using moving water.", difficulty: "medium" },
    { q: "An improved stove is useful because it:", choices: ["Uses fuel more efficiently", "Wastes more firewood", "Makes smoke compulsory", "Cuts all trees"], correct: 0, why: "Improved stoves save fuel and can reduce smoke and tree cutting.", difficulty: "medium" },
    { q: "Which energy resource can come from plant residues and animal waste?", choices: ["Biogas", "Coal only", "Petrol", "Kerosene"], correct: 0, why: "Biogas can be made from decomposing plant residues and animal waste.", difficulty: "easy" },
  ],
  "simple-machines-friction": [
    { q: "What is the fixed point on which a lever turns called?", choices: ["Fulcrum", "Load only", "Effort only", "Friction"], correct: 0, why: "A lever turns about a fixed point called a fulcrum.", difficulty: "easy" },
    { q: "Which simple machine is found in a bottle top with spiral threads?", choices: ["Screw", "Pulley", "Wedge only", "Mirror"], correct: 0, why: "A screw is an inclined plane wound around a cylinder, like the thread on a bottle top.", difficulty: "medium" },
    { q: "Which is a wheel and axle?", choices: ["Bicycle wheel", "Knife edge", "Pencil in water", "Rib cage"], correct: 0, why: "A bicycle wheel turns around an axle.", difficulty: "easy" },
    { q: "How can friction in a door hinge be reduced?", choices: ["Apply oil", "Add sand", "Make it rougher", "Remove the hinge"], correct: 0, why: "Oil lubricates moving parts and reduces friction.", difficulty: "easy" },
    { q: "Why are tyres given treads?", choices: ["To increase grip", "To reduce all weight", "To make them transparent", "To form urine"], correct: 0, why: "Treads increase friction between tyres and the road, improving grip.", difficulty: "medium" },
    { q: "Which simple machine is a staircase most like?", choices: ["Inclined plane", "Magnet", "Circuit", "Lens"], correct: 0, why: "A staircase helps people move up gradually, like an inclined plane.", difficulty: "medium" },
    { q: "Mechanical advantage compares:", choices: ["Load and effort", "Light and shadow", "Urine and sweat", "North and south only"], correct: 0, why: "Mechanical advantage shows how much a machine multiplies effort to move a load.", difficulty: "hard" },
    { q: "Which is a nuisance effect of friction in machines?", choices: ["Wearing away moving parts", "Helping shoes grip", "Writing with a pencil", "Braking a bicycle"], correct: 0, why: "In machines, friction can wear parts and waste energy as heat.", difficulty: "medium" },
  ],
  "excretory-system": [
    { q: "Which organ changes excess amino acids into urea?", choices: ["Liver", "Rib", "Lens", "Magnet"], correct: 0, why: "The liver helps process harmful substances and changes excess amino acids into urea.", difficulty: "hard" },
    { q: "Which excretory product is removed by the lungs?", choices: ["Carbon dioxide", "Undigested food", "Saliva", "Tears only"], correct: 0, why: "The lungs remove carbon dioxide and water vapour during breathing out.", difficulty: "easy" },
    { q: "What is the difference between excretion and egestion?", choices: ["Excretion removes body wastes; egestion removes undigested food", "They are exactly the same", "Egestion forms urine", "Excretion means chewing"], correct: 0, why: "Excretion removes wastes made by body processes, while egestion removes undigested food.", difficulty: "hard" },
    { q: "Which part stores urine before it leaves the body?", choices: ["Urinary bladder", "Ureter", "Kidney", "Lung"], correct: 0, why: "The urinary bladder stores urine temporarily.", difficulty: "easy" },
    { q: "Which habit can harm the excretory system?", choices: ["Taking unknown drugs", "Bathing regularly", "Drinking safe water", "Using toilets properly"], correct: 0, why: "Unknown or abused drugs can damage organs such as the kidneys and liver.", difficulty: "medium" },
    { q: "Sweat contains mainly:", choices: ["Water and salts", "Plastic and glass", "Oxygen only", "Food remains"], correct: 0, why: "Sweat contains mostly water and salts, with small amounts of urea.", difficulty: "easy" },
    { q: "Which skin problem is caused by fungi?", choices: ["Ringworm", "Fracture", "Short circuit", "Long sight"], correct: 0, why: "Ringworm is a fungal infection of the skin.", difficulty: "medium" },
    { q: "What should a pupil do if there is blood in urine?", choices: ["Report and seek medical help", "Ignore it", "Drink unsafe water", "Hide from adults"], correct: 0, why: "Blood in urine can show a serious problem and should be reported to a trusted adult or health worker.", difficulty: "medium" },
  ],
  "light-energy": [
    { q: "Which material allows most light to pass through?", choices: ["Transparent material", "Opaque material", "Magnetic material", "Rough material only"], correct: 0, why: "Transparent materials allow most light to pass through.", difficulty: "easy" },
    { q: "Which material allows some light but does not allow clear seeing through it?", choices: ["Translucent material", "Transparent glass", "Opaque wood", "Iron"], correct: 0, why: "Translucent materials allow some light through but objects are not seen clearly.", difficulty: "medium" },
    { q: "What is lateral inversion in a plane mirror?", choices: ["Left and right appear reversed", "The image becomes urine", "Light stops travelling", "The mirror becomes a magnet"], correct: 0, why: "A plane mirror makes left and right appear reversed; this is lateral inversion.", difficulty: "hard" },
    { q: "Which device uses a lens to make small objects look larger?", choices: ["Magnifying glass", "Dynamo", "Pulley", "Fuse"], correct: 0, why: "A magnifying glass uses a lens to enlarge the image of small objects.", difficulty: "easy" },
    { q: "What causes a rainbow?", choices: ["Dispersion of light", "Excretion", "Friction only", "A short circuit"], correct: 0, why: "A rainbow forms when white light is dispersed into different colours by water droplets.", difficulty: "medium" },
    { q: "Which eye defect makes near objects clear but far objects blurred?", choices: ["Short sight", "Long sight", "Ringworm", "Rickets"], correct: 0, why: "In short sight, a person sees near objects more clearly than distant objects.", difficulty: "medium" },
    { q: "Which part of a camera is most similar to the retina of the eye?", choices: ["Film or sensor", "Shutter button", "Camera strap", "Outer case"], correct: 0, why: "The retina receives the image in the eye, like film or a sensor receives the image in a camera.", difficulty: "hard" },
    { q: "Which practice helps care for the eyes?", choices: ["Avoiding sharp objects near the eyes", "Reading in very dim light every night", "Sharing dirty towels", "Looking at bright welding light"], correct: 0, why: "Keeping sharp objects away helps prevent eye injury.", difficulty: "easy" },
  ],
  "interdependence-environment": [
    { q: "Which living thing can depend on another plant for support?", choices: ["Climbing bean plant", "Rock", "River", "Sunlight"], correct: 0, why: "Some climbing plants use other plants for support.", difficulty: "medium" },
    { q: "How do bees help flowering plants?", choices: ["Pollination", "Breaking mirrors", "Making coal", "Stopping sunlight"], correct: 0, why: "Bees transfer pollen between flowers and help pollination.", difficulty: "easy" },
    { q: "Which non-living thing do plants need for photosynthesis?", choices: ["Sunlight", "Plastic", "Glass", "Petroleum only"], correct: 0, why: "Plants need sunlight to make food.", difficulty: "easy" },
    { q: "What is coppicing?", choices: ["Cutting a tree near the base so new shoots grow", "Burning all seedlings", "Removing all roots from soil", "Throwing waste in water"], correct: 0, why: "Coppicing is cutting near the base to allow new shoots to grow.", difficulty: "hard" },
    { q: "What is pollarding?", choices: ["Cutting upper branches to allow regrowth", "Killing all trees", "Planting crops without soil", "Making a short circuit"], correct: 0, why: "Pollarding cuts upper branches while leaving the tree to regrow.", difficulty: "hard" },
    { q: "Which practice protects soil in agroforestry?", choices: ["Growing trees with crops", "Leaving soil bare", "Burning every tree", "Overgrazing"], correct: 0, why: "Trees can reduce erosion, add organic matter and protect soil.", difficulty: "medium" },
    { q: "Which example shows animals depending on other animals?", choices: ["A lion feeding on an antelope", "A stone in sunlight", "A mirror reflecting a face", "A dry cell in a torch"], correct: 0, why: "Some animals depend on other animals for food.", difficulty: "medium" },
    { q: "How can non-living soil benefit from living things?", choices: ["Dead plants add humus", "Rocks eat grass", "Air becomes a goat", "Water turns into a bone"], correct: 0, why: "Dead plants and animals decompose and add humus to soil.", difficulty: "easy" },
  ],
  "population-and-health": [
    { q: "Which action helps control malaria in a community?", choices: ["Sleeping under treated mosquito nets", "Leaving stagnant water", "Refusing treatment", "Keeping bushes around homes"], correct: 0, why: "Treated mosquito nets help prevent mosquito bites that spread malaria.", difficulty: "easy" },
    { q: "Which is a good survey question about sanitation?", choices: ["Does the home have and use a latrine?", "What is the colour of the moon?", "How many magnets are in a mirror?", "Can a rib form a circuit?"], correct: 0, why: "Latrine availability and use is important health survey information.", difficulty: "medium" },
    { q: "Which information is part of demography?", choices: ["Number of people in a home", "Type of mirror in a periscope", "Length of a femur only", "Kind of pulley at a flagpole"], correct: 0, why: "Demography studies human population, including number of people.", difficulty: "easy" },
    { q: "Which behaviour can harm a young person's health and education?", choices: ["Drug abuse", "Hand washing", "Reporting danger", "Joining a health club"], correct: 0, why: "Drug abuse can damage health, learning and community life.", difficulty: "medium" },
    { q: "What should learners do when discussing sensitive health problems?", choices: ["Use respectful language and seek guidance from trusted adults", "Insult affected people", "Spread rumours", "Hide serious danger"], correct: 0, why: "Sensitive health issues should be handled respectfully and with guidance from trusted adults or health workers.", difficulty: "medium" },
    { q: "Which activity can a health club organise?", choices: ["Cleaning campaign", "Throwing rubbish in wells", "Encouraging dirty hands", "Hiding sickness records"], correct: 0, why: "Health clubs can organise cleaning and health education activities.", difficulty: "easy" },
    { q: "Which condition can spread quickly in overcrowded homes?", choices: ["Cough infections", "Fracture from a fall only", "Lateral inversion", "A short circuit"], correct: 0, why: "Overcrowding can help respiratory infections spread from person to person.", difficulty: "medium" },
    { q: "Why should health survey information be organised after collection?", choices: ["So problems can be understood and addressed", "So it can be hidden forever", "So sickness increases", "So pupils stop learning"], correct: 0, why: "Organising survey data helps people identify common problems and plan action.", difficulty: "hard" },
  ],
};

const SCIENCE_BANK: TopicBank[] = SCIENCE_TOPICS.map((topic) => ({
  topicId: topic.id,
  topicTitle: topic.title,
  themeName: topic.themeName,
  subjectId: "science",
  subjectName: "Integrated Science",
  questions: [
    ...topic.quiz.map((question, index) => ({
      ...question,
      difficulty: (index < 2 ? "easy" : index < 5 ? "medium" : "hard") as BankQuestion["difficulty"],
    })),
    ...(SCIENCE_EXTRA_QUESTIONS[topic.id] ?? []),
  ],
}));

export const ALL_BANKS: TopicBank[] = [...MATHS_BANK, ...SCIENCE_BANK];

export function getBank(topicId: string): TopicBank | undefined {
  return ALL_BANKS.find((b) => b.topicId === topicId);
}

export function listBankTopics(): Array<{ topicId: string; topicTitle: string; themeName: string; subjectId: SubjectId; subjectName: SubjectName; count: number }> {
  return ALL_BANKS.map((b) => ({
    topicId: b.topicId,
    topicTitle: b.topicTitle,
    themeName: b.themeName,
    subjectId: b.subjectId,
    subjectName: b.subjectName,
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
export function sampleAcrossTopics(topicIds: string[], n: number): Array<BankQuestion & { topicTitle: string; topicId: string; subjectName: SubjectName }> {
  const pool: Array<BankQuestion & { topicTitle: string; topicId: string; subjectName: SubjectName }> = [];
  for (const tid of topicIds) {
    const b = getBank(tid);
    if (!b) continue;
    for (const q of b.questions) {
      pool.push({ ...q, topicId: b.topicId, topicTitle: b.topicTitle, subjectName: b.subjectName });
    }
  }
  return shuffle(pool).slice(0, Math.min(n, pool.length));
}

export function totalBankQuestions(): number {
  return ALL_BANKS.reduce((sum, b) => sum + b.questions.length, 0);
}
