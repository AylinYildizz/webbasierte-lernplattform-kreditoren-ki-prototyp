import { useState, useEffect } from "react";
import { useKIContext } from "../context/KIContext";
import kiAssistent from "../assets/ki/ki-assistent.png";
import { GLOBAL_CONTEXT } from "../search/globalContext";

function KIAssistantGlobal() {
  const { contextText } = useKIContext();
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  //  Öffnen über Navbar-Button
  useEffect(() => {
    function handleOpen() {
      setOpen(true);
    }

    window.addEventListener("open-ki", handleOpen);
    return () => window.removeEventListener("open-ki", handleOpen);
  }, []);

  async function ask() {
  if (!question.trim()) return;

  setLoading(true);
  setAnswer("");

  try {
    const res = await fetch(
      "https://webbasierte-lernplattform-kreditoren-ki-ucwn.onrender.com/api/assistant",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question,
          contextTitle: "Globaler Lernkontext",
          contextText: `
${GLOBAL_CONTEXT}

---
AKTUELLE SEITE:
${contextText || "kein spezifischer Seitenkontext"}
          `,
        }),
      }
    );

    const data = await res.json();
    setAnswer(data.answer || "Keine Antwort erhalten.");
  } catch (err) {
    setAnswer("Fehler bei der KI-Anfrage.");
  }

  setLoading(false);
}

  return (
    <>
      {/* Avatar */}
      <img
        src={kiAssistent}
        alt="Artemis KI-Assistent"
        className="ki-avatar-only"
        onClick={() => setOpen((prev) => !prev)}
      />

      {/* Chatfenster */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "130px",
            right: "28px",
            width: "300px",
            background: "white",
            borderRadius: "16px",
            padding: "1rem",
            boxShadow: "0 16px 40px rgba(0,0,0,0.25)",
            zIndex: 1000,
          }}
        >
          <strong>Artemis KI-Assistent</strong>

          <textarea
            placeholder="Frage zur aktuellen Seite stellen…"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            style={{
              width: "100%",
              minHeight: "70px",
              marginTop: "0.6rem",
              borderRadius: "10px",
              padding: "0.5rem",
              border: "1px solid #ccc",
            }}
          />

          <button
            onClick={ask}
            disabled={loading}
            style={{
              marginTop: "0.6rem",
              width: "100%",
              padding: "0.6rem",
              borderRadius: "999px",
              border: "none",
              background: "#08306b",
              color: "white",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            {loading ? "KI denkt…" : "Fragen"}
          </button>

          {answer && (
            <div
              style={{
                marginTop: "0.8rem",
                fontSize: "0.9rem",
                maxHeight: "200px",
                overflowY: "auto",
                lineHeight: "1.5",
                paddingRight: "6px",
              }}
            >
              {answer}
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default KIAssistantGlobal;