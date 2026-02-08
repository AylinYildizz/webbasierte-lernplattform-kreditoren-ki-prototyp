export async function getModules() {
  const response = await fetch(
    "https://webbasierte-lernplattform-kreditoren-ki-ucwn.onrender.com/modules"
  );
  return response.json();
}