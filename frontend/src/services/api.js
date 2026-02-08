const API_BASE =
  process.env.NODE_ENV === "production"
    ? "https://webbasierte-lernplattform-kreditoren-ki-4rdy.onrender.com"
    : "http://localhost:3001";

export async function getModules() {
  const response = await fetch(`${API_BASE}/modules`);
  return response.json();
}

export async function askAssistant(data) {
  const response = await fetch(`${API_BASE}/api/assistant`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function sendEvaluation(data) {
  const response = await fetch(`${API_BASE}/api/evaluation`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
}