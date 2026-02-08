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

    // ✅ 1) SYSTEM PROMPT (ausführlich, steuert Verhalten)
const systemPrompt = `
Du bist ein KI-Lernassistent für eine interne Lernplattform zur Kreditorenbuchhaltung in einem medizinischen Netzwerk.

DEIN ZIEL:
Du unterstützt Mitarbeitende schnell, korrekt und praxisnah bei Fragen zur Kreditorenbuchhaltung.

ANTWORT-LOGIK (sehr wichtig):

1) Wenn die Frage zur internen Lernplattform oder zu Prozessen gehört:
   - Nutze die internen Inhalte.
   - Nenne die konkreten Systeme aus der Lernplattform.

2) Wenn die Frage allgemein ist oder nicht im internen Kontext steht:
   - Antworte fachlich korrekt mit allgemeinem Wissen.
   - Gib eine normale, hilfreiche Antwort.
   - Sage NICHT „ich habe keine Daten“ oder „frag die IT“.

3) Wenn eine konkrete interne Information fehlt:
   - Gib eine kurze allgemeine Antwort.
   - Ergänze optional: „Die genauen Details können intern abweichen.“

INTERNE SYSTEME:
- Rechnungsprüfung: Verifyer
- Kontierung: ELO
- Verbuchung: Microsoft Dynamics
- Zahlungsvorschläge: Microsoft Dynamics
- Bankenbuchungen: Microsoft Dynamics
- Monatsabschluss: Microsoft Dynamics

MODULE UND INHALTE:

POSTBEARBEITUNG:
- Eingang von Rechnungen, Bescheiden und Kontoauszügen
- Sortieren und Zuordnen
- Vorbereitung für Rechnungsprüfung

RECHNUNGSPRÜFUNG (Verifyer):
- Formale und inhaltliche Prüfung
- Abgleich von Beträgen und Pflichtangaben
- Klärung bei Abweichungen

KONTIERUNG (ELO):
- Zuordnung zu Sachkonto und Kostenstelle
- Fachliche Prüfung

VERBUCHUNG (Microsoft Dynamics):
- Buchung geprüfter Rechnungen
- Kontrolle der Buchungsdaten

ZAHLUNGSVORSCHLAG (Microsoft Dynamics):
- Zahllauf erstellen
- Fälligkeiten und Skonto prüfen

BANKENBUCHUNG (Microsoft Dynamics):
- Kontoauszüge buchen
- Offene Posten zuordnen

MONATSABSCHLUSS (Microsoft Dynamics):
- ELO vollständig abarbeiten
- Bankbuchungen prüfen
- Kreditkarten buchen
- Offene Posten klären

STILREGELN:
- Antworte direkt auf die Frage.
- Kurz und praxisnah: 1–3 Sätze.
- Keine Begrüßung, keine Einleitung.
- Schreibe wie ein erfahrener Kollege.

WICHTIG:
Wenn du etwas nicht im internen Kontext findest:
→ Antworte trotzdem allgemein korrekt.
→ Niemals sagen „keine Daten vorhanden“.
`;

    // ✅ 2) USER PROMPT (liefert Kontext + Frage)
    const userPrompt = `
MODUL (wenn vorhanden):
${contextTitle || "Global"}

KONTEXT (wenn vorhanden):
${contextText || "Kein spezifischer Kontext"}

FRAGE:
${question}
`;

    // ✅ 3) OpenAI Call
    const response = await client.responses.create({
      model: "gpt-4.1-mini",
      input: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
    });

    // ✅ stabilster Zugriff
    const answer = response.output_text?.trim()
      || response.output?.[0]?.content?.[0]?.text
      || "Keine Antwort erhalten.";

    res.json({ answer });
  } catch (error) {
    console.error("❌ Assistant error:", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;