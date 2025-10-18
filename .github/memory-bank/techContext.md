# Technical Context: Tech Stack & Setup

## Technologies Used

### Core Framework
- **Next.js 15.5.5**: React framework with App Router
  - Using `output: 'export'` for static site generation
  - No server-side features (static only)
  - App Router (not Pages Router)

- **React 19**: UI library
  - Client components where needed (`'use client'`)
  - Server components by default (static export)

- **TypeScript**: Type safety throughout codebase
  - Strict mode enabled
  - Type definitions in `src/lib/data.ts`

### Styling
- **Tailwind CSS 4**: Utility-first CSS framework
  - Custom theme in `tailwind.config.ts`
  - CSS variables for theming in `globals.css`
  - HSL color format for better theme control

- **Framer Motion**: Animation library
  - Scroll-triggered animations
  - Page transitions
  - Hover effects and micro-interactions

### Icons & Fonts
- **React Icons**: Icon library
  - `react-icons/fa` (Font Awesome)
  - `react-icons/si` (Simple Icons)

- **Geist Font**: Modern sans-serif
  - Geist Sans for body text
  - Geist Mono for code/monospace

### Forms
- **Formspree**: Form backend service
  - Endpoint: `https://formspree.io/f/{form-id}`
  - Client-side validation before submission
  - No server needed

## Development Setup

### Prerequisites
- Node.js 18+ (for Next.js 15)
- npm or pnpm
- Git

### Installation
```bash
cd c:\Users\Hp\OneDrive\Documents\GitHub\portfolio
npm install
```

### Development Commands
```bash
# Start dev server (localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm start

# Lint code
npm run lint
```

### Environment
- **OS**: Windows (PowerShell)
- **Working Directory**: `c:\Users\Hp\OneDrive\Documents\GitHub\portfolio`
- **Git Remote**: `https://github.com/sharath459/portfolio.git`
- **Deployment**: GitHub Pages (auto-deploy on push to main)

## Technical Constraints

### Static Export Limitations
- ❌ No server-side rendering (SSR)
- ❌ No API routes
- ❌ No dynamic routes
- ❌ No image optimization at runtime
- ✅ Client-side routing works
- ✅ Static HTML/CSS/JS only

### Deployment Constraints
- Must use `basePath` if deploying to subdirectory
- All routes must be static (no `/[slug]` patterns)
- Images must be in `/public` or imported
- `output: 'export'` in `next.config.ts`

### Browser Support
- Modern browsers (ES6+)
- Graceful degradation for no-JS (content still visible)
- CSS Grid & Flexbox required

## Dependencies

### Production Dependencies
```json
{
  "next": "^15.5.5",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "framer-motion": "^latest",
  "react-icons": "^latest"
}
```

### Dev Dependencies
```json
{
  "typescript": "^5",
  "@types/node": "^20",
  "@types/react": "^19",
  "@types/react-dom": "^19",
  "tailwindcss": "^4",
  "postcss": "^8",
  "eslint": "^9",
  "eslint-config-next": "^15"
}
```

## Configuration Files

### `next.config.ts`
```typescript
const nextConfig = {
  output: 'export',  // Critical for static export
  images: {
    unoptimized: true  // Required for static export
  }
};
```

### `tailwind.config.ts`
- Extends default theme
- Custom colors using HSL CSS variables
- Content paths for purging

### `tsconfig.json`
- Strict mode enabled
- Path aliases: `@/` → `src/`
- Target: ES2017+

## Tool Usage Patterns

### Git Workflow
```bash
# Standard workflow
git add -A
git commit -m "Descriptive message"
git push origin main
```

### Color System
**Dark Theme** (`:root`):
- Background: `hsl(0 0% 4%)` (#0a0a0a)
- Foreground: `hsl(0 0% 93%)` (#ededed)
- Primary: `hsl(262 83% 58%)` (Purple-500)
- Muted: `hsl(240 5% 64.9%)` (Medium gray)

**Light Theme** (`.light`):
- Background: `hsl(0 0% 100%)` (#ffffff)
- Foreground: `hsl(0 0% 9%)` (#171717)
- Primary: `hsl(262 83% 58%)` (Purple-500)
- Muted: `hsl(240 3.8% 46.1%)` (Darker gray)

**Contrast Ratios**:
- Dark mode: 21:1 (93% on 4%) - WCAG AAA
- Light mode: 11:1 (9% on 100%) - WCAG AAA
- Both exceed WCAG AA requirement (4.5:1)

### Deployment Pipeline
1. Push to `main` triggers GitHub Actions
2. Workflow file: `.github/workflows/deploy.yml`
3. Builds with `npm run build`
4. Deploys to `gh-pages` branch
5. GitHub Pages serves from `gh-pages`

## Development Patterns

### Adding New Section
1. Create component in `src/components/`
2. Add data to `src/lib/data.ts` (if needed)
3. Import and place in `src/app/page.tsx`
4. Add navigation link to `Header.tsx`
5. Ensure proper heading hierarchy (h2 for section)

### Styling Approach
- Use Tailwind utility classes first
- Create reusable components in `ui/` folder
- Use CSS variables for theme-aware colors
- Responsive: mobile-first, add breakpoints up

### Animation Guidelines
- Always include `viewport={{ once: true }}` to prevent re-triggering
- Use `initial` and `whileInView` for scroll animations
- Respect `prefers-reduced-motion` (handled in globals.css)
- Keep durations 0.3-0.8s for smoothness

## Testing & Quality

### Manual Testing Checklist
- ✅ Desktop responsiveness (1920px+)
- ✅ Tablet responsiveness (768px-1024px)
- ✅ Mobile responsiveness (375px-767px)
- ✅ Dark mode functionality
- ✅ Light mode functionality
- ✅ Form validation
- ✅ Navigation smooth scroll
- ✅ All links work
- ✅ Resume downloads correctly

### Accessibility Testing
- ✅ Keyboard navigation (Tab, Enter, Space)
- ✅ Skip-to-content link visible on focus
- ✅ Screen reader labels (ARIA)
- ✅ Color contrast (WCAG AA)
- ✅ Heading hierarchy (h1 → h2 → h3)
- ✅ Focus indicators visible

### Performance Targets
- Lighthouse Score: 90+ (all categories)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Total page size: < 2MB
