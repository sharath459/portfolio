import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const CONFIG_DIR = path.join(__dirname, 'config');

async function readJsonMaybe(file) { try { return JSON.parse(await fs.readFile(file, 'utf8')); } catch { return null; } }

function countOccurrences(text, term) {
  if (!text || !term) return 0;
  const re = new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
  return (text.match(re) || []).length;
}

export async function rankJobs(jobs) {
  const profile = await readJsonMaybe(path.join(CONFIG_DIR, 'profile.json')) || {};
  const keywords = (profile.keywords || []).map(k => String(k).trim()).filter(Boolean);
  const locations = (profile.locations || []).map(l => String(l).trim().toLowerCase());

  const ranked = jobs.map(j => {
    const title = (j.title || '').toLowerCase();
    const jd = (j.jd || '').toLowerCase();
    const location = (j.location || '').toLowerCase();
    let score = 0;
    for (const kw of keywords) {
      const kwl = kw.toLowerCase();
      score += 3 * countOccurrences(title, kwl);
      score += 1 * countOccurrences(jd, kwl);
      // small bonus if keyword abbreviation BI found when keyword is Business Intelligence
      if (kwl === 'business intelligence') score += 2 * countOccurrences(title, 'bi');
    }
    if (!locations.length || locations.some(l => location.includes(l))) score += 5;
    // Seniority heuristic
    if (/senior|sr\.?|lead|manager/i.test(j.title || '')) score += 2;
    return { ...j, score };
  });

  ranked.sort((a, b) => (b.score ?? 0) - (a.score ?? 0));
  return ranked;
}
