import React from "react";

// components
import Tronald from "./Tronald";
import Kanye from "./Kanye";

const Trump = () => {
  return (
    <div className="trump-container">
      <div className="trump-content-container">
        <Tronald />
        <Kanye />
      </div>
    </div>
  );
};

export default Trump;
