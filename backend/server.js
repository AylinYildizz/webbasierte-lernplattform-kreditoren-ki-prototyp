require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

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

// Evaluation API (Speichert Antworten)
app.post("/api/evaluation", (req, res) => {
  const { answers } = req.body;

  const filePath = path.join(__dirname, "evaluation-results.json");

  let data = [];

  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, "utf8");
    data = JSON.parse(fileContent);
  }

  data.push(answers);

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  console.log("📊 Neue Evaluation gespeichert");

  res.json({ success: true });
});

// Server starten
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`✅ Server läuft auf http://localhost:${PORT}`);
});