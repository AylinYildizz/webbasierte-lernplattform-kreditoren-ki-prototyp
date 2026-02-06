import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

import introImage from "../assets/modules/postbearbeitung-intro.jpg";
import artemisLogo from "../assets/artemis-logo.png";


function ModuleDetail() {
  const navigate = useNavigate();


  const steps = [
    {
      title: "Schritt 1: Posteingang prüfen",
      task: "Post aus dem vorgesehenen Ablagefach der Buchhaltung entnehmen und einen vollständigen Überblick über alle eingegangenen Dokumente verschaffen.",
      points: [
        "Post trifft täglich gegen Mittag im Fach der Buchhaltung ein",
        "Alle eingegangenen Dokumente vollständig entnehmen",
        "Sichprüfung durchführen (Vollständigkeit, offensichtliche Dringlichkeit)"
      ],
      result: "Alle eingegangenen Dokumente liegen vollständig vor und sind bereit für die weitere Sortierung.",
      example:
        "Im Posteingang befinden sich mehrere Lieferantenrechnungen, ein Kontoauszug sowie interne Schreiben. Alle Unterlagen werden vollständig entnommen und grob gesichtet, um sicherzustellen, dass kein zeitkritisches Dokument (z. B. eine Mahnung) übersehen wird."
    },
    {
      title: "Schritt 2: Grobsortierung nach Zuständigkeit",
      task: "Die eingegangene Post nach fachlicher Zuständigkeit vorsortieren, um eine effiziente Weiterverarbeitung zu ermöglichen.",
      points: ["Buchhaltung / Kreditoren", "Buchhaltung / Debitoren", " Unterlagen für die Hauptbuchhaltung separieren", "Dokumente für andere Abteilungen identifizieren"],
      result: "Die Post ist übersichtlich vorsortiert."
    },
    {
      title: "Schritt 3: Dokumentart erkennen",
      task: "Jedes Dokument eindeutig einer Dokumentart zuordnen, um den weiteren Bearbeitungsprozess korrekt festzulegen.",
      points: [
        "Rechnungen, Mahnungen, Kreditkartenabrechnungen",
        "Kontoauszüge oder debitorische Unterlagen",
        "Sonderfälle (z. B. Bankverbindungsänderungen) vormerken"
      ],
      result: "Die weitere Bearbeitung ist eindeutig festgelegt."
    },
    {
  title: "Schritt 4:  Eingangsrechnungen bearbeiten",
  task: "Eingangsrechnungen korrekt vorbereiten, damit sie fristgerecht und fehlerfrei in der Kreditorenbuchhaltung weiterverarbeitet werden können.",
  points: [
    "Bereits digital vorliegende Rechnungen korrekt ablegen",
    "Papierrechnungen vollständig und gut lesbar einscannen",
    "Sicherstellen, dass alle relevanten Angaben enthalten sind (z. B. Rechnungsdatum, Betrag, Lieferant)"
  ],
  result: "Rechnungen sind korrekt vorbereitet.",
  example:
    "Eine Papierrechnung eines Lieferanten mit einem kurzen Zahlungsziel von zehn Tagen wird eingescannt, digital abgelegt und unmittelbar an die Kreditorenbuchhaltung weitergeleitet, um den fristgerechten Zahlungslauf sicherzustellen.",
  consequence:
    "Werden Rechnungen verspätet oder fehlerhaft weitergeleitet, können Skontofristen verfallen, Zahlungsziele überschritten werden oder Mahngebühren entstehen. Dies führt zu unnötigen Zusatzkosten und kann die Beziehung zum Lieferanten negativ beeinflussen."
 },
   {
  title: "Schritt 5: Mahnungen gesondert behandeln",
  task: "Mahnungen aufgrund ihrer Dringlichkeit priorisiert bearbeiten und unverzüglich weiterleiten.",
  points: ["Einscannen", "Unverzüglich weiterleiten", "Korrekt ablegen"],
  result: "Zahlungsfristen können eingehalten werden.",
  example:
    "Eine zweite Mahnung eines Lieferanten wird unmittelbar nach Eingang digitalisiert und noch am selben Tag an die zuständige Sachbearbeiterin weitergegeben, um weitere Kosten zu vermeiden.",
  consequence:
    "Bei verspäteter Bearbeitung von Mahnungen können Verzugszinsen, zusätzliche Mahngebühren oder die Übergabe der Forderung an ein Inkassounternehmen erfolgen. Darüber hinaus kann das Vertrauen des Lieferanten in die Zuverlässigkeit des Unternehmens nachhaltig geschädigt werden."
},
    {
      title: "Schritt 6: Kreditkartenabrechnungen bearbeiten",
      task: "Kreditkartenabrechnungen korrekt erfassen und zur weiteren buchhalterischen Verarbeitung weiterleiten.",
      points: ["Kreditkartenabrechnungen vollständig einscannen", "Weiterleitung an die zuständige Buchhaltung","Sicherstellen, dass Belege eindeutig zugeordnet werden können"],
      result: "Kreditkartenumsätze sind erfasst."
    },
    {
      title: "Schritt 7: Debitorische Unterlagen ablegen",
      task: "Debitorische Unterlagen korrekt zuordnen.",
      points: ["Kassenunterlagen", "Ausgangsrechnungen", "Nordhessen-Boxen"],
      result: "Debitorische Unterlagen sind eindeutig zugeordnet und auffindbar."
    },
    {
      title: "Schritt 8: Hauptbuch-Unterlagen weitergeben",
      task: "Unterlagen an die Hauptbuchhaltung übergeben.",
      points: ["Kontoauszüge", "Bescheide"],
      result: "Hauptbuch-Unterlagen sind weitergegeben."
    },
    {
      title: "Schritt 9: Post für andere Abteilungen",
      task: "Nicht buchhalterische Post intern verteilen.",
      points: ["Zuständige Abteilung bestimmen", "Internen Verteiler nutzen","Keine Verzögerungen verursachen"],
      result: "Post erreicht die zuständigen Abteilungen.",
      example:
        "Ein Schreiben für die Personalabteilung wird direkt an HR weitergeleitet."
    },
   {
  title: "Schritt 10: Sonderfälle weitergeben",
  task: "Sonderfälle an zuständige Personen übergeben.",
  points: ["Bankverbindungsänderungen", "Zugangsdaten oder sicherheitsrelevante Inhalte gesondert behandeln", "Direkte Übergabe an berechtigte Personen"],
  result: "Sonderfälle sind korrekt übergeben.",
  consequence:
    "Werden Sonderfälle nicht korrekt oder rechtzeitig weitergegeben, kann es zu Fehlüberweisungen, Sicherheitsrisiken oder erheblichen Verzögerungen im Zahlungsverkehr kommen."
}
  ];

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}
const quiz = [
  {
    question: "Welche Dokumente müssen besonders priorisiert bearbeitet werden?",
    options: ["Werbepost", "Mahnungen", "Interne Notizen"],
    correctAnswer: "Mahnungen"
  },
  {
    question: "Was kann eine Folge sein, wenn Mahnungen zu spät weitergeleitet werden?",
    options: [
      "Keine Auswirkungen",
      "Verzugszinsen oder Inkasso",
      "Automatische Gutschrift"
    ],
    correctAnswer: "Verzugszinsen oder Inkasso"
  },
  {
    question: "An wen müssen Kontoauszüge und Bescheide weitergegeben werden?",
    options: [
      "Personalabteilung",
      "Hauptbuchhaltung",
      "Externe Dienstleister"
    ],
    correctAnswer: "Hauptbuchhaltung"
  },
  {
    question: "Was ist der erste Schritt bei der Postbearbeitung?",
    options: [
      "Dokumente einscannen",
      "Posteingang prüfen",
      "Rechnungen buchen"
    ],
    correctAnswer: "Posteingang prüfen"
  },
  {
    question: "Wie sollen eingehende Dokumente zunächst sortiert werden?",
    options: [
      "Nach Datum",
      "Nach Zuständigkeit",
      "Nach Seitenanzahl"
    ],
    correctAnswer: "Nach Zuständigkeit"
  },
  {
    question: "Was gehört zu den Sonderfällen in der Postbearbeitung?",
    options: [
      "Werbebriefe",
      "Bankverbindungsänderungen",
      "Interne Notizen"
    ],
    correctAnswer: "Bankverbindungsänderungen"
  },
  {
    question: "Was ist bei Kreditkartenabrechnungen erforderlich?",
    options: [
      "Sofortige Löschung",
      "Einscannen und Weiterleiten",
      "Archivierung ohne Prüfung"
    ],
    correctAnswer: "Einscannen und Weiterleiten"
  },
  {
    question: "Warum ist eine korrekte Postbearbeitung wichtig?",
    options: [
      "Zur optischen Ordnung",
      "Zur Vermeidung von Kosten und Risiken",
      "Für statistische Zwecke"
    ],
    correctAnswer: "Zur Vermeidung von Kosten und Risiken"
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
        <div className="step-screen step-with-background postbearbeitung pop-in">
          <div className="module-card step-card-full">
            <img
              src={introImage}
              alt="Postbearbeitung"
              className="module-intro-image"
            />
            <h2>Postbearbeitung</h2>

            <p className="step-task">
              <strong>Ziel des Moduls:</strong>{" "}
              Du beherrschst nach Abschluss dieses Moduls den vollständigen Prozess
              der Postbearbeitung in der Buchhaltung, von der Sichtung des
              Posteingangs bis zur ordnungsgemäßen Weiterleitung.
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
              Du hast alle Schritte der Postbearbeitung erfolgreich abgeschlossen.
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
              ? " Richtig! Mahnungen müssen immer priorisiert bearbeitet werden."
              : " Nicht ganz. Mahnungen haben höchste Priorität."}
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

export default ModuleDetail;