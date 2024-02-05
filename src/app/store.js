// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/productsSlice";
import cartReducer from "../features/cart/cartSlice";
import userReducer from "../features/user/userSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    user: userReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  const cartState = state.cart;
  localStorage.setItem("cart", JSON.stringify(cartState));
});

export default store;
