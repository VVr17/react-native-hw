import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase/config";
import { authIsSignedIn, authSignOut, updateUserProfile } from "./authSlice";
import { updateProfile } from "firebase/auth";

export const authSingUpUser =
  ({ login, email, password }) =>
  async (dispatch) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(auth.currentUser, {
        displayName: login,
        // photoURL: "https://example.com/jane-q-user/profile.jpg",
      });

      const { uid, displayName, email: mail } = auth.currentUser;
      const currentUser = {
        userId: uid,
        login: displayName,
        email: mail,
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
      const { uid, displayName, email } = user;
      const currentUser = { userId: uid, login: displayName, email };

      dispatch(authIsSignedIn({ isSignedIn: true }));
      dispatch(updateUserProfile(currentUser));
    }
  });
};
