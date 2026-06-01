require("dotenv").config();

const { App } = require("@slack/bolt");
const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

app.event("app_mention", async ({ event, say }) => {
  try {
    const userMessage = event.text.replace(/<@[^>]+>/g, "").trim();

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: userMessage,
    });

    await say(response.text);
  } catch (error) {
    console.error(error);
    await say("Sorry, I couldn't generate a response.");
  }
});

(async () => {
  await app.start(process.env.PORT || 3000);
  console.log("⚡ Study Bot is running!");
})();