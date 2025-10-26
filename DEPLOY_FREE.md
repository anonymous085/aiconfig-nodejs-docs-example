# Deploy Free - Step by Step Guide

## 🎯 Recommended: Render.com (Free Tier)

### Why Render.com?
- ✅ Free tier available (no credit card required for Free tier)
- ✅ Auto-deploys from GitHub
- ✅ Easy setup (5 minutes)
- ✅ Custom domain support (free subdomain)
- ⚠️ Sleeps after 15 min inactivity (wakes up on first request)

### Deploy to Render.com (Free) - Complete Guide

#### Step 1: Get Your Code on GitHub

If the code is already on GitHub, skip to Step 2. Otherwise:

1. Go to https://github.com and create an account (if needed)
2. Create a new repository:
   - Click "New" repository
   - Name it `ai-configs-app`
   - Make it **Public** (required for free tier)
   - Click "Create repository"
3. Copy the repository link (e.g., `https://github.com/yourusername/ai-configs-app.git`)

4. In your terminal:
```bash
cd /Users/vamsibhagi/aiconfig-nodejs-docs-example
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/ai-configs-app.git
git push -u origin main
```

Replace `yourusername` with your GitHub username.

#### Step 2: Deploy to Render

1. Go to https://render.com and sign up (use GitHub login)

2. Click "New +" → "Web Service"

3. Connect GitHub repository:
   - If prompted, authorize Render to access GitHub
   - Select your repository (`ai-configs-app`)

4. Configure the service:
   - **Name**: `ai-configs-app` (or any name you like)
   - **Region**: Choose closest to you
   - **Branch**: `main`
   - **Root Directory**: Leave empty
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`

5. Add Environment Variables:
   - Click "Add Environment Variable" and add:
     - `OPENAI_API_KEY` = your OpenAI API key
     - `LAUNCHDARKLY_SDK_KEY` = your LaunchDarkly SDK key
   
   **Important**: Never commit these keys to GitHub!

6. Click "Create Web Service"

7. Wait 2-5 minutes for deployment to complete

8. Your app is live! Get the URL from Render (e.g., `https://ai-configs-app.onrender.com`)

### That's it! 🎉

Visit your URL and test the app. Then test LaunchDarkly by enabling/disabling the AI Config in your LaunchDarkly dashboard.

---

## Alternative: Railway (Free with $5 Credit)

### Why Railway?
- ✅ $5 free credit monthly
- ✅ No sleep on free tier
- ✅ Even easier setup

### Deploy to Railway

1. Go to https://railway.app
2. Sign up with GitHub
3. Click "New Project"
4. Select "Deploy from GitHub repo"
5. Select your repository
6. Add environment variables:
   - Click on your service
   - Go to "Variables" tab
   - Add `OPENAI_API_KEY` and `LAUNCHDARKLY_SDK_KEY`
7. Done! Get your URL from Railway

---

## Alternative: Fly.io (Free Tier)

### Why Fly.io?
- ✅ Generous free tier
- ✅ No sleep issues
- ✅ Global edge network

### Deploy to Fly.io

1. Install Fly CLI:
```bash
curl -L https://fly.io/install.sh | sh
```

2. Login:
```bash
fly auth login
```

3. Navigate to your project:
```bash
cd /Users/vamsibhagi/aiconfig-nodejs-docs-example
```

4. Launch:
```bash
fly launch
```

5. Follow the prompts:
   - App name: (auto-generated or type your own)
   - Region: Choose closest to you
   - PostgreSQL: No
   - Redis: No

6. Set environment variables:
```bash
fly secrets set OPENAI_API_KEY=your-key-here
fly secrets set LAUNCHDARKLY_SDK_KEY=your-key-here
```

7. Deploy:
```bash
fly deploy
```

8. Open your app:
```bash
fly open
```

---

## Comparison

| Platform | Free Tier | Sleep | Setup Time | Best For |
|----------|-----------|-------|------------|----------|
| **Render.com** | ✅ Yes | ⚠️ 15 min | ⭐⭐⭐⭐⭐ Easiest | Quick demos |
| **Railway** | 💰 $5 credit | ✅ No | ⭐⭐⭐⭐ Easy | Active testing |
| **Fly.io** | ✅ Yes | ✅ No | ⭐⭐⭐ Medium | Production-like |

---

## Get Your API Keys

### OpenAI API Key
1. Go to https://platform.openai.com/api-keys
2. Click "Create new secret key"
3. Copy the key (save it - you won't see it again)

### LaunchDarkly SDK Key
1. Go to https://app.launchdarkly.com
2. Navigate to: Account Settings → Projects → Your Project → Environments
3. Click on your environment
4. Copy the "SDK Key"

---

## Test LaunchDarkly After Deployment

1. Visit your deployed URL (e.g., `https://your-app.onrender.com`)
2. You should see product recommendations
3. Go to your LaunchDarkly dashboard
4. Find the AI Config with key: `chat-helper-v1`
5. **Disable** the config
6. Refresh your deployed app
7. **Enable** the config again
8. Refresh again - it should work!

This proves your app is connected to LaunchDarkly! 🎉
