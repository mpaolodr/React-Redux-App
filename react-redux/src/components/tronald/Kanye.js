import React from "react";
import { connect } from "react-redux";

const Kanye = props => {
  return (
    <div className="quote-container">
      <div className="quote">
        <p>{props.quote}</p>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    quote: state.kanyeReducer.quote,
    isLoading: state.kanyeReducer.isLoading
  };
};

export default connect(mapStateToProps, null)(Kanye);
