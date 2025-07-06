import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import OpenAI from 'openai';
import { loadRAGDocs, findRelevantChunks } from './rag.js';
import { searchYouTube } from './youtube.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

const docs = await loadRAGDocs();

app.post('/api/chat', async (req, res) => {
  const { question } = req.body;

  const contextChunks = findRelevantChunks(question, docs);

  const prompt = `
Answer the question using the context below:
Context:
${contextChunks.join('\n\n')}

Question:
${question}
`;

  const completion = await openai.chat.completions.create({
    model: 'mistralai/mistral-7b-instruct',
    messages: [
      { role: "system", content: "You are a helpful tutor." },
      { role: "user", content: prompt }
    ]
  });

  const answer = completion.choices[0].message.content;

  const videoId = await searchYouTube(question);

  res.json({ answer, videoId });
});

app.listen(3000, () => console.log(' Backend running on http://localhost:3000'));
