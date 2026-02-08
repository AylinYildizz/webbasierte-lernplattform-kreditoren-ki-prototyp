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
 const steps = [
  {
    title: "Schritt 1: Microsoft Dynamics öffnen und Gesellschaft auswählen",
    task:
      "Starte Microsoft Dynamics und wähle die Gesellschaft (Mandant) aus, in der die Verbuchung durchgeführt wird. Dieser Schritt ist entscheidend, um Fehlbuchungen im falschen Mandanten zu verhindern.",
    images: [imgV1, imgV2],
    points: [
      "Microsoft Dynamics starten",
      "Oben prüfen, welche Gesellschaft/Mandant aktiv ist",
      "Falls notwendig: Gesellschaft wechseln",
      "Erst danach mit der Verbuchung beginnen"
    ],
    result:
      "Die richtige Gesellschaft ist aktiv. Du arbeitest im korrekten Mandanten.",
    example:
      "Du sollst Rechnungen für Gesellschaft A verbuchen, siehst aber, dass Gesellschaft B aktiv ist. Du wechselst zuerst den Mandanten, bevor du weiterarbeitest.",
    mistake:
      "Gesellschaft nicht geprüft oder im falschen Mandanten gearbeitet.",
    consequence:
      "Buchungen landen im falschen Mandanten → falsche Auswertungen, Korrekturbuchungen, hoher Abstimmungsaufwand.",
    checklist: [
      "Dynamics geöffnet?",
      "Richtige Gesellschaft aktiv?",
      "Mandant oben sichtbar kontrolliert?",
      "Erst dann weiter?"
    ]
  },

  {
    title: "Schritt 2: ELO FiBu-Zeilenverteilung aufrufen und in die Mandanten verteilen",
    task:
      "Rufe die ELO FiBu-Zeilenverteilung auf und verteile buchungsrelevante Zeilen in die passenden Mandanten. Damit stellst du sicher, dass die Buchungszeilen in Dynamics korrekt zugeordnet sind.",
    image: imgV3,
    points: [
      "Reiter „ELO FiBu-Zeilenverteilung“ öffnen",
      "Funktion „In die Mandanten verteilen“ auswählen",
      "Kurz prüfen, ob die Zeilen plausibel zugeordnet sind"
    ],
    result:
      "Buchungszeilen sind korrekt verteilt und für die weitere Verarbeitung vorbereitet.",
    example:
      "Du verteilst Zeilen aus ELO auf mehrere Mandanten. Danach können diese Zeilen in den jeweiligen Gesellschaften korrekt weiterverarbeitet werden.",
    mistake:
      "Mandantenverteilung nicht durchgeführt oder ohne Plausibilitätscheck bestätigt.",
    consequence:
      "Zeilen fehlen später in der Gesellschaft oder werden falsch zugeordnet → Buchungsprozess stockt.",
    checklist: [
      "ELO FiBu-Zeilenverteilung geöffnet?",
      "„In die Mandanten verteilen“ ausgeführt?",
      "Plausibilität kurz geprüft?"
    ]
  },

  {
    title: "Schritt 3: ELO FiBu Buch.-Blattzeile prüfen und offene Zeilen filtern",
    task:
      "Öffne die ELO FiBu Buch.-Blattzeile und filtere gezielt alle offenen (nicht behandelten) Zeilen, damit du nur aktuelle, noch nicht verbuchte Vorgänge bearbeitest.",
    image: imgV4,
    points: [
      "Reiter „ELO FiBu Buch.-Blattzeile“ öffnen",
      "Filter „Keine behandelten Zeilen“ setzen",
      "Sicherstellen, dass nur offene Zeilen angezeigt werden"
    ],
    result:
      "Du siehst ausschließlich offene, noch nicht verbuchte Buchungszeilen.",
    example:
      "Du filterst nach offenen Zeilen und vermeidest dadurch, bereits bearbeitete Vorgänge doppelt zu verbuchen.",
    mistake:
      "Ohne Filter gearbeitet und versehentlich bereits behandelte Zeilen erneut verarbeitet.",
    consequence:
      "Doppelverbuchungen oder unnötige Korrekturen/Abstimmungen.",
    checklist: [
      "Reiter geöffnet?",
      "Filter „Keine behandelten Zeilen“ aktiv?",
      "Nur offene Zeilen sichtbar?"
    ]
  },

  {
    title: "Schritt 4: Sachkonten und Beschreibungen kontrollieren",
    task:
      "Prüfe jede offene Buchungszeile fachlich. Ziel ist es, vor der Belegerzeugung falsche Sachkonten, unklare Texte oder unplausible Beträge zu erkennen und zu korrigieren.",
    points: [
      "Sachkonto fachlich plausibel?",
      "Buchungstext/Beschreibung verständlich und eindeutig?",
      "Beträge plausibel (Netto/Steuer/Brutto)?",
      "Bei Auffälligkeiten: Korrektur/Abklärung vor der Verbuchung"
    ],
    result:
      "Alle offenen Buchungszeilen sind fachlich korrekt vorbereitet.",
    example:
      "Du erkennst ein falsches Sachkonto (z. B. Material statt Dienstleistung) und klärst/korrigierst dies, bevor Rechnungen erzeugt werden.",
    mistake:
      "Sachkonten/Beschreibungen ungeprüft lassen („wird schon passen“).",
    consequence:
      "Fehlbuchungen führen zu Abstimmungsproblemen, falschen Kostenstellen-Auswertungen und Fehlern im Monatsabschluss.",
    checklist: [
      "Sachkonto geprüft?",
      "Text/Beschreibung nachvollziehbar?",
      "Beträge plausibel?",
      "Auffälligkeiten vor Erzeugung geklärt?"
    ]
  },

  {
    title: "Schritt 5: EK-Rechnungen und Gutschriften erstellen",
    task:
      "Erzeuge aus den vorbereiteten Buchungszeilen die Einkaufsrechnungen und Einkaufsgutschriften. Dadurch entstehen die buchbaren Belege in Dynamics.",
    image: imgV5,
    points: [
      "Drei Punkte/Weitere Optionen öffnen",
      "„Erstelle EK-Rechnung und Gutschriften“ auswählen",
      "Systemmeldung prüfen (Erfolg/Fehler)"
    ],
    result:
      "Einkaufsrechnungen und Gutschriften wurden aus den Zeilen erzeugt.",
    example:
      "Nach dem Klick erzeugt Dynamics automatisch die Einkaufsrechnungen, die du anschließend im Reiter „Einkaufsrechnung“ prüfst.",
    mistake:
      "Belege erzeugen, obwohl Zeilen vorher nicht geprüft wurden.",
    checklist: [
      "Vorher Schritt 4 geprüft?",
      "Funktion korrekt ausgeführt?",
      "Erfolgsmeldung erhalten?"
    ]
  },

  {
    title: "Schritt 6: SHS FiBu Buch.-Blattzeile öffnen (Comed-Rechnungen)",
    task:
      "Wechsle zur SHS FiBu Buch.-Blattzeile und filtere auch dort offene Zeilen. Diese Ansicht enthält die Comed-Rechnungen aus dem Vorsystem.",
    image: imgV6,
    points: [
      "Reiter „SHS FiBu Buch.-Blattzeile“ öffnen",
      "Filter „Keine behandelten Zeilen“ setzen",
      "Nur offene Comed-Zeilen anzeigen"
    ],
    result:
      "Alle offenen Comed-Buchungszeilen sind sichtbar.",
    example:
      "Du filterst offene Zeilen, um nur neue Comed-Vorgänge zu erstellen und nicht alte erneut anzustoßen.",
    mistake:
      "Comed-Zeilen ohne Filter oder ohne Prüfung erzeugen.",
    checklist: [
      "Reiter SHS FiBu geöffnet?",
      "Filter „Keine behandelten Zeilen“ aktiv?",
      "Offene Zeilen sichtbar?"
    ]
  },

  {
    title: "Schritt 7: Comed-Rechnungen erstellen",
    task:
      "Erzeuge auch aus den offenen Comed-Zeilen die Einkaufsrechnungen und Gutschriften.",
    image: imgV7,
    points: [
      "Weitere Optionen öffnen",
      "„Erstelle EK-Rechnung und Gutschriften“ auswählen",
      "Erfolgsmeldung prüfen"
    ],
    result:
      "Comed-Einkaufsrechnungen/Gutschriften wurden erzeugt.",
    example:
      "Du erzeugst Comed-Rechnungen, die danach ebenfalls im Einkaufsrechnungs-Reiter geprüft werden müssen.",
    mistake:
      "Comed-Belege erzeugen und direkt buchen, ohne sie inhaltlich zu prüfen.",
    checklist: [
      "Funktion ausgeführt?",
      "Erfolgsmeldung geprüft?",
      "Belege erscheinen in Einkaufsrechnung/Gutschriften?"
    ]
  },

  {
    title: "Schritt 8: Einkaufsrechnungen prüfen",
    task:
      "Prüfe die erzeugten Einkaufsrechnungen vor dem finalen Buchen. Ziel ist, falsche Beträge, Sachkonten oder Texte vor der Buchung zu erkennen.",
    image: imgV8,
    points: [
      "Reiter „Einkaufsrechnung“ öffnen",
      "Beträge prüfen",
      "Sachkonten prüfen",
      "Beschreibung/Buchungstext prüfen",
      "Auffälligkeiten korrigieren oder klären"
    ],
    result:
      "Alle Einkaufsrechnungen sind fachlich geprüft und korrekt.",
    example:
      "Du stellst fest, dass die Beschreibung unvollständig ist und ergänzt sie, bevor du buchst.",
    mistake:
      "Rechnungen nur oberflächlich prüfen oder direkt buchen.",
    consequence:
      "Fehlerhafte Verbuchung → Korrekturbuchungen und höhere Fehlerquote im Abschluss.",
    checklist: [
      "Reiter Einkaufsrechnung geöffnet?",
      "Beträge geprüft?",
      "Sachkonten geprüft?",
      "Texte/Beschreibung geprüft?"
    ]
  },

  {
    title: "Schritt 9: Einkaufsrechnungen markieren und verbuchen",
    task:
      "Markiere alle geprüften Einkaufsrechnungen und buche sie. Damit werden die Buchungen im System final geschrieben.",
    image: imgV9,
    points: [
      "Alle geprüften Einkaufsrechnungen markieren",
      "Auf „Buchen“ klicken",
      "Buchungsstatus prüfen (Erfolg/Fehler)"
    ],
    result:
      "Die Einkaufsrechnungen sind erfolgreich verbucht.",
    example:
      "Nach dem Buchen sind die Belege im System festgeschrieben und fließen in die Auswertungen ein.",
    mistake:
      "Buchen ohne vollständige Prüfung oder falsche Auswahl markiert.",
    checklist: [
      "Nur geprüfte Rechnungen markiert?",
      "Buchung ausgelöst?",
      "Status/Fehlermeldungen geprüft?"
    ]
  },

  {
    title: "Schritt 10: Einkaufsgutschriften prüfen und verbuchen",
    task:
      "Prüfe abschließend alle erzeugten Einkaufsgutschriften und buche sie. Gutschriften wirken sich anders auf Salden aus und müssen daher separat geprüft werden.",
    points: [
      "Reiter „Einkaufsgutschriften“ öffnen",
      "Gutschriften fachlich prüfen (Beträge, Sachkonto, Text)",
      "Alle markieren und „Buchen“ ausführen"
    ],
    result:
      "Einkaufsgutschriften sind geprüft und korrekt verbucht.",
    example:
      "Eine Gutschrift korrigiert eine vorherige Rechnung. Du stellst sicher, dass Betrag und Bezug korrekt sind, bevor du buchst.",
    mistake:
      "Gutschriften mit Rechnungen verwechseln oder ohne Prüfung buchen.",
    consequence:
      "Falsche Salden/Abstimmungen und Fehler in Auswertungen.",
    checklist: [
      "Reiter Einkaufsgutschriften geöffnet?",
      "Beträge/Bezug geprüft?",
      "Sachkonten geprüft?",
      "Gutschriften gebucht?"
    ]
  }
];

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}
 const quiz = [
  {
    question: "Warum muss vor der Verbuchung die richtige Gesellschaft in Dynamics ausgewählt werden?",
    options: [
      "Damit Dynamics schneller lädt",
      "Damit Buchungen nicht im falschen Mandanten erfolgen",
      "Weil sonst keine Rechnungen angezeigt werden"
    ],
    correctAnswer: "Damit Buchungen nicht im falschen Mandanten erfolgen",
    correctFeedback:
      "Richtig. Nur im richtigen Mandanten sind Buchungen korrekt zugeordnet und auswertbar.",
    wrongFeedback:
      "Nicht korrekt. Der wichtigste Grund ist, Fehlbuchungen im falschen Mandanten zu verhindern."
  },
  {
    question: "Wozu dient die ELO FiBu-Zeilenverteilung?",
    options: [
      "Zur Archivierung von Dokumenten",
      "Zur Vorbereitung/Verteilung buchungsrelevanter Zeilen auf Mandanten",
      "Zur Anzeige bereits verbuchter Rechnungen"
    ],
    correctAnswer: "Zur Vorbereitung/Verteilung buchungsrelevanter Zeilen auf Mandanten",
    correctFeedback:
      "Richtig. Die Zeilen werden mandantengerecht verteilt und für die Verbuchung vorbereitet.",
    wrongFeedback:
      "Nicht korrekt. Die FiBu-Zeilenverteilung dient der Vorbereitung/Verteilung auf Mandanten."
  },
  {
    question: "Warum setzt man in den Buch.-Blattzeilen den Filter „Keine behandelten Zeilen“?",
    options: [
      "Um nur fehlerhafte Buchungen zu sehen",
      "Um ausschließlich offene, noch nicht verbuchte Zeilen anzuzeigen",
      "Um alle Buchungen auszublenden"
    ],
    correctAnswer: "Um ausschließlich offene, noch nicht verbuchte Zeilen anzuzeigen",
    correctFeedback:
      "Richtig. So bearbeitest du nur aktuelle Vorgänge und vermeidest Doppelverarbeitung.",
    wrongFeedback:
      "Nicht korrekt. Der Filter dient dazu, nur offene/nicht behandelte Zeilen zu sehen."
  },
  {
    question: "Welche Prüfung ist vor dem Erstellen von EK-Rechnungen zwingend notwendig?",
    options: [
      "Neustart von Dynamics",
      "Kontrolle von Sachkonten und Beschreibungen",
      "Ausdruck aller Zeilen"
    ],
    correctAnswer: "Kontrolle von Sachkonten und Beschreibungen",
    correctFeedback:
      "Richtig. Fachliche Prüfungen müssen vor der Belegerzeugung erfolgen, sonst entstehen Fehlbuchungen.",
    wrongFeedback:
      "Nicht korrekt. Entscheidend ist die Kontrolle von Sachkonten und Beschreibungen."
  },
  {
    question: "Was kann passieren, wenn Sachkonten fehlerhaft verbucht werden?",
    options: [
      "Keine Auswirkungen",
      "Abstimmungsprobleme und fehlerhafte Abschlüsse",
      "Automatische Korrektur durch das System"
    ],
    correctAnswer: "Abstimmungsprobleme und fehlerhafte Abschlüsse",
    correctFeedback:
      "Richtig. Falsche Sachkonten verfälschen Auswertungen und erschweren Monats-/Jahresabschluss.",
    wrongFeedback:
      "Nicht korrekt. Fehlerhafte Sachkonten führen zu Abstimmungsproblemen und fehlerhaften Abschlüssen."
  },
  {
    question: "Warum werden Einkaufsrechnungen und Einkaufsgutschriften getrennt geprüft und verbucht?",
    options: [
      "Weil sie unterschiedliche buchhalterische Auswirkungen haben",
      "Weil Dynamics das erzwingt",
      "Weil Gutschriften automatisch verbucht werden"
    ],
    correctAnswer: "Weil sie unterschiedliche buchhalterische Auswirkungen haben",
    correctFeedback:
      "Richtig. Gutschriften wirken anders auf Salden und müssen daher separat geprüft werden.",
    wrongFeedback:
      "Nicht korrekt. Rechnungen und Gutschriften haben unterschiedliche Auswirkungen und werden deshalb getrennt geprüft."
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
  Nach Abschluss dieses Moduls kannst du den Verbuchungsprozess in Microsoft Dynamics
  strukturiert und regelkonform durchführen. Du bist in der Lage, offene Buchungszeilen
  systematisch zu filtern, sachlich zu prüfen (Sachkonto/Beschreibung/Beträge),
  Einkaufsrechnungen sowie Einkaufsgutschriften zu erzeugen und anschließend korrekt zu buchen.
  Du erkennst typische Fehlerquellen (z. B. falsche Gesellschaft, offene Zeilen, fehlerhafte Sachkonten)
  und verhinderst dadurch Fehlbuchungen und Abstimmungsprobleme.
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

export default Verbuchung;