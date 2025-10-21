# System Patterns: Architecture & Design

## Project Structure
```
portfolio/
├── .github/
│   ├── workflows/
│   │   └── deploy.yml          # GitHub Actions for deployment
│   ├── instructions/
│   │   └── Cline Memory Bank.instructions.md
│   └── memory-bank/            # This documentation
├── public/
│   ├── Resume/
│   │   └── Sharath_Resume_2025.pdf
│   └── images/                 # Project images, testimonials
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout with metadata
│   │   ├── page.tsx           # Home page composition
│   │   ├── globals.css        # Global styles & CSS variables
│   │   └── fonts/             # Geist Sans & Mono
│   ├── components/
│   │   ├── Header.tsx         # Navigation with scroll detection
│   │   ├── Hero.tsx           # Landing section with h1
│   │   ├── WhyHireMe.tsx      # Value proposition cards
│   │   ├── PromotionJourney.tsx  # Career timeline
│   │   ├── ExperienceTimeline.tsx # Professional experience
│   │   ├── Projects.tsx       # Filterable project showcase
│   │   ├── AboutMe.tsx        # Personal background
│   │   ├── Testimonials.tsx   # Peer feedback
│   │   ├── Accolades.tsx      # Awards & recognition
│   │   ├── Contact.tsx        # Form with validation
│   │   ├── Footer.tsx         # Social links
│   │   ├── ThemeProvider.tsx  # Dark/light mode context
│   │   ├── ThemeToggle.tsx    # Theme switch button
│   │   └── ui/                # Reusable UI components
│   └── lib/
│       └── data.ts            # All content data (single source of truth)
└── tailwind.config.ts         # Tailwind configuration

resume-generator/
├── jobs/                      # Sample JD inputs
├── out/                       # Generated resumes & applications
├── src/
│   ├── lib/                   # JD parser, sources, generate, render
│   ├── apply/                 # Job pipeline (scan/fetch/tailor/apply)
│   │   ├── config/            # companies.json, profile.json
│   │   ├── providers/         # greenhouse/lever helpers
│   │   ├── index.mjs          # CLI orchestrator
│   │   ├── scan.mjs           # API scanners
│   │   ├── jd-fetch.mjs       # JD fetch/extract
│   │   ├── tailor.mjs         # Per‑job resume generation (HTML+PDF)
│   │   └── submit.mjs         # Safe prefill/apply
│   ├── build-pdf.mjs          # Generic HTML→PDF exporter
│   └── index.mjs              # Manual JD→resume flow
└── package.json               # Scripts: jobs:scan/fetch/tailor/apply/run
```

## Key Architectural Decisions

### 1. Data-Driven Content
**Pattern**: All content lives in `src/lib/data.ts`
**Why**: Single source of truth, easy updates, type-safe
**Usage**: Components import and map over data arrays

```typescript
// Example: Projects component
import { projectData } from '@/lib/data';
const topProjects = projectData.filter(p => p.category === 'Top Project');
```

### 2. Static Site Generation
**Pattern**: Next.js static export via `output: 'export'`
**Why**: Fast loading, no server needed, works with GitHub Pages
**Trade-offs**: No dynamic routes, no server-side features

### 3. Component Composition
**Pattern**: Page components compose smaller feature components
**Hierarchy**: 
- `app/page.tsx` (page layout)
  - `Header.tsx` (navigation)
  - `Hero.tsx` (landing)
  - `WhyHireMe.tsx` (value props)
  - ... (other sections)
  - `Footer.tsx` (links)

### 4. Theme Management
**Pattern**: Context API with localStorage persistence
**Implementation**:
- `ThemeProvider.tsx`: Context + state management
- `ThemeToggle.tsx`: UI control
- `globals.css`: CSS variables for colors
- Respects system preference on first visit

### 5. Accessibility First
### 6. Job Scanning via Public APIs
**Pattern**: Use Greenhouse boards API and Lever v0 postings for reliability.
**Why**: Avoid brittle HTML scraping and 404 slug variance.
**Trade-offs**: Not all companies expose APIs; add Workday integration next.

### 7. JD Extraction Heuristic
**Pattern**: Choose the longest text among likely containers (main/article/content) using cheerio.
**Why**: Provider pages vary; longest block captures most of the JD reliably.
**Trade-offs**: May include extra page fluff; tailoring parser filters for skills.

### 8. Safe Application Automation
**Pattern**: Use puppeteer-core with local Edge/Chrome to prefill standard fields and upload resume; do not auto-submit by default.
**Why**: Respect site ToS and reduce risk of mis-submissions.
**Trade-offs**: Requires manual confirmation for completion on complex flows.
**Patterns**:
- Semantic HTML (h1 → h2 → h3 hierarchy)
- ARIA labels on form inputs (`aria-invalid`, `aria-describedby`)
- Skip-to-content link for keyboard navigation
- Focus states on interactive elements
- `prefers-reduced-motion` support

## Design Patterns in Use

### Animation Pattern
**Library**: Framer Motion
**Strategy**: Scroll-triggered animations with `whileInView`
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
```

### Gradient Standardization
**Pattern**: Consistent gradient across all section headers
**Value**: `from-blue-400 via-purple-500 to-purple-600`
**Applied to**: WhyHireMe, Professional Journey, Career Progression, Projects, Testimonials, Contact, About Me, Accolades

### Form Validation Pattern
**Strategy**: Client-side validation before Formspree submission
**Implementation**:
```typescript
const validateForm = () => {
  // Email regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  // Name: min 2 chars
  // Message: min 10, max 1000 chars
  // Returns boolean, sets error state
};
```

### Responsive Design Pattern
**Strategy**: Mobile-first with Tailwind breakpoints
**Container**: `max-w-7xl mx-auto` for consistent centering
**Breakpoints**: `sm:` `md:` `lg:` `xl:` for responsive layouts

## Component Relationships

### Navigation Flow
1. `Header.tsx` tracks scroll position
2. Highlights active section based on scroll
3. Smooth scroll to sections on click
4. Offset accounts for fixed header

### Form Flow
1. User fills fields in `Contact.tsx`
2. Client-side validation runs on submit
3. If valid, Formspree endpoint receives data
4. Success/error message displayed

### Theme Flow
1. `ThemeProvider` checks localStorage or system preference
2. Sets initial theme state
3. Applies `.light` class to `<html>` for light mode
4. `ThemeToggle` calls `toggleTheme()` to switch
5. New theme saved to localStorage

## Critical Implementation Paths

### Adding New Content
1. Update `src/lib/data.ts` with new data
2. Component automatically renders new content
3. No component changes needed (data-driven)

### Styling Updates
1. Global changes: `src/app/globals.css` (CSS variables)
2. Component styles: Tailwind classes inline
3. Theme colors: Update `:root` and `.light` in globals.css

### Deployment
### Auto Apply Flow
1. `npm run jobs:scan` populates `out/jobs.json` with filtered postings
2. `npm run jobs:fetch` fills `jd` and `title` per job
3. `npm run jobs:tailor` generates `out/applications/<job-id>/resume.(html|pdf)`
4. `npm run jobs:apply` pre-fills forms or opens application pages for final submit

1. Push to `main` branch
2. GitHub Actions runs (`.github/workflows/deploy.yml`)
3. `npm run build` creates static export
4. Deploys to `gh-pages` branch
5. GitHub Pages serves site

## Performance Patterns
- **Image Optimization**: Next.js Image component (auto-optimization)
- **Code Splitting**: Automatic per Next.js App Router
- **Lazy Loading**: Framer Motion animations trigger on scroll
- **Static Assets**: All in `/public` for direct serving
