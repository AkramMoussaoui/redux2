import constants from "../Constants/counterConstants";

const addToCounter = () => {
  return {
    type: constants.ADD,
  };
};

const removeFromCounter = () => {
  return {
    type: constants.MINUS,
  };
};

const changeName = (name) => {
  return {
    type: constants.CHANGE,
    payload: name,
  };
};

const resetName = () => {
  return {
    type: constants.RESET,
  };
};

export default {
  addToCounter,
  removeFromCounter,
  changeName,
  resetName,
};
