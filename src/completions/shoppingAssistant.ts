import { LDContext } from "@launchdarkly/node-server-sdk";
import { getLaunchDarklyClients } from "../config/launchdarkly";
import { v4 as uuidv4 } from "uuid";
import { getOpenAI } from "../config/openAI";
import { formatProductForCompletion, getProducts } from "../data/products";

export const completeShoppingAssistant = async (userName: string, userMessage: string, userPreferences: string[]) => {
  const openaiClient = getOpenAI();

  const { productsAvailable } = await getProducts();

  const { aiClient } = await getLaunchDarklyClients();
  // Create the user context for this request
  const ctx: LDContext = {
    key: uuidv4(),
    kind: "user",
    name: userName,
  };

  // Retrieve the AI Configuration for this context
  const aiConfig = await aiClient.config(
    // Our AI Config key, which can be copied from the sidebar in the LaunchDarkly UI
    "chat-helper-v1",
    // The context for this request
    ctx,
    // A fallback configuration; in our case, we'll skip execution if the AI Config is disabled
    {},
    // The parameters for this AI Config; these will replace our {{}} placeholders in the LaunchDarkly UI
    {
        preferences: userPreferences,
        // Fetch our mock product data and format it for the completion matching the format we provided to the model
        productsAvailable: productsAvailable.map(product => formatProductForCompletion(product)),
    }
  );
  // If our AI Config is disabled, throw an error to be handled appropriately by the application
  if (!aiConfig.enabled) {
    throw new Error("AI configuration is disabled");
  }



  // Track the completion and return the result
  const completion = await aiConfig.tracker.trackOpenAIMetrics(async () => await openaiClient.chat.completions.create({
      model: aiConfig.model!.name as string,
      messages: [
        // Add the system and assistant messages from the AI Config, as well as the user message
        ...aiConfig.messages!,
        { role: "user", content: userMessage }
      ],
    }))


    return `<pre>${completion.choices[0].message.content}</pre>`;
};
