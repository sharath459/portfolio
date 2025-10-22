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
  const weights = profile.keywordWeights || {}; // e.g., { "Databricks": 4, "Python": 3 }
  const preferSeniority = (profile.preferSeniority || '').toLowerCase(); // 'manager' | 'senior' | ''

  function seniorityScore(title) {
    const t = (title || '').toLowerCase();
    let s = 0;
    if (/manager|lead|head|director/.test(t)) s += 3;
    if (/senior|sr\.?/.test(t)) s += 2;
    if (/principal|staff/.test(t)) s += 2;
    if (preferSeniority === 'manager' && /manager|lead|head/.test(t)) s += 2;
    if (preferSeniority === 'senior' && /senior|sr\.?/.test(t)) s += 1;
    return s;
  }

  const ranked = jobs.map(j => {
    const title = (j.title || '').toLowerCase();
    const jd = (j.jd || '').toLowerCase();
    const location = (j.location || '').toLowerCase();
    let score = 0;
    for (const kw of keywords) {
      const kwl = kw.toLowerCase();
      const w = Number.isFinite(weights[kw]) ? Number(weights[kw]) : 1;
      score += w * (3 * countOccurrences(title, kwl) + 1 * countOccurrences(jd, kwl));
      if (kwl === 'business intelligence') score += w * 2 * countOccurrences(title, 'bi');
    }
    if (!locations.length || locations.some(l => location.includes(l))) score += 5;
    score += seniorityScore(j.title);
    return { ...j, score };
  });

  ranked.sort((a, b) => (b.score ?? 0) - (a.score ?? 0));
  return ranked;
}
