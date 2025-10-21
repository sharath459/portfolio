import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseJobDescription } from '../lib/jd-parser.mjs';
import { generateTailoredResumeModel } from '../lib/generate.mjs';
import { renderResumeHTML } from '../lib/render.mjs';
import { loadAllSources } from '../lib/sources.mjs';
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
	await page.pdf({ path: pdfPath, format: 'Letter', printBackground: true, margin: { top: '0.4in', bottom: '0.4in', left: '0.4in', right: '0.4in' } });
	await browser.close();
	return true;
}

export async function tailorResumes(jobs) {
	const base = await loadAllSources();
	let count = 0;
	for (const job of jobs) {
		if (!job.jd || job.jd.length < 50) continue;
		const jd = await parseJobDescription(job.jd);
		const model = await generateTailoredResumeModel({ base, jd });
		const html = await renderResumeHTML(model);
		const safeId = (job.title || 'job').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
		const appDir = path.join(OUT_DIR, 'applications', safeId.substring(0, 60));
		await ensureDir(appDir);
		const htmlPath = path.join(appDir, 'resume.html');
		await fs.writeFile(htmlPath, html, 'utf8');
			// Also generate PDF per application for upload convenience
			const pdfPath = path.join(appDir, 'resume.pdf');
			await exportPdf(htmlPath, pdfPath).catch(()=>{});
		count++;
	}
	return count;
}

