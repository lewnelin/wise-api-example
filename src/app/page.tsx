"use client";

import React, { useState, useEffect } from "react";
import WiseApi from "wise-api";

const Page = () => {
  const [wiseApiInstance, setWiseApiInstance] = useState<any>(); // Armazena a instância da WiseApi
  const [session, setSession] = useState<any>(); // Armazena a sessão
  const [response, setResponse] = useState<any>();
  const [error, setError] = useState<string>();

  // Inicializar WiseApi
  const initializeWiseApi = async () => {
    try {
      const instance = await WiseApi({
        baseUrl: "https://session-manager.homolog.v4h.cloud/api/v1",
        domain: "conf.homolog.v4h.cloud",
        login: "59933074-0190-45e9-bf8f-c523150e2894",
        password: "kTvI-xadJsJt",
        type: "ORG",
      });
      setWiseApiInstance(instance);
    } catch (err: any) {
      setError("Falha ao inicializar WiseApi. Verifique as configurações.");
    }
  };

  // Criar uma sessão
  const handleCreateSession = async () => {
    if (!wiseApiInstance) {
      setError("WiseApi não inicializado.");
      return;
    }

    try {
      const sessionResponse = await wiseApiInstance.session.create({
        org: "CUBO",
        orgUnit: "CUBO",
      });

      setSession(sessionResponse); // Armazena o objeto completo da sessão
      setResponse({
        message: "Sessão criada com sucesso.",
        session: sessionResponse,
      });
      setError("");
    } catch (err: any) {
      setError("Erro ao criar a sessão. Verifique os dados.");
    }
  };

  // Iniciar videoconferência
  const handleStartConference = async () => {
    if (!wiseApiInstance || !session) {
      setError("Sessão não encontrada. Crie uma sessão antes de iniciar a videoconferência.");
      return;
    }

    try {
      const conferenceResponse = await wiseApiInstance.session.startConference(session.short, {
        parentNode: document.getElementById("meet"),
        userInfo: { displayName: "Arthur da Cubo" },
        width: 800,
        height: 600,
        shareLink: "pegar link da conferência",
        buttons: [
          "camera",
          "chat",
          "desktop",
          "fullscreen",
          "hangup",
          "help",
          "highlight",
          "invite",
          "microphone",
          "participants-pane",
          "profile",
          "raisehand",
          "recording",
          "security",
          "select-background",
          "settings",
          "shareaudio",
          "sharedvideo",
          "shortcuts",
          "stats",
          "tileview",
          "toggle-camera",
          "videoquality",
          "libras",
        ],
      });

      setResponse({
        ...conferenceResponse,
        message: "Videoconferência iniciada com sucesso.",
      });
      setError(null);
    } catch (err: any) {
      setError("Erro ao iniciar a videoconferência. Verifique os dados.");
    }
  };

  // Limpar a resposta
  const handleClearResponse = () => {
    setResponse(null);
    setError(null);
  };

  useEffect(() => {
    initializeWiseApi();
  }, []);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Wise API - Videoconferência</h1>

      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={handleCreateSession}
          style={{
            padding: "10px 20px",
            background: "#0070f3",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            marginRight: "10px",
          }}
        >
          Criar Sessão
        </button>

        <button
          onClick={handleStartConference}
          style={{
            padding: "10px 20px",
            background: "#28a745",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            marginRight: "10px",
          }}
        >
          Iniciar Videoconferência
        </button>

        <button
          onClick={handleClearResponse}
          style={{
            padding: "10px 20px",
            background: "#dc3545",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Limpar Resposta
        </button>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {response && (
        <div
          style={{
            marginTop: "20px",
            padding: "10px",
            backgroundColor: "#000",
            color: "#0f0",
            borderRadius: "4px",
            overflowX: "auto",
            border: "1px solid #0f0",
          }}
        >
          <h3 style={{ color: "#0f0" }}>Detalhes</h3>
          <pre
            style={{
              background: "transparent",
              color: "#0f0",
              padding: "10px",
              borderRadius: "4px",
              overflowX: "auto",
            }}
          >
            {JSON.stringify(response, null, 2)}
          </pre>
        </div>
      )}

      <div
        id="meet"
        style={{
          marginTop: "20px",
          width: "100%",
          height: "500px",
          backgroundColor: "#000",
        }}
      />
    </div>
  );
};

export default Page;
