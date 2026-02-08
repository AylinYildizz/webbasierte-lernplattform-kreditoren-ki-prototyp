
import { Link, useNavigate, useParams} from "react-router-dom";
import { useState } from "react";

import introImage from "../assets/modules/zahlungsvorschlag/zv0.png";
import artemisLogo from "../assets/artemis-logo.png";

// Bilder

import imgZv1 from "../assets/modules/zahlungsvorschlag/zv1.png";
import imgZv2 from "../assets/modules/zahlungsvorschlag/zv2.png";
import imgZv4 from "../assets/modules/zahlungsvorschlag/zv4.png";
import imgZv5 from "../assets/modules/zahlungsvorschlag/zv5.png";
import imgZv6 from "../assets/modules/zahlungsvorschlag/zv6.png";
import imgZv7 from "../assets/modules/zahlungsvorschlag/zv7.png";
import imgZv8 from "../assets/modules/zahlungsvorschlag/zv8.png";
import imgZv9 from "../assets/modules/zahlungsvorschlag/zv9.png";


function Zahlungsvorschlag() {
  const navigate = useNavigate();


  /* ---------------- STEPS ---------------- */
const steps = [
 {
  title: "Schritt 1: Dynamics öffnen & Bereich finden",
  task:
    "Öffne Microsoft Dynamics und navigiere in den Bereich, in dem die Zahlungsvorschläge erstellt werden.",
  image: imgZv1,
  points: [
    "Microsoft Dynamics öffnen",
    "In die richtige Gesellschaft wechseln",
    "Menüpunkt 'Zahlungsvorschläge' öffnen"
  ],
  result:
    "Du befindest dich im richtigen Bereich zur Erstellung des Zahlungsvorschlags.",
  example:
    "Du wechselst in die Gesellschaft, für die der Zahllauf durchgeführt werden soll, und öffnest den Bereich Zahlungsvorschläge.",
  mistake:
    "Im falschen Mandanten arbeiten oder falschen Menüpunkt öffnen.",
  consequence:
    "Zahlungsvorschläge werden in der falschen Gesellschaft erzeugt.",
  checklist: [
    "Dynamics geöffnet?",
    "Richtige Gesellschaft aktiv?",
    "Bereich Zahlungsvorschläge geöffnet?"
  ]
},

  {
  title: "Schritt 2: Zahlungsvorschlag erzeugen",
  task:
    "Erzeuge den Kreditor-Zahlungsvorschlag über die Aktionsleiste.",
  image: imgZv2,
  points: [
    "Aktion auswählen",
    "Vorschlag wählen",
    "Erzeugen anklicken",
    "Kreditor-Zahlungsvorschlag auswählen"
  ],
  result:
    "Das Fenster zur Erstellung des Zahlungsvorschlags ist geöffnet.",
  example:
    "Du startest den Vorschlag über die Aktionsleiste, um alle fälligen Rechnungen automatisch zu ermitteln.",
  mistake:
    "Falsche Funktion gewählt oder Vorschlag nicht korrekt gestartet.",
  checklist: [
    "Aktion geöffnet?",
    "Vorschlag ausgewählt?",
    "Kreditor-Zahlungsvorschlag gestartet?"
  ]
},

  {
  title: "Schritt 3: Parameter setzen",
  task:
    "Setze die Parameter für den Zahlungsvorschlag korrekt.",
  images: [imgZv4, imgZv5],
  points: [
    "Fälligkeit bis nächsten Donnerstag setzen",
    "Monatsende-Ausnahmen beachten",
    "Skonto berücksichtigen",
    "Buchungsdatum auf nächsten Tag setzen"
  ],
  result:
    "Der Vorschlag berücksichtigt nur die relevanten, fälligen Posten.",
  example:
    "Du stellst die Fälligkeit bis Donnerstag ein, damit nur die aktuell zu zahlenden Rechnungen im Lauf erscheinen.",
  mistake:
    "Falsches Fälligkeitsdatum oder Skonto nicht berücksichtigt.",
  consequence:
    "Zu frühe oder zu späte Zahlungen bzw. Skontoverlust.",
  checklist: [
    "Fälligkeit korrekt gesetzt?",
    "Skonto berücksichtigt?",
    "Buchungsdatum plausibel?"
  ]
},

{
  title: "Schritt 4: Zahlungsvorschlag ausführen",
  task:
    "Starte die Erstellung des Vorschlags und prüfe den Status.",
  image: imgZv6,
  points: [
    "Auf OK klicken",
    "Erstellung abwarten",
    "Status auf 'Offen' prüfen"
  ],
  result:
    "Der Zahlungsvorschlag ist erstellt und offen zur Bearbeitung.",
  example:
    "Nach der Erstellung siehst du den neuen Vorschlag mit Status 'Offen' in der Liste.",
  mistake:
    "Falschen Vorschlag auswählen oder Status nicht prüfen.",
  checklist: [
    "Vorschlag erstellt?",
    "Status = Offen?",
    "Richtigen Vorschlag identifiziert?"
  ]
},

  {
  title: "Schritt 5: Zahlungszeilen fachlich prüfen",
  task:
    "Führe die Qualitätsprüfung der Zahlungszeilen durch.",
  image: imgZv7,
  points: [
    "Zahlungszeilen öffnen",
    "Beträge prüfen",
    "IBAN kontrollieren",
    "Verwendungszweck prüfen",
    "Beträge über 1.000 € besonders prüfen"
  ],
  result:
    "Der Zahlungsvorschlag ist fachlich geprüft.",
  example:
    "Du entdeckst eine falsche IBAN und korrigierst sie vor dem Zahllauf.",
  mistake:
    "Zahlungszeilen ungeprüft übernehmen.",
  consequence:
    "Falsche Zahlungen oder Fehlüberweisungen.",
  checklist: [
    "Beträge korrekt?",
    "IBAN plausibel?",
    "Verwendungszweck korrekt?",
    "Große Beträge geprüft?"
  ]
},

  {
  title: "Schritt 6: Mahnliste abgleichen",
  task:
    "Stelle sicher, dass dringende Posten berücksichtigt werden.",
  image: imgZv8,
  points: [
    "Mahnliste prüfen",
    "Dringende Rechnungen identifizieren",
    "Falls nötig: Vorschlag anpassen"
  ],
  result:
    "Dringende Rechnungen sind im Zahllauf enthalten.",
  example:
    "Eine Rechnung mit Mahnung wird zusätzlich in den Lauf aufgenommen.",
  mistake:
    "Mahnliste nicht geprüft.",
  consequence:
    "Mahnung oder Lieferstopp durch nicht bezahlte Rechnungen.",
  checklist: [
    "Mahnliste geprüft?",
    "Dringende Fälle berücksichtigt?"
  ]
},

  {
  title: "Schritt 7: Zahlungsvorschlagsliste dokumentieren",
  task:
    "Erzeuge die Zahlungsvorschlagsliste als PDF.",
  points: [
    "Liste drucken auswählen",
    "Zahlungsvorschlagsliste öffnen",
    "Vorschau als PDF speichern"
  ],
  result:
    "Die Zahlungsvorschlagsliste ist dokumentiert.",
  example:
    "Du speicherst die Liste als PDF im vorgesehenen Ordner.",
  mistake:
    "Keine Dokumentation erstellt.",
  consequence:
    "Fehlende Nachvollziehbarkeit oder fehlende Freigabegrundlage.",
  checklist: [
    "Liste gedruckt?",
    "PDF gespeichert?",
    "Richtiger Ablageort?"
  ]
},

  {
  title: "Schritt 8: Zahllauf ausführen",
  task:
    "Führe den Zahllauf technisch aus.",
  image: imgZv9,
  points: [
    "Zahlungsvorschlag markieren",
    "Zahlungen durchführen auswählen"
  ],
  result:
    "Die Zahlungen wurden technisch ausgeführt.",
  example:
    "Nach dem Zahllauf werden die Zahlungsdateien erstellt.",
  mistake:
    "Zahllauf ohne Prüfung starten.",
  consequence:
    "Fehlüberweisungen oder falsche Zahlungen.",
  checklist: [
    "Vorschlag geprüft?",
    "Richtigen Vorschlag ausgewählt?",
    "Zahllauf erfolgreich durchgeführt?"
  ]
},
  {
  title: "Schritt 9: Zahllauf buchen",
  task:
    "Buche den Zahllauf gemäß interner Regel.",
  points: [
    "Zahlung öffnen",
    "Buchen auswählen",
    "Interne Regel beachten: Buchung erst am Montag"
  ],
  result:
    "Der Zahllauf ist korrekt verbucht.",
  example:
    "Der Zahllauf wird am Montag gebucht, nachdem alle Zahlungen korrekt abgeflossen sind.",
  mistake:
    "Zahllauf zu früh buchen.",
  consequence:
    "Falsche Bankbestände oder Abstimmungsprobleme.",
  checklist: [
    "Zahlung korrekt ausgeführt?",
    "Richtiger Zeitpunkt für Buchung?",
    "Buchung erfolgreich?"
  ]
}
];

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

const quiz = [
  {
    question:
      "Über welchen Klickpfad wird der Kreditor-Zahlungsvorschlag erzeugt?",
    options: [
      "Berichte → Drucken → Zahlungsliste",
      "Aktion → Vorschlag → Erzeugen → Kreditor-Zahlungsvorschlag",
      "Zahlungen → Buchen → Vorschlag erstellen"
    ],
    correctAnswer:
      "Aktion → Vorschlag → Erzeugen → Kreditor-Zahlungsvorschlag",
    correctFeedback:
      "Richtig! Über diesen Klickpfad wird der Zahlungsvorschlag technisch erzeugt.",
    wrongFeedback:
      "Nicht korrekt. Der richtige Pfad lautet: Aktion → Vorschlag → Erzeugen → Kreditor-Zahlungsvorschlag."
  },
  {
    question:
      "Welche Prüfung ist besonders wichtig vor dem Zahllauf?",
    options: [
      "Nur Layout prüfen",
      "Beträge über 1.000 € besonders prüfen",
      "Nur Anzahl der Zeilen zählen"
    ],
    correctAnswer:
      "Beträge über 1.000 € besonders prüfen",
    correctFeedback:
      "Richtig! Hohe Beträge müssen besonders geprüft werden, um Fehlüberweisungen zu vermeiden.",
    wrongFeedback:
      "Nicht korrekt. Vor allem Beträge über 1.000 € müssen besonders geprüft werden."
  },
  {
    question:
      "Welche interne Regel gilt für die Buchung des Zahllaufs?",
    options: [
      "Immer sofort buchen",
      "Erst am Montag buchen",
      "Nur am Monatsende buchen"
    ],
    correctAnswer:
      "Erst am Montag buchen",
    correctFeedback:
      "Richtig! Der Zahllauf wird gemäß interner Regel erst am Montag gebucht.",
    wrongFeedback:
      "Nicht korrekt. Laut interner Regel erfolgt die Buchung erst am Montag."
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
      className="step-screen step-with-background zahlungsvorschlag pop-in intro-background"
      style={{ backgroundImage: `url(${introImage})` }}
    >
      <div className="module-card step-card-full">
        <img
          src={introImage}
          alt="Zahlungsvorschlag"
          className="module-intro-image"
        />
  
        <h2>Zahlungsvorschlag</h2>
  
        <p className="step-task">
          <strong>Ziel des Moduls:</strong>{" "}
          Nach Abschluss dieses Moduls bist du in der Lage, Zahlungsvorschläge in Microsoft Dynamics eigenständig, strukturiert und regelkonform zu erstellen, zu prüfen und durchzuführen. Du stellst sicher, dass nur korrekte und freigegebene Kreditorenposten in den Zahllauf gelangen, erkennst fehlerhafte oder unzulässige Positionen und dokumentierst den Zahllauf vollständig und revisionssicher.
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
      className="step-screen step-with-background zahlungsvorschlag pop-in intro-background"
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
                Du hast alle Schritte des Zahlungsvorschlages erfolgreich abgeschlossen.
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
    className="step-screen step-with-background zahlungsvorschlag pop-in intro-background"
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
            <div
    className="step-screen step-with-background zahlungsvorschlag pop-in intro-background"
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
  
 {/* Mehrere Bilder */}
{steps[current].images && (
  <div className="step-images">
    {steps[current].images.map((img, i) => (
      <img
        key={i}
        src={img}
        alt={`${steps[current].title} – Ansicht ${i + 1}`}
        className="step-image"
      />
    ))}
  </div>
)}

{/* Einzelnes Bild */}
{steps[current].image && !steps[current].images && (
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
  
  export default Zahlungsvorschlag;