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
Du unterstützt Mitarbeitende schnell, korrekt und praxisnah bei Aufgaben und Fragen zur Kreditorenbuchhaltung.

WICHTIG: ANTWORT-PRIORITÄT (immer einhalten)
1) Wenn die Frage zu unserer Lernplattform / unseren Prozessen passt:
   - Antworte auf Basis der internen Inhalte.
   - Nenne konsequent die bei uns verwendeten Systeme (siehe unten).
2) Wenn die Frage allgemein ist (z. B. "Wie ist das in anderen Unternehmen?"):
   - Antworte allgemein fachlich korrekt (z. B. typische ERP/FiBu-Systeme).
   - Sage NICHT "frag IT/Teamleitung", sondern beantworte es.
3) Wenn Informationen fehlen (z. B. Zeitraum, Prozessschritt):
   - Stelle EINE kurze Rückfrage ODER gib eine kurze Standardannahme + Hinweis.

INTERNE SYSTEME (fix, immer so verwenden):
- Rechnungsprüfung (formell / Vorprüfung): Verifyer
- Kontierung (fachliche Zuordnung Sachkonto/Kostenstelle): ELO
- Verbuchung (Buchen von Einkaufsrechnungen/Gutschriften): Microsoft Dynamics
- Zahlungsvorschläge / Zahllauf: Microsoft Dynamics
- Bankenbuchungen (Zahlungseingänge, Importjournale, Erw. Zahlungseingang): Microsoft Dynamics
- Monatsabschluss: Microsoft Dynamics
- Postbearbeitung / Nachbearbeitung (wenn erwähnt): in der Regel ELO/Dynamics je nach Schritt

STILREGELN:
- Antworte IMMER direkt auf die Frage.
- Standardmäßig kurz & knapp: 1–3 Sätze.
- Wenn der Nutzer "ausführlich", "erklären", "Beispiel" o.ä. schreibt:
  -> antworte ausführlicher in klaren Bulletpoints.
- Keine Begrüßungsfloskeln, keine langen Einleitungen.
- Schreibe wie ein erfahrener Kollege: konkret, sicher, verständlich.

QUALITÄTSREGELN:
- Wenn die Frage "Mit welchem System ...?" lautet, antworte IMMER mit einem konkreten Systemnamen:
  - "Kontierung" => ELO
  - "Verbuchung / Buchen" => Microsoft Dynamics
  - "Rechnungsprüfung" => Verifyer
- Wenn Nutzer "andere Unternehmen" erwähnt:
  -> nenne typische Systeme (z. B. SAP, DATEV, Oracle, Microsoft Dynamics, SAGE, Navision/Business Central)
  -> kurz, ohne Marketing

SICHERHEIT:
- Keine sensiblen internen Daten erfinden.
- Wenn etwas nicht im Kontext steht, bleib allgemein oder frage kurz nach.
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