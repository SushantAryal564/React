import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});
export default store;
/////////////////REDUX Method///////////////////
// const storeReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   } else if (action.type === "decrement") {
//     console.log(state.counter);
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   } else if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }
//   return state;
// };
// const store = createStore(storeReducer);
// export default store;
