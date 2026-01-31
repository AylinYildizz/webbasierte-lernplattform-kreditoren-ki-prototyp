import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import introImage from "../assets/modules/postbearbeitung-intro.jpg";
import artemisLogo from "../assets/artemis-logo.png";

function ModuleDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isPostbearbeitung = id === "postbearbeitung";

  const steps = [
    {
      title: "Schritt 1: Posteingang prüfen",
      task: "Post aus dem Fach der Buchhaltung entnehmen und einen Überblick verschaffen.",
      points: [
        "Post trifft täglich gegen Mittag im Fach der Buchhaltung ein",
        "Alle Dokumente vollständig entnehmen"
      ],
      result: "Alle Dokumente sind gesammelt und bereit für die Sortierung.",
      example:
        "Im Posteingang befinden sich Lieferantenrechnungen, Kontoauszüge und interne Schreiben. Alle Unterlagen werden vollständig entnommen und auf Vollständigkeit geprüft."
    },
    {
      title: "Schritt 2: Grobsortierung nach Zuständigkeit",
      task: "Die eingehende Post nach Zuständigkeiten trennen.",
      points: ["Buchhaltung / Kreditoren", "Hauptbuch", "Andere Abteilungen"],
      result: "Die Post ist übersichtlich vorsortiert."
    },
    {
      title: "Schritt 3: Dokumentart erkennen",
      task: "Jedes Dokument einer passenden Kategorie zuordnen.",
      points: [
        "Rechnungen, Mahnungen, Kreditkartenabrechnungen",
        "Kontoauszüge oder debitorische Unterlagen"
      ],
      result: "Die weitere Bearbeitung ist eindeutig festgelegt."
    },
    {
  title: "Schritt 4: Rechnungen bearbeiten",
  task: "Eingangsrechnungen korrekt vorbereiten.",
  points: [
    "Bereits gescannte Rechnungen ablegen",
    "Nicht gescannte Rechnungen digitalisieren"
  ],
  result: "Rechnungen sind korrekt vorbereitet.",
  example:
    "Eine Papierrechnung mit kurzem Zahlungsziel wird eingescannt und direkt an die Kreditorenbuchhaltung weitergeleitet.",
  consequence:
    "Werden Rechnungen verspätet oder fehlerhaft weitergeleitet, können Skontofristen verfallen, Zahlungsziele überschritten werden und es entstehen unnötige Zusatzkosten."
 },
   {
  title: "Schritt 5: Mahnungen gesondert behandeln",
  task: "Mahnungen priorisiert bearbeiten.",
  points: ["Einscannen", "Unverzüglich weiterleiten", "Korrekt ablegen"],
  result: "Zahlungsfristen können eingehalten werden.",
  example:
    "Eine zweite Mahnung wird sofort digitalisiert und an die zuständige Sachbearbeitung weitergegeben.",
  consequence:
    "Bei verspäteter Bearbeitung drohen Verzugszinsen, Mahngebühren oder die Übergabe der Forderung an ein Inkassounternehmen. Zusätzlich kann die Geschäftsbeziehung zum Lieferanten nachhaltig beeinträchtigt werden."
},
    {
      title: "Schritt 6: Kreditkartenabrechnungen bearbeiten",
      task: "Kreditkartenabrechnungen korrekt verarbeiten.",
      points: ["Einscannen", "Weiterleiten"],
      result: "Kreditkartenumsätze sind erfasst."
    },
    {
      title: "Schritt 7: Debitorische Unterlagen ablegen",
      task: "Debitorische Unterlagen korrekt zuordnen.",
      points: ["Kassenunterlagen", "Ausgangsrechnungen", "Nordhessen-Boxen"],
      result: "Debitorische Unterlagen sind abgelegt."
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
      points: ["Interner Verteiler"],
      result: "Post erreicht die zuständigen Abteilungen.",
      example:
        "Ein Schreiben für die Personalabteilung wird direkt an HR weitergeleitet."
    },
   {
  title: "Schritt 10: Sonderfälle weitergeben",
  task: "Sonderfälle an zuständige Personen übergeben.",
  points: ["Bankverbindungsänderungen", "Zugangsdaten externer Anbieter"],
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
    options: ["Keine Auswirkungen", "Verzugszinsen oder Inkasso", "Automatische Gutschrift"],
    correctAnswer: "Verzugszinsen oder Inkasso"
  },
  {
    question: "An wen müssen Kontoauszüge und Bescheide weitergegeben werden?",
    options: ["Personalabteilung", "Hauptbuchhaltung", "Externe Dienstleister"],
    correctAnswer: "Hauptbuchhaltung"
  }
];
const [shuffledOptions, setShuffledOptions] = useState(
    shuffleArray(quiz[0].options)
  );
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

  if (!isPostbearbeitung) {
    return (
      <div className="container">
        <p>Inhalte für dieses Modul folgen.</p>
        <Link to="/module">
          <button className="primary-button">Zurück zu den Modulen</button>
        </Link>
      </div>
    );
  }

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
        <div className="step-screen step-with-background pop-in">
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
        <div className="step-screen step-with-background pop-in">
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
  <div className="step-screen step-with-background pop-in">
    <div className="module-card step-card-full">
        <img
              src={artemisLogo}
              alt="Artemis"
              className="module-card-logo"
            />
      <h2>Selbstüberprüfung</h2>

      <p className="step-task">
        Frage {quizStep + 1} von {quiz.length}:
      </p>

      <div className="step-callout tip">
        <strong>{quiz[quizStep].question}</strong>

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
          onClick={() => setQuizChecked(true)}
          disabled={quizAnswer === null}
        >
          Antwort prüfen
        </button>

        {quizChecked && (
          <div
            className={`step-callout ${
              quizAnswer === quiz[quizStep].correctAnswer ? "success" : "danger"
            }`}
            style={{ marginTop: "1rem" }}
          >
            {quizAnswer === quiz[quizStep].correctAnswer
              ? " Richtig! Mahnungen müssen immer priorisiert bearbeitet werden."
              : " Nicht ganz. Mahnungen haben höchste Priorität."}
          </div>
        )}
      </div>

      <div className="step-actions center">
       <button
  className="primary-button"
  disabled={!quizChecked || quizAnswer !== quiz[quizStep].correctAnswer}
  onClick={() => {
  if (quizStep < quiz.length - 1) {
    const nextStep = quizStep + 1;
    setQuizStep(nextStep);
    setShuffledOptions(shuffleArray(quiz[nextStep].options));
    setQuizAnswer(null);
    setQuizChecked(false);
  } else {
    setShowQuiz(false);
    setFinished(true);
  }
}}
>
  {quizStep < quiz.length - 1
    ? "Nächste Frage"
    : "Modul abschließen"}
</button>
      </div>
    </div>
  </div>
)}

      {!showIntro && !finished && !showQuiz && (
        <>
          <div className="step-screen step-with-background pop-in">
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