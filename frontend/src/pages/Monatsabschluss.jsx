
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

import introImage from "../assets/modules/zahlungsvorschlag/zv0.png";
import artemisLogo from "../assets/artemis-logo.png";

// Bilder


function Monatsabschluss() {
  const navigate = useNavigate();


const steps = [
  {
    title: "Schritt 1: Vollständigkeit in ELO prüfen",
    task:
      "Stelle sicher, dass alle relevanten Vorgänge in ELO vollständig abgearbeitet sind.",
    points: [
      "Prüfen, ob alle Rechnungen in ELO kontiert wurden",
      "Sicherstellen, dass keine offenen oder unbearbeiteten Vorgänge mehr vorhanden sind",
      "Rechnungen, Gutschriften und Sonderfälle prüfen",
      "Erst fortfahren, wenn ELO vollständig abgearbeitet ist"
    ],
    result:
      "Alle ELO-Vorgänge sind abgeschlossen und bereit für den Monatsabschluss.",
    example:
      "Du stellst fest, dass noch zwei Rechnungen in ELO offen sind. Diese werden zuerst kontiert, bevor du mit dem Monatsabschluss beginnst.",
    mistake:
      "Monatsabschluss starten, obwohl noch offene Rechnungen in ELO vorhanden sind.",
    consequence:
      "Unvollständige Buchungen und falsche Monatszahlen.",
    checklist: [
      "ELO geöffnet?",
      "Keine offenen Rechnungen?",
      "Keine offenen Gutschriften?",
      "Alle Vorgänge abgeschlossen?"
    ]
  },

  {
    title: "Schritt 2: Bankenbuchungen prüfen und buchen",
    task:
      "Stelle sicher, dass alle Bankbewegungen des Monats vollständig verbucht sind.",
    points: [
      "Dynamics öffnen",
      "Richtige Gesellschaft auswählen",
      "Alle Bankbuchungen prüfen",
      "Offene Bankposten klären"
    ],
    result:
      "Alle Bankbewegungen des Monats sind vollständig gebucht.",
    example:
      "Eine Bankbuchung fehlt noch im System. Du buchst diese nach, bevor du den Monatsabschluss fortsetzt.",
    mistake:
      "Monatsabschluss durchführen, obwohl Bankbuchungen fehlen.",
    consequence:
      "Falsche Kontosalden und Abstimmungsprobleme.",
    checklist: [
      "Richtige Gesellschaft aktiv?",
      "Alle Bankbuchungen importiert?",
      "Keine offenen Bankposten?"
    ]
  },

  {
    title: "Schritt 3: Kreditkartenabrechnungen prüfen",
    task:
      "Kontrolliere alle eingegangenen Kreditkartenabrechnungen.",
    points: [
      "Posteingang der Kreditkarten öffnen",
      "Abrechnungen nach Gesellschaft sortieren",
      "Zuordnung zu Gesellschaft prüfen",
      "Fehlende Abrechnungen identifizieren"
    ],
    result:
      "Alle Kreditkartenabrechnungen sind identifiziert und zugeordnet.",
    example:
      "Eine Abrechnung fehlt. Du forderst sie beim Mitarbeiter an, bevor du weiterarbeitest.",
    mistake:
      "Kreditkartenabrechnung übersehen.",
    consequence:
      "Fehlende Aufwände im Monatsabschluss.",
    checklist: [
      "Alle Abrechnungen vorhanden?",
      "Gesellschaft korrekt zugeordnet?",
      "Keine fehlenden Unterlagen?"
    ]
  },

  {
    title: "Schritt 4: Geschenke & Restaurantkosten prüfen",
    task:
      "Prüfe bei sensiblen Kreditkartenumsätzen die Zusatzangaben.",
    points: [
      "Anlass bei Geschenken prüfen",
      "Teilnehmerliste bei Restaurantkosten prüfen",
      "Fehlende Angaben anfordern",
      "Ohne Angaben nicht buchen"
    ],
    result:
      "Alle sensiblen Umsätze sind vollständig dokumentiert.",
    example:
      "Eine Restaurantrechnung ohne Teilnehmerliste wird nicht gebucht, sondern zur Klärung zurückgegeben.",
    mistake:
      "Buchung ohne Anlass oder Teilnehmerliste.",
    consequence:
      "Steuerliche Risiken und fehlende Nachvollziehbarkeit.",
    checklist: [
      "Anlass vorhanden?",
      "Teilnehmerliste vorhanden?",
      "Angaben plausibel?"
    ]
  },

  {
    title: "Schritt 5: Kreditkartenabrechnung buchen",
    task:
      "Buche die Kreditkartenabrechnung korrekt in Dynamics.",
    points: [
      "FiBu Buch.-Blätter öffnen",
      "Reiter Allgemein → Standard",
      "Buchungsdatum: letzter Tag des Monats",
      "Belegdatum: Datum vom Deckblatt",
      "Alle Positionen korrekt erfassen",
      "Saldo muss 0,00 € ergeben",
      "Buchung ausführen"
    ],
    result:
      "Die Kreditkartenabrechnung ist korrekt gebucht.",
    example:
      "Nach der Buchung prüfst du den Saldo und siehst, dass dieser 0,00 € beträgt.",
    mistake:
      "Falsches Buchungsdatum oder Saldo ungleich 0,00 €.",
    consequence:
      "Fehlerhafte Monatsabgrenzung.",
    checklist: [
      "Buchungsdatum letzter Tag des Monats?",
      "Belegdatum korrekt?",
      "Saldo = 0,00 €?",
      "Buchung erfolgreich?"
    ]
  },

  {
    title: "Schritt 6: Zahllauf im Monatsabschluss prüfen",
    task:
      "Stelle sicher, dass der Zahllauf korrekt zum Monat passt.",
    points: [
      "Zahlungsvorschlagsliste prüfen",
      "Buchungsdatum letzter Tag des Monats",
      "Nur Zahlungen des Monats buchen",
      "Keine Folgemonatszahlungen buchen"
    ],
    result:
      "Der Zahllauf ist periodengerecht vorbereitet.",
    example:
      "Eine Rechnung mit Fälligkeit im Folgemonat wird aus dem Zahllauf entfernt.",
    mistake:
      "Zahlungen des nächsten Monats mitbuchen.",
    consequence:
      "Falsche Periodenabgrenzung.",
    checklist: [
      "Buchungsdatum korrekt?",
      "Nur Monatszahlungen enthalten?",
      "Keine Folgemonatsposten?"
    ]
  },

  {
    title: "Schritt 7: Offene Posten prüfen",
    task:
      "Analysiere alle offenen Posten vor dem Abschluss.",
    points: [
      "Offene-Posten-Liste aufrufen",
      "Ursachen prüfen",
      "Rückfragen stellen",
      "Offene Punkte dokumentieren"
    ],
    result:
      "Alle offenen Posten sind erklärt oder in Klärung.",
    example:
      "Eine Rechnung ist offen, weil sie noch nicht freigegeben wurde. Du klärst dies mit dem Fachbereich.",
    mistake:
      "Offene Posten ignorieren.",
    consequence:
      "Unklare Salden im Monatsabschluss.",
    checklist: [
      "Offene Posten geprüft?",
      "Ursachen geklärt?",
      "Dokumentation vorhanden?"
    ]
  }
];


function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}
const quiz = [
  {
    question:
      "Welche Voraussetzung muss erfüllt sein, bevor der Monatsabschluss gestartet wird?",
    options: [
      "Nur der Zahllauf muss gebucht sein",
      "ELO muss vollständig abgearbeitet sein",
      "Nur die Kreditkarten müssen gebucht sein"
    ],
    correctAnswer: "ELO muss vollständig abgearbeitet sein",
    correctFeedback:
      "Richtig! Erst wenn ELO vollständig abgearbeitet ist, kann der Monatsabschluss korrekt durchgeführt werden.",
    wrongFeedback:
      "Nicht korrekt. Vor dem Monatsabschluss muss ELO vollständig abgearbeitet sein."
  },

  {
    question:
      "Welches Buchungsdatum wird bei Kreditkarten im Monatsabschluss verwendet?",
    options: [
      "Belegdatum der Einzelposition",
      "Erster Tag des Folgemonats",
      "Letzter Tag des gebuchten Monats"
    ],
    correctAnswer: "Letzter Tag des gebuchten Monats",
    correctFeedback:
      "Richtig! Für die korrekte Periodenabgrenzung wird der letzte Tag des Monats verwendet.",
    wrongFeedback:
      "Nicht korrekt. Im Monatsabschluss wird immer der letzte Tag des gebuchten Monats verwendet."
  },

  {
    question:
      "Warum sind Anlass und Teilnehmerliste bei Restaurantkosten wichtig?",
    options: [
      "Für interne Statistik",
      "Zur steuerlichen und fachlichen Nachvollziehbarkeit",
      "Nur für Archivzwecke"
    ],
    correctAnswer:
      "Zur steuerlichen und fachlichen Nachvollziehbarkeit",
    correctFeedback:
      "Richtig! Diese Angaben sind für steuerliche Nachweise und interne Prüfungen erforderlich.",
    wrongFeedback:
      "Nicht korrekt. Anlass und Teilnehmerliste sind für steuerliche und fachliche Nachvollziehbarkeit notwendig."
  },

  {
    question:
      "Was muss der Saldo einer korrekt gebuchten Kreditkartenabrechnung ergeben?",
    options: ["Einen positiven Betrag", "Einen negativen Betrag", "0,00 €"],
    correctAnswer: "0,00 €",
    correctFeedback:
      "Richtig! Die Kreditkartenabrechnung muss vollständig ausgeglichen sein.",
    wrongFeedback:
      "Nicht korrekt. Der Saldo muss immer 0,00 € ergeben."
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
        <div
  className="step-screen step-with-background zahlungsvorschlag pop-in"
  style={{ backgroundImage: `url(${introImage})` }}
>
          <div className="module-card step-card-full">
            <img
              src={introImage}
              alt="Monatsabschluss"
              className="monatsabschluss"
            />
            <h2>Monatsabschluss</h2>

            <p className="step-task">
              <strong>Ziel des Moduls:</strong>{" "}
                Nach Abschluss dieses Moduls bist du in der Lage, den Monatsabschluss in Microsoft Dynamics eigenständig, sicher und korrekt durchzuführen. Du kennst die notwendigen Schritte zur Abrechnung von Kreditkarten und zur Prüfung der korrekten Buchung von Zahlungseingängen.
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
        <div
  className="step-screen step-with-background zahlungsvorschlag pop-in"
  style={{ backgroundImage: `url(${introImage})` }}
>
          <div className="module-card step-card-full completed">
            <img
              src={artemisLogo}
              alt="Artemis"
              className="module-card-logo"
            />
            <h2>Modul abgeschlossen</h2>

            <p className="step-task">
              Du hast alle Schritte des Monatsabschlusses erfolgreich abgeschlossen.
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
  <div
  className="step-screen step-with-background zahlungsvorschlag pop-in"
  style={{ backgroundImage: `url(${introImage})` }}
>
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
      ? activeQuiz[quizStep].correctFeedback
      : activeQuiz[quizStep].wrongFeedback}
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
    //  Wiederholungsrunde starten
    if (!isRetry && wrongQuestions.length > 0) {
      setIsRetry(true);
      setQuizStep(0);
      setShuffledOptions(shuffleArray(wrongQuestions[0].options));
      setQuizAnswer(null);
      setQuizChecked(false);
    } else {
      //  Alles richtig → Modul fertig
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
          <div
  className="step-screen step-with-background zahlungsvorschlag pop-in"
  style={{ backgroundImage: `url(${introImage})` }}
>
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
{steps[current].checklist && (
  <div className="step-callout">
    <strong>Checkliste:</strong>
    <ul className="step-points" style={{ marginTop: "0.8rem" }}>
      {steps[current].checklist.map((c, i) => (
        <li key={i}>{c}</li>
      ))}
    </ul>
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

export default Monatsabschluss;