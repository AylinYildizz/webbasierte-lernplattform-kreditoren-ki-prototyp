import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import introImage from "../assets/modules/postbearbeitung-intro.jpg";

function ModuleDetail() {
  const { id } = useParams();
  const isPostbearbeitung = id === "postbearbeitung";

  const steps = [
    {
      title: "Schritt 1: Posteingang prüfen",
      task: "Post aus dem Fach der Buchhaltung entnehmen und einen Überblick verschaffen.",
      points: [
        "Post trifft täglich gegen Mittag im Fach der Buchhaltung ein",
        "Alle Dokumente vollständig entnehmen"
      ],
      result: "Alle Dokumente sind gesammelt und bereit für die Sortierung."
    },
    {
      title: "Schritt 2: Grobsortierung nach Zuständigkeit",
      task: "Die eingehende Post nach Zuständigkeiten trennen.",
      points: [
        "Buchhaltung / Kreditoren",
        "Hauptbuch",
        "Andere Abteilungen (z. B. HR, Abrechnung)"
      ],
      result: "Die Post ist übersichtlich vorsortiert."
    },
    {
      title: "Schritt 3: Dokumentart erkennen",
      task: "Jedes Dokument einer passenden Kategorie zuordnen.",
      points: [
        "Rechnungen, Mahnungen, Kreditkartenabrechnungen",
        "Kontoauszüge oder debitorische Unterlagen"
      ],
      result: "Die weitere Bearbeitung ist eindeutig festgelegt."
    },
    {
      title: "Schritt 4: Rechnungen bearbeiten",
      task: "Eingangsrechnungen korrekt vorbereiten.",
      points: [
        "Bereits gescannte Rechnungen korrekt ablegen",
        "Nicht gescannte Rechnungen digitalisieren und weiterleiten"
      ],
      result: "Rechnungen sind korrekt vorbereitet."
    },
    {
      title: "Schritt 5: Mahnungen gesondert behandeln",
      task: "Mahnungen priorisiert bearbeiten.",
      points: [
        "Mahnungen einscannen",
        "Unverzüglich weiterleiten",
        "Anschließend korrekt ablegen"
      ],
      result: "Zahlungsfristen können eingehalten werden."
    },
    {
      title: "Schritt 6: Kreditkartenabrechnungen bearbeiten",
      task: "Kreditkartenabrechnungen korrekt verarbeiten.",
      points: [
        "Abrechnungen einscannen",
        "An zuständige Stelle weiterleiten"
      ],
      result: "Kreditkartenumsätze sind vollständig erfasst."
    },
    {
      title: "Schritt 7: Debitorische Unterlagen ablegen",
      task: "Debitorische Unterlagen korrekt zuordnen.",
      points: [
        "Kassenunterlagen ablegen",
        "Ausgangsrechnungen ablegen",
        "Nordhessen-Unterlagen in gelbe Boxen legen"
      ],
      result: "Debitorische Unterlagen sind korrekt abgelegt."
    },
    {
      title: "Schritt 8: Hauptbuch-Unterlagen weitergeben",
      task: "Unterlagen an die Hauptbuchhaltung übergeben.",
      points: [
        "Kontoauszüge",
        "Bescheide oder Protokolle"
      ],
      result: "Hauptbuch-Unterlagen sind korrekt weitergegeben."
    },
    {
      title: "Schritt 9: Post für andere Abteilungen weiterleiten",
      task: "Nicht buchhalterische Post intern verteilen.",
      points: ["Post in den internen Verteiler geben"],
      result: "Post erreicht die zuständigen Abteilungen."
    },
    {
      title: "Schritt 10: Sonderfälle weitergeben",
      task: "Sonderfälle an zuständige Personen übergeben.",
      points: [
        "Änderungen der Bankverbindung",
        "Zugangsdaten externer Anbieter"
      ],
      result: "Sonderfälle werden korrekt bearbeitet."
    }
  ];

  const [current, setCurrent] = useState(0);
  const [understood, setUnderstood] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  if (!isPostbearbeitung) {
    return (
      <div className="container">
        <p>Inhalte für dieses Modul folgen.</p>
        <Link to="/module">
          <button className="primary-button">Zurück zu den Modulen</button>
        </Link>
      </div>
    );
  }
  if (showIntro) {
  return (
    <div className="module-detail-page">
      <div className="step-screen pop-in">
        <div className="module-card step-card-full">
          <img
            src={introImage}
            alt="Postbearbeitung"
            className="module-intro-image"
          />

          <h2>Postbearbeitung</h2>

          <p className="step-task">
            In diesem Modul lernst du Schritt für Schritt, wie eingehende Post
            korrekt gesichtet, sortiert und für die weitere Verarbeitung vorbereitet wird.
          </p>

          <div className="step-actions" style={{ justifyContent: "center" }}>
            <button
              className="primary-button"
              onClick={() => setShowIntro(false)}
            >
              Modul starten
            </button>
          </div>
        </div>
      </div>

      <div className="module-exit">
        <Link to="/module">
          <button className="secondary-button">
            Zurück zu den Modulen
          </button>
        </Link>
      </div>
    </div>
  );
}

  const step = steps[current];

  return (
    <div className="module-detail-page">
      <div className="step-screen pop-in">
        <div className={`module-card step-card-full ${understood ? "completed" : ""}`}>
          <h2>{step.title}</h2>

          <p className="step-task">
            <strong>Aufgabe:</strong> {step.task}
          </p>

          <ul className="step-points">
            {step.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>

          <div className="step-callout success">
            <strong>Ergebnis:</strong> {step.result}
          </div>

          {/* Navigation */}
          <div className="step-actions">
            <button
              className="secondary-button"
              disabled={current === 0}
              onClick={() => {
                setCurrent((c) => c - 1);
                setUnderstood(false);
              }}
            >
              Zurück
            </button>

            <label className="step-confirm-inline">
              <input
                type="checkbox"
                checked={understood}
                onChange={() => setUnderstood(!understood)}
              />
              Ich habe diesen Schritt verstanden
            </label>

            <button
              className="primary-button"
              disabled={!understood || current === steps.length - 1}
              onClick={() => {
                setCurrent((c) => c + 1);
                setUnderstood(false);
              }}
            >
              Weiter
            </button>
          </div>
        </div>
      </div>

      {/* Exit immer unten */}
      <div className="module-exit">
        <Link to="/module">
          <button className="secondary-button">
            Zurück zu den Modulen
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ModuleDetail;