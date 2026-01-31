const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

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
    { id: "zahläufe", title: "Zahlläufe" },
    { id: "monatsabschluss", title: "Monatsabschluss" }
  ]);
});

// Server starten
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`✅ Server läuft auf http://localhost:${PORT}`);
});