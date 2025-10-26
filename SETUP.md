# AI Configs Example Application - Setup Guide

This application returns a list of products that match a user's preferences. It includes implementation with AI Configs against OpenAI and LaunchDarkly feature flags.

## Prerequisites

1. **LaunchDarkly Account**: Sign up at [https://launchdarkly.com](https://launchdarkly.com)
2. **OpenAI API Key**: Get your API key from [https://platform.openai.com/api-keys](https://platform.openai.com/api-keys)

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

The `.env` file has been created for you. You need to fill in your credentials:

```bash
OPENAI_API_KEY=your-openai-api-key-here
LAUNCHDARKLY_SDK_KEY=your-launchdarkly-sdk-key-here
```

#### How to get your LaunchDarkly SDK Key:
1. Log in to your LaunchDarkly account
2. Go to **Account settings** → **Projects**
3. Select your project (or create a new one)
4. Go to **Environments** and select your environment
5. Copy the **SDK key** for that environment

#### How to get your OpenAI API Key:
1. Go to [https://platform.openai.com/api-keys](https://platform.openai.com/api-keys)
2. Sign in or create an account
3. Click **"Create new secret key"**
4. Copy the key (you won't be able to see it again)

### 3. LaunchDarkly AI Config Setup

You need to create an AI Config in LaunchDarkly:

1. In your LaunchDarkly dashboard, go to **AI Configs** (or create one in your project)
2. Create a new AI Config with the key: `chat-helper-v1`
3. Configure it with the following parameters:
   - **Model**: Choose an OpenAI model (e.g., `gpt-4` or `gpt-3.5-turbo`)
   - **System Message**: Something like "You are a helpful shopping assistant that recommends products based on user preferences."
   - **Assistant Message**: Optional assistant message
   - **Placeholders**: Use `{{preferences}}` and `{{productsAvailable}}` as placeholders
4. Save and **enable** the AI Config

### 4. Start the Server

```bash
npm start
```

Or to run once:

```bash
npm run run-once
```

### 5. Test the Application

Open your browser and navigate to: `http://localhost:3008`

You should see a list of products that match the user's preferences.

## Customization

### Change User Preferences

Edit `src/index.ts` and modify the third argument to `completeShoppingAssistant`:

```typescript
return await completeShoppingAssistant(
  "Sandy", 
  "I'm looking for a smart watch", 
  ["athletic", "casual", "running"] // Change these preferences
)
```

### Change User Query

Edit `src/index.ts` and modify the second argument to `completeShoppingAssistant`:

```typescript
return await completeShoppingAssistant(
  "Sandy", 
  "I'm looking for running shoes", // Change the user query
  ["athletic", "casual", "running"]
)
```

### Change User Name

Edit `src/index.ts` and modify the first argument to `completeShoppingAssistant`:

```typescript
return await completeShoppingAssistant(
  "John", // Change the user name
  "I'm looking for a smart watch", 
  ["athletic", "casual", "running"]
)
```

## Monitoring

This example uses OpenAI's built-in `trackOpenAiMetrics()` method to track the completion and performance.

## Deployment

### Deploy to Render.com

1. Push your code to GitHub
2. Go to [Render.com](https://render.com) and create a new **Web Service**
3. Connect your GitHub repository
4. Configure the service:
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Environment**: Add your environment variables:
     - `OPENAI_API_KEY`
     - `LAUNCHDARKLY_SDK_KEY`
5. Deploy!

### Deploy to Heroku

1. Install Heroku CLI
2. Run:
   ```bash
   heroku create your-app-name
   heroku config:set OPENAI_API_KEY=your-key
   heroku config:set LAUNCHDARKLY_SDK_KEY=your-key
   git push heroku main
   ```

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Add environment variables:
   - `OPENAI_API_KEY`
   - `LAUNCHDARKLY_SDK_KEY`
5. Deploy!

## Troubleshooting

### "AI Config is disabled"
- Go to your LaunchDarkly dashboard and enable the AI Config

### "SDK initialization timeout"
- Check that your LaunchDarkly SDK key is correct
- Make sure your LaunchDarkly account is active

### "OpenAI API error"
- Verify your OpenAI API key is correct
- Check that you have credits in your OpenAI account

## Next Steps

Once deployed, you can test LaunchDarkly feature flags by:
1. Going to your LaunchDarkly dashboard
2. Disabling the `chat-helper-v1` AI Config to see the fallback behavior
3. Enabling it again to restore normal functionality
4. Experiment with different AI Config configurations and see how it affects the responses
