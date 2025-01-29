"use client";

import React, { useState } from "react";
import { useWiseApi } from "./WiseApiProvider";

const Room = () => {
  const { wiseApiInstance } = useWiseApi();
  const [error, setError] = useState<string | null>(null);

  const startConference = async () => {
    if (!wiseApiInstance) {
      setError("WiseApi não inicializado.");
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
      setError("Erro ao iniciar a videoconferência. Verifique os dados.");
    }
  };

  return (
    <div>
      <button onClick={startConference} style={{ padding: "10px 20px", background: "#28a745", color: "#fff", border: "none", cursor: "pointer" }}>
        Iniciar Videoconferência
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div id="meet" style={{ marginTop: "20px", width: "100%", height: "500px", backgroundColor: "#000" }} />
    </div>
  );
};

export default Room;
