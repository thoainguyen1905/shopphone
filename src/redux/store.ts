import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slice/product";

export const store = configureStore({
  reducer: {
    productReducer: productSlice.reducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
