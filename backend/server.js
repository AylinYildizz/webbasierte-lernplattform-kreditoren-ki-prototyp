require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

console.log("✅ server.js loaded");

const assistantRouter = require("./routes/assistant");
console.log("✅ assistantRouter type:", typeof assistantRouter);

// Assistant API
app.use("/api/assistant", assistantRouter);

// Test-Route
app.get("/", (req, res) => {
  res.send("Backend läuft erfolgreich!");
});

// Modules API
app.get("/modules", (req, res) => {
  res.json([
    { id: "postbearbeitung", title: "Postbearbeitung" },
    { id: "rechnungspruefung", title: "Rechnungsprüfung" },
    { id: "kontierung", title: "Kontierung" },
    { id: "verbuchung", title: "Verbuchung" },
    { id: "bankenbuchung", title: "Bankenbuchung" },
    { id: "zahlungsvorschlag", title: "Zahlungsvorschlag" },
    { id: "monatsabschluss", title: "Monatsabschluss" },
  ]);
});

// Evaluation API
app.post("/api/evaluation", (req, res) => {
  const { answers } = req.body;

  console.log("📊 Neue Evaluation erhalten:");
  console.log(JSON.stringify(answers, null, 2));

  // hier könntest du später in Datei oder Datenbank speichern

  res.json({ success: true });
});

// Server starten
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`✅ Server läuft auf http://localhost:${PORT}`);
});