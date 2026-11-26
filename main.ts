import { mkdirSync, writeFileSync } from "node:fs";

// A one-line review a dog gives the mailman: after six years of being a
// good boy, the dog has never once received a letter of his own — and
// the review ends with a deadpan verdict.
const ENTRY =
  "One star. He delivers letters to the house but never once a letter for me. I have been a good boy for six years. Unacceptable.";

// Gate: 1 to 200 characters, not only whitespace, and a single line.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} chars, must be 1-200`);
}
if (!ENTRY.trim()) {
  throw new Error("entry must not be only whitespace");
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
