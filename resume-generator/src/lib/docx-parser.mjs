// Parse DOCX resume using python-docx via child process
import { exec } from 'node:child_process';
import { promisify } from 'node:util';
import path from 'node:path';

const execAsync = promisify(exec);

export async function parseDocxResume(docxPath) {
  const pythonCmd = 'C:/Users/Hp/AppData/Local/Microsoft/WindowsApps/python3.13.exe';
  
  // Extract raw text with UTF-8 encoding
  const extractCmd = `${pythonCmd} -X utf8 -c "from docx import Document; import sys; sys.stdout.reconfigure(encoding='utf-8'); doc = Document('${docxPath.replace(/\\/g, '\\\\')}'); [print(p.text) for p in doc.paragraphs if p.text.strip()]"`;
  
  try {
    const { stdout } = await execAsync(extractCmd, { 
      maxBuffer: 1024 * 1024 * 10,
      encoding: 'utf8'
    });
    const lines = stdout.split('\n').map(l => l.trim()).filter(Boolean);
    
    if (!lines.length) return null;
    
    // Parse the extracted lines
    const name = lines[0];
    const contactLine = lines[1] || '';
    
    // Extract contact info
    const emailMatch = contactLine.match(/([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/);
    const email = emailMatch ? emailMatch[1] : 'sharath459@gmail.com';
    
    const phoneMatch = contactLine.match(/(\+91[\s-]?\d{10}|\d{10})/);
    const phone = phoneMatch ? phoneMatch[1] : '+91-9743131300';
    
    const locationMatch = contactLine.match(/Bengaluru|Karnataka|India/);
    const location = locationMatch ? 'Bengaluru, India' : '';
    
    const urlMatch = contactLine.match(/(sharath459\.github\.io\/portfolio|linkedin\.com\/in\/[^\s]+|github\.com\/[^\s]+)/g);
    const links = urlMatch ? urlMatch.map(url => ({
      label: url.includes('github.io') ? 'Portfolio' : url.includes('linkedin') ? 'LinkedIn' : 'GitHub',
      url: url.startsWith('http') ? url : `https://${url}`
    })) : [
      { label: 'Portfolio', url: 'https://sharath459.github.io/portfolio/' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/sharath-somashekar/' },
      { label: 'GitHub', url: 'https://github.com/sharath459' }
    ];
    
    // Find section boundaries
    const summaryIdx = lines.findIndex(l => l.toUpperCase().includes('SUMMARY'));
    const skillsIdx = lines.findIndex(l => l.toUpperCase().includes('CORE SKILLS') || (l.toUpperCase() === 'SKILLS'));
    const expIdx = lines.findIndex(l => l.toUpperCase().includes('WORK EXPERIENCE') || l.toUpperCase() === 'EXPERIENCE');
    const eduIdx = lines.findIndex(l => l.toUpperCase().includes('EDUCATION'));
    const certIdx = lines.findIndex(l => l.toUpperCase().includes('CERTIFICATION'));
    
    // Extract summary
    let summary = '';
    if (summaryIdx >= 0 && skillsIdx > summaryIdx) {
      summary = lines.slice(summaryIdx + 1, skillsIdx).join(' ');
    }
    
    // Extract skills
    const skills = [];
    if (skillsIdx >= 0 && expIdx > skillsIdx) {
      const skillLines = lines.slice(skillsIdx + 1, expIdx);
      skillLines.forEach(line => {
        // Split by common delimiters
        const parts = line.split(/[:|,•]/).map(s => s.trim()).filter(Boolean);
        parts.forEach(part => {
          if (part.length > 2 && part.length < 50 && !part.includes('–') && !part.match(/^\d{4}/)) {
            skills.push(part);
          }
        });
      });
    }
    
    // Extract experiences
    const experiences = [];
    if (expIdx >= 0) {
      const endIdx = eduIdx > expIdx ? eduIdx : (certIdx > expIdx ? certIdx : lines.length);
      const expLines = lines.slice(expIdx + 1, endIdx);
      
      let currentExp = null;
      for (const line of expLines) {
        // Check if this is a company line (has bullet separator and year)
        if (line.includes('•') && line.match(/\d{4}/)) {
          if (currentExp) experiences.push(currentExp);
          
          const parts = line.split('•');
          const companyLoc = parts[0].trim();
          const dateRolePart = parts[1] ? parts[1].trim() : '';
          
          // Extract period (date range)
          const periodMatch = dateRolePart.match(/([A-Za-z]{3}\s+\d{4}[\s–-]+[A-Za-z]{3}\s+\d{4}|[A-Za-z]{3}\s+\d{4}[\s–-]+Present)/);
          const period = periodMatch ? periodMatch[0] : '';
          
          // Extract title (comes after the period)
          let title = '';
          if (period) {
            const afterPeriod = dateRolePart.substring(dateRolePart.indexOf(period) + period.length).trim();
            title = afterPeriod;
          }
          
          currentExp = {
            company: companyLoc.replace(/\(.*?\)/, '').trim(),
            title: title,
            role: '',
            period: period,
            bullets: []
          };
        } else if (currentExp && !line.match(/^[A-Z\s&]+$/) && line.length > 10) {
          // This is either a role line or a bullet
          if (!currentExp.role && !line.startsWith('•') && !line.startsWith('-')) {
            currentExp.role = line;
          } else {
            currentExp.bullets.push(line.replace(/^[•\-]\s*/, ''));
          }
        }
      }
      if (currentExp) experiences.push(currentExp);
    }
    
    // Extract education
    let education = '';
    if (eduIdx >= 0) {
      const endIdx = certIdx > eduIdx ? certIdx : lines.length;
      education = lines.slice(eduIdx + 1, Math.min(eduIdx + 3, endIdx)).join(' ');
    }
    
    // Extract certifications
    let certifications = '';
    if (certIdx >= 0) {
      certifications = lines.slice(certIdx + 1).join(', ');
    }
    
    return {
      name: name.replace(/[📍📞📧🌐]/g, '').trim(),
      contact: { email, phone, location, links },
      summary: summary.substring(0, 500),
      skills: skills.slice(0, 50),
      experiences,
      education,
      certifications,
      highlights: experiences.flatMap(exp => exp.bullets || [])
    };
  } catch (error) {
    console.error('Error parsing DOCX:', error.message);
    return null;
  }
}
