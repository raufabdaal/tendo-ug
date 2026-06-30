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
        "Why this matters: UNEB has asked at least one Venn-diagram question in every PLE Maths paper since 2014. The question is usually worth 2 or 3 marks, and it is almost always the same structure: total, group A, group B, overlap, and the number in neither. Once you know where the four numbers go, the rest is arithmetic.",
      learningObjectives: [
        "Read a two-circle Venn diagram and name each region.",
        "Find the number of items in only one group, both groups, or neither group.",
        "Use the Venn rule: total in group A or B = n(A) + n(B) − n(A and B).",
        "Solve word problems by drawing or filling in a Venn diagram.",
      ],
      whatYouNeedToKnow: [
        "A Venn diagram is a picture of sets. Each circle is a set, or a group. The area where the two circles overlap is called the intersection: it shows the items that belong to both groups. The area outside both circles shows the items that belong to neither group.",
        "A two-circle Venn diagram has four regions. (1) Only A. (2) Only B. (3) Both A and B (the overlap). (4) Neither A nor B. When you fill in these four numbers correctly, you can answer almost any PLE question.",
        "The most useful formula for two sets is: number in A or B (or both) = n(A) + n(B) − n(A and B). The overlap is subtracted because it is counted twice when you simply add n(A) and n(B).",
        "To find 'only A', subtract the overlap from the total of A. To find 'only B', subtract the overlap from the total of B. To find 'neither', subtract the number in 'at least one group' from the overall total.",
        "If the question gives you the total, the two group totals, and the number in neither, you can find the overlap by working backwards: n(A or B) = total − neither. Then use n(A and B) = n(A) + n(B) − n(A or B).",
      ],
      worked: {
        problem:
          "In a class of 40 pupils, 24 play football and 22 play netball. 10 pupils play both games. How many pupils play neither game?",
        steps: [
          "Step 1. Find football only. Total football = 24, and 10 of those also play netball. So football only = 24 − 10 = 14.",
          "Step 2. Find netball only. Total netball = 22, and 10 of those also play football. So netball only = 22 − 10 = 12.",
          "Step 3. Find the total who play at least one game. Add the three regions: 14 (football only) + 12 (netball only) + 10 (both) = 36.",
          "Step 4. Find neither. The whole class has 40 pupils, and 36 play at least one game. So neither = 40 − 36 = 4.",
        ],
        answer: "Answer: 4 pupils play neither game.",
      },
      commonMistakes: [
        "Forgetting to subtract the overlap. The total number in group A includes the pupils who are also in group B. 'Only A' is always n(A) minus the overlap.",
        "Double-counting the overlap. When you add n(A) + n(B), the overlap is counted twice. That is why the formula subtracts it once.",
        "Mixing up 'neither' and 'both'. 'Both' is the overlap in the middle. 'Neither' is the area outside both circles, found by subtracting the 'at least one' total from the overall total.",
        "Stopping after finding 'only A' and 'only B'. Some pupils leave out the overlap or the 'neither' region and miss a whole number they need for the final answer.",
      ],
      tryThis: {
        question: "In a class of 50 pupils, 30 like rice and 25 like beans. 12 pupils like both. How many pupils like neither?",
        choices: ["7", "12", "18", "43"],
        correct: 0,
        explanation: "Rice only = 30 − 12 = 18. Beans only = 25 − 12 = 13. At least one = 18 + 13 + 12 = 43. Neither = 50 − 43 = 7. The answer is 7.",
      },
      recap: [
        "A two-circle Venn diagram has four regions: only A, only B, both, and neither.",
        "Only A = n(A) − overlap. Only B = n(B) − overlap.",
        "At least one group = n(A) + n(B) − overlap.",
        "Neither = total − at least one group.",
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
      intro: "Why this matters: Decimals are another way of writing fractions and appear in almost every PLE paper — in money, measurement, and percentages. If you understand place value and the four rules for decimals, you can answer the 3 to 5 marks that usually come up.",
      learningObjectives: [
        "Read and write decimals using place value (tenths, hundredths, thousandths).",
        "Convert between decimals and fractions in simplest form.",
        "Add and subtract decimals by lining up the decimal points.",
        "Multiply decimals by counting decimal places.",
        "Divide by decimals by moving the decimal point to make a whole number.",
      ],
      whatYouNeedToKnow: [
        "A decimal is a fraction written with a decimal point. The first digit after the point is tenths, the second is hundredths, the third is thousandths. So 0.7 means 7/10, 0.25 means 25/100, and 0.125 means 125/1000. This is why 0.5 is the same as 1/2, 0.25 is the same as 1/4, and 0.75 is the same as 3/4.",
        "To convert a decimal to a fraction, write the digits after the point over the correct power of 10, then simplify. For 0.6, write 6/10 and simplify to 3/5. For 0.125, write 125/1000 and simplify to 1/8. To convert a fraction to a decimal, divide the numerator by the denominator.",
        "To add or subtract decimals, line up the decimal points, then work as if they were whole numbers. Put the decimal point in the answer directly below the others. For example, 3.6 + 0.45 is written as 3.60 + 0.45, which gives 4.05.",
        "To multiply decimals, multiply the numbers as if there were no decimal points, then count the total number of decimal places in the original numbers. The answer must have the same total number of decimal places. For 0.4 × 0.3, multiply 4 × 3 = 12; there are two decimal places in the question, so the answer is 0.12.",
        "To divide by a decimal, move the decimal point in both numbers to the right until you are dividing by a whole number. For 4.8 ÷ 0.6, move both points one place to the right to get 48 ÷ 6 = 8. The value does not change because you multiplied both numbers by 10.",
      ],
      worked: {
        problem: "A boda fare from Wandegeya to Kasubi is UGX 4,500. A school child gets a discount of 0.2 of the fare. How much does the child pay?",
        steps: [
          "Step 1. '0.2 of 4,500' means multiply: 0.2 × 4,500.",
          "Step 2. 0.2 × 4,500 = 900. This is the discount the child receives.",
          "Step 3. Subtract the discount from the original fare: 4,500 − 900 = 3,600.",
        ],
        answer: "Answer: The child pays UGX 3,600.",
      },
      commonMistakes: [
        "Forgetting to line up the decimal points when adding or subtracting. If you write 3.6 + 0.45 as 3.6 + 0.45 without a zero, it is easy to misalign the digits and get 3.11 or 3.81 instead of 4.05.",
        "Counting decimal places incorrectly when multiplying. In 0.4 × 0.3, there are two decimal places in total, so the answer must be 0.12, not 1.2 or 0.012.",
        "Moving only one decimal point when dividing by a decimal. You must move both the divisor and the dividend by the same number of places. If you move only the divisor, the answer will be wrong.",
        "Not simplifying the fraction form. 0.6 is 6/10, but the simplest form is 3/5. PLE often asks for the simplest form.",
      ],
      tryThis: {
        question: "Work out 0.75 × 0.4 and write the answer as a fraction in simplest form.",
        choices: ["3/10", "3/4", "1/2", "30/100"],
        correct: 0,
        explanation: "0.75 × 0.4 = 0.300. Drop the trailing zeros: 0.3. As a fraction, 0.3 = 3/10. The answer is 3/10.",
      },
      recap: [
        "Decimals are fractions with a decimal point. Tenths, hundredths, thousandths follow the point.",
        "Add and subtract decimals by lining up the decimal points.",
        "Multiply decimals by counting the total number of decimal places.",
        "Divide by a decimal by moving the point in both numbers until the divisor is a whole number.",
        "Memorise: 0.5 = 1/2, 0.25 = 1/4, 0.75 = 3/4, 0.125 = 1/8.",
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
      intro: "Why this matters: Perimeter is one of the most reliable marks in PLE. It comes up almost every year, usually as a 2-mark question, and the formulas are short. If you can name the shape and pick the right formula, the calculation is easy.",
      learningObjectives: [
        "Explain what perimeter means.",
        "Find the perimeter of a rectangle, square, triangle, and regular polygon.",
        "Find the circumference of a circle.",
        "Find a missing side when the perimeter is given.",
      ],
      whatYouNeedToKnow: [
        "Perimeter is the total distance around the outside of a shape. Imagine walking all the way around the edge. The distance you walk is the perimeter. To find it, add up the lengths of all the sides.",
        "Rectangle: Perimeter = 2 × (length + width). A rectangle has two lengths and two widths, so adding one length and one width and then doubling the result is the fastest way. A garden 12 m long and 7 m wide has perimeter 2 × (12 + 7) = 38 m.",
        "Square: Perimeter = 4 × side. All four sides of a square are equal, so multiply one side by 4. A square with side 7 cm has perimeter 28 cm.",
        "Triangle: Perimeter = side 1 + side 2 + side 3. Just add the three sides. A triangle with sides 5 cm, 6 cm, and 7 cm has perimeter 18 cm.",
        "Regular polygon: Perimeter = number of sides × length of one side. A regular hexagon has 6 equal sides. If one side is 12 m, the perimeter is 6 × 12 = 72 m.",
        "Circle: The perimeter of a circle is called the circumference. Circumference = 2 × π × r, where r is the radius and π is usually 22/7 in PLE. If the radius is 7 cm, the circumference is 2 × (22/7) × 7 = 44 cm. The 7s cancel, so the calculation is simple.",
      ],
      worked: {
        problem: "A rectangular garden is 12 m long and 7 m wide. Find its perimeter.",
        steps: [
          "Step 1. Identify the shape: a rectangle. Use the rectangle formula P = 2 × (length + width).",
          "Step 2. Add the length and width: 12 + 7 = 19 m.",
          "Step 3. Multiply by 2 because a rectangle has two of each side: 19 × 2 = 38 m.",
        ],
        answer: "Answer: The perimeter is 38 m.",
      },
      commonMistakes: [
        "Confusing perimeter with area. Perimeter is the distance around the outside; area is the space inside. For a rectangle 9 cm by 4 cm, the perimeter is 26 cm, not 36 cm².",
        "Forgetting to multiply by 2 for a rectangle. A rectangle has two lengths and two widths, so P = 2(L + W), not L + W.",
        "Using the diameter instead of the radius for the circle circumference. If the question gives the diameter, divide it by 2 to get the radius before using 2 × π × r.",
        "Forgetting the unit. Perimeter uses ordinary units like cm, m, or km, not square units. Area uses cm² or m².",
      ],
      tryThis: {
        question: "A square has perimeter 48 cm. Find the length of one side.",
        choices: ["6 cm", "12 cm", "24 cm", "16 cm"],
        correct: 1,
        explanation: "A square has 4 equal sides. Side = perimeter ÷ 4 = 48 ÷ 4 = 12 cm. The answer is 12 cm.",
      },
      recap: [
        "Perimeter is the distance all the way around a shape.",
        "Rectangle: 2 × (length + width). Square: 4 × side. Triangle: sum of all three sides.",
        "Regular polygon: number of sides × side length.",
        "Circle circumference: 2 × π × r, with π = 22/7.",
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
      intro: "Why this matters: Area carries 3 to 5 marks in most PLE papers. Questions often add a small twist: a compound shape, a missing side, or a circle inside a rectangle. If you know the four main formulas and remember to write square units, you can collect those marks.",
      learningObjectives: [
        "Explain what area is and why it is measured in square units.",
        "Find the area of a rectangle, square, triangle, and circle.",
        "Find a missing side when the area is given.",
        "Split a compound shape into simple shapes and find its total area.",
      ],
      whatYouNeedToKnow: [
        "Area is the amount of flat space inside a shape. It is always measured in square units, written with a small 2 after the unit: cm², m², or km². The small 2 means the unit is multiplied by itself, like a square.",
        "Rectangle: Area = length × width. It is just counting how many unit squares fit inside. If the rectangle is 5 cm by 3 cm, you can fit 15 squares of 1 cm × 1 cm, so the area is 15 cm².",
        "Square: Area = side × side. Since a square has equal sides, you multiply the side by itself. A square with side 6 cm has area 36 cm².",
        "Triangle: Area = (1/2) × base × height. The height must be the perpendicular height, the straight-up distance from the base to the top point. The half is important: a triangle is half the size of a rectangle with the same base and height.",
        "Circle: Area = π × r × r, where r is the radius and π is usually taken as 22/7 in PLE. Do not mix this up with the circumference formula C = 2 × π × r. Area uses r × r, not 2 × r.",
        "Compound shape: split the shape into rectangles, triangles, and circles. Find the area of each part, then add the parts together. Sometimes it is easier to find the area of a big rectangle and subtract the area of a missing part.",
      ],
      worked: {
        problem: "A rectangular plot is 25 m long and 16 m wide. Find its area.",
        steps: [
          "Step 1. Choose the rectangle formula: Area = length × width.",
          "Step 2. Substitute the numbers: Area = 25 m × 16 m.",
          "Step 3. Multiply: 25 × 16 = 400.",
        ],
        answer: "Answer: The area is 400 m².",
      },
      commonMistakes: [
        "Forgetting the square units. Area is always in cm², m², or km². Writing cm or m loses a mark.",
        "Forgetting the half in the triangle formula. A triangle with base 10 cm and height 6 cm has area 30 cm², not 60 cm².",
        "Using the diameter instead of the radius for a circle. If the question gives the diameter, divide it by 2 to get the radius before using π × r × r.",
        "Adding or multiplying the wrong dimensions in a compound shape. Always label each part clearly so you know which length and width belong together.",
      ],
      tryThis: {
        question: "A triangle has base 14 cm and height 8 cm. Find its area.",
        choices: ["112 cm²", "56 cm²", "22 cm²", "44 cm²"],
        correct: 1,
        explanation: "Area = (1/2) × base × height = (1/2) × 14 × 8 = 7 × 8 = 56 cm². The answer is 56 cm².",
      },
      recap: [
        "Area is measured in square units (cm², m²).",
        "Rectangle: L × W. Square: side × side. Triangle: (1/2) × base × height. Circle: π × r × r.",
        "The height of a triangle must be perpendicular to the base.",
        "Split compound shapes into simple shapes, find each area, then add.",
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
      intro: "Why this matters: Volume and capacity questions show up reliably in PLE. They are usually worth 2 to 4 marks per paper. The key is to remember the two main formulas and the link between cubic centimetres and litres.",
      learningObjectives: [
        "Explain what volume and capacity mean.",
        "Find the volume of a cuboid and a cube.",
        "Find a missing dimension when the volume is given.",
        "Convert between cubic centimetres and litres.",
        "Solve packing problems by dividing volumes.",
      ],
      whatYouNeedToKnow: [
        "Volume is the amount of space inside a 3D shape. It is measured in cubic units, written with a small 3 after the unit: cm³ or m³. The 3 means the unit is multiplied three times, like a cube. For example, a cuboid that is 5 cm by 4 cm by 3 cm contains 60 little cubes of 1 cm × 1 cm × 1 cm, so its volume is 60 cm³.",
        "Cuboid: Volume = length × width × height. You multiply the three dimensions in any order because multiplication can be done in any order. A tank 2 m long, 1.5 m wide, and 1 m high has volume 2 × 1.5 × 1 = 3 m³.",
        "Cube: Volume = side × side × side. Since all sides of a cube are equal, you multiply the side by itself three times. A cube with side 6 cm has volume 6 × 6 × 6 = 216 cm³.",
        "Capacity is how much liquid a container can hold. The link between volume and capacity is: 1,000 cm³ = 1 litre. So 5,000 cm³ = 5 litres, and 20 litres = 20,000 cm³. Also, 1 m³ = 1,000 litres.",
        "If you know the volume and two dimensions, you can find the third. Volume = length × width × height, so height = volume ÷ (length × width). A box with volume 240 cm³, length 10 cm, and width 6 cm has height 240 ÷ 60 = 4 cm.",
        "Packing problems ask how many small objects fit inside a big container. Divide the volume of the big container by the volume of one small object. For example, how many 2 cm cubes fit in a 6 cm cube? Big volume = 216 cm³, small volume = 8 cm³, so 216 ÷ 8 = 27 cubes fit.",
      ],
      worked: {
        problem: "A water tank is shaped like a cuboid 2 m long, 1.5 m wide and 1 m high. Find its volume in cubic metres, and how many litres of water it holds.",
        steps: [
          "Step 1. Use the cuboid formula: Volume = length × width × height.",
          "Step 2. Substitute the numbers: 2 × 1.5 × 1 = 3. So the volume is 3 m³.",
          "Step 3. Convert cubic metres to litres. 1 m³ = 1,000 litres, so 3 m³ = 3,000 litres.",
        ],
        answer: "Answer: The volume is 3 m³, and the tank holds 3,000 litres of water.",
      },
      commonMistakes: [
        "Using square units for volume. Volume is always in cubic units (cm³, m³). Square units (cm², m²) are for area, not volume.",
        "Forgetting the link between cm³ and litres. 1 litre = 1,000 cm³, not 100 cm³ or 10 cm³.",
        "Adding the dimensions instead of multiplying. Volume of a cuboid is length × width × height, not length + width + height. That would give the perimeter of one face, not the space inside.",
        "Dividing the wrong way round in packing problems. You must divide the big volume by the small volume, not the other way around.",
      ],
      tryThis: {
        question: "A jerrycan holds 12 litres of water. How many cm³ is that?",
        choices: ["120 cm³", "1,200 cm³", "12,000 cm³", "120,000 cm³"],
        correct: 2,
        explanation: "1 litre = 1,000 cm³. So 12 litres = 12 × 1,000 = 12,000 cm³. The answer is 12,000 cm³.",
      },
      recap: [
        "Volume is measured in cubic units (cm³, m³).",
        "Cuboid: length × width × height. Cube: side × side × side.",
        "1,000 cm³ = 1 litre. 1 m³ = 1,000 litres.",
        "To find a missing dimension: divide the volume by the other two dimensions.",
        "For packing problems: divide the big volume by the small volume.",
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
    estMinutes: 10,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro: "Why this matters: Mean, median, mode and range come up in PLE either as a stand-alone question or inside a frequency table. They are worth about 3 to 4 marks per paper. NCDC expects P7 pupils to know the four words, use them correctly, and handle even and odd counts when finding the median.",
      learningObjectives: [
        "Calculate the mean of a set of numbers.",
        "Find the median of a set of numbers, including when there is an even count.",
        "Find the mode of a set of numbers, including bimodal data.",
        "Calculate the range of a set of numbers.",
        "Use a frequency table to find the mean, median, mode, and range.",
      ],
      whatYouNeedToKnow: [
        "Mean is the average. To find it, add all the values together, then divide by how many values there are. For example, the mean of 4, 6, 8, 10, 12 is (4 + 6 + 8 + 10 + 12) ÷ 5 = 40 ÷ 5 = 8.",
        "Median is the middle value when the numbers are arranged in order from smallest to largest. If there is an odd number of values, the median is the one in the middle. If there is an even number of values, the median is the average of the two middle values. For 2, 4, 6, 8 the two middle values are 4 and 6, so the median is (4 + 6) ÷ 2 = 5.",
        "Mode is the value that appears most often. A set can have one mode, more than one mode, or no mode at all. If two values appear the same number of times and more often than any others, the data is bimodal. For example, in 8, 8, 9, 10, 10 both 8 and 10 are modes.",
        "Range is the spread of the data. It is found by subtracting the smallest value from the largest value. For 14, 9, 22, 17, 11 the range is 22 − 9 = 13.",
        "When data is given in a frequency table, multiply each value by its frequency before adding. The total is then divided by the total frequency. This gives the mean from a frequency table.",
      ],
      worked: {
        problem: "The marks of 7 pupils in a Maths test were: 4, 8, 6, 7, 8, 10, 5. Find the mean, median, mode and range.",
        steps: [
          "Step 1. Find the mean. Add the marks: 4 + 8 + 6 + 7 + 8 + 10 + 5 = 48. Divide by 7 because there are 7 pupils: 48 ÷ 7 ≈ 6.86.",
          "Step 2. Find the median. Arrange the marks in order: 4, 5, 6, 7, 8, 8, 10. The middle value is the 4th one, which is 7. Median = 7.",
          "Step 3. Find the mode. The mark 8 appears twice, which is more than any other mark. Mode = 8.",
          "Step 4. Find the range. Highest mark = 10, lowest mark = 4. Range = 10 − 4 = 6.",
        ],
        answer: "Answers: Mean ≈ 6.86, Median = 7, Mode = 8, Range = 6.",
      },
      commonMistakes: [
        "Forgetting to put the numbers in order before finding the median. The median must come from the ordered list, not the original list.",
        "Forgetting to average the two middle values when the count is even. With 2, 4, 6, 8 the median is 5, not 4 or 6.",
        "Choosing a value that appears once as the mode. The mode is the most frequent value. If every value appears once, there is no mode.",
        "Using the wrong total for the mean. The mean is total of values divided by the number of values, not the number of values divided by the total.",
        "Confusing range with the number of values. Range is largest minus smallest, not how many values there are.",
      ],
      tryThis: {
        question: "Find the median and range of: 12, 5, 9, 14, 7, 11.",
        choices: ["Median = 10, Range = 9", "Median = 9, Range = 9", "Median = 10, Range = 8", "Median = 11, Range = 9"],
        correct: 0,
        explanation: "Order: 5, 7, 9, 11, 12, 14. Two middle values are 9 and 11, so median = (9 + 11) ÷ 2 = 10. Range = 14 − 5 = 9. The answer is median = 10 and range = 9.",
      },
      recap: [
        "Mean = total of all values ÷ number of values.",
        "Median = middle value of the ordered list. For even counts, average the two middle values.",
        "Mode = value that appears most often. There can be more than one mode.",
        "Range = largest value − smallest value.",
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
    estMinutes: 10,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro: "Why this matters: Money questions appear in almost every PLE paper, usually worth 3 to 5 marks. They test profit, loss, discount, and simple interest in real-life situations. NCDC expects P7 pupils to calculate these accurately and show their working clearly in Ugandan shillings.",
      learningObjectives: [
        "Understand cost price, selling price, profit, and loss.",
        "Calculate profit and loss percentages on the cost price.",
        "Calculate discount and the new price after a discount.",
        "Calculate simple interest using I = (P × R × T) ÷ 100.",
        "Solve word problems involving money and show working in UGX.",
      ],
      whatYouNeedToKnow: [
        "Cost price (CP) is the amount the seller pays to buy an item. Selling price (SP) is the amount the buyer pays. If SP is bigger than CP, the seller makes a profit. Profit = SP − CP. If SP is smaller than CP, the seller makes a loss. Loss = CP − SP.",
        "Profit percentage and loss percentage are always calculated on the cost price, not the selling price. This is the NCDC rule. Profit % = (Profit ÷ CP) × 100. Loss % = (Loss ÷ CP) × 100. For example, if CP = UGX 60,000 and SP = UGX 75,000, profit = 15,000 and profit % = (15,000 ÷ 60,000) × 100 = 25%.",
        "Discount is a reduction in the marked price. The marked price is the original price written on the item. Discount % = (Discount ÷ Marked price) × 100. The buyer pays: selling price = marked price − discount. A shirt marked UGX 30,000 with 10% discount has discount 3,000, so the buyer pays 27,000.",
        "Simple interest is the extra money paid or earned when money is borrowed or saved. The formula is I = (P × R × T) ÷ 100, where P is the principal (the original amount), R is the rate per year as a percentage, and T is the time in years. The total amount after interest is A = P + I. For example, UGX 200,000 at 5% per year for 3 years gives I = (200,000 × 5 × 3) ÷ 100 = 30,000.",
        "When the question involves a pay rise or a price increase, the new amount is a percentage of the original. A 10% pay rise means the new pay is 110% of the original. To find the original pay from the new pay, divide by 110 and multiply by 100. Do not simply subtract 10% from the new pay.",
      ],
      worked: {
        problem: "A trader bought a radio at UGX 60,000 and sold it at UGX 75,000. Find the profit percentage.",
        steps: [
          "Step 1. Identify the cost price and selling price. CP = UGX 60,000 and SP = UGX 75,000.",
          "Step 2. Calculate the profit: Profit = SP − CP = 75,000 − 60,000 = UGX 15,000.",
          "Step 3. Calculate the profit percentage on the cost price: (15,000 ÷ 60,000) × 100 = 0.25 × 100 = 25%.",
        ],
        answer: "Answer: The profit percentage is 25%.",
      },
      commonMistakes: [
        "Calculating profit or loss percentage on the selling price instead of the cost price. NCDC and PLE mark schemes require the percentage to be on the cost price.",
        "Confusing discount with profit. Discount is a percentage of the marked price; profit is a percentage of the cost price. They use different base amounts.",
        "Forgetting to subtract the discount from the marked price to find what the buyer pays. Some pupils stop after finding the discount amount.",
        "Mixing up the simple interest formula. Remember I = (P × R × T) ÷ 100. Time must be in years. If the time is in months, convert it to years first.",
        "Using the new amount to find the original amount after a percentage increase. If the new pay is 110% of the original, divide by 110 and multiply by 100, do not subtract 10%.",
      ],
      tryThis: {
        question: "A dress is marked at UGX 40,000. The shop gives a 20% discount. How much does the customer pay?",
        choices: ["UGX 32,000", "UGX 8,000", "UGX 38,000", "UGX 48,000"],
        correct: 0,
        explanation: "Discount = 20% of 40,000 = 8,000. Customer pays 40,000 − 8,000 = 32,000. The answer is UGX 32,000.",
      },
      recap: [
        "Profit = SP − CP. Loss = CP − SP.",
        "Profit % and loss % are always on the cost price.",
        "Discount % is on the marked price. Buyer pays marked price minus discount.",
        "Simple interest: I = (P × R × T) ÷ 100.",
        "Always show working in UGX.",
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
