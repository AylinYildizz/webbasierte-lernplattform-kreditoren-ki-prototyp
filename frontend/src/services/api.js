export async function getModules() {
  const response = await fetch(
    "https://webbasierte-lernplattform-kreditoren-ki-4rdy.onrender.com/modules"
  );
  return response.json();
}