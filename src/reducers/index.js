import {
  ADD_ONE,
  APPLY_NUMBER,
  CHANGE_OPERATION,
  CLEAR,
  MEM_PLUS,
  MEM_RECALL,
  MEM_CLEAR,
} from "../actions/index";

export const initialState = {
  total: 0,
  operation: "*",
  memory: 0,
};

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case "+":
      return num1 + num2;
    case "*":
      return num1 * num2;
    case "-":
      return num1 - num2;
  }
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_ONE:
      return {
        ...state,
        total: state.total + 1,
      };

    case APPLY_NUMBER:
      return {
        ...state,
        total: calculateResult(state.total, action.payload, state.operation),
      };

    case CHANGE_OPERATION:
      return {
        ...state,
        operation: action.payload,
      };
    case CLEAR:
      return {
        ...state,
        total: 0,
      };
    case MEM_PLUS:
      return {
        ...state,
        memory: state.total,
      };
    case MEM_RECALL:
      return {
        ...state,
        total: state.memory,
      };

    case MEM_CLEAR:
      return {
        ...state,
        memory: 0,
      };

    default:
      return state;
  }
};
