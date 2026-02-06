
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
    task: "Öffne Microsoft Dynamics und wähle die Gesellschaft aus, in der du die Bankbuchung durchführen willst.",
    image: imgB1,
    points: [
      "Microsoft Dynamics starten",
      "Oben prüfen, in welcher Gesellschaft du gerade bist",
      "Falls falsch: Gesellschaft wechseln und die korrekte auswählen",
      "Erst fortfahren, wenn die Gesellschaft eindeutig korrekt ist"
    ],
    result:
      "Die richtige Gesellschaft ist ausgewählt und du arbeitest im korrekten Mandanten.",
    consequence:"Wenn in der falschen Gesellschaft gebucht wird, entstehen fehlerhafte Buchungen im Hauptbuch und ein hoher Korrekturaufwand"
  },

  {
    title: "Schritt 2: Reiter offene Zlg. mportjournale öffnen",
    task: "Navigiere in Microsoft Dynamics zum Reiter 'offene Zlg. Importjournale', in dem die noch nicht verarbeiteten Zahlungen angezeigt werden.",
    image: imgB2,
    points: [
      "Reiter 'offen Zlg. Importjournale' öffnen",
  
    ],
    result:
      "Du befindest dich in der Übersicht der Importjournale",
    consequence:
  []
  },

  {
    title: "Schritt 3: Bank anhand der Banknummer auswählen",
    task: "Suche die Bank, die du buchen willst, anhand ihrer Banknummer und markiere die richtige Zeile.",
    points: [
      "In der Importjournal-Liste nach der Bank suchen",
      "Jede Bank hat eine eigene Banknummer",
      "Beispiel: Centro = Banknummer 60",
      "Klicke genau auf die Zeile, in der die Banknummer der gewünschten Bank steht",
      "Kurz kontrollieren: Bankname + Banknummer müssen zusammenpassen"
    ],
    result:
      "Die richtige Bankzeile (z. B. Banknummer 60 für Centro) ist ausgewählt.",
    consequence:
      "Wenn du die falsche Bank auswählst, importierst und buchst du Zahlungseingänge der falschen Bank, das führt zu Fehlbuchungen."
  },


  {
    title: "Schritt 4: In Erw. Zahlungseingang importieren",
    task: "Importiere aus den Importjournalen in den Erw. Zahlungseingang.",
    image: imgB3,
    points: [
      "Im Erw. Zahlungseingang auf 'In ERW Zahlungseingang importieren' klicken",
      "Dadurch werden die offenen Zlg. aus dem Importjournal in die ERW-Ansicht übernommen",
      "Nach dem Import kurz prüfen, ob Datensätze geladen wurden (Liste füllt sich)",
      "Wenn keine Datensätze erscheinen: prüfen, ob die richtige Bankzeile gewählt wurde"
    ],
    result:
      "Die offenen Zlg. wurden erfolgreich in den Erw. Zahlungseingang importiert und sind sichtbar.",
    consequence:
      "Wenn du nicht importierst, buchst du nichts."
  },

  {
    title: "Schritt 5: Erw. Zahlungseingang öffnen",
    task: "Öffne den erweiterten Zahlungseingang vollständig, um die Details prüfen zu können.",
    image: imgB3,
    points: [
      "Jetzt den Button 'Erw. Zahlungseingang öffnen' auswählen",
    ],
    result:
      "Der Erw. Zahlungseingang ist vollatändig geöffnet und alle Details sind sichtbar.",
    consequence:
      "Wenn du nicht korrekt öffnest, übersiehst du möglicherweise Details oder kannst Positionen nicht korrekt prüfen/bearbeiten."
  },

  {
    title: "Schritt 6: Zahlungseingänge prüfen und vergleichen",
    task: "Prüfe die importierten Zahlungseingänge sorgfältig, bevor du buchst.",
    image: imgB4,
    points: [
      "Beträge und Buchungsinformationen kontrollieren",
      "Zahlungseingänge mit vorhandenen Informationen vergleichen (Plausibilität)",
      "Achten auf Auffälligkeiten: doppelte Positionen, falsche Beträge, falscher Zeitraum",
      "Bei Unklarheiten: nicht buchen, sondern erst klären"
    ],
    result:
      "Die Zahlungseingänge wurden geprüft und sind plausibel für die Buchung vorbereitet.",
    consequence:
      "Wenn du ungeprüft buchst, können falsche Salden, Doppelbuchungen und Abstimmungsprobleme im Hauptbuch entstehen."
  },

  {
    title: "Schritt 7: Fehlerhafte Positionen löschen (falls nötig)",
    task: "Wenn Positionen nicht stimmen, lösche diese konsequent, bevor gebucht wird.",
    image: imgB5,
    points: [
      "Unstimmige/fehlerhafte Zahlungseingänge identifizieren",
      "Wenn etwas nicht stimmt: Position(en) löschen",
      "Danach erneut prüfen, ob nur korrekte Positionen übrig sind",
      "Erst weitergehen, wenn alles korrekt ist"
    ],
    result:
      "Fehlerhafte Positionen wurden entfernt, die verbleibenden Datensätze sind korrekt.",
    consequence:
      "Wenn falsche Positionen nicht gelöscht werden, werden sie mitgebucht → es entstehen Fehlbuchungen."
  },

  {
    title: "Schritt 8: Buchen",
    task: "Buche die Zahlungseingänge.",
    points: [
      "Wenn alle Positionen korrekt sind: Button 'Buchen' auswählen",
      "Warten, bis die Buchung erfolgreich abgeschlossen ist",
    ],
    result:
      "Die Zahlungseingänge wurden erfolgreich gebucht.",
   
  }
];

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}
const quiz = [
  {
    question: "Warum muss vor der Bankbuchung zuerst die richtige Gesellschaft in Dynamics ausgewählt werden?",
    options: [
      "Damit das Layout korrekt angezeigt wird",
      "Weil Buchungen immer gesellschaftsbezogen erfolgen",
      "Weil sonst keine Banken angezeigt werden"
    ],
    correctAnswer: "Weil Buchungen immer gesellschaftsbezogen erfolgen"
  },

  {
    question: "In welchem Reiter befinden sich die offenen Zahlungseingänge, die noch nicht verarbeitet wurden?",
    options: [
      "Hauptbuch",
      "Importjournale",
      "Debitorenliste"
    ],
    correctAnswer: "Importjournale"
  },

  {
    question: "Warum ist es wichtig, die Bank anhand der Banknummer auszuwählen?",
    options: [
      "Weil jede Bank eigene Zahlungseingänge hat",
      "Weil die Banknummer optional ist",
      "Weil die Bank sonst automatisch gewählt wird"
    ],
    correctAnswer: "Weil jede Bank eigene Zahlungseingänge hat"
  },


  {
    question: "Welche Aktion muss durchgeführt werden, damit die offenen Zlg. aus den Importjournalen übernommen werden?",
    options: [
      "Erw. Zahlungseingang öffnen",
      "In Erw. Zahlungseingang importieren",
      "Direkt buchen"
    ],
    correctAnswer: "In Erw. Zahlungseingang importieren"
  },
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


