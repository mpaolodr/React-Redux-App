import React from "react";

// components
import GitContent from "./GitContent";
import GitChangeUser from "./GitChangeUser";

const GitApi = () => {
  return (
    <div className="git-container">
      <GitContent />
      <GitChangeUser />
    </div>
  );
};

export default GitApi;
