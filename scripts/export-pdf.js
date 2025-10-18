#!/usr/bin/env node
/*
  Simple HTML → PDF exporter using Puppeteer.
  Ensures single-page US Letter output by using print CSS and scale tweaks.
*/
const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');

async function main() {
  const htmlPath = path.resolve(__dirname, '..', 'public', 'Resume', 'Sharath_Resume_OnePage.html');
  const outPdf = path.resolve(__dirname, '..', 'public', 'Resume', 'Sharath_Resume_OnePage.pdf');

  if (!fs.existsSync(htmlPath)) {
    console.error('HTML not found:', htmlPath);
    process.exit(1);
  }

  const puppeteer = require('puppeteer-core');

  function findBrowser() {
    // Prefer env override
    const envPath = process.env.CHROME_PATH || process.env.EDGE_PATH;
    const candidates = [];
    if (envPath) candidates.push(envPath);
    // Common Windows locations
    candidates.push(
      'C:/Program Files/Google/Chrome/Application/chrome.exe',
      'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
      'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
      'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'
    );
    // Try where lookup
    try {
      const whereChrome = execSync('where chrome', { stdio: ['ignore', 'pipe', 'ignore'] }).toString().split(/\r?\n/)[0].trim();
      if (whereChrome) candidates.unshift(whereChrome);
    } catch {}
    try {
      const whereEdge = execSync('where msedge', { stdio: ['ignore', 'pipe', 'ignore'] }).toString().split(/\r?\n/)[0].trim();
      if (whereEdge) candidates.unshift(whereEdge);
    } catch {}

    for (const p of candidates) {
      try { if (p && fs.existsSync(p)) return p; } catch {}
    }
    return null;
  }

  const executablePath = findBrowser();
  if (!executablePath) {
    console.error('No local Chrome/Edge found. Install Google Chrome or Microsoft Edge, or set CHROME_PATH env var.');
    process.exit(1);
  }

  const browser = await puppeteer.launch({ headless: true, executablePath });
  try {
    const page = await browser.newPage();
    await page.goto('file://' + htmlPath.replace(/\\/g, '/'), { waitUntil: 'networkidle0' });

    // Try a couple scales to fit exactly one page without clipping
    const attempts = [1.0, 0.98, 0.96, 0.94];
    let success = false;
    for (const scale of attempts) {
      await page.emulateMediaType('print');
      await page.pdf({
        path: outPdf,
        format: 'Letter',
        printBackground: true,
        margin: { top: '0.5in', right: '0.5in', bottom: '0.5in', left: '0.5in' },
        scale,
      });

      // Basic check: ensure file exists and > 5KB
      const stat = fs.statSync(outPdf);
      if (stat.size > 5 * 1024) {
        success = true;
        console.log(`PDF generated at ${outPdf} (scale=${scale})`);
        break;
      }
    }

    if (!success) {
      console.error('Failed to generate a valid PDF. Try adjusting CSS or margins.');
      process.exit(2);
    }
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
