# 🚀 Quick Start - Deploy for Free

Want to test LaunchDarkly without running locally? Follow these steps:

## 📋 What You Need

1. **GitHub account** (free) - https://github.com
2. **OpenAI API key** (free tier available) - https://platform.openai.com/api-keys
3. **LaunchDarkly account** (free tier) - https://launchdarkly.com

## 🎯 Pick Your Platform

### Option 1: Render.com (Easiest) ⭐ Recommended
- ✅ Completely free tier
- ✅ Easiest to set up
- ✅ 5 minutes to deploy
- ⚠️ Sleeps after 15 min (wakes on request)

### Option 2: Railway
- ✅ $5 free credit/month
- ✅ No sleeping
- ✅ Very easy

### Option 3: Fly.io
- ✅ Generous free tier
- ✅ No sleeping
- ⚠️ Requires CLI installation

## 📖 Step-by-Step Guide

### Step 1: Push to GitHub
➡️ **Read**: `GITHUB_SETUP.md`
- Create GitHub repo
- Push your code

### Step 2: Deploy to Platform
➡️ **Read**: `DEPLOY_FREE.md`
- Choose Render.com, Railway, or Fly.io
- Follow the step-by-step instructions
- Add your API keys as environment variables

### Step 3: Test LaunchDarkly
1. Visit your deployed URL
2. Go to LaunchDarkly dashboard
3. Toggle the AI Config on/off
4. Refresh your app - see the difference!

## 📚 Additional Guides

- **Detailed Setup**: See `SETUP.md` for configuration details
- **Deployment Options**: See `DEPLOYMENT.md` for all platform options
- **Quick Reference**: See `README_QUICKSTART.md`

## 🎯 Your Goal

Deploy the app so you can:
- Test LaunchDarkly feature flags in a real environment
- Toggle AI Configs on/off
- See immediate changes without redeploying
- Share your demo URL with others

## ⚡ Quick Commands

Already have GitHub repo? Push and deploy:

```bash
cd /Users/vamsibhagi/aiconfig-nodejs-docs-example
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/ai-configs-app.git
git push -u origin main
```

Then follow the deployment steps in `DEPLOY_FREE.md`!

## ❓ Need Help?

- Check the platform-specific guides
- Review the troubleshooting sections
- Make sure your API keys are correct

Ready to deploy? Start with `GITHUB_SETUP.md` → `DEPLOY_FREE.md` 🚀
