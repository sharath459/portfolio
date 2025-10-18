# One‑Page ATS Resume: Rules & Sources

This resume follows widely recommended ATS guidelines to ensure parsing accuracy and recruiter readability.

- Single column layout; no text in tables or multi‑column grids
- Standard fonts, clear section headings (EXPERIENCE, EDUCATION, SKILLS)
- Consistent date formats and job title → company → location order
- No images, icons, or text embedded in graphics; minimal symbols
- Bullet points start with strong verbs, include quantified impact
- Contact details as live text (email, phone, LinkedIn, GitHub, portfolio URL)
- File formats: HTML source with print CSS, exported to PDF (US Letter)

Sources
- Jobscan: How to Make an ATS‑Friendly Resume — https://www.jobscan.co/blog/ats-resume/
- Indeed Career Guide: What is an ATS‑friendly resume? — https://www.indeed.com/career-advice/resumes-cover-letters/ats-resume
- Columbia Univ. CCE: Resume Formatting — https://www.careereducation.columbia.edu/resources/resume-guidelines
- Purdue OWL: Résumé Workshop — https://owl.purdue.edu/owl/job_search_writing/resumes_and_vitas/

Regeneration
- Windows: scripts/export-pdf.cmd (uses installed Edge/Chrome headless)
- Node: npm run resume:pdf (uses puppeteer‑core + local browser)
