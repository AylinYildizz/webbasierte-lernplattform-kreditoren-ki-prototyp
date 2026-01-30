const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend läuft erfolgreich!");
});

app.get("/modules", (req, res) => {
  res.json([
    { id: "postbearbeitung", title: "Postbearbeitung" },
    { id: "rechnungspruefung", title: "Rechnungsprüfung" },
    { id: "kontierung", title: "Kontierung" },
    { id: "verbuchung", title: "Verbuchung" },
    { id: "bankenbuchung", title: "Bankenbuchung" },
    { id: "zahlläufe", title: "Zahlläufe" },
    { id: "monatsabschluss", title: "Monatsabschluss" }
  ]);
});


const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
