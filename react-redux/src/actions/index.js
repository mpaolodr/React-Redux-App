import axios from "axios";

// action types
export const GET_GIT_DATA = "GET_GIT_DATA";
export const FETCHING = "FETCHING";
export const LOADING = "LOADING";

export const GET_TRUMP = "GET_TRUMP";
export const GET_KANYE = "GET_KANYE";

// action creators
export const getGitData = newUser => dispatch => {
  dispatch({ type: FETCHING });

  setTimeout(() => {
    axios
      .get(`https://api.github.com/users/${newUser}`)
      .then(res => dispatch({ type: GET_GIT_DATA, payload: res.data }))
      .catch(err => console.log(err));
  }, 1000);
};

// for both kanye and trump
export const getQuote = () => dispatch => {
  dispatch({ type: LOADING });

  setTimeout(() => {
    axios
      .all([
        axios.get("https://api.tronalddump.io/random/quote"),
        axios.get("https://api.kanye.rest/")
      ])
      .then(responseArr => {
        dispatch({ type: GET_TRUMP, payload: responseArr[0].data.value });
        dispatch({ type: GET_KANYE, payload: responseArr[1].data.quote });
      })
      .catch(errArr => console.log(errArr));
  }, 1000);
};
