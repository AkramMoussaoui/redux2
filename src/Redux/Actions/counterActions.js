import { PLUS, MOIN } from "../Constants/CounterConstants";

export const addToCounter = () => {
  return {
    type: PLUS,
    payload: 5,
  };
};

export const removeFromCounter = () => {
  return {
    type: MOIN,
    payload: 2,
  };
};
