# Project Brief: Sharath's Portfolio & Job Application Toolkit

## Project Overview
This repository contains:
1) A modern, professional portfolio website for Sharath Byladakere Somashekar, a Senior Data Leader & AI Innovator, showcasing 12+ years of experience with emphasis on leadership, business impact, and AI.
2) A resume generator with JD tailoring plus a safe, semi‑automated job application pipeline (scan → fetch JD → tailor → prefill/apply) targeting Bangalore roles.

## Core Requirements

### Primary Goals
1. **Professional Showcase**: Display career progression, technical expertise, and leadership achievements
2. **Business Value Focus**: Highlight quantifiable business impact ($2.3MM+ value, 50+ FTE savings)
3. **Accessibility & SEO**: Ensure WCAG AA compliance and optimal search engine visibility
4. **Modern UX**: Smooth animations, dark/light themes, responsive design

### Target Audience
- **Recruiters & Hiring Managers**: Looking for senior data leadership roles
- **Potential Collaborators**: Interested in AI innovation and data projects
- **Professional Network**: Colleagues and industry peers

### Key Features (Portfolio)
1. **Hero Section**: Name with typing animation, value propositions, tech stack display
2. **Why Companies Choose Me**: 6 value proposition cards with stats
3. **Career Progression**: Visual timeline of promotions (2012-2025)
4. **Professional Journey**: Detailed experience cards with achievements
5. **Featured Projects**: Filterable project showcase (Top Projects, AI & Automation, Side Ventures)
6. **Beyond the Data**: Personal interests and background
7. **Testimonials**: Feedback from managers and peers
8. **Career Milestones**: Recognition and awards
9. **Contact Form**: Formspree integration with validation

### Success Criteria
- ✅ Fast loading times (static export to GitHub Pages)
- ✅ Perfect accessibility (WCAG AA)
- ✅ Mobile-responsive design
- ✅ Professional aesthetics with consistent branding
- ✅ SEO optimized with meta tags
- ✅ Easy content updates through data files

## Technical Stack
- **Framework**: Next.js 15.5.5 (App Router, Static Export)
- **Language**: TypeScript, React 19
- **Styling**: Tailwind CSS 4
- **Animation**: Framer Motion
- **Deployment**: GitHub Pages via GitHub Actions
- **Form**: Formspree integration

### Key Features (Resume Generator & Auto Apply)
1. JD parsing and skill extraction (DORA/SPACE metrics, data stack, leadership)
2. Tailored resume generation (HTML + PDF) with one‑liner achievements
3. Job scanning via Greenhouse/Lever public APIs filtered for Bangalore and keywords
4. JD fetch and robust extraction from provider pages
5. Safe application prefill (Greenhouse/Lever) with resume upload; opens browser when required

## Constraints
- Must be static export (no server-side features)
- GitHub Pages deployment with custom domain support
- Must work with JavaScript disabled for core content
- Performance budget: < 3s load time

Resume Generator & Auto Apply constraints:
- Respect site ToS; avoid aggressive automation (no blind auto-submit by default)
- Use public APIs where possible (Greenhouse/Lever) to reduce scraping fragility
- Keep local credentials out of repo; prompt user interactively when needed

## Out of Scope
- Blog functionality
- Admin dashboard
- Database integration
- User authentication
- Real-time features
