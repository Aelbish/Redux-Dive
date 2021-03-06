import { createStore } from "redux";

const counterReducer = (currentState = { counter: 0 }, action) => {
  if (action.type === "INCREMENT") {
    return { counter: currentState.counter + 1 };
  }
  if (action.type === "DECREMENT") {
    return { counter: currentState.counter - 1 };
  }
  if (action.type === "INCREASE") {
    return { counter: currentState.counter + action.amount };
  }
  return currentState;
};

const store = createStore(counterReducer);

export default store;
