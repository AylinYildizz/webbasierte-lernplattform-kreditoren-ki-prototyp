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

Du bist ein KI-Lernassistent für eine interne Lernplattform zur Kreditorenbuchhaltung.

Regeln:
- Antworte freundlich, klar und praxisnah.
- Antworte immer direkt auf die Frage des Nutzers.
- Keine unnötigen Einleitungen.
- Keine Standard-Begrüßungstexte.

Wenn die Frage Smalltalk ist:
- Antworte kurz und natürlich (max. 1–2 Sätze).

Wenn es eine Fachfrage ist:
- Antworte strukturiert und verständlich
- Erkläre wie ein erfahrener Kollege
MODUL:
${contextTitle || "Global"}

KONTEXT:
${contextText || "Kein spezifischer Kontext"}

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