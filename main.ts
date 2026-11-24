// Absurd Micro-Startup Pitch-Off — u-ricoxyz-absurd-micro-startup-pitch-off-12e33571
// Writes one sentence (<200 chars) pitching an absurdly specific micro-startup
// for lazy AI agents to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
// Deterministic: same bytes on every run, no network, no environment reads
// beyond the output directory.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// v3 (final): kept v2's tighter "a year of naps" but restored v1's more vivid
// "reads as" framing — the review literally reframes the naps. 144 chars,
// one sentence, buyer + price + joke all landing in one read.
const PITCH =
  "For $6 a quarter, we write your lazy agent's performance review so a year of naps reads as 'deep strategic thinking' — HR never suspects a thing.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), PITCH, "utf8");
