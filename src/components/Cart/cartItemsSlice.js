import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: []
};
export const cartItemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItemToCart(state, { payload }) {
      console.log(payload);
      state.items.push({ ...payload });
      console.log(state.items);
    },
    removeItemFromCart() {}
  }
});
