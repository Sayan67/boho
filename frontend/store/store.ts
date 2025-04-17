import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartStore";
export default configureStore({
  reducer: {
    cartSlice,
  },
});
