import { GET_TRUMP, LOADING } from "../actions";

const initialState = {
  isLoading: false,
  quote:
    "Bernie Sanders was right when he said that Crooked Hillary Clinton was not qualified to be president because she suffers from BAD judgement!",
  error: ""
};

export const trumpReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRUMP:
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
