import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import introImage from "../assets/modules/verbuchung/buchen2.png";
import artemisLogo from "../assets/artemis-logo.png";

// Bilder
import imgV1 from "../assets/modules/verbuchung/buchen1.png";
import imgV2 from "../assets/modules/verbuchung/buchen2.png";
import imgV3 from "../assets/modules/verbuchung/buchen3.png";
import imgV4 from "../assets/modules/verbuchung/buchen4.png";
import imgV5 from "../assets/modules/verbuchung/buchen5.png";
import imgV6 from "../assets/modules/verbuchung/buchen6.png";
import imgV7 from "../assets/modules/verbuchung/buchen7.png";
import imgV8 from "../assets/modules/verbuchung/buchen8.png";
import imgV9 from "../assets/modules/verbuchung/buchen9.png";


function Verbuchung() {
  const navigate = useNavigate();


  /* ---------------- STEPS ---------------- */
  /* ---------------- STEPS ---------------- */
 const steps = [
  {
    title: "Schritt 1: Microsoft Dynamics öffnen und Gesellschaft auswählen",
    task: "Starte Microsoft Dynamics und wähle die Gesellschaft aus, in der die Verbuchung durchgeführt werden soll. Dieser Schritt ist entscheidend, um sicherzustellen, dass alle Buchungen im richtigen Mandanten erfolgen",
    images: [imgV1, imgV2],
    points: [
      "Microsoft Dynamics starten",
      "Die richtige Gesellschaft auswählen",
    ],
    result:
      "Die richtige Gesellschaft ist geöffnet und das System ist für die Verbuchung vorbereitet."
  },

  {
    title: "Schritt 2: ELO FiBu-Zeilenverteilung aufrufen und in die Mandanten verteilen",
    task:
      "Rufe die ELO FiBu-Zeilenverteilung auf und verteile die buchungsrelevanten Zeilen auf die entsprechenden Mandanten.",
    image: imgV3,
    points: [
      "Reiter 'ELO FiBu-Zeilenverteilung' öffnen",
      "Funktion 'in die Mandanten verteilen' auswählen",
      "Sicherstellen, dass alle Zeilen dem richtigen Mandanten zugeordnet sind"
    ],
    result:
      "Die FiBu-Zeilen sind korrekt auf die Mandanten verteilt und bereit für die weitere Verarbeitung."
    
  },

  {
    title: "Schritt 3: ELO FiBu Buch.-Blattzeile prüfen",
    task: "Öffne die ELO FiBu Buch.-Blattzeile und filtere alle noch nicht behandelten Zeilen.",
    image: imgV4,
    points: [
      "Reiter 'ELO FiBu Buch.-Blattzeile' öffnen",
      "Filter 'Keine behandelten Zeilen' setzen",
      "Nur offene, noch nicht verbuchte Zeilen anzeigen lassen"
    ],
    result:
      "Es werden ausschließlich offene Buchungszeilen angezeigt."
  },

  {
    title: "Schritt 4: Sachkonten und Beschreibungen kontrollieren",
    task: "Prüfe alle offenen Buchungszeilen sorgfältig auf fachliche Richtigkeit und Vollständigkeit.",
    points: [
      "Sachkonten auf fachliche Richtigkeit prüfen",
      "Buchungstexte und Beschreibungen kontrollieren",
      "Falls erforderlich, Korrekturen oder Verbesserungen vornehmen"
    ],
    consequence:
      "Falsch gepflegte Sachkonten oder Beschreibungen führen zu fehlerhaften Buchungen und Abstimmungsproblemen.",
    result:
      "Alle Buchungszeilen sind fachlich korrekt vorbereitet."
  },

  {
    title: "Schritt 5: EK-Rechnungen und Gutschriften erstellen",
    task: "Erstelle aus den geprüften Buchungszeilen die Einkaufsrechnungen und Gutschriften.",
    image: imgV5,
    points: [
      "Auf die drei Punkte (Weitere Optionen) klicken",
      "Funktion 'Erstelle EK-Rechnung und Gutschriften' auswählen",
      "System erzeugt automatisch die entsprechenden Einkaufsbelege"
    ],
    result:
      "Die EK-Rechnungen und Gutschriften wurden erfolgreich erstellt."
  },

  {
    title: "Schritt 6: SHS FiBu Buch.-Blattzeile (Comed-Rechnungen) öffnen",
    task: "Wechsle zur SHS FiBu Buch-Blattzeile, um die Comed-Rechnungen zu bearbeiten.",
    image: imgV6,
    points: [
      "Reiter 'SHS FiBu Buch-Blattzeile' öffnen",
      "Diese Ansicht enthält alle Comed-Rechnungen",
      "Filter 'Keine behandelten Zeilen' setzen"
    ],
    result:
      "Alle offenen ComeD-Rechnungen sind sichtbar."
  },

  {
    title: "Schritt 7: Comed-Rechnungen erstellen",
    task: "Erstelle auch hier die EK-Rechnungen und Gutschriften aus den offenen Zeilen.",
    image: imgV7,
    points: [
      "Auf die drei Punkte (Weitere Optionen) klicken",
      "Funktion 'Erstelle EK-Rechnung und Gutschriften' auswählen",
      "System erstellt die Einkaufsrechnungen"
    ],
    result:
      "Die Comet-Rechnungen wurden erfolgreich erzeugt."
  },

  {
    title: "Schritt 8: Einkaufsrechnungen prüfen",
    task: "Öffne den Reiter Einkaufsrechnung und prüfe alle erzeugten Rechnungen.",
    image: imgV8,
    points: [
      "Reiter 'Einkaufsrechnung' öffnen",
      "Alle Rechnungen inhaltlich prüfen",
      "Beträge, Sachkonten und Beschreibungen kontrollieren"
    ],
    result:
      "Alle Einkaufsrechnungen sind geprüft und korrekt."
  },

  {
    title: "Schritt 9: Einkaufsrechnungen markieren und verbuchen",
    task: "Markiere alle geprüften Einkaufsrechnungen und buche diese im System.",
    image: imgV9,
    points: [
      "Alle Einkaufsrechnungen markieren",
      "Auf 'Buchen' klicken",
      "Buchung erfolgreich abschließen"
    ],
    result:
      "Die Einkaufsrechnungen sind verbucht."
  },

  {
    title: "Schritt 10: Einkaufsgutschriften prüfen und verbuchen",
    task: "Prüfe abschließend alle Einkaufsgutschriften und buche diese.",
    points: [
      "Reiter 'Einkaufsgutschriften' öffnen",
      "Alle Gutschriften fachlich prüfen",
      "Alle markieren und auf 'Buchen' klicken"
    ],
    result:
      "Die Einkaufsgutschriften sind korrekt verbucht."
  }
];

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}
 const quiz = [
  {
    question: "Warum ist es wichtig, vor der Verbuchung die richtige Gesellschaft in Dynamics auszuwählen?",
    options: [
      "Damit Dynamics schneller lädt",
      "Damit Buchungen nicht in der falschen Gesellschaft erfolgen",
      "Weil sonst keine Rechnungen angezeigt werden"
    ],
    correctAnswer: "Damit Buchungen nicht in der falschen Gesellschaft erfolgen"
  },

  {
    question: "Wozu dient der Reiter 'ELO FiBu-Zeilenverteilung'?",
    options: [
      "Zur Anzeige von bereits verbuchten Rechnungen",
      "Zur Vorbereitung und Verteilung buchungsrelevanter Zeilen",
      "Zur Archivierung von Dokumenten"
    ],
    correctAnswer: "Zur Vorbereitung und Verteilung buchungsrelevanter Zeilen"
  },

  {
    question: "Warum wird in der ELO FiBu Buch.-Blattzeile der Filter 'Keine behandelten Zeilen' gesetzt?",
    options: [
      "Um nur fehlerhafte Buchungen anzuzeigen",
      "Um ausschließlich offene, noch nicht verbuchte Zeilen zu sehen",
      "Um alle Buchungen auszublenden"
    ],
    correctAnswer: "Um ausschließlich offene, noch nicht verbuchte Zeilen zu sehen"
  },

  {
    question: "Welche Prüfung ist vor dem Erstellen von EK-Rechnungen zwingend erforderlich?",
    options: [
      "Druck der Buchungszeilen",
      "Kontrolle der Sachkonten und Beschreibungen",
      "Neustart von Dynamics"
    ],
    correctAnswer: "Kontrolle der Sachkonten und Beschreibungen"
  },

  {
    question: "Was kann passieren, wenn falsche Sachkonten verbucht werden?",
    options: [
      "Keine Auswirkungen",
      "Fehlerhafte Abschlüsse und Abstimmungsprobleme",
      "Die Rechnung wird automatisch korrigiert"
    ],
    correctAnswer: "Fehlerhafte Abschlüsse und Abstimmungsprobleme"
  },

  {
    question: "Welche Funktion wird genutzt, um aus Buchungszeilen Einkaufsrechnungen zu erzeugen?",
    options: [
      "Buchen",
      "Erstelle EK-Rechnung und Gutschriften",
      "Rechnung importieren"
    ],
    correctAnswer: "Erstelle EK-Rechnung und Gutschriften"
  },

  {
    question: "Was sind SHS FiBu Buch.-Blattzeilen?",
    options: [
      "Manuelle Korrekturbuchungen",
      "Comed-Rechnungen aus dem Vorsystem",
      "Bereits verbuchte Rechnungen"
    ],
    correctAnswer: "Comed-Rechnungen aus dem Vorsystem"
  },

  {
    question: "Warum müssen auch Comed-Rechnungen gefiltert nach 'Keine behandelten Zeilen' geprüft werden?",
    options: [
      "Damit nur neue, noch nicht verbuchte Rechnungen verarbeitet werden",
      "Weil sonst keine Rechnungen angezeigt werden",
      "Damit alte Rechnungen gelöscht werden"
    ],
    correctAnswer: "Damit nur neue, noch nicht verbuchte Rechnungen verarbeitet werden"
  },

  {
    question: "Was ist vor dem finalen Buchen der Einkaufsrechnungen unbedingt zu tun?",
    options: [
      "Alle Rechnungen ausdrucken",
      "Alle Rechnungen nochmals vollständig prüfen",
      "Dynamics schließen"
    ],
    correctAnswer: "Alle Rechnungen nochmals vollständig prüfen"
  },

  {
    question: "Warum werden Einkaufsrechnungen und Einkaufsgutschriften getrennt geprüft und verbucht?",
    options: [
      "Weil sie unterschiedliche buchhalterische Auswirkungen haben",
      "Weil Dynamics das so erzwingt",
      "Weil Gutschriften automatisch verbucht werden"
    ],
    correctAnswer: "Weil sie unterschiedliche buchhalterische Auswirkungen haben"
  },

  {
    question: "Was ist die größte Gefahr, wenn Rechnungen ohne Prüfung direkt gebucht werden?",
    options: [
      "Langsamere Systemleistung",
      "Falsche Buchungen und fehlerhafte Abschlüsse",
      "Keine Anzeige im Archiv"
    ],
    correctAnswer: "Falsche Buchungen und fehlerhafte Abschlüsse"
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
        alt="Verbuchung"
        className="module-intro-image"
      />

      <h2>Verbuchung</h2>

      <p className="step-task">
        <strong>Ziel des Moduls:</strong>{" "}
        Nach Abschluss dieses Moduls bist du in der Lage, buchhalterische Verbuchungsprozesse in Microsoft Dynamics selbstständig, strukturiert und regelkonform durchzuführen.
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
    className="step-screen step-with-background Verbuchung pop-in intro-background"
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
              Du hast alle Schritte der Verbuchung erfolgreich abgeschlossen.
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
  className="step-screen step-with-background Verbuchung pop-in intro-background"
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

export default Verbuchung;