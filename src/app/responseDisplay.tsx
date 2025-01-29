import React from "react";
import { useSession } from "./session";

const ResponseDisplay = () => {
  const { response, error } = useSession();

  return (
    <div>
      {error && <p style={{ color: "red" }}>{error}</p>}

      {response && (
        <div style={responseStyle}>
          <h3 style={{ color: "#0f0" }}>Detalhes</h3>
          <pre style={preStyle}>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

const responseStyle = {
  marginTop: "20px",
  padding: "10px",
  backgroundColor: "#000",
  color: "#0f0",
  borderRadius: "4px",
  overflowX: "auto",
  border: "1px solid #0f0",
};

const preStyle = {
  background: "transparent",
  color: "#0f0",
  padding: "10px",
  borderRadius: "4px",
  overflowX: "auto",
};

export default ResponseDisplay;
