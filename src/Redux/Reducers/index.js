import counterReducer from "./counterReducer";
import nameReducer from "./nameReducer";
import { combineReducers } from "redux";

const reducer = combineReducers({
  state1: nameReducer,
  state2: counterReducer,
});

export default reducer;
