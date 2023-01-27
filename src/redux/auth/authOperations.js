import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase/config";
import { authIsSignedIn, authSignOut, updateUserProfile } from "./authSlice";
import { updateProfile } from "firebase/auth";
import gravatar from "gravatar"; // making avatar

export const authSingUpUser =
  ({ login, email, password }) =>
  async (dispatch) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const avatar = gravatar.url(email, { s: "250", r: "x", d: "retro" });

      await updateProfile(auth.currentUser, {
        displayName: login,
        photoURL: `https:${avatar}`,
      });

      const { uid, displayName, email: mail, photoURL } = auth.currentUser;
      const currentUser = {
        userId: uid,
        login: displayName,
        email: mail,
        avatarUrl: photoURL,
      };
      dispatch(updateUserProfile(currentUser));
    } catch (error) {
      console.log(error.message);
    }
  };

export const authSignInUser =
  ({ email, password }) =>
  async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error.message);
    }
  };

export const authSignOutUser = () => async (dispatch) => {
  await signOut(auth);
  dispatch(authSignOut());
};

export const authStateChangeUser = () => (dispatch) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const { uid, displayName, email, photoURL } = user;
      const currentUser = {
        userId: uid,
        login: displayName,
        email,
        avatarUrl: photoURL,
      };

      dispatch(authIsSignedIn({ isSignedIn: true }));
      dispatch(updateUserProfile(currentUser));
    }
  });
};
