#!/usr/bin/env node
/**
 * Fix the "all answers are option A" bias.
 *
 * For every question in app/lib/topics.ts and app/lib/question-bank.ts,
 * this script shuffles the choices so the correct answer lands on a random
 * letter (A-D) and updates the `correct` index to match.
 *
 * Run with:
 *   cd /home/user/tendo-ug
 *   node scripts/shuffle-correct-answers.js
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const FILES = [
  path.join(ROOT, "app/lib/topics.ts"),
  path.join(ROOT, "app/lib/question-bank.ts"),
];

// Match a question object:
// { q: "...", choices: ["...", "...", "...", "..."], correct: 0, why: "..." }
// Optional trailing fields (e.g., difficulty) are preserved.
const QUESTION_RE =
  /\{\s*q:\s*("(?:[^"\\]|\\.)*"),\s*choices:\s*(\[[^\]]*\]),\s*correct:\s*(\d+),\s*why:\s*("(?:[^"\\]|\\.)*")\s*([,\s]*[^}]*)\}/g;

function parseStringLiteral(raw) {
  // Remove surrounding quotes and unescape simple sequences.
  return raw
    .slice(1, -1)
    .replace(/\\"/g, '"')
    .replace(/\\'/g, "'")
    .replace(/\\n/g, "\n")
    .replace(/\\t/g, "\t");
}

function quoteStringLiteral(str) {
  // Escape double quotes and wrap in double quotes.
  return '"' + str.replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\t/g, '\\t') + '"';
}

/**
 * Parse a JS/TS array literal of string literals, respecting commas inside strings.
 * Returns an array of the raw string-literal tokens (including quotes).
 */
function parseStringArray(raw) {
  // raw looks like: ["a", "b, c", "d"]
  const inner = raw.slice(1, -1).trim();
  if (!inner) return [];
  const parts = [];
  let inString = false;
  let escape = false;
  let current = "";
  let depth = 0;

  for (const ch of inner) {
    if (inString) {
      current += ch;
      if (escape) {
        escape = false;
      } else if (ch === "\\") {
        escape = true;
      } else if (ch === '"') {
        inString = false;
      }
    } else {
      if (ch === '"') {
        inString = true;
        current += ch;
      } else if (ch === "[" || ch === "{" || ch === "(") {
        depth++;
        current += ch;
      } else if (ch === "]" || ch === "}" || ch === ")") {
        depth--;
        current += ch;
      } else if (ch === "," && depth === 0) {
        parts.push(current.trim());
        current = "";
      } else if (!/\s/.test(ch) && current === "") {
        // Unexpected non-whitespace outside a string — bail out.
        return [];
      } else {
        current += ch;
      }
    }
  }

  if (current.trim()) parts.push(current.trim());
  return parts;
}

function parseChoicesArray(raw) {
  const tokens = parseStringArray(raw);
  return tokens.map((t) => parseStringLiteral(t));
}

function formatChoicesArray(choices) {
  return "[" + choices.map((c) => quoteStringLiteral(c)).join(", ") + "]";
}

function shuffleChoices(choices) {
  const n = choices.length;
  const newCorrectIndex = Math.floor(Math.random() * n);
  const newChoices = [...choices];
  // Move the current correct answer (index 0) to the new random index.
  [newChoices[0], newChoices[newCorrectIndex]] = [newChoices[newCorrectIndex], newChoices[0]];
  return { newChoices, newCorrectIndex };
}

function processFile(filePath) {
  const original = fs.readFileSync(filePath, "utf-8");
  let changed = 0;
  let skipped = 0;

  const result = original.replace(QUESTION_RE, (match, qRaw, choicesRaw, correctRaw, whyRaw, trailingRaw) => {
    const choices = parseChoicesArray(choicesRaw);
    if (choices.length !== 4) {
      skipped++;
      return match;
    }
    const { newChoices, newCorrectIndex } = shuffleChoices(choices);
    changed++;
    return `{ q: ${qRaw}, choices: ${formatChoicesArray(newChoices)}, correct: ${newCorrectIndex}, why: ${whyRaw}${trailingRaw} }`;
  });

  fs.writeFileSync(filePath, result, "utf-8");
  console.log(`Processed ${filePath}: ${changed} shuffled, ${skipped} skipped.`);
  return { changed, skipped };
}

let totalChanged = 0;
let totalSkipped = 0;
for (const file of FILES) {
  const { changed, skipped } = processFile(file);
  totalChanged += changed;
  totalSkipped += skipped;
}

console.log(`\nTotal: ${totalChanged} shuffled, ${totalSkipped} skipped.`);
