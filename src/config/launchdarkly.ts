import { init, LDClient, LDContext } from "@launchdarkly/node-server-sdk";
import { initAi, LDAIClient } from "@launchdarkly/server-sdk-ai";

const LD_SDK_KEY = process.env.LAUNCHDARKLY_SDK_KEY;

const ldClient: LDClient = init(LD_SDK_KEY as string);

const aiClient: LDAIClient = initAi(ldClient);
// Initialize and return the LaunchDarkly client
export const getLaunchDarklyClients = async () => {
  try {
    await ldClient.waitForInitialization({ timeout: 10 });
    
    // Track a custom event to validate SDK connectivity
    const context: LDContext = {
      kind: 'user',
      key: 'sdk-validation-user',
      name: 'SDK Validation Test'
    };
    
    ldClient.track('sdk-initialized', context, { source: 'cursor' });
    console.log('LaunchDarkly SDK successfully initialized and tracking enabled!');
  } catch (err) { 
    console.error('LaunchDarkly SDK initialization error:', err);
  }
  return { ldClient, aiClient };
};
