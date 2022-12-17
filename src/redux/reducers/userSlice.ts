import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: {
    userName: "",
  }
}

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    login: (state, action: PayloadAction<any>) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = initialState.value;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;