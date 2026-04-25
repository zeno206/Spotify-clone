const express = require("express");
const OpenAI = require("openai");
const router = express.Router();
require("dotenv").config();

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});
router.post("/chatbox", async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await client.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [{ role: "user", content: prompt }],
    });

    const reply = response.choices[0].message.content;

    res.json({ reply });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

module.exports = router;
