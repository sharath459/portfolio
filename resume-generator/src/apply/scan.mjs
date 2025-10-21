import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { load as loadHtml } from 'cheerio';
import { fetch as undiciFetch } from 'undici';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONFIG_DIR = path.join(__dirname, 'config');

async function readJsonMaybe(file) { try { return JSON.parse(await fs.readFile(file, 'utf8')); } catch { return null; } }

function norm(s) { return String(s || '').trim(); }

const KEYWORDS_DEFAULT = [
	'Senior BI', 'Business Intelligence', 'Analytics Manager', 'Analytical Manager',
	'Data Engineering Manager', 'Manager, Data', 'Manager - Data', 'Senior Analytics'
];

const LOCATIONS_DEFAULT = ['Bangalore', 'Bengaluru'];

function matchesFilters(job, keywords, locations) {
	const title = (job.title || '').toLowerCase();
	const loc = (job.location || '').toLowerCase();
	const kwHit = keywords.some(k => title.includes(k.toLowerCase()) ||
		(k.toLowerCase() === 'business intelligence' && title.includes('bi')));
	const locHit = locations.some(l => loc.includes(l.toLowerCase())) || !job.location;
	return kwHit && locHit;
}

async function fetchText(url) {
	const res = await undiciFetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (JobScanner/1.0)' } });
	if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
	return await res.text();
}

async function scanGreenhouseBoard(company) {
	const api = `https://boards-api.greenhouse.io/v1/boards/${company}/jobs`;
	const json = await (await undiciFetch(api)).json();
	const jobs = [];
		for (const j of json.jobs || []) {
		jobs.push({
			source: 'greenhouse', company,
			title: norm(j.title),
			location: norm(j.location?.name || ''),
				url: `https://boards.greenhouse.io/${company}/jobs/${j.id}`
		});
	}
	return jobs;
}

async function scanLeverBoard(company) {
	const api = `https://jobs.lever.co/v0/postings/${company}?mode=json`;
	let list = [];
	try {
		const res = await undiciFetch(api);
		const txt = await res.text();
		list = JSON.parse(txt);
		if (!Array.isArray(list)) list = [];
	} catch {
		list = [];
	}
	const jobs = [];
	for (const j of list || []) {
		jobs.push({
			source: 'lever', company,
			title: norm(j.text || j.title),
			location: norm(j.categories?.location || ''),
			url: j.hostedUrl || j.applyUrl || j.urls?.show || ''
		});
	}
	return jobs;
}

export async function scanJobs() {
	const companies = await readJsonMaybe(path.join(CONFIG_DIR, 'companies.json')) || {
		greenhouse: ["databricks", "snowflake", "figma", "notion", "stripe"],
		lever: ["atlassian", "rippling", "coinbase", "affirm"]
	};
	const profile = await readJsonMaybe(path.join(CONFIG_DIR, 'profile.json')) || {};
	const keywords = profile.keywords || KEYWORDS_DEFAULT;
	const locations = profile.locations || LOCATIONS_DEFAULT;

	const boards = [];
	for (const gh of (companies.greenhouse || [])) boards.push({ type: 'greenhouse', id: gh });
	for (const lv of (companies.lever || [])) boards.push({ type: 'lever', id: lv });

	const results = [];
	for (const b of boards) {
		try {
			const list = b.type === 'greenhouse' ? await scanGreenhouseBoard(b.id) : await scanLeverBoard(b.id);
			for (const j of list) {
				if (matchesFilters(j, keywords, locations)) results.push(j);
			}
		} catch (e) {
			console.warn(`Scan failed for ${b.type}:${b.id}: ${e.message}`);
		}
	}
	return results;
}

