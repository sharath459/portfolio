# Hirist.com support

The scanner supports parsing job links from Hirist search pages.

## Configure

Add entries under `src/apply/config/companies.json`:

```json
{
  "hirist": [
    { "url": "https://www.hirist.com/search?q=analytics%20manager&l=Bengaluru" },
    { "url": "https://www.hirist.com/search?q=business%20intelligence%20manager&l=Bengaluru" }
  ]
}
```

Notes:
- You can paste any Hirist search URL. The parser will extract links containing `/job/` and use their anchor text as the title.
- Location is inferred heuristically (Bengaluru/Bangalore). The global filters in `profile.json` still apply.
- If Hirist changes its HTML, update the URLs or let me know to refine the selector.

## Run

Use the regular pipeline; Hirist results are merged with other boards:

```powershell
npm run jobs:scan
npm run jobs:fetch
npm run jobs:tailor
npm run jobs:apply
```
