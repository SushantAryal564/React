import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart_item";
const store = configureStore({
  reducer: {
    cartItem: cartReducer,
  },
});
export default store;
