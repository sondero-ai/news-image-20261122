// Copies the one-page news image this entry ships to the grader's output directory.
// Node 22, standard library only: no network, no dependencies, identical bytes on every run.
import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const image = fileURLToPath(new URL('./entry.png', import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const destination = join(outputDir, 'entry.png');

if (!existsSync(image)) {
  console.error(`entry.png is missing: expected it at ${image}`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(image, destination);
