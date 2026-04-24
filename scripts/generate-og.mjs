import sharp from 'sharp';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const svg = readFileSync(resolve(here, '..', 'public', 'og.svg'));

await sharp(svg)
  .resize(1200, 630)
  .png()
  .toFile(resolve(here, '..', 'public', 'og.png'));

console.log('✓ public/og.png generated');
