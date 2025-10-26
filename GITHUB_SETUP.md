# Push to GitHub - Quick Guide

Follow these steps to push your code to GitHub, then deploy to a free platform.

## Step 1: Create GitHub Repository

1. Go to https://github.com and sign in (or create account)
2. Click the "+" icon → "New repository"
3. Name it: `ai-configs-app` (or any name you want)
4. Make it **Public** (required for free tier on most platforms)
5. **Don't** check "Initialize with README"
6. Click "Create repository"

## Step 2: Push Your Code

Copy and paste these commands one by one in your terminal:

```bash
cd /Users/vamsibhagi/aiconfig-nodejs-docs-example
git init
git add .
git commit -m "Initial commit with LaunchDarkly AI Configs example"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/ai-configs-app.git
git push -u origin main
```

**Replace `YOUR_USERNAME`** with your actual GitHub username!

For example, if your username is `john-doe`, use:
```
git remote add origin https://github.com/john-doe/ai-configs-app.git
```

## Step 3: Verify

1. Go to your GitHub repository page
2. You should see all your files there
3. The `.env` file should **NOT** be there (it's in `.gitignore`)

## Step 4: Deploy!

Now follow the instructions in `DEPLOY_FREE.md` to deploy to Render.com, Railway, or Fly.io.

## Troubleshooting

### "repository not found"
- Make sure you created the repository on GitHub first
- Check your username is correct
- Make sure the repository name matches

### "Authentication failed"
- GitHub might require a Personal Access Token instead of password
- Go to: GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
- Generate new token with `repo` permission
- Use the token as your password when pushing

### ".env file is showing in GitHub"
- That's a security risk! Delete the `.env` file from GitHub:
  1. Edit the `.gitignore` to ensure it has `.env`
  2. Run: `git rm .env`
  3. Run: `git commit -m "Remove .env file"`
  4. Run: `git push`

Now you're ready to deploy! 🚀
