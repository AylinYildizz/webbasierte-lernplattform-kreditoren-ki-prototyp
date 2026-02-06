import express from "express";
import OpenAI from "openai";

const router = express.Router();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.post("/", async (req, res) => {
  try {
    const { question, contextTitle, contextText } = req.body;

    if (!question) {
      return res.status(400).json({ error: "No question provided" });
    }

    const prompt = `
Du bist ein KI-Lernassistent für eine interne Lernplattform
zur Kreditorenbuchhaltung in einem medizinischen Netzwerk.

Regeln:
- Antworte klar, strukturiert und praxisnah
- Erkläre verständlich für neue Mitarbeitende
- Keine Fantasie, keine externen Annahmen

MODUL:
${contextTitle}

KONTEXT:
${contextText}

FRAGE:
${question}
`;

    const response = await client.responses.create({
      model: "gpt-4.1-mini",
      input: prompt,
    });

    res.json({
      answer: response.output_text,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Assistant error" });
  }
});

export default router;