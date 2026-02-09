import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

import introImage from "../assets/modules/postbearbeitung-intro.jpg";
import artemisLogo from "../assets/artemis-logo.png";


function ModuleDetail() {
  const navigate = useNavigate();


 const steps = [
  {
    title: "Schritt 1: Posteingang prüfen",
    task:
      "Entnimm die Post aus dem vorgesehenen Ablagefach und verschaffe dir einen vollständigen Überblick über alle eingegangenen Dokumente.",
    points: [
      "Post trifft täglich gegen Mittag im Fach der Buchhaltung ein",
      "Alle Dokumente vollständig entnehmen",
      "Sichtprüfung durchführen: Vollständigkeit, Dringlichkeit, Auffälligkeiten"
    ],
    example:
      "Im Posteingang befinden sich mehrere Lieferantenrechnungen, ein Kontoauszug und ein Schreiben mit Zahlungsfrist. Du entnimmst alle Unterlagen, prüfst grob auf Vollständigkeit und markierst zeitkritische Dokumente für die priorisierte Bearbeitung.",
    mistake:
      "Ein Teil der Post bleibt im Fach liegen oder wird nicht als zeitkritisch erkannt, wodurch Fristen (z. B. Skonto oder Mahnfristen) unnötig verstreichen.",
    checklist: [
      "Alle Dokumente vollständig entnommen",
      "Zeitkritische Dokumente erkannt (Mahnungen, kurze Zahlungsziele)",
      "Unklare/auffällige Post (z. B. Bankdatenänderungen) markiert",
      "Gesamtüberblick über Menge und Arten der Unterlagen hergestellt"
    ],
    result:
      "Alle eingegangenen Dokumente liegen vollständig vor und sind bereit für die Sortierung."
  },

  {
    title: "Schritt 2: Grobsortierung nach Zuständigkeit",
    task:
      "Sortiere die Post nach Zuständigkeit, um eine effiziente Weiterverarbeitung zu ermöglichen.",
    points: [
      "Kreditoren (Eingangsrechnungen, Mahnungen, Kreditkartenabrechnungen)",
      "Debitoren (Ausgangsrechnungen, Kassenunterlagen ->je nach Prozess)",
      "Hauptbuch (Kontoauszüge, Bescheide)",
      "Andere Abteilungen (HR, Einkauf, Praxismanagement)"
    ],
    example:
      "Du legst alle Rechnungen und Mahnungen in den Kreditoren-Stapel, Kontoauszüge in den Hauptbuch-Stapel und ein HR-Schreiben in den Bereich 'Andere Abteilungen'.",
    mistake:
      "Dokumente werden falsch zugeordnet (z. B. Kontoauszug bei Kreditoren), was zu Verzögerungen, Doppelbearbeitung oder Fehlablagen führt.",
    checklist: [
      "Jede Post einem Zuständigkeitsbereich zugeordnet",
      "Kreditoren-/Debitoren-/Hauptbuch-Unterlagen getrennt",
      "Post für andere Abteilungen eindeutig markiert",
      "Sonderfälle separat gelegt"
    ],
    result:
      "Die Post ist übersichtlich vorsortiert und kann zielgerichtet weiterbearbeitet werden."
  },

  {
    title: "Schritt 3: Dokumentart erkennen",
    task:
      "Ordne jedes Dokument einer eindeutigen Dokumentart zu, damit der passende Bearbeitungsprozess ausgelöst wird.",
    points: [
      "Rechnung vs. Mahnung vs. Gutschrift unterscheiden",
      "Kreditkartenabrechnung erkennen",
      "Bankunterlagen (Kontoauszüge, Bescheide) erkennen",
      "Sonderfälle notieren (z. B. Bankverbindungsänderung)"
    ],
    example:
      "Ein Schreiben mit Betreff '2. Mahnung' wird als Mahnung klassifiziert und priorisiert. Eine Rechnung mit Leistungszeitraum wird als Eingangsrechnung klassifiziert und für den Scanprozess vorbereitet.",
    mistake:
      "Eine Mahnung wird als normale Rechnung behandelt und nicht priorisiert ->dadurch entstehen Verzugszinsen oder weitere Mahnstufen.",
    checklist: [
      "Dokumentart eindeutig bestimmt",
      "Zeitkritische Dokumentarten priorisiert",
      "Unklare Dokumente markiert und zur Klärung zurückgestellt",
      "Sonderfälle separat erfasst"
    ],
    result:
      "Für jedes Dokument ist klar, welcher Prozess als Nächstes folgt."
  },

  {
    title: "Schritt 4: Eingangsrechnungen bearbeiten",
    task:
      "Bereite Eingangsrechnungen korrekt vor, damit sie fristgerecht und fehlerfrei in der Kreditorenbuchhaltung weiterverarbeitet werden können.",
    points: [
      "Digital vorliegende Rechnungen korrekt ablegen",
      "Papierrechnungen vollständig und gut lesbar einscannen",
      "Sicherstellen: Rechnungsdatum, Betrag, Lieferant, Leistungsbezug vorhanden",
      "Dokument eindeutig benennen/zuordnen (nach interner Regel)"
    ],
    example:
      "Eine Papierrechnung mit Zahlungsziel 10 Tage wird eingescannt, in der richtigen Ablagestruktur gespeichert und sofort an den Kreditorenprozess übergeben.",
    mistake:
      "Scans sind unvollständig oder unleserlich (z. B. abgeschnittene Seiten), wodurch Rückfragen entstehen oder die Rechnung nicht freigegeben werden kann.",
    consequence:
      "Werden Rechnungen verspätet oder fehlerhaft weitergeleitet, können Skontofristen verfallen, Zahlungsziele überschritten werden oder Mahngebühren entstehen. Dies verursacht Zusatzkosten und kann die Lieferantenbeziehung belasten.",
    checklist: [
      "Scan vollständig (alle Seiten, Anhänge)",
      "Scan lesbar (keine Schatten/Schräglage)",
      "Rechnung eindeutig zuordenbar (Lieferant, Betrag, Datum)",
      "Ablageort korrekt",
      "Zeitkritische Rechnung markiert"
    ],
    result:
      "Rechnungen sind korrekt vorbereitet und können im Kreditorenprozess verarbeitet werden."
  },

  {
    title: "Schritt 5: Mahnungen gesondert behandeln",
    task:
      "Bearbeite Mahnungen aufgrund ihrer Dringlichkeit priorisiert und leite sie unverzüglich weiter.",
    points: [
      "Mahnungen sofort digitalisieren (Scan)",
      "Unverzüglich an zuständige Bearbeitung weiterleiten",
      "Korrekt ablegen und dokumentieren"
    ],
    example:
      "Eine zweite Mahnung wird direkt nach Eingang eingescannt und noch am selben Tag an die zuständige Person weitergegeben.",
    mistake:
      "Mahnungen werden gesammelt und erst später weitergegeben, wodurch zusätzliche Kosten oder Eskalationen entstehen.",
    consequence:
      "Bei verspäteter Bearbeitung können Verzugszinsen, zusätzliche Mahngebühren oder Inkasso folgen. Außerdem kann das Vertrauen des Lieferanten nachhaltig geschädigt werden.",
    checklist: [
      "Mahnung erkannt (Betreff/Mahnstufe)",
      "Sofort gescannt und lesbar abgelegt",
      "Zuständigkeit eindeutig geklärt",
      "Weiterleitung dokumentiert (Datum/Empfänger)",
      "Dringlichkeit sichtbar markiert"
    ],
    result:
      "Mahnungen sind priorisiert verarbeitet und Fristen können eingehalten werden."
  },

  {
    title: "Schritt 6: Kreditkartenabrechnungen bearbeiten",
    task:
      "Erfasse Kreditkartenabrechnungen vollständig und leite sie zur buchhalterischen Verarbeitung weiter.",
    points: [
      "Kreditkartenabrechnungen vollständig einscannen",
      "Belege/Anhänge mit erfassen (wenn vorhanden)",
      "Weiterleitung an zuständige Buchhaltung",
      "Eindeutige Zuordnung zur Gesellschaft/Periode sicherstellen"
    ],
    example:
      "Eine Kreditkartenabrechnung enthält mehrere Restaurantumsätze. Du scannst die Abrechnung vollständig und gibst sie an die zuständige Person weiter mit Hinweis, dass Anlass/Teilnehmerliste ggf. nachzureichen ist.",
    mistake:
      "Abrechnung wird ohne Anlagen weitergegeben oder der Zeitraum ist unklar, wodurch die Buchung nicht periodengerecht erfolgen kann.",
    checklist: [
      "Abrechnung vollständig (alle Seiten)",
      "Zuordnung zur Gesellschaft klar",
      "Zeitraum/Monat erkennbar",
      "Anhänge/Belege berücksichtigt",
      "Weiterleitung dokumentiert"
    ],
    result:
      "Kreditkartenunterlagen sind vollständig erfasst und für die Buchung vorbereitet."
  },

  {
    title: "Schritt 7: Debitorische Unterlagen ablegen",
    task:
      "Ordne debitorische Unterlagen korrekt zu und stelle sicher, dass sie auffindbar sind.",
    points: [
      "Kassenunterlagen",
      "Ausgangsrechnungen (falls relevant)",
      "Sonderablagen (z. B. Nordhessen-Boxen – nach eurer Regel)"
    ],
    example:
      "Kassenunterlagen eines Standorts werden in die definierte Debitorenablage gelegt und mit Datum gekennzeichnet.",
    mistake:
      "Debitorische Unterlagen landen im Kreditorenprozess ->dadurch fehlen Unterlagen an anderer Stelle und es entsteht Suchaufwand.",
    checklist: [
      "Debitorenunterlagen als solche erkannt",
      "Ablageort korrekt",
      "Datum/Standort erkennbar",
      "Keine Vermischung mit Kreditorenpost"
    ],
    result:
      "Debitorische Unterlagen sind eindeutig zugeordnet und schnell auffindbar."
  },

  {
    title: "Schritt 8: Hauptbuch-Unterlagen weitergeben",
    task:
      "Gib Unterlagen, die zur Hauptbuchhaltung gehören, vollständig und zeitnah weiter.",
    points: [
      "Kontoauszüge",
      "Bescheide",
      "Sonstige Hauptbuch-relevante Schreiben"
    ],
    example:
      "Ein Kontoauszug wird sofort an die Hauptbuchhaltung übergeben, damit Bankbuchungen zeitnah erfolgen können.",
    mistake:
      "Kontoauszüge werden zu spät weitergegeben, wodurch Bankabstimmung und Monatsabschluss verzögert werden.",
    checklist: [
      "Hauptbuch-Unterlagen vollständig erkannt",
      "Zeitnah weitergegeben",
      "Übergabe dokumentiert (wenn intern gefordert)"
    ],
    result:
      "Hauptbuch-Unterlagen sind vollständig weitergegeben."
  },

  {
    title: "Schritt 9: Post für andere Abteilungen verteilen",
    task:
      "Leite nicht-buchhalterische Post intern weiter, ohne Prozesse zu verzögern.",
    points: [
      "Zuständige Abteilung bestimmen",
      "Internen Verteiler/Standardweg nutzen",
      "Keine Verzögerung verursachen"
    ],
    example:
      "Ein Schreiben für die Personalabteilung wird noch am selben Tag an HR weitergeleitet.",
    mistake:
      "Post bleibt liegen, weil Zuständigkeit nicht geklärt wird –>dadurch entstehen Verzögerungen und Rückfragen.",
    checklist: [
      "Abteilung/Zuständigkeit klar",
      "Weiterleitung erfolgt",
      "Bei Unklarheit: kurze Rückfrage statt liegen lassen"
    ],
    result:
      "Post erreicht die zuständigen Abteilungen zuverlässig."
  },

  {
    title: "Schritt 10: Sonderfälle sicher behandeln und weitergeben",
    task:
      "Behandle Sonderfälle gesondert und übergib sie direkt an berechtigte Personen.",
    points: [
      "Bankverbindungsänderungen separat behandeln",
      "Zugangsdaten oder sicherheitsrelevante Inhalte nicht offen liegen lassen",
      "Direkte Übergabe an berechtigte Personen"
    ],
    example:
      "Ein Schreiben zur Bankverbindungsänderung wird als Sonderfall markiert und direkt an die zuständige Person übergeben, damit Stammdaten nur kontrolliert geändert werden.",
    mistake:
      "Bankdatenänderungen werden ungeprüft weitergegeben oder abgelegt ->Risiko von Fehlüberweisungen oder Betrugsfällen.",
    consequence:
      "Werden Sonderfälle nicht korrekt oder rechtzeitig weitergegeben, kann es zu Fehlüberweisungen, Sicherheitsrisiken oder erheblichen Verzögerungen im Zahlungsverkehr kommen.",
    checklist: [
      "Sonderfall erkannt und separat gelegt",
      "Berechtigte Person identifiziert",
      "Direkte Übergabe erfolgt",
      "Dokument nicht offen zugänglich abgelegt"
    ],
    result:
      "Sonderfälle sind sicher behandelt und korrekt übergeben."
  }
];

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}
const quiz = [
  {
    question: "Welche Dokumente müssen besonders priorisiert bearbeitet werden?",
    options: ["Werbepost", "Mahnungen", "Interne Notizen"],
    correctAnswer: "Mahnungen",
    explanation:
      "Mahnungen sind zeitkritisch. Eine verspätete Bearbeitung kann zu Verzugszinsen, Mahngebühren oder Inkasso führen."
  },
  {
    question: "Was kann eine Folge sein, wenn Mahnungen zu spät weitergeleitet werden?",
    options: ["Keine Auswirkungen", "Verzugszinsen oder Inkasso", "Automatische Gutschrift"],
    correctAnswer: "Verzugszinsen oder Inkasso",
    explanation:
      "Bei Fristüberschreitungen entstehen zusätzliche Kosten und es kann zu Eskalationen (Inkasso) kommen."
  },
  {
    question: "An wen müssen Kontoauszüge und Bescheide weitergegeben werden?",
    options: ["Personalabteilung", "Hauptbuchhaltung", "Externe Dienstleister"],
    correctAnswer: "Hauptbuchhaltung",
    explanation:
      "Kontoauszüge und Bescheide sind in der Regel für Abstimmung, Bankbuchungen und Monatsabschluss im Hauptbuch relevant."
  },
  {
    question: "Was ist der erste Schritt bei der Postbearbeitung?",
    options: ["Dokumente einscannen", "Posteingang prüfen", "Rechnungen buchen"],
    correctAnswer: "Posteingang prüfen",
    explanation:
      "Ohne vollständigen Überblick besteht das Risiko, Dokumente zu übersehen oder falsch zu priorisieren."
  },
  {
    question: "Wie sollen eingehende Dokumente zunächst sortiert werden?",
    options: ["Nach Datum", "Nach Zuständigkeit", "Nach Seitenanzahl"],
    correctAnswer: "Nach Zuständigkeit",
    explanation:
      "Die Sortierung nach Zuständigkeit reduziert Suchaufwand, verhindert Prozessbrüche und beschleunigt die Bearbeitung."
  },
  {
    question: "Was gehört zu den Sonderfällen in der Postbearbeitung?",
    options: ["Werbebriefe", "Bankverbindungsänderungen", "Interne Notizen"],
    correctAnswer: "Bankverbindungsänderungen",
    explanation:
      "Bankdatenänderungen sind sicherheitsrelevant und müssen kontrolliert und nur durch berechtigte Personen verarbeitet werden."
  },
  {
    question: "Was ist bei Kreditkartenabrechnungen erforderlich?",
    options: ["Sofortige Löschung", "Einscannen und Weiterleiten", "Archivierung ohne Prüfung"],
    correctAnswer: "Einscannen und Weiterleiten",
    explanation:
      "Kreditkartenabrechnungen müssen vollständig dokumentiert und an die zuständige Buchhaltung weitergegeben werden."
  },
  {
    question: "Warum ist eine korrekte Postbearbeitung wichtig?",
    options: ["Zur optischen Ordnung", "Zur Vermeidung von Kosten und Risiken", "Für statistische Zwecke"],
    correctAnswer: "Zur Vermeidung von Kosten und Risiken",
    explanation:
      "Fehler in der Postbearbeitung verursachen Verzögerungen, Kosten (Skontoverlust, Mahngebühren) und Sicherheitsrisiken."
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
  Nach Abschluss dieses Moduls kannst du die Postbearbeitung in der Buchhaltung
  standardisiert und nachvollziehbar durchführen. Du bist in der Lage,
  eingehende Dokumente vollständig zu erfassen, nach Zuständigkeit und
  Dokumentart zu klassifizieren, zeitkritische Vorgänge (z. B. Mahnungen)
  zu priorisieren und Unterlagen regelkonform weiterzuleiten. Dadurch stellst du sicher,
  dass nachgelagerte Prozesse der Kreditorenbuchhaltung fristgerecht,
  vollständig und revisionssicher angestoßen werden.
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
  ? `Richtig. ${activeQuiz[quizStep].explanation || ""}`
  : `Nicht ganz. ${activeQuiz[quizStep].explanation || ""}`}
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

export default ModuleDetail;