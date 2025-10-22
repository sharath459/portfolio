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
	const stats = await submitApplications(db.jobs, { dryRun });
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

const cmd = process.argv[2] || 'run';
switch (cmd) {
	case 'scan': await cmdScan(); break;
	case 'fetch-jd': await cmdFetchJD(); break;
	case 'tailor': await cmdTailor(); break;
	case 'apply': await cmdApply(); break;
	case 'run': await cmdRun(); break;
	default:
		console.log('Usage: node src/apply/index.mjs [scan|fetch-jd|tailor|apply|run]');
}

