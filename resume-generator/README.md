# Resume Generator + Auto Apply

This tool tailors your resume to job descriptions and now automates the job search pipeline:

1) Scan jobs from Greenhouse and Lever boards for Bangalore-based senior BI/Analytics/Data Eng Manager roles
2) Fetch full JDs
3) Generate tailored resume (HTML + PDF) per job
4) Safely assist with applying by prefilling common fields and attaching your tailored resume (no auto-submit by default)

## Setup

Install dependencies:

```powershell
npm install
```

Optional: Configure filters and companies:

- `src/apply/config/profile.json` – your name/email/phone and keywords/locations
- `src/apply/config/companies.json` – Greenhouse/Lever boards to scan

## Commands

Scan jobs:

```powershell
npm run jobs:scan
```

Fetch job descriptions (stores in `out/jobs.json`):

```powershell
npm run jobs:fetch
```

Tailor resumes per job (outputs to `out/applications/<job-id>/resume.html` and `.pdf`):

```powershell
npm run jobs:tailor
```

Apply (safe by default):

```powershell
# Dry-run (no browser actions)
npm run jobs:apply -- --dry

# Attempt automation (prefill supported sites; may still open pages for manual steps)
npm run jobs:apply -- --yes
```

Alternatively, run the whole pipeline:

```powershell
npm run jobs:run
```

## How it works

- Scanning uses public JSON APIs:
   - Greenhouse: `https://boards-api.greenhouse.io/v1/boards/{company}/jobs`
   - Lever: `https://jobs.lever.co/v0/postings/{company}?mode=json`
- JD fetching scrapes the largest content block from the job page
- Tailoring reuses the one-page resume generator with JD skill/tone alignment
- Apply uses `puppeteer-core` to prefill basic fields and upload the per-job PDF

## Notes

- PDFs are generated per job using your installed Edge/Chrome.
- Auto-submit is disabled by default for safety. You can enable with `--yes`.
- Captchas, SSO logins, or custom fields may require manual completion.

# Resume Generator & Auto Apply

Generate a tailored, ATS-friendly resume for any job description and optionally auto-apply via provider adapters.

## Features
- Parse job description (JD) and extract requirements
- Build targeted resume from portfolio sources (One-Page HTML, Classic HTML, Memory Bank)
- Render single-page HTML + export to PDF (US Letter)
- Provider adapters (e.g., Greenhouse, Lever) for semi-automated applications
- CLI wizard + config files for repeatability

## Quickstart
1. Sources are autodiscovered from the parent portfolio project:
   - public/Resume/Sharath_Resume_OnePage.html (primary)
   - public/Resume/Sharath_Resume_Classic.html (secondary)
   - .github/memory-bank/*.md (context, bullets, skills)
2. Install deps and run wizard:

```powershell
cd resume-generator
npm install
node --env-file=.env src/index.mjs
```

Optional: run one-step make (generate + export):
```powershell
# Tip: set your browser path once per session if needed
$env:CHROME_PATH="C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"

npm run make
```

## Structure
- `src/index.mjs` — CLI entry: JD ingest, target role, output paths
- `src/generate.mjs` — Tailors resume sections to JD
- `src/render.mjs` — Build HTML from template + content model
- `src/build-pdf.mjs` — Export to PDF (local Chrome/Edge)
- `src/apply/` — Auto-apply adapters
- `templates/` — HTML/CSS templates
- `data/sources/` — Extracted/normalized content from portfolio

## Env
- Optional `CHROME_PATH` or `EDGE_PATH` for local browser (Windows: e.g., `C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe`)
- (Future) provider creds for auto apply

## Notes
- Keep resume strictly one page; use concise bullets with metrics
- No tables/graphics; standard fonts; clear headings
- Verify result visually before submission
