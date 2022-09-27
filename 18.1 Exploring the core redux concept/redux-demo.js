// store.subscribe(counterSubscriber);
// store.dispatch({ type: "increment" });
const redux = require("redux");
const counterReducer = (state = { counter: 0 }, action) => {
  console.log(action.type);
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};
const store = redux.createStore(counterReducer);
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};
store.subscribe(counterSubscriber); // We don't execute the counterSubscriber as both the reducer and the subscriber function or component are executed by the reducx.
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
store.dispatch({ type: "decrement" });
store.dispatch({ type: "decrement" });