import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
  name: "news",
  initialState: { statusModal: false },
  reducers: {
    setModalRegister: (state, action) => {
      state.statusModal = action.payload;
    },
  },
});

export const { setModalRegister } = newsSlice.actions;

export default newsSlice;
