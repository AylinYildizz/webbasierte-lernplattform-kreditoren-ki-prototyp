
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";


import introImage from "../assets/modules/verbuchung/buchen2.png";
import artemisLogo from "../assets/artemis-logo.png";

// Bilder
import imgB1 from "../assets/modules/banken/Bankenbuchen2.png";
import imgB2 from "../assets/modules/banken/Bankenbuchen3.png";
import imgB3 from "../assets/modules/banken/Bankenbuchen4.png";
import imgB4 from "../assets/modules/banken/Bankenbuchen5.png";
import imgB5 from "../assets/modules/banken/Bankenbuchen6.png";



function Bankenbuchung() {
  const navigate = useNavigate();


  /* ---------------- STEPS ---------------- */
const steps = [
  {
    title: "Schritt 1: Dynamics öffnen und Gesellschaft auswählen",
    task:
      "Öffne Microsoft Dynamics und wähle die Gesellschaft aus, in der du die Bankbuchung durchführen willst.",
    image: imgB1,
    points: [
      "Microsoft Dynamics starten",
      "Oben prüfen, welche Gesellschaft aktiv ist",
      "Falls falsch: Gesellschaft wechseln",
      "Erst fortfahren, wenn die richtige Gesellschaft eingestellt ist"
    ],
    result:
      "Die richtige Gesellschaft ist ausgewählt und du arbeitest im korrekten Mandanten.",
    example:
      "Du sollst Bankbuchungen für Gesellschaft A durchführen, siehst aber, dass Gesellschaft B aktiv ist. Du wechselst zuerst die Gesellschaft, bevor du weiterarbeitest.",
    mistake:
      "Gesellschaft nicht geprüft oder im falschen Mandanten gearbeitet.",
    consequence:
      "Fehlbuchungen im falschen Mandanten und hoher Korrekturaufwand.",
    checklist: [
      "Dynamics geöffnet?",
      "Richtige Gesellschaft aktiv?",
      "Mandant oben geprüft?",
      "Erst danach weitergearbeitet?"
    ]
  },

  {
    title: "Schritt 2: Reiter offene Zlg. Importjournale öffnen",
    task:
      "Navigiere zum Reiter mit den offenen Zahlungsimportjournalen, um die noch nicht verarbeiteten Zahlungseingänge zu sehen.",
    image: imgB2,
    points: [
      "Reiter „offene Zlg. Importjournale“ öffnen",
      "Übersicht der vorhandenen Bankjournale prüfen"
    ],
    result:
      "Du befindest dich in der Übersicht der offenen Importjournale.",
    example:
      "Du öffnest den Reiter und siehst mehrere Bankjournale für unterschiedliche Banken.",
    mistake:
      "Im falschen Reiter arbeiten oder falsches Journal auswählen.",
    checklist: [
      "Reiter korrekt geöffnet?",
      "Importjournale sichtbar?",
      "Richtige Ansicht aktiv?"
    ]
  },

  {
    title: "Schritt 3: Bank anhand der Banknummer auswählen",
    task:
      "Wähle die richtige Bank anhand der Banknummer aus.",
    points: [
      "Bank in der Liste suchen",
      "Jede Bank hat eine eigene Banknummer",
      "Beispiel: Centro = Banknummer 60",
      "Bankname und Nummer abgleichen"
    ],
    result:
      "Die richtige Bankzeile ist ausgewählt.",
    example:
      "Du suchst die Bank mit Nummer 60 und wählst die passende Zeile aus.",
    mistake:
      "Falsche Bank ausgewählt.",
    consequence:
      "Zahlungen der falschen Bank werden importiert und gebucht.",
    checklist: [
      "Banknummer geprüft?",
      "Bankname stimmt?",
      "Richtige Zeile markiert?"
    ]
  },

  {
    title: "Schritt 4: In Erw. Zahlungseingang importieren",
    task:
      "Importiere die offenen Zahlungen aus dem Importjournal in den erweiterten Zahlungseingang.",
    image: imgB3,
    points: [
      "Auf „In Erw. Zahlungseingang importieren“ klicken",
      "Liste prüfen, ob Datensätze geladen wurden",
      "Bei leerer Liste: Bankauswahl kontrollieren"
    ],
    result:
      "Die offenen Zahlungen sind im erweiterten Zahlungseingang sichtbar.",
    example:
      "Nach dem Import erscheinen mehrere Zahlungseingänge in der Liste.",
    mistake:
      "Import nicht durchgeführt oder falsche Bank ausgewählt.",
    consequence:
      "Es werden keine Zahlungen gebucht.",
    checklist: [
      "Import ausgeführt?",
      "Datensätze sichtbar?",
      "Richtige Bank gewählt?"
    ]
  },

  {
    title: "Schritt 5: Erw. Zahlungseingang öffnen",
    task:
      "Öffne den erweiterten Zahlungseingang, um alle Details der Zahlungseingänge zu prüfen.",
    image: imgB3,
    points: [
      "Button „Erw. Zahlungseingang öffnen“ auswählen",
      "Detailansicht prüfen"
    ],
    result:
      "Alle Zahlungseingänge sind vollständig sichtbar.",
    example:
      "Du öffnest den erweiterten Zahlungseingang und siehst alle Details zu Beträgen und Buchungen.",
    mistake:
      "Nicht vollständig geöffnet und Details übersehen.",
    checklist: [
      "Erweiterter Zahlungseingang geöffnet?",
      "Details sichtbar?",
      "Liste vollständig geladen?"
    ]
  },

  {
    title: "Schritt 6: Zahlungseingänge prüfen und vergleichen",
    task:
      "Prüfe alle Zahlungseingänge sorgfältig auf Plausibilität.",
    image: imgB4,
    points: [
      "Beträge prüfen",
      "Doppelte Positionen erkennen",
      "Unplausible Beträge oder Zeiträume prüfen",
      "Bei Unklarheiten nicht buchen"
    ],
    result:
      "Alle Zahlungseingänge sind geprüft und plausibel.",
    example:
      "Du entdeckst eine doppelte Zahlung und klärst den Vorgang, bevor du buchst.",
    mistake:
      "Zahlungen ungeprüft buchen.",
    consequence:
      "Falsche Salden und Abstimmungsprobleme im Hauptbuch.",
    checklist: [
      "Beträge plausibel?",
      "Keine Doppelbuchungen?",
      "Keine Auffälligkeiten?"
    ]
  },

  {
    title: "Schritt 7: Fehlerhafte Positionen löschen",
    task:
      "Entferne fehlerhafte oder unklare Zahlungseingänge vor der Buchung.",
    image: imgB5,
    points: [
      "Unstimmige Positionen identifizieren",
      "Positionen löschen",
      "Liste erneut prüfen"
    ],
    result:
      "Nur korrekte Zahlungseingänge bleiben zur Buchung übrig.",
    example:
      "Eine falsche Position wird gelöscht, damit sie nicht mitgebucht wird.",
    mistake:
      "Fehlerhafte Positionen nicht entfernen.",
    consequence:
      "Falsche Zahlungen werden gebucht.",
    checklist: [
      "Fehlerhafte Positionen erkannt?",
      "Gelöscht?",
      "Liste nochmals geprüft?"
    ]
  },

  {
    title: "Schritt 8: Zahlungseingänge buchen",
    task:
      "Buche die geprüften Zahlungseingänge im System.",
    points: [
      "Button „Buchen“ auswählen",
      "Auf Abschluss der Buchung warten",
      "Status prüfen"
    ],
    result:
      "Die Zahlungseingänge wurden erfolgreich gebucht.",
    example:
      "Nach dem Buchen sind die Zahlungen im Hauptbuch sichtbar.",
    mistake:
      "Buchen ohne vorherige Prüfung.",
    consequence:
      "Fehlbuchungen im Hauptbuch und Abstimmungsprobleme.",
    checklist: [
      "Alle Positionen geprüft?",
      "Nur korrekte Einträge vorhanden?",
      "Buchung erfolgreich?"
    ]
  }
];

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}
const quiz = [
  {
    question: "Warum muss vor der Bankbuchung die richtige Gesellschaft ausgewählt werden?",
    options: [
      "Damit das Layout stimmt",
      "Weil Buchungen mandantenbezogen erfolgen",
      "Weil sonst keine Banken angezeigt werden"
    ],
    correctAnswer: "Weil Buchungen mandantenbezogen erfolgen",
    correctFeedback:
      "Richtig! Buchungen erfolgen immer in der aktuell ausgewählten Gesellschaft. Eine falsche Auswahl führt zu Fehlbuchungen im falschen Mandanten.",
    wrongFeedback:
      "Nicht ganz. Buchungen sind immer mandantenbezogen. Wird die falsche Gesellschaft gewählt, entstehen Fehlbuchungen."
  },
  {
    question: "Wo befinden sich die offenen Zahlungseingänge?",
    options: [
      "Im Hauptbuch",
      "In den Importjournalen",
      "In der Debitorenliste"
    ],
    correctAnswer: "In den Importjournalen",
    correctFeedback:
      "Richtig! Offene Zahlungseingänge befinden sich zunächst in den Importjournalen und werden von dort weiterverarbeitet.",
    wrongFeedback:
      "Nicht korrekt. Die offenen Zahlungseingänge liegen zuerst in den Importjournalen, bevor sie gebucht werden."
  },
  {
    question: "Warum wird die Bank über die Banknummer ausgewählt?",
    options: [
      "Weil jede Bank eigene Zahlungseingänge hat",
      "Weil die Banknummer optional ist",
      "Weil das System die Bank sonst automatisch wählt"
    ],
    correctAnswer: "Weil jede Bank eigene Zahlungseingänge hat",
    correctFeedback:
      "Richtig! Jede Bank hat eigene Zahlungseingänge. Deshalb muss die Bank über die korrekte Banknummer ausgewählt werden.",
    wrongFeedback:
      "Nicht ganz. Jede Bank hat eigene Zahlungseingänge. Wird die falsche Bank gewählt, entstehen Fehlbuchungen."
  },
  {
    question: "Was passiert, wenn der Import in den erweiterten Zahlungseingang nicht durchgeführt wird?",
    options: [
      "Die Zahlungen werden automatisch gebucht",
      "Es werden keine Zahlungen verarbeitet",
      "Das System bricht ab"
    ],
    correctAnswer: "Es werden keine Zahlungen verarbeitet",
    correctFeedback:
      "Richtig! Ohne Import befinden sich keine Datensätze im Buchungsbereich und es kann nichts gebucht werden.",
    wrongFeedback:
      "Nicht korrekt. Erst durch den Import stehen die Zahlungen zur Buchung bereit."
  },
  {
    question: "Warum müssen Zahlungseingänge vor dem Buchen geprüft werden?",
    options: [
      "Damit das System schneller arbeitet",
      "Um Fehlbuchungen zu vermeiden",
      "Damit die Buchung automatisch erfolgt"
    ],
    correctAnswer: "Um Fehlbuchungen zu vermeiden",
    correctFeedback:
      "Richtig! Durch die Prüfung werden falsche Beträge oder doppelte Buchungen erkannt.",
    wrongFeedback:
      "Nicht ganz. Die Prüfung dient dazu, Fehlbuchungen und Abstimmungsprobleme zu vermeiden."
  },
  {
    question: "Was ist zu tun, wenn eine Zahlung nicht plausibel ist?",
    options: [
      "Trotzdem buchen",
      "Position löschen oder klären",
      "System neu starten"
    ],
    correctAnswer: "Position löschen oder klären",
    correctFeedback:
      "Richtig! Unplausible Positionen dürfen nicht gebucht werden und müssen vorher geklärt oder gelöscht werden.",
    wrongFeedback:
      "Nicht korrekt. Unplausible Zahlungen dürfen nicht gebucht werden, sondern müssen geklärt oder gelöscht werden."
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
  className="step-screen step-with-background verbuchung pop-in intro-background"
  style={{ backgroundImage: `url(${introImage})` }}
>
          <div className="module-card step-card-full">
            <img
              src={introImage}
              alt="Bankenbuchung"
              className="bankenbuchung"
            />
            <h2>Bankenbuchung</h2>

            <p className="step-task">
              <strong>Ziel des Moduls:</strong>{" "}
Nach Abschluss dieses Moduls bist du in der Lage, Bankbuchungen in Microsoft Dynamics eigenständig, sicher und korrekt durchzuführen.
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
              Nach Abschluss dieses Moduls bist du in der Lage, Bankbuchungen in Microsoft Dynamics eigenständig, sicher und korrekt durchzuführen.
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
  className="step-screen step-with-background verbuchung pop-in intro-background"
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
  className="step-screen step-with-background verbuchung pop-in intro-background"
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

export default Bankenbuchung;


