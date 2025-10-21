import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer-core';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function getBrowserPath() {
  // Prefer EDGE_PATH or CHROME_PATH from env, fallback to common Windows locations
  if (process.env.EDGE_PATH) return process.env.EDGE_PATH;
  if (process.env.CHROME_PATH) return process.env.CHROME_PATH;
  const candidates = [
    'C://Program Files (x86)//Microsoft//Edge//Application//msedge.exe',
    'C://Program Files//Microsoft//Edge//Application//msedge.exe',
    'C://Program Files//Google//Chrome//Application//chrome.exe',
    'C://Program Files (x86)//Google//Chrome//Application//chrome.exe'
  ];
  return candidates.find(p => {
    try { require('fs').accessSync(p); return true; } catch { return false; }
  });
}

async function exportLatestHTML() {
  const outDir = path.resolve(__dirname, '../out');
  const files = await fs.readdir(outDir).catch(() => []);
  const htmls = files.filter(f => f.endsWith('.html'));
  if (!htmls.length) throw new Error('No HTML found in out/. Run start/dev first.');
  htmls.sort((a, b) => require('fs').statSync(path.join(outDir, b)).mtimeMs - require('fs').statSync(path.join(outDir, a)).mtimeMs);
  return path.join(outDir, htmls[0]);
}

async function main() {
  const htmlPath = await exportLatestHTML();
  const browserPath = getBrowserPath();
  if (!browserPath) throw new Error('Could not find Chrome/Edge. Set EDGE_PATH or CHROME_PATH.');

  const browser = await puppeteer.launch({ executablePath: browserPath, headless: true });
  const page = await browser.newPage();
  await page.goto('file://' + htmlPath, { waitUntil: 'networkidle0' });

  const pdfPath = htmlPath.replace(/\.html$/i, '.pdf');
  await page.pdf({ path: pdfPath, format: 'Letter', printBackground: true, margin: { top: '0.4in', bottom: '0.4in', left: '0.4in', right: '0.4in' } });

  await browser.close();
  console.log('Exported PDF:', pdfPath);
}

main().catch(err => { console.error(err); process.exit(1); });
