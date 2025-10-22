import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer-core';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const OUT_DIR = path.resolve(__dirname, '../../out');

async function ensureDir(d) { await fs.mkdir(d, { recursive: true }); }

function getBrowserPath() {
  if (process.env.EDGE_PATH) return process.env.EDGE_PATH;
  if (process.env.CHROME_PATH) return process.env.CHROME_PATH;
  const candidates = [
    'C://Program Files (x86)//Microsoft//Edge//Application//msedge.exe',
    'C://Program Files//Microsoft//Edge//Application//msedge.exe',
    'C://Program Files//Google//Chrome//Application//chrome.exe',
    'C://Program Files (x86)//Google//Chrome//Application//chrome.exe'
  ];
  return candidates.find(p => { try { require('fs').accessSync(p); return true; } catch { return false; } });
}

async function exportPdf(htmlPath, pdfPath) {
  const browserPath = getBrowserPath();
  if (!browserPath) return false;
  const browser = await puppeteer.launch({ executablePath: browserPath, headless: true });
  const page = await browser.newPage();
  await page.goto('file://' + htmlPath, { waitUntil: 'networkidle0' });
  await page.pdf({ path: pdfPath, format: 'Letter', printBackground: true, margin: { top: '0.6in', bottom: '0.6in', left: '0.7in', right: '0.7in' } });
  await browser.close();
  return true;
}

function escapeHtml(s) {
  return String(s || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function extractCompanyFromUrl(url) {
  try {
    const u = new URL(url);
    const host = u.hostname;
    // heuristic: take first label like databricks, greenhouse shows boards.greenhouse.io/company
    if (host.includes('greenhouse.io')) {
      const m = u.pathname.split('/').filter(Boolean);
      if (m[0]) return m[0];
    }
    if (host.includes('lever.co')) {
      const m = u.hostname.split('.')[0];
      if (m && m !== 'jobs') return m;
      const parts = u.pathname.split('/').filter(Boolean);
      if (parts[0] && parts[0] !== 'v0' && parts[0] !== 'postings') return parts[0];
    }
    // default to first host label
    return host.split('.')[0];
  } catch { return ''; }
}

function buildLetterHTML({ name, email, role, company, location, highlights }) {
  const template = `<!doctype html>
  <html><head><meta charset="utf-8"><title>Cover Letter</title>
  <style>
  body { font-family: -apple-system, Segoe UI, Roboto, Arial, sans-serif; color: #222; line-height: 1.5; }
  .header { margin-bottom: 16px; }
  .header .name { font-weight: 600; font-size: 18px; }
  .header .contact { color: #555; font-size: 12px; }
  h1 { font-size: 18px; margin: 16px 0 8px; }
  p { margin: 8px 0; }
  ul { margin: 8px 0 8px 20px; }
  .muted { color: #666; }
  </style></head>
  <body>
  <div class="header">
    <div class="name">${escapeHtml(name)}</div>
    <div class="contact">${escapeHtml(email)}</div>
    <div class="muted">${new Date().toLocaleDateString()}</div>
  </div>
  <h1>Application: ${escapeHtml(role)}${company ? ' at ' + escapeHtml(company) : ''}</h1>
  <p>Dear Hiring Team${company ? ' at ' + escapeHtml(company) : ''},</p>
  <p>I’m excited to apply for the ${escapeHtml(role || 'role')}${location ? ' in ' + escapeHtml(location) : ''}. I bring a strong track record delivering analytics platforms and data/AI initiatives that drive measurable business outcomes.</p>
  <p>Highlights relevant to this role:</p>
  <ul>
    ${highlights.map(h => `<li>${escapeHtml(h)}</li>`).join('\n')}
  </ul>
  <p>I’d be thrilled to contribute to ${escapeHtml(company || 'your team')} and can start discussions immediately. Thank you for your consideration.</p>
  <p>Sincerely,<br/>${escapeHtml(name)}</p>
  </body></html>`;
  return template;
}

export async function generateCoverLetters(jobs, { profile } = {}) {
  const person = profile?.name || 'Candidate';
  const email = profile?.email || profile?.contactEmail || '';
  let count = 0;
  for (const job of jobs) {
    if (!job.jd || job.jd.length < 50) continue;
    const role = job.title || 'Role';
    const company = job.company || extractCompanyFromUrl(job.url || '') || '';
    const location = job.location || '';
    // simple highlights (can improve: parse from resume achievements or JD requirements)
    const highlights = [
      'Built analytics platforms that saved 50+ FTE via automation and AI-assisted workflows',
      'Led cross-functional data teams (DE/BI) and mentored 100+ analysts',
      'Delivered measurable impact through ML-powered observability and KPI instrumentation'
    ];
    const html = buildLetterHTML({ name: person, email, role, company, location, highlights });
    const safeId = (job.title || 'job').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const appDir = path.join(OUT_DIR, 'applications', safeId.substring(0, 60));
    await ensureDir(appDir);
    const htmlPath = path.join(appDir, 'cover-letter.html');
    await fs.writeFile(htmlPath, html, 'utf8');
    const pdfPath = path.join(appDir, 'cover-letter.pdf');
    await exportPdf(htmlPath, pdfPath).catch(()=>{});
    count++;
  }
  return count;
}
