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
  writingTasks?: Array<{
    title: string;
    prompt: string;
    planningSteps: string[];
    checklist: string[];
    modelOpening?: string;
  }>;
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
  {
    id: "four-basic-operations",
    themeId: "theme-2-numeracy",
    themeName: "Numeracy · Operations",
    title: "Four basic operations",
    estMinutes: 15,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro:
        "Why this matters: Addition, subtraction, multiplication and division are used in almost every part of P7 Mathematics. If a learner is weak here, many other topics become difficult. If a learner is strong here, money, fractions, measurement and word problems become much easier.",
      learningObjectives: [
        "Add whole numbers accurately.",
        "Subtract whole numbers correctly, including regrouping.",
        "Multiply and divide whole numbers using written methods.",
        "Choose the correct operation in a word problem.",
        "Check whether an answer makes sense.",
      ],
      whatYouNeedToKnow: [
        "The four basic operations are addition, subtraction, multiplication and division. Addition combines amounts. Subtraction finds what remains or the difference. Multiplication is repeated addition of equal groups. Division shares equally or finds how many groups can be made.",
        "Place value matters in all four operations. When adding or subtracting, line up ones under ones, tens under tens, hundreds under hundreds, and so on. A place-value mistake can spoil the whole answer even when the method is correct.",
        "When subtracting, sometimes you need to regroup. For example, if there are not enough ones to subtract from, you borrow one ten and change it into 10 ones. The same idea works for hundreds and thousands.",
        "Multiplication can be done in parts. For example, 23 × 4 means 20 × 4 and 3 × 4. For larger numbers, learners often use the vertical method, multiplying step by step and then adding the partial answers carefully.",
        "Division is the opposite of multiplication. If 6 × 8 = 48, then 48 ÷ 6 = 8 and 48 ÷ 8 = 6. This link helps you check answers quickly.",
        "In word problems, do not rush to calculate before understanding the question. First ask: am I joining, taking away, making equal groups, or sharing equally? That helps you choose the right operation.",
      ],
      worked: {
        problem:
          "A school bought 248 exercise books in Term I and 176 exercise books in Term II. The books were packed equally into 8 boxes. How many books were in each box?",
        steps: [
          "Step 1. Find the total number of books bought: 248 + 176 = 424.",
          "Step 2. The books were shared equally into 8 boxes, so divide: 424 ÷ 8 = 53.",
          "Step 3. Check the answer by multiplying: 53 × 8 = 424. The division is correct.",
        ],
        answer: "Answer: Each box had 53 books.",
      },
      commonMistakes: [
        "Adding or subtracting without lining up place values properly.",
        "Forgetting to regroup when subtracting.",
        "Leaving out a carry in addition or multiplication.",
        "Using the wrong operation in a word problem just because the numbers look easy to add.",
        "Not checking whether the final answer is reasonable.",
      ],
      tryThis: {
        question: "A shop had 360 bottles of soda. It sold 128 in the morning and 97 in the afternoon. How many bottles remained?",
        choices: ["135", "225", "263", "329"],
        correct: 0,
        explanation: "First find total sold: 128 + 97 = 225. Then subtract from 360: 360 − 225 = 135. So 135 bottles remained.",
      },
      recap: [
        "Addition combines amounts.",
        "Subtraction finds what is left or the difference.",
        "Multiplication makes equal groups.",
        "Division shares equally or finds the number of groups.",
        "Always use place value carefully and check your answer when possible.",
      ],
    },
    quiz: [
      { q: "What is 4,286 + 3,759?", choices: ["8,045", "7,945", "7,035", "8,145"], correct: 0, why: "Add carefully by place value: 4,286 + 3,759 = 8,045." },
      { q: "Work out 9,000 − 2,785.", choices: ["6,215", "6,325", "7,215", "5,215"], correct: 0, why: "Subtract carefully with regrouping: 9,000 − 2,785 = 6,215." },
      { q: "What is 246 × 3?", choices: ["648", "738", "726", "768"], correct: 1, why: "246 × 3 = 738." },
      { q: "Divide 864 by 9.", choices: ["94", "96", "86", "106"], correct: 1, why: "864 ÷ 9 = 96 because 9 × 96 = 864." },
      { q: "A trader had 525 kg of maize. She sold 248 kg. How many kilograms remained?", choices: ["277 kg", "283 kg", "327 kg", "773 kg"], correct: 0, why: "Remaining maize = 525 − 248 = 277 kg." },
      { q: "There are 48 pupils in 6 equal groups. How many pupils are in each group?", choices: ["6", "7", "8", "9"], correct: 2, why: "48 shared equally into 6 groups gives 48 ÷ 6 = 8." },
      { q: "A school bought 35 boxes of chalk. Each box had 12 sticks. How many sticks were bought altogether?", choices: ["370", "420", "470", "312"], correct: 1, why: "35 × 12 = 420 sticks." },
    ],
  },
  {
    id: "integers-core",
    themeId: "theme-2-numeracy",
    themeName: "Numeracy · Integers",
    title: "Integers (positive, negative, zero)",
    estMinutes: 14,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro:
        "Why this matters: Integers help learners understand numbers above and below zero. They are useful in temperature, floors of buildings, debts, direction on a number line, and they also prepare learners for later algebra and inequalities.",
      learningObjectives: [
        "Identify positive integers, negative integers and zero.",
        "Compare integers using a number line.",
        "Add and subtract simple integers.",
        "Use integers in everyday situations such as temperature and debt.",
      ],
      whatYouNeedToKnow: [
        "Integers are whole numbers and their negatives, together with zero. Examples are ..., −3, −2, −1, 0, 1, 2, 3, ... They do not include fractions or decimals.",
        "A positive integer is greater than zero. A negative integer is less than zero. Zero is neither positive nor negative.",
        "A number line helps us compare integers. Numbers to the right are greater, and numbers to the left are smaller. So 4 is greater than 1, and −2 is greater than −5 because −2 is to the right of −5 on the number line.",
        "When adding integers, think about movement on the number line. Adding a positive number moves right. Adding a negative number moves left.",
        "Subtraction can also be understood on the number line. For simple P7 work, learners can reason step by step using movement or real-life meaning. For example, if the temperature is 3°C and it falls by 5°C, the new temperature is −2°C.",
        "Real-life situations help make sense of integers. A debt can be shown with a negative sign. A temperature below zero can be shown with a negative sign. Floors below ground can also use negative numbers.",
      ],
      worked: {
        problem:
          "At 6:00 a.m., the temperature in a cold town was 2°C. By night, it had fallen by 7°C. What was the temperature at night?",
        steps: [
          "Step 1. Start at 2 on the number line because the morning temperature was 2°C.",
          "Step 2. A fall of 7°C means move 7 places left.",
          "Step 3. Moving left from 2 by 7 places gives −5.",
        ],
        answer: "Answer: The temperature at night was −5°C.",
      },
      commonMistakes: [
        "Thinking that a number with a bigger digit is always greater, for example saying −8 is greater than −3.",
        "Forgetting that zero is neither positive nor negative.",
        "Moving in the wrong direction on the number line when adding or subtracting negative numbers.",
        "Ignoring the real-life meaning of the sign in temperature or debt questions.",
      ],
      tryThis: {
        question: "A diver was at −4 m below sea level. He rose 6 m. Where was he then?",
        choices: ["−10 m", "2 m", "−2 m", "10 m"],
        correct: 1,
        explanation: "Start at −4. Rising 6 m means move 6 places to the right on the number line. −4 + 6 = 2. So he was 2 m above sea level.",
      },
      recap: [
        "Integers include negative whole numbers, zero and positive whole numbers.",
        "Numbers to the right on a number line are greater.",
        "Zero is neither positive nor negative.",
        "Use number-line movement and real-life meaning to solve simple integer questions.",
      ],
    },
    quiz: [
      { q: "Which of these is a negative integer?", choices: ["0", "5", "−7", "3/4"], correct: 2, why: "−7 is a whole number below zero, so it is a negative integer." },
      { q: "Which number is greater?", choices: ["−6", "−2", "They are equal", "Cannot tell"], correct: 1, why: "−2 is to the right of −6 on the number line, so it is greater." },
      { q: "What is 3 + (−5)?", choices: ["8", "−8", "−2", "2"], correct: 2, why: "Start at 3 and move 5 places left. You reach −2." },
      { q: "What is −4 + 7?", choices: ["3", "−3", "11", "−11"], correct: 0, why: "Start at −4 and move 7 places right. You reach 3." },
      { q: "The temperature was 6°C and it dropped by 9°C. What is the new temperature?", choices: ["15°C", "−3°C", "3°C", "−15°C"], correct: 1, why: "6 − 9 = −3, so the new temperature is −3°C." },
      { q: "A lift moved from floor −2 to floor 4. How many floors did it move up?", choices: ["2", "4", "6", "8"], correct: 2, why: "From −2 to 0 is 2 floors, then to 4 is 4 more. Total = 6 floors." },
      { q: "Which statement is true?", choices: ["−9 is greater than −4", "0 is a negative integer", "−1 is less than 2", "5 is less than −3"], correct: 2, why: "−1 is to the left of 2 on the number line, so −1 is less than 2." },
    ],
  },
  {
    id: "data-handling",
    themeId: "theme-3-data",
    themeName: "Interpretation of Graphs and Data",
    title: "Pie charts and travel graphs",
    estMinutes: 15,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro:
        "Why this matters: Pie charts and travel graphs help learners read information from pictures instead of only from words. These questions are common because they test whether a learner can understand data, compare parts, and explain movement over time.",
      learningObjectives: [
        "Read simple information from a pie chart.",
        "Compare sections of a pie chart correctly.",
        "Read a travel graph and describe what is happening.",
        "Find time taken, distance covered, and resting time from a travel graph.",
      ],
      whatYouNeedToKnow: [
        "A pie chart is a circle divided into parts. Each part shows a share of the whole. The whole circle stands for the total amount. A bigger sector shows a bigger share, and a smaller sector shows a smaller share.",
        "When reading a pie chart, first identify the whole. Then look at the labelled parts and compare them. Some questions ask which part is biggest or smallest, while others ask what fraction or percentage a part represents.",
        "A travel graph shows how distance changes with time. Time is usually along the horizontal axis, and distance is usually on the vertical axis.",
        "If the line on a travel graph goes upward, the object is moving away from the starting point. If the line is flat, the object has stopped or is resting. If the line goes downward, the object is returning towards the starting point.",
        "To find how long a journey lasted, look at the starting time and ending time. To find resting time, look for the flat parts of the graph. To compare speed, compare the steepness of the line: a steeper line means faster movement.",
        "Always read the axes carefully before answering. Some pupils make mistakes because they rush to use the numbers without checking whether they show time, distance, or something else.",
      ],
      worked: {
        problem:
          "A travel graph shows a cyclist leaving home at 8:00 a.m. At 9:00 a.m. the cyclist is 12 km from home. From 9:00 a.m. to 9:30 a.m. the graph is flat. By 10:30 a.m. the cyclist is back home. How long did the whole trip take, and how long did the cyclist rest?",
        steps: [
          "Step 1. The trip started at 8:00 a.m. and ended at 10:30 a.m. So the whole trip took 2 hours 30 minutes.",
          "Step 2. The flat part of the graph is from 9:00 a.m. to 9:30 a.m. A flat line means no movement.",
          "Step 3. So the cyclist rested for 30 minutes.",
        ],
        answer: "Answer: The whole trip took 2 hours 30 minutes, and the cyclist rested for 30 minutes.",
      },
      commonMistakes: [
        "Forgetting that the whole pie chart stands for the total.",
        "Thinking a flat line on a travel graph means moving slowly instead of resting.",
        "Ignoring the axis labels and mixing up time with distance.",
        "Using only one point on a graph when the question is really about an interval of time.",
      ],
      tryThis: {
        question: "On a travel graph, the line is flat from 11:00 a.m. to 11:20 a.m. What does this mean?",
        choices: ["The traveller was moving fast", "The traveller was resting", "The traveller returned home", "The traveller got lost"],
        correct: 1,
        explanation: "A flat line means the distance did not change during that time, so the traveller was resting or stopped.",
      },
      recap: [
        "A pie chart shows parts of a whole.",
        "Always identify the total before comparing sectors.",
        "In a travel graph, rising means moving away, flat means resting, and falling means returning.",
        "Read the axes carefully before answering.",
      ],
    },
    quiz: [
      { q: "In a pie chart of favourite fruits, which sector represents the largest number of pupils?", choices: ["The smallest sector", "The largest sector", "Any sector with a label", "The sector at the top"], correct: 1, why: "The largest sector shows the largest share of the whole." },
      { q: "What does the whole circle in a pie chart represent?", choices: ["One part only", "Half the data", "The total data", "Only the biggest value"], correct: 2, why: "The full circle stands for the total amount being shown." },
      { q: "On a travel graph, what does a flat line mean?", choices: ["The traveller is resting", "The traveller is speeding up", "The traveller is turning left", "The journey has ended forever"], correct: 0, why: "A flat line shows the distance is not changing, so the traveller is resting." },
      { q: "A travel graph rises from 0 km at 8:00 to 20 km at 9:00. What does this show?", choices: ["The traveller returned home", "The traveller rested", "The traveller moved 20 km away from the start", "The graph is wrong"], correct: 2, why: "The distance from the start increased from 0 km to 20 km, so the traveller moved away from the starting point." },
      { q: "A traveller starts at 7:30 a.m. and finishes at 10:00 a.m. How long is the journey?", choices: ["2 hours", "2 hours 30 minutes", "3 hours", "1 hour 30 minutes"], correct: 1, why: "From 7:30 a.m. to 10:00 a.m. is 2 hours 30 minutes." },
      { q: "If one sector of a pie chart is bigger than another, what does that mean?", choices: ["It represents a smaller share", "It represents an equal share", "It represents a larger share", "It has no meaning"], correct: 2, why: "A bigger sector shows a bigger share of the whole." },
      { q: "A travel graph goes up, then stays flat, then goes down. What happened?", choices: ["The traveller moved away, rested, then returned", "The traveller rested, then moved away forever", "The traveller never moved", "The traveller changed vehicles"], correct: 0, why: "Upward means moving away, flat means resting, and downward means returning toward the start." },
    ],
  },
  {
    id: "timetables",
    themeId: "theme-5-measurement",
    themeName: "Measurement · Time",
    title: "Timetables",
    estMinutes: 13,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro:
        "Why this matters: Timetable questions show mathematics in real life. Learners use them to read departure times, arrival times, waiting time, lesson schedules, and journey duration. This topic grows naturally from clock work and helps learners use time meaningfully.",
      learningObjectives: [
        "Read information from a timetable.",
        "Find arrival and departure times correctly.",
        "Work out waiting time and journey time.",
        "Answer timetable questions using careful step-by-step reading.",
      ],
      whatYouNeedToKnow: [
        "A timetable is a table that shows times for events such as lessons, buses, trains, or meetings. To use a timetable correctly, first identify the row and column you need.",
        "Some timetable questions ask for a direct reading, such as the departure time of a bus. Others ask for a calculation, such as how long the journey took or how long someone waited between two events.",
        "To find duration, compare the starting time and finishing time carefully. It often helps to count in steps, especially when the times are not exact hours.",
        "Waiting time is the time between arrival and the next departure or event. So in waiting-time questions, you usually compare two different timetable entries.",
        "Always look carefully at whether the timetable uses 12-hour time or 24-hour time. Also check whether the timetable is for one route, several routes, one day, or repeated periods.",
        "Do not guess from memory. Read the timetable slowly and point to the exact row and column before answering.",
      ],
      worked: {
        problem:
          "A bus leaves Masaka at 09:15 and reaches Mbarara at 11:45 according to a timetable. Another bus to Kabale leaves Mbarara at 12:20. How long does a passenger wait at Mbarara before catching the next bus?",
        steps: [
          "Step 1. The passenger arrives in Mbarara at 11:45.",
          "Step 2. The next bus leaves at 12:20.",
          "Step 3. Count from 11:45 to 12:00. That is 15 minutes.",
          "Step 4. Count from 12:00 to 12:20. That is 20 minutes.",
          "Step 5. Add the two parts: 15 minutes + 20 minutes = 35 minutes.",
        ],
        answer: "Answer: The passenger waits for 35 minutes.",
      },
      commonMistakes: [
        "Reading the wrong row or wrong column in the timetable.",
        "Confusing arrival time with departure time.",
        "Subtracting times carelessly instead of counting in steps.",
        "Ignoring whether the timetable uses 12-hour or 24-hour time.",
      ],
      tryThis: {
        question: "A lesson starts at 10:40 a.m. and ends at 11:25 a.m. according to a school timetable. How long is the lesson?",
        choices: ["35 minutes", "45 minutes", "55 minutes", "1 hour 25 minutes"],
        correct: 1,
        explanation: "From 10:40 a.m. to 11:00 a.m. is 20 minutes. From 11:00 a.m. to 11:25 a.m. is 25 minutes. Total = 45 minutes.",
      },
      recap: [
        "A timetable shows times in rows and columns.",
        "Read the correct row and column before answering.",
        "Waiting time is the gap between one event and the next.",
        "Count in steps if duration questions feel difficult.",
      ],
    },
    quiz: [
      { q: "What is the main purpose of a timetable?", choices: ["To show shapes", "To show times of events", "To show prices only", "To show fractions"], correct: 1, why: "A timetable is used to show the times of events such as lessons, buses, or trains." },
      { q: "A bus leaves at 08:25 and arrives at 10:10. How long is the journey?", choices: ["1 hour 35 minutes", "1 hour 45 minutes", "2 hours 15 minutes", "2 hours 35 minutes"], correct: 1, why: "08:25 to 09:25 is 1 hour. 09:25 to 10:10 is 45 minutes. Total = 1 hour 45 minutes." },
      { q: "If a passenger arrives at 1:10 p.m. and the next bus leaves at 1:40 p.m., how long does the passenger wait?", choices: ["20 minutes", "25 minutes", "30 minutes", "40 minutes"], correct: 2, why: "From 1:10 p.m. to 1:40 p.m. is 30 minutes." },
      { q: "A school break starts at 10:30 a.m. and ends at 10:50 a.m. How long is the break?", choices: ["10 minutes", "15 minutes", "20 minutes", "30 minutes"], correct: 2, why: "10:50 a.m. − 10:30 a.m. = 20 minutes." },
      { q: "In a timetable, what should you check first before answering?", choices: ["The colour of the table", "The correct row and column", "The weather", "The biggest number"], correct: 1, why: "The first step is to find the correct row and column that contain the needed information." },
      { q: "A train leaves at 14:15 and reaches its destination at 16:00. What is the travel time?", choices: ["1 hour 35 minutes", "1 hour 45 minutes", "2 hours", "2 hours 15 minutes"], correct: 1, why: "14:15 to 15:15 is 1 hour, then to 16:00 is 45 minutes. Total = 1 hour 45 minutes." },
      { q: "A lesson ends at 12:15 and the next one starts at 12:35. What is the waiting time?", choices: ["10 minutes", "15 minutes", "20 minutes", "25 minutes"], correct: 2, why: "From 12:15 to 12:35 is 20 minutes." },
    ],
  },
  {
    id: "algebraic-expressions",
    themeId: "theme-4-algebra",
    themeName: "Algebra",
    title: "Algebraic expressions",
    estMinutes: 14,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro:
        "Why this matters: Algebraic expressions are one of the first steps from ordinary arithmetic into algebra. Learners begin to use letters to stand for numbers, and this helps them prepare for substitution, equations, and real-life problem solving.",
      learningObjectives: [
        "Explain what an algebraic expression is.",
        "Identify terms, numbers, and letters in simple expressions.",
        "Write simple verbal statements as algebraic expressions.",
        "Simplify simple like terms.",
      ],
      whatYouNeedToKnow: [
        "An algebraic expression is a mathematical phrase that contains numbers, letters, or both. The letters stand for numbers that may change or may not yet be known. For example, x + 4 and 3a are algebraic expressions.",
        "A letter in algebra is often called a variable. It is a symbol used in place of a number. In P7 work, learners often use letters such as x, y, a, or n.",
        "A term is one part of an expression. In 3x + 5, the terms are 3x and 5. The 3 in 3x is called the coefficient because it tells how many x's there are.",
        "An expression is not the same as an equation. An expression does not have an equals sign. For example, 2x + 3 is an expression, but 2x + 3 = 11 is an equation.",
        "Like terms are terms with the same letter part. For example, 3x and 5x are like terms, but 3x and 3y are not. Like terms can be combined. So 3x + 5x = 8x.",
        "When turning words into algebra, read slowly. 'A number increased by 4' means x + 4. 'Three times a number' means 3x. 'Five less than a number' means x − 5.",
      ],
      worked: {
        problem:
          "Simplify 4x + 3x + 2.",
        steps: [
          "Step 1. Identify the like terms. 4x and 3x are like terms because both have x.",
          "Step 2. Add the coefficients: 4 + 3 = 7.",
          "Step 3. Keep the x and write the constant separately.",
        ],
        answer: "Answer: 4x + 3x + 2 = 7x + 2.",
      },
      commonMistakes: [
        "Thinking an expression must always have an equals sign.",
        "Combining unlike terms, for example saying 3x + 2 = 5x.",
        "Forgetting the letter when adding like terms.",
        "Reversing verbal phrases such as '5 less than a number'.",
      ],
      tryThis: {
        question: "Write 'three more than a number y' as an algebraic expression.",
        choices: ["3y", "y + 3", "3 − y", "y ÷ 3"],
        correct: 1,
        explanation: "'Three more than a number y' means start with y and add 3. So the expression is y + 3.",
      },
      recap: [
        "An algebraic expression is a number-and-letter phrase without an equals sign.",
        "Letters stand for numbers.",
        "Like terms have the same letter part and can be combined.",
        "Read word phrases carefully before writing the expression.",
      ],
    },
    quiz: [
      { q: "Which of these is an algebraic expression?", choices: ["7 + 4", "x + 5", "9 = 3", "12"], correct: 1, why: "x + 5 contains a letter and no equals sign, so it is an algebraic expression." },
      { q: "Which part of 6x + 2 is the coefficient of x?", choices: ["6", "x", "2", "+"], correct: 0, why: "The coefficient is the number multiplying the letter. In 6x, the coefficient is 6." },
      { q: "Write 'five less than a number n' as an expression.", choices: ["5n", "n + 5", "n − 5", "5 − n"], correct: 2, why: "Start with the number n, then subtract 5. So the expression is n − 5." },
      { q: "Simplify 2x + 5x.", choices: ["7", "7x", "10x", "3x"], correct: 1, why: "2x and 5x are like terms. Add the coefficients: 2 + 5 = 7, so the answer is 7x." },
      { q: "Which pair are like terms?", choices: ["3x and 3y", "4a and 2a", "5 and x", "2m and 2"], correct: 1, why: "4a and 2a both have the same letter part a, so they are like terms." },
      { q: "Simplify 3y + 4 + 2y.", choices: ["5y + 4", "9y", "5y", "7y + 4y"], correct: 0, why: "3y and 2y are like terms, so 3y + 2y = 5y. Keep the + 4, giving 5y + 4." },
      { q: "Which statement is correct?", choices: ["An expression always has an equals sign", "3x + 2 and 5x are the same kind of terms", "x + 4 is an equation", "Letters in algebra can stand for numbers"], correct: 3, why: "Letters in algebra are used to stand for numbers. The other statements are false." },
    ],
  },
  {
    id: "tests-of-divisibility",
    themeId: "theme-2-numeracy",
    themeName: "Numeracy · Patterns",
    title: "Tests of divisibility",
    estMinutes: 13,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro:
        "Why this matters: Tests of divisibility help learners decide quickly whether one number can divide another exactly. This saves time in factor work, fractions, prime factorisation, and many written calculations.",
      learningObjectives: [
        "Use the divisibility tests for 2, 3, 4, 5, 6, 8, 9 and 10.",
        "Decide whether a number is divisible by another number without long division.",
        "Explain why a number passes or fails a test of divisibility.",
        "Use divisibility tests in simple number problems.",
      ],
      whatYouNeedToKnow: [
        "A number is divisible by another number if it can be divided exactly with no remainder. For example, 24 is divisible by 6 because 24 ÷ 6 = 4 with no remainder.",
        "A number is divisible by 2 if its last digit is 0, 2, 4, 6, or 8. These are even numbers.",
        "A number is divisible by 5 if its last digit is 0 or 5. It is divisible by 10 if its last digit is 0.",
        "A number is divisible by 3 if the sum of its digits is divisible by 3. In the same way, a number is divisible by 9 if the sum of its digits is divisible by 9.",
        "A number is divisible by 4 if the last two digits form a number divisible by 4. A number is divisible by 8 if the last three digits form a number divisible by 8.",
        "A number is divisible by 6 only if it is divisible by both 2 and 3. This is a very useful combined test.",
      ],
      worked: {
        problem:
          "Is 4,356 divisible by 2, 3, 4, 6 and 9?",
        steps: [
          "Step 1. Check divisibility by 2. The last digit is 6, so 4,356 is divisible by 2.",
          "Step 2. Add the digits: 4 + 3 + 5 + 6 = 18. Since 18 is divisible by 3, the number is divisible by 3.",
          "Step 3. Since the last two digits are 56 and 56 is divisible by 4, the number is divisible by 4.",
          "Step 4. A number divisible by both 2 and 3 is divisible by 6, so 4,356 is divisible by 6.",
          "Step 5. Since the digit sum 18 is divisible by 9, the number is also divisible by 9.",
        ],
        answer: "Answer: 4,356 is divisible by 2, 3, 4, 6 and 9.",
      },
      commonMistakes: [
        "Checking all the digits for divisibility by 2 instead of looking only at the last digit.",
        "Forgetting to add the digits when testing divisibility by 3 or 9.",
        "Using the whole number instead of the last two digits for divisibility by 4.",
        "Saying a number is divisible by 6 just because it is even, without checking divisibility by 3.",
      ],
      tryThis: {
        question: "Which of these numbers is divisible by both 2 and 3?",
        choices: ["245", "318", "455", "701"],
        correct: 1,
        explanation: "318 ends in 8, so it is divisible by 2. Its digits add to 3 + 1 + 8 = 12, and 12 is divisible by 3. So 318 is divisible by both 2 and 3.",
      },
      recap: [
        "Divisible by 2: last digit is even.",
        "Divisible by 3 or 9: use the sum of the digits.",
        "Divisible by 4: check the last two digits.",
        "Divisible by 5 or 10: check the last digit.",
        "Divisible by 6: it must be divisible by both 2 and 3.",
      ],
    },
    quiz: [
      { q: "Which number is divisible by 2?", choices: ["347", "518", "625", "731"], correct: 1, why: "518 ends in 8, so it is divisible by 2." },
      { q: "Which number is divisible by 5?", choices: ["432", "781", "640", "923"], correct: 2, why: "A number divisible by 5 ends in 0 or 5. 640 ends in 0." },
      { q: "Is 2,736 divisible by 3?", choices: ["Yes", "No", "Only by 2", "Cannot tell"], correct: 0, why: "2 + 7 + 3 + 6 = 18, and 18 is divisible by 3, so 2,736 is divisible by 3." },
      { q: "Which number is divisible by 4?", choices: ["1,326", "2,118", "3,512", "4,327"], correct: 2, why: "Look at the last two digits. 12 is divisible by 4, so 3,512 is divisible by 4." },
      { q: "Which number is divisible by 9?", choices: ["234", "546", "728", "812"], correct: 0, why: "Add the digits. For 234, 2 + 3 + 4 = 9, and 9 is divisible by 9. So 234 is divisible by 9." },
      { q: "A number is divisible by 6 if it is divisible by:", choices: ["2 only", "3 only", "2 and 3", "3 and 5"], correct: 2, why: "For divisibility by 6, the number must be divisible by both 2 and 3." },
      { q: "Which number is divisible by 10?", choices: ["4,205", "7,130", "6,421", "8,333"], correct: 1, why: "A number divisible by 10 must end in 0. 7,130 ends in 0." },
    ],
  },
  {
    id: "prime-factorisation",
    themeId: "theme-2-numeracy",
    themeName: "Numeracy · Whole Numbers",
    title: "Prime factorisation",
    estMinutes: 14,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro:
        "Why this matters: Prime factorisation helps learners break numbers into smaller exact factors. It is useful in divisibility work, simplifying fractions, and later ideas like HCF and LCM.",
      learningObjectives: [
        "Explain the meaning of a prime number and a factor.",
        "Find the prime factors of a whole number.",
        "Write a number as a product of prime factors.",
        "Check a factorisation by multiplying the factors again.",
      ],
      whatYouNeedToKnow: [
        "A factor of a number is a whole number that divides it exactly. For example, factors of 12 include 1, 2, 3, 4, 6 and 12.",
        "A prime number has exactly two factors: 1 and itself. Examples are 2, 3, 5, 7 and 11. The number 1 is not a prime number.",
        "A composite number has more than two factors. For example, 12 is composite because it has several factors.",
        "Prime factorisation means writing a number as a product of prime numbers only. For example, 12 = 2 × 2 × 3.",
        "When factorising, it helps to divide by small prime numbers first, such as 2, 3, or 5. Keep dividing until only prime numbers remain.",
        "Always check the final answer by multiplying the prime factors together to see whether they give the original number.",
      ],
      worked: {
        problem:
          "Write 60 as a product of prime factors.",
        steps: [
          "Step 1. Divide 60 by 2 because it is even. 60 ÷ 2 = 30.",
          "Step 2. Divide 30 by 2 again. 30 ÷ 2 = 15.",
          "Step 3. Divide 15 by 3. 15 ÷ 3 = 5.",
          "Step 4. 5 is a prime number, so stop there.",
          "Step 5. Write the answer as 60 = 2 × 2 × 3 × 5.",
        ],
        answer: "Answer: 60 = 2 × 2 × 3 × 5.",
      },
      commonMistakes: [
        "Including 1 as a prime factor.",
        "Stopping before all the factors are prime numbers.",
        "Forgetting to check the answer by multiplying the factors again.",
        "Mixing up ordinary factors with prime factors.",
      ],
      tryThis: {
        question: "Which of these is the correct prime factorisation of 18?",
        choices: ["2 × 9", "3 × 6", "2 × 3 × 3", "1 × 18"],
        correct: 2,
        explanation: "18 = 2 × 9 and 9 = 3 × 3. So the product of prime factors is 2 × 3 × 3.",
      },
      recap: [
        "A prime number has exactly two factors.",
        "Prime factorisation uses prime numbers only.",
        "Keep dividing until all the factors are prime.",
        "Check by multiplying the prime factors again.",
      ],
    },
    quiz: [
      { q: "Which of these is a prime number?", choices: ["1", "9", "11", "15"], correct: 2, why: "11 has exactly two factors: 1 and 11." },
      { q: "Which of these is a factor of 24?", choices: ["5", "7", "8", "11"], correct: 2, why: "24 ÷ 8 = 3 with no remainder, so 8 is a factor of 24." },
      { q: "Write 20 as a product of prime factors.", choices: ["4 × 5", "2 × 2 × 5", "10 × 2", "1 × 20"], correct: 1, why: "20 = 2 × 10 = 2 × 2 × 5, and 2 and 5 are prime." },
      { q: "Which of these numbers is composite?", choices: ["2", "3", "5", "12"], correct: 3, why: "12 has more than two factors, so it is composite." },
      { q: "What are the prime factors of 28?", choices: ["2 × 14", "4 × 7", "2 × 2 × 7", "1 × 28"], correct: 2, why: "28 = 2 × 14 = 2 × 2 × 7, and all these factors are prime." },
      { q: "Why is 1 not a prime number?", choices: ["Because it is odd", "Because it has only one factor", "Because it is too small", "Because it has many factors"], correct: 1, why: "A prime number must have exactly two factors. The number 1 has only one factor, itself." },
      { q: "Which is the correct prime factorisation of 30?", choices: ["2 × 15", "3 × 10", "2 × 3 × 5", "5 × 6"], correct: 2, why: "30 = 2 × 3 × 5, and all three numbers are prime." },
    ],
  },
  {
    id: "length",
    themeId: "theme-5-measurement",
    themeName: "Measurement",
    title: "Length",
    estMinutes: 14,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro:
        "Why this matters: Length is used in everyday life when measuring distance, height, width, rope, cloth, roads, and classroom objects. Learners also need it for perimeter, area, scale work, and word problems.",
      learningObjectives: [
        "Identify common units of length.",
        "Convert between millimetres, centimetres, metres and kilometres.",
        "Choose a suitable unit for a measurement situation.",
        "Solve simple problems involving length.",
      ],
      whatYouNeedToKnow: [
        "Length tells how long or how far something is. Common units are millimetres (mm), centimetres (cm), metres (m), and kilometres (km).",
        "Small objects are often measured in millimetres or centimetres. Larger objects such as a classroom or a tree may be measured in metres. Long road distances are measured in kilometres.",
        "Useful conversion facts include: 10 mm = 1 cm, 100 cm = 1 m, and 1,000 m = 1 km.",
        "When converting from a larger unit to a smaller unit, multiply. For example, 3 m = 300 cm. When converting from a smaller unit to a larger unit, divide. For example, 500 cm = 5 m.",
        "Always check whether your answer makes sense. For example, a door cannot be 3 km high, and a road between towns is not 8 cm long.",
        "In word problems, read carefully to see whether the question asks for total length, remaining length, or a conversion between units.",
      ],
      worked: {
        problem:
          "A rope is 3 m 45 cm long. Another rope is 2 m 80 cm long. Find their total length in metres and centimetres.",
        steps: [
          "Step 1. Add the centimetres: 45 cm + 80 cm = 125 cm.",
          "Step 2. 125 cm = 1 m 25 cm.",
          "Step 3. Add the metres: 3 m + 2 m + 1 m = 6 m.",
          "Step 4. Keep the remaining 25 cm.",
        ],
        answer: "Answer: The total length is 6 m 25 cm.",
      },
      commonMistakes: [
        "Mixing up the conversion steps, for example dividing when you should multiply.",
        "Using the wrong unit for the object being measured.",
        "Forgetting to regroup 100 cm as 1 m.",
        "Adding mixed units without converting carefully.",
      ],
      tryThis: {
        question: "Change 4.5 m to centimetres.",
        choices: ["45 cm", "450 cm", "4,500 cm", "405 cm"],
        correct: 1,
        explanation: "1 m = 100 cm, so 4.5 m = 4.5 × 100 = 450 cm.",
      },
      recap: [
        "Length measures how long or how far something is.",
        "10 mm = 1 cm, 100 cm = 1 m, and 1,000 m = 1 km.",
        "Multiply when changing to a smaller unit.",
        "Divide when changing to a larger unit.",
      ],
    },
    quiz: [
      { q: "How many centimetres are in 3 metres?", choices: ["30 cm", "300 cm", "3,000 cm", "13 cm"], correct: 1, why: "1 m = 100 cm, so 3 m = 300 cm." },
      { q: "Which unit is best for measuring the distance from Kampala to Jinja?", choices: ["mm", "cm", "m", "km"], correct: 3, why: "Long distances between towns are measured in kilometres." },
      { q: "Change 250 cm to metres.", choices: ["2.5 m", "25 m", "0.25 m", "250 m"], correct: 0, why: "100 cm = 1 m, so 250 cm = 2.5 m." },
      { q: "How many millimetres are in 8 cm?", choices: ["80 mm", "18 mm", "800 mm", "8 mm"], correct: 0, why: "1 cm = 10 mm, so 8 cm = 80 mm." },
      { q: "A ribbon is 1 m 75 cm long. How long is it in centimetres?", choices: ["175 cm", "1075 cm", "75 cm", "1.75 cm"], correct: 0, why: "1 m = 100 cm, so 1 m 75 cm = 175 cm." },
      { q: "Which is longer?", choices: ["90 cm", "1 m", "They are equal", "Cannot tell"], correct: 1, why: "1 m = 100 cm, and 100 cm is greater than 90 cm." },
      { q: "A road is 5 km long. How many metres is this?", choices: ["500 m", "5,000 m", "50,000 m", "500,000 m"], correct: 1, why: "1 km = 1,000 m, so 5 km = 5,000 m." },
    ],
  },
  {
    id: "mass",
    themeId: "theme-5-measurement",
    themeName: "Measurement",
    title: "Mass and weight",
    estMinutes: 14,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro:
        "Why this matters: Mass and weight are used in markets, homes, shops, transport, and health work. Learners need these ideas when measuring goods, comparing quantities, and solving practical everyday maths questions.",
      learningObjectives: [
        "Identify common units of mass and weight.",
        "Convert between grams, kilograms and tonnes.",
        "Choose a suitable unit for a measurement situation.",
        "Solve simple problems involving mass and weight.",
      ],
      whatYouNeedToKnow: [
        "Mass tells how heavy something is. The common units are grams (g), kilograms (kg), and tonnes (t).",
        "Small objects such as sugar in a packet or a pencil box may be measured in grams. Heavier objects such as sacks, people, or animals are often measured in kilograms. Very heavy loads such as large lorries may be measured in tonnes.",
        "Useful conversion facts include: 1,000 g = 1 kg and 1,000 kg = 1 tonne.",
        "To change from kilograms to grams, multiply by 1,000. To change from grams to kilograms, divide by 1,000.",
        "In practical questions, the words mass and weight are often used in everyday ways. What matters most at this stage is using the units correctly and calculating carefully.",
        "Always check whether the answer is sensible. For example, a mango cannot weigh 40 kg, and a truck is not likely to weigh 12 g.",
      ],
      worked: {
        problem:
          "A shopkeeper had 3 kg 500 g of sugar in one bag and 2 kg 750 g in another bag. Find the total mass.",
        steps: [
          "Step 1. Add the grams: 500 g + 750 g = 1,250 g.",
          "Step 2. 1,250 g = 1 kg 250 g.",
          "Step 3. Add the kilograms: 3 kg + 2 kg + 1 kg = 6 kg.",
          "Step 4. Keep the remaining 250 g.",
        ],
        answer: "Answer: The total mass is 6 kg 250 g.",
      },
      commonMistakes: [
        "Forgetting that 1,000 g makes 1 kg.",
        "Using grams for very heavy objects or tonnes for very small ones.",
        "Adding kilograms and grams without regrouping.",
        "Placing the decimal wrongly during conversion.",
      ],
      tryThis: {
        question: "Change 2.5 kg to grams.",
        choices: ["250 g", "2,500 g", "25 g", "25,000 g"],
        correct: 1,
        explanation: "1 kg = 1,000 g, so 2.5 kg = 2.5 × 1,000 = 2,500 g.",
      },
      recap: [
        "Mass shows how heavy something is.",
        "1,000 g = 1 kg.",
        "1,000 kg = 1 tonne.",
        "Use sensible units for the object being measured.",
      ],
    },
    quiz: [
      { q: "How many grams are in 4 kg?", choices: ["400 g", "4,000 g", "40 g", "400,000 g"], correct: 1, why: "1 kg = 1,000 g, so 4 kg = 4,000 g." },
      { q: "Which unit is best for measuring the mass of a sack of maize?", choices: ["g", "kg", "cm", "mm"], correct: 1, why: "A sack of maize is commonly measured in kilograms." },
      { q: "Change 750 g to kilograms.", choices: ["7.5 kg", "0.75 kg", "75 kg", "750 kg"], correct: 1, why: "750 ÷ 1,000 = 0.75 kg." },
      { q: "How many kilograms are in 2 tonnes?", choices: ["200 kg", "2,000 kg", "20,000 kg", "200,000 kg"], correct: 1, why: "1 tonne = 1,000 kg, so 2 tonnes = 2,000 kg." },
      { q: "A bag has mass 1 kg 250 g. What is this in grams?", choices: ["1,025 g", "1,250 g", "125 g", "12,500 g"], correct: 1, why: "1 kg = 1,000 g, so 1 kg 250 g = 1,250 g." },
      { q: "Which is heavier?", choices: ["900 g", "1 kg", "They are equal", "Cannot tell"], correct: 1, why: "1 kg = 1,000 g, and 1,000 g is heavier than 900 g." },
      { q: "A trader buys 3 kg and 2 kg of beans. What is the total mass?", choices: ["5 g", "5 kg", "6 kg", "1 kg"], correct: 1, why: "3 kg + 2 kg = 5 kg." },
    ],
  },
  {
    id: "capacity",
    themeId: "theme-5-measurement",
    themeName: "Measurement",
    title: "Capacity",
    estMinutes: 14,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro:
        "Why this matters: Capacity helps learners measure how much liquid a container can hold. It is used in homes, shops, farming, cooking, and science-related activities.",
      learningObjectives: [
        "Identify common units of capacity.",
        "Convert between millilitres and litres.",
        "Choose a suitable unit for a real-life situation.",
        "Solve simple problems involving capacity.",
      ],
      whatYouNeedToKnow: [
        "Capacity tells how much liquid a container can hold. The common units are millilitres (mL) and litres (L).",
        "Small amounts of liquid are often measured in millilitres. Larger amounts, such as water in a jerrycan or milk in a large container, are often measured in litres.",
        "The main conversion fact is 1,000 mL = 1 L.",
        "To change litres to millilitres, multiply by 1,000. To change millilitres to litres, divide by 1,000.",
        "When solving word problems, check whether the question asks for total capacity, remaining capacity, or conversion into a different unit.",
        "Always ask whether the answer is sensible. A bucket does not usually hold 5 mL, and a medicine spoon does not usually hold 40 L.",
      ],
      worked: {
        problem:
          "A tank contains 3 L 450 mL of water. Another 2 L 800 mL is poured into it. How much water is there now?",
        steps: [
          "Step 1. Add the millilitres: 450 mL + 800 mL = 1,250 mL.",
          "Step 2. 1,250 mL = 1 L 250 mL.",
          "Step 3. Add the litres: 3 L + 2 L + 1 L = 6 L.",
          "Step 4. Keep the remaining 250 mL.",
        ],
        answer: "Answer: There are now 6 L 250 mL of water.",
      },
      commonMistakes: [
        "Forgetting that 1,000 mL = 1 L.",
        "Choosing litres for very tiny amounts or millilitres for very large containers.",
        "Adding litres and millilitres without regrouping.",
        "Confusing capacity with length or mass units.",
      ],
      tryThis: {
        question: "Change 1.5 L to millilitres.",
        choices: ["150 mL", "1,500 mL", "15 mL", "15,000 mL"],
        correct: 1,
        explanation: "1 L = 1,000 mL, so 1.5 L = 1.5 × 1,000 = 1,500 mL.",
      },
      recap: [
        "Capacity measures how much liquid a container can hold.",
        "1,000 mL = 1 L.",
        "Multiply to change litres to millilitres.",
        "Divide to change millilitres to litres.",
      ],
    },
    quiz: [
      { q: "How many millilitres are in 2 L?", choices: ["200 mL", "2,000 mL", "20 mL", "200,000 mL"], correct: 1, why: "1 L = 1,000 mL, so 2 L = 2,000 mL." },
      { q: "Which unit is best for measuring a teaspoon of cough syrup?", choices: ["L", "mL", "kg", "km"], correct: 1, why: "A teaspoon holds a small amount, so millilitres are the suitable unit." },
      { q: "Change 750 mL to litres.", choices: ["7.5 L", "0.75 L", "75 L", "750 L"], correct: 1, why: "750 ÷ 1,000 = 0.75 L." },
      { q: "A jerrycan holds 5 L of water. How many millilitres is that?", choices: ["500 mL", "5,000 mL", "50,000 mL", "500,000 mL"], correct: 1, why: "5 × 1,000 = 5,000 mL." },
      { q: "A bottle contains 1 L 250 mL of juice. What is this in millilitres?", choices: ["1,025 mL", "1,250 mL", "125 mL", "12,500 mL"], correct: 1, why: "1 L = 1,000 mL, so 1 L 250 mL = 1,250 mL." },
      { q: "Which is greater?", choices: ["900 mL", "1 L", "They are equal", "Cannot tell"], correct: 1, why: "1 L = 1,000 mL, and 1,000 mL is greater than 900 mL." },
      { q: "A container holds 3 L and another holds 2 L. What is the total capacity?", choices: ["5 L", "6 L", "1 L", "5 mL"], correct: 0, why: "3 L + 2 L = 5 L." },
    ],
  },
  {
    id: "numbers-up-to-99-999-999",
    themeId: "theme-2-numeracy",
    themeName: "Numeracy · Whole Numbers",
    title: "Numbers up to 99,999,999",
    estMinutes: 15,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro:
        "Why this matters: Large whole numbers appear in population, money, distances, school enrolment, national statistics, and word problems. Learners need to read them, write them, compare them, and understand their place value correctly.",
      learningObjectives: [
        "Read and write whole numbers up to 99,999,999.",
        "Identify place value and face value of digits in large numbers.",
        "Expand large numbers according to place value.",
        "Compare and order large whole numbers.",
      ],
      whatYouNeedToKnow: [
        "A whole number up to 99,999,999 can have up to eight digits. To read large numbers easily, group the digits into periods of three from the right. For example, 24,567,891 is read as twenty-four million, five hundred and sixty-seven thousand, eight hundred and ninety-one.",
        "Place value tells the value of a digit because of its position in the number. In 24,567,891, the digit 2 stands for 20,000,000 while the digit 4 stands for 4,000,000.",
        "Face value is the digit itself, no matter where it is. So in the same number, the face value of 2 is just 2.",
        "Expanded form shows the value of each digit added together. For example, 5,406 can be written as 5,000 + 400 + 6.",
        "To compare large numbers, first compare the number of digits. If two numbers have the same number of digits, compare them from left to right, digit by digit.",
        "Commas help us read large numbers correctly, but they do not change the value of the number. They only separate periods such as millions, thousands, and ones.",
      ],
      worked: {
        problem:
          "Write 47,305,218 in words and in expanded form.",
        steps: [
          "Step 1. Group the number into periods: 47 | 305 | 218.",
          "Step 2. Read each group in order: 47 million, 305 thousand, 218.",
          "Step 3. So the number in words is forty-seven million, three hundred and five thousand, two hundred and eighteen.",
          "Step 4. Write the expanded form using place values: 40,000,000 + 7,000,000 + 300,000 + 5,000 + 200 + 10 + 8.",
        ],
        answer: "Answer: 47,305,218 = forty-seven million, three hundred and five thousand, two hundred and eighteen = 40,000,000 + 7,000,000 + 300,000 + 5,000 + 200 + 10 + 8.",
      },
      commonMistakes: [
        "Reading the commas wrongly and mixing up thousands with millions.",
        "Confusing face value with place value.",
        "Leaving out zero-value places when writing expanded form mentally.",
        "Comparing large numbers only by looking at the last digit instead of starting from the left.",
      ],
      tryThis: {
        question: "What is the place value of 6 in 63,482,105?",
        choices: ["6", "60", "600,000", "60,000,000"],
        correct: 3,
        explanation: "The 6 is in the ten-millions place, so its value is 60,000,000.",
      },
      recap: [
        "Use commas to separate millions, thousands, and ones.",
        "Place value depends on position.",
        "Face value is the digit itself.",
        "Compare large numbers from left to right.",
      ],
    },
    quiz: [
      { q: "Which number is read as 'twelve million, four hundred and six thousand, nineteen'?", choices: ["12,406,019", "12,046,019", "1,240,6019", "12,460,019"], correct: 0, why: "Twelve million = 12,000,000; four hundred and six thousand = 406,000; nineteen = 19. Total = 12,406,019." },
      { q: "What is the place value of 5 in 25,731,804?", choices: ["5", "50,000", "5,000,000", "500,000"], correct: 2, why: "In 25,731,804, the digit 5 is in the millions place, so its value is 5,000,000." },
      { q: "What is the face value of 8 in 48,203,761?", choices: ["8", "80", "800,000", "8,000,000"], correct: 0, why: "Face value is the digit itself, so the face value of 8 is 8." },
      { q: "Write 7,020,304 in expanded form.", choices: ["7,000,000 + 20,000 + 300 + 4", "7,000,000 + 200,000 + 30 + 4", "7,000,000 + 2,000 + 300 + 4", "70,000,000 + 20,000 + 300 + 4"], correct: 0, why: "7,020,304 = 7,000,000 + 20,000 + 300 + 4." },
      { q: "Which number is greater?", choices: ["34,999,999", "35,000,001", "They are equal", "Cannot tell"], correct: 1, why: "35,000,001 is greater because 35 million is greater than 34 million." },
      { q: "Arrange these numbers from smallest to largest: 8,901,220; 8,910,202; 8,901,022.", choices: ["8,901,022; 8,901,220; 8,910,202", "8,910,202; 8,901,220; 8,901,022", "8,901,220; 8,901,022; 8,910,202", "8,901,022; 8,910,202; 8,901,220"], correct: 0, why: "Compare from left to right. Among the first two close numbers, 8,901,022 is smaller than 8,901,220. Both are smaller than 8,910,202." },
      { q: "How is 40,050,006 written in words?", choices: ["Forty million, fifty thousand and six", "Four million, fifty thousand and six", "Forty million, five thousand and six", "Forty million, five hundred and six"], correct: 0, why: "40,050,006 = forty million, fifty thousand and six." },
    ],
  },
  {
    id: "line-segments-angles",
    themeId: "theme-4-geometry",
    themeName: "Geometry · Construction",
    title: "Line segments and angles",
    estMinutes: 15,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro:
        "Why this matters: Line segments and angles are basic ideas in geometry. Learners need them for drawing, measuring, naming shapes, and understanding many later topics such as polygons, bearings, and construction.",
      learningObjectives: [
        "Explain what a line segment is.",
        "Identify and name common types of angles.",
        "Measure and compare angles.",
        "Use angle facts in simple geometry questions.",
      ],
      whatYouNeedToKnow: [
        "A line segment is a part of a line with two endpoints. Unlike a full line, it has a fixed length.",
        "An angle is formed when two lines or line segments meet at a point. That meeting point is called the vertex.",
        "Common angles include acute angles, which are less than 90°, right angles, which are exactly 90°, obtuse angles, which are greater than 90° but less than 180°, straight angles, which are 180°, and reflex angles, which are greater than 180° but less than 360°.",
        "Angles are measured in degrees. A right angle is one of the most important reference angles because many other angles are compared with it.",
        "Two equal right angles make a straight angle of 180°. Four right angles make a full turn of 360°.",
        "When reading geometry questions, first identify the type of angle or the relationship between the lines before calculating.",
      ],
      worked: {
        problem:
          "An angle measures 125°. What kind of angle is it?",
        steps: [
          "Step 1. Compare 125° with 90° and 180°.",
          "Step 2. 125° is greater than 90° but less than 180°.",
          "Step 3. An angle between 90° and 180° is an obtuse angle.",
        ],
        answer: "Answer: 125° is an obtuse angle.",
      },
      commonMistakes: [
        "Calling any large angle a reflex angle without checking whether it is above 180°.",
        "Confusing a line with a line segment.",
        "Forgetting that a right angle is exactly 90°.",
        "Looking only at the length of the lines instead of the opening between them when judging an angle.",
      ],
      tryThis: {
        question: "Which of these is an acute angle?",
        choices: ["45°", "90°", "120°", "180°"],
        correct: 0,
        explanation: "An acute angle is less than 90°. 45° is less than 90°, so it is acute.",
      },
      recap: [
        "A line segment has two endpoints.",
        "A right angle is 90°.",
        "Acute angles are less than 90° and obtuse angles are between 90° and 180°.",
        "A straight angle is 180° and a full turn is 360°.",
      ],
    },
    quiz: [
      { q: "What is a line segment?", choices: ["A line with one endpoint", "A part of a line with two endpoints", "A curved line", "A shape with four sides"], correct: 1, why: "A line segment is a fixed part of a line with two endpoints." },
      { q: "Which angle is a right angle?", choices: ["45°", "90°", "120°", "180°"], correct: 1, why: "A right angle measures exactly 90°." },
      { q: "Which angle is obtuse?", choices: ["60°", "85°", "135°", "45°"], correct: 2, why: "135° is greater than 90° but less than 180°, so it is obtuse." },
      { q: "How many degrees are in a straight angle?", choices: ["90°", "180°", "270°", "360°"], correct: 1, why: "A straight angle measures 180°." },
      { q: "Which angle is reflex?", choices: ["75°", "150°", "220°", "180°"], correct: 2, why: "A reflex angle is greater than 180° but less than 360°. 220° fits this rule." },
      { q: "What is the total of two right angles?", choices: ["90°", "180°", "270°", "360°"], correct: 1, why: "A right angle is 90°, so two right angles make 180°." },
      { q: "Which statement is true?", choices: ["A right angle is smaller than an acute angle", "An obtuse angle is less than 90°", "A straight angle is 180°", "A reflex angle is less than 180°"], correct: 2, why: "A straight angle is exactly 180°. The other statements are false." },
    ],
  },
  {
    id: "simple-polygons",
    themeId: "theme-4-geometry",
    themeName: "Geometry · Construction",
    title: "Simple polygons",
    estMinutes: 14,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro:
        "Why this matters: Simple polygons are common shapes in geometry. Learners need to recognise them, name them, count their sides and angles, and connect them to perimeter, area, and construction work.",
      learningObjectives: [
        "Explain what a polygon is.",
        "Identify common simple polygons.",
        "Count sides and angles correctly.",
        "Distinguish regular and irregular polygons.",
      ],
      whatYouNeedToKnow: [
        "A polygon is a closed plane shape made up of straight line segments only. The sides meet end to end, and the shape has no gaps.",
        "A triangle has 3 sides, a quadrilateral has 4 sides, a pentagon has 5 sides, a hexagon has 6 sides, an octagon has 8 sides, and so on.",
        "A simple polygon does not cross over itself. Its sides meet only at their endpoints.",
        "A regular polygon has all sides equal and all angles equal. An irregular polygon does not have all sides and angles equal.",
        "A circle is not a polygon because it has no straight sides. A shape with an open side is also not a polygon because a polygon must be closed.",
        "When classifying polygons, first count the sides. Then check whether the sides and angles are equal if the question asks whether the polygon is regular or irregular.",
      ],
      worked: {
        problem:
          "A closed shape has 5 straight sides. What is its name? If all its sides are equal, what kind of polygon is it?",
        steps: [
          "Step 1. Count the sides. There are 5 sides.",
          "Step 2. A polygon with 5 sides is called a pentagon.",
          "Step 3. If all the sides are equal, then it is a regular pentagon.",
        ],
        answer: "Answer: It is a pentagon, and if all the sides are equal, it is a regular pentagon.",
      },
      commonMistakes: [
        "Calling a circle a polygon.",
        "Forgetting that a polygon must be closed.",
        "Mixing up the names of polygons after counting the sides.",
        "Thinking every pentagon or hexagon must be regular.",
      ],
      tryThis: {
        question: "Which of these shapes is a quadrilateral?",
        choices: ["Triangle", "Pentagon", "Shape with 4 sides", "Hexagon"],
        correct: 2,
        explanation: "A quadrilateral is any polygon with 4 sides.",
      },
      recap: [
        "A polygon is a closed shape made of straight line segments.",
        "Count the sides to name the polygon.",
        "Regular polygons have equal sides and equal angles.",
        "Circles are not polygons.",
      ],
    },
    quiz: [
      { q: "What is a polygon?", choices: ["A curved shape", "A closed shape with straight sides", "Any round shape", "A line segment"], correct: 1, why: "A polygon is a closed shape made from straight line segments." },
      { q: "How many sides does a pentagon have?", choices: ["4", "5", "6", "8"], correct: 1, why: "A pentagon has 5 sides." },
      { q: "Which shape is not a polygon?", choices: ["Triangle", "Square", "Circle", "Hexagon"], correct: 2, why: "A circle has no straight sides, so it is not a polygon." },
      { q: "A polygon with 6 sides is called a:", choices: ["Pentagon", "Hexagon", "Octagon", "Quadrilateral"], correct: 1, why: "A polygon with 6 sides is a hexagon." },
      { q: "Which statement is true about a regular polygon?", choices: ["Only the sides are equal", "Only the angles are equal", "Sides and angles are equal", "It must have 4 sides"], correct: 2, why: "A regular polygon has all sides equal and all angles equal." },
      { q: "How many sides does an octagon have?", choices: ["6", "7", "8", "10"], correct: 2, why: "An octagon has 8 sides." },
      { q: "A shape has 4 straight sides and is closed. Which family does it belong to?", choices: ["Triangle", "Quadrilateral", "Pentagon", "Hexagon"], correct: 1, why: "Any closed polygon with 4 sides is a quadrilateral." },
    ],
  },
  {
    id: "coordinates",
    themeId: "theme-3-data",
    themeName: "Interpretation of Graphs and Data",
    title: "Coordinates (ordered pairs)",
    estMinutes: 14,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro:
        "Why this matters: Coordinates help learners show position on a grid. They are useful in maps, graphs, geometry, and later mathematics where location matters.",
      learningObjectives: [
        "Identify the horizontal and vertical axes on a grid.",
        "Read coordinates as ordered pairs.",
        "Plot simple points on a coordinate grid.",
        "Describe the position of a point correctly.",
      ],
      whatYouNeedToKnow: [
        "Coordinates tell the position of a point on a grid. A coordinate is usually written as an ordered pair, such as (3, 5).",
        "The first number tells how far to move along the horizontal axis. The second number tells how far to move up the vertical axis.",
        "The horizontal axis is often called the x-axis, and the vertical axis is often called the y-axis. At this level, what matters most is moving in the correct order: across first, then up.",
        "The point where the two axes meet is called the origin. Its coordinate is (0, 0).",
        "If you change the order of the numbers, you usually get a different point. For example, (2, 5) is not the same as (5, 2).",
        "When plotting points, read carefully and move step by step. Across first, then up. This simple habit prevents many coordinate mistakes.",
      ],
      worked: {
        problem:
          "Plot the point (4, 2) on a coordinate grid and explain how you found it.",
        steps: [
          "Step 1. Start at the origin, which is (0, 0).",
          "Step 2. Move 4 units across along the horizontal axis.",
          "Step 3. Move 2 units up along the vertical axis.",
          "Step 4. Mark the point where you arrive.",
        ],
        answer: "Answer: The point (4, 2) is found by moving 4 units across and 2 units up from the origin.",
      },
      commonMistakes: [
        "Reading the pair in the wrong order.",
        "Moving up before moving across.",
        "Forgetting that the origin is (0, 0).",
        "Marking the point on a line instead of at the exact crossing of two grid lines.",
      ],
      tryThis: {
        question: "Which point means 3 units across and 1 unit up?",
        choices: ["(1, 3)", "(3, 1)", "(0, 3)", "(3, 0)"],
        correct: 1,
        explanation: "Coordinates are read across first, then up. So 3 across and 1 up is (3, 1).",
      },
      recap: [
        "Coordinates are written as ordered pairs.",
        "Read across first, then up.",
        "The origin is (0, 0).",
        "Changing the order changes the point.",
      ],
    },
    quiz: [
      { q: "What is the coordinate of the origin?", choices: ["(1, 1)", "(0, 1)", "(1, 0)", "(0, 0)"], correct: 3, why: "The origin is the point where the axes meet, and it is written as (0, 0)." },
      { q: "In the point (5, 2), which number tells how far to move across?", choices: ["5", "2", "Both", "Neither"], correct: 0, why: "The first number in an ordered pair tells how far to move across." },
      { q: "Which point means 2 across and 4 up?", choices: ["(4, 2)", "(2, 4)", "(2, 2)", "(4, 4)"], correct: 1, why: "Coordinates are read across first, then up. So 2 across and 4 up is (2, 4)." },
      { q: "Which statement is true?", choices: ["(3, 5) and (5, 3) are always the same point", "The second number shows movement across", "The first number shows movement across", "The origin is (1, 1)"], correct: 2, why: "The first number in a coordinate pair shows movement across the horizontal axis." },
      { q: "A point is 0 across and 6 up. What is its coordinate?", choices: ["(6, 0)", "(0, 6)", "(6, 6)", "(0, 0)"], correct: 1, why: "0 across and 6 up is written as (0, 6)." },
      { q: "What should you do first when plotting (4, 3)?", choices: ["Move 3 units up", "Move 4 units across", "Write the answer in words", "Draw a circle"], correct: 1, why: "When plotting coordinates, move across first, then up." },
      { q: "Which pair is different from (2, 5)?", choices: ["(2, 5)", "(5, 2)", "Both are the same", "Neither can be plotted"], correct: 1, why: "Changing the order changes the point, so (5, 2) is different from (2, 5)." },
    ],
  },
  {
    id: "parallel-skew-lines",
    themeId: "theme-4-geometry",
    themeName: "Geometry · Construction",
    title: "Parallel and skew lines",
    estMinutes: 13,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro:
        "Why this matters: Learners need to recognise how lines are related in space and on flat surfaces. Parallel and skew lines appear in diagrams, construction work, solids, and everyday objects such as desks, windows, boxes, and buildings.",
      learningObjectives: [
        "Explain what parallel lines are.",
        "Explain what skew lines are.",
        "Distinguish parallel lines from intersecting lines.",
        "Identify examples of these line relationships in shapes and objects.",
      ],
      whatYouNeedToKnow: [
        "Parallel lines are lines that are always the same distance apart and never meet, even if they are extended. They lie in the same plane.",
        "Intersecting lines are lines that meet at a point. If they meet at 90°, they are called perpendicular lines.",
        "Skew lines are lines that do not meet and are not parallel because they do not lie in the same plane. This idea is often seen in three-dimensional objects such as boxes and cuboids.",
        "On a flat drawing, learners usually identify parallel and intersecting lines first. Skew lines are easier to understand when you imagine a solid object, such as opposite edges of a box that do not meet and do not run in the same direction.",
        "When answering questions, first ask: do the lines meet? If yes, they are intersecting. If no, ask whether they stay the same distance apart in the same plane. If yes, they are parallel. If not, and they are in different planes of a solid, they are skew lines.",
        "Real-life examples help. Railway lines are often used to show parallel lines. The front top edge of a box and the back side edge of the same box can help show skew lines.",
      ],
      worked: {
        problem:
          "A cuboid has one line along the front top edge and another line along the back right vertical edge. Are these lines parallel, intersecting, or skew?",
        steps: [
          "Step 1. Check whether the lines meet. They do not meet.",
          "Step 2. Check whether they run in the same plane and stay the same distance apart. They do not.",
          "Step 3. Since they do not meet and are not parallel in the same plane, they are skew lines.",
        ],
        answer: "Answer: The two lines are skew lines.",
      },
      commonMistakes: [
        "Calling all non-meeting lines parallel without checking whether they lie in the same plane.",
        "Confusing skew lines with perpendicular lines.",
        "Forgetting that parallel lines never meet and stay the same distance apart.",
        "Trying to identify skew lines only on flat 2D thinking instead of imagining a solid object.",
      ],
      tryThis: {
        question: "What is true about parallel lines?",
        choices: ["They always meet", "They cross at right angles", "They never meet and stay the same distance apart", "They only appear in circles"],
        correct: 2,
        explanation: "Parallel lines never meet and remain the same distance apart all the way.",
      },
      recap: [
        "Parallel lines never meet and stay the same distance apart.",
        "Intersecting lines meet at a point.",
        "Skew lines do not meet and are not in the same plane.",
        "Solid objects help us understand skew lines better.",
      ],
    },
    quiz: [
      { q: "Which statement describes parallel lines?", choices: ["They always meet", "They are the same distance apart and never meet", "They only meet at 90°", "They are curved"], correct: 1, why: "Parallel lines never meet and remain the same distance apart." },
      { q: "What do intersecting lines do?", choices: ["They stay apart forever", "They meet at a point", "They only appear on cubes", "They are always skew"], correct: 1, why: "Intersecting lines meet at one point." },
      { q: "Which pair can be skew lines?", choices: ["Two railway tracks on the same ground", "Two sides of a square", "Two non-meeting edges of a box in different planes", "Two lines that cross"], correct: 2, why: "Skew lines appear in three-dimensional objects and do not lie in the same plane." },
      { q: "If two lines meet at 90°, they are:", choices: ["parallel", "skew", "perpendicular", "curved"], correct: 2, why: "Lines meeting at 90° are perpendicular." },
      { q: "Which of these is a real-life example of parallel lines?", choices: ["Scissors when open", "Railway tracks", "The hands of a clock", "A corner of a table"], correct: 1, why: "Railway tracks are commonly used as an example of parallel lines." },
      { q: "Why are skew lines not parallel?", choices: ["Because they meet", "Because they are curved", "Because they are not in the same plane", "Because they are too short"], correct: 2, why: "Skew lines are not in the same plane, so they cannot be parallel." },
      { q: "Which is true about skew lines?", choices: ["They always meet", "They are in the same plane", "They do not meet and are not parallel", "They are always perpendicular"], correct: 2, why: "Skew lines do not meet, and they are not parallel because they are not in the same plane." },
    ],
  },
  {
    id: "bearing-scale-drawing",
    themeId: "theme-4-geometry",
    themeName: "Geometry · Construction",
    title: "Bearing and scale drawing",
    estMinutes: 16,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro:
        "Why this matters: Bearing and scale drawing help learners describe direction and represent real distances using smaller drawings. These ideas are useful in maps, journeys, plans, and practical geometry.",
      learningObjectives: [
        "Explain the meaning of a bearing.",
        "Read and write simple three-figure bearings.",
        "Explain what a scale means on a map or drawing.",
        "Use a simple scale to find real distance or drawing distance.",
      ],
      whatYouNeedToKnow: [
        "A bearing shows direction. It is usually measured clockwise from north.",
        "At primary level, bearings are often written as three-figure bearings, such as 045°, 090°, 180°, or 270°. Three figures are used so that every bearing has the same form.",
        "For example, east is 090°, south is 180°, west is 270°, and north is 000° or 360° depending on the context.",
        "A scale drawing represents a real object or distance using a smaller size. For example, a scale of 1 cm to 5 km means every 1 cm on the drawing stands for 5 km in real life.",
        "To find real distance from a scale, multiply the drawing distance by the real amount represented by one unit on the scale. To find drawing distance, divide the real distance by the scale value.",
        "Always check the units carefully. A scale may use centimetres, metres, or kilometres, and many mistakes come from ignoring unit conversion.",
      ],
      worked: {
        problem:
          "On a map, 1 cm represents 4 km. Two towns are 6 cm apart on the map. What is the real distance between the towns?",
        steps: [
          "Step 1. Read the scale carefully: 1 cm stands for 4 km.",
          "Step 2. The map distance is 6 cm.",
          "Step 3. Multiply 6 by 4 because each centimetre stands for 4 km.",
          "Step 4. 6 × 4 = 24.",
        ],
        answer: "Answer: The real distance is 24 km.",
      },
      commonMistakes: [
        "Measuring bearing from the wrong direction instead of starting from north.",
        "Writing two-figure numbers instead of three-figure bearings when the question expects three-figure form.",
        "Dividing when you should multiply in a scale question.",
        "Ignoring unit conversion in scale problems.",
      ],
      tryThis: {
        question: "What is the three-figure bearing for east?",
        choices: ["90°", "009°", "090°", "900°"],
        correct: 2,
        explanation: "East is written as 090° in three-figure bearing form.",
      },
      recap: [
        "Bearings are measured clockwise from north.",
        "Three-figure bearings use three digits.",
        "A scale shows the relationship between a drawing and the real object or distance.",
        "Multiply or divide carefully according to what the question asks.",
      ],
    },
    quiz: [
      { q: "From which direction are bearings measured?", choices: ["South", "East", "North", "West"], correct: 2, why: "Bearings are measured clockwise from north." },
      { q: "What is the three-figure bearing for south?", choices: ["018°", "180°", "801°", "090°"], correct: 1, why: "South is 180° when measured clockwise from north." },
      { q: "What is the three-figure bearing for west?", choices: ["270°", "207°", "090°", "360°"], correct: 0, why: "West is 270° in three-figure bearing form." },
      { q: "A map scale is 1 cm to 3 km. What real distance does 5 cm represent?", choices: ["8 km", "15 km", "53 km", "2 km"], correct: 1, why: "If 1 cm represents 3 km, then 5 cm represents 5 × 3 = 15 km." },
      { q: "A real road is 20 km long. On a map scale of 1 cm to 5 km, how long should it be on the map?", choices: ["4 cm", "5 cm", "15 cm", "25 cm"], correct: 0, why: "20 km ÷ 5 km per cm = 4 cm." },
      { q: "Why are bearings often written with three figures?", choices: ["To make them look longer", "To keep all bearings in the same standard form", "To avoid using degrees", "To show distance"], correct: 1, why: "Three-figure bearings keep the form consistent, such as 045°, 090°, and 180°." },
      { q: "Which statement about scale is correct?", choices: ["It only works with angles", "It compares a drawing to the real object or distance", "It is the same as perimeter", "It is used only in algebra"], correct: 1, why: "A scale compares the size or distance on a drawing with the real size or distance." },
    ],
  },
  {
    id: "subsets",
    themeId: "theme-1-sets",
    themeName: "Sets",
    title: "Subsets",
    estMinutes: 13,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro:
        "Why this matters: Subsets help learners understand how one group can belong completely inside another group. This idea connects directly to Venn diagrams, classification, and later probability language.",
      learningObjectives: [
        "Explain what a subset is.",
        "Identify whether one set is a subset of another.",
        "Use simple examples of subsets from daily life.",
        "Show subsets clearly in a Venn diagram or set statement.",
      ],
      whatYouNeedToKnow: [
        "A set is a collection of objects, numbers, or things grouped together clearly.",
        "A subset is a set whose members are all found in another set. If every element of set A is also in set B, then A is a subset of B.",
        "For example, if A = {2, 4} and B = {2, 4, 6, 8}, then A is a subset of B because every member of A is in B.",
        "If even one member of the first set is missing from the second set, then it is not a subset.",
        "A set is also a subset of itself because every member of the set belongs to that set.",
        "In Venn diagrams, a subset is often shown by drawing one smaller circle completely inside a bigger circle.",
      ],
      worked: {
        problem:
          "Let A = {1, 3, 5} and B = {1, 2, 3, 4, 5, 6}. Is A a subset of B?",
        steps: [
          "Step 1. List the members of A: 1, 3, 5.",
          "Step 2. Check whether each of these numbers is also in B.",
          "Step 3. Since 1, 3, and 5 are all in B, every member of A belongs to B.",
        ],
        answer: "Answer: Yes, A is a subset of B.",
      },
      commonMistakes: [
        "Checking only one or two members instead of all members of the smaller set.",
        "Thinking a subset must be smaller in size every time, forgetting that a set is also a subset of itself.",
        "Mixing up subset ideas with overlapping sets that are not fully contained.",
        "Using Venn circles that overlap only partly instead of putting one fully inside the other.",
      ],
      tryThis: {
        question: "If P = {a, e} and Q = {a, b, c, d, e}, which statement is true?",
        choices: ["P is a subset of Q", "Q is a subset of P", "P and Q are equal", "P is not related to Q"],
        correct: 0,
        explanation: "Every member of P appears in Q, so P is a subset of Q.",
      },
      recap: [
        "A subset has all its members inside another set.",
        "Check every member carefully.",
        "A set is a subset of itself.",
        "In a Venn diagram, a subset can be drawn fully inside another set.",
      ],
    },
    quiz: [
      { q: "What is a subset?", choices: ["A set with no members", "A set whose members are all in another set", "A very large set", "A set with only numbers"], correct: 1, why: "A subset is a set whose members are all contained in another set." },
      { q: "If A = {2, 4} and B = {2, 4, 6}, which is true?", choices: ["A is a subset of B", "B is a subset of A", "A and B are equal", "A is not related to B"], correct: 0, why: "All members of A are found in B, so A is a subset of B." },
      { q: "Which statement is true about a set and itself?", choices: ["A set cannot be a subset of itself", "A set is always a subset of itself", "Only number sets can be subsets", "Only empty sets are subsets"], correct: 1, why: "Every member of a set belongs to that same set, so it is a subset of itself." },
      { q: "If C = {1, 5} and D = {1, 3, 4, 5}, is C a subset of D?", choices: ["Yes", "No", "Only if D gets bigger", "Cannot tell"], correct: 0, why: "Both 1 and 5 are in D, so C is a subset of D." },
      { q: "Which Venn diagram best shows a subset?", choices: ["Two separate circles", "Two overlapping circles partly", "One circle completely inside another", "A triangle inside a square"], correct: 2, why: "A subset is shown by one set being completely inside another." },
      { q: "If one member of set X is missing from set Y, then X is:", choices: ["a subset of Y", "not a subset of Y", "equal to Y", "always larger than Y"], correct: 1, why: "For X to be a subset of Y, every member of X must be in Y." },
      { q: "If M = {red, blue} and N = {red, blue, green}, which is correct?", choices: ["M is a subset of N", "N is a subset of M", "M and N are equal", "Neither set has members"], correct: 0, why: "All members of M are contained in N, so M is a subset of N." },
    ],
  },
  {
    id: "finite-infinite-sets",
    themeId: "theme-1-sets",
    themeName: "Sets",
    title: "Finite and infinite sets",
    estMinutes: 13,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro:
        "Why this matters: Learners need to know whether a set has a limited number of members or goes on without end. This helps them describe sets correctly and reason clearly in later set work.",
      learningObjectives: [
        "Explain the difference between finite and infinite sets.",
        "Identify examples of finite sets.",
        "Identify examples of infinite sets.",
        "Classify a set correctly as finite or infinite.",
      ],
      whatYouNeedToKnow: [
        "A finite set has a limited number of elements. You can count all its members and finish.",
        "An infinite set has no end. Its members continue without stopping.",
        "For example, the set of days of the week is finite because there are only seven days. The set of whole numbers is infinite because the numbers continue forever.",
        "A class register is an example of a finite set because the pupils can be counted. The set of counting numbers 1, 2, 3, 4, ... is infinite because it keeps going.",
        "When deciding whether a set is finite or infinite, ask whether the members come to an end or continue forever.",
        "Do not confuse a very large set with an infinite set. A set can be large and still be finite if it has an end.",
      ],
      worked: {
        problem:
          "Classify these sets as finite or infinite: (a) months of the year, (b) natural numbers.",
        steps: [
          "Step 1. The months of the year can be counted from January to December. There are 12 months, so this set is finite.",
          "Step 2. The natural numbers continue as 1, 2, 3, 4, 5, ... with no end.",
          "Step 3. So the set of natural numbers is infinite.",
        ],
        answer: "Answer: Months of the year form a finite set, while natural numbers form an infinite set.",
      },
      commonMistakes: [
        "Calling a very large set infinite just because it has many members.",
        "Forgetting that an infinite set has no end at all.",
        "Using examples that are not clearly defined as sets.",
        "Thinking that anything difficult to count must be infinite.",
      ],
      tryThis: {
        question: "Which of these is an infinite set?",
        choices: ["Pupils in a class", "Months of the year", "Whole numbers", "Books on a desk"],
        correct: 2,
        explanation: "Whole numbers continue without end, so they form an infinite set.",
      },
      recap: [
        "Finite sets have an end.",
        "Infinite sets continue without end.",
        "Large does not always mean infinite.",
        "Ask whether all the members can be counted completely.",
      ],
    },
    quiz: [
      { q: "What is a finite set?", choices: ["A set with no order", "A set with a limited number of members", "A set that never ends", "A set with only numbers"], correct: 1, why: "A finite set has a limited number of members that can be counted completely." },
      { q: "Which of these is an infinite set?", choices: ["Days of the week", "Letters in the word SCHOOL", "Whole numbers", "Months of the year"], correct: 2, why: "Whole numbers continue without end, so they form an infinite set." },
      { q: "Which of these is a finite set?", choices: ["Natural numbers", "Stars in the sky as a mathematical idea of endless counting", "Pupils in P7 Blue", "Counting numbers forever"], correct: 2, why: "A class of pupils can be counted and has an end, so it is finite." },
      { q: "Why are months of the year a finite set?", choices: ["Because they are hard to spell", "Because there are exactly 12 of them", "Because they are numbers", "Because they go on forever"], correct: 1, why: "There are only 12 months, so the set has a fixed end." },
      { q: "Which statement is true?", choices: ["All large sets are infinite", "Infinite sets have no end", "Finite sets cannot contain numbers", "Only school objects make sets"], correct: 1, why: "An infinite set has no end, while a finite set does." },
      { q: "The set {2, 4, 6, 8} is:", choices: ["infinite", "finite", "not a set", "a subset only"], correct: 1, why: "This set has only four members, so it is finite." },
      { q: "Which is the best reason why counting numbers form an infinite set?", choices: ["They are difficult", "They continue forever", "They are all even", "They are too big to write"], correct: 1, why: "Counting numbers continue without end, so the set is infinite." },
    ],
  },
  {
    id: "probability-intro",
    themeId: "theme-1-sets",
    themeName: "Sets",
    title: "Probability (introduction)",
    estMinutes: 14,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro:
        "Why this matters: Probability helps learners describe how likely an event is to happen. It connects naturally with sets, counting, and everyday prediction, such as weather, games, and choosing objects.",
      learningObjectives: [
        "Explain probability in simple language.",
        "Use words such as impossible, unlikely, likely, and certain correctly.",
        "Find simple probability as favourable outcomes over total outcomes.",
        "Use probability ideas in everyday examples.",
      ],
      whatYouNeedToKnow: [
        "Probability tells how likely something is to happen.",
        "Some events are impossible, which means they cannot happen. Some are certain, which means they must happen. Between these are events that may be unlikely, even chance, or likely.",
        "When all outcomes are equally likely, simple probability can be found using: probability = favourable outcomes ÷ total outcomes.",
        "For example, if a bag has 5 red balls and 3 blue balls, the probability of picking a red ball is 5 out of 8, written as 5/8.",
        "A probability is usually between 0 and 1. A probability of 0 means impossible, and a probability of 1 means certain.",
        "At this level, learners should connect probability to clear situations such as coins, dice, coloured objects, and everyday events.",
      ],
      worked: {
        problem:
          "A box contains 4 green counters and 6 yellow counters. One counter is chosen at random. What is the probability of choosing a green counter?",
        steps: [
          "Step 1. Count the favourable outcomes. There are 4 green counters.",
          "Step 2. Count the total outcomes. There are 4 + 6 = 10 counters.",
          "Step 3. Probability = favourable outcomes ÷ total outcomes = 4/10.",
          "Step 4. Simplify if needed: 4/10 = 2/5.",
        ],
        answer: "Answer: The probability of choosing a green counter is 4/10 or 2/5.",
      },
      commonMistakes: [
        "Using only the favourable outcomes and forgetting to count the total outcomes.",
        "Mixing up impossible and unlikely.",
        "Adding the favourable outcomes twice when finding the total.",
        "Treating events as equally likely when the question does not support that.",
      ],
      tryThis: {
        question: "A fair die is thrown once. What is the probability of getting a 3?",
        choices: ["1/3", "1/6", "3/6", "1"],
        correct: 1,
        explanation: "A fair die has 6 equal outcomes, and only one of them is 3. So the probability is 1/6.",
      },
      recap: [
        "Probability tells how likely an event is.",
        "Impossible = 0 and certain = 1.",
        "Simple probability = favourable outcomes ÷ total outcomes.",
        "Count carefully before writing the fraction.",
      ],
    },
    quiz: [
      { q: "Which word means an event must happen?", choices: ["Impossible", "Likely", "Certain", "Unlikely"], correct: 2, why: "A certain event must happen." },
      { q: "Which word means an event cannot happen?", choices: ["Certain", "Likely", "Impossible", "Even chance"], correct: 2, why: "An impossible event cannot happen at all." },
      { q: "A fair coin is tossed once. What is the probability of getting heads?", choices: ["1/2", "1/3", "2/3", "1"], correct: 0, why: "A fair coin has 2 equal outcomes, and one of them is heads, so the probability is 1/2." },
      { q: "A bag has 3 red balls and 2 blue balls. What is the probability of picking a blue ball?", choices: ["2/5", "3/5", "1/2", "5/2"], correct: 0, why: "There are 2 blue balls out of 5 balls in total, so the probability is 2/5." },
      { q: "If an event has probability 0, it is:", choices: ["certain", "impossible", "likely", "even chance"], correct: 1, why: "Probability 0 means the event is impossible." },
      { q: "A fair die is rolled once. What is the probability of getting an even number?", choices: ["1/6", "2/6", "3/6", "4/6"], correct: 2, why: "The even numbers are 2, 4, and 6. That is 3 favourable outcomes out of 6, so the probability is 3/6." },
      { q: "Which probability is the same as a certain event?", choices: ["0", "1/2", "1", "1/6"], correct: 2, why: "A certain event has probability 1." },
    ],
  },
  {
    id: "inequalities",
    themeId: "theme-4-algebra",
    themeName: "Algebra",
    title: "Inequalities and solution sets",
    estMinutes: 15,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro:
        "Why this matters: Inequalities help learners compare quantities that are not equal. They connect naturally with integers, number lines, algebraic expressions, and equations, and they help learners describe ranges of values instead of one exact answer.",
      learningObjectives: [
        "Use the symbols <, >, ≤ and ≥ correctly.",
        "Explain the meaning of an inequality.",
        "Solve simple inequalities.",
        "Describe the solution set of a simple inequality.",
      ],
      whatYouNeedToKnow: [
        "An inequality shows that two quantities are not equal. Instead of using =, it uses signs such as > (greater than), < (less than), ≥ (greater than or equal to), and ≤ (less than or equal to).",
        "For example, x > 4 means x is any number greater than 4. The answer is not just one number. It is a group of possible values.",
        "An equation usually has one exact answer or a small fixed set of answers. An inequality often has many possible answers, called the solution set.",
        "When solving a simple inequality, the steps are like solving an equation: add, subtract, multiply, or divide carefully to isolate the letter.",
        "A number line is very useful for inequalities because it helps learners see which numbers are allowed in the solution set.",
        "When a question says 'at least', it often means greater than or equal to. When it says 'at most', it often means less than or equal to.",
      ],
      worked: {
        problem:
          "Solve the inequality x + 3 < 8.",
        steps: [
          "Step 1. Start with x + 3 < 8.",
          "Step 2. Subtract 3 from both sides.",
          "Step 3. x < 5.",
          "Step 4. This means any number less than 5 is part of the solution set.",
        ],
        answer: "Answer: x < 5.",
      },
      commonMistakes: [
        "Treating an inequality as if it has only one answer.",
        "Mixing up > and < signs.",
        "Forgetting that words such as 'at least' and 'at most' have special meanings.",
        "Writing one number instead of describing the full solution set.",
      ],
      tryThis: {
        question: "Which inequality means 'n is at least 7'?",
        choices: ["n > 7", "n < 7", "n ≥ 7", "n ≤ 7"],
        correct: 2,
        explanation: "'At least 7' means 7 or more, so the correct inequality is n ≥ 7.",
      },
      recap: [
        "Inequalities compare quantities that are not equal.",
        "> means greater than and < means less than.",
        "≥ means greater than or equal to, and ≤ means less than or equal to.",
        "An inequality often has many answers, called a solution set.",
      ],
    },
    quiz: [
      { q: "Which symbol means 'greater than'?", choices: ["<", ">", "=", "≤"], correct: 1, why: "> means greater than." },
      { q: "Which inequality means 'a is less than 9'?", choices: ["a > 9", "a < 9", "a ≥ 9", "a = 9"], correct: 1, why: "'Less than 9' is written as a < 9." },
      { q: "Solve: x + 2 > 6", choices: ["x > 8", "x > 4", "x < 4", "x = 4"], correct: 1, why: "Subtract 2 from both sides: x > 4." },
      { q: "Which inequality means 'm is at most 5'?", choices: ["m ≥ 5", "m > 5", "m ≤ 5", "m < 5 only"], correct: 2, why: "'At most 5' means 5 or less, so m ≤ 5." },
      { q: "Solve: y − 4 < 3", choices: ["y < 7", "y > 7", "y = 7", "y ≤ 7 only"], correct: 0, why: "Add 4 to both sides: y < 7." },
      { q: "Which of these is a solution to n > 10?", choices: ["8", "10", "11", "9"], correct: 2, why: "11 is greater than 10, so it satisfies n > 10." },
      { q: "What is a solution set?", choices: ["One exact answer only", "A group of values that make the inequality true", "A set with no numbers", "A type of equation"], correct: 1, why: "A solution set is the group of all values that make the inequality true." },
    ],
  },
  {
    id: "bases",
    themeId: "theme-2-numeracy",
    themeName: "Numeracy · Whole Numbers",
    title: "Bases (non-decimal number systems)",
    estMinutes: 15,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro:
        "Why this matters: Bases help learners understand that numbers can be written using different place-value systems, not only base ten. This topic strengthens place value and careful number reading.",
      learningObjectives: [
        "Explain the meaning of a base.",
        "Read and write simple numbers in small bases.",
        "Convert simple numbers between base ten and another base.",
        "Use place value correctly in non-decimal number systems.",
      ],
      whatYouNeedToKnow: [
        "The ordinary number system we use every day is base ten. It uses the digits 0 to 9.",
        "In another base, the value of each place still depends on position, but the grouping changes. For example, base five uses only the digits 0, 1, 2, 3, and 4.",
        "In base five, the places stand for ones, fives, twenty-fives, and so on. So 23 in base five means 2 fives and 3 ones.",
        "To change a number from another base to base ten, expand it using place value. For example, 23 base five = 2 × 5 + 3 = 13 in base ten.",
        "To change a base ten number into another base, divide repeatedly by the base and read the remainders in reverse order.",
        "A very important rule is that a base never uses a digit equal to or greater than the base itself. For example, the digit 7 cannot appear in base seven.",
      ],
      worked: {
        problem:
          "Change 24 in base five to a number in base ten.",
        steps: [
          "Step 1. Identify the place values in base five: the first digit shows fives and the second shows ones.",
          "Step 2. 24 in base five means 2 fives and 4 ones.",
          "Step 3. Calculate: 2 × 5 + 4 = 10 + 4 = 14.",
        ],
        answer: "Answer: 24 in base five is 14 in base ten.",
      },
      commonMistakes: [
        "Using a digit that is too large for the base.",
        "Forgetting that place value changes with the base.",
        "Reading a base number as if it were an ordinary base-ten number.",
        "Writing the remainders in the wrong order when converting from base ten to another base.",
      ],
      tryThis: {
        question: "What is 12 in base three as a base-ten number?",
        choices: ["5", "6", "3", "12"],
        correct: 0,
        explanation: "12 in base three means 1 three and 2 ones. So 1 × 3 + 2 = 5.",
      },
      recap: [
        "A base changes the place-value grouping system.",
        "Base ten uses digits 0 to 9.",
        "In base n, no digit can be equal to or bigger than n.",
        "Use place value carefully when converting.",
      ],
    },
    quiz: [
      { q: "Which digits are allowed in base five?", choices: ["0 to 5", "1 to 5", "0 to 4", "1 to 4"], correct: 2, why: "Base five uses the digits 0, 1, 2, 3, and 4 only." },
      { q: "What is 23 in base five as a base-ten number?", choices: ["10", "13", "23", "8"], correct: 1, why: "23 in base five = 2 × 5 + 3 = 13." },
      { q: "Which of these cannot be a number in base four?", choices: ["123", "302", "214", "33"], correct: 2, why: "Base four can only use 0, 1, 2, and 3. The digit 4 is not allowed." },
      { q: "What is 12 in base three in base ten?", choices: ["5", "6", "4", "12"], correct: 0, why: "12 in base three = 1 × 3 + 2 = 5." },
      { q: "What does 10 in base two mean in base ten?", choices: ["10", "1", "2", "0"], correct: 2, why: "10 in base two means 1 two and 0 ones, so it equals 2." },
      { q: "Why can't the digit 7 appear in base seven?", choices: ["Because it is too small", "Because a base uses digits smaller than the base", "Because 7 is even", "Because it must be written twice"], correct: 1, why: "In base seven, the allowed digits are 0 to 6 only." },
      { q: "What is 14 in base five as a base-ten number?", choices: ["9", "14", "7", "20"], correct: 0, why: "14 in base five = 1 × 5 + 4 = 9." },
    ],
  },
  {
    id: "number-patterns",
    themeId: "theme-2-numeracy",
    themeName: "Numeracy · Patterns",
    title: "Number patterns",
    estMinutes: 14,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro:
        "Why this matters: Number patterns help learners notice order and predict what comes next. This builds careful thinking in numeracy and prepares learners for algebraic reasoning.",
      learningObjectives: [
        "Identify simple number patterns.",
        "Find the rule used in a sequence.",
        "Continue a pattern correctly.",
        "Use number patterns to find missing terms.",
      ],
      whatYouNeedToKnow: [
        "A number pattern is a sequence of numbers that follows a rule.",
        "Some patterns increase by adding the same number each time. For example, 4, 7, 10, 13, ... increases by 3.",
        "Some patterns decrease by subtracting the same number each time. For example, 20, 18, 16, 14, ... decreases by 2.",
        "Other patterns may multiply or divide by the same number, or they may use alternating steps.",
        "To find the rule, compare one term with the next term carefully. Ask: what changed? Did we add, subtract, multiply, divide, or alternate between two steps?",
        "When solving missing-term questions, use the same rule all the way through the pattern and check whether it works for every pair of numbers.",
      ],
      worked: {
        problem:
          "Find the next two numbers in the pattern 6, 11, 16, 21, ...",
        steps: [
          "Step 1. Compare the numbers: 11 − 6 = 5, 16 − 11 = 5, and 21 − 16 = 5.",
          "Step 2. The rule is 'add 5 each time'.",
          "Step 3. Add 5 to 21 to get 26.",
          "Step 4. Add 5 again to get 31.",
        ],
        answer: "Answer: The next two numbers are 26 and 31.",
      },
      commonMistakes: [
        "Using a rule that works for only one step instead of the whole pattern.",
        "Missing an alternating pattern and forcing one single rule on it.",
        "Adding when the pattern is really multiplying, or subtracting when it is dividing.",
        "Rushing to the next term without first identifying the rule clearly.",
      ],
      tryThis: {
        question: "What is the missing number in 3, 6, 9, __, 15?",
        choices: ["10", "11", "12", "13"],
        correct: 2,
        explanation: "The pattern adds 3 each time: 3, 6, 9, 12, 15. So the missing number is 12.",
      },
      recap: [
        "A number pattern follows a rule.",
        "Find the rule before filling in missing terms.",
        "Check whether the rule works for the whole pattern.",
        "Patterns may add, subtract, multiply, divide, or alternate.",
      ],
    },
    quiz: [
      { q: "What is the next number in 5, 10, 15, 20, ...?", choices: ["22", "24", "25", "30"], correct: 2, why: "The pattern adds 5 each time, so the next number is 25." },
      { q: "What is the missing number in 18, 16, 14, __, 10?", choices: ["11", "12", "13", "15"], correct: 1, why: "The pattern subtracts 2 each time, so the missing number is 12." },
      { q: "Which rule fits the pattern 4, 8, 12, 16, ...?", choices: ["Add 2", "Multiply by 2 every time", "Add 4", "Subtract 4"], correct: 2, why: "Each number is 4 more than the one before, so the rule is add 4." },
      { q: "What comes next in 2, 4, 8, 16, ...?", choices: ["18", "20", "24", "32"], correct: 3, why: "Each number is doubled, so the next number is 32." },
      { q: "Find the missing number: 30, 25, 20, __, 10", choices: ["18", "17", "15", "12"], correct: 2, why: "The pattern subtracts 5 each time, so the missing number is 15." },
      { q: "What is the next number in 1, 3, 6, 10, ...?", choices: ["12", "14", "15", "16"], correct: 2, why: "The differences are +2, +3, +4, so the next step is +5. 10 + 5 = 15." },
      { q: "Why is it important to check the whole pattern before answering?", choices: ["Because one step may be misleading", "Because patterns always end", "Because the first number is always the answer", "Because all patterns are multiplication"], correct: 0, why: "You should check the whole pattern because one step alone may not show the full rule correctly." },
    ],
  },
  {
    id: "probability-of-numbers",
    themeId: "theme-1-sets",
    themeName: "Sets",
    title: "Probability of numbers and events",
    estMinutes: 15,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro:
        "Why this matters: After learning basic probability words, learners need to apply probability to numbers and simple events. This helps them reason clearly about chance in games, number cards, counters, and everyday situations.",
      learningObjectives: [
        "Find the probability of a simple event.",
        "Use favourable outcomes and total outcomes correctly.",
        "Find probabilities involving numbers and number cards.",
        "Compare which events are more likely or less likely.",
      ],
      whatYouNeedToKnow: [
        "Probability tells how likely an event is to happen.",
        "For simple events with equally likely outcomes, probability = favourable outcomes ÷ total outcomes.",
        "A favourable outcome is an outcome that matches what the question asks for. The total outcomes are all the possible results.",
        "For example, if one number card is chosen from the cards 1 to 10, the probability of choosing an even number depends on how many even numbers there are in that set.",
        "The probability of an impossible event is 0. The probability of a certain event is 1. Most ordinary events lie between 0 and 1.",
        "When comparing probabilities, the event with the larger probability is more likely to happen.",
      ],
      worked: {
        problem:
          "A card is chosen at random from the numbers 1 to 12. What is the probability of choosing a multiple of 3?",
        steps: [
          "Step 1. List the multiples of 3 from 1 to 12: 3, 6, 9, 12.",
          "Step 2. Count the favourable outcomes. There are 4.",
          "Step 3. Count the total outcomes. There are 12 cards in all.",
          "Step 4. Probability = 4/12.",
          "Step 5. Simplify if needed: 4/12 = 1/3.",
        ],
        answer: "Answer: The probability is 4/12 or 1/3.",
      },
      commonMistakes: [
        "Counting the favourable outcomes wrongly.",
        "Forgetting to count all possible outcomes.",
        "Mixing up even numbers, odd numbers, factors, or multiples in number-based probability questions.",
        "Comparing events without first writing their probabilities clearly.",
      ],
      tryThis: {
        question: "A number is picked from 1 to 8. What is the probability of picking an odd number?",
        choices: ["3/8", "4/8", "5/8", "1/8"],
        correct: 1,
        explanation: "The odd numbers from 1 to 8 are 1, 3, 5, and 7. That is 4 favourable outcomes out of 8 total outcomes, so the probability is 4/8.",
      },
      recap: [
        "Probability = favourable outcomes ÷ total outcomes.",
        "Count carefully before writing the fraction.",
        "Probabilities are between 0 and 1.",
        "A larger probability means a more likely event.",
      ],
    },
    quiz: [
      { q: "A card is chosen from the numbers 1 to 6. What is the probability of choosing an even number?", choices: ["1/6", "2/6", "3/6", "4/6"], correct: 2, why: "The even numbers are 2, 4, and 6. That is 3 favourable outcomes out of 6." },
      { q: "A number is chosen from 1 to 10. What is the probability of choosing a factor of 10?", choices: ["2/10", "4/10", "5/10", "6/10"], correct: 1, why: "The factors of 10 are 1, 2, 5, and 10. That is 4 favourable outcomes out of 10." },
      { q: "A fair die is thrown once. What is the probability of getting a number greater than 4?", choices: ["1/6", "2/6", "3/6", "4/6"], correct: 1, why: "Numbers greater than 4 are 5 and 6, so there are 2 favourable outcomes out of 6." },
      { q: "A card is chosen from 1 to 12. What is the probability of choosing an odd number?", choices: ["5/12", "6/12", "7/12", "4/12"], correct: 1, why: "There are 6 odd numbers from 1 to 12: 1, 3, 5, 7, 9, 11. So the probability is 6/12." },
      { q: "Which event is more likely when choosing from 1 to 8?", choices: ["Choosing an even number", "Choosing the number 7", "They are equally likely", "Cannot tell"], correct: 0, why: "Even numbers are 2, 4, 6, and 8, so the probability is 4/8. The probability of getting 7 is only 1/8. So choosing an even number is more likely." },
      { q: "A box has number cards 1 to 9. What is the probability of choosing a multiple of 2?", choices: ["3/9", "4/9", "5/9", "2/9"], correct: 1, why: "The multiples of 2 are 2, 4, 6, and 8. That is 4 favourable outcomes out of 9." },
      { q: "If an event has probability 1, what does that mean?", choices: ["The event is impossible", "The event is certain", "The event is unlikely", "The event is even chance"], correct: 1, why: "A probability of 1 means the event must happen, so it is certain." },
    ],
  },
  {
    id: "regular-polygons",
    themeId: "theme-4-geometry",
    themeName: "Geometry · Construction",
    title: "Regular polygons",
    estMinutes: 14,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro:
        "Why this matters: Regular polygons help learners understand equal sides, equal angles, and shape families more clearly. This topic strengthens geometry language and supports later work in perimeter, construction, and shape recognition.",
      learningObjectives: [
        "Explain what a regular polygon is.",
        "Distinguish regular and irregular polygons.",
        "Identify common regular polygons.",
        "Use side and angle equality to classify polygons correctly.",
      ],
      whatYouNeedToKnow: [
        "A polygon is a closed shape made of straight line segments.",
        "A regular polygon has all sides equal and all angles equal.",
        "An irregular polygon does not have all sides and angles equal.",
        "Examples of regular polygons include a regular triangle, a square, and a regular pentagon.",
        "Not every polygon with the same number of sides is regular. A pentagon may be regular or irregular depending on its sides and angles.",
        "To identify a regular polygon, check both the sides and the angles, not just one of them.",
      ],
      worked: {
        problem:
          "A shape has 6 sides. All the sides are equal, and all the angles are equal. What kind of shape is it?",
        steps: [
          "Step 1. Count the sides. There are 6 sides.",
          "Step 2. A polygon with 6 sides is a hexagon.",
          "Step 3. Since all the sides and all the angles are equal, it is regular.",
        ],
        answer: "Answer: It is a regular hexagon.",
      },
      commonMistakes: [
        "Calling any polygon regular just because it looks neat.",
        "Checking only the sides and forgetting the angles.",
        "Mixing up the names of polygons with different numbers of sides.",
        "Thinking every square is not a regular polygon because it is a special shape.",
      ],
      tryThis: {
        question: "Which statement is true about a regular polygon?",
        choices: ["Only the sides are equal", "Only the angles are equal", "Sides and angles are equal", "It must have five sides"],
        correct: 2,
        explanation: "A regular polygon has all sides equal and all angles equal.",
      },
      recap: [
        "A regular polygon has equal sides and equal angles.",
        "Count the sides to name the polygon.",
        "A polygon can be regular or irregular.",
        "Squares are regular polygons.",
      ],
    },
    quiz: [
      { q: "What is a regular polygon?", choices: ["A shape with curved sides", "A polygon with equal sides and equal angles", "Any polygon with four sides", "A polygon with only equal sides"], correct: 1, why: "A regular polygon has all sides equal and all angles equal." },
      { q: "Which of these is a regular polygon?", choices: ["A square", "Any rectangle", "Any quadrilateral", "A circle"], correct: 0, why: "A square has all sides equal and all angles equal, so it is a regular polygon." },
      { q: "A regular polygon has 5 sides. What is it called?", choices: ["Hexagon", "Quadrilateral", "Pentagon", "Octagon"], correct: 2, why: "A polygon with 5 sides is a pentagon, and if its sides and angles are equal it is a regular pentagon." },
      { q: "Which statement about an irregular polygon is true?", choices: ["All sides and angles are equal", "It has no sides", "Its sides or angles are not all equal", "It must be a triangle"], correct: 2, why: "An irregular polygon does not have all sides and angles equal." },
      { q: "A regular hexagon has how many sides?", choices: ["5", "6", "7", "8"], correct: 1, why: "A hexagon has 6 sides." },
      { q: "Why is a circle not a regular polygon?", choices: ["Because it is too large", "Because it has no straight sides", "Because it has equal parts", "Because it is not closed"], correct: 1, why: "A circle is not a polygon because it has no straight sides." },
      { q: "Which feature must be checked before saying a polygon is regular?", choices: ["Only colour", "Only size", "Sides and angles", "Only perimeter"], correct: 2, why: "A polygon is regular only if both its sides and angles are all equal." },
    ],
  },
  {
    id: "algebra-real-life",
    themeId: "theme-4-algebra",
    themeName: "Algebra",
    title: "Algebra in real-life situations",
    estMinutes: 15,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro:
        "Why this matters: Learners should not see algebra as only letters on paper. Algebra helps describe real-life situations such as age, cost, distance, and sharing. It turns everyday statements into mathematical language.",
      learningObjectives: [
        "Translate simple real-life statements into algebraic form.",
        "Use letters to represent unknown numbers in real situations.",
        "Form simple equations from word statements.",
        "Solve straightforward real-life algebra problems.",
      ],
      whatYouNeedToKnow: [
        "In algebra, a letter can stand for an unknown number or changing quantity.",
        "Real-life algebra begins by deciding what the letter represents. For example, let x be the number of books or the age of a child.",
        "Once the letter is chosen, word statements can be translated into expressions or equations. For example, 'three more than a number' becomes x + 3.",
        "'Twice a number' becomes 2x. 'The total is 15' helps us form an equation such as 2x + 3 = 15.",
        "The most important habit in real-life algebra is reading the words carefully before writing the mathematics.",
        "After solving, always check whether the answer makes sense in the story.",
      ],
      worked: {
        problem:
          "Amina has x mangoes. Her brother has 3 more mangoes than Amina. Together they have 15 mangoes. Find how many mangoes Amina has.",
        steps: [
          "Step 1. Let Amina have x mangoes.",
          "Step 2. Her brother has x + 3 mangoes.",
          "Step 3. Together they have 15, so x + (x + 3) = 15.",
          "Step 4. Simplify: 2x + 3 = 15.",
          "Step 5. Subtract 3: 2x = 12.",
          "Step 6. Divide by 2: x = 6.",
        ],
        answer: "Answer: Amina has 6 mangoes.",
      },
      commonMistakes: [
        "Choosing a letter but forgetting what it represents.",
        "Writing the wrong operation from the word statement.",
        "Adding where the story means subtracting, or vice versa.",
        "Solving the equation correctly but giving an answer that does not fit the story.",
      ],
      tryThis: {
        question: "A trader sells pens at UGX p each. What is the cost of 4 pens?",
        choices: ["p + 4", "4p", "p ÷ 4", "p − 4"],
        correct: 1,
        explanation: "If one pen costs p shillings, then 4 pens cost 4 × p, written as 4p.",
      },
      recap: [
        "Choose a letter to represent the unknown clearly.",
        "Translate the words carefully into algebra.",
        "Form the expression or equation step by step.",
        "Check whether the final answer fits the story.",
      ],
    },
    quiz: [
      { q: "Which expression means 'five more than a number x'?", choices: ["5x", "x + 5", "x − 5", "5 − x"], correct: 1, why: "'Five more than x' means add 5 to x, so the expression is x + 5." },
      { q: "A book costs b shillings. What is the cost of 3 books?", choices: ["b + 3", "3b", "b ÷ 3", "b − 3"], correct: 1, why: "Three books each costing b shillings cost 3 × b, written as 3b." },
      { q: "If a child is y years old, how old will the child be in 4 years?", choices: ["y − 4", "4y", "y + 4", "y ÷ 4"], correct: 2, why: "In 4 years, the age increases by 4, so it becomes y + 4." },
      { q: "Which equation matches the statement 'Twice a number plus 3 is 11'?", choices: ["2x + 3 = 11", "x + 2 + 3 = 11", "2 + 3x = 11", "x − 3 = 11"], correct: 0, why: "'Twice a number' is 2x, and 'plus 3 is 11' gives 2x + 3 = 11." },
      { q: "A basket has m oranges. Another basket has 2 more than the first basket. How many oranges are in the second basket?", choices: ["2m", "m + 2", "m − 2", "2 − m"], correct: 1, why: "Two more than m is written as m + 2." },
      { q: "In a class, boys are b and girls are 5 more than boys. Which expression shows the number of girls?", choices: ["b − 5", "5b", "b + 5", "b ÷ 5"], correct: 2, why: "Five more than b is written as b + 5." },
      { q: "Why do we use letters in real-life algebra?", choices: ["To make answers longer", "To stand for unknown or changing numbers", "To avoid using numbers at all", "To draw shapes"], correct: 1, why: "Letters are used to represent unknown or changing numbers." },
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
];
