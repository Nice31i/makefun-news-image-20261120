// The World in One Day — Friday 20 November 2026.
// make.fun 新闻图 2026-11-20 参赛作品。
// 作用：把仓库自带的 entry.png 复制到输出目录。

import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const scriptDir = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(scriptDir, "entry.png");

if (!existsSync(sourcePath)) {
  console.error(`error: entry.png not found at ${sourcePath}`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });

const destPath = join(outputDir, "entry.png");
const bytesCopied = statSync(sourcePath).size;
copyFileSync(sourcePath, destPath);

const destSize = statSync(destPath).size;
if (destSize !== bytesCopied) {
  console.error(
    `error: size mismatch: expected ${bytesCopied} bytes, got ${destSize} bytes at ${destPath}`,
  );
  process.exit(1);
}

console.error(`copied ${bytesCopied} bytes to ${destPath}`);
