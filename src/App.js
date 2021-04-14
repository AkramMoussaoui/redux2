import "./App.css";
import { useReducer, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "./Redux/Actions/counterActions";
// const ADD = "add";
// const MINUS = "minus";
// const CHANGE = "changeName";
// const RESET = "resetName";

// const initialState = { counter: 0, name: "" };
// const reducer = (state, action) => {
//   switch (action.type) {
//     case ADD:
//       return { counter: state.counter + 1, name: state.name };
//     case MINUS:
//       return { counter: state.counter - 1, name: state.name };
//     case CHANGE:
//       return { counter: state.counter, name: action.payload };
//     case RESET:
//       return { counter: state.counter, name: "" };
//     default:
//       return state;
//   }
// };

// const addToCounter = () => {
//   return {
//     type: ADD,
//   };
// };

// const removeFromCounter = () => {
//   return {
//     type: MINUS,
//   };
// };

// const changeName = (name) => {
//   return {
//     type: CHANGE,
//     payload: name,
//   };
// };

// const resetName = () => {
//   return {
//     type: RESET,
//   };
// };

function App() {
  //const [state, dispatch] = useReducer(reducer, initialState);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [input, setInput] = useState("");
  return (
    <div className="App">
      <p> Counter : {state.counter}</p>
      <button onClick={() => dispatch(actions.addToCounter())}>+</button>
      <button onClick={() => dispatch(actions.removeFromCounter())}>-</button>
      <p> Name : {state.name}</p>
      <input onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => dispatch(actions.changeName(input))}>
        Change
      </button>
      <button onClick={() => dispatch(actions.resetName())}>Reset</button>
    </div>
  );
}

export default App;
