// Tailoring engine: pick best bullets/skills from base by matching JD

function extractJDToneKeywords(jd) {
  const keywords = [];
  const text = [jd.title, jd.description, ...(jd.bullets || [])].join(' ').toLowerCase();
  
  const toneWords = [
    'productivity', 'actionable insights', 'engineering', 'analytics', 'data-driven',
    'stakeholder', 'leadership', 'technical expertise', 'scalable', 'efficiency',
    'collaboration', 'optimization', 'forecasting', 'predictive', 'governance'
  ];
  
  for (const word of toneWords) {
    if (text.includes(word)) keywords.push(word);
  }
  
  return keywords;
}

function scoreTextAgainstSkills(text, skills) {
  const lc = text.toLowerCase();
  let score = 0;
  for (const s of skills) {
    const k = String(s).toLowerCase();
    if (k && lc.includes(k)) score += 1;
  }
  return score;
}

function scoreTextAgainstRequirements(text, requirementLines) {
  const lc = text.toLowerCase();
  let score = 0;
  for (const req of requirementLines || []) {
    const rlc = req.toLowerCase();
    // if the bullet contains any keywords from requirements, boost
    const words = rlc.match(/\b\w{4,}\b/g) || [];
    for (const w of words) {
      if (lc.includes(w)) score += 0.5;
    }
  }
  
  // Bonus for quantified impact (numbers, percentages, dollar amounts)
  if (lc.match(/\d+%|\$\d+[KMB]?|\d+\+?\s*(FTE|hours?|days?|weeks?)/i)) score += 2;
  
  // Bonus for action verbs and leadership terms
  if (lc.match(/\b(built|designed|led|developed|engineered|spearheaded|delivered|automated|optimized|migrated)\b/i)) score += 1;
  
  return score;
}

export async function generateTailoredResumeModel({ base, jd }) {
  const name = base.name || 'Sharath';
  const contact = base.contact || {
    email: 'sharath459@gmail.com',
    phone: '',
    location: '',
    links: [
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/sharath-somashekar/' },
      { label: 'GitHub', url: 'https://github.com/sharath459' },
      { label: 'Portfolio', url: 'https://sharath459.github.io/portfolio/' }
    ]
  };

  // Keep original summary but enhance with JD keywords
  let summary = base.summary || `Data & BI leader with 13+ years delivering actionable insights and measurable impact.`;
  
  // Add JD-specific tone enhancements while preserving original structure
  if (summary.length > 0 && jd.title) {
    const jdKeywords = extractJDToneKeywords(jd);
    // Add relevant keywords if not already present
    if (!summary.toLowerCase().includes('productivity') && jdKeywords.includes('productivity')) {
      summary = summary.replace('delivering', 'delivering engineering productivity insights,');
    }
  }

  // Core skills from resume structured by category
  const coreSkillsByCategory = {
    'Data Engineering': ['ETL/ELT', 'dbt', 'Redshift', 'Snowflake', 'Databricks', 'Data Warehousing', 'Data Modeling', 'Data Quality', 'Data Governance'],
    'BI & Analytics': ['Tableau', 'Looker', 'Power BI', 'QuickSight', 'Advanced Excel', 'KPI Design', 'Analytics', 'Business Intelligence'],
    'Programming & Tools': ['SQL', 'Python', 'Athena', 'S3', 'Matillion', 'Git'],
    'AI & Emerging Technologies': ['Agentic AI', 'Claude Code', 'AI-driven', 'Workflow Optimization'],
    'Leadership & Delivery': ['Agile', 'Stakeholder Management', 'Cross-functional Collaboration', 'Process Optimization']
  };
  
  // Flatten all core skills
  const allCoreSkills = Object.values(coreSkillsByCategory).flat();
  
  // Add JD-specific skills that aren't already in core skills
  const jdSkillsLower = (jd.skills || []).map(s => s.toLowerCase());
  const coreSkillsLower = allCoreSkills.map(s => s.toLowerCase());
  
  // Priority JD skills to add if missing
  const missingJDSkills = (jd.skills || []).filter(skill => 
    !coreSkillsLower.some(cs => cs.includes(skill.toLowerCase()) || skill.toLowerCase().includes(cs)) &&
    skill.match(/R|SQL|Python|Tableau|Power BI|Looker|QuickSight|Redshift|Snowflake|Databricks|dbt|ETL|ELT|Analytics|BI|DORA|SPACE|Agile|DevOps|Jira|GitHub|Jenkins|SonarQube|ServiceNow|Rally|throughput|cycle time|lead time|defect rate|code quality|release frequency|deployment success|developer productivity|forecasting|predictive/i)
  );
  
  const allSkills = [...allCoreSkills, ...missingJDSkills];
  
  // Score and rank skills
  const baseSkillsScored = allSkills.map(skill => {
    const skillLower = skill.toLowerCase();
    // Highest priority: exact JD match
    if (jdSkillsLower.includes(skillLower)) return { skill, score: 10 };
    // High priority: data/analytics core skills
    if (skill.match(/SQL|Python|Tableau|Power BI|Looker|QuickSight|Redshift|Snowflake|Databricks|dbt|ETL|ELT|Data Warehousing|Data Modeling|Analytics|BI|Business Intelligence/i)) return { skill, score: 8 };
    // Medium-high: productivity/SDLC metrics
    if (skill.match(/DORA|SPACE|Agile|throughput|cycle time|defect rate|developer productivity|forecasting/i)) return { skill, score: 7 };
    // Medium: tools and technologies
    if (skill.match(/Jira|GitHub|Jenkins|Athena|S3|Git|Matillion/i)) return { skill, score: 5 };
    // Lower: soft skills
    return { skill, score: 3 };
  });
  
  baseSkillsScored.sort((a, b) => b.score - a.score);
  const topSkills = baseSkillsScored.slice(0, 18).map(s => s.skill); // Increased to 18 for comprehensive ATS coverage

  const experiences = (base.experiences || []).map(exp => ({ ...exp }));

  // Priority achievements - condensed to one-liners (these go first)
  const priorityAchievements = [
    'Agentic AI workflow automated 500 Matillion jobs to dbt models—90% faster development, year-long project to weeks',
    'Automated headcount tracking tool for 6K+ org—$200K/month savings, adopted by 15+ teams and all VPs'
  ];
  
  // Track which bullets match priority achievements to avoid duplication
  const priorityKeywords = [
    'Agentic AI workflow',
    'automated headcount tracking'
  ];

  // Rank bullets by JD skills + requirements
  const bulletsScored = [];
  for (const exp of experiences) {
    for (const b of exp.bullets || []) {
      // Skip if this is a priority achievement (we'll add those separately)
      if (priorityKeywords.some(kw => b.toLowerCase().includes(kw.toLowerCase()))) {
        continue;
      }
      
      const skillScore = scoreTextAgainstSkills(b, jd.skills || []);
      const reqScore = scoreTextAgainstRequirements(b, jd.requirementLines || []);
      bulletsScored.push({ text: b, score: skillScore + reqScore, exp });
    }
  }
  
  // Sort bullets by score
  bulletsScored.sort((a, b) => b.score - a.score);
  
  // Take top scoring bullets (we'll add 3 more after priority achievements)
  const topScoredBullets = bulletsScored.slice(0, 5).map(b => b.text);
  
  // Condense bullets to one-liners (remove verbose text)
  const condenseBullet = (bullet) => {
    // Remove redundant phrases and condense
    let condensed = bullet
      .replace(/—auto-generating SQL and YAML files,/, '—')
      .replace(/achieving /g, '')
      .replace(/ and transforming year-long project into weeks/g, '')
      .replace(/by engineering an end-to-end data solution with Redshift and QuickSight\.\s*Adopted/g, '—adopted')
      .replace(/,\s*integrating data from Google, Bing, Apple, and proprietary URLs to track clicks, appointments, and/g, '—')
      .replace(/,\s*integrating data from [^,]+,/g, '—')
      .replace(/,\s*to track [^,]+,/g, '—')
      .replace(/,\s*providing [^.]+\./g, '.')
      .replace(/,\s*to enhance [^.]+\./g, '.')
      .replace(/\s+that [^,]{50,}/g, '')
      .replace(/,\s*enabling [^,]{30,},/g, '')
      .replace(/,\s*and providing [^,]+,/g, '')
      .replace(/\s+transforming [^.]+\./g, '.');
    
    // Truncate if still too long (over 120 chars) - take up to first period
    if (condensed.length > 120) {
      // Try to split at first period (complete sentence)
      const periodIdx = condensed.indexOf('.');
      if (periodIdx > 60 && periodIdx <= 120) {
        condensed = condensed.substring(0, periodIdx + 1);
      } else {
        // Truncate at word boundary near 120, ensuring we don't cut numbers
        let truncated = condensed.substring(0, 115);
        // Find last complete word/number
        const lastSpace = truncated.lastIndexOf(' ');
        if (lastSpace > 80) {
          truncated = truncated.substring(0, lastSpace);
        }
        condensed = truncated;
      }
    }
    
    // Clean up trailing punctuation and extra spaces
    condensed = condensed
      .replace(/[—,\s]+$/, '')
      .replace(/\s+/g, ' ')
      .replace(/\s+([.,])/g, '$1')
      .trim();
    
    // Add period if missing
    if (condensed.length > 0 && !condensed.match(/[.!?]$/)) {
      condensed += '.';
    }
    
    return condensed;
  };
  
  const condensedOtherBullets = topScoredBullets.map(condenseBullet);
  
  // Combine: priority achievements first, then top condensed bullets
  const topBullets = [...priorityAchievements, ...condensedOtherBullets].slice(0, 5);

  // Separate Investor & Freelancing experience for special handling
  const freelancingExp = experiences.find(exp => 
    exp.company?.toLowerCase().includes('freelanc') || 
    exp.company?.toLowerCase().includes('investor') ||
    exp.role?.toLowerCase().includes('trader') ||
    exp.role?.toLowerCase().includes('freelanc')
  );
  
  const workExperiences = experiences.filter(exp => exp !== freelancingExp);

  // Keep top 3 work experiences in detail (instead of 2)
  const detailedExperiences = workExperiences.slice(0, 3).map(exp => ({
    ...exp,
    bullets: (exp.bullets || []).slice(0, 3)
  }));

  // Add freelancing as a standalone section if it exists
  let freelancingSection = null;
  if (freelancingExp) {
    freelancingSection = {
      ...freelancingExp,
      bullets: (freelancingExp.bullets || []).slice(0, 2)
    };
  }

  const earlier = workExperiences.slice(3);
  // Build a pool of earlier bullets and score them, then take top 2 as summary
  const earlierPool = [];
  for (const exp of earlier) {
    for (const b of exp.bullets || []) {
      const skillScore = scoreTextAgainstSkills(b, jd.skills || []);
      const reqScore = scoreTextAgainstRequirements(b, jd.requirementLines || []);
      earlierPool.push({ text: b, score: skillScore + reqScore });
    }
  }
  earlierPool.sort((a, b) => b.score - a.score);
  const earlierSummaryBullets = earlierPool.slice(0, 2).map(x => x.text);

  // Derive a year range like 2012–2016 from earlier periods if possible
  function extractYears(periodStr) {
    const years = [];
    const m = String(periodStr || '').match(/(20\d{2})/g);
    if (m) for (const y of m) years.push(parseInt(y, 10));
    return years;
  }
  let minYear = null, maxYear = null;
  for (const exp of earlier) {
    const years = extractYears(exp.period);
    for (const y of years) {
      if (minYear === null || y < minYear) minYear = y;
      if (maxYear === null || y > maxYear) maxYear = y;
    }
  }
  const earlierRange = (minYear && maxYear) ? `${minYear}\u2013${maxYear}` : '';

  const education = base.education || 'BE, Mechanical Engineering';
  const certifications = base.certifications || '';

  return {
    name,
    contact,
    target: { title: jd.title || null, company: jd.company || null },
    summary,
    skills: topSkills,
    bullets: topBullets.length ? topBullets : (base.highlights || []).slice(0, 10),
    experiences: detailedExperiences,
    freelancing: freelancingSection,
    earlierSummary: { range: earlierRange, bullets: earlierSummaryBullets },
    education,
    certifications,
  };
}
