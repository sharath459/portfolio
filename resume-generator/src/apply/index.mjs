#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import inquirer from 'inquirer';
import { scanJobs } from './scan.mjs';
import { fetchAllJobDescriptions } from './jd-fetch.mjs';
import { tailorResumes } from './tailor.mjs';
import { submitApplications } from './submit.mjs';
import { rankJobs } from './rank.mjs';
import { generateCoverLetters } from './cover-letter.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUT_DIR = path.resolve(__dirname, '../../out');
const JOBS_JSON = path.join(OUT_DIR, 'jobs.json');
const APPLIED_JSON = path.join(OUT_DIR, 'applied.json');

async function ensureOut() { await fs.mkdir(OUT_DIR, { recursive: true }); }

async function readJobs() {
	await ensureOut();
	try {
		const parsed = JSON.parse(await fs.readFile(JOBS_JSON, 'utf8'));
		return Array.isArray(parsed) ? { jobs: parsed } : (parsed || { jobs: [] });
	} catch { return { jobs: [] }; }
}

async function writeJobs(db) {
	await ensureOut();
	await fs.writeFile(JOBS_JSON, JSON.stringify(db, null, 2), 'utf8');
}

async function readApplied() {
	await ensureOut();
	try { return JSON.parse(await fs.readFile(APPLIED_JSON, 'utf8')); } catch { return { urls: {} }; }
}
async function writeApplied(applied) {
	await ensureOut();
	await fs.writeFile(APPLIED_JSON, JSON.stringify(applied, null, 2), 'utf8');
}

async function cmdScan() {
	const db = await readJobs();
	const results = await scanJobs();
	// merge by url
	const byUrl = new Map(db.jobs.map(j => [j.url, j]));
	for (const j of results) {
		const prev = byUrl.get(j.url);
		byUrl.set(j.url, { ...(prev || {}), ...j, firstSeen: prev?.firstSeen || new Date().toISOString() });
	}
	const merged = { jobs: Array.from(byUrl.values()) };
	await writeJobs(merged);
	console.log(`Scanned ${results.length} jobs; total tracked: ${merged.jobs.length}`);
}

async function cmdFetchJD() {
	const db = await readJobs();
	const updated = await fetchAllJobDescriptions(db.jobs);
	await writeJobs({ jobs: updated });
	console.log(`Fetched JDs for ${updated.filter(j => j.jd && j.jd.length > 50).length} jobs`);
}

async function cmdTailor() {
	const db = await readJobs();
	const count = await tailorResumes(db.jobs);
	const profilePath = path.join(__dirname, 'config', 'profile.json');
	let profile = {};
	try { profile = JSON.parse(await fs.readFile(profilePath, 'utf8')); } catch {}
	const cl = await generateCoverLetters(db.jobs, { profile });
	console.log(`Tailored ${count} resumes`);
	if (cl) console.log(`Generated ${cl} cover letters`);
}

async function cmdApply() {
	const db = await readJobs();
	const argv = process.argv.slice(3);
	const envReally = process.env.APPLY_REALLY === '1' || process.env.APPLY_CONFIRM === '1';
	const envDry = process.env.APPLY_DRY === '1';
	const reallyFlag = argv.includes('--yes') || argv.includes('-y');
	const dryFlag = argv.includes('--dry');
	const oneRandom = argv.includes('--one-random');
	const unsafeSubmit = argv.includes('--unsafe-submit');
	const screenshots = argv.includes('--screenshots');
	const onlyProvider = (argv.find(a => a.startsWith('--provider=')) || '').split('=')[1];
	const onlyUrl = (argv.find(a => a.startsWith('--url=')) || '').split('=')[1];
	const reportOut = path.join(OUT_DIR, 'apply-report-latest.json');
	const reapply = argv.includes('--reapply');
	const really = envReally || reallyFlag;
	const dryRun = envDry || dryFlag || !really;
	if (!really && !dryRun) {
		const answers = await inquirer.prompt([
			{ type: 'confirm', name: 'really', message: 'Attempt automated apply where supported? (Opens browser where not supported)', default: false }
		]);
		if (!answers.really) {
			console.log('Dry-run apply (no browser navigation). Pass --yes to attempt automation.');
		}
	}
		// skip jobs already applied unless reapply flag set
		const applied = await readApplied();
		let candidates = db.jobs.filter(j => reapply ? true : !applied.urls?.[j.url]);
		if (onlyProvider) candidates = candidates.filter(j => (j.source || '').toLowerCase() === onlyProvider.toLowerCase());
		if (onlyUrl) candidates = candidates.filter(j => j.url === onlyUrl);
		let nowList = candidates;
		let picked = null;
		if (oneRandom) {
			if (!nowList.length) nowList = reapply ? db.jobs : db.jobs.filter(Boolean);
			picked = nowList[Math.floor(Math.random() * nowList.length)];
			nowList = picked ? [picked] : [];
		}

		// Prepare simple report metadata (for one job, if applicable)
		let perJobReport = null;
		if (nowList.length === 1) {
			const j = nowList[0];
			const safeId = (j.title || 'job').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
			const appDir = path.join(OUT_DIR, 'applications', safeId.substring(0, 60));
			const resumeHtml = path.join(appDir, 'resume.html');
			const resumePdf = path.join(appDir, 'resume.pdf');
			const coverHtml = path.join(appDir, 'cover-letter.html');
			const coverPdf = path.join(appDir, 'cover-letter.pdf');
			const beforePng = path.join(appDir, 'before.png');
			const afterPng = path.join(appDir, 'after.png');
			const exists = async p => !!(await fs.stat(p).catch(()=>null));
			perJobReport = {
				ts: new Date().toISOString(),
				mode: oneRandom ? 'one-random' : (onlyUrl ? 'one-url' : 'single'),
				dryRun,
				job: { title: j.title, company: j.company || '', location: j.location || '', url: j.url, source: j.source },
				artifacts: {
					resumeHtml,
					resumePdf,
					coverHtml,
					coverPdf,
					screenshots: { before: beforePng, after: afterPng }
				},
				automationSupported: ['greenhouse','lever'].includes((j.source||'').toLowerCase())
			};
			// Check existence lazily after tailoring typically; may already exist
			perJobReport.artifactsExists = {
				resumeHtml: await exists(resumeHtml),
				resumePdf: await exists(resumePdf),
				coverHtml: await exists(coverHtml),
				coverPdf: await exists(coverPdf),
				screenshots: {
					before: await exists(beforePng),
					after: await exists(afterPng)
				}
			};
		}

		console.log('[apply] jobs total:', db.jobs.length, 'selected:', nowList.length, 'flags:', { oneRandom, reapply, onlyUrl: !!onlyUrl, onlyProvider: !!onlyProvider, dryRun, unsafeSubmit, screenshots });
		const stats = await submitApplications(nowList, { dryRun, unsafeSubmit, screenshots });
		if (!dryRun) {
			const ts = new Date().toISOString();
		  for (const j of nowList) {
				applied.urls[j.url] = { appliedAt: ts, title: j.title, company: j.company };
			}
			await writeApplied(applied);
			// also mark applied in jobs.json for visibility
			const newJobs = db.jobs.map(j => applied.urls?.[j.url] ? { ...j, appliedAt: applied.urls[j.url].appliedAt } : j);
			await writeJobs({ jobs: newJobs });
		}
		// Write report for single job and global latest
		if (perJobReport) {
			perJobReport.result = stats;
			perJobReport.unsafeSubmit = unsafeSubmit;
			perJobReport.screenshots = screenshots;
			// Refresh artifact existence now that actions may have created them
			try {
				const exists = async p => !!(await fs.stat(p).catch(()=>null));
				perJobReport.artifactsExists = {
					resumeHtml: await exists(perJobReport.artifacts.resumeHtml),
					resumePdf: await exists(perJobReport.artifacts.resumePdf),
					coverHtml: await exists(perJobReport.artifacts.coverHtml),
					coverPdf: await exists(perJobReport.artifacts.coverPdf),
					screenshots: perJobReport.artifacts.screenshots ? {
						before: await exists(perJobReport.artifacts.screenshots.before),
						after: await exists(perJobReport.artifacts.screenshots.after)
					} : undefined
				};
			} catch {}
			try {
				const appDir = path.dirname(perJobReport.artifacts.resumeHtml);
				await fs.mkdir(appDir, { recursive: true });
				await fs.writeFile(path.join(appDir, 'report.json'), JSON.stringify(perJobReport, null, 2), 'utf8');
			} catch {}
			try {
				await fs.writeFile(reportOut, JSON.stringify(perJobReport, null, 2), 'utf8');
			} catch {}
			console.log('Apply report written to:', reportOut);
			console.log(`Applied to: ${perJobReport.job.title} @ ${perJobReport.job.company || perJobReport.job.source}\n${perJobReport.job.url}`);
		}
	console.log(`Applications processed: ${stats.processed}, submitted: ${stats.submitted}, opened: ${stats.opened}`);
}

async function cmdRun() {
	await cmdScan();
	await cmdFetchJD();
	// rank and show top matches
	const { jobs } = await readJobs();
	const ranked = await rankJobs(jobs);
	const top = ranked.slice(0, 10);
	console.log('Top matches:');
	for (const j of top) {
		console.log(`- [${j.score}] ${j.title} @ ${j.company || j.source} (${j.location || 'N/A'})\n  ${j.url}`);
	}
	await cmdTailor();
	await cmdApply();
}

async function cmdWatch() {
	const hours = Number(process.env.WATCH_INTERVAL_HOURS || 24);
	const ms = Math.max(1, hours) * 60 * 60 * 1000;
	console.log(`Watching every ${hours}h. Press Ctrl+C to stop.`);
	// immediate run first
	await cmdRun();
	setInterval(async () => {
		try { await cmdRun(); } catch (e) { console.error('Watch cycle error:', e.message); }
	}, ms);
}

const cmd = process.argv[2] || 'run';
switch (cmd) {
	case 'scan': await cmdScan(); break;
	case 'fetch-jd': await cmdFetchJD(); break;
	case 'tailor': await cmdTailor(); break;
	case 'apply': await cmdApply(); break;
	case 'run': await cmdRun(); break;
	case 'watch': await cmdWatch(); break;
	default:
		console.log('Usage: node src/apply/index.mjs [scan|fetch-jd|tailor|apply|run]');
}

