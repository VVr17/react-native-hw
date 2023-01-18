// Import the functions you need from the SDKs you need
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth/react-native";
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

//web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpYJBm9atzSDDytxfspRLOj8afnhcY7fY",
  authDomain: "rn-social-a8e62.firebaseapp.com",
  projectId: "rn-social-a8e62",
  storageBucket: "rn-social-a8e62.appspot.com",
  messagingSenderId: "1041851553275",
  appId: "1:1041851553275:web:c349555b9f6af1855b675e",
  measurementId: "G-3Z2MF4TJG6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// Initialize Cloud Firestore
export const db = getFirestore(app);

// Initialize Cloud Storage
export const storage = getStorage(app);
