import axios from "axios";

// action types
export const GET_GIT_DATA = "GET_GIT_DATA";
export const LOADING = "LOADING";

// action creators
export const getGitData = newUser => dispatch => {
  dispatch({ type: LOADING });

  setTimeout(() => {
    axios
      .get(`https://api.github.com/users/${newUser}`)
      .then(res => dispatch({ type: GET_GIT_DATA, payload: res.data }))
      .catch(err => console.log(err));
  }, 1000);
};
