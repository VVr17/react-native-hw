import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../firebase/config";
import { setUserProfile } from "./authSlice";

export const authSingUpUser =
  ({ login, email, password }) =>
  async (dispatch) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      //   user.displayName, //   user.accessToken, //   user.photoURL
      dispatch(setUserProfile({ userId: user.uid, email: user.email }));
    } catch (error) {
      const errorMessage = error.message;
      console.log("errorMessage", errorMessage);
    }
  };

export const authSignInUser =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      dispatch(setUserProfile({ userId: user.uid }));
    } catch (error) {
      const errorMessage = error.message;
      console.log("errorMessage", errorMessage);
    }
  };
