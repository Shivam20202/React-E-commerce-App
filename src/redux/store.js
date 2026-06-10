 // Configure the global Redux store for ShoppyGlobe
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import searchReducer from "./searchSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    search: searchReducer,
  },
});

// Subscribe to store changes and persist cart to localStorage
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("shoppyglobe_cart", JSON.stringify(state.cart.items));
});
