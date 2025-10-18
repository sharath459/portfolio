# GitHub Pages Deployment Setup

## ✅ What I Just Fixed

Your portfolio was showing the default Next.js README because GitHub Pages needs **built static files**, not source code.

I've configured your portfolio for GitHub Pages deployment with:

1. **Next.js Static Export** (`next.config.ts`)
   - `output: 'export'` - Generates static HTML/CSS/JS
   - `basePath: '/portfolio'` - Matches your GitHub Pages URL
   - `images: { unoptimized: true }` - Required for static export

2. **GitHub Actions Workflow** (already existed in `.github/workflows/deploy.yml`)
   - Automatically builds on every push to `main`
   - Deploys to GitHub Pages

3. **`.nojekyll` file** 
   - Prevents GitHub from treating it as a Jekyll site

---

## 🚀 Next Steps (IMPORTANT!)

### Step 1: Enable GitHub Pages (if not already done)

1. Go to your repository: https://github.com/sharath459/portfolio
2. Click **Settings** tab
3. In the left sidebar, click **Pages**
4. Under **Source**, select:
   - Source: **GitHub Actions** (not "Deploy from a branch")
5. Click **Save**

### Step 2: Wait for Deployment

1. Go to the **Actions** tab: https://github.com/sharath459/portfolio/actions
2. You should see a workflow running called "Deploy Next.js site to Pages"
3. Wait for it to complete (usually 2-3 minutes)
4. When it shows a green checkmark ✅, your site is live!

### Step 3: Access Your Portfolio

Your portfolio will be available at:
**https://sharath459.github.io/portfolio/**

---

## 🔧 Troubleshooting

### If you still see the README:

1. **Check GitHub Pages Settings**
   - Go to Settings → Pages
   - Verify Source is set to "GitHub Actions"

2. **Check Actions Workflow**
   - Go to Actions tab
   - Look for the latest workflow run
   - If it failed, click on it to see the error

3. **Force Rebuild**
   - Make a small change (add a comment to any file)
   - Commit and push to trigger a new build

### If the site looks broken (no styles):

This means the `basePath` is working but assets aren't loading. Check:
- All internal links should use relative paths
- The workflow successfully uploaded the `out` folder

---

## 📝 For Future Updates

Every time you push to `main`:
1. GitHub Actions automatically builds your site
2. Deploys the static files to GitHub Pages
3. Your portfolio updates within 2-3 minutes

---

## 🎯 Alternative: Deploy to Vercel (Recommended)

If GitHub Pages gives you trouble, Vercel is **much easier** for Next.js:

1. Go to https://vercel.com/
2. Sign in with GitHub
3. Click "New Project"
4. Import your `portfolio` repository
5. Click "Deploy"
6. Done! You get a URL like `portfolio-sharath459.vercel.app`

**Benefits:**
- No configuration needed
- Faster deploys
- Automatic previews for PRs
- Custom domain support
- Built by the Next.js team

---

## Current Configuration Files

### `next.config.ts`
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',           // Static HTML export
  images: {
    unoptimized: true,        // Required for static export
  },
  basePath: '/portfolio',     // Matches GitHub Pages URL
  trailingSlash: true,        // Better compatibility
};

export default nextConfig;
```

### `.github/workflows/deploy.yml`
Already configured to:
- Build on push to `main`
- Upload `out` folder
- Deploy to GitHub Pages

---

## ✅ Verification Checklist

- [ ] Pushed changes to GitHub (Done ✅)
- [ ] GitHub Pages Source set to "GitHub Actions"
- [ ] Workflow completes successfully
- [ ] Portfolio accessible at https://sharath459.github.io/portfolio/
- [ ] Theme toggle works
- [ ] All sections render correctly
- [ ] Mobile menu works
- [ ] Resume download works

---

Need help? Check the Actions tab for build logs or let me know!
