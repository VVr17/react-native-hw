import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { auth, authReducer } from "./auth/authSlice";

const rootReducer = combineReducers({
  [auth]: authReducer,
  // posts: postsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
