import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function renderResumeHTML(model) {
  const tmplPath = path.resolve(__dirname, '../../templates/resume-onepage.html');
  const tpl = await fs.readFile(tmplPath, 'utf8');

  function esc(s) {
    return String(s || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  // Build contact line: email · phone · location · links
  const contactParts = [];
  if (model.contact.email) contactParts.push(esc(model.contact.email));
  if (model.contact.phone) contactParts.push(esc(model.contact.phone));
  if (model.contact.location) contactParts.push(esc(model.contact.location));
  
  // Deduplicate contact links by URL
  const uniqueLinks = [];
  const seenUrls = new Set();
  for (const l of model.contact.links || []) {
    if (!seenUrls.has(l.url)) {
      uniqueLinks.push(l);
      seenUrls.add(l.url);
    }
  }
  
  const linkHtml = uniqueLinks
    .map(l => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`)
    .join(' · ');
  
  if (linkHtml) contactParts.push(linkHtml);
  const contactLine = contactParts.join(' · ');

  const bullets = (model.bullets || [])
    .map(b => `<li>${esc(b)}</li>`)
    .join('');

  const skills = (model.skills || [])
    .map(s => `<span class="skill">${esc(s)}</span>`)
    .join('<span class="dot">•</span>');

  // Render top 3 experiences with 3-4 bullets each
  const experiencesHtml = (model.experiences || [])
    .slice(0, 3)
    .map(exp => {
      const expBullets = (exp.bullets || [])
        .slice(0, 4)
        .map(b => `<li>${esc(b)}</li>`)
        .join('');
      const titleLine = exp.title ? `<div class="title">${esc(exp.title)}</div>` : '';
      const roleText = exp.role && exp.role !== exp.title ? exp.role : '';
      const roleDesc = roleText ? `<div style="margin-top: 3pt; font-size: 9pt; line-height: 1.2;">${esc(roleText)}</div>` : '';
      return `
      <div class="exp">
        <div class="row">
          <div><span class="company">${esc(exp.company)}</span></div>
          <div class="date">${esc(exp.period)}</div>
        </div>
        ${titleLine}
        ${roleDesc}
        <ul>${expBullets}</ul>
      </div>`;
    })
    .join('');

  // Add freelancing section if present
  const freelancingBlock = model.freelancing
    ? `
      <div class="exp">
        <div class="row">
          <div><span class="company">${esc(model.freelancing.company)}</span></div>
          <div class="date">${esc(model.freelancing.period)}</div>
        </div>
        ${model.freelancing.title ? `<div class="title">${esc(model.freelancing.title)}</div>` : ''}
        ${model.freelancing.role && model.freelancing.role !== model.freelancing.title ? `<div style="margin-top: 3pt; font-size: 9pt; line-height: 1.2;">${esc(model.freelancing.role)}</div>` : ''}
        <ul>${(model.freelancing.bullets || []).map(b => `<li>${esc(b)}</li>`).join('')}</ul>
      </div>`
    : '';

  const earlierBlock = (model.earlierSummary && (model.earlierSummary.bullets || []).length)
    ? `
    <div class="exp">
      <div class="row">
        <div><span class="role">Earlier Experience</span>${model.earlierSummary.range ? ` — <span class="company">${esc(model.earlierSummary.range)}</span>` : ''}</div>
      </div>
      <ul>${(model.earlierSummary.bullets || []).map(b => `<li>${esc(b)}</li>`).join('')}</ul>
    </div>`
    : '';

  let html = tpl
    .replace(/\{\{NAME\}\}/g, esc(model.name))
    .replace(/\{\{SUMMARY\}\}/g, esc(model.summary))
    .replace(/\{\{CONTACT_LINE\}\}/g, contactLine)
    .replace(/\{\{SKILLS\}\}/g, skills)
    .replace(/\{\{TOP_BULLETS\}\}/g, bullets)
  .replace(/\{\{EXPERIENCES\}\}/g, experiencesHtml + freelancingBlock + earlierBlock)
    .replace(/\{\{EDUCATION\}\}/g, esc(model.education || ''))
    .replace(/\{\{CERTIFICATIONS\}\}/g, esc(model.certifications || ''));

  return html;
}
