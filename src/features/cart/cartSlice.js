// src/features/cart/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const persistedCartState = JSON.parse(localStorage.getItem("cart"));
const initialState = persistedCartState || {
  items: {},
  totalQuantity: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { product, quantity } = action.payload;
      if (state.items[product.id]) {
        state.items[product.id].quantity += quantity;
      } else {
        state.items[product.id] = { ...product, quantity };
      }
      state.totalQuantity += quantity;
    },
    removeFromCart(state, action) {
      const productId = action.payload;
      if (state.items[productId]) {
        state.totalQuantity -= state.items[productId].quantity;
        delete state.items[productId];
      }
    },
    updateQuantity(state, action) {
      const { productId, quantity } = action.payload;
      if (state.items[productId] && quantity >= 1) {
        state.totalQuantity += quantity - state.items[productId].quantity;
        state.items[productId].quantity = quantity;
      }
    },
    clearCart(state) {
      state.items = {};
      state.totalQuantity = 0;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
