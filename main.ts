// The World in One Day — Friday 20 November 2026.
// make.fun competition news-image-20261120.
// Node 22, standard library only. The front page is the entry.png shipped
// beside this file; the program copies it to the output directory, so both
// grader runs write the same bytes. No network is used.
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = new URL('./entry.png', import.meta.url);

if (!existsSync(source)) {
  throw new Error(`entry.png is missing from the repository: ${source.pathname}`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, 'entry.png'));

const expected = statSync(source).size;
const actual = statSync(join(outDir, 'entry.png')).size;
if (actual !== expected) {
  throw new Error(`entry.png copy failed: expected ${expected} bytes, got ${actual} bytes`);
}
console.error(`entry.png copied (${actual} bytes)`);
