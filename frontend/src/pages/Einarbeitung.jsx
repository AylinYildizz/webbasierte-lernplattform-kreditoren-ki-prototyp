import { Link } from "react-router-dom";
import artemisLogo from "../assets/artemis-logo.png";

function Einarbeitung() {
  return (
    <div className="module-detail-page">
      <div className="step-screen">
        <div className="module-card step-card-full">
          <img src={artemisLogo} alt="Artemis" className="module-card-logo" />

          <h2>Einarbeitung</h2>

          <p className="step-task">
            <strong>Modular & praxisnah:</strong>{" "}
            Die Einarbeitung ist so aufgebaut, dass neue Mitarbeitende Schritt für Schritt
            in Aufgaben, Abläufe und Verantwortlichkeiten hineinwachsen. Anstatt viele Themen
            auf einmal zu lernen, erfolgt die Einarbeitung in klaren Modulen: übersichtlich,
            wiederholbar und direkt an echten Praxisfällen orientiert.
          </p>

          <p className="step-task">
            Ziel ist es, dass du nach und nach Sicherheit entwickelst: Du verstehst zuerst die
            Grundlogik, lernst dann typische Vorgänge kennen und übernimmst anschließend
            eigenständig Aufgaben. Dadurch wird die Einarbeitung nachvollziehbar, stressärmer
            und deutlich nachhaltiger.
          </p>

          <div className="step-callout tip">
            <strong>So ist die modulare Einarbeitung aufgebaut</strong>
            <ul className="step-points" style={{ marginTop: "0.8rem" }}>
              <li>
                <strong>1. Orientierung:</strong> Überblick über Organisation, Systeme, Rollen und Begriffe.
              </li>
              <li>
                <strong>2. Grundlagen:</strong> Verständnis der Standardabläufe und Qualitätsprinzipien.
              </li>
              <li>
                <strong>3. Praxisfälle:</strong> Bearbeitung typischer Vorgänge mit Beispielen und Checklisten.
              </li>
              <li>
                <strong>4. Eigenständigkeit:</strong> Schrittweise Übernahme echter Aufgaben mit Feedback.
              </li>
              <li>
                <strong>5. Vertiefung:</strong> Sonderfälle, häufige Fehlerquellen, Optimierung und Routine.
              </li>
            </ul>
          </div>

          <div className="step-callout tip">
            <strong>Warum „praxisnah“ so wichtig ist</strong>
            <ul className="step-points" style={{ marginTop: "0.8rem" }}>
              <li>
                Du lernst nicht nur Theorie, sondern erkennst sofort den Sinn hinter jedem Schritt.
              </li>
              <li>
                Typische Fehlerquellen werden früh sichtbar, bevor sie im Alltag passieren.
              </li>
              <li>
                Du entwickelst Routine durch Wiederholung in realistischen Szenarien.
              </li>
              <li>
                Du bekommst ein Gefühl dafür, welche Informationen wichtig sind und worauf man achten muss.
              </li>
            </ul>
          </div>

          <div className="step-callout tip">
            <strong>Was du nach der Einarbeitung können sollst</strong>
            <ul className="step-points" style={{ marginTop: "0.8rem" }}>
              <li>
                Arbeitsabläufe verstehen und sauber nach Prozess durchführen (statt „irgendwie“).
              </li>
              <li>
                Informationen korrekt prüfen, vergleichen und dokumentieren.
              </li>
              <li>
                Auffälligkeiten erkennen und richtig eskalieren (statt fehlerhaft weiterzugeben).
              </li>
              <li>
                Mit Standards arbeiten, aber auch wissen, wann eine Ausnahme vorliegt.
              </li>
              <li>
                Selbstständig arbeiten, ohne ständig nachfragen zu müssen – mit klarer Sicherheit.
              </li>
            </ul>
          </div>

          <div className="step-callout warning">
            <strong>Typische Stolpersteine in der Einarbeitung</strong>
            <ul className="step-points" style={{ marginTop: "0.8rem" }}>
              <li>
                Zu schnell zu viel: lieber Module nacheinander sauber abschließen.
              </li>
              <li>
                „Nur klicken“ statt verstehen: immer den Prozess dahinter nachvollziehen.
              </li>
              <li>
                Fragen aufschieben: lieber sofort klären, bevor sich Fehler festsetzen.
              </li>
              <li>
                Abkürzungen und Begriffe verwechseln: Begriffe konsequent mitlernen.
              </li>
            </ul>
          </div>

          <p className="step-task">
            <strong>Fazit:</strong>{" "}
            Eine modulare Einarbeitung sorgt dafür, dass neue Mitarbeitende in einem stabilen,
            verständlichen Tempo lernen. Die Kombination aus Standards, Praxisfällen und
            Wiederholungen macht die Abläufe sicher und reproduzierbar – und schafft eine echte
            Grundlage für eigenständiges Arbeiten.
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
            Hinweis: Diese Seite erklärt die Logik der Einarbeitung. Die einzelnen Module
            vertiefen die Inhalte Schritt für Schritt.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Einarbeitung;