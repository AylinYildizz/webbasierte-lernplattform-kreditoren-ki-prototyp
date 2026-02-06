import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import artemisLogo from "../assets/artemis-logo.png";
import praxis1 from "../assets/modules/praxisstandorte/praxis1.png";
import praxis2 from "../assets/modules/praxisstandorte/praxis2.png";
import praxis3 from "../assets/modules/praxisstandorte/praxis3.png";
import praxis4 from "../assets/modules/praxisstandorte/praxis4.png";

function Praxisstandorte() {
  const [query, setQuery] = useState("");

  // Standorte (aus der Standort-Übersicht übernommen)
  // Hinweis: Wenn du später ALLE Detail-Standorte (z.B. Stadtteile) brauchst,
  // können wir das auch als externe JSON / API lösen.
  const standorte = [
    {
      bundesland: "Baden-Württemberg",
      orte: ["Weinheim"],
    },
    {
      bundesland: "Brandenburg",
      orte: ["Cottbus", "Spremberg"],
    },
    {
      bundesland: "Bremen",
      orte: ["Bremen"],
    },
    {
      bundesland: "Hamburg",
      orte: ["Ahrensburg", "Hamburg"],
    },
    {
      bundesland: "Hessen",
      orte: ["Dillenburg", "Frankfurt", "Grünberg", "Herborn", "Limburg", "Wetzlar", "Wiesbaden"],
    },
    {
      bundesland: "Niedersachsen",
      orte: ["Braunschweig", "Hildesheim", "Salzgitter"],
    },
    {
      bundesland: "Nordrhein-Westfalen",
      orte: [
        "Aachen",
        "Arnsberg",
        "Attendorn",
        "Bad Oeynhausen",
        "Bergisch Gladbach",
        "Bielefeld",
        "Bochum",
        "Bonn",
        "Dortmund",
        "Duisburg",
        "Düsseldorf",
        "Essen",
        "Gelsenkirchen",
        "Hagen",
        "Hamm",
        "Iserlohn",
        "Köln",
        "Lippstadt",
        "Minden",
        "Mönchengladbach",
        "Münster",
        "Olpe",
        "Paderborn",
        "Rheine",
        "Siegen",
        "Solingen",
        "Unna",
        "Wuppertal",
      ],
    },
    {
      bundesland: "Rheinland-Pfalz",
      orte: ["Mainz", "Neustadt"],
    },
    {
      bundesland: "Sachsen",
      orte: ["Hoyerswerda", "Kamenz", "Weißwasser"],
    },
    {
      bundesland: "Schleswig-Holstein",
      orte: ["Kiel", "Lübeck", "Schleswig"],
    },
    {
      bundesland: "Thüringen",
      orte: ["Erfurt", "Jena", "Nordhausen", "Sondershausen"],
    },
  ];

  // Filter (Suche über Bundesland + Orte)
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return standorte;

    return standorte
      .map((b) => {
        const ortGefiltert = b.orte.filter((o) => o.toLowerCase().includes(q));
        const landMatch = b.bundesland.toLowerCase().includes(q);
        if (landMatch) return b; // wenn Bundesland matcht: alle Orte zeigen
        if (ortGefiltert.length === 0) return null;
        return { ...b, orte: ortGefiltert };
      })
      .filter(Boolean);
  }, [query]);

  const totalCount = useMemo(
    () => filtered.reduce((sum, b) => sum + b.orte.length, 0),
    [filtered]
  );

  return (
   <div className="module-detail-page">
  <div className="step-screen">
    <div className="module-card step-card-full">
      <img src={artemisLogo} alt="Artemis" className="module-card-logo" />

   <h2>Praxisstandorte</h2>

{/* Abschnitt 1 – Bild links | Text rechts */}
<div className="info-row">
  <div className="info-image">
    <img src={praxis1} alt="Einheitliche Praxisabläufe" />
  </div>

  <div className="info-text">
    <p className="step-task">
      <strong>Einheitliche Abläufe im ARTEMIS-Netzwerk:</strong>{" "}
      Die ARTEMIS Augenkliniken und Medizinischen Versorgungszentren bilden ein
      deutschlandweites Netzwerk spezialisierter Praxen und Kliniken. Trotz der
      Vielzahl an Standorten arbeiten alle Einrichtungen nach klar definierten,
      einheitlichen Abläufen. Diese Standardisierung stellt sicher, dass
      Patientinnen und Patienten an jedem Standort eine vergleichbare,
      qualitativ hochwertige Versorgung erhalten und Mitarbeitende sich
      standortunabhängig sicher orientieren können.
    </p>
  </div>
</div>

{/* Abschnitt 2 – Text links | Bild rechts */}
<div className="info-row reverse">
  <div className="info-image">
    <img src={praxis2} alt="Praxisorganisation" />
  </div>

  <div className="info-text">
    <p className="step-task">
      Einheitliche Abläufe bedeuten, dass zentrale Prozesse – von der
      Patientenaufnahme über die Terminorganisation, medizinische Dokumentation
      und Nachsorge bis hin zu internen Abstimmungen – nach denselben
      Grundprinzipien organisiert sind. Dadurch entstehen Transparenz,
      Nachvollziehbarkeit und ein hohes Maß an Sicherheit im täglichen
      Praxisbetrieb.
    </p>
  </div>
</div>

{/* Abschnitt 3 – Bild links | Text rechts */}
<div className="info-row">
  <div className="info-image">
    <img src={praxis3} alt="Teamarbeit in der Praxis" />
  </div>

  <div className="info-text">
    <div className="step-callout tip">
      <strong>Standardisierte Arbeitsweise im Praxis- und Klinikalltag</strong>
      <ul className="step-points" style={{ marginTop: "0.8rem" }}>
        <li>
          Einheitliche Strukturen in Anmeldung, Sprechstundenplanung, OP-Abläufen
          und Nachsorgeprozessen.
        </li>
        <li>
          Klare Rollen- und Aufgabenverteilungen innerhalb der Teams, unabhängig
          vom Standort.
        </li>
        <li>
          Dokumentierte Prozesse, die neuen Mitarbeitenden eine schnelle und
          sichere Einarbeitung ermöglichen.
        </li>
        <li>
          Reibungslose Zusammenarbeit auch bei standortübergreifenden Einsätzen
          oder Vertretungen.
        </li>
      </ul>
    </div>
  </div>
</div>

{/* Abschnitt 4 – Text links | Bild rechts */}
<div className="info-row reverse">
  <div className="info-image">
    <img src={praxis4} alt="Moderne Augenklinik" />
  </div>

  <div className="info-text">
    <div className="step-callout tip">
      <strong>Qualität, Auszeichnungen und medizinischer Anspruch</strong>
      <ul className="step-points" style={{ marginTop: "0.8rem" }}>
        <li>
          Hoher Qualitätsanspruch durch standardisierte medizinische und
          organisatorische Prozesse.
        </li>
        <li>
          Einsatz moderner Medizintechnik und kontinuierliche Anpassung an neue
          medizinische Standards.
        </li>
        <li>
          Qualitätsmanagementsysteme (z. B. nach DIN EN ISO 9001) an vielen
          Standorten.
        </li>
        <li>
          Regelmäßige Schulungen, Audits und Weiterbildungen für alle
          Mitarbeitenden.
        </li>
      </ul>
    </div>
  </div>
</div>

{/* Abschluss-Text */}
<p className="step-task">
  <strong>Orientierung für neue Mitarbeitende:</strong>{" "}
  Die einheitlichen Abläufe im ARTEMIS-Netzwerk bieten neuen Mitarbeitenden
  eine klare Orientierung. Grundlegende Arbeitsweisen, Qualitätsanforderungen
  und Organisationsstrukturen sind standortübergreifend vergleichbar. Das
  erleichtert den Einstieg, reduziert Unsicherheiten und schafft Vertrauen in
  die täglichen Arbeitsprozesse.
</p>

      <div className="step-actions" style={{ marginTop: "28px" }}>
        <Link to="/">
          <button className="secondary-button">Zurück zur Startseite</button>
        </Link>

        <Link to="/module">
          <button className="primary-button">Zu den Lernmodulen</button>
        </Link>
      </div>

      <p style={{ marginTop: "18px", fontSize: "0.9rem", color: "#4a5a6a" }}>
        Hinweis: Die dargestellten Inhalte beschreiben die allgemeinen
        standortübergreifenden Abläufe und Qualitätsprinzipien im ARTEMIS-Netzwerk.
      </p>
      {/* 🔍 Suche */}
<div className="step-callout">
  <strong>Suche nach Ort oder Bundesland</strong>

  <div style={{ display: "flex", gap: "12px", marginTop: "10px" }}>
    <input
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="z. B. Köln, Hessen, Hamburg …"
      style={{
        flex: 1,
        padding: "12px 14px",
        borderRadius: "12px",
        border: "1px solid #e8eef6",
        fontSize: "1rem",
      }}
    />
    <button
      className="secondary-button"
      onClick={() => setQuery("")}
    >
      Zurücksetzen
    </button>
  </div>

  <p style={{ marginTop: "10px" }}>
    <strong>Treffer:</strong> {totalCount}
  </p>
</div>

{/* 📍 Standortliste */}
<div style={{ marginTop: "18px" }}>
  {filtered.map((b) => (
    <div
      key={b.bundesland}
      className="step-callout success"
      style={{ marginTop: "14px" }}
    >
      <strong>{b.bundesland}</strong>
      <ul className="step-points" style={{ marginTop: "10px" }}>
        {b.orte.map((o) => (
          <li key={o}>{o}</li>
        ))}
      </ul>
    </div>
  ))}
</div>
    </div>
  </div>
</div>
    );
}

export default Praxisstandorte;