import { Link } from "react-router-dom";
import artemisLogo from "../assets/artemis-logo.png";
import zus1 from "../assets/modules/zusammenarbeit/ea1.png";
import zus2 from "../assets/modules/zusammenarbeit/ea2.png";

function Zusammenarbeit() {
  return (
    <div className="module-detail-page">
      <div className="step-screen">
        <div className="module-card step-card-full">
          <img
            src={artemisLogo}
            alt="Artemis"
            className="module-card-logo"
          />

          <h2>Zusammenarbeit</h2>

          {/* Abschnitt 1 – Text links | Bild rechts */}
          <div className="info-row">
            <div className="info-text">
              <p className="step-task">
                <strong>Abgestimmt auf den Arbeitsalltag:</strong>{" "}
                Gute Zusammenarbeit bedeutet, dass Informationen zuverlässig
                weitergegeben werden, Zuständigkeiten klar geregelt sind und
                Entscheidungen nachvollziehbar dokumentiert werden.
                Gerade in einem Netzwerk mit vielen Standorten ist es
                entscheidend, dass Abläufe nicht personenabhängig sind,
                sondern strukturiert und einheitlich funktionieren.
              </p>

              <p className="step-task">
                Zusammenarbeit heißt dabei nicht nur Kommunikation,
                sondern vor allem <strong>abgestimmte Prozesse</strong>.
                Jede beteiligte Stelle weiß, wann sie was liefern muss,
                welche Informationen benötigt werden und wie Rückfragen
                sauber geklärt werden.
              </p>
            </div>

            <div className="info-image">
              <img src={zus1} alt="Abgestimmte Zusammenarbeit" />
            </div>
          </div>

          {/* Abschnitt 2 – Bild links | Text rechts */}
          <div className="info-row reverse">
            <div className="info-image">
              <img src={zus2} alt="Teamarbeit und Kommunikation" />
            </div>

            <div className="info-text">
              <div className="step-callout tip">
                <strong>Was gute Zusammenarbeit ausmacht</strong>
                <ul className="step-points" style={{ marginTop: "0.8rem" }}>
                  <li>
                    <strong>Klare Zuständigkeiten:</strong> Jeder weiß,
                    wer entscheidet und wer welche Informationen liefert.
                  </li>
                  <li>
                    <strong>Verlässliche Kommunikation:</strong>
                    Rückmeldungen erfolgen rechtzeitig, vollständig
                    und nachvollziehbar.
                  </li>
                  <li>
                    <strong>Einheitliche Standards:</strong>
                    Gleiche Begriffe, gleiche Abläufe und gleiche Erwartungen
                    an allen Standorten.
                  </li>
                  <li>
                    <strong>Dokumentation:</strong>
                    Entscheidungen und Absprachen werden festgehalten
                    und sind jederzeit nachvollziehbar.
                  </li>
                  <li>
                    <strong>Respektvolle Abstimmung:</strong>
                    Lösungsorientiert arbeiten statt Schuldzuweisungen.
                  </li>
                </ul>
              </div>

              <div className="step-callout warning">
                <strong>Typische Probleme – und wie man sie vermeidet</strong>
                <ul className="step-points" style={{ marginTop: "0.8rem" }}>
                  <li>
                    <strong>Unklare Zuständigkeiten:</strong>
                    Verantwortung immer klären – nicht vermuten.
                  </li>
                  <li>
                    <strong>Unvollständige Informationen:</strong>
                    Lieber einmal vollständig als mehrere Rückfragen.
                  </li>
                  <li>
                    <strong>„Nebenbei“-Entscheidungen:</strong>
                    Wichtige Absprachen immer dokumentieren.
                  </li>
                  <li>
                    <strong>Unterschiedliche Begriffe:</strong>
                    Vereinbarte Standards konsequent einhalten.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Abschluss */}
          <p className="step-task">
            <strong>Fazit:</strong>{" "}
            Zusammenarbeit funktioniert dann am besten,
            wenn sie nicht dem Zufall überlassen wird,
            sondern klar strukturiert ist.
            Klare Zuständigkeiten, verlässliche Kommunikation
            und saubere Dokumentation sorgen dafür,
            dass Prozesse stabil laufen – auch bei vielen
            Standorten und Beteiligten.
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
            Hinweis: Diese Seite dient als Überblick,
            damit neue Mitarbeitende schnell verstehen,
            wie Abstimmung und Zusammenarbeit im Arbeitsalltag
            funktionieren sollen.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Zusammenarbeit;