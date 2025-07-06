# 📚 AI Tutor Chatbot (RAG + OpenRouter + YouTube)

Welcome to **AI Tutor Chatbot** — an intelligent full-stack chatbot that answers your questions with **custom context (RAG)** and suggests **related YouTube videos** automatically!  
Perfect for students, programmers, and anyone curious to learn. 🚀

---

## ✨ Features

✅ **RAG (Retrieval-Augmented Generation)** — answers are improved using your own `.txt` files as context.  
✅ Uses **OpenRouter.ai** or **OpenAI** for generating smart, contextual answers.  
✅ Suggests **relevant YouTube videos** using **RapidAPI** and embeds them directly.  
✅ Clean, modern **animated UI** with typewriter effect, floating header, and pulse animations.  
✅ Fully open source & customizable.

---

## ⚙️ Tech Stack

- **Backend:** Node.js (Express)
- **AI:** OpenRouter API (or OpenAI API)
- **YouTube Search:** RapidAPI (YouTube Search & Download)
- **Frontend:** Vanilla HTML, CSS, JS (No heavy frameworks)
- **RAG:** Local `.txt` files as knowledge base

---

## 📂 Project Structure

/backend
├── index.js
├── rag.js
├── youtube.js
├── .env
└── /data
├── linkedlist.txt
├── trees.txt
└── ... add more as needed

/frontend
├── index.html
├── script.js

.gitignore
README.md


---

## 🗝️ Setup & Run

###  Clone the repo

```bash
git clone https://github.com/YOUR-USERNAME/ai-tutor-chatbot.git
cd ai-tutor-chatbot

cd backend
npm install

OPENROUTER_API_KEY=your_openrouter_api_key_here
RAPIDAPI_KEY=your_rapidapi_key_here

node index.js
Backend should run at http://localhost:3000.
---

## 📝 How it Works

✅ Loads .txt files from /data as custom context (RAG).
✅ Uses OpenRouter’s LLM to generate contextual answers.
✅ Fetches YouTube video using RapidAPI & embeds it.
✅ The frontend shows answers with typewriter animation, glowing buttons, floating title, and smooth transitions


## 📌 Customize

➕ Add more .txt files to /data to expand your knowledge base.
🎨 Tweak styles in index.html for colors, fonts, or more animations.
⚙️ Replace RapidAPI with another provider if needed.


