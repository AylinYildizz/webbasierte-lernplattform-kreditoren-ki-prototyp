import { createContext, useContext, useState } from "react";

const KIContext = createContext();

export function KIProvider({ children }) {
  const [contextTitle, setContextTitle] = useState("");
  const [contextText, setContextText] = useState("");

  return (
    <KIContext.Provider
      value={{
        contextTitle,
        contextText,
        setContextTitle,
        setContextText,
      }}
    >
      {children}
    </KIContext.Provider>
  );
}

export function useKIContext() {
  return useContext(KIContext);
}