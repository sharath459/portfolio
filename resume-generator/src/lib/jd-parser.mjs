// Minimal JD parser: extracts title, company, location, skills, responsibilities, requirements emphasis

export async function parseJobDescription(text) {
  const cleaned = text.replace(/\r/g, '').trim();
  const lines = cleaned.split(/\n+/);

  const titleMatch = cleaned.match(/\b(title|position|role)\s*[:\-]\s*(.+)/i);
  const companyMatch = cleaned.match(/\b(company|employer|organization)\s*[:\-]\s*(.+)/i);
  const locationMatch = cleaned.match(/\b(location|site|office)\s*[:\-]\s*(.+)/i);

  // naive bullet extraction
  const bullets = cleaned.match(/(^|\n)[\-\*\u2022]\s+.+/gmi)?.map(b => b.replace(/^\s*[\-\*\u2022]\s+/, '').trim()) || [];

  // keyword heuristics - expanded for data & analytics and productivity metrics
  const skills = Array.from(new Set(
    [...cleaned.matchAll(/\b(JavaScript|TypeScript|React|Next\.js|Node\.js|Tailwind|Framer Motion|AWS|Azure|GCP|SQL|NoSQL|Python|R|CI\/CD|Docker|Kubernetes|Jira|GitHub|Jenkins|SonarQube|Tableau|Power BI|Looker|QuickSight|Redshift|Snowflake|dbt|ETL|ELT|Databricks|Athena|S3|Matillion|Data Warehousing|Data Modeling|Data Engineering|Data Quality|Data Governance|Analytics|BI|Business Intelligence|Data Science|Machine Learning|Predictive Modeling|Forecasting|Statistical Analysis|SPACE|DORA|SDLC|Agile|DevOps|ServiceNow|Rally|throughput|cycle time|lead time|defect rates?|code quality|release frequency|deployment success|developer productivity|KPI|dashboard|visualization|reporting|stakeholder management|cross-functional collaboration|process optimization|Agentic AI|AI-driven|automation)\b/gi)]
      .map(m => m[0])
      .map(s => s.replace(/\.$/, ''))
  ));

  // Extract requirements/qualifications emphasis (lines with "require", "must", "years")
  const requirementLines = lines.filter(l => /\b(require|qualifications|must|years|experience|proficiency|expertise|strong|bachelor|master|throughput|cycle time|lead time|defect|quality|release|deployment|DORA|SPACE|developer productivity)\b/i.test(l));

  return {
    raw: cleaned,
    title: titleMatch?.[2]?.trim() || inferTitle(lines),
    company: companyMatch?.[2]?.trim() || inferCompany(lines),
    location: locationMatch?.[2]?.trim() || null,
    bullets,
    skills,
    requirementLines
  };
}

function inferTitle(lines) {
  // Guess a title from first line if it looks like a role
  const first = (lines[0] || '').trim();
  if (/developer|engineer|manager|designer|analyst|scientist|architect/i.test(first)) return first;
  // Try lines that contain "Manager," or "Engineer,"
  for (const line of lines.slice(0, 10)) {
    if (/\b(Manager|Engineer|Developer|Analyst|Scientist|Architect|Designer|Lead|Director)\b/i.test(line) && line.length < 100) {
      return line.trim();
    }
  }
  return null;
}

function inferCompany(lines) {
  // Look for "at XYZ" or "Company: XYZ" patterns
  for (const line of lines.slice(0, 15)) {
    const m = line.match(/\bat\s+([A-Z][a-zA-Z\s&]+)/);
    if (m && m[1].length < 40) return m[1].trim();
  }
  return null;
}
