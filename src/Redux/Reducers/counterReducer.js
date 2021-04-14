import constants from "../Constants/counterConstants";

const initialState = { counter: 0, name: "" };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.ADD:
      return { counter: state.counter + 1, name: state.name };
    case constants.MINUS:
      return { counter: state.counter - 1, name: state.name };
    case constants.CHANGE:
      return { counter: state.counter, name: action.payload };
    case constants.RESET:
      return { counter: state.counter, name: "" };
    default:
      return state;
  }
};

export default reducer;
