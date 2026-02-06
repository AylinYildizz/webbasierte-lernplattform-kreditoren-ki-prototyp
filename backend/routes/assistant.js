const express = require("express");
const OpenAI = require("openai");

const router = express.Router();

console.log("🔥 assistant router file loaded");

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.post("/", async (req, res) => {
  console.log("📩 POST /api/assistant HIT");

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
- kurze Absätze, mit klaren Antworten
- freundlich und hilfsbereit


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

    // ✅ DAS ist der korrekte Zugriff
    const answer =
      response.output?.[0]?.content?.[0]?.text || "Keine Antwort erhalten.";

    res.json({ answer });
  } catch (error) {
    console.error("❌ Assistant OpenAI error:", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;