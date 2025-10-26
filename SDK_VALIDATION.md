# LaunchDarkly Node.js SDK Setup - Validation Guide

## ✅ Setup Complete!

The LaunchDarkly Node.js (Server) SDK has been configured in this project with the following features:

### What's Been Added

1. **SDK Package**: Already installed (`@launchdarkly/node-server-sdk@9.7.2`)

2. **Initialization**: SDK is initialized in `src/config/launchdarkly.ts` using:
   - Environment variable: `process.env.LAUNCHDARKLY_SDK_KEY`
   - No hard-coded secrets

3. **Tracking Events**: Two track calls have been added:
   - **On SDK initialization** (in `getLaunchDarklyClients()`):
     - Event name: `sdk-initialized`
     - Custom data: `{ source: 'cursor' }`
   - **On shopping assistant usage** (in `completeShoppingAssistant()`):
     - Event name: `shopping-assistant-used`
     - Custom data: `{ source: 'cursor', preferences: <user-preferences> }`

4. **Flag Evaluation**: Example flag evaluation added:
   - Flag key: `show-recommendations`
   - Evaluated for context: User context
   - Default value: `false`

### Configuration Required

To validate the setup, you need to:

1. **Set your LaunchDarkly SDK key** in the `.env` file:
   ```bash
   LAUNCHDARKLY_SDK_KEY=your-actual-sdk-key-here
   ```

2. **Get your SDK key from LaunchDarkly**:
   - Go to: https://app.launchdarkly.com
   - Navigate to: Account Settings → Projects → Your Project → Environments
   - Copy the "SDK Key" for your environment

3. **Get your OpenAI API key**:
   ```bash
   OPENAI_API_KEY=your-actual-openai-key-here
   ```

### How to Test

1. **Start the application**:
   ```bash
   npm start
   ```

2. **Look for these console messages**:
   - `LaunchDarkly SDK successfully initialized and tracking enabled!`
   - `Feature flag "show-recommendations" value: <true/false>`

3. **Visit** http://localhost:3008

4. **Check your LaunchDarkly dashboard** for:
   - Custom event: `sdk-initialized` (should appear after initialization)
   - Custom event: `shopping-assistant-used` (should appear when you visit the page)

### Validation Checklist

- ✅ SDK package installed (`@launchdarkly/node-server-sdk`)
- ✅ SDK initialized with environment variable
- ✅ No hard-coded secrets
- ✅ Track call on initialization
- ✅ Track call on feature usage
- ✅ Example flag evaluation included
- ✅ Custom event data includes `source: 'cursor'`

### Next Steps

1. Replace the SDK key placeholders in `.env`
2. Run `npm start`
3. Visit http://localhost:3008
4. Check your LaunchDarkly dashboard for events
5. (Optional) Create the `show-recommendations` flag in LaunchDarkly to test flag evaluation

### Flag Evaluation Example

The code now evaluates a flag called `show-recommendations`. To test this:

1. Go to your LaunchDarkly dashboard
2. Create a boolean flag with key: `show-recommendations`
3. Target it to specific users or set default values
4. Run the app and check the console for the flag value
5. Toggle the flag in LaunchDarkly and see the change reflected in your app

### Troubleshooting

**Issue**: "SDK initialization error"
- Check that your `LAUNCHDARKLY_SDK_KEY` is correct
- Verify your LaunchDarkly account is active
- Check your internet connection

**Issue**: "No events appearing in LaunchDarkly"
- Verify your SDK key is correct
- Check that your environment in LaunchDarkly matches your SDK key
- Wait a few seconds (events may take a moment to appear)

**Issue**: Flag evaluation returns default value
- Create the flag in LaunchDarkly first
- Ensure the flag key matches exactly: `show-recommendations`
- Verify the flag is enabled in LaunchDarkly

### References

- [LaunchDarkly Node.js SDK Documentation](https://docs.launchdarkly.com/sdk/server-side/node-js)
- [SDK Events Documentation](https://docs.launchdarkly.com/sdk/features/events)
