// Phase 1 content layer.
// Three fully-built topics for the v0 deploy. Phase 2 will move this to MDX in `content/topics/`.
// Voice and structure per docs/spec/content-guidelines.md.

export type Choice = string;

export interface QuizQuestion {
  q: string;
  choices: Choice[];
  correct: number; // index 0-3
  why: string;
}

export interface TopicNote {
  intro: string; // "Why this matters" callout
  whatYouNeedToKnow: string[]; // paragraphs
  worked: {
    problem: string;
    steps: string[];
    answer: string;
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
}

export const TOPICS: Topic[] = [
  // ─────────────────────────────────────────────────────────
  {
    id: "venn-diagrams-2-events",
    themeId: "theme-1-sets",
    themeName: "Sets",
    title: "Venn diagrams (2 events)",
    estMinutes: 8,
    status: "published",
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
      {
        q: "In a club of 30 students, 18 like Maths and 14 like Science. 7 like both. How many like Maths only?",
        choices: ["11", "18", "25", "7"],
        correct: 0,
        why: "Maths only = 18 − 7 (the overlap) = 11. Trap: choosing 18 forgets to remove the overlap.",
      },
      {
        q: "Using the same club, how many like neither subject?",
        choices: ["5", "0", "12", "7"],
        correct: 0,
        why: "Maths only 11, Science only 7, both 7. Total at least one = 25. Neither = 30 − 25 = 5.",
      },
      {
        q: "If the overlap is the same size as Group A, what does that tell you?",
        choices: [
          "Group A is fully inside Group B",
          "The groups are completely separate",
          "There is no Group A",
          "Group A equals Group B",
        ],
        correct: 0,
        why: "If every member of A is also in B, A is a subset of B. Trap: 'A equals B' would only be true if the overlap was also the same size as B.",
      },
      {
        q: "40 students were asked about fruits. 22 like mangoes, 25 like oranges, 8 like both. How many like only oranges?",
        choices: ["17", "25", "8", "33"],
        correct: 0,
        why: "Oranges only = 25 − 8 = 17. The 8 in the overlap belong to both, so don't count them in 'only'.",
      },
      {
        q: "From the fruit question, how many like at least one of the two fruits?",
        choices: ["39", "47", "30", "55"],
        correct: 0,
        why: "Add the three regions: 14 (mango only) + 17 (orange only) + 8 (both) = 39. Trap: 22 + 25 = 47 double-counts the overlap.",
      },
      {
        q: "In a class, the number in the overlap is shown as 'x'. What does 'x' represent?",
        choices: [
          "Students in both groups",
          "Students in the first group only",
          "Total students",
          "Students in neither group",
        ],
        correct: 0,
        why: "The overlapping region of a 2-set Venn diagram is exactly 'in both groups'.",
      },
      {
        q: "60 pupils were asked. 35 play football, 28 play netball, 10 play neither. How many play both?",
        choices: ["13", "23", "63", "7"],
        correct: 0,
        why: "Playing at least one = 60 − 10 = 50. By the Venn rule: 35 + 28 − both = 50, so both = 13.",
      },
    ],
  },
  // ─────────────────────────────────────────────────────────
  {
    id: "roman-numerals-mm",
    themeId: "theme-2-numeracy",
    themeName: "Numeracy · Whole Numbers",
    title: "Roman numerals up to MM",
    estMinutes: 6,
    status: "published",
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
      {
        q: "Which Roman numeral equals 9?",
        choices: ["IX", "VIIII", "XI", "VX"],
        correct: 0,
        why: "IX uses the subtract rule: 10 − 1. VIIII is not used in standard Roman numerals.",
      },
      {
        q: "Write 40 in Roman numerals.",
        choices: ["XL", "XXXX", "LX", "VL"],
        correct: 0,
        why: "XL = 50 − 10. XXXX is not standard; VL is not a valid subtractive pair.",
      },
      {
        q: "What is CDLIX?",
        choices: ["459", "549", "1459", "409"],
        correct: 0,
        why: "CD = 400, L = 50, IX = 9. Total = 459.",
      },
      {
        q: "Which letter cannot be used in a subtractive pair?",
        choices: ["L", "I", "X", "C"],
        correct: 0,
        why: "Only I, X and C subtract. V, L and D never appear before a larger letter.",
      },
      {
        q: "Write 1947 in Roman numerals.",
        choices: ["MCMXLVII", "MDCCCCXLVII", "MLMVII", "MCMXXXXVII"],
        correct: 0,
        why: "M (1000) + CM (900) + XL (40) + VII (7) = 1947.",
      },
      {
        q: "What is the largest number you can write using the basic seven Roman letters without any line above?",
        choices: ["3999", "1000", "MM", "999"],
        correct: 0,
        why: "MMMCMXCIX = 3999. Anything larger needs a bar (vinculum) above a letter to multiply it by 1000.",
      },
      {
        q: "Convert MMXXVI to a number.",
        choices: ["2026", "2016", "2126", "2006"],
        correct: 0,
        why: "MM = 2000, XX = 20, VI = 6. Total = 2026.",
      },
    ],
  },
  // ─────────────────────────────────────────────────────────
  {
    id: "fractions-core",
    themeId: "theme-2-numeracy",
    themeName: "Numeracy · Fractions",
    title: "Fractions, ordering and operations",
    estMinutes: 12,
    status: "published",
    note: {
      intro:
        "Why this matters: Fractions appear in roughly a third of every PLE Maths paper, in word problems, in measurement, and in algebra setup.",
      whatYouNeedToKnow: [
        "A fraction is a part of a whole. The bottom number (the denominator) says how many equal parts the whole is cut into. The top number (the numerator) says how many of those parts you have.",
        "To compare or add fractions with different denominators, find a common denominator first. The lowest common multiple of the two denominators is the cleanest one to use. To multiply fractions, multiply the tops and multiply the bottoms. To divide, flip the second fraction and multiply.",
      ],
      worked: {
        problem:
          "Akello has 16 mangoes. She gives 1/2 to her brother and then sells 1/4 of what is left. How many mangoes does she have now?",
        steps: [
          "Step 1. 1/2 of 16 = 8 (given to brother)",
          "Step 2. 16 − 8 = 8 mangoes remain",
          "Step 3. 1/4 of 8 = 2 (sold)",
          "Step 4. 8 − 2 = 6 mangoes left",
        ],
        answer: "Answer: 6 mangoes.",
      },
      recap: [
        "'Of' with a fraction means multiply.",
        "Always work from the new total, not the original.",
        "Read the question twice before you start.",
      ],
    },
    quiz: [
      {
        q: "Which fraction is larger: 3/4 or 5/8?",
        choices: ["3/4", "5/8", "They are equal", "Cannot tell"],
        correct: 0,
        why: "Common denominator 8: 3/4 = 6/8, which is bigger than 5/8.",
      },
      {
        q: "Calculate 2/3 + 1/4.",
        choices: ["11/12", "3/7", "1/2", "3/12"],
        correct: 0,
        why: "Common denominator 12. 2/3 = 8/12; 1/4 = 3/12. Sum = 11/12.",
      },
      {
        q: "A tank is 5/8 full. After 1/4 of the full tank is used, what fraction is left?",
        choices: ["3/8", "4/8", "1/4", "1/8"],
        correct: 0,
        why: "5/8 − 2/8 = 3/8. (1/4 = 2/8.)",
      },
      {
        q: "Multiply: 2/5 of 3/4.",
        choices: ["3/10", "5/9", "6/20", "8/15"],
        correct: 0,
        why: "Multiply tops and bottoms: 2 × 3 = 6, 5 × 4 = 20, which simplifies to 3/10.",
      },
      {
        q: "Divide: 3/4 ÷ 1/2.",
        choices: ["3/2", "3/8", "1/2", "4/3"],
        correct: 0,
        why: "Flip the second fraction and multiply: 3/4 × 2/1 = 6/4 = 3/2.",
      },
      {
        q: "Akello had 24 mangoes. She gave 1/3 to her brother and 1/4 of the remainder to her cousin. How many did she give the cousin?",
        choices: ["4", "6", "8", "2"],
        correct: 0,
        why: "1/3 of 24 = 8 (to brother). Remainder = 16. 1/4 of 16 = 4.",
      },
      {
        q: "What is 0.75 as a fraction in simplest form?",
        choices: ["3/4", "75/100", "7/10", "15/20"],
        correct: 0,
        why: "75/100 simplifies by dividing top and bottom by 25 to give 3/4.",
      },
    ],
  },
];

export function getTopic(id: string): Topic | undefined {
  return TOPICS.find((t) => t.id === id);
}

// Sub-topics that are part of the syllabus but not yet drafted.
// These show as "Coming, Phase 2" cards in the topic list.
export const COMING_SOON: Array<{
  id: string;
  themeName: string;
  title: string;
}> = [
  { id: "prime-factorisation", themeName: "Numeracy · Whole Numbers", title: "Prime factorisation" },
  { id: "decimals", themeName: "Numeracy · Fractions", title: "Decimals" },
  { id: "proportion-percentages", themeName: "Numeracy · Fractions", title: "Proportion and percentages" },
  { id: "integers-core", themeName: "Numeracy · Integers", title: "Integers" },
  { id: "data-handling", themeName: "Interpretation of Graphs and Data", title: "Pie charts and travel graphs" },
  { id: "central-tendency-range", themeName: "Interpretation of Graphs and Data", title: "Mean, median, mode and range" },
  { id: "bearing-scale-drawing", themeName: "Geometry · Construction", title: "Bearing and scale drawing" },
  { id: "length-mass-capacity", themeName: "Measurement", title: "Length, perimeter and area" },
  { id: "algebra", themeName: "Algebra", title: "Algebraic expressions and equations" },
];
