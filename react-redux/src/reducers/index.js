import { combineReducers } from "redux";

// reducers
import { gitReducer } from "./gitReducer";
import { trumpReducer } from "./trumpReducer";
import { kanyeReducer } from "./kanyeReducer";

export default combineReducers({
  gitReducer,
  trumpReducer,
  kanyeReducer
});
