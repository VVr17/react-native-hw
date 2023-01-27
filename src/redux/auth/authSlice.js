import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  userId: null,
  login: null,
  email: null,
  avatarUrl: null,
  isSignedIn: false,
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
      avatarUrl: payload.avatarUrl,
    }),
    authIsSignedIn: (state, { payload }) => ({
      ...state,
      isSignedIn: payload.isSignedIn,
    }),
    authSignOut: (state) => ({
      ...initialAuthState,
    }),
  },
});

export const auth = authSlice.name;
export const { updateUserProfile, authIsSignedIn, authSignOut } =
  authSlice.actions;
export const authReducer = authSlice.reducer;
