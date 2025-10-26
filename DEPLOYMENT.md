# Deployment Guide for AI Configs Example

This guide will help you deploy the AI Configs Example application to various platforms so you can test LaunchDarkly feature flags in a deployed environment.

## Quick Deploy Options

### Option 1: Render.com (Recommended - Easiest)

1. **Fork the repository** to your GitHub account

2. **Go to [Render.com](https://render.com)** and sign up/login

3. **Create a New Web Service**:
   - Click "New +" → "Web Service"
   - Connect your GitHub account
   - Select your forked repository
   - Use these settings:
     - **Name**: `ai-configs-example` (or your preferred name)
     - **Region**: Choose closest to you
     - **Branch**: `main` or `master`
     - **Runtime**: Node
     - **Build Command**: `npm install`
     - **Start Command**: `npm start`

4. **Add Environment Variables**:
   - In the Environment section, add:
     - `OPENAI_API_KEY` = your OpenAI API key
     - `LAUNCHDARKLY_SDK_KEY` = your LaunchDarkly SDK key

5. **Deploy**:
   - Click "Create Web Service"
   - Wait for deployment to complete (usually 2-5 minutes)
   - Your app will be live at `https://your-app-name.onrender.com`

6. **Access your app** and test LaunchDarkly!

### Option 2: Railway

1. **Fork the repository** to your GitHub account

2. **Go to [Railway.app](https://railway.app)** and sign up/login

3. **Create New Project**:
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Select your forked repository

4. **Configure Variables**:
   - Go to "Variables" tab
   - Add:
     - `OPENAI_API_KEY` = your OpenAI API key
     - `LAUNCHDARKLY_SDK_KEY` = your LaunchDarkly SDK key

5. **Deploy**:
   - Railway will automatically detect Node.js and deploy
   - Wait for deployment to complete
   - Your app will be live at the generated domain

### Option 3: Fly.io

1. **Install Fly.io CLI**:
   ```bash
   curl -L https://fly.io/install.sh | sh
   ```

2. **Login to Fly.io**:
   ```bash
   fly auth login
   ```

3. **Create fly.toml** (create this file in the project root):
   ```toml
   app = "your-app-name"
   primary_region = "iad"

   [build]

   [env]
     OPENAI_API_KEY = "your-openai-key"
     LAUNCHDARKLY_SDK_KEY = "your-ld-key"

   [[services]]
     internal_port = 3008
     protocol = "tcp"
     [services.concurrency]
       hard_limit = 25
       soft_limit = 20

     [[services.ports]]
       handlers = ["http"]
       port = 80
       force_https = true

     [[services.ports]]
       handlers = ["tls", "http"]
       port = 443

     [[services.tcp_checks]]
       interval = "15s"
       timeout = "2s"
       grace_period = "1s"
   ```

4. **Deploy**:
   ```bash
   fly deploy
   ```

### Option 4: Heroku

1. **Install Heroku CLI**:
   ```bash
   # macOS
   brew tap heroku/brew && brew install heroku
   # or download from https://devcenter.heroku.com/articles/heroku-cli
   ```

2. **Login to Heroku**:
   ```bash
   heroku login
   ```

3. **Create App**:
   ```bash
   heroku create your-app-name
   ```

4. **Add Environment Variables**:
   ```bash
   heroku config:set OPENAI_API_KEY=your-openai-key
   heroku config:set LAUNCHDARKLY_SDK_KEY=your-ld-key
   ```

5. **Deploy**:
   ```bash
   git push heroku main
   ```

6. **Access your app**:
   ```bash
   heroku open
   ```

### Option 5: DigitalOcean App Platform

1. **Fork the repository** to your GitHub account

2. **Go to [DigitalOcean App Platform](https://cloud.digitalocean.com/apps)**

3. **Create App**:
   - Click "Create App"
   - Connect GitHub account
   - Select your repository

4. **Configure**:
   - **Runtime**: Node.js
   - **Build Command**: `npm install`
   - **Run Command**: `npm start`

5. **Add Environment Variables**:
   - Add your API keys in the Environment Variables section

6. **Deploy**:
   - Click "Create Resources"
   - Wait for deployment

## Post-Deployment Testing

Once your app is deployed, test LaunchDarkly:

1. **Visit your deployed URL** (e.g., `https://your-app.onrender.com`)

2. **Verify the app is working** - you should see product recommendations

3. **Test LaunchDarkly Feature Flags**:
   - Go to your LaunchDarkly dashboard
   - Find the `chat-helper-v1` AI Config
   - **Disable** the AI Config
   - Refresh your deployed app - it should show "AI Config is disabled"
   - **Enable** the AI Config again
   - Refresh your app - it should work normally

4. **Experiment with different configurations** in LaunchDarkly and see how they affect your deployed app

## Important Notes

- **API Keys**: Never commit your `.env` file to git. It's already in `.gitignore`
- **Environment Variables**: Always use environment variables in deployed environments, never hardcode keys
- **Billing**: Some platforms offer free tiers, but check pricing before deploying
- **Cold Starts**: Free tiers may have cold starts (slower first request after inactivity)

## Monitoring

- Monitor your OpenAI API usage to avoid unexpected costs
- Check LaunchDarkly dashboard for AI Config usage and performance metrics
- Monitor your deployed app's logs for any errors

## Troubleshooting Deployment Issues

### Build Failures
- Check that all dependencies are in `package.json`
- Verify Node.js version compatibility

### Runtime Errors
- Check environment variables are set correctly
- Verify API keys are valid and have proper permissions
- Check application logs for specific error messages

### Timeout Issues
- Some platforms have request timeouts on free tiers
- Consider upgrading if you need longer processing times

## Need Help?

- Check the main README.md and SETUP.md for configuration help
- Review LaunchDarkly documentation
- Check platform-specific documentation for deployment issues
