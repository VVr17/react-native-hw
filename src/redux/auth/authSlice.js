import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  userId: null,
  login: null,
  email: null,
  stateChange: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    updateUserProfile: (state, { payload }) => ({
      ...state,
      userId: payload.userId,
      email: payload.email,
      login: payload.login,
    }),
    authStateChange: (state, { payload }) => ({
      ...state,
      stateChange: payload.stateChange,
    }),
  },
});

export const auth = authSlice.name;
export const { updateUserProfile } = authSlice.actions;
export const authReducer = authSlice.reducer;
