# GitHub Pages Deployment Guide

## Automatic Deployment Setup

This repository is configured to automatically deploy to GitHub Pages when pull requests are merged to the `master` branch.

### What I've Updated

The GitHub Actions workflow (`.github/workflows/deploy-gh-pages.yml`) now:
- ✅ Triggers on **push to master** (when PRs are merged)
- ✅ Triggers on **PR merge events** (redundant but explicit)
- ✅ Can be **manually triggered** via workflow_dispatch
- ✅ Only builds when PRs are actually **merged** (not just closed)
- ✅ Includes proper **environment configuration** for GitHub Pages

### Required GitHub Repository Settings

For automatic deployment to work, you **must** configure your GitHub repository settings:

#### 1. Enable GitHub Pages with Actions

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under "Build and deployment":
   - **Source**: Select **"GitHub Actions"** (NOT "Deploy from a branch")

   ![GitHub Pages Source](https://docs.github.com/assets/cb-47267/mw-1440/images/help/pages/configure-pages-and-actions.webp)

#### 2. Remove Environment Protection Rules (if any)

If you have environment protection rules that are blocking deployment:

1. Go to **Settings** → **Environments**
2. Click on **github-pages** environment
3. Under "Deployment protection rules":
   - Either remove all protection rules
   - Or add yourself as a required reviewer
   - Or configure the rules to allow automatic deployment

#### 3. Verify Workflow Permissions

1. Go to **Settings** → **Actions** → **General**
2. Scroll to "Workflow permissions"
3. Ensure either:
   - "Read and write permissions" is selected, OR
   - "Read repository contents and packages permissions" is selected with additional permissions granted

## How It Works

### When a PR is Merged:
1. The workflow is triggered automatically
2. It checks out your code
3. Installs dependencies with `npm ci`
4. Runs `npm run build:prod` to build your Angular app
5. Uploads the built files to GitHub Pages
6. Deploys to your GitHub Pages URL

### Manual Deployment:
You can also trigger deployment manually:
1. Go to **Actions** tab in your repository
2. Click **Deploy to GitHub Pages** workflow
3. Click **Run workflow** → Select `master` branch → **Run workflow**

## Troubleshooting

### Deployment Not Running?
- Check that your repository has GitHub Pages enabled
- Verify the "Source" is set to "GitHub Actions" (not "Deploy from a branch")
- Check the Actions tab for any failed workflow runs

### Deployment Failing?
- Review the workflow run logs in the Actions tab
- Common issues:
  - Build errors: Check your code builds locally with `npm run build:prod`
  - Permission errors: Check workflow permissions in Settings → Actions
  - Environment protection: Check Settings → Environments

### Old Deployment Method (angular-cli-ghpages)

The `npm run deploy` command uses `angular-cli-ghpages`, which is an older method that:
- Requires a GitHub token
- Pushes directly to the `gh-pages` branch
- Requires manual execution

The **GitHub Actions approach is recommended** because:
- ✅ No tokens needed
- ✅ Fully automated
- ✅ Better security
- ✅ Build logs and history
- ✅ Can be reviewed before deployment

If you still want to use `npm run deploy` manually, you can, but the automatic deployment via GitHub Actions is the modern, recommended approach.

## Testing Your Setup

After merging this PR, check:
1. **Actions tab** - Verify the workflow runs successfully
2. **Settings → Pages** - Your site URL should show the deployment status
3. Visit your site URL to confirm the changes are live

Your GitHub Pages URL will be:
```
https://princeivankent.github.io/my-portfolio/
```
