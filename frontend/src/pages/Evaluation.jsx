import { useState } from "react";

function Evaluation() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [page, setPage] = useState(0);

  const handleChange = (key, value) => {
    setAnswers({ ...answers, [key]: value });
  };

  const handleSubmit = async () => {
    await fetch("http://localhost:3001/api/evaluation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ answers }),
    });

    setSubmitted(true);
  };

  const scale = [1, 2, 3, 4, 5];
  const totalPages = 6;

  if (submitted) {
    return (
      <div style={{ padding: "60px", textAlign: "center" }}>
        <h2>Vielen Dank für Ihr Feedback!</h2>
        <p>Ihre Antworten wurden erfolgreich übermittelt.</p>
      </div>
    );
  }

  return (
    <div
      className="evaluation-page"
      style={{
        maxWidth: "1100px",
        margin: "40px auto",
        padding: "50px",
        background: "white",
        borderRadius: "12px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
        fontSize: "16px",
        lineHeight: "1.6",
      }}
    >
      <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>
  Evaluation der Lernplattform
</h2>
<p style={{ color: "#666", marginBottom: "25px" }}>
  Bitte beantworten Sie die folgenden Fragen. Die Bearbeitung dauert ca. 3–5 Minuten.
</p>

      {/* Fortschrittsbalken */}
      <div
        style={{
          height: "8px",
          background: "#eee",
          borderRadius: "6px",
          marginBottom: "30px",
        }}
      >
        <div
          style={{
            width: `${((page + 1) / totalPages) * 100}%`,
            height: "100%",
            background: "#2b5cff",
            borderRadius: "6px",
          }}
        />
      </div>

      {/* Seite 1 */}
      {page === 0 && (
        <>
          <h3>Abschnitt 1: Allgemeine Angaben</h3>

          <p>1. Wie schätzen Sie Ihre Erfahrung im Bereich Kreditorenbuchhaltung ein?</p>
          {[
            "Keine Erfahrung",
            "Grundkenntnisse",
            "Fortgeschrittene Kenntnisse",
            "Sehr erfahren",
          ].map((opt) => (
            <label key={opt} style={{ display: "block" }}>
              <input
                type="radio"
                name="experience"
                onChange={() => handleChange("q1", opt)}
              />
              {opt}
            </label>
          ))}

          <p>2. Haben Sie bereits mit ähnlichen Lernplattformen gearbeitet?</p>
          {["Ja", "Nein"].map((opt) => (
            <label key={opt} style={{ display: "block" }}>
              <input
                type="radio"
                name="platformExperience"
                onChange={() => handleChange("q2", opt)}
              />
              {opt}
            </label>
          ))}
        </>
      )}

      {/* Seite 2 */}
      {page === 1 && (
        <>
          <h3>Abschnitt 2: Benutzerfreundlichkeit</h3>
          {[
            "Die Lernplattform ist übersichtlich aufgebaut.",
            "Die Navigation zwischen den Modulen ist einfach und verständlich.",
            "Die einzelnen Schritte innerhalb der Module sind logisch strukturiert.",
            "Ich konnte mich ohne zusätzliche Hilfe auf der Plattform orientieren.",
            "Die Gestaltung der Oberfläche unterstützt den Lernprozess.",
          ].map((q, i) => (
            <Question key={i} number={i + 3} text={q} scale={scale} onChange={handleChange} />
          ))}
        </>
      )}

      {/* Seite 3 */}
      {page === 2 && (
        <>
          <h3>Abschnitt 3: Verständlichkeit der Inhalte</h3>
          {[
            "Die Inhalte der Module sind verständlich erklärt.",
            "Die Schritt-für-Schritt-Darstellung hilft beim Lernen der Prozesse.",
            "Die Praxisbeispiele unterstützen das Verständnis.",
            "Die typischen Fehlerquellen sind hilfreich erklärt.",
            "Die Checklisten unterstützen die sichere Bearbeitung der Aufgaben.",
            "Die Lernmodule vermitteln die wesentlichen Standardprozesse der Kreditorenbuchhaltung.",
          ].map((q, i) => (
            <Question key={i} number={i + 8} text={q} scale={scale} onChange={handleChange} />
          ))}
        </>
      )}

      {/* Seite 4 */}
      {page === 3 && (
        <>
          <h3>Abschnitt 4: Wahrgenommener Lernnutzen</h3>
          {[
            "Die Lernplattform hilft, die Arbeitsabläufe besser zu verstehen.",
            "Nach der Nutzung fühle ich mich sicherer im Umgang mit den Prozessen.",
            "Die Plattform eignet sich gut zur Einarbeitung neuer Mitarbeitender.",
            "Die Inhalte sind praxisnah und realitätsorientiert.",
          ].map((q, i) => (
            <Question key={i} number={i + 14} text={q} scale={scale} onChange={handleChange} />
          ))}
        </>
      )}

      {/* Seite 5 */}
      {page === 4 && (
        <>
          <h3>Abschnitt 5 & 6: Quiz und KI-Assistenz</h3>

          {[
            "Die Quizfragen sind verständlich formuliert.",
            "Die Quizfragen passen zu den Lerninhalten der Module.",
            "Das Quiz hilft, den eigenen Wissensstand zu überprüfen.",
          ].map((q, i) => (
            <Question key={i} number={i + 18} text={q} scale={scale} onChange={handleChange} />
          ))}

          <p>21. Ich habe die KI-Assistenz verwendet.</p>
          {["Ja", "Nein"].map((opt) => (
            <label key={opt} style={{ display: "block" }}>
              <input
                type="radio"
                name="kiUsed"
                onChange={() => handleChange("q21", opt)}
              />
              {opt}
            </label>
          ))}

          {[
            "Die Antworten der KI waren verständlich formuliert.",
            "Die KI-Assistenz konnte meine Fragen beantworten.",
            "Die Antworten der KI passten zu den Inhalten der Lernplattform.",
            "Die KI-Assistenz ist eine sinnvolle Ergänzung zur Lernplattform.",
            "Ich würde die KI-Assistenz bei der Einarbeitung nutzen.",
          ].map((q, i) => (
            <Question key={i} number={i + 22} text={q} scale={scale} onChange={handleChange} />
          ))}
        </>
      )}

      {/* Seite 6 */}
      {page === 5 && (
        <>
          <h3>Abschnitt 7 & 8: Gesamtbewertung und offene Fragen</h3>

          {[
            "Insgesamt bin ich mit der Lernplattform zufrieden.",
            "Die Lernplattform eignet sich für die Einarbeitung neuer Mitarbeitender.",
          ].map((q, i) => (
            <Question key={i} number={i + 27} text={q} scale={scale} onChange={handleChange} />
          ))}

          <p>29. Was hat Ihnen an der Lernplattform besonders gut gefallen?</p>
          <textarea
            rows="3"
            style={{ width: "100%" }}
            onChange={(e) => handleChange("q29", e.target.value)}
          />

          <p>30. Was sollte Ihrer Meinung nach verbessert werden?</p>
          <textarea
            rows="3"
            style={{ width: "100%" }}
            onChange={(e) => handleChange("q30", e.target.value)}
          />

          <p>31. Haben Sie Anmerkungen zur KI-Assistenz?</p>
          <textarea
            rows="3"
            style={{ width: "100%" }}
            onChange={(e) => handleChange("q31", e.target.value)}
          />
        </>
      )}

      {/* Navigation */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "40px",
        }}
      >
        {page > 0 && (
          <button onClick={() => setPage(page - 1)} className="secondary-button">
            Zurück
          </button>
        )}

        {page < totalPages - 1 && (
          <button onClick={() => setPage(page + 1)} className="primary-button">
            Weiter
          </button>
        )}

        {page === totalPages - 1 && (
          <button onClick={handleSubmit} className="primary-button">
            Fragebogen absenden
          </button>
        )}
      </div>
    </div>
  );
}

function Question({ number, text, scale, onChange }) {
  const scaleLabels = {
    1: "Stimme überhaupt nicht zu",
    2: "Stimme eher nicht zu",
    3: "Teils/teils",
    4: "Stimme eher zu",
    5: "Stimme voll zu",
  };

  return (
    <div
      style={{
        marginBottom: "45px",
        paddingBottom: "25px",
        borderBottom: "1px solid #eee",
      }}
    >
      <p
  style={{
    marginBottom: "15px",
    fontWeight: "600",
    fontSize: "17px"
  }}
>
        {number}. {text}
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "15px",
        }}
      >
        {scale.map((val) => (
          <label
            key={val}
            style={{
              flex: 1,
              textAlign: "center",
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            <input
              type="radio"
              name={`q${number}`}
              value={val}
              onChange={() => onChange(`q${number}`, val)}
              style={{ marginBottom: "6px" }}
            />
            <div style={{ fontWeight: "500" }}>{val}</div>
            <div style={{ color: "#666" }}>{scaleLabels[val]}</div>
          </label>
        ))}
      </div>
    </div>
  );
}

export default Evaluation;