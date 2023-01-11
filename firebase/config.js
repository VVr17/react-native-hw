// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

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

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// export const db = getFirestore();
