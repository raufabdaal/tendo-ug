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
    estMinutes: 9,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro:
        "Why this matters: Venn diagrams are common in PLE, and once you understand the four parts of the diagram, many of these questions become much easier. This is one of those topics where good arrangement helps you get the answer quickly.",
      learningObjectives: [
        "Read a two-circle Venn diagram and identify each region.",
        "Find how many items are in only one set, in both sets, or in neither set.",
        "Use the Venn rule correctly without double-counting.",
        "Solve word problems by filling the diagram in the right order.",
      ],
      whatYouNeedToKnow: [
        "Let us start with the picture itself. A Venn diagram uses circles to show sets, or groups of things. If two circles overlap, the part in the middle shows the things that belong to both groups.",
        "In a two-set Venn diagram, there are four important parts: only A, only B, both A and B, and neither A nor B. If you understand these four parts, you can answer most P7 Venn diagram questions.",
        "The middle part is called the overlap or intersection. This is where you put the number that belongs to both sets. For example, if some pupils play both football and netball, that number goes in the middle, not in one side only.",
        "Be careful with totals. The number in set A usually includes the pupils in the overlap. The same is true for set B. That is why you must subtract the overlap when you want to find only A or only B.",
        "A very useful rule is this: number in A or B = n(A) + n(B) − n(A and B). We subtract the overlap once because it has been counted twice in n(A) + n(B).",
        "When solving word problems, it is often safest to fill the middle first, then work out only A and only B, and then find neither at the end.",
      ],
      worked: {
        problem:
          "In a class of 40 pupils, 24 play football and 22 play netball. 10 pupils play both games. How many pupils play neither game?",
        steps: [
          "Step 1. Put the number who play both games in the middle first. So write 10 in the overlap.",
          "Step 2. Find football only. Since 24 play football in total and 10 of them are already in both, football only = 24 − 10 = 14.",
          "Step 3. Find netball only. Since 22 play netball in total and 10 of them are already in both, netball only = 22 − 10 = 12.",
          "Step 4. Find how many play at least one game. Add the three inside parts: 14 + 10 + 12 = 36.",
          "Step 5. Find neither. Total pupils = 40, so neither = 40 − 36 = 4.",
        ],
        answer: "Answer: 4 pupils play neither game.",
      },
      commonMistakes: [
        "Putting the overlap on one side instead of in the middle.",
        "Adding the two set totals without removing the overlap once.",
        "Forgetting that 'only A' means total A minus the overlap.",
        "Trying to find neither too early before the inside parts are complete.",
      ],
      tryThis: {
        question: "In a class of 50 pupils, 30 like rice and 25 like beans. 12 pupils like both. How many pupils like neither?",
        choices: ["7", "12", "18", "43"],
        correct: 0,
        explanation: "Put 12 in the middle first. Rice only = 30 − 12 = 18. Beans only = 25 − 12 = 13. At least one = 18 + 12 + 13 = 43. Neither = 50 − 43 = 7. The answer is 7.",
      },
      recap: [
        "A two-set Venn diagram has four parts: only A, only B, both, and neither.",
        "Fill the overlap first.",
        "Only A = total A − overlap. Only B = total B − overlap.",
        "Neither = total − number in at least one set.",
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
    estMinutes: 8,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro:
        "Why this matters: Roman numerals still appear in PLE, especially in quick conversion questions. If you know the letter values and the two main rules, these marks are some of the easiest to collect.",
      learningObjectives: [
        "Read Roman numerals and change them to ordinary numbers.",
        "Write ordinary numbers in Roman numerals up to MM and beyond common P7 examples.",
        "Use the addition rule and the subtraction rule correctly.",
        "Avoid the common mistakes pupils make when writing Roman numerals.",
      ],
      whatYouNeedToKnow: [
        "Let us start with the seven Roman numeral letters: I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, and M = 1000. Every Roman numeral question in P7 is built from these values.",
        "When a smaller numeral comes after a bigger one, you add. For example, VI means 5 + 1 = 6, and XV means 10 + 5 = 15. This is the easiest rule and it appears in many questions.",
        "When a smaller numeral comes before a bigger one, you subtract. For example, IV means 5 − 1 = 4, and IX means 10 − 1 = 9. In the same way, XL = 40, XC = 90, CD = 400, and CM = 900.",
        "A quick safe rule for P7 is this: the subtract rule is mainly used with I, X, and C. That is why you often see IV and IX, XL and XC, CD and CM. If you are not sure, break the number into thousands, hundreds, tens, and ones.",
        "It is often easiest to write a large number in parts. For example, 1,947 can be split into 1000 + 900 + 40 + 7. Then write each part in Roman numerals and join them together.",
        "When reading a Roman numeral, move from left to right. If the next letter is bigger, subtract the smaller one. If the next letter is smaller or equal, add. This helps when the numeral looks long.",
      ],
      worked: {
        problem: "Write 1,994 in Roman numerals.",
        steps: [
          "Step 1. Split 1,994 into parts: 1000 + 900 + 90 + 4.",
          "Step 2. Change each part: 1000 = M, 900 = CM, 90 = XC, and 4 = IV.",
          "Step 3. Join the parts from left to right: M + CM + XC + IV.",
        ],
        answer: "Answer: 1,994 = MCMXCIV.",
      },
      commonMistakes: [
        "Writing too many repeated symbols. For example, 9 should be IX, not VIIII.",
        "Using the subtraction rule in the wrong place. For example, VL is not used for 45. The correct form is XLV.",
        "Forgetting to split the number into parts first. This often leads to mixed-up numerals.",
        "Reading from left to right without checking whether a smaller numeral comes before a bigger one.",
      ],
      tryThis: {
        question: "Write 49 in Roman numerals.",
        choices: ["IL", "XLIX", "XXXXVIIII", "VLIV"],
        correct: 1,
        explanation: "Split 49 into 40 + 9. Then write 40 = XL and 9 = IX. Put them together: XLIX. The answer is XLIX.",
      },
      recap: [
        "Know the seven letter values: I, V, X, L, C, D, M.",
        "If a smaller numeral comes after a bigger one, add.",
        "If a smaller numeral comes before a bigger one, subtract.",
        "For large numbers, split into thousands, hundreds, tens, and ones first.",
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
    estMinutes: 14,
    status: "published",
    reviewStatus: "verified",
    videoUrl: "https://youtu.be/HuitLoh1Q9g",
    note: {
      intro: "Why this matters: Fractions are one of the most important topics in P7 Mathematics. They appear in many PLE questions, and they also help you understand decimals, percentages, money, and several word problems.",
      learningObjectives: [
        "Explain what a fraction means.",
        "Compare and arrange fractions in order.",
        "Add and subtract fractions correctly.",
        "Multiply and divide fractions.",
        "Use fractions in simple word problems.",
      ],
      whatYouNeedToKnow: [
        "A fraction shows a part of a whole. In a fraction such as 3/4, the top number is the numerator and the bottom number is the denominator. The denominator tells you how many equal parts the whole has been divided into, and the numerator tells you how many of those parts are being taken.",
        "Fractions can be compared only when you understand the size of the parts. Sometimes it is easy to compare directly, but many times you first change the fractions so they have the same denominator. This helps you see which one is larger or smaller.",
        "When adding or subtracting fractions, the denominators must first be made the same. After that, add or subtract the numerators only. The denominator stays the same.",
        "When multiplying fractions, multiply the numerators together and multiply the denominators together. The word 'of' often means multiplication in fraction questions.",
        "When dividing by a fraction, turn the second fraction upside down and multiply. This is the usual rule for division of fractions.",
        "In word problems, fractions often come in steps. So after finding one part, always check whether the next fraction is taken from the original whole or from what remains.",
      ],
      worked: {
        problem: "Akello has 16 mangoes. She gives 1/2 to her brother and then sells 1/4 of what is left. How many mangoes does she have now?",
        steps: [
          "Step 1. Find 1/2 of 16. 1/2 × 16 = 8. So she gives her brother 8 mangoes.",
          "Step 2. Work out what remains: 16 − 8 = 8 mangoes.",
          "Step 3. Find 1/4 of what is left: 1/4 × 8 = 2 mangoes.",
          "Step 4. Subtract again: 8 − 2 = 6 mangoes.",
        ],
        answer: "Answer: Akello has 6 mangoes left.",
      },
      commonMistakes: [
        "Adding denominators when adding fractions. For example, 2/3 + 1/4 is not 3/7.",
        "Using the original total again in a step-by-step word problem instead of using the remainder.",
        "Forgetting to make denominators the same before adding or subtracting.",
        "Dividing by a fraction without turning the second fraction upside down first.",
      ],
      tryThis: {
        question: "Mukasa had 20 books. He lent 1/4 to his friend and then sold 1/3 of what was left. How many books did he sell?",
        choices: ["4 books", "5 books", "6 books", "10 books"],
        correct: 1,
        explanation: "1/4 of 20 = 5 books. Remaining = 20 − 5 = 15. Then 1/3 of 15 = 5. So he sold 5 books.",
      },
      recap: [
        "A fraction shows a part of a whole.",
        "To compare, add, or subtract fractions, it is often helpful to use the same denominator.",
        "'Of' usually means multiply.",
        "To divide by a fraction, turn the second fraction upside down and multiply.",
        "In word problems, check whether the next fraction is taken from the whole or from the remainder.",
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
    estMinutes: 11,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro: "Why this matters: Decimals are used in money, measurement, and percentages. If you understand place value and the basic rules for working with decimals, many PLE questions become much easier.",
      learningObjectives: [
        "Read and write decimals correctly.",
        "Use place value in tenths, hundredths, and thousandths.",
        "Change decimals to fractions and fractions to decimals.",
        "Add, subtract, multiply, and divide decimals.",
      ],
      whatYouNeedToKnow: [
        "A decimal is another way of writing a fraction. The digits after the decimal point show parts of a whole. The first place is tenths, the second is hundredths, and the third is thousandths.",
        "For example, 0.7 means 7 tenths, which is the same as 7/10. In the same way, 0.25 means 25/100, and 0.125 means 125/1000.",
        "To change a decimal into a fraction, write the decimal digits over the correct power of 10, then simplify. For example, 0.6 = 6/10 = 3/5.",
        "To add or subtract decimals, put the decimal points directly under each other. Then work as you do with whole numbers. This helps the place values stay correct.",
        "To multiply decimals, multiply first as if they were whole numbers. Then count how many decimal places were in the original numbers and place the decimal point carefully in the answer.",
        "To divide by a decimal, move the decimal point in both numbers until the divisor becomes a whole number. Then divide normally. This makes the question easier to handle.",
      ],
      worked: {
        problem: "Work out 3.6 + 0.45.",
        steps: [
          "Step 1. Write the decimals with the points under each other: 3.60 + 0.45.",
          "Step 2. Add as whole numbers from right to left.",
          "Step 3. Keep the decimal point in line with the others.",
        ],
        answer: "Answer: 3.6 + 0.45 = 4.05.",
      },
      commonMistakes: [
        "Not lining up the decimal points before adding or subtracting.",
        "Putting the decimal point in the wrong place after multiplication.",
        "Moving the decimal point in only one number when dividing by a decimal.",
        "Forgetting to simplify the fraction after converting from a decimal.",
      ],
      tryThis: {
        question: "Change 0.75 to a fraction in its simplest form.",
        choices: ["75/10", "3/4", "7/5", "75/1000"],
        correct: 1,
        explanation: "0.75 = 75/100. Divide top and bottom by 25 to get 3/4. The answer is 3/4.",
      },
      recap: [
        "Decimals show parts of a whole using place value.",
        "Tenths, hundredths, and thousandths come after the decimal point.",
        "Line up decimal points when adding or subtracting.",
        "Count decimal places carefully when multiplying.",
        "Move the point in both numbers when dividing by a decimal.",
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
    estMinutes: 14,
    status: "published",
    reviewStatus: "verified",
    // videoUrl: "https://www.youtube.com/embed/...", // TODO: paste NotebookLM video URL after upload
    note: {
      intro: "Why this matters: Percentages are used in marks, shopping, savings, discounts, profit, and many everyday situations. If you understand what percent means, the rest of the topic becomes easier to follow.",
      learningObjectives: [
        "Explain what a percentage means.",
        "Change between fractions, decimals, and percentages.",
        "Find a percentage of a quantity.",
        "Express one number as a percentage of another.",
        "Solve simple problems involving increase, decrease, discount, and profit.",
      ],
      whatYouNeedToKnow: [
        "Percent means 'out of 100'. So 25% means 25 out of 100, which is 25/100. This can also be written as 1/4 or 0.25. When you understand this idea, percentages become easier to compare with fractions and decimals.",
        "To find a percentage of a number, change the percentage into a fraction or decimal and multiply. For example, 20% of 150 means 20/100 × 150 or 0.20 × 150.",
        "To express one number as a percentage of another, divide the first number by the second and multiply by 100. This is common in test marks. For example, 36 out of 50 becomes 36/50 × 100 = 72%.",
        "A percentage increase makes a quantity bigger, and a percentage decrease makes it smaller. So if a price goes up by 10%, the new price is more than the old one. If a price is reduced by 10%, the new price is less than the old one.",
        "Discount is based on the marked price, while profit and loss percentages are based on the cost price. This is very important because many pupils mix up the starting amount.",
        "In percentage word problems, always ask yourself: 'Percentage of what?' That question helps you choose the correct starting number.",
      ],
      worked: {
        problem: "Akello scored 36 out of 50 in a Maths test. What percentage did she score?",
        steps: [
          "Step 1. Write the score as a fraction of the total: 36/50.",
          "Step 2. Change it to a percentage by multiplying by 100: 36/50 × 100.",
          "Step 3. Work it out: 36 × 100 = 3600, and 3600 ÷ 50 = 72.",
        ],
        answer: "Answer: Akello scored 72%.",
      },
      commonMistakes: [
        "Using the wrong total when finding a percentage.",
        "Forgetting that percent means out of 100.",
        "Finding profit or loss percentage using the selling price instead of the cost price.",
        "Subtracting or adding a percentage without first finding what that percentage equals.",
      ],
      tryThis: {
        question: "What is 20% of 150?",
        choices: ["30", "20", "15", "300"],
        correct: 0,
        explanation: "20% = 20/100 = 1/5. Then 1/5 of 150 = 30. The answer is 30.",
      },
      recap: [
        "Percent means out of 100.",
        "To find a percentage of a quantity, multiply.",
        "To express one number as a percentage of another, divide then multiply by 100.",
        "Discount starts from the marked price.",
        "Profit and loss percentages start from the cost price.",
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
    estMinutes: 9,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro: "Why this matters: Perimeter questions are common in PLE, and they are some of the easiest marks to collect when you know what the question is asking. Once you understand that perimeter means the distance all the way round, most of the work becomes simple addition or one short formula.",
      learningObjectives: [
        "Explain what perimeter means.",
        "Find the perimeter of a rectangle, square, triangle, and regular polygon.",
        "Find the circumference of a circle.",
        "Find a missing side when the perimeter is given.",
      ],
      whatYouNeedToKnow: [
        "Let us start with the meaning. Perimeter is the total distance around the outside of a shape. If you walked along the edge of the shape until you came back to where you started, the distance you walked would be the perimeter.",
        "For many shapes, perimeter is found by adding all the outside sides. That is why it is important to look carefully at the shape before choosing what to do.",
        "A rectangle has two lengths and two widths. So its perimeter is 2 × (length + width). This is just a quicker way of adding length + width + length + width.",
        "A square has four equal sides, so its perimeter is 4 × side. If one side is 7 cm, then the perimeter is 4 × 7 = 28 cm.",
        "A triangle does not need a special formula. Just add the three sides. A regular polygon also becomes easy because all the sides are equal. Multiply the number of sides by the length of one side.",
        "The perimeter of a circle is called the circumference. In P7, the rule is usually circumference = 2 × π × r, where π is often taken as 22/7 and r is the radius.",
      ],
      worked: {
        problem: "A rectangular garden is 12 m long and 7 m wide. Find its perimeter.",
        steps: [
          "Step 1. Notice that the shape is a rectangle, so we use P = 2 × (length + width).",
          "Step 2. Add the length and width first: 12 + 7 = 19.",
          "Step 3. Multiply by 2 because the rectangle has two lengths and two widths: 2 × 19 = 38.",
        ],
        answer: "Answer: The perimeter is 38 m.",
      },
      commonMistakes: [
        "Mixing up perimeter and area. Perimeter is around the outside. Area is the space inside.",
        "Forgetting that a rectangle has two lengths and two widths.",
        "Using the diameter as if it were the radius in circle questions.",
        "Writing square units such as cm² for perimeter. Perimeter uses ordinary units like cm, m, or km.",
      ],
      tryThis: {
        question: "A square has perimeter 48 cm. Find the length of one side.",
        choices: ["6 cm", "12 cm", "24 cm", "16 cm"],
        correct: 1,
        explanation: "A square has 4 equal sides. So one side = 48 ÷ 4 = 12 cm. The answer is 12 cm.",
      },
      recap: [
        "Perimeter means the distance all the way around a shape.",
        "Rectangle: 2 × (length + width).",
        "Square: 4 × side. Triangle: add the three sides.",
        "Regular polygon: number of sides × one side.",
        "Circle perimeter is called circumference.",
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
    estMinutes: 11,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro: "Why this matters: Area questions are common in PLE, especially in rectangles, triangles, circles, and compound shapes. If you understand that area means the space inside a shape, the formulas begin to make sense instead of feeling like things to cram.",
      learningObjectives: [
        "Explain what area means.",
        "Find the area of rectangles, squares, triangles, and circles.",
        "Find a missing side when the area is given.",
        "Work out the area of simple compound shapes.",
      ],
      whatYouNeedToKnow: [
        "Area is the amount of flat space inside a shape. If you covered the shape completely with small square tiles, the amount of space covered would be its area.",
        "Because area measures space inside a shape, we write it in square units such as cm², m², or km². This is different from perimeter, which uses ordinary length units.",
        "A rectangle is found by multiplying length by width. This works because the rows and columns of square units inside the shape can be counted in a grid pattern.",
        "A square is a special rectangle with equal sides, so its area is side × side.",
        "A triangle uses the rule area = 1/2 × base × height. The height must be the perpendicular height. This means the straight-up distance from the base, not just any slant side.",
        "A circle uses the rule area = π × r × r. In P7, π is usually taken as 22/7. Be careful not to mix this up with circumference, which is about the distance around the circle.",
        "A compound shape is a shape made from two or more simple shapes joined together. The easiest method is to split it into parts, find the area of each part, and then add the answers.",
      ],
      worked: {
        problem: "A rectangular plot is 25 m long and 16 m wide. Find its area.",
        steps: [
          "Step 1. Notice that the shape is a rectangle, so use area = length × width.",
          "Step 2. Substitute the numbers: area = 25 × 16.",
          "Step 3. Multiply: 25 × 16 = 400.",
        ],
        answer: "Answer: The area is 400 m².",
      },
      commonMistakes: [
        "Using ordinary units like cm or m instead of square units such as cm² or m².",
        "Forgetting the 1/2 in the triangle formula.",
        "Using the diameter as if it were the radius in a circle question.",
        "Mixing up area and perimeter.",
      ],
      tryThis: {
        question: "A triangle has base 14 cm and height 8 cm. Find its area.",
        choices: ["112 cm²", "56 cm²", "22 cm²", "44 cm²"],
        correct: 1,
        explanation: "Area = 1/2 × base × height = 1/2 × 14 × 8 = 7 × 8 = 56 cm². The answer is 56 cm².",
      },
      recap: [
        "Area means the space inside a shape.",
        "Rectangle: length × width.",
        "Square: side × side.",
        "Triangle: 1/2 × base × height.",
        "Circle: π × r × r.",
        "Always write square units.",
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
    estMinutes: 11,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro: "Why this matters: Volume questions are common in PLE, especially in tanks, boxes, cubes, and capacity problems. If you understand that volume means the space inside a solid shape, the formulas become easier to remember and use.",
      learningObjectives: [
        "Explain what volume means.",
        "Find the volume of a cuboid and a cube.",
        "Find a missing dimension when the volume is given.",
        "Change between cubic centimetres and litres.",
        "Solve simple packing questions.",
      ],
      whatYouNeedToKnow: [
        "Volume is the amount of space inside a solid shape. If you filled a box with small cubes, the amount of space taken up inside the box would be its volume.",
        "Because volume measures space inside a solid, it is written in cubic units such as cm³ or m³. This is different from area, which uses square units.",
        "A cuboid uses the rule volume = length × width × height. You multiply the three dimensions because the shape stretches in three directions.",
        "A cube is a special cuboid with all sides equal, so its volume is side × side × side.",
        "Capacity is the amount of liquid a container can hold. In P7, it is important to remember that 1,000 cm³ = 1 litre. This helps when moving between volume and capacity questions.",
        "If the volume and two dimensions are given, you can find the missing dimension by dividing the volume by the two known dimensions.",
        "In packing questions, first find the volume of the large shape and the volume of one small shape. Then divide the larger volume by the smaller one.",
      ],
      worked: {
        problem: "A water tank is shaped like a cuboid 2 m long, 1.5 m wide, and 1 m high. Find its volume in cubic metres.",
        steps: [
          "Step 1. Notice that the shape is a cuboid, so use volume = length × width × height.",
          "Step 2. Substitute the dimensions: volume = 2 × 1.5 × 1.",
          "Step 3. Multiply: 2 × 1.5 × 1 = 3.",
        ],
        answer: "Answer: The volume is 3 m³.",
      },
      commonMistakes: [
        "Using square units instead of cubic units.",
        "Adding the dimensions instead of multiplying them.",
        "Forgetting that 1 litre = 1,000 cm³.",
        "Dividing the smaller volume by the bigger volume in packing questions.",
      ],
      tryThis: {
        question: "A jerrycan holds 12 litres of water. How many cm³ is that?",
        choices: ["120 cm³", "1,200 cm³", "12,000 cm³", "120,000 cm³"],
        correct: 2,
        explanation: "1 litre = 1,000 cm³. So 12 litres = 12 × 1,000 = 12,000 cm³. The answer is 12,000 cm³.",
      },
      recap: [
        "Volume means the space inside a solid shape.",
        "Cuboid: length × width × height.",
        "Cube: side × side × side.",
        "Use cubic units such as cm³ or m³.",
        "Remember: 1,000 cm³ = 1 litre.",
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
    estMinutes: 11,
    status: "published",
    reviewStatus: "verified",
    // videoUrl: "https://www.youtube.com/embed/...", // TODO: paste NotebookLM video URL after upload
    note: {
      intro: "Why this matters: Equations are one of the main algebra topics in PLE. Once you understand that an equation must stay balanced, many questions become easier because you know exactly what to do next.",
      learningObjectives: [
        "Explain what an equation is.",
        "Solve one-step equations.",
        "Solve two-step equations in the correct order.",
        "Check whether an answer is correct.",
        "Change simple word statements into equations.",
      ],
      whatYouNeedToKnow: [
        "An equation is a number sentence with an equals sign. It shows that the left side and the right side are equal. If one side changes, the other side must change in the same way to keep the equation balanced.",
        "The unknown number is usually written with a letter such as x, y, or n. Solving the equation means finding the value of the letter that makes the equation true.",
        "A safe way to think about equations is this: undo what has been done to the letter. If 7 has been added, subtract 7. If the letter has been multiplied by 4, divide by 4. Always do the same thing to both sides.",
        "In a two-step equation, first remove addition or subtraction. After that, remove multiplication or division. This order helps you reach the letter cleanly.",
        "After solving, always check your answer by putting it back into the original equation. If both sides become equal, your answer is correct.",
        "Some word problems can be turned into equations. For example, 'the sum of a number and 12 is 30' becomes x + 12 = 30. This is useful in PLE because the equation shows you what operation to undo.",
      ],
      worked: {
        problem: "Solve for x: 4x − 5 = 19.",
        steps: [
          "Step 1. Add 5 to both sides to remove the −5: 4x − 5 + 5 = 19 + 5, so 4x = 24.",
          "Step 2. Divide both sides by 4 to remove the multiplication: 4x ÷ 4 = 24 ÷ 4, so x = 6.",
          "Step 3. Check your answer in the original equation: 4(6) − 5 = 24 − 5 = 19. The two sides are equal, so x = 6 is correct.",
        ],
        answer: "Answer: x = 6.",
      },
      commonMistakes: [
        "Doing something to one side of the equation but not the other side.",
        "Dividing too early before removing the added or subtracted number.",
        "Stopping before checking the answer.",
        "Writing only the number 6 instead of writing x = 6.",
      ],
      tryThis: {
        question: "Solve for n: 3n + 7 = 22.",
        choices: ["n = 3", "n = 5", "n = 7", "n = 9"],
        correct: 1,
        explanation: "Subtract 7 from both sides first: 3n = 15. Then divide both sides by 3: n = 5. Check: 3 × 5 + 7 = 22. The answer is n = 5.",
      },
      recap: [
        "An equation must stay balanced.",
        "Do the same thing to both sides.",
        "In two-step equations, remove addition/subtraction before multiplication/division.",
        "Always check your answer in the original equation.",
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
    estMinutes: 8,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro: "Why this matters: Substitution is one of the easiest algebra marks in PLE if you stay calm and replace each letter carefully. It also helps you later when you solve equations and word problems.",
      learningObjectives: [
        "Replace letters with the correct numbers.",
        "Work out expressions after substitution.",
        "Use the correct order of operations.",
        "Avoid common substitution mistakes.",
      ],
      whatYouNeedToKnow: [
        "Substitution means putting a number in place of a letter. If the question says a = 3, then every time you see a, you must write 3 in its place before working out the answer.",
        "Start by copying the expression carefully. Then replace each letter with its value. Only after that should you calculate. This helps you avoid mixing up the letters or forgetting one of them.",
        "Remember the order of operations. Work inside brackets first. Then do multiplication and division. After that, do addition and subtraction. This rule is very important in substitution questions.",
        "If two letters are written together, such as xy, it means multiply. So if x = 4 and y = 3, then xy = 4 × 3 = 12. In the same way, 2a means 2 × a.",
        "If the expression has a square, such as p², it means p × p. So if p = 5, then p² = 5 × 5 = 25. Do not confuse squaring with multiplying by 2.",
        "A safe method is: replace, check, then calculate. This slows you down a little, but it helps you get the mark.",
      ],
      worked: {
        problem: "If a = 4 and b = 3, find the value of 2a + 5b.",
        steps: [
          "Step 1. Replace each letter with its number: 2a + 5b becomes 2 × 4 + 5 × 3.",
          "Step 2. Do the multiplications first: 2 × 4 = 8 and 5 × 3 = 15.",
          "Step 3. Add the answers: 8 + 15 = 23.",
        ],
        answer: "Answer: 23.",
      },
      commonMistakes: [
        "Calculating too early before replacing the letters properly.",
        "Forgetting that xy means x × y.",
        "Forgetting the order of operations, especially when brackets are present.",
        "Confusing p² with 2p. p² means p × p, not 2 × p.",
      ],
      tryThis: {
        question: "If m = 3 and n = 5, find the value of 2m + 3n.",
        choices: ["21", "16", "30", "15"],
        correct: 0,
        explanation: "Replace the letters first: 2m + 3n = 2 × 3 + 3 × 5 = 6 + 15 = 21. The answer is 21.",
      },
      recap: [
        "Substitution means replacing a letter with its value.",
        "Replace first, then calculate.",
        "Do brackets first, then multiplication/division, then addition/subtraction.",
        "p² means p × p, and xy means x × y.",
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
    estMinutes: 11,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro: "Why this matters: Questions on mean, median, mode, and range are common in PLE. If you know what each word means and when to use it, these marks become much easier to earn.",
      learningObjectives: [
        "Find the mean of a set of numbers.",
        "Find the median of a set of numbers.",
        "Find the mode of a set of numbers.",
        "Find the range of a set of numbers.",
        "Use these ideas correctly in simple data questions.",
      ],
      whatYouNeedToKnow: [
        "These four words are used when we talk about data. Data means a set of numbers that has been collected, such as marks, ages, or number of books.",
        "Mean is the average. To find it, add all the numbers together and divide by how many numbers there are.",
        "Median is the middle number after the data has been arranged in order from smallest to largest. If there are two middle numbers, add them and divide by 2.",
        "Mode is the number that appears most often. A set of data can have one mode, more than one mode, or no mode.",
        "Range shows how spread out the data is. It is found by subtracting the smallest number from the largest number.",
        "A safe order is this: first arrange the numbers in order. Then it becomes easier to find the median, mode, and range. After that, if needed, add all the numbers to find the mean.",
      ],
      worked: {
        problem: "The marks of 7 pupils are 4, 8, 6, 7, 8, 10, 5. Find the mean, median, mode, and range.",
        steps: [
          "Step 1. Arrange the marks in order: 4, 5, 6, 7, 8, 8, 10.",
          "Step 2. Find the median. The middle number is 7, so median = 7.",
          "Step 3. Find the mode. The number 8 appears most often, so mode = 8.",
          "Step 4. Find the range. Largest number = 10 and smallest number = 4, so range = 10 − 4 = 6.",
          "Step 5. Find the mean. Add all the numbers: 4 + 8 + 6 + 7 + 8 + 10 + 5 = 48. Then divide by 7: mean = 48/7 ≈ 6.86.",
        ],
        answer: "Answer: Mean ≈ 6.86, Median = 7, Mode = 8, Range = 6.",
      },
      commonMistakes: [
        "Finding the median before arranging the numbers in order.",
        "Forgetting to divide by 2 when there are two middle numbers.",
        "Choosing a number that appears once as the mode when another number appears more often.",
        "Using the number of items as the range instead of subtracting smallest from largest.",
      ],
      tryThis: {
        question: "Find the median of 12, 5, 9, 14, 7, 11.",
        choices: ["9", "10", "11", "12"],
        correct: 1,
        explanation: "Arrange the numbers first: 5, 7, 9, 11, 12, 14. The two middle numbers are 9 and 11. Add them: 9 + 11 = 20. Divide by 2: 20 ÷ 2 = 10. The answer is 10.",
      },
      recap: [
        "Mean = total of the numbers ÷ number of items.",
        "Median = middle number after arranging in order.",
        "Mode = number that appears most often.",
        "Range = largest number − smallest number.",
        "Arrange the data first when finding median, mode, and range.",
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
    estMinutes: 9,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro: "Why this matters: Time questions are very common in PLE. If you can change between 12-hour and 24-hour time and work out how long something takes, you can collect these marks with confidence.",
      learningObjectives: [
        "Change time from 12-hour clock to 24-hour clock.",
        "Change time from 24-hour clock to 12-hour clock.",
        "Tell the difference between noon and midnight.",
        "Work out the duration between two given times.",
      ],
      whatYouNeedToKnow: [
        "The 12-hour clock uses numbers from 1 to 12 together with am or pm. The 24-hour clock uses numbers from 00:00 up to 23:59 and does not use am or pm.",
        "Morning times are usually easy to change. If it is am, keep the same hour and write it with two digits when needed. For example, 8:15 am becomes 08:15.",
        "Afternoon and evening times need 12 more hours added to the hour. For example, 3:30 pm becomes 15:30, because 3 + 12 = 15. In the same way, 7:45 pm becomes 19:45.",
        "Two times need special care. 12 noon is 12:00. 12 midnight is 00:00. Many pupils mix these up, so always slow down when you see 12 noon or 12 midnight.",
        "To change from 24-hour time to 12-hour time, check the hour first. If it is less than 12, it is usually am. If it is more than 12, subtract 12 and write pm. For example, 18:20 becomes 6:20 pm.",
        "To find how long a journey or lesson took, move step by step from the starting time to the finishing time. This is often safer than trying to do everything in one jump.",
      ],
      worked: {
        problem: "A bus leaves Kampala at 6:45 am and reaches Mbarara at 1:20 pm. How long is the journey?",
        steps: [
          "Step 1. Change both times into 24-hour time. 6:45 am = 06:45 and 1:20 pm = 13:20.",
          "Step 2. Count from 06:45 to 07:00. That is 15 minutes.",
          "Step 3. Count from 07:00 to 13:00. That is 6 hours.",
          "Step 4. Count from 13:00 to 13:20. That is 20 minutes.",
          "Step 5. Add the parts: 6 hours + 15 minutes + 20 minutes = 6 hours 35 minutes.",
        ],
        answer: "Answer: The journey took 6 hours 35 minutes.",
      },
      commonMistakes: [
        "Adding 12 to all times without checking whether the time is am or pm.",
        "Confusing 12 noon with 12 midnight. 12 noon = 12:00, but 12 midnight = 00:00.",
        "Subtracting the two times carelessly when finding duration instead of counting in steps.",
        "Forgetting that 08:00 and 8:00 am are the same time, just written in different clock systems.",
      ],
      tryThis: {
        question: "Change 9:40 pm to 24-hour time.",
        choices: ["09:40", "19:40", "21:40", "22:40"],
        correct: 2,
        explanation: "Because it is pm, add 12 to the hour: 9 + 12 = 21. So 9:40 pm = 21:40. The answer is 21:40.",
      },
      recap: [
        "am times usually keep the same hour in 24-hour time.",
        "pm times usually need 12 added to the hour.",
        "12 noon = 12:00 and 12 midnight = 00:00.",
        "For duration questions, count in small steps if that feels easier.",
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
    title: "Money (profit, loss, discount, interest)",
    estMinutes: 14,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro: "Why this matters: Money questions are very common in PLE and in daily life. They often involve buying, selling, saving, borrowing, discounts, profit, and loss, so understanding the starting amount is very important.",
      learningObjectives: [
        "Explain cost price, selling price, profit, and loss.",
        "Find profit and loss amounts.",
        "Find profit and loss percentages.",
        "Find discount and new price after discount.",
        "Use the simple interest formula correctly.",
      ],
      whatYouNeedToKnow: [
        "Cost price is the amount paid to buy an item. Selling price is the amount the item is sold for. If the selling price is higher than the cost price, there is a profit. If the selling price is lower than the cost price, there is a loss.",
        "To find profit, subtract cost price from selling price. To find loss, subtract selling price from cost price. So the first step is always to decide whether the seller gained or lost money.",
        "Profit percentage and loss percentage are based on the cost price. This is very important because many pupils mistakenly use the selling price instead.",
        "Discount is a reduction in the marked price. So when you see a discount question, begin with the marked price, not the cost price.",
        "Simple interest is the extra money paid for borrowing or earned from saving. The rule is I = (P × R × T) ÷ 100, where P is principal, R is rate, and T is time in years.",
        "In money questions, always ask yourself: what is the starting amount? Is it the cost price, marked price, selling price, or principal? That one question helps you avoid many mistakes.",
      ],
      worked: {
        problem: "A trader bought a radio at UGX 60,000 and sold it at UGX 75,000. Find the profit percentage.",
        steps: [
          "Step 1. Identify the cost price and selling price. Cost price = UGX 60,000 and selling price = UGX 75,000.",
          "Step 2. Find the profit: 75,000 − 60,000 = UGX 15,000.",
          "Step 3. Find the profit percentage using the cost price: 15,000/60,000 × 100 = 25%.",
        ],
        answer: "Answer: The profit percentage is 25%.",
      },
      commonMistakes: [
        "Using the selling price instead of the cost price when finding profit or loss percentage.",
        "Mixing up marked price and cost price.",
        "Stopping after finding the discount amount without finding what the buyer actually pays.",
        "Using months directly in simple interest without changing them into years when needed.",
      ],
      tryThis: {
        question: "A dress is marked at UGX 40,000. The shop gives a 20% discount. How much does the customer pay?",
        choices: ["UGX 32,000", "UGX 8,000", "UGX 38,000", "UGX 48,000"],
        correct: 0,
        explanation: "First find the discount: 20% of 40,000 = 8,000. Then subtract it from the marked price: 40,000 − 8,000 = 32,000. The customer pays UGX 32,000.",
      },
      recap: [
        "Profit = selling price − cost price.",
        "Loss = cost price − selling price.",
        "Profit and loss percentages use the cost price.",
        "Discount starts from the marked price.",
        "Simple interest: I = (P × R × T) ÷ 100.",
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
