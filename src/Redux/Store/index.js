import { createStore } from "redux";
import reducer from "../Reducers/counterReducer";

const store = createStore(reducer);

export default store;
