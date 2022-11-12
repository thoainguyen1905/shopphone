import React from "react";
import { PacmanLoader } from "react-spinners";

function Loading() {
  return (
    <div style={{ position: "fixed", top: "49%", left: "49%" }}>
      <PacmanLoader color="#36d7b7" />
    </div>
  );
}

export default Loading;
