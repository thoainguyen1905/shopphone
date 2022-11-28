import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slice/product";
import registerSlice from "./slice/registerSlice";

export const store = configureStore({
  reducer: {
    productReducer: productSlice.reducer,
    registerReducer: registerSlice.reducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
