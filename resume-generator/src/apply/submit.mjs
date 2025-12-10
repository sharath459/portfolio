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

async function autoFillGreenhouse(page, job, profile, resumePath, coverPath) {
	// Basic identity + uploads
	const entries = [
		{ sel: 'input#first_name, input[name="first_name" i], input[name*="first" i]', val: profile.firstName },
		{ sel: 'input#last_name, input[name="last_name" i], input[name*="last" i]', val: profile.lastName },
		{ sel: 'input#email, input[name="email" i]', val: profile.email },
		{ sel: 'input#phone, input[name="phone" i], input[type="tel"]', val: profile.phone },
		{ sel: 'input[type="file"][name*="resume" i], input[type="file"][id*="resume" i]', file: resumePath },
		{ sel: 'input[type="file"][name*="cover" i], input[type="file"][id*="cover" i]', file: coverPath }
	];
	for (const e of entries) {
		const handle = await page.$(e.sel);
		if (!handle) continue;
		if (e.file) {
			if (e.file) await handle.uploadFile(e.file).catch(()=>{});
		} else if (e.val) {
			await handle.click({ clickCount: 3 }).catch(()=>{});
			await handle.type(String(e.val)).catch(()=>{});
		}
	}

	// Generic textareas: add short neutral content
	const textareas = await page.$$('textarea');
	for (const ta of textareas) {
		const v = await page.evaluate(el => el.value, ta).catch(()=>null);
		const disabled = await page.evaluate(el => el.disabled, ta).catch(()=>false);
		if (!disabled && (!v || v.trim() === '')) {
			await ta.type('See attached resume.').catch(()=>{});
		}
	}

	// Selects: prefer a neutral option (Prefer not to say/Decline). Otherwise first non-placeholder.
	const selects = await page.$$('select');
	for (const sel of selects) {
		const disabled = await page.evaluate(el => el.disabled, sel).catch(()=>false);
		if (disabled) continue;
		const options = await sel.$$('option');
		let chosen = null;
		for (const o of options) {
			const text = (await page.evaluate(el => el.textContent || '', o)).trim().toLowerCase();
			const val = (await page.evaluate(el => el.value || '', o)).trim();
			if (!val) continue;
			if (text.includes('prefer not') || text.includes('decline')) { chosen = val; break; }
		}
		if (!chosen) {
			for (const o of options) {
				const val = (await page.evaluate(el => el.value || '', o)).trim();
				if (val) { chosen = val; break; }
			}
		}
		if (chosen) await sel.select(chosen).catch(()=>{});
	}

	// Required checkboxes: check them
	const reqChecks = await page.$$('input[type="checkbox"][required]');
	for (const c of reqChecks) { await page.evaluate(el => { if (!el.checked) el.click(); }, c).catch(()=>{}); }

	// Required radios: pick first or profile-preferred values
	const radios = await page.$$('input[type="radio"]');
	const radioNames = new Set();
	for (const r of radios) {
		const name = await page.evaluate(el => el.name, r).catch(()=>null);
		if (!name || radioNames.has(name)) continue;
		radioNames.add(name);
		// Try to pick label with Yes/Decline/Prefer not; fallback first enabled radio
		const group = await page.$$(`input[type="radio"][name="${name}"]`);
		let picked = false;
		for (const rr of group) {
			const disabled = await page.evaluate(el => el.disabled, rr).catch(()=>false);
			if (disabled) continue;
			const id = await page.evaluate(el => el.id, rr).catch(()=>null);
			let labelText = '';
			if (id) {
				const lbl = await page.$(`label[for="${id}"]`).catch(()=>null);
				if (lbl) labelText = (await page.evaluate(el => el.textContent || '', lbl)).toLowerCase();
			}
			if (labelText.includes('prefer not') || labelText.includes('decline') || labelText.includes('yes')) {
				await rr.click().catch(()=>{}); picked = true; break;
			}
		}
		if (!picked && group[0]) await group[0].click().catch(()=>{});
	}
}

async function trySubmitGreenhouse(page) {
	// Heuristics for Greenhouse submit
	// Common selectors: button[type="submit"], .submit button, [data-qa="apply-button"]
	const buttonSelectors = [
		'form button[type="submit"]',
		'form [type="submit"]',
		'button[data-qa="apply-button"]',
		'button#submit_app, input[type="submit"]'
	];
	const xpaths = [
		"//button[contains(translate(normalize-space(text()), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'),'submit')]",
		"//button[contains(translate(normalize-space(text()), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'),'apply')]",
		"//button[contains(translate(normalize-space(text()), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'),'continue')]",
		"//button[contains(translate(normalize-space(text()), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'),'next')]"
	];
	const maxSteps = 5;
	for (let step = 0; step < maxSteps; step++) {
		// Try click a visible button
		let clicked = false;
		for (const sel of buttonSelectors) {
			const handle = await page.$(sel);
			if (handle) { await handle.click().catch(()=>{}); clicked = true; break; }
		}
		if (!clicked) {
			for (const xp of xpaths) {
				const handles = await page.$x(xp).catch(()=>[]);
				if (handles && handles[0]) { await handles[0].click().catch(()=>{}); clicked = true; break; }
			}
		}
		// Wait briefly for page changes
		await page.waitForTimeout(1200);
		try { await page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 6000 }).catch(()=>{}); } catch {}
		const bodyText = (await page.content()).toLowerCase();
		if (bodyText.includes('thank you') || bodyText.includes('application received') || bodyText.includes('we have received your application') || page.url().includes('thank_you')) {
			return true;
		}
	}
	return false;
}

async function trySubmitLever(page) {
	// Lever forms often use form[action*="apply"] button[type=submit]
	const selectors = [
		'form button[type="submit"]',
		'form [type="submit"]',
		'button#submit-app, input[type="submit"]'
	];
	for (const sel of selectors) {
		const handle = await page.$(sel);
		if (handle) {
			await handle.click().catch(()=>{});
			try { await page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 8000 }).catch(()=>{}); } catch {}
			const bodyText = (await page.content()).toLowerCase();
			if (bodyText.includes('thank you') || bodyText.includes('application submitted') || bodyText.includes('application received')) {
				return true;
			}
		}
	}
	return false;
}

async function autoFillLever(page, job, profile, resumePath, coverPath) {
	// Lever has similar basic fields
	const entries = [
		{ sel: 'input[name="name"]', val: `${profile.firstName} ${profile.lastName}` },
		{ sel: 'input[name="email"]', val: profile.email },
		{ sel: 'input[name="phone"]', val: profile.phone },
		{ sel: 'input[type="file"][name*="resume" i], input[type="file"][id*="resume" i]', file: resumePath },
		{ sel: 'input[type="file"][name*="cover" i], input[type="file"][id*="cover" i]', file: coverPath }
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
	// Fill miscellaneous textareas
	const textareas = await page.$$('textarea');
	for (const ta of textareas) {
		const v = await page.evaluate(el => el.value, ta).catch(()=>null);
		const disabled = await page.evaluate(el => el.disabled, ta).catch(()=>false);
		if (!disabled && (!v || v.trim() === '')) {
			await ta.type('See attached resume.').catch(()=>{});
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
	const coverFile = (await fs.stat(path.join(appDir, 'cover-letter.pdf')).catch(()=>null)) ? path.join(appDir, 'cover-letter.pdf') : null;

		processed++;

			if (opts.dryRun) { continue; }

		try {
			await page.goto(job.url, { waitUntil: 'domcontentloaded', timeout: 60000 });
				// Prepare appDir and optional screenshots
				const safeId = (job.title || 'job').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
				const appDir = path.join(OUT_DIR, 'applications', safeId.substring(0, 60));
				await fs.mkdir(appDir, { recursive: true });
				if (opts.screenshots) {
					const beforePng = path.join(appDir, 'before.png');
					await page.screenshot({ path: beforePng, fullPage: true }).catch(()=>{});
				}
			if (job.source === 'greenhouse') {
				await autoFillGreenhouse(page, job, profile, resumeFile || '', coverFile || '');
				if (opts.unsafeSubmit) {
          const ok = await trySubmitGreenhouse(page);
          if (ok) submitted++;
        }
			} else if (job.source === 'lever') {
				await autoFillLever(page, job, profile, resumeFile || '', coverFile || '');
				if (opts.unsafeSubmit) {
          const ok = await trySubmitLever(page);
          if (ok) submitted++;
        }
			} else {
				await openInBrowser(job.url);
				opened++;
				continue;
			}
				if (opts.screenshots) {
					const afterPng = path.join(appDir, 'after.png');
					await page.screenshot({ path: afterPng, fullPage: true }).catch(()=>{});
				}
			// If unsafeSubmit wasn't enabled or submit heuristics didn't detect completion, we don't increment submitted
		} catch (e) {
				// Attempt an error screenshot too if navigation failed after we had a page
				try {
					if (opts.screenshots) {
						const safeId = (job.title || 'job').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
						const appDir = path.join(OUT_DIR, 'applications', safeId.substring(0, 60));
						await fs.mkdir(appDir, { recursive: true });
						await page.screenshot({ path: path.join(appDir, 'error.png'), fullPage: true }).catch(()=>{});
					}
				} catch {}
			await openInBrowser(job.url);
			opened++;
		}
	}

	await browser.close().catch(()=>{});

	return { processed, submitted, opened };
}

