import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAxr6nqGgGeI3Ill70ilW7egRjM43eoZ7Q",
  authDomain: "ec-auth-10d93.firebaseapp.com",
  projectId: "ec-auth-10d93",
  storageBucket: "ec-auth-10d93.appspot.com",
  messagingSenderId: "90661845433",
  appId: "1:90661845433:web:05d5901a0f92fca5f05e68"
};

initializeApp(firebaseConfig);
const db = getFirestore();
export const auth = getAuth();
