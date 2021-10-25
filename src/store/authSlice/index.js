import { createSlice } from "@reduxjs/toolkit";

const authInitialState = {
  isLogged: !!localStorage.getItem("token_id"),
  user: {
    isAdmin: false,
    _id: null,
    firstName: null,
    lastName: null,
    image: null,
    email: null,
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    fillUserData: (state, action) => {
      state.user = action.payload;
      state.isLogged = true;
    },
    resetUserData: (state) => {
      state.user = {};
      state.isLogged = false;
      localStorage.removeItem("token_id")
    }
  },
});



export default authSlice.reducer;

export const { fillUserData, resetUserData } = authSlice.actions;
