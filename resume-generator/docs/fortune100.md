# Targeting Fortune 100 companies

This toolkit supports Greenhouse, Lever, Ashby, and Workday boards. Many Fortune 100 companies use Workday. You can configure targets in `src/apply/config/companies.json`.

It also supports Oracle Cloud Candidate Experience (fa.oraclecloud.com) used by companies like JPMorgan via the `oracle` section.

## How to find Workday tenant and site

1. Open the company careers page and a specific job posting.
2. In DevTools Network tab, search for a request like `/wday/cxs/{tenant}/{site}/search/jobs` or `/wday/cxs/{tenant}/{site}/jobs`.
3. Copy the `host`, `tenant`, and `site` segments and add to `companies.json`:

```json
{
  "workday": [
    { "host": "company.wd1.myworkdayjobs.com", "tenant": "company", "site": "Company_Careers" }
  ]
}
```

Notes:
- The `site` is case-sensitive and must match exactly (e.g., `External`, `NVIDIAExternalCareerSite`, `Comcast_Careers`).
- If the API returns nothing, try the localized site (e.g., `en-US/External` in the URL path may indicate the site name).

## Filters

Use `src/apply/config/profile.json` to set:
- `keywords`: role keywords (e.g., "Business Intelligence", "Analytics Manager")
- `locations`: locations to include (e.g., "Bengaluru", "Bangalore")
- `keywordWeights` and `preferSeniority` for ranking

## Running

- One-shot: `npm run jobs:run`
- Daily watch: `npm run jobs:watch` (set `WATCH_INTERVAL_HOURS` to change cadence)

Artifacts are saved under `resume-generator/out/applications/<job-id>/` (resume + cover letter, HTML + PDF).

## Oracle Cloud quick start

Add entries under the `oracle` section using the company’s Oracle Cloud host and site:

```
{
  "oracle": [
    { "host": "jpmc.fa.oraclecloud.com", "site": "JPMC" }
  ]
}
```

Find the exact `site` by opening a job and checking network requests containing `/hcmUI/CandidateExperience/en/sites/` (the segment after `/sites/` is case-sensitive).
