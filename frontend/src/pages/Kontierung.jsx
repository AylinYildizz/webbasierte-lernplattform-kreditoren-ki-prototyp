import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

import introImage from "../assets/modules/kontierung/intro.png";
import artemisLogo from "../assets/artemis-logo.png";

import imgLogin from "../assets/modules/kontierung/login.png";
import imgWorkload from "../assets/modules/kontierung/workload.png";
import imgFilter from "../assets/modules/kontierung/filter.png";
import imgWorkflow from "../assets/modules/kontierung/workflow.png";
import imgInvoiceData from "../assets/modules/kontierung/invoicedata.png";
import imgComNumber from "../assets/modules/kontierung/comnumber.png";
import imgPositions from "../assets/modules/kontierung/positions.png";
import imgSachkonto from "../assets/modules/kontierung/sachkonto.png";
import imgSachkontoEintragen from "../assets/modules/kontierung/sachkontoeintragen.png";
import imgZahlungsziel from "../assets/modules/kontierung/zahlungsziel.png";

function Kontierung() {
  const navigate = useNavigate();

const steps = [
  {
    title: "Schritt 1: ELO starten und anmelden",
    task:
      "Starte den ELO Java Client und melde dich mit deinen persönlichen Zugangsdaten an.",
    image: imgLogin,
    points: [
      "ELO Java Client über das Desktop-Icon öffnen",
      "Benutzername und Passwort eingeben",
      "Richtiges Repository auswählen",
      "Sprache auf Deutsch einstellen",
      "Mit Klick auf „Anmelden“ bestätigen"
    ],
    result:
      "Du bist erfolgreich im System ELO angemeldet und hast Zugriff auf deine Aufgaben.",
    consequence:
      "Ein falsches Repository oder fehlerhafte Zugangsdaten führen dazu, dass keine oder falsche Rechnungen angezeigt werden."
  },

  {
    title: "Schritt 2: Orientierung in ELO",
    task:
      "Verschaffe dir einen Überblick über die ELO-Startoberfläche und ordne dich im Prozess ein.",
    points: [
      "ELO ist ein Dokumenten- und Workflow-System",
      "Hier findet keine Verbuchung, sondern die Vorbereitung statt",
      "Die Kontierung entscheidet, wohin Kosten gehören"
    ],
    result:
      "Du weißt, in welchem System du arbeitest und welche Aufgabe du im Kontierungsprozess hast."
  },

  {
    title: "Schritt 3: Aufgabenbereich (Kontierungsarbeitsplatz) öffnen",
    task:
      "Öffne deinen persönlichen Aufgabenbereich, in dem dir Rechnungen zur Kontierung zugewiesen sind.",
    image: imgWorkload,
    points: [
      "In der oberen Symbolleiste auf „Aufgaben“ klicken",
      "Der Aufgabenbereich zeigt deinen persönlichen Workload"
    ],
    result:
      "Alle Rechnungen, die du aktuell bearbeiten darfst, werden angezeigt.",
    consequence:
      "Ohne den Aufgabenbereich können keine Rechnungen zur Kontierung geöffnet werden."
  },

  {
    title: "Schritt 4: Aufgabenübersicht filtern und konfigurieren",
    task:
      "Stelle sicher, dass nur relevante Rechnungen für die Kontierung angezeigt werden.",
    image: imgFilter,
    points: [
      "Spalten wie Dokumentnummer, Kreditor, Firmencode und Arbeitsschritt einblenden",
      "Filter auf Arbeitsschritt „Formelle Prüfung / Kontierung“ setzen",
      "Nur die zuständige Gesellschaft anzeigen lassen"
    ],
    result:
      "Die Aufgabenliste zeigt nur Rechnungen, die tatsächlich kontiert werden müssen.",
    consequence:
      "Ohne Filter besteht die Gefahr, falsche Rechnungen oder falsche Gesellschaften zu bearbeiten."
  },

  {
    title: "Schritt 5: Rechnung aus dem Workload öffnen",
    task:
      "Öffne eine Rechnung aus deinem Aufgabenbereich, um sie zu prüfen und zu kontieren.",
    
    points: [
      "Rechnung in der Aufgabenliste auswählen",
      "Doppelklick öffnet die Rechnungsansicht",
      "PDF-Dokument links, Metadaten rechts sichtbar"
    ],
    result:
      "Die Rechnung ist geöffnet und kann eingesehen werden."
  },

  {
    title: "Schritt 6: Workflow annehmen",
    task:
      "Übernimm den Workflow, um die Rechnung bearbeiten zu können.",
    image: imgWorkflow,
    points: [
      "Auf „Workflow annehmen“ klicken",
      "Erst danach sind Änderungen möglich"
    ],
    result:
      "Die Rechnung ist zur Bearbeitung freigegeben.",
    consequence:
      "Ohne Workflow-Annahme gehen alle Eingaben verloren."
  },

  {
    title: "Schritt 7: Überblick über die Rechnung verschaffen",
    task:
      "Prüfe die grundlegenden Rechnungsdaten, bevor du mit der Kontierung beginnst.",
    image: imgInvoiceData,
    points: [
      "Lieferant und Rechnungsempfänger prüfen",
      "Rechnungsnummer und Rechnungsdatum kontrollieren",
      "Brutto-, Netto- und Steuerbeträge vergleichen",
      "Gesellschaft und Zahlungsbedingungen prüfen"
    ],
    result:
      "Du hast ein vollständiges Verständnis der Rechnung und ihres Inhalts."
  },

  {
    title: "Schritt 8: Prüfen, ob eine Kontierung notwendig ist",
    task:
      "Stelle fest, ob die Rechnung automatisch verarbeitet wird oder manuell kontiert werden muss.",
    image: imgComNumber,
    points: [
      "Prüfen, ob eine COM-/KOM-Nummer vorhanden ist",
      "Automatische Rechnungen erkennen"
    ],
    result:
      "Du weißt, ob eine manuelle Kontierung erforderlich ist.",
    consequence:
      "Eine unnötige Kontierung automatischer Rechnungen führt zu Prozessfehlern."
  },

  {
    title: "Schritt 9: Reiter „Positionsdaten“ öffnen",
    task:
      "Wechsle in den Reiter, in dem die Kontierung durchgeführt wird.",
    image: imgPositions,
    points: [
      "Reiter „Positionsdaten“ auswählen",
      "Hier werden Sachkonten und Buchungstexte gepflegt"
    ],
    result:
      "Der Kontierungsbereich ist geöffnet."
  },

  {
    title: "Schritt 10: Sachanalyse der Rechnung durchführen",
    task:
      "Analysiere den Inhalt der Rechnung, um die Kostenart korrekt zu bestimmen.",
    points: [
      "Welche Leistung wurde erbracht?",
      "Handelt es sich um eine einmalige oder laufende Leistung?",
      "Gibt es mehrere unterschiedliche Leistungen?"
    ],
    result:
      "Du kannst die Rechnung fachlich einordnen."
  },

  {
    title: "Schritt 11: Passendes Sachkonto ermitteln",
    task:
      "Bestimme das fachlich richtige Sachkonto für die erbrachte Leistung.",
    image: imgSachkonto,
    points: [
      "Kontierungshandbuch verwenden",
      "Vergleich mit früheren Rechnungen",
      "Kostenart eindeutig zuordnen"
    ],
    result:
      "Das korrekte Sachkonto ist ermittelt.",
    consequence:
      "Ein falsches Sachkonto verfälscht Kostenstellen- und Jahresauswertungen."
  },

  {
    title: "Schritt 12: Sachkonto eintragen",
    task:
      "Trage das ermittelte Sachkonto in den Positionsdaten ein.",
    image: imgSachkontoEintragen,
    points: [
      "Sachkonto numerisch eintragen",
      "Keine Texte im Sachkontenfeld verwenden"
    ],
    result:
      "Das Sachkonto ist korrekt hinterlegt."
  },

  {
    title: "Schritt 13: Buchungstext erfassen",
    task:
      "Erfasse einen aussagekräftigen Buchungstext zur Rechnung.",
    image: imgSachkontoEintragen,
    points: [
      "Lieferant und Leistung nennen",
      "Zeitraum oder Zweck ergänzen"
    ],
    result:
      "Der Buchungstext macht die Buchung nachvollziehbar."
  },

  {
    title: "Schritt 14: Mehrere Leistungen aufteilen",
    task:
      "Teile die Rechnung auf, wenn mehrere unterschiedliche Leistungen enthalten sind.",
    points: [
      "Positionen aufteilen",
      "Je Position eigenes Sachkonto vergeben",
      "Beträge korrekt verteilen"
    ],
    result:
      "Alle Leistungen sind sachlich korrekt kontiert."
  },

  {
    title: "Schritt 15: Beträge / Zahlungsziel kontrollieren",
    task:
      "Überprüfe alle Beträge auf Richtigkeit.",
    image: imgZahlungsziel,
    points: [
      "Netto- und Steuerbeträge prüfen",
      "Summe der Positionen mit Rechnungsbetrag abgleichen",
      "Wurde das Zahlungsziel korrekt übernommen?",
      "Falls sich das Zahlungsziel geändert hat, korrigieren und 'Standardwert verwenden' auf Nein setzen"
    ],
    result:
      "Die Kontierung ist rechnerisch korrekt."
  },

  {
    title: "Schritt 16: Kontierung abschließen und weiterleiten bzw. freigeben",
    task:
      "Schließe die Kontierung ab und leite die Rechnung im Workflow zur Freigabe weiter.",
    
    points: [
      "Eingaben speichern",
      "Rechnung an die nächste Workflow-Stufe weiterleiten",
      "Button 'Freigeben' klicken"
    ],
    result:
      "Die Rechnung ist vollständig kontiert und zur weiteren Verarbeitung freigegeben."
  },

  {
  title: "Sonderfall: Mahnungen prüfen und klären",
  task:
    "Prüfe Mahnungen sorgfältig, da diese nicht freigegeben oder kontiert werden dürfen, sondern zuerst fachlich geklärt werden müssen.",
 
  points: [
    "Mahnungen dürfen grundsätzlich nicht freigegeben oder kontiert werden",
    "Zuerst prüfen, ob die zugehörige Rechnung bereits bezahlt wurde",
    "Falls bezahlt: Mahnung dokumentieren und ablehnen",
    "Falls nicht bezahlt: Ursprung der Mahnung ermitteln",
    "Prüfen, ob die Rechnung bereits im System vorhanden ist",
    "Kontrollieren, ob die Rechnung im COMED-Workflow festhängt",
    "Prüfen, ob die Rechnung vom Standort noch nicht freigegeben wurde",
    "Falls Rechnung fehlt: Standort kontaktieren",
    "Gegebenenfalls Kreditor kontaktieren und Sachverhalt klären",
    "Originalrechnung anfordern, prüfen und ordnungsgemäß weiterverarbeiten"
  ],
  result:
    "Die Mahnung wurde fachlich geprüft, geklärt und korrekt bearbeitet, ohne fehlerhafte Freigaben oder Zahlungen auszulösen.",
  consequence:
    "Eine vorschnelle Freigabe oder Kontierung von Mahnungen kann zu Doppelzahlungen, fehlerhaften Buchungen oder unnötigen Rückfragen mit dem Kreditor führen."
}


  
];


function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}
const quiz = [
  {
    question: "Was ist das Ziel der Kontierung?",
    options: [
      "Die Rechnung technisch zu speichern",
      "Die Rechnung endgültig zu buchen",
      "Die Kosten fachlich einem Sachkonto zuzuordnen"
    ],
    correctAnswer: "Die Kosten fachlich einem Sachkonto zuzuordnen"
  },

  {
    question: "In welchem System findet die Kontierung statt?",
    options: [
      "MS Dynamics",
      "ELO",
      "Excel"
    ],
    correctAnswer: "ELO"
  },

  {
    question: "Was passiert nach der Kontierung?",
    options: [
      "Die Rechnung wird gelöscht",
      "Die Rechnung wird automatisch bezahlt",
      "Die Rechnung wird zur Freigabe und späteren Buchung weitergeleitet"
    ],
    correctAnswer: "Die Rechnung wird zur Freigabe und späteren Buchung weitergeleitet"
  },

  {
    question: "Wann ist keine manuelle Kontierung notwendig?",
    options: [
      "Wenn der Betrag unter 100 € liegt",
      "Wenn es sich um eine COMED-Rechnung handelt",
      "Wenn der Lieferant neu ist"
    ],
    correctAnswer: "Wenn es sich um eine COMED-Rechnung handelt"
  },

  {
    question: "In welchem Reiter wird die Kontierung durchgeführt?",
    options: [
      "Rechnungsdaten",
      "Fußdaten",
      "Positionsdaten"
    ],
    correctAnswer: "Positionsdaten"
  },

  {
    question: "Was beschreibt ein Sachkonto?",
    options: [
      "Den Lieferanten der Rechnung",
      "Die Kostenart der Rechnung",
      "Den Zahlungszeitpunkt"
    ],
    correctAnswer: "Die Kostenart der Rechnung"
  },

  {
    question: "Wie wird das richtige Sachkonto ermittelt?",
    options: [
      "Nach persönlichem Ermessen",
      "Über das Kontierungshandbuch oder Vergleich mit früheren Rechnungen",
      "Automatisch bei jeder Rechnung"
    ],
    correctAnswer:
      "Über das Kontierungshandbuch oder Vergleich mit früheren Rechnungen"
  },

  {
    question: "Was gehört zwingend in den Buchungstext?",
    options: [
      "Lieferant und konkrete Leistung",
      "Nur der Rechnungsbetrag",
      "Das Zahlungsziel"
    ],
    correctAnswer: "Lieferant und konkrete Leistung"
  },

  {
    question: "Warum ist ein korrekter Buchungstext wichtig?",
    options: [
      "Er beeinflusst die Mehrwertsteuer",
      "Er ermöglicht spätere Nachvollziehbarkeit und Prüfungen",
      "Er verkürzt die Zahlungsfrist"
    ],
    correctAnswer:
      "Er ermöglicht spätere Nachvollziehbarkeit und Prüfungen"
  },

  {
    question: "Was ist zu tun, wenn eine Rechnung mehrere Leistungen enthält?",
    options: [
      "Alles auf ein Sachkonto buchen",
      "Die Rechnung ablehnen",
      "Die Beträge auf mehrere Sachkonten aufteilen"
    ],
    correctAnswer:
      "Die Beträge auf mehrere Sachkonten aufteilen"
  },

  {
    question: "Wann dürfen Beträge manuell angepasst werden?",
    options: [
      "Wenn der Lieferant dies wünscht",
      "Wenn die OCR-Erkennung fehlerhaft war",
      "Wenn das Sachkonto geändert wird"
    ],
    correctAnswer:
      "Wenn die OCR-Erkennung fehlerhaft war"
  },

  {
    question: "Was bedeutet ‚Kontierung abschließen‘?",
    options: [
      "Die Rechnung ist bezahlt",
      "Die Rechnung ist korrekt zugeordnet und wird weitergeleitet",
      "Die Rechnung wird archiviert"
    ],
    correctAnswer:
      "Die Rechnung ist korrekt zugeordnet und wird weitergeleitet"
  }
];

const [shuffledOptions, setShuffledOptions] = useState(
    shuffleArray(quiz[0].options)
  );
  const [wrongQuestions, setWrongQuestions] = useState([]);
  const [isRetry, setIsRetry] = useState(false);  
  const activeQuiz = isRetry ? wrongQuestions : quiz;
  const [quizStep, setQuizStep] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswer, setQuizAnswer] = useState(null);
  const [quizChecked, setQuizChecked] = useState(false);
  const [current, setCurrent] = useState(0);
  const [understood, setUnderstood] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [finished, setFinished] = useState(false);
  const [direction, setDirection] = useState("next");

  const progress = ((current + 1) / steps.length) * 100;



  return (
    <div className="module-detail-page">

      {!showIntro && !finished && !showQuiz && (
        <div className="module-progress-free">
          <div className="progress-text">
            Schritt {current + 1} / {steps.length}
          </div>
          <div className="progress-track">
            <div
              className="progress-bar"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}
{showIntro && (
  <div className="step-screen step-with-background kontierung pop-in">
    <div className="module-card step-card-full">
      <img
        src={introImage}
        alt="Kontierung"
        className="module-intro-image"
      />
      <h2>Kontierung</h2>

            <p className="step-task">
              <strong>Ziel des Moduls:</strong>{" "}
                Nach Abschluss dieses Moduls bist du in der Lage, Eingangsrechnungen im System Elo fachlich korrekt zu kontieren. Du verstehst den vollständigen Ablauf, vom Öffnen der Rechnung über die Prüfung, die Ermittlung geeigneter Sachkonten bis hin zur korrekten Erfassung von Buchungstexten. Du kannst beurteilen, ob eine Kontierung notwendig ist, mehrere Leistungen sachgerecht aufteilen und die Rechnung ordnungsgemäß zur Weiterverarbeitung und späteren Verbuchung weiterleiten.
            </p>

            <div className="step-actions center">
              <button
                className="primary-button"
                onClick={() => setShowIntro(false)}
              >
                Modul starten
              </button>
              <Link to="/module">
                <button className="secondary-button">
                  Zurück zu den Lernmodulen
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {finished && (
        <div className="step-screen step-with-background postbearbeitung pop-in">
          <div className="module-card step-card-full completed">
            <img
              src={artemisLogo}
              alt="Artemis"
              className="module-card-logo"
            />
            <h2>Modul abgeschlossen</h2>

            <p className="step-task">
              Du hast alle Schritte der Kontierung erfolgreich abgeschlossen.
            </p>

            <div className="step-actions center">
              <button
                className="primary-button"
                onClick={() => navigate("/module")}
              >
                Zurück zu den Lernmodulen
              </button>
            </div>
          </div>
        </div>
      )}

   
  {showQuiz && (
  <div className="step-screen step-with-background postbearbeitung pop-in">
    <div className="module-card step-card-full">
        <img
              src={artemisLogo}
              alt="Artemis"
              className="module-card-logo"
            />
      <h2>Selbstüberprüfung</h2>

      <p className="step-task">
        Frage {quizStep + 1} von {activeQuiz.length}:
      </p>

      <div className="step-callout tip">
        <strong>{activeQuiz[quizStep].question}</strong>
        <ul className="step-points">
          {shuffledOptions.map((opt, i) => (
            <li key={i}>
              <label>
                <input
                  type="radio"
                  name="quiz"
                  checked={quizAnswer === opt}
                  onChange={() => setQuizAnswer(opt)}
                />{" "}
                {opt}
              </label>
            </li>
          ))}
        </ul>

        <button
          className="secondary-button"
          onClick={() => {
            if (quizAnswer !== activeQuiz[quizStep].correctAnswer) {
                setWrongQuestions(prev =>
  prev.some(q => q.question === activeQuiz[quizStep].question)
    ? prev
    : [...prev, activeQuiz[quizStep]]
);
              }
            setQuizChecked(true);
          }}
        >
          Antwort prüfen
        </button>

        {quizChecked && (
          <div
            className={`step-callout ${
              quizAnswer === activeQuiz[quizStep].correctAnswer ? "success" : "danger"
            }`}
            style={{ marginTop: "1rem" }}
          >
            {quizAnswer === activeQuiz[quizStep].correctAnswer
              ? " Richtig! Gut gemacht."
              : " Nicht ganz. Versuche es beim nächsten Mal noch einmal."}
          </div>
        )}
      </div>

      <div className="step-actions center">
       <button
  className="primary-button"
  disabled={!quizChecked || quizAnswer !== activeQuiz[quizStep].correctAnswer}
  onClick={() => {
  if (quizStep < activeQuiz.length - 1) {
    const nextStep = quizStep + 1;
    setQuizStep(nextStep);
    setShuffledOptions(shuffleArray(activeQuiz[nextStep].options));
    setQuizAnswer(null);
    setQuizChecked(false);
  } else {
    // 🔁 Wiederholungsrunde starten
    if (!isRetry && wrongQuestions.length > 0) {
      setIsRetry(true);
      setQuizStep(0);
      setShuffledOptions(shuffleArray(wrongQuestions[0].options));
      setQuizAnswer(null);
      setQuizChecked(false);
    } else {
      // ✅ Alles richtig → Modul fertig
      setShowQuiz(false);
      setFinished(true);
    }
  }
}}
>
  {quizStep < activeQuiz.length - 1
  ? "Nächste Frage"
  : isRetry
    ? "Wiederholung abschließen"
    : "Modul abschließen"}
</button>
      </div>
    </div>
  </div>
)}

      {!showIntro && !finished && !showQuiz && (
        <>
          <div className="step-screen step-with-background postbearbeitung pop-in">
            <div
              key={current}
              className={`module-card step-card-full step-animate ${direction} ${
                understood ? "completed" : ""
              }`}
            >
               <img
              src={artemisLogo}
              alt="Artemis"
              className="module-card-logo"
            /> 
              <h2>{steps[current].title}</h2>


{steps[current].image && (
  <img
    src={steps[current].image}
    alt={steps[current].title}
    className="step-image"
  />
)}

<p className="step-task">
  <strong>Aufgabe:</strong> {steps[current].task}
</p>

<ul className="step-points">
  {steps[current].points.map((p, i) => (
    <li key={i}>{p}</li>
  ))}
</ul>

              {steps[current].example && (
                <div className="step-callout tip">
                  <strong>Praxisbeispiel:</strong><br />
                  {steps[current].example}
                </div>
              )}

              {steps[current].mistake && (
                <div className="step-callout warning">
                  <strong>Typische Fehlerquelle:</strong><br />
                  {steps[current].mistake}
                </div>
              )}
                {steps[current].consequence && (
  <div className="step-callout danger">
    <strong>Konsequenzen bei falscher Bearbeitung:</strong><br />
    {steps[current].consequence}
  </div>
)}

              <div className="step-callout success">
                <strong>Ergebnis:</strong> {steps[current].result}
              </div>

              <div className="step-actions">
                <button
                  className="secondary-button"
                  disabled={current === 0}
                  onClick={() => {
                    setDirection("prev");
                    setCurrent(c => c - 1);
                    setUnderstood(false);
                  }}
                >
                  Zurück
                </button>

            
                
                
                
                <button
                  className="primary-button"
                  onClick={() => {
                    if (!understood) {
                      setUnderstood(true);
                      return;
                    }
                    setDirection("next");
                    if (current === steps.length - 1) {
                      setShowQuiz(true);
                    } else {
                      setCurrent(c => c + 1);
                      setUnderstood(false);
                    }
                  }}
                >
                    {understood ? "Nächster Schritt" : "Weiter"}
                </button>
              </div>
            </div>
          </div>

          <div className="module-exit">
            <Link to="/module">
              <button className="secondary-button">
                Zurück zu den Lernmodulen
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Kontierung;