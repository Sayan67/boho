import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../types/products";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    quantity: 0,
    total: 0,
    products: [] as Product[],
  },
  reducers: {
    addProduct: (state, action: { payload: Product }) => {
      state.quantity += 1;
      state.total += action.payload.price;
      state.products.push(action.payload);
    },
    removeProduct: (state, action: { payload: Product }) => {
      state.quantity -= 1;
      state.total -= action.payload.price;
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
    },
  },
});
export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer
