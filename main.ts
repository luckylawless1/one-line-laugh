// The One-Line Laugh — make.fun bounty entry.
// Writes one funny line to /output/entry.txt (1-200 chars, single sentence).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I told the printer it was out of ink and it printed a 40-page error report to prove me wrong.";

// Gate: the entry must be one non-blank line of 1-200 characters.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`line must be 1-200 chars, got ${chars.length}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("line must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`Wrote ${[...LINE].length} chars to ${join(outDir, "entry.txt")}`);
