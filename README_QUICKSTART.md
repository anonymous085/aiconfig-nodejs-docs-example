# Quick Start Guide

## 🚀 Get Started in 5 Minutes

### 1. Configure API Keys

Edit the `.env` file with your credentials:

```bash
OPENAI_API_KEY=your-openai-key-here
LAUNCHDARKLY_SDK_KEY=your-launchdarkly-key-here
```

**Need API keys?**
- OpenAI: https://platform.openai.com/api-keys
- LaunchDarkly: Go to Account Settings → Projects → Your Project → Environments → SDK Key

### 2. Install and Run

```bash
npm install
npm start
```

### 3. Test Locally

Open http://localhost:3008 in your browser

### 4. Test LaunchDarkly

1. Go to LaunchDarkly dashboard
2. Create an AI Config with key: `chat-helper-v1`
3. Enable/disable it and refresh http://localhost:3008 to see the difference!

## 📖 Detailed Documentation

- **Setup Guide**: See `SETUP.md` for detailed configuration
- **Deployment**: See `DEPLOYMENT.md` to deploy and test in production
- **Original README**: See `README.md` for the original documentation

## 🎯 What This App Does

This is a shopping assistant that:
- Uses OpenAI to recommend products based on user preferences
- Controlled by LaunchDarkly AI Configs for feature flagging
- Demonstrates how to integrate LaunchDarkly with AI applications

## 🔧 Customize

Edit `src/index.ts` to change:
- User name
- User query
- User preferences

## 📍 Location

The app is located at: `/Users/vamsibhagi/aiconfig-nodejs-docs-example`
