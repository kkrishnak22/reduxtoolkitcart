import { configureStore } from "@reduxjs/toolkit";
import { cartItemsSlice } from "../Cart/cartItemsSlice";

export const store = configureStore({
  reducer: {
    item: cartItemsSlice.reducer
  }
});

console.log(store.getState());
