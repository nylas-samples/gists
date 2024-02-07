import 'dotenv/config';
import Nylas, { WebhookTriggers } from "nylas"

const NylasConfig = {
  apiKey: process.env.NYLAS_API_KEY as string,
  apiUri: process.env.NYLAS_API_URI as string,
};

const nylas = new Nylas(NylasConfig);

const createWebhook = async () => {
  try {
    const webhook = await nylas.webhooks.create({
      requestBody: {
        triggerTypes: [WebhookTriggers.EventCreated],
        callbackUrl: process.env.CALLBACK_URL as string,
        description: "My first webhook",
        notificationEmailAddress: process.env.EMAIL as string,
      }
    });

    console.log("Webhook createdd:", webhook);
  } catch (error) {
    console.error("Error creating webhook:", error);
  }
}

createWebhook();
