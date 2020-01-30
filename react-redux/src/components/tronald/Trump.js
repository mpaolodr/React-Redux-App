import React from "react";
import { connect } from "react-redux";

// actions
import { getQuote } from "../../actions";

// components
import Tronald from "./Tronald";
import Kanye from "./Kanye";

const Trump = props => {
  return (
    <div className="trump-container">
      <div className="trump-content-container">
        <Tronald />
        <Kanye />
      </div>
      <button onClick={props.getQuote}>GENERATE</button>
    </div>
  );
};

export default connect(null, { getQuote })(Trump);
