import React from "react";
import { connect } from "react-redux";

import Loader from "../Loader";

const Tronald = props => {
  return (
    <div className="quote-container">
      {props.isLoading ? (
        <Loader />
      ) : (
        <div className="quote">
          <p>{props.quote}</p>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    quote: state.trumpReducer.quote,
    isLoading: state.trumpReducer.isLoading
  };
};

export default connect(mapStateToProps, null)(Tronald);
