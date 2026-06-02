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

app.command('/quiz', async ({ command, ack, say }) => {
  await ack();

  const topic = command.text;

  try {
    const prompt = `
    Generate 3 multiple choice questions on ${topic}.
    Each question should have 4 options (A, B, C, D) and correct answer.
    Format clearly.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response.text();

    await say({
  text: `Quiz on ${topic}`,
  blocks: [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `🧠 *Quiz on ${topic}*\n\n${response}`
      }
    }
  ]
});
  } catch (error) {
    console.error(error);
    await say("sorry, I couldn't generate a quiz.");
  }
});