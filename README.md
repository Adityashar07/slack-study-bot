🤖 Slack AI Study Bot

An intelligent Slack bot designed to enhance productivity and learning by integrating AI-powered question answering and quiz generation directly within Slack.


🚀 Overview

Slack AI Study Bot is a cloud-deployed application that allows users to interact with an AI assistant inside Slack using simple commands. It leverages modern APIs and real-time event handling to deliver instant, structured, and meaningful responses.


✨ Key Features

- 🧠 Quiz Generator ("/quiz")
  Generate multiple-choice quizzes on any topic for quick learning and revision.

- 🎨 Structured UI with Block Kit
  Clean and readable responses using Slack’s Block Kit interface.

- ⚡ Real-Time Interaction
  Event-driven architecture ensures immediate response to user inputs.

- ☁️ Cloud Deployment
  Fully deployed on Render, enabling 24/7 availability without local dependency.
  

🛠️ Tech Stack
- Backend: Node.js
- Framework: Slack Bolt
- AI Engine: Google Gemini API
- Deployment: Render
- Language: JavaScript


⚙️ Setup Instructions

1. Clone Repository

git clone https://github.com/your-username/slack-study-bot.git
cd slack-study-bot

2. Install Dependencies

npm install

3. Configure Environment Variables

Create a ".env" file and add:

SLACK_BOT_TOKEN=your_slack_bot_token
SLACK_SIGNING_SECRET=your_signing_secret
GEMINI_API_KEY=your_gemini_api_key

4. Run Locally

node app.js

🌐 Deployment
The application is deployed on Render with:
- Continuous deployment via GitHub
- Secure environment variable management
- Public endpoint for Slack Events API


🔗 Slack Integration
- Slash Commands: "/quiz"
- Event Subscriptions enabled
- Real-time message handling via Slack Events API


🎯 Use Cases
- 📚 Students for quick learning assistance
- 🧪 Practice quizzes for exam preparation
- 💡 Instant clarification of concepts
- 👨‍💻 Developers for quick technical queries


🔒 Security & Best Practices
- API keys managed using environment variables
- No sensitive data stored in repository


🚀 Future Enhancements
- 🎯 Interactive quiz with answer buttons
- 📊 Score tracking system
- ⏰ Daily automated quiz notifications
- 💾 Database integration for user progress


👨‍💻 Author
Aditya Sharma
