import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE,
  messagingSenderId: process.env.SENDER_ID,
  appId: process.env.APP_ID
};

//init app
initializeApp(firebaseConfig);

//init services
const db = getFirestore();

//init auth
export const auth = getAuth();

//collection ref
const collectionRef = collection(db, "data")

//fetch data
getDocs(collectionRef)
  .then((snapshot) => {
    console.log(snapshot.docs)
  })
