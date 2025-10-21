#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import inquirer from 'inquirer';
import { fileURLToPath } from 'node:url';
import { parseJobDescription } from './lib/jd-parser.mjs';
import { generateTailoredResumeModel } from './lib/generate.mjs';
import { renderResumeHTML } from './lib/render.mjs';
import { loadAllSources } from './lib/sources.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function ensureDirs(outDir) {
  await fs.mkdir(outDir, { recursive: true });
}

async function readTextMaybe(filePath) {
  try {
    return await fs.readFile(filePath, 'utf8');
  } catch {
    return null;
  }
}

async function main() {
  const jobsDir = path.resolve(__dirname, '../jobs');
  const outDir = path.resolve(__dirname, '../out');
  await ensureDirs(outDir);

  const jdArg = process.argv[2];
  let jdPath = jdArg ? path.resolve(process.cwd(), jdArg) : null;
  if (!jdPath) {
    const files = await fs.readdir(jobsDir).catch(() => []);
    const defaultChoices = files.filter(f => f.toLowerCase().endsWith('.txt'));
    const answers = await inquirer.prompt([
      {
        type: 'list',
        name: 'jdFile',
        message: 'Select a job description or choose "manual":',
        choices: [...defaultChoices, new inquirer.Separator(), 'manual']
      }
    ]);
    if (answers.jdFile === 'manual') {
      const manual = await inquirer.prompt([
        { type: 'editor', name: 'jdText', message: 'Paste the job description (save/close editor to continue):' }
      ]);
      const ts = Date.now();
      jdPath = path.join(outDir, `jd-${ts}.txt`);
      await fs.writeFile(jdPath, manual.jdText || '', 'utf8');
    } else {
      jdPath = path.join(jobsDir, answers.jdFile);
    }
  }

  const jdRaw = await fs.readFile(jdPath, 'utf8');
  const jd = await parseJobDescription(jdRaw);

  // Load merged data from multiple sources (resume HTML + memory bank + base.json)
  const base = await loadAllSources();

  const model = await generateTailoredResumeModel({ base, jd });
  const html = await renderResumeHTML(model);

  const baseName = path.basename(jdPath, path.extname(jdPath));
  const outHtml = path.join(outDir, `${baseName}-tailored.html`);
  await fs.writeFile(outHtml, html, 'utf8');

  console.log(`Generated: ${path.relative(process.cwd(), outHtml)}`);
  console.log('Next: run "npm run build:pdf" to export PDF.');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
