import { createSlice } from "@reduxjs/toolkit";
const initialCartState = {
  items: [],
  showCart: true,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
    },
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
  },
});
export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
