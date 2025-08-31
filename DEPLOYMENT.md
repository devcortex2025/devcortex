# GitHub Pages Deployment Guide

This guide will help you deploy your DevCortex React application to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Your project code pushed to a GitHub repository
3. The repository should be named `devcortex` (or update the base path in `vite.config.ts`)

## Setup Steps

### 1. Create GitHub Repository

1. Go to GitHub and create a new repository named `devcortex`
2. Make sure it's public (GitHub Pages requires public repos for free accounts)
3. Push your local code to this repository:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/devcortex.git
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "GitHub Actions"

### 3. Configure Base Path (if needed)

If your repository name is different from `devcortex`, update the base path in `vite.config.ts`:

```typescript
base: mode === 'production' ? '/YOUR_REPOSITORY_NAME/' : '/',
```

### 4. Deploy

Once you push your code with the GitHub Actions workflow (`.github/workflows/deploy.yml`), the deployment will happen automatically.

Your site will be available at:
```
https://YOUR_USERNAME.github.io/devcortex/
```

## How It Works

1. **GitHub Actions Workflow**: Automatically builds and deploys on every push to main branch
2. **SPA Routing Support**: The `404.html` file handles client-side routing for React Router
3. **Asset Optimization**: Vite optimizes and bundles all assets for production
4. **Base Path Configuration**: Ensures all assets load correctly from the GitHub Pages subdirectory

## Troubleshooting

### Common Issues

1. **Assets not loading**: Make sure the base path in `vite.config.ts` matches your repository name
2. **Routing not working**: Ensure the `404.html` file is in the `public/` directory
3. **Build fails**: Check that all dependencies are properly listed in `package.json`

### Local Testing

To test the production build locally:

```bash
npm run build
npm run preview
```

### Manual Deployment

If you prefer manual deployment:

```bash
npm run build
# Upload the contents of the `dist` folder to GitHub Pages
```

## Updates

To update your deployed site, simply push changes to the main branch. The GitHub Actions workflow will automatically rebuild and redeploy your site.

## Custom Domain Setup (devcortex.in)

The project is now configured for the custom domain `devcortex.in`:

### DNS Configuration Required:
1. **A Records** (for apex domain `devcortex.in`):
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

2. **CNAME Record** (for www subdomain):
   ```
   www.devcortex.in → YOUR_USERNAME.github.io
   ```

### GitHub Settings:
1. Go to your repository → Settings → Pages
2. Under "Custom domain", enter: `devcortex.in`
3. Check "Enforce HTTPS" (recommended)

### What's Already Configured:
- ✅ `CNAME` file created with `devcortex.in`
- ✅ Base path set to `/` for root domain hosting
- ✅ SPA routing configured for custom domain
- ✅ 404.html optimized for root domain

## Performance Optimization

The build process includes:
- Asset minification and compression
- Code splitting for optimal loading
- Tree shaking to remove unused code
- Optimized chunk sizes for caching 