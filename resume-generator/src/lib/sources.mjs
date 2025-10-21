import fs from 'node:fs/promises';
import fssync from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { load as loadHtml } from 'cheerio';
import { parseDocxResume } from './docx-parser.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const KNOWN_SKILLS = [
  // Data & Analytics (priority for this JD)
  'SQL','Python','R','Tableau','Power BI','Looker','QuickSight','Redshift','dbt','Databricks',
  'ETL','ELT','Data Warehousing','Business Intelligence','Analytics','Data Science','BI',
  'Machine Learning','Predictive Modeling','Forecasting','Statistical Analysis',
  // Engineering & Tools
  'Jira','Rally','GitHub','Jenkins','SonarQube','ServiceNow','Agile','DevOps','SDLC',
  'AWS','Azure','GCP','S3','Athena','Lambda',
  // Programming & Web (secondary)
  'JavaScript','TypeScript','React','Next.js','Node.js','Tailwind','CSS','HTML','Framer Motion',
  'Git','GitHub Actions','CI/CD','Docker','Kubernetes',
  // Database
  'NoSQL','MongoDB','PostgreSQL','Redis','MySQL'
];

function uniq(arr) { return Array.from(new Set(arr.filter(Boolean).map(s => String(s).trim()))); }

function extractSkillsFromText(text) {
  const lc = text.toLowerCase();
  const found = new Set();
  for (const k of KNOWN_SKILLS) {
    if (lc.includes(k.toLowerCase())) found.add(k);
  }
  return Array.from(found);
}

async function readMaybe(file) {
  try { return await fs.readFile(file, 'utf8'); } catch { return null; }
}

export async function parseResumeOnePage(htmlPath) {
  const html = await readMaybe(htmlPath);
  if (!html) return {};
  const $ = loadHtml(html);
  const name = $('h1').first().text().trim() || null;
  
  // Extract email, phone, location from contact section
  let email = '';
  let phone = '';
  let location = '';
  $('a[href^="mailto:"]').first().each((_, a) => {
    email = $(a).text().trim() || $(a).attr('href').replace('mailto:', '');
  });
  
  const contactLinks = [];
  $('a[href]').each((_, a) => {
    const url = $(a).attr('href');
    const label = $(a).text().trim();
    if (url && label && !url.startsWith('mailto:')) contactLinks.push({ label, url });
  });
  
  // Extract summary from the paragraph after header
  let summary = '';
  const summaryP = $('section[aria-label="summary"] p').first();
  if (summaryP.length) summary = summaryP.text().replace(/\s+/g, ' ').trim();
  
  // Collect skills from the Skills section
  const skills = new Set();
  $('section[aria-label="skills"] .pill, section[aria-label="skills"] .print-only').each((_, el) => {
    const text = $(el).text();
    // split on · or comma
    const parts = text.split(/[·,]/).map(s => s.trim()).filter(Boolean);
    for (const p of parts) {
      for (const s of extractSkillsFromText(p)) skills.add(s);
    }
  });
  
  // Parse Experience section: extract role, company, date, bullets
  const experiences = [];
  $('section[aria-label="experience"] .row').each((_, row) => {
    const roleCompany = $(row).find('.role, .company');
    const dateElem = $(row).find('.date');
    if (!roleCompany.length) return;
    const role = $(row).find('.role').text().trim();
    const company = $(row).find('.company').text().trim();
    const period = dateElem.text().trim();
    // next ul
    const nextUl = $(row).next('ul');
    const bullets = [];
    nextUl.find('li').each((_, li) => bullets.push($(li).text().replace(/\s+/g, ' ').trim()));
    if (role || company) {
      experiences.push({ role, company, period, bullets });
    }
  });
  
  // Extract education
  let education = '';
  $('section[aria-label="education"] div').first().each((_, div) => {
    education = $(div).text().trim();
  });
  
  // Collect all bullets for highlights
  const allBullets = [];
  $('li').each((_, li) => allBullets.push($(li).text().replace(/\s+/g, ' ').trim()));
  
  return {
    name,
    contact: { 
      email: email || 'sharath459@gmail.com',
      phone: phone || '',
      location: location || '',
      links: uniq(contactLinks.map(l => JSON.stringify(l))).map(s => JSON.parse(s)) 
    },
    summary,
    skills: Array.from(skills),
    highlights: uniq(allBullets),
    experiences,
    education
  };
}

export async function parseResumeClassic(htmlPath) {
  const html = await readMaybe(htmlPath);
  if (!html) return {};
  const $ = loadHtml(html);
  const bullets = [];
  $('li').each((_, li) => bullets.push($(li).text().replace(/\s+/g, ' ').trim()));
  const skills = new Set();
  $('*').each((_, el) => {
    const text = $(el).text();
    for (const s of extractSkillsFromText(text)) skills.add(s);
  });
  return { skills: Array.from(skills), highlights: uniq(bullets) };
}

export async function parseMemoryBank(mdDir) {
  const exists = fssync.existsSync(mdDir);
  if (!exists) return {};
  const files = (await fs.readdir(mdDir).catch(() => []))
    .filter(f => f.toLowerCase().endsWith('.md'));
  const bullets = [];
  const skills = new Set();
  for (const f of files) {
    const content = await readMaybe(path.join(mdDir, f));
    if (!content) continue;
    // bullets: lines starting with -, *, or •
    const lines = content.replace(/\r/g, '').split('\n');
    for (const line of lines) {
      const m = line.match(/^\s*[\-*•]\s+(.+)/);
      if (m) bullets.push(m[1].trim());
      for (const s of extractSkillsFromText(line)) skills.add(s);
    }
  }
  return { highlights: uniq(bullets), skills: Array.from(skills) };
}

export async function loadAllSources() {
  // repo root is two levels up from this file: src/lib -> resume-generator -> portfolio
  const repoRoot = path.resolve(__dirname, '../../..');
  const resumeDir = path.join(repoRoot, 'public', 'Resume');
  const memoryBankDir = path.join(repoRoot, '.github', 'memory-bank');

  const baseJsonPath = path.resolve(__dirname, '../../data/sources/base.json');
  const baseJson = await readMaybe(baseJsonPath);
  const base = baseJson ? JSON.parse(baseJson) : {};

  const onePage = await parseResumeOnePage(path.join(resumeDir, 'Sharath_Resume_OnePage.html'));
  const classic = await parseResumeClassic(path.join(resumeDir, 'Sharath_Resume_Classic.html'));
  const memory = await parseMemoryBank(memoryBankDir);

  // Merge with preference order: base.json defaults < memory bank < classic < onePage
  const name = onePage.name || base.name;
  const summary = onePage.summary || base.summary || '';
  const email = onePage.contact?.email || base.contact?.email || 'sharath459@gmail.com';
  const phone = onePage.contact?.phone || base.contact?.phone || '';
  const location = onePage.contact?.location || base.contact?.location || '';
  
  const links = uniq([
    ...(base.contact?.links || []).map(l => JSON.stringify(l)),
    ...(onePage.contact?.links || []).map(l => JSON.stringify(l))
  ]).map(s => JSON.parse(s));

  // Parse Oct 2025 DOCX (highest priority)
  const oct2025Path = path.resolve(__dirname, '../../../public/Resume/Sharath_Resume_Oct_2025.docx');
  let oct2025 = {};
  if (fssync.existsSync(oct2025Path)) {
    try {
      oct2025 = await parseDocxResume(oct2025Path) || {};
      console.log('✓ Parsed Oct 2025 DOCX resume');
    } catch (err) {
      console.warn('Could not parse Oct 2025 DOCX:', err.message);
    }
  }

  const skills = uniq([
    ...(base.skills || []),
    ...(memory.skills || []),
    ...(classic.skills || []),
    ...(onePage.skills || []),
    ...(oct2025.skills || [])
  ]);

  const highlights = uniq([
    ...(base.highlights || []),
    ...(memory.highlights || []),
    ...(classic.highlights || []),
    ...(onePage.highlights || []),
    ...(oct2025.highlights || [])
  ]);

  const experiences = oct2025.experiences?.length ? oct2025.experiences : 
                     (onePage.experiences?.length ? onePage.experiences : (base.experiences || []));
  const projects = base.projects || [];
  const education = oct2025.education || onePage.education || base.education || 'BE, Mechanical Engineering — Visvesvaraya Technological University';
  const certifications = oct2025.certifications || base.certifications || '';

  const merged = {
    name: oct2025.name || name || base.name || 'Sharath',
    contact: oct2025.contact?.email ? oct2025.contact : { email, phone, location, links },
    summary: oct2025.summary || summary,
    skills,
    highlights,
    experiences,
    projects,
    education,
    certifications
  };

  return merged;
}
