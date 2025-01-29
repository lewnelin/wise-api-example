"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { initializeWiseApi } from "./wiseApi";

interface WiseApiContextType {
  wiseApiInstance: any | null;
}

const WiseApiContext = createContext<WiseApiContextType | undefined>(undefined);

export const useWiseApi = () => {
  const context = useContext(WiseApiContext);
  if (!context) {
    throw new Error("useWiseApi deve ser usado dentro de um WiseApiProvider");
  }
  return context;
};

interface WiseApiProviderProps {
  children: ReactNode;
}

export const WiseApiProvider = ({ children }: WiseApiProviderProps) => {
  const [wiseApiInstance, setWiseApiInstance] = useState<any | null>(null);

  useEffect(() => {
    const fetchInstance = async () => {
      try {
        const instance = await initializeWiseApi();
        setWiseApiInstance(instance);
      } catch (error) {
        console.error(error);
      }
    };
    fetchInstance();
  }, []);

  return <WiseApiContext.Provider value={{ wiseApiInstance }}>{children}</WiseApiContext.Provider>;
};
