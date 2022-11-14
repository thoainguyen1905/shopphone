import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "@redux/store";

const productSlice = createSlice({
  name: "product",
  initialState: {
    list: ["test"],
  },
  reducers: {},
});

export const productState = (state: AppState) => {
  return state.productReducer.list;
};

export default productSlice;
