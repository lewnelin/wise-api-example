"use client";

import React, { useState, createContext, useContext, ReactNode } from "react";
import { useWiseApi } from "./WiseApiProvider";
import { SessionData, ResponseData, SessionContextType } from "./sessionTypes";

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export const useSession = (): SessionContextType => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("useSession deve ser usado dentro de um Session");
  }
  return context;
};

interface SessionProps {
  children: ReactNode;
}

export const Session = ({ children }: SessionProps) => {
  const { wiseApiInstance } = useWiseApi();
  const [session, setSession] = useState<SessionData | null>(null);
  const [response, setResponse] = useState<ResponseData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const createSession = async () => {
    if (!wiseApiInstance) {
      setError("WiseApi não inicializado.");
      return;
    }

    try {
      const sessionResponse: SessionData = await wiseApiInstance.session.create({
        org: "CUBO",
        orgUnit: "CUBO",
      });

      setSession(sessionResponse);
      setResponse({ message: "Sessão criada com sucesso.", data: sessionResponse });
      setError(null);
    } catch {
      setError("Erro ao criar a sessão. Verifique os dados.");
    }
  };

  const clearResponse = () => {
    setResponse(null);
    setError(null);
  };

  return (
    <SessionContext.Provider value={{ session, response, error, createSession, clearResponse }}>
      {children}
    </SessionContext.Provider>
  );
};
