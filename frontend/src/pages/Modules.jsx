import { useEffect, useState } from "react";
import { getModules } from "../services/api";

function Modules() {
  const [modules, setModules] = useState([]);

  useEffect(() => {
    getModules().then(setModules);
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Module</h1>
      <ul>
        {modules.map((module) => (
          <li key={module.id}>{module.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Modules;
