export async function getModules() {
  const response = await fetch("http://localhost:3001/modules");
  return response.json();
}
