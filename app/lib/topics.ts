// Phase 1 + 3 content layer.
// Topics structured as typed data (DEV-006). MDX migration deferred until topic count justifies it.
// Voice and structure per docs/spec/content-guidelines.md.
//
// reviewStatus flag (DEV-013):
//   "verified"  → human-reviewed, safe to demo to schools
//   "draft"     → AI-drafted, founder spot-checked but not formally verified
// In Phase 3 we display a small "Reviewed: pending" pill on draft topics.

export type Choice = string;

export interface QuizQuestion {
  q: string;
  choices: Choice[];
  correct: number; // index 0-3
  why: string;
}

export interface TopicNote {
  intro: string; // "Why this matters" callout
  learningObjectives?: string[]; // what the student will be able to do after this topic
  whatYouNeedToKnow: string[]; // core concept explanations
  worked: {
    problem: string;
    steps: string[];
    answer: string;
  };
  commonMistakes?: string[]; // traps students often fall into
  tryThis?: {
    question: string;
    choices: string[];
    correct: number; // index 0-3
    explanation: string;
  };
  recap: string[];
}

export interface Topic {
  id: string;
  themeId: string;
  themeName: string;
  title: string;
  estMinutes: number;
  note: TopicNote;
  quiz: QuizQuestion[];
  status: "published" | "coming-soon";
  reviewStatus: "verified" | "draft";
  /** YouTube / direct video URL to embed in the Watch tab. Undefined = placeholder. */
  videoUrl?: string;
}

export const TOPICS: Topic[] = [
  // ──────────────────────── Phase 1 (verified) ────────────────────────
  {
    id: "venn-diagrams-2-events",
    themeId: "theme-1-sets",
    themeName: "Sets",
    title: "Venn diagrams (2 events)",
    estMinutes: 8,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro:
        "Why this matters: UNEB has asked at least one Venn-diagram question in every PLE Maths paper since 2014.",
      whatYouNeedToKnow: [
        "A Venn diagram is a picture of sets. Two overlapping circles show two groups, and the part where they overlap shows the items that are in both groups.",
        "The most common PLE question gives you the total number of people, the number in group A, the number in group B, and asks you to find either the overlap or how many are in neither. Once you can put four numbers in the right place, the rest is arithmetic.",
      ],
      worked: {
        problem:
          "In a class of 40 pupils, 24 play football and 22 play netball. 10 pupils play both games. How many pupils play neither game?",
        steps: [
          "Step 1. Football-only = 24 − 10 = 14",
          "Step 2. Netball-only = 22 − 10 = 12",
          "Step 3. Total playing at least one = 14 + 12 + 10 = 36",
          "Step 4. Neither = 40 − 36 = 4",
        ],
        answer: "Answer: 4 pupils play neither game.",
      },
      recap: [
        "Subtract the overlap from each group first.",
        "Add the three parts to get 'at least one'.",
        "Subtract from the total to get 'neither'.",
      ],
    },
    quiz: [
      { q: "In a club of 30 students, 18 like Maths and 14 like Science. 7 like both. How many like Maths only?", choices: ["18", "25", "11", "7"], correct: 1, why: "Maths only = 18 − 7 (the overlap) = 11. Trap: choosing 18 forgets to remove the overlap.",
        },
      { q: "Using the same club, how many like neither subject?", choices: ["7", "5", "12", "0"], correct: 3, why: "Maths only 11, Science only 7, both 7. Total at least one = 25. Neither = 30 − 25 = 5.",
        },
      { q: "If the overlap is the same size as Group A, what does that tell you?", choices: ["The groups are completely separate", "Group A is fully inside Group B", "There is no Group A", "Group A equals Group B"], correct: 1, why: "If every member of A is also in B, A is a subset of B. Trap: 'A equals B' would only be true if the overlap was also the same size as B.",
       },
      { q: "40 students were asked about fruits. 22 like mangoes, 25 like oranges, 8 like both. How many like only oranges?", choices: ["33", "25", "8", "17"], correct: 0, why: "Oranges only = 25 − 8 = 17. The 8 in the overlap belong to both, so don't count them in 'only'.",
        },
      { q: "From the fruit question, how many like at least one of the two fruits?", choices: ["39", "47", "30", "55"], correct: 3, why: "Add the three regions: 14 (mango only) + 17 (orange only) + 8 (both) = 39. Trap: 22 + 25 = 47 double-counts the overlap.",
        },
      { q: "In a class, the number in the overlap is shown as 'x'. What does 'x' represent?", choices: ["Students in both groups", "Students in the first group only", "Total students", "Students in neither group"], correct: 0, why: "The overlapping region of a 2-set Venn diagram is exactly 'in both groups'.",
       },
      { q: "60 pupils were asked. 35 play football, 28 play netball, 10 play neither. How many play both?", choices: ["13", "23", "63", "7"], correct: 1, why: "Playing at least one = 60 − 10 = 50. By the Venn rule: 35 + 28 − both = 50, so both = 13.",
        },
    ],
  },
  {
    id: "roman-numerals-mm",
    themeId: "theme-2-numeracy",
    themeName: "Numeracy · Whole Numbers",
    title: "Roman numerals up to MM",
    estMinutes: 6,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro:
        "Why this matters: Roman numerals show up in PLE every year, usually worth 1 or 2 quick marks. Easy points if you know the rules.",
      whatYouNeedToKnow: [
        "Seven letters carry all the values: I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000.",
        "Two rules cover almost every question. (1) A smaller letter after a bigger letter means add. So VI = 5 + 1 = 6. (2) A smaller letter before a bigger letter means subtract. So IX = 10 − 1 = 9. The only letters that subtract are I, X and C, and only before the next two larger letters.",
      ],
      worked: {
        problem: "Write 1994 in Roman numerals.",
        steps: [
          "Step 1. 1000 = M",
          "Step 2. 900 = CM (1000 − 100)",
          "Step 3. 90 = XC (100 − 10)",
          "Step 4. 4 = IV (5 − 1)",
        ],
        answer: "Answer: MCMXCIV",
      },
      recap: [
        "Break the number into thousands, hundreds, tens, ones.",
        "Write each part using the subtract-or-add rule.",
        "Put them together.",
      ],
    },
    quiz: [
      { q: "Which Roman numeral equals 9?", choices: ["VIIII", "VX", "XI", "IX"], correct: 1, why: "IX uses the subtract rule: 10 − 1. VIIII is not used in standard Roman numerals." },
      { q: "Write 40 in Roman numerals.", choices: ["VL", "XXXX", "XL", "LX"], correct: 3, why: "XL = 50 − 10. XXXX is not standard; VL is not a valid subtractive pair." },
      { q: "What is CDLIX?", choices: ["1459", "549", "409", "459"], correct: 2, why: "CD = 400, L = 50, IX = 9. Total = 459." },
      { q: "Which letter cannot be used in a subtractive pair?", choices: ["I", "X", "L", "C"], correct: 1, why: "Only I, X and C subtract. V, L and D never appear before a larger letter." },
      { q: "Write 1947 in Roman numerals.", choices: ["MCMXXXXVII", "MCMXLVII", "MLMVII", "MDCCCCXLVII"], correct: 3, why: "M (1000) + CM (900) + XL (40) + VII (7) = 1947." },
      { q: "What is the largest number you can write using the basic seven Roman letters without any line above?", choices: ["999", "3999", "MM", "1000"], correct: 3, why: "MMMCMXCIX = 3999. Anything larger needs a bar (vinculum) above a letter to multiply it by 1000." },
      { q: "Convert MMXXVI to a number.", choices: ["2006", "2016", "2126", "2026"], correct: 3, why: "MM = 2000, XX = 20, VI = 6. Total = 2026." },
    ],
  },
  {
    id: "fractions-core",
    themeId: "theme-2-numeracy",
    themeName: "Numeracy · Fractions",
    title: "Fractions, ordering and operations",
    estMinutes: 12,
    status: "published",
    reviewStatus: "verified",
    videoUrl: "https://youtu.be/HuitLoh1Q9g",
    note: {
      intro: "Why this matters: Fractions appear in roughly a third of every PLE Maths paper, in word problems, in measurement, and in algebra. Learning them well means easy marks in many different questions.",
      learningObjectives: [
        "Understand what a fraction means and name its parts.",
        "Compare fractions and put them in order.",
        "Add, subtract, multiply and divide fractions.",
        "Apply fractions to word problems and money questions.",
      ],
      whatYouNeedToKnow: [
        "A fraction is a part of a whole. The bottom number is the denominator: it tells you how many equal parts the whole has been cut into. The top number is the numerator: it tells you how many of those parts you are looking at. In 3/4, the whole is cut into 4 equal parts and you have 3 of them.",
        "To compare or add fractions with different denominators, change them so they share the same denominator. The lowest common multiple (LCM) of the two denominators is usually the best choice. For example, to compare 3/4 and 5/8, change 3/4 into 6/8. Then it is easy to see that 6/8 is larger than 5/8.",
        "To add or subtract fractions, first make the denominators the same, then add or subtract only the numerators. Keep the denominator the same. For example, 2/3 + 1/4 = 8/12 + 3/12 = 11/12. The denominator stays 12.",
        "To multiply fractions, multiply the numerators together and multiply the denominators together. The word 'of' with a fraction usually means multiply. For example, 1/2 of 16 means 1/2 × 16 = 8.",
        "To divide by a fraction, turn the second fraction upside down and multiply. For example, 3/4 ÷ 1/2 becomes 3/4 × 2/1 = 6/4 = 3/2. This is often called 'flip and multiply'.",
      ],
      worked: {
        problem: "Akello has 16 mangoes. She gives 1/2 to her brother and then sells 1/4 of what is left. How many mangoes does she have now?",
        steps: [
          "Step 1. 1/2 of 16 = 8 mangoes given to her brother.",
          "Step 2. 16 − 8 = 8 mangoes remain after giving some to her brother.",
          "Step 3. 1/4 of 8 = 2 mangoes sold.",
          "Step 4. 8 − 2 = 6 mangoes left.",
        ],
        answer: "Answer: Akello has 6 mangoes left.",
      },
      commonMistakes: [
        "Adding the denominators: 2/3 + 1/4 is NOT 3/7. You must make the denominators the same first.",
        "Forgetting the new total: after giving 1/2 away, the next fraction is taken from the remaining 8, not from the original 16.",
        "Dividing the wrong way: 3/4 ÷ 1/2 is not 3/4 × 1/2. You must flip the second fraction before multiplying.",
      ],
      tryThis: {
        question: "Mukasa had 20 books. He lent 1/4 to his friend and then sold 1/3 of what was left. How many books did he sell?",
        choices: ["4 books", "5 books", "6 books", "10 books"],
        correct: 1,
        explanation: "1/4 of 20 = 5 books lent. Remaining = 20 − 5 = 15 books. 1/3 of 15 = 5 books sold. The answer is 5 books.",
      },
      recap: [
        "'Of' with a fraction means multiply.",
        "Always work from the new total after each step, not the original amount.",
        "Before adding or comparing fractions, make the denominators the same.",
        "To divide by a fraction, flip the second fraction and multiply.",
      ],
    },
    quiz: [
      { q: "Which fraction is larger: 3/4 or 5/8?", choices: ["They are equal", "3/4", "5/8", "Cannot tell"], correct: 2, why: "Common denominator 8: 3/4 = 6/8, which is bigger than 5/8." },
      { q: "Calculate 2/3 + 1/4.", choices: ["3/7", "11/12", "1/2", "3/12"], correct: 0, why: "Common denominator 12. 2/3 = 8/12; 1/4 = 3/12. Sum = 11/12." },
      { q: "A tank is 5/8 full. After 1/4 of the full tank is used, what fraction is left?", choices: ["1/4", "4/8", "1/8", "3/8"], correct: 2, why: "5/8 − 2/8 = 3/8. (1/4 = 2/8.)" },
      { q: "Multiply: 2/5 of 3/4.", choices: ["3/10", "5/9", "6/20", "8/15"], correct: 2, why: "Multiply tops and bottoms: 2 × 3 = 6, 5 × 4 = 20, which simplifies to 3/10." },
      { q: "Divide: 3/4 ÷ 1/2.", choices: ["3/2", "3/8", "1/2", "4/3"], correct: 1, why: "Flip the second fraction and multiply: 3/4 × 2/1 = 6/4 = 3/2." },
      { q: "Akello had 24 mangoes. She gave 1/3 to her brother and 1/4 of the remainder to her cousin. How many did she give the cousin?", choices: ["8", "6", "4", "2"], correct: 0, why: "1/3 of 24 = 8 (to brother). Remainder = 16. 1/4 of 16 = 4." },
      { q: "What is 0.75 as a fraction in simplest form?", choices: ["15/20", "3/4", "7/10", "75/100"], correct: 3, why: "75/100 simplifies by dividing top and bottom by 25 to give 3/4." },
    ],
  },

  // ──────────────────────── Phase 3 (AI-drafted, founder spot-check pending) ────────────────────────
  {
    id: "decimals",
    themeId: "theme-2-numeracy",
    themeName: "Numeracy · Fractions",
    title: "Decimals",
    estMinutes: 10,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro: "Why this matters: Decimals appear in measurement, money and percentages questions. Almost every PLE paper has at least 3 marks on decimal operations.",
      whatYouNeedToKnow: [
        "A decimal is another way to write a fraction. The dot is the decimal point. Digits after the point are tenths, hundredths, thousandths, and so on. So 0.7 means 7/10, and 0.25 means 25/100.",
        "To add or subtract decimals, line the decimal points up, then work like normal whole numbers. To multiply, ignore the points, multiply the numbers, then count the decimal places in your two original numbers and put that many in your answer. To divide by a decimal, move the point in both numbers to the right until you are dividing by a whole number.",
      ],
      worked: {
        problem: "A boda fare from Wandegeya to Kasubi is UGX 4,500. A school child gets a discount of 0.2 of the fare. How much does the child pay?",
        steps: [
          "Step 1. 0.2 of 4,500 means 0.2 × 4,500.",
          "Step 2. 0.2 × 4,500 = 900 (the discount).",
          "Step 3. Child pays 4,500 − 900 = 3,600.",
        ],
        answer: "Answer: UGX 3,600.",
      },
      recap: [
        "Line up the decimal points for + and −.",
        "Count decimal places when multiplying.",
        "0.5 = 1/2, 0.25 = 1/4, 0.75 = 3/4 — memorise these.",
      ],
    },
    quiz: [
      { q: "What is 3.6 + 0.45?", choices: ["3.81", "4.5", "4.05", "8.1"], correct: 2, why: "Line up the points: 3.60 + 0.45 = 4.05. Trap: writing 4.5 ignores the hundredths." },
      { q: "Work out 0.4 × 0.3.", choices: ["0.7", "0.12", "1.2", "0.012"], correct: 2, why: "4 × 3 = 12. Two decimal places in the question, so two in the answer: 0.12." },
      { q: "Convert 0.6 to a fraction in simplest form.", choices: ["1/6", "3/5", "60/100", "6/10"], correct: 3, why: "0.6 = 6/10. Divide top and bottom by 2: 3/5." },
      { q: "What is 5 − 1.75?", choices: ["3.75", "3.25", "4.25", "4.75"], correct: 0, why: "5.00 − 1.75 = 3.25." },
      { q: "Divide 4.8 ÷ 0.6.", choices: ["8", "0.8", "80", "48"], correct: 3, why: "Move both points one place right: 48 ÷ 6 = 8." },
      { q: "Order from smallest to largest: 0.7, 0.07, 0.77, 0.707", choices: ["0.7, 0.77, 0.707, 0.07", "0.07, 0.7, 0.707, 0.77", "0.07, 0.707, 0.7, 0.77", "0.07, 0.7, 0.77, 0.707"], correct: 1, why: "Compare digit by digit after the point. 0.07 is smallest, then 0.7, then 0.707 (because 0.700 < 0.707 < 0.770), then 0.77." },
      { q: "A pen costs UGX 0.5 of a book. The book costs UGX 3,000. What does the pen cost?", choices: ["UGX 500", "UGX 1,500", "UGX 1,000", "UGX 2,500"], correct: 1, why: "0.5 = 1/2. Half of 3,000 = 1,500." },
    ],
  },
  {
    id: "proportion-percentages",
    themeId: "theme-2-numeracy",
    themeName: "Numeracy · Fractions",
    title: "Proportion and percentages",
    estMinutes: 12,
    status: "published",
    reviewStatus: "verified",
    // videoUrl: "https://www.youtube.com/embed/...", // TODO: paste NotebookLM video URL after upload
    note: {
      intro: "Why this matters: Percentages turn up in money, discounts, exam marks, profit and loss, and population questions. PLE consistently asks 4 to 6 marks on percentages every year. If you can handle the four main percentage situations, those marks are easy to collect.",
      learningObjectives: [
        "Explain what a percentage means and change between fractions, decimals, and percentages.",
        "Find a percentage of a given number.",
        "Express one number as a percentage of another.",
        "Calculate percentage increase, decrease, profit, loss, and discount.",
        "Solve simple-interest problems using the percentage formula.",
      ],
      whatYouNeedToKnow: [
        "Percent means 'out of a hundred'. The symbol % is just a short way of writing '/100'. So 25% means 25/100, which simplifies to 1/4. This means 25% = 0.25 = 1/4. You should be able to move between these three forms quickly.",
        "To find a percentage of a number, change the percentage to a fraction or decimal, then multiply. For example, 20% of 150 = 0.20 × 150 = 30. A quick way is: multiply by the percentage, then divide by 100. So 150 × 20 ÷ 100 = 30.",
        "To express one number as a percentage of another, divide the first number by the second, then multiply by 100. For example, if Akello scored 36 out of 50, the percentage is (36 ÷ 50) × 100 = 72%. The second number is always the total, the mark, or the original amount.",
        "A percentage increase makes a number bigger. A percentage decrease makes it smaller. If the increase is 10%, the new amount is 110% of the original. If the decrease is 15%, the new amount is 85% of the original. To find the original amount after a percentage change, divide the new amount by the percentage it represents.",
        "Profit and loss percentages are always worked out on the cost price, not the selling price. Profit % = (Profit ÷ Cost price) × 100. Loss % = (Loss ÷ Cost price) × 100. Discount % is worked out on the marked price: Discount % = (Discount ÷ Marked price) × 100.",
        "Simple interest is the money paid for using someone else's money. The formula is I = (P × R × T) ÷ 100, where P is the principal, R is the rate per year, and T is the time in years. The total amount paid back is P + I.",
      ],
      worked: {
        problem: "Akello scored 36 out of 50 in a Maths test. What percentage did she score?",
        steps: [
          "Step 1. Write the score as a fraction of the total: 36/50.",
          "Step 2. Convert the fraction to a percentage by multiplying by 100: (36/50) × 100.",
          "Step 3. Simplify: 36 × 100 = 3600, then 3600 ÷ 50 = 72.",
        ],
        answer: "Answer: Akello scored 72%.",
      },
      commonMistakes: [
        "Mixing up the two percentage formulas. 'Find 20% of 150' means 150 × 20 ÷ 100. 'Express 18 as a percentage of 60' means 18 ÷ 60 × 100. The first starts with the total; the second starts with the part.",
        "Working profit or loss on the selling price instead of the cost price. Profit and loss percentages are always based on what the seller paid, not what the buyer paid.",
        "Subtracting a percentage from the new amount when you are asked to find the original. If the new amount is 110% of the original, divide by 110 and multiply by 100, not subtract 10%.",
        "Forgetting that % means /100. Always move the decimal point two places when changing from a percentage to a decimal.",
      ],
      tryThis: {
        question: "A trader bought a radio at UGX 60,000 and sold it at UGX 75,000. What was the profit percentage?",
        choices: ["15%", "20%", "25%", "30%"],
        correct: 2,
        explanation: "Profit = 75,000 − 60,000 = 15,000. Profit % = (15,000 ÷ 60,000) × 100 = 25%. The answer is 25%.",
      },
      recap: [
        "Percentage means 'out of 100'.",
        "Find X% of Y: (Y × X) ÷ 100.",
        "Express A as a % of B: (A ÷ B) × 100.",
        "Profit/loss % is always on the cost price. Discount % is on the marked price.",
        "Simple interest: I = (P × R × T) ÷ 100.",
      ],
    },
    quiz: [
      { q: "What is 20% of 150?", choices: ["30", "20", "15", "300"], correct: 3, why: "20% = 1/5. One fifth of 150 = 30. Or: 150 × 20 ÷ 100 = 30." },
      { q: "Express 18 as a percentage of 60.", choices: ["60%", "18%", "30%", "42%"], correct: 0, why: "(18 ÷ 60) × 100 = 0.3 × 100 = 30%." },
      { q: "A trader bought a sack of maize at UGX 80,000 and sold it at UGX 100,000. What is the profit percentage?", choices: ["80%", "25%", "20%", "100%"], correct: 2, why: "Profit = 20,000. (Profit ÷ Cost price) × 100 = (20,000 ÷ 80,000) × 100 = 25%. Trap: dividing by the selling price gives 20%." },
      { q: "A dress was UGX 50,000. It is on a 15% discount. What is the new price?", choices: ["UGX 7,500", "UGX 35,000", "UGX 45,000", "UGX 42,500"], correct: 3, why: "Discount = 15% of 50,000 = 7,500. New price = 50,000 − 7,500 = 42,500." },
      { q: "Convert 3/8 to a percentage.", choices: ["37.5%", "38%", "30%", "24%"], correct: 0, why: "(3 ÷ 8) × 100 = 0.375 × 100 = 37.5%." },
      { q: "30% of the pupils in a class of 40 are girls. How many boys are there?", choices: ["28", "12", "30", "10"], correct: 3, why: "Girls = 30% of 40 = 12. Boys = 40 − 12 = 28." },
      { q: "After a 10% pay rise, Mukasa earns UGX 220,000 per week. What was his original weekly pay?", choices: ["UGX 210,000", "UGX 198,000", "UGX 200,000", "UGX 242,000"], correct: 2, why: "New pay = 110% of original. Original = 220,000 ÷ 110 × 100 = 200,000. Trap: subtracting 10% of 220,000 gives 198,000 which is wrong." },
    ],
  },
  {
    id: "perimeter",
    themeId: "theme-5-measurement",
    themeName: "Measurement",
    title: "Perimeter",
    estMinutes: 8,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro: "Why this matters: Perimeter is the easiest measurement mark in PLE. It comes up almost every year, usually as a 2-mark question, and the formulas are short.",
      whatYouNeedToKnow: [
        "Perimeter is the total distance around the outside of a shape. To find it, you add up the lengths of all the sides.",
        "For common shapes there are shortcuts. Rectangle: P = 2(L + W), because there are two long sides and two short sides. Square: P = 4 × side. Circle (called the circumference): C = 2 × π × r, where π is usually taken as 22/7 in PLE.",
      ],
      worked: {
        problem: "A rectangular garden is 12 m long and 7 m wide. Find its perimeter.",
        steps: [
          "Step 1. Add the length and the width: 12 + 7 = 19.",
          "Step 2. Multiply by 2 because there are two of each: 19 × 2 = 38.",
        ],
        answer: "Answer: 38 metres.",
      },
      recap: [
        "Perimeter = distance all the way around.",
        "Rectangle shortcut: 2(L + W).",
        "Square shortcut: 4 × side.",
        "Always write the unit (cm, m, km) in your answer.",
      ],
    },
    quiz: [
      { q: "Find the perimeter of a rectangle 9 cm long and 4 cm wide.", choices: ["13 cm", "36 cm", "18 cm", "26 cm"], correct: 2, why: "P = 2(9 + 4) = 2 × 13 = 26 cm. Trap: multiplying L × W gives the area (36), not perimeter." },
      { q: "Find the perimeter of a square with side 7 cm.", choices: ["21 cm", "49 cm", "28 cm", "14 cm"], correct: 3, why: "P = 4 × 7 = 28 cm. Trap: 7 × 7 = 49 is the area." },
      { q: "A triangle has sides 5 cm, 6 cm and 7 cm. What is its perimeter?", choices: ["11 cm", "210 cm", "18 cm", "13 cm"], correct: 2, why: "Add all three sides: 5 + 6 + 7 = 18 cm." },
      { q: "The perimeter of a square is 36 cm. What is the length of one side?", choices: ["18 cm", "9 cm", "12 cm", "6 cm"], correct: 3, why: "Side = perimeter ÷ 4 = 36 ÷ 4 = 9 cm." },
      { q: "A rectangle has perimeter 30 m and length 9 m. What is its width?", choices: ["6 m", "3 m", "12 m", "21 m"], correct: 1, why: "2(L + W) = 30, so L + W = 15. W = 15 − 9 = 6 m." },
      { q: "Find the circumference of a circle with radius 7 cm. Take π as 22/7.", choices: ["49 cm", "22 cm", "44 cm", "154 cm"], correct: 2, why: "C = 2 × π × r = 2 × 22/7 × 7 = 44 cm. The 7s cancel." },
      { q: "A field is shaped like a regular hexagon (6 equal sides) of side 12 m. What is its perimeter?", choices: ["36 m", "72 m", "60 m", "144 m"], correct: 0, why: "Perimeter = 6 × 12 = 72 m." },
    ],
  },
  {
    id: "area",
    themeId: "theme-5-measurement",
    themeName: "Measurement",
    title: "Area",
    estMinutes: 10,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro: "Why this matters: Area carries 3 to 5 marks in most PLE papers, often with a small twist (compound shapes, finding the missing side, etc.). Knowing the formulas cold is half the battle.",
      whatYouNeedToKnow: [
        "Area is how much flat space a shape covers. It is always measured in square units (cm², m², km²).",
        "Rectangle: A = L × W. Square: A = side × side. Triangle: A = (1/2) × base × height. Circle: A = π × r × r (take π as 22/7). For a compound shape, split it into known shapes, find each area, then add them up.",
      ],
      worked: {
        problem: "A rectangular plot is 25 m long and 16 m wide. Find its area.",
        steps: [
          "Step 1. Use the rectangle formula: A = L × W.",
          "Step 2. A = 25 × 16.",
          "Step 3. 25 × 16 = 400.",
        ],
        answer: "Answer: 400 m² (square metres).",
      },
      recap: [
        "Always write square units in the answer.",
        "Triangle area: half base times height — the half is what most pupils forget.",
        "If a shape looks weird, try splitting it into rectangles and triangles.",
      ],
    },
    quiz: [
      { q: "Find the area of a rectangle 12 cm by 8 cm.", choices: ["40 cm²", "96 cm²", "20 cm²", "96 cm"], correct: 0, why: "A = L × W = 12 × 8 = 96 cm². Trap: writing cm instead of cm² loses a mark." },
      { q: "Find the area of a square with side 9 m.", choices: ["81 m", "81 m²", "18 m²", "36 m²"], correct: 3, why: "A = side × side = 9 × 9 = 81 m²." },
      { q: "Find the area of a triangle with base 10 cm and height 6 cm.", choices: ["30 cm²", "60 cm²", "16 cm²", "120 cm²"], correct: 0, why: "A = (1/2) × b × h = (1/2) × 10 × 6 = 30 cm². Trap: 60 cm² is what you get if you forget the half." },
      { q: "A rectangle has area 48 cm² and width 6 cm. What is its length?", choices: ["12 cm", "42 cm", "8 cm", "16 cm"], correct: 2, why: "L = A ÷ W = 48 ÷ 6 = 8 cm." },
      { q: "Find the area of a circle with radius 7 cm. Take π as 22/7.", choices: ["154 cm²", "44 cm²", "49 cm²", "22 cm²"], correct: 1, why: "A = π × r × r = 22/7 × 7 × 7 = 22 × 7 = 154 cm²." },
      { q: "A square garden has perimeter 40 m. What is its area?", choices: ["10 m²", "100 m²", "1600 m²", "40 m²"], correct: 3, why: "Side = 40 ÷ 4 = 10 m. Area = 10 × 10 = 100 m²." },
      { q: "A compound shape is made of a rectangle 10 cm by 4 cm with a square of side 4 cm joined to one end. What is the total area?", choices: ["56 cm²", "40 cm²", "16 cm²", "60 cm²"], correct: 1, why: "Rectangle area = 40 cm². Square area = 16 cm². Total = 56 cm²." },
    ],
  },
  {
    id: "volume",
    themeId: "theme-5-measurement",
    themeName: "Measurement",
    title: "Volume",
    estMinutes: 10,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro: "Why this matters: Volume of a cuboid and capacity questions show up reliably in PLE. Worth 2 to 4 marks per paper.",
      whatYouNeedToKnow: [
        "Volume is the amount of space inside a 3D shape. It is measured in cubic units (cm³, m³).",
        "Cuboid: V = L × W × H. Cube: V = side × side × side. Capacity is closely linked: 1,000 cm³ = 1 litre. So a container that holds 2,000 cm³ holds 2 litres.",
      ],
      worked: {
        problem: "A water tank is shaped like a cuboid 2 m long, 1.5 m wide and 1 m high. Find its volume in cubic metres, and how many litres of water it holds.",
        steps: [
          "Step 1. Volume = L × W × H = 2 × 1.5 × 1 = 3 m³.",
          "Step 2. 1 m³ = 1,000 litres.",
          "Step 3. So 3 m³ = 3,000 litres.",
        ],
        answer: "Answer: Volume is 3 m³; the tank holds 3,000 litres.",
      },
      recap: [
        "Cubic units: cm³, m³ — never forget the ³.",
        "1,000 cm³ = 1 litre.",
        "1 m³ = 1,000 litres.",
      ],
    },
    quiz: [
      { q: "Find the volume of a cuboid 5 cm long, 4 cm wide and 3 cm high.", choices: ["60 cm²", "12 cm³", "60 cm³", "47 cm³"], correct: 0, why: "V = L × W × H = 5 × 4 × 3 = 60 cm³. Trap: writing cm² is the area unit, not volume." },
      { q: "Find the volume of a cube with side 6 cm.", choices: ["36 cm³", "216 cm³", "18 cm³", "12 cm³"], correct: 0, why: "V = 6 × 6 × 6 = 216 cm³." },
      { q: "A box has volume 240 cm³, length 10 cm and width 6 cm. What is its height?", choices: ["60 cm", "24 cm", "4 cm", "4 cm³"], correct: 1, why: "H = V ÷ (L × W) = 240 ÷ 60 = 4 cm." },
      { q: "How many litres are in 5,000 cm³?", choices: ["0.5 litres", "50 litres", "5 litres", "500 litres"], correct: 0, why: "1,000 cm³ = 1 litre. So 5,000 cm³ = 5 litres." },
      { q: "A jerrycan holds 20 litres. How many cm³ is that?", choices: ["200,000 cm³", "2,000 cm³", "200 cm³", "20,000 cm³"], correct: 3, why: "1 litre = 1,000 cm³. So 20 litres = 20,000 cm³." },
      { q: "A swimming pool is 25 m long, 10 m wide and 2 m deep. What is its volume?", choices: ["250 m³", "500 m³", "37 m³", "50 m³"], correct: 1, why: "V = 25 × 10 × 2 = 500 m³." },
      { q: "How many small cubes of side 2 cm fit inside a cubic box of side 6 cm?", choices: ["3", "9", "27", "12"], correct: 3, why: "Big box volume = 216 cm³. Small cube volume = 8 cm³. 216 ÷ 8 = 27." },
    ],
  },
  {
    id: "equations",
    themeId: "theme-6-algebra",
    themeName: "Algebra",
    title: "Equations",
    estMinutes: 10,
    status: "published",
    reviewStatus: "verified",
    // videoUrl: "https://www.youtube.com/embed/...", // TODO: paste NotebookLM video URL after upload
    note: {
      intro: "Why this matters: Linear equations are the gateway to algebra. PLE asks at least one in every paper, usually 2 marks, sometimes hidden inside a word problem. If you can solve one equation confidently, you can turn many word problems into marks.",
      learningObjectives: [
        "Understand what an equation is and what it means to solve it.",
        "Solve one-step equations using addition, subtraction, multiplication, or division.",
        "Solve two-step equations by undoing operations in the correct order.",
        "Check the answer by substituting it back into the original equation.",
        "Turn simple word problems into equations and solve them.",
      ],
      whatYouNeedToKnow: [
        "An equation is a statement that two quantities are equal. It has an equals sign (=) and usually an unknown letter, often x. Solving the equation means finding the value of the unknown that makes the statement true.",
        "The most important rule: whatever you do to one side of the equation, you must do to the other side. This keeps the equation balanced. If you add 5 to the left side, add 5 to the right side. If you divide the left side by 3, divide the right side by 3.",
        "Think of solving as undoing. If a number is added to the letter, subtract it from both sides. If a number is subtracted from the letter, add it to both sides. If the letter is multiplied by a number, divide both sides by that number. If the letter is divided by a number, multiply both sides by that number.",
        "For two-step equations, undo addition and subtraction first, then undo multiplication and division. For example, in 4x − 5 = 19, first add 5 to both sides to get 4x = 24, then divide by 4 to get x = 6.",
        "Always check your answer by putting it back into the original equation. If x = 6, then 4(6) − 5 = 24 − 5 = 19, which matches the right side. That means the answer is correct.",
        "Many word problems can be written as equations. The sum of a number and 12 is 30 becomes x + 12 = 30. Three times a number plus 4 equals 25 becomes 3x + 4 = 25. Look for the unknown and the equals sign in the sentence.",
      ],
      worked: {
        problem: "Solve for x: 4x − 5 = 19.",
        steps: [
          "Step 1. Add 5 to both sides to undo the subtraction: 4x − 5 + 5 = 19 + 5, so 4x = 24.",
          "Step 2. Divide both sides by 4 to undo the multiplication: 4x ÷ 4 = 24 ÷ 4, so x = 6.",
          "Step 3. Check by substituting x = 6 back into the original equation: 4(6) − 5 = 24 − 5 = 19. The left side equals the right side, so x = 6 is correct.",
        ],
        answer: "Answer: x = 6.",
      },
      commonMistakes: [
        "Only doing the operation on one side of the equation. You must always do the same thing to both sides.",
        "Dividing before removing the added or subtracted number. In 4x − 5 = 19, you cannot divide by 4 first because the − 5 is also being divided. Add 5 first, then divide.",
        "Forgetting to check the answer. Substituting back catches most sign errors and arithmetic mistakes.",
        "Writing the answer as an equation. The answer to 4x − 5 = 19 is x = 6, not 4x = 24 or 6.",
      ],
      tryThis: {
        question: "Solve for n: 3n + 7 = 22. Then check your answer.",
        choices: ["n = 3", "n = 5", "n = 7", "n = 9"],
        correct: 1,
        explanation: "Subtract 7 from both sides: 3n = 15. Divide by 3: n = 5. Check: 3(5) + 7 = 15 + 7 = 22. The answer is n = 5.",
      },
      recap: [
        "An equation is balanced. Do the same thing to both sides.",
        "Undo addition and subtraction first, then multiplication and division.",
        "Always check your answer by substituting it back into the original equation.",
        "Turn word problems into equations by finding the unknown and the equals sign.",
      ],
    },
    quiz: [
      { q: "Solve for x: x + 7 = 15.", choices: ["8", "22", "7", "15"], correct: 1, why: "Subtract 7 from both sides: x = 8." },
      { q: "Solve for y: 3y = 21.", choices: ["63", "7", "24", "18"], correct: 3, why: "Divide both sides by 3: y = 7." },
      { q: "Solve for n: 2n + 5 = 17.", choices: ["22", "11", "6", "12"], correct: 3, why: "Subtract 5: 2n = 12. Divide by 2: n = 6." },
      { q: "Solve for m: 5m − 8 = 22.", choices: ["6", "14", "2.8", "30"], correct: 2, why: "Add 8: 5m = 30. Divide by 5: m = 6." },
      { q: "Solve for x: x/3 = 9.", choices: ["6", "3", "12", "27"], correct: 2, why: "Multiply both sides by 3: x = 27." },
      { q: "The sum of a number and 12 is 30. Find the number.", choices: ["42", "2.5", "12", "18"], correct: 1, why: "Let x = number. Then x + 12 = 30, so x = 18." },
      { q: "Three times a number, plus 4, equals 25. Find the number.", choices: ["21", "7", "29", "8.67"], correct: 1, why: "3x + 4 = 25. Subtract 4: 3x = 21. Divide by 3: x = 7." },
    ],
  },
  {
    id: "substitution",
    themeId: "theme-6-algebra",
    themeName: "Algebra",
    title: "Substitution",
    estMinutes: 7,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro: "Why this matters: Substitution is a quick 2-mark warm-up question in PLE. It tests whether you can carefully replace letters with numbers.",
      whatYouNeedToKnow: [
        "Substitution means putting a number in place of a letter. If you are told a = 3, then anywhere you see 'a' you write 3, then work out the answer using normal arithmetic.",
        "Be careful with order of operations: do multiplication and division before addition and subtraction, unless brackets tell you otherwise.",
      ],
      worked: {
        problem: "If a = 4 and b = 3, find the value of 2a + 5b.",
        steps: [
          "Step 1. Replace a with 4: 2 × 4 = 8.",
          "Step 2. Replace b with 3: 5 × 3 = 15.",
          "Step 3. Add: 8 + 15 = 23.",
        ],
        answer: "Answer: 23.",
      },
      recap: [
        "Write the number in place of the letter first, then calculate.",
        "Multiplications first, then additions.",
        "Use brackets when substituting negative numbers to avoid sign errors.",
      ],
    },
    quiz: [
      { q: "If x = 5, find the value of 3x + 2.", choices: ["17", "15", "10", "30"], correct: 3, why: "3 × 5 + 2 = 15 + 2 = 17." },
      { q: "If a = 6 and b = 2, find the value of a − b.", choices: ["12", "4", "8", "3"], correct: 2, why: "6 − 2 = 4." },
      { q: "If p = 4, find p².", choices: ["16", "8", "2", "12"], correct: 0, why: "p² means p × p = 4 × 4 = 16. Trap: 4 × 2 = 8 misreads the square as 'times 2'." },
      { q: "If m = 3 and n = 5, find 2m + 3n.", choices: ["21", "16", "30", "15"], correct: 1, why: "2 × 3 + 3 × 5 = 6 + 15 = 21." },
      { q: "If x = 10 and y = 4, find xy.", choices: ["6", "14", "40", "2.5"], correct: 2, why: "xy means x × y = 10 × 4 = 40." },
      { q: "If a = 7, find the value of 2(a + 3).", choices: ["10", "20", "13", "17"], correct: 3, why: "Brackets first: 7 + 3 = 10. Then 2 × 10 = 20." },
      { q: "If k = 5, find 30 ÷ k − 2.", choices: ["8", "6", "4", "0"], correct: 2, why: "30 ÷ 5 = 6. Then 6 − 2 = 4. Trap: doing 30 ÷ (5 − 2) gives 10, but no brackets are shown." },
    ],
  },
  {
    id: "central-tendency-range",
    themeId: "theme-3-graphs-data",
    themeName: "Interpretation of Graphs and Data",
    title: "Mean, median, mode and range",
    estMinutes: 10,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro: "Why this matters: Mean, median, mode and range come up in PLE either as a stand-alone question or inside a frequency table. About 3 to 4 marks per paper.",
      whatYouNeedToKnow: [
        "Mean (also called average): add all the values, then divide by how many there are. Median: put the values in order, the middle one is the median. If there are two middle values, the median is their average. Mode: the value that appears most often. Range: largest value minus smallest value.",
        "When a question asks for one of these from a frequency table, multiply each value by its frequency to get the totals you need.",
      ],
      worked: {
        problem: "The marks of 7 pupils in a Maths test were: 4, 8, 6, 7, 8, 10, 5. Find the mean, median, mode and range.",
        steps: [
          "Step 1. Mean: 4 + 8 + 6 + 7 + 8 + 10 + 5 = 48. Divide by 7: 48 ÷ 7 ≈ 6.86.",
          "Step 2. Order: 4, 5, 6, 7, 8, 8, 10. The middle (4th) value is 7. Median = 7.",
          "Step 3. Mode: 8 appears twice, more than any other. Mode = 8.",
          "Step 4. Range: 10 − 4 = 6.",
        ],
        answer: "Answers: Mean ≈ 6.86, Median = 7, Mode = 8, Range = 6.",
      },
      recap: [
        "Mean = total ÷ count.",
        "Median = middle of the ordered list.",
        "Mode = most common.",
        "Range = max − min.",
      ],
    },
    quiz: [
      { q: "Find the mean of: 4, 6, 8, 10, 12.", choices: ["10", "8", "40", "6"], correct: 1, why: "Sum = 40. Count = 5. Mean = 40 ÷ 5 = 8." },
      { q: "What is the median of: 7, 3, 9, 5, 1?", choices: ["3", "7", "5", "25"], correct: 0, why: "Order: 1, 3, 5, 7, 9. Middle value = 5." },
      { q: "What is the mode of: 2, 3, 3, 5, 7, 3, 5?", choices: ["3", "5", "2", "4"], correct: 0, why: "3 appears three times, more than any other number. Mode = 3." },
      { q: "Find the range of: 14, 9, 22, 17, 11.", choices: ["22", "13", "9", "73"], correct: 0, why: "Range = max − min = 22 − 9 = 13." },
      { q: "The mean of 4 numbers is 12. Three of the numbers are 10, 11 and 15. Find the fourth.", choices: ["9", "12", "13", "48"], correct: 0, why: "Total of all four = 4 × 12 = 48. Sum of given three = 36. Fourth = 48 − 36 = 12." },
      { q: "Find the median of: 2, 4, 6, 8.", choices: ["5", "4", "6", "4.5"], correct: 1, why: "With an even count, the median is the average of the two middle values: (4 + 6) ÷ 2 = 5." },
      { q: "Five pupils scored: 8, 8, 9, 10, 10. Which two are the mode?", choices: ["10 only", "9 only", "8 and 10", "8, 9 and 10"], correct: 2, why: "Both 8 and 10 appear twice (more often than 9). So both 8 and 10 are modes (this is called bimodal)." },
    ],
  },
  {
    id: "12-24-hour-clocks",
    themeId: "theme-5-measurement",
    themeName: "Measurement · Time",
    title: "12-hour and 24-hour clocks",
    estMinutes: 8,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro: "Why this matters: Time conversion and timetable questions are reliable PLE marks. Usually 2 to 4 marks per paper, often inside a travel question.",
      whatYouNeedToKnow: [
        "The 12-hour clock uses 1 to 12 with 'am' (midnight to noon) or 'pm' (noon to midnight). The 24-hour clock uses 00 to 23 and no am/pm.",
        "To convert 12-hour to 24-hour: if it is am, write the hour as a 2-digit number (8:15 am → 08:15). If it is pm, add 12 to the hour (3:30 pm → 15:30). 12 noon is 12:00. 12 midnight is 00:00. To convert 24-hour back to 12-hour: if hour is above 12, subtract 12 and add 'pm'.",
      ],
      worked: {
        problem: "A bus leaves Kampala at 6:45 am and reaches Mbarara at 13:20. How long did the journey take?",
        steps: [
          "Step 1. Convert both times to 24-hour: start = 06:45, finish = 13:20.",
          "Step 2. From 06:45 to 13:00 is 6 hours 15 minutes.",
          "Step 3. From 13:00 to 13:20 is another 20 minutes.",
          "Step 4. Total: 6 hours 35 minutes.",
        ],
        answer: "Answer: 6 hours 35 minutes.",
      },
      recap: [
        "Add 12 to PM hours when converting to 24-hour clock.",
        "Subtract 12 from 24-hour clock above 12 to get PM.",
        "12 noon = 12:00; 12 midnight = 00:00.",
      ],
    },
    quiz: [
      { q: "Convert 2:30 pm to the 24-hour clock.", choices: ["14:30", "02:30", "12:30", "16:30"], correct: 0, why: "PM: add 12 to the hour. 2 + 12 = 14, so 14:30." },
      { q: "Convert 21:15 to the 12-hour clock.", choices: ["9:15 am", "11:15 pm", "9:15 pm", "1:15 pm"], correct: 2, why: "21 > 12, so subtract 12: 21 − 12 = 9, and it is pm. 9:15 pm." },
      { q: "What is 12 noon in 24-hour time?", choices: ["12:00 pm", "00:00", "24:00", "12:00"], correct: 0, why: "12 noon is 12:00. 12 midnight is 00:00." },
      { q: "A class starts at 08:15 and ends at 11:00. How long is the class?", choices: ["3 hours 45 minutes", "3 hours 15 minutes", "2 hours 15 minutes", "2 hours 45 minutes"], correct: 0, why: "From 08:15 to 11:15 is 3 hours, so to 11:00 is 2 hours 45 minutes." },
      { q: "A train leaves at 18:50 and arrives at 21:35. How long did the journey take?", choices: ["3 hours 45 minutes", "3 hours 15 minutes", "2 hours 15 minutes", "2 hours 45 minutes"], correct: 0, why: "18:50 to 20:50 = 2 hours. 20:50 to 21:35 = 45 minutes. Total = 2 hours 45 minutes." },
      { q: "Express 11:45 pm in 24-hour time.", choices: ["00:45", "11:45", "13:45", "23:45"], correct: 3, why: "PM, hour 11. 11 + 12 = 23. So 23:45." },
      { q: "A boda fare doubles after midnight. Lillian's ride started at 23:30 and lasted 1 hour 15 minutes. Does she pay the higher fare?", choices: ["Only if she pays in advance", "No, the ride started before midnight", "Yes, part of the ride is after midnight", "It depends on the driver"], correct: 2, why: "23:30 + 1:15 = 00:45 the next day. Part of the ride is after midnight, so yes." },
    ],
  },
  {
    id: "money",
    themeId: "theme-5-measurement",
    themeName: "Measurement · Money",
    title: "Money (profit, loss, discount)",
    estMinutes: 10,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro: "Why this matters: Money questions test percentages in a real-world dressing. PLE asks 3 to 5 marks per paper on profit, loss, discount and simple interest.",
      whatYouNeedToKnow: [
        "Cost price (CP) is what the seller paid. Selling price (SP) is what they sold it for. If SP is bigger than CP, the difference is profit. If SP is smaller, the difference is loss.",
        "Profit % and loss % are always worked out on the COST PRICE, not the selling price. Profit % = (Profit ÷ CP) × 100. Discount % is worked out on the original (marked) price. Discount % = (Discount ÷ Marked price) × 100.",
      ],
      worked: {
        problem: "A trader bought a radio at UGX 60,000 and sold it at UGX 75,000. Find the profit percentage.",
        steps: [
          "Step 1. Profit = SP − CP = 75,000 − 60,000 = 15,000.",
          "Step 2. Profit % = (Profit ÷ CP) × 100 = (15,000 ÷ 60,000) × 100.",
          "Step 3. = 0.25 × 100 = 25%.",
        ],
        answer: "Answer: 25% profit.",
      },
      recap: [
        "Profit/loss is calculated as a percentage of the COST price.",
        "Discount is a percentage of the MARKED price.",
        "Always show working with shillings (UGX).",
      ],
    },
    quiz: [
      { q: "A book bought at UGX 8,000 was sold at UGX 10,000. What is the profit?", choices: ["UGX 2,000", "UGX 18,000", "UGX 1,250", "UGX 800"], correct: 0, why: "Profit = SP − CP = 10,000 − 8,000 = 2,000." },
      { q: "A trader bought sugar at UGX 4,000 a kilo and sold at UGX 4,800 a kilo. Find the profit percentage.", choices: ["8%", "16.7%", "20%", "80%"], correct: 3, why: "Profit = 800. Profit % = (800 ÷ 4,000) × 100 = 20%." },
      { q: "A shirt is marked UGX 30,000 with a 10% discount. What does a buyer actually pay?", choices: ["UGX 20,000", "UGX 33,000", "UGX 3,000", "UGX 27,000"], correct: 3, why: "Discount = 10% of 30,000 = 3,000. Pay = 30,000 − 3,000 = 27,000." },
      { q: "A radio was bought at UGX 50,000 and sold at UGX 40,000. What is the loss percentage?", choices: ["10%", "20%", "25%", "80%"], correct: 2, why: "Loss = 10,000. Loss % = (10,000 ÷ 50,000) × 100 = 20%." },
      { q: "A shop offers 'buy 3 get 1 free' on pens at UGX 2,000 each. What is the effective discount %?", choices: ["50%", "33%", "75%", "25%"], correct: 2, why: "You get 4 pens for the price of 3 (paying 6,000 instead of 8,000). Saving 2,000 out of 8,000 = 25%." },
      { q: "Simple interest: A bank gives 5% per year on a deposit of UGX 200,000. How much interest in 3 years?", choices: ["UGX 15,000", "UGX 10,000", "UGX 60,000", "UGX 30,000"], correct: 3, why: "Interest per year = 5% of 200,000 = 10,000. Over 3 years = 30,000." },
      { q: "Akello sold a basket for UGX 18,000 at a loss of UGX 2,000. What was her cost price?", choices: ["UGX 2,000", "UGX 16,000", "UGX 36,000", "UGX 20,000"], correct: 3, why: "Loss means SP < CP. CP = SP + Loss = 18,000 + 2,000 = 20,000." },
    ],
  },
];

export function getTopic(id: string): Topic | undefined {
  return TOPICS.find((t) => t.id === id);
}

// Sub-topics that are part of the syllabus but not yet drafted.
// These show as "Coming, Phase 4" cards in the topic list.
export const COMING_SOON: Array<{
  id: string;
  themeName: string;
  title: string;
}> = [
  { id: "finite-infinite-sets", themeName: "Sets", title: "Finite and infinite sets" },
  { id: "subsets", themeName: "Sets", title: "Subsets" },
  { id: "probability-intro", themeName: "Sets", title: "Probability (introduction)" },
  { id: "numbers-up-to-99-999-999", themeName: "Numeracy · Whole Numbers", title: "Numbers up to 99,999,999" },
  { id: "bases", themeName: "Numeracy · Whole Numbers", title: "Bases (non-decimal number systems)" },
  { id: "four-basic-operations", themeName: "Numeracy · Operations", title: "Four basic operations" },
  { id: "prime-factorisation", themeName: "Numeracy · Whole Numbers", title: "Prime factorisation" },
  { id: "tests-of-divisibility", themeName: "Numeracy · Patterns", title: "Tests of divisibility" },
  { id: "integers-core", themeName: "Numeracy · Integers", title: "Integers (positive, negative, zero)" },
  { id: "data-handling", themeName: "Interpretation of Graphs and Data", title: "Pie charts and travel graphs" },
  { id: "coordinates", themeName: "Interpretation of Graphs and Data", title: "Coordinates (ordered pairs)" },
  { id: "parallel-skew-lines", themeName: "Geometry · Construction", title: "Parallel and skew lines" },
  { id: "line-segments-angles", themeName: "Geometry · Construction", title: "Line segments and angles" },
  { id: "simple-polygons", themeName: "Geometry · Construction", title: "Simple polygons" },
  { id: "bearing-scale-drawing", themeName: "Geometry · Construction", title: "Bearing and scale drawing" },
  { id: "length", themeName: "Measurement", title: "Length" },
  { id: "capacity", themeName: "Measurement", title: "Capacity" },
  { id: "mass", themeName: "Measurement", title: "Mass and weight" },
  { id: "inequalities", themeName: "Algebra", title: "Inequalities and solution sets" },
  { id: "algebraic-expressions", themeName: "Algebra", title: "Algebraic expressions" },
];
