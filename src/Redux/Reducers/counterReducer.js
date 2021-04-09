import { PLUS, MOIN } from "../Constants/CounterConstants";
const initialState = { count: 0 };

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLUS:
      return { count: state.counter + action.payload };

    case MOIN:
      return { count: state.counter - action.payload };

    default:
      return state;
  }
};
