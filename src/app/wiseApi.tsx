import WiseApi from "wise-api";

export const initializeWiseApi = async () => {
  try {
    const instance = await WiseApi({
      baseUrl: "https://session-manager.homolog.v4h.cloud/api/v1",
      domain: "conf.homolog.v4h.cloud",
      login: "59933074-0190-45e9-bf8f-c523150e2894",
      password: "kTvI-xadJsJt",
      type: "ORG",
    });
    return instance;
  } catch {
    throw new Error("Falha ao inicializar WiseApi. Verifique as configurações.");
  }
};
