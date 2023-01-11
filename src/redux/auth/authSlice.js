import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  userId: null,
  login: null,
  email: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    setUserProfile: (state, { payload }) => ({
      ...state,
      userId: payload.userId,
      email: payload.email,
      // login: payload.login,
    }),

    logIn: (state) => {
      return state;
    },
    logOut: (state) => {
      return state;
    },
  },
});

export const auth = authSlice.name;
export const { updateUserProfile } = authSlice.actions;
export const authReducer = authSlice.reducer;
