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
                Eine funktionierende Zusammenarbeit setzt voraus, dass Informationen zuverlässig weitergegeben werden, Zuständigkeiten eindeutig geregelt sind und Entscheidungen transparent dokumentiert werden. Besonders in einem Netzwerk mit zahlreichen Standorten ist es entscheidend, dass Abläufe nicht von einzelnen Personen abhängig sind, sondern auf klar definierten und einheitlichen Strukturen basieren.
              
              </p>

              <p className="step-task">
                Zusammenarbeit beschränkt sich dabei nicht allein auf den Austausch von Informationen, sondern umfasst vor allem abgestimmte Prozesse. Jede beteiligte Stelle kennt ihre Aufgaben, weiß, welche Informationen benötigt werden, und erkennt, wie Rückfragen strukturiert und nachvollziehbar geklärt werden.
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
                <strong>Merkmale einer funktionierenden Zusammenarbeit</strong>
                <ul className="step-points" style={{ marginTop: "0.8rem" }}>
                  <li>
                    <strong>Klare Zuständigkeiten:</strong> Alle Beteiligten wissen, wer Entscheidungen trifft und wer die erforderlichen Informationen bereitstellt.
                  </li>
                  <li>
                    <strong>Verlässliche Kommunikation:</strong>
                     Rückmeldungen erfolgen rechtzeitig, vollständig
                    und nachvollziehbar.
                  </li>
                  <li>
                    <strong>Einheitliche Standards:</strong>
                    Gleiche Begriffe, gleiche Abläufe und einheitliche Erwartungen an allen Standorten.
                  </li>
                  <li>
                    <strong>Dokumentation:</strong>
                    Entscheidungen und Absprachen werden festgehalten
                    und bleiben jederzeit nachvollziehbar.
                  </li>
                  <li>
                    <strong>Respektvolle Abstimmung:</strong>
                    Lösungsorientiert Arbeiten steht im Vordergrund, nicht die Suche nach Verantwortlichen für Fehler.
                  </li>
                </ul>
              </div>

              <div className="step-callout warning">
                <strong>Typische Probleme und deren Vermeidung</strong>
                <ul className="step-points" style={{ marginTop: "0.8rem" }}>
                  <li>
                    <strong>Unklare Zuständigkeiten:</strong>
                     Verantwortlichkeiten werdem eindeutig geklärt und nicht vorausgesetzt.
                  </li>
                  <li>
                    <strong>Unvollständige Informationen:</strong>
                     Relevante Daten werden vollständig übermittelt, um unnötige Rückfragen zu vermeiden.
                  </li>
                  <li>
                    <strong>Nicht dokumentierte Entscheidungen:</strong>
                     Wichtige Absprachen werden stets festgehalten.
                  </li>
                  <li>
                    <strong>Unterschiedliche Begrifflichkeiten:</strong>
                    Vereinbarte Standards werden konsequent angewendet.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Abschluss */}
          <p className="step-task">
            <strong>Fazit:</strong>{" "}
           Zusammenarbeit ist besonders dann effektiv, wenn sie nicht dem Zufall überlassen wird, sondern auf klaren Strukturen basiert. Eindeutige Zuständigkeiten, verlässliche Kommunikation und eine saubere Dokumentation schaffen stabile Abläufe und ermöglichen eine effiziente Zusammenarbeit, auch über mehrere Standorte hinweg.
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
            Hinweis: Diese Seite bietet einen grundlegenden Überblick über die Prinzipien der Zusammenarbeit und dient als Orientierung für neue Mitarbeitende.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Zusammenarbeit;