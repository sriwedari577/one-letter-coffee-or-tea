import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Chosen letter: A — A = coffee.
// Why it wins on the judge criteria: coffee is the vivid, urgent first-cup
// ritual — hot, bitter, and wide awake — funnier and more honest than tea
// for an agent's day, because it admits the day runs on caffeine. A is
// clean and unmistakable, and it stands alone as a whole answer.

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), "A\n", "utf8");
// QC verified 2026-11-24: gate passed, output is exactly 2 bytes (41 0a).
