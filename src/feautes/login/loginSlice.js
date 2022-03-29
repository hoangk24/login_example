import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
 name: "login",
 initialState: { isLogin: false, role: 0 },
 reducers: {
  setIsLogin(state, action) {
   state.isLogin = true;
   state.role = action.payload;
  },
 },
});

export const { setIsLogin } = loginSlice.actions;
export default loginSlice.reducer;
