import { GET_KANYE, LOADING } from "../actions";

const initialState = {
  isLoading: false,
  quote: "We came into a broken world. And we're the cleanup crew.",
  error: ""
};

export const kanyeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_KANYE:
      return {
        ...state,
        quote: action.payload,
        isLoading: false
      };

    case LOADING:
      return {
        ...state,
        isLoading: true
      };

    default:
      return state;
  }
};
