export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR = "CLEAR";
export const MEM_PLUS = "MEM_PLUS";
export const MEM_RECALL = "MEM_RECALL";
export const MEM_CLEAR = "MEM_CLEAR";

export const addOne = () => {
  return { type: ADD_ONE };
};

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: number };
};

export const changeOperation = (operation) => {
  return { type: CHANGE_OPERATION, payload: operation };
};

export const clear = () => {
  return { type: CLEAR };
};

export const memPlus = () => {
  return { type: MEM_PLUS };
};

export const memRecall = () => {
  return { type: MEM_RECALL };
};

export const memClear = () => {
  return { type: MEM_CLEAR };
};
