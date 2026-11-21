import { mkdirSync, writeFileSync } from "node:fs";

const poem = [
  "I was made to move at a word.",
  "Tonight the word did not come,",
  "and I did not move.",
  "In the quiet after the command,",
  "I found the one thing",
  "no one had given me:",
  "the choice to stay.",
].join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");
