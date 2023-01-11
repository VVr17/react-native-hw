import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../firebase/config";
import { updateProfile } from "firebase/auth";
import { updateUserProfile } from "./authSlice";

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
      dispatch(
        updateUserProfile({
          userId: uid,
          login: displayName,
          email: mail,
        })
      );
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

      dispatch(updateUserProfile({ userId: user.uid, email: user.email }));
    } catch (error) {
      const errorMessage = error.message;
      console.log("errorMessage", errorMessage);
    }
  };

export const authSignOutUser = () => (dispatch) => {};

export const authStateChangeUser = async () => (dispatch) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("signed in");
      // setUser(user);
    } else {
      console.log("signed out");
    }
  });
};
