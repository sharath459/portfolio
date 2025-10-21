import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import inquirer from 'inquirer';
import { launch } from 'puppeteer-core';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUT_DIR = path.resolve(__dirname, '../../out');

async function defaultBrowserExecutable() {
	// Try Microsoft Edge on Windows (as used for PDF export)
	const edge = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
	return edge;
}

async function openInBrowser(url) {
	const exec = await defaultBrowserExecutable();
	const { spawn } = await import('node:child_process');
	spawn(exec, [url], { stdio: 'ignore', detached: true }).unref();
}

async function autoFillGreenhouse(page, job, profile, resumePath) {
	// Best-effort form fields commonly present on Greenhouse
	const entries = [
		{ sel: 'input#first_name, input[name="first_name"]', val: profile.firstName },
		{ sel: 'input#last_name, input[name="last_name"]', val: profile.lastName },
		{ sel: 'input#email, input[name="email"]', val: profile.email },
		{ sel: 'input#phone, input[name="phone"]', val: profile.phone },
		{ sel: 'input[type="file"][name*="resume" i], input[type="file"][id*="resume" i]', file: resumePath }
	];
	for (const e of entries) {
		if (!e.val && !e.file) continue;
		const handle = await page.$(e.sel);
		if (!handle) continue;
		if (e.file) {
			await handle.uploadFile(e.file);
		} else {
			await handle.click({ clickCount: 3 }).catch(()=>{});
			await handle.type(e.val).catch(()=>{});
		}
	}
}

async function autoFillLever(page, job, profile, resumePath) {
	// Lever has similar basic fields
	const entries = [
		{ sel: 'input[name="name"]', val: `${profile.firstName} ${profile.lastName}` },
		{ sel: 'input[name="email"]', val: profile.email },
		{ sel: 'input[name="phone"]', val: profile.phone },
		{ sel: 'input[type="file"][name*="resume" i], input[type="file"][id*="resume" i]', file: resumePath }
	];
	for (const e of entries) {
		if (!e.val && !e.file) continue;
		const handle = await page.$(e.sel);
		if (!handle) continue;
		if (e.file) {
			await handle.uploadFile(e.file);
		} else {
			await handle.click({ clickCount: 3 }).catch(()=>{});
			await handle.type(e.val).catch(()=>{});
		}
	}
}

export async function submitApplications(jobs, opts = {}) {
	const profilePath = path.resolve(__dirname, './config/profile.json');
	let profile = {};
	try { profile = JSON.parse(await fs.readFile(profilePath, 'utf8')); } catch {}
	if (!profile.email) {
		const a = await inquirer.prompt([
			{ name: 'firstName', message: 'First name', default: 'Sharath' },
			{ name: 'lastName', message: 'Last name', default: '' },
			{ name: 'email', message: 'Email', default: 'sharath459@gmail.com' },
			{ name: 'phone', message: 'Phone', default: '' }
		]);
		profile = a;
	}

	const browserExec = await defaultBrowserExecutable();
	const browser = await launch({ executablePath: browserExec, headless: false });
	const page = await browser.newPage();

	let processed = 0, submitted = 0, opened = 0;

		for (const job of jobs) {
		// Use tailored resume if available
		const safeId = (job.title || 'job').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
		const appDir = path.join(OUT_DIR, 'applications', safeId.substring(0, 60));
		const resumeHtml = path.join(appDir, 'resume.html');
		const resumePdf = path.join(appDir, 'resume.pdf');
		const resumeFile = (await fs.stat(resumePdf).catch(()=>null)) ? resumePdf : null;

		processed++;

			if (opts.dryRun) { continue; }

		try {
			await page.goto(job.url, { waitUntil: 'domcontentloaded', timeout: 60000 });
			if (job.source === 'greenhouse') {
				await autoFillGreenhouse(page, job, profile, resumeFile || '');
			} else if (job.source === 'lever') {
				await autoFillLever(page, job, profile, resumeFile || '');
			} else {
				await openInBrowser(job.url);
				opened++;
				continue;
			}
			submitted += 0; // We avoid auto-clicking submit for safety
		} catch (e) {
			await openInBrowser(job.url);
			opened++;
		}
	}

	await browser.close().catch(()=>{});

	return { processed, submitted, opened };
}

