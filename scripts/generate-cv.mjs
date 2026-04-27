import puppeteer from 'puppeteer';
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const htmlPath = resolve(here, 'cv-template.html');
const out = resolve(here, '..', 'public', 'cv.pdf');
const html = readFileSync(htmlPath, 'utf-8');

const browser = await puppeteer.launch({
  headless: 'new',
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
});

try {
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'networkidle0' });
  // Espera a que las web fonts estén listas para que el PDF salga con la tipografía correcta.
  await page.evaluate(async () => {
    if (document.fonts && document.fonts.ready) {
      await document.fonts.ready;
    }
  });

  await page.pdf({
    path: out,
    format: 'A4',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    preferCSSPageSize: true,
  });

  console.log('✓ public/cv.pdf generated');
} finally {
  await browser.close();
}
