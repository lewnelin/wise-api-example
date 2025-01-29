import React, { useState } from "react";
import { useSession } from "./session";
import { useWiseApi } from "./WiseApiProvider";

const SessionControls = () => {
  const { createSession, clearResponse } = useSession();
  const { wiseApiInstance } = useWiseApi();
  const [mode, setMode] = useState<"session" | "room">("session");

  const startConference = async () => {
    if (!wiseApiInstance) {
      alert("WiseApi não inicializado.");
      return;
    }

    try {
      await wiseApiInstance.session.startConference("session-short-id", {
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
    } catch {
      alert("Erro ao iniciar a videoconferência.");
    }
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      {/* Alternar entre Modo Sessão e Sala */}
      <div style={{ marginBottom: "10px" }}>
        <button onClick={() => setMode("session")} style={toggleButtonStyle(mode === "session")}>
          Modo Sessão
        </button>
        <button onClick={() => setMode("room")} style={toggleButtonStyle(mode === "room")}>
          Modo Sala
        </button>
      </div>

      {/* Botões específicos do modo selecionado */}
      {mode === "session" ? (
        <>
          <button onClick={createSession} style={buttonStyle("#0070f3")}>Criar Sessão</button>
          <button onClick={clearResponse} style={buttonStyle("#dc3545")}>Limpar Resposta</button>
        </>
      ) : (
        <button onClick={startConference} style={buttonStyle("#28a745")}>Entrar na Sala</button>
      )}
    </div>
  );
};

// Estilos para os botões
const buttonStyle = (background: string) => ({
  padding: "10px 20px",
  background,
  color: "#fff",
  border: "none",
  cursor: "pointer",
  marginRight: "10px",
});

const toggleButtonStyle = (isActive: boolean) => ({
  padding: "8px 16px",
  marginRight: "10px",
  border: "1px solid #0070f3",
  cursor: "pointer",
  background: isActive ? "#0070f3" : "#fff",
  color: isActive ? "#fff" : "#0070f3",
  borderRadius: "4px",
});

export default SessionControls;
