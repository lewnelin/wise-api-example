"use client";

import React from "react";
import { WiseApiProvider } from "./WiseApiProvider";
import { Session } from "./session";
import SessionControls from "./sessionControls";
import ResponseDisplay from "./responseDisplay";


const Page = () => {
  return (
    <WiseApiProvider>
      <Session>
        <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
          <h1>Wise API - Videoconferência</h1>
          <SessionControls />
          <div id="meet" style={{ marginTop: "20px", width: "100%", height: "500px", backgroundColor: "#000" }} />
          <ResponseDisplay />
        </div>
      </Session>
    </WiseApiProvider>
  );
};

export default Page;
