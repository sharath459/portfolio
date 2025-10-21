import { load as loadHtml } from 'cheerio';
import { fetch as undiciFetch } from 'undici';

async function fetchText(url) {
	const res = await undiciFetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (JDFetcher/1.0)' } });
	if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
	return await res.text();
}

function extractJDFromGreenhouse(html) {
	const $ = loadHtml(html);
	const title = $('h1').first().text().trim();
	const candidates = $('#content, .content, .opening, .job, .job__description, main, #main, article, section');
	let best = '';
	candidates.each((_, el) => {
		const text = $(el).text().replace(/\s+/g, ' ').trim();
		if (text.length > best.length) best = text;
	});
	const body = best || $('body').text().replace(/\s+/g, ' ').trim();
	return { title, jd: body };
}

function extractJDFromLever(html) {
	const $ = loadHtml(html);
	const title = $('h2').first().text().trim() || $('h1').first().text().trim();
	const candidates = $('div.section-wrapper, div.content, .content, main, #main, article');
	let best = '';
	candidates.each((_, el) => {
		const text = $(el).text().replace(/\s+/g, ' ').trim();
		if (text.length > best.length) best = text;
	});
	const body = best || $('body').text().replace(/\s+/g, ' ').trim();
	return { title, jd: body };
}

export async function fetchJD(job) {
	const html = await fetchText(job.url);
	if (job.source === 'greenhouse') return { ...job, ...extractJDFromGreenhouse(html) };
	if (job.source === 'lever') return { ...job, ...extractJDFromLever(html) };
	// fallback generic
	const $ = loadHtml(html);
	const title = $('h1,h2').first().text().trim();
	const body = $('main,article,#content,.content').first().text().replace(/\s+/g, ' ').trim();
	return { ...job, title: title || job.title, jd: body };
}

export async function fetchAllJobDescriptions(jobs) {
	const updated = [];
	for (const j of jobs) {
		try { updated.push(await fetchJD(j)); }
		catch (e) { updated.push(j); }
	}
	return updated;
}

