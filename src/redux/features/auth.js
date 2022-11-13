import { createSlice } from "@reduxjs/toolkit";
const initialState = { value: { isLoggedIn: false, userId: null } };

export const loggedInSlice = createSlice({
  name: "loggedIn",
  initialState,
  reducers: {
    checkLogin: (state, action) => {
      state.value=action.payload
    },
  },
});

export const {checkLogin}=loggedInSlice.actions;
export default loggedInSlice.reducer;