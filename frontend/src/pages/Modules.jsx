import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getModules } from "../services/api";

function Modules() {
  const [modules, setModules] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getModules().then(setModules);
  }, []);

  return (
    <div className="container">
      <h1
        className="modules-title"
        style={{ textAlign: "center", marginBottom: "1.5rem" }}
      >
        Lernmodule
      </h1>

      <div className="module-grid">
        {modules.map((module, index) => (
          <div
            key={module.id}
            className={`module-card ${
              index === modules.length - 1 ? "full-width" : ""
            }`}
          >
            <h2>{module.title}</h2>

            <p>
              Einführung und praxisnahe Erläuterung der relevanten Aufgaben
              innerhalb dieses Prozessschritts.
            </p>

            <button
              className="primary-button"
              onClick={() => navigate(`/module/${module.id}`)}
            >
              Modul starten
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Modules;