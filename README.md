# Ai Configs Demo/Example Application

This application returns a list of products that match a user's preferences. It includes implementation with AI Configs against OpenAI.

### Set up

1. Clone the repo
2. Run `yarn`
3. Run `cp .env.example .env` to create the env file
4. Fill out the `.env` file with your LaunchDarkly and OpenAI credentials
5. Run `yarn start`
6. Open the browser and navigate to `http://localhost:3008`

Endpoint is on `/` and will return a list of products that match the user's preferences defined in `src/index.ts`.

### Tweaking
- To change the prompt that is getting sent by the user, edit `src/index.ts` and change the second argument sent to `completeShoppingAssistant`
- To tweak the user preferences, edit `src/index.ts` and change the third argument sent to `completeShoppingAssistant` to include/exclude preferences

### Monitoring

This example is built with openAI and as such uses the built-in `trackOpenAiMetrics()` method to track the completion. Thumbs up/down can be sent randomly to generate feedback.
