import React from "react";
import { connect } from "react-redux";

import Loader from "../Loader";

const GitContent = props => {
  return (
    <div className="git-content">
      {props.isFetching ? (
        <Loader />
      ) : (
        <div>
          <figure className="user-img-container">
            <img src={props.user.avatar_url} alt={props.user.name} />
          </figure>
          <div className="user-info">
            <h2>Name: {props.user.name}</h2>
            <h2>Username: {props.user.login}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.gitReducer.user,
    isFetching: state.gitReducer.isFetching
  };
};

export default connect(mapStateToProps, null)(GitContent);
