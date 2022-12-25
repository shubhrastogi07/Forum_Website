import React from "react";
import Feed from "./Feed";
import QuoraHeader from "./QuoraHeader";

import "./css/Quora.css";

function Quora() {
  return (
    <div className="quora">
      <QuoraHeader />
      <div className="quora__contents">
        <div className="quora__content">
          <Feed />
        </div>
      </div>
    </div>
  );
}

export default Quora;
