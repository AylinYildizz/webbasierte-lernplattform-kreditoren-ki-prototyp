import { Link } from "react-router-dom";
import artemisLogo from "../assets/artemis-logo.png";
import kredi1 from "../assets/modules/kreditorenprozesse/kredi1.png";
import kredi2 from "../assets/modules/kreditorenprozesse/kredi2.png";
import kredi3 from "../assets/modules/kreditorenprozesse/kredi3.png";

function Kreditorenprozesse() {
  return (
    <div className="module-detail-page">
      <div className="step-screen">
        <div className="module-card step-card-full">
          <img
            src={artemisLogo}
            alt="Artemis"
            className="module-card-logo"
          />

        <h2>Kreditorenprozesse</h2>

{/* Abschnitt 1 – Bild links | Text rechts */}
<div className="info-row">
  <div className="info-image">
    <img src={kredi1} alt="Rechnungseingang und Struktur" />
  </div>

  <div className="info-text">
    <p className="step-task">
      <strong>Strukturiert & nachvollziehbar:</strong>{" "}
      Die Kreditorenprozesse im Unternehmen sind so aufgebaut, dass sie für
      alle Beteiligten transparent, einheitlich und jederzeit nachvollziehbar
      sind. Ziel ist es, Eingangsrechnungen effizient, korrekt und
      regelkonform zu bearbeiten – unabhängig davon, aus welcher Praxis
      oder Klinik sie stammen.
    </p>

    <p className="step-task">
      Durch klar definierte Prozessschritte wird sichergestellt, dass jede
      Rechnung denselben Weg durchläuft: vom Eingang über die Prüfung und
      Freigabe bis hin zur Verbuchung und Zahlung. Das reduziert Fehler,
      vermeidet Rückfragen und sorgt für einen reibungslosen Ablauf im
      gesamten Unternehmen.
    </p>
  </div>
</div>

{/* Abschnitt 2 – Text links | Bild rechts */}
<div className="info-row reverse">
  <div className="info-image">
    <img src={kredi2} alt="Kreditorenprüfung und Freigabe" />
  </div>

  <div className="info-text">
    <div className="step-callout tip">
      <strong>Grundprinzip der Kreditorenprozesse</strong>
      <ul className="step-points" style={{ marginTop: "0.8rem" }}>
        <li>Einheitliche Prozesslogik für alle Standorte und Gesellschaften.</li>
        <li>Klare Trennung der einzelnen Bearbeitungsschritte.</li>
        <li>Jeder Schritt baut logisch auf dem vorherigen auf.</li>
        <li>Jeder Vorgang ist systemseitig dokumentiert und nachvollziehbar.</li>
      </ul>
    </div>

    <div className="step-callout tip">
      <strong>Typischer Ablauf eines Kreditorenprozesses</strong>
      <ul className="step-points" style={{ marginTop: "0.8rem" }}>
        <li>Eingang der Rechnung über definierte Eingangskanäle.</li>
        <li>Formale und inhaltliche Prüfung der Rechnungsdaten.</li>
        <li>Klärung von Abweichungen oder Rückfragen.</li>
        <li>Freigabe gemäß interner Regeln.</li>
        <li>Verbuchung und Vorbereitung der Zahlung.</li>
      </ul>
    </div>
  </div>
</div>

{/* Abschnitt 3 – Bild links | Text rechts */}
<div className="info-row">
  <div className="info-image">
    <img src={kredi3} alt="Transparente Buchhaltung" />
  </div>

  <div className="info-text">
    <div className="step-callout tip">
      <strong>Warum sind strukturierte Prozesse so wichtig?</strong>
      <ul className="step-points" style={{ marginTop: "0.8rem" }}>
        <li>Vermeidung von Doppelbearbeitungen und Medienbrüchen.</li>
        <li>Reduzierung von Fehlern bei Rechnungsprüfung und Buchung.</li>
        <li>Einhaltung gesetzlicher und interner Vorgaben.</li>
        <li>Transparente Nachvollziehbarkeit für Prüfungen.</li>
      </ul>
    </div>

    <div className="step-callout tip">
      <strong>Vorteile für neue Mitarbeitende</strong>
      <ul className="step-points" style={{ marginTop: "0.8rem" }}>
        <li>Klare Orientierung durch definierte Abläufe.</li>
        <li>Schnellere Einarbeitung durch wiederkehrende Logik.</li>
        <li>Sicherheit im Umgang mit Rechnungen.</li>
        <li>Nachvollziehbare Entscheidungen durch Dokumentation.</li>
      </ul>
    </div>
  </div>
</div>

{/* Abschluss */}
<p className="step-task">
  <strong>Fazit:</strong>{" "}
  Strukturierte und nachvollziehbare Kreditorenprozesse sind die Basis
  für eine stabile, effiziente und revisionssichere Rechnungsbearbeitung.
  Sie schaffen Transparenz, erleichtern die Zusammenarbeit zwischen
  Abteilungen und geben allen Mitarbeitenden eine verlässliche Orientierung
  im Arbeitsalltag.
</p>
          <div className="step-actions" style={{ marginTop: "28px" }}>
            <Link to="/">
              <button className="secondary-button">
                Zurück zur Startseite
              </button>
            </Link>

            <Link to="/module">
              <button className="primary-button">
                Zu den Lernmodulen
              </button>
            </Link>
          </div>

          <p style={{ marginTop: "18px", fontSize: "0.9rem", color: "#4a5a6a" }}>
            Hinweis: Die Inhalte dienen der übergeordneten Orientierung und bilden
            die Grundlage für die nachfolgenden Lernmodule.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Kreditorenprozesse;
