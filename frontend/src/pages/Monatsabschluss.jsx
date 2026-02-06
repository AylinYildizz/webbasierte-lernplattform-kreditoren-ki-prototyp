
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

import introImage from "../assets/modules/zahlungsvorschlag/zv0.png";
import artemisLogo from "../assets/artemis-logo.png";

// Bilder


function Monatsabschluss() {
  const navigate = useNavigate();


  /* ---------------- STEPS ---------------- */
const steps = [
  {
    title: "Schritt 1: Vollständigkeit in ELO prüfen",
    task:
      "Stelle sicher, dass alle relevanten Vorgänge in ELO vollständig abgearbeitet sind.",
    points: [
      "Prüfen, ob alle Rechnungen in ELO kontiert wurden",
      "Sicherstellen, dass keine offenen oder unbearbeiteten Vorgänge mehr vorhanden sind",
      "Besonderes Augenmerk auf Rechnungen, Gutschriften und Sonderfälle legen",
      "Erst weitermachen, wenn ELO vollständig leer bzw. abgearbeitet ist"
    ],
    result:
      "Alle ELO-Vorgänge sind abgeschlossen und bereit für den Monatsabschluss."
  },

  {
    title: "Schritt 2: Bankenbuchungen prüfen und buchen",
    task:
      "Stelle sicher, dass alle Bankbewegungen des Monats vollständig verbucht sind.",
    points: [
      "Dynamics öffnen",
      "Gesellschaft auswählen, für die der Monatsabschluss durchgeführt wird",
      "Prüfen, ob alle Bankbuchungen importiert und verbucht wurden",
      "Offene Bankposten identifizieren und klären",
      "Erst fortfahren, wenn keine offenen Bankbewegungen mehr vorhanden sind"
    ],
    result:
      "Alle Bankbewegungen des Monats sind vollständig gebucht."
  },

  {
    title: "Schritt 3: Kreditkartenabrechnungen im Posteingang prüfen",
    task:
      "Kontrolliere alle eingegangenen Kreditkartenabrechnungen im Kreditkarten-Posteingang.",
    points: [
      "Posteingang der Kreditkartenabrechnungen öffnen",
      "Kreditkartenabrechnungen nach Gesellschaft sortieren",
      "Sicherstellen, dass jede Abrechnung einer Gesellschaft eindeutig zugeordnet ist",
      "Fehlende Abrechnungen oder Unterlagen identifizieren"
    ],
    result:
      "Alle Kreditkartenabrechnungen sind identifiziert und zugeordnet."
  },

  {
    title: "Schritt 4: Besondere Anforderungen bei Geschenken & Restaurantkosten",
    task:
      "Prüfe bei sensiblen Kreditkartenumsätzen die Zusatzangaben.",
    points: [
      "Bei Geschenken und Restaurantkosten prüfen, ob ein Anlass angegeben ist",
      "Klärung: Warum, wann, weshalb ist der Aufwand entstanden?",
      "Teilnehmerliste bei Restaurantkosten anfordern",
      "Ohne Anlass/Teilnehmerliste keine Buchung durchführen",
      "Fehlende Angaben aktiv bei der einreichenden Person anfordern"
    ],
    result:
      "Alle sensiblen Kreditkartenumsätze sind vollständig dokumentiert."
  },

  {
    title: "Schritt 5: Kreditkartenabrechnung in Dynamics buchen (FiBu Buch.-Blätter)",
    task:
      "Buche die Kreditkartenabrechnung korrekt in Dynamics.",
    points: [
      "Dynamics öffnen",
      "Gesellschaft auswählen, zu der die Kreditkartenabrechnung gehört",
      "Navigation: **FiBu Buch.-Blätter**",
      "Reiter **Allgemein** → **Standard** auswählen",
      "Buchungsdatum: letzter Tag des gebuchten Monats (bei Monatsabschluss)",
      "Belegdatum: Datum vom Deckblatt der Kreditkartenabrechnung",
      "Alle weiteren Positionen-> Betrag, Kontoname, Sachkonto, Kostenstelle, Beschreibung korrekt angeben",
      "Gesamtsaldo der Kreditkartenabrechnung ergibt *0,00 €* !",
      "Buchung ausführen"
    ],
    result:
      "Die Kreditkartenabrechnung ist korrekt gebucht."
  },

  {
    title: "Schritt 6: Zahllauf im Monatsabschluss beachten",
    task:
      "Stelle sicher, dass der Zahllauf korrekt auf den Monatsabschluss abgestimmt ist.",
    points: [
      "Zahlungsvorschlagliste prüfen",
      "Buchungsdatum im Zahllauf: **letzter Tag des Monats**",
      "Nur Zahlungen buchen, die in den abzuschließenden Monat gehören",
      "Keine versehentlichen Folgemonatszahlungen buchen"
    ],
    result:
      "Der Zahllauf ist periodengerecht für den Monatsabschluss vorbereitet."
  },

  {
    title: "Schritt 7: Offene Posten vor Monatsabschluss klären",
    task:
      "Analysiere alle offenen Posten kurz vor dem Monatsabschluss.",
    points: [
      "Liste der offenen Posten aufrufen",
      "Prüfen: Warum ist der Posten noch offen?",
      "Mögliche Ursachen: Rechnung fehlt, falsch gebucht, Klärung ausstehend",
      "Gezielt Rückfragen an Fachbereiche oder Lieferanten stellen",
      "Offene Punkte dokumentieren"
    ],
    result:
      "Alle offenen Posten sind geprüft, erklärt oder in Klärung."
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
    correctAnswer: "ELO muss vollständig abgearbeitet sein"
  },

  {
    question:
      "Welches Buchungsdatum wird bei Kreditkarten im Monatsabschluss verwendet?",
    options: [
      "Belegdatum der Einzelposition",
      "Erster Tag des Folgemonats",
      "Letzter Tag des gebuchten Monats"
    ],
    correctAnswer: "Letzter Tag des gebuchten Monats"
  },
  {
    question:
      "Warum sind Anlass und Teilnehmerliste bei Restaurant- und Geschenkekosten wichtig?",
    options: [
      "Für interne Statistik",
      "Zur steuerlichen und fachlichen Nachvollziehbarkeit",
      "Nur für Archivzwecke"
    ],
    correctAnswer:
      "Zur steuerlichen und fachlichen Nachvollziehbarkeit"
  },
  {
    question:
      "Was muss der Saldo einer korrekt gebuchten Kreditkartenabrechnung ergeben?",
    options: ["Einen positiven Betrag", "Einen negativen Betrag", "0,00 €"],
    correctAnswer: "0,00 €"
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