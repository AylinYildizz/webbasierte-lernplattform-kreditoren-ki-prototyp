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
            <strong>Modular und praxisnah:</strong>{" "}
            Die Einarbeitung neuer Mitarbeitender ist so gestaltet, dass sie schrittweise in Aufgaben, Abläufe und Verantwortlichkeiten eingeführt werden. Anstatt eine große Menge an Informationen gleichzeitig zu vermitteln, erfolgt die Einarbeitung in klar strukturierten Modulen. Diese sind übersichtlich aufgebaut, wiederholbar und an realen Praxisfällen orientiert.
          </p>

          <p className="step-task">
            Ziel dieses Ansatzes ist es, dass neue Mitarbeitende nach und nach Sicherheit in den Arbeitsprozessen entwickeln. Zunächst wird die grundlegenden Logik der Abläufe vermittelt. Darauf aufbauend werden typische Vorgänge kennengelernt und schließlich eigenständig bearbeitet. Auf diese Weise wird die Einarbeitung nachvollziehbar, weniger belastend und langfristig wirksam gestaltet.
          </p>

          <div className="step-callout tip">
            <strong>Aufbau der modularen Einarbeitung</strong>
            <ul className="step-points" style={{ marginTop: "0.8rem" }}>
              <li>
                <strong>1. Orientierung:</strong> Überblick über Organisation, Systeme, Rollen und zentrale Begriffe.
              </li>
              <li>
                <strong>2. Grundlagen:</strong> Verständnis der Standardabläufe und der zugrunde liegenden Qualitätsprinzipien.
              </li>
              <li>
                <strong>3. Praxisfälle:</strong> Bearbeitung typischer Vorgänge anhand konkreter Beispiele und strukturierter Checklisten.
              </li>
              <li>
                <strong>4. Eigenständigkeit:</strong> Schrittweise Übernahme realer Aufgaben unter begleitendem Feedback.
              </li>
              <li>
                <strong>5. Vertiefung:</strong> Behandlung von Sonderfällen, häufigen Fehlerquellen sowie Aufbau von Routine und Prozesssicherheit.
              </li>
            </ul>
          </div>

          <div className="step-callout tip">
            <strong>Bedeutung der Praxisnähe</strong>
            <ul className="step-points" style={{ marginTop: "0.8rem" }}>
              <li>
                Verknüpfung von theoretischem Wissen mit konkreten Arbeitssituationen.
              </li>
              <li>
                Frühzeitige Erkennen typischer Fehlerquellen.
              </li>
              <li>
                Aufbau von Routine durch wiederholte Bearbeitung realistischer Szenarien.
              </li>
              <li>
                Entwicklung eines Verständnisses dafür, welche Informationen relevant sind und worauf besonders zu achten ist.
              </li>
            </ul>
          </div>

          <div className="step-callout tip">
            <strong>Zielkompootenz nach Abschluss der Einarbeitung</strong>
            <ul className="step-points" style={{ marginTop: "0.8rem" }}>
              <li>
                Verständnis der Arbeitsabläufe und sichere Durchführung der Prozesse nach festgelegten Standards.
              </li>
              <li>
                Korrekte Prüfung, Gegenüberstellung und Dokumentation relevanter Informationen
              </li>
              <li>
                Erkennen von Auffälligkeiten sowie Weiterleitung an die zuständige Stellen.
              </li>
              <li>
                Sicherer Umgang mit Standardfällen und Erkennen von Ausnahmesituationen.
              </li>
              <li>
                Eigenständiges Arbeiten auf Grundlage der definierten Prozesse.
              </li>
            </ul>
          </div>

          <div className="step-callout warning">
            <strong>Typische Herausforderungen in der Einarbeitung</strong>
            <ul className="step-points" style={{ marginTop: "0.8rem" }}>
              <li>
                Zu schenlle Bearbeitung vieler Inhalte ohne ausreichendes Verständnis der einzelnen Module.
              </li>
              <li>
                Reines Ausführen von Arbeitsschritten ohne Verständnis der dahinterliegenden Prozesslogik.
              </li>
              <li>
                Aufschieben von Rückfragen, wodurch sich Fehler verfestigen können.
              </li>
              <li>
                Verwechslung von Abkürzung und Fachbegriffen.
              </li>
            </ul>
          </div>

          <p className="step-task">
            <strong>Fazit:</strong>{" "}
            Eine modulare Einarbeitung ermöglicht neuen Mitarbeitenden, die erforderliche Kompetenzen in einem strukturierten und verständlichen Lernprozess zu erwerben. Die Kombination aus standardisierten Abläufen, praxisnahen Beispielen und wiederholten Anwendungssituationen fördert die Prozesssicherheit und bildet eine verlässliche Grundlage für Eigenständiges Arbeiten. 
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
            Hinweis: Diese Seite beschreibt die grundsätzliche Struktur der Einarbeitung. Die einzelnen Module vertiefen die Inhalte schrittweise.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Einarbeitung;