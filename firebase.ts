import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore"; // Import Firestore explicitly
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyBSgumZ-4pvhHKJQTJmPUkM66EB87T_NHU",
  authDomain: "portfolio-site-1cc5f.firebaseapp.com",
  projectId: "portfolio-site-1cc5f",
  storageBucket: "portfolio-site-1cc5f.appspot.com",
  messagingSenderId: "445435355809",
  appId: "1:445435355809:web:21ba0e0621a4426c8606e0",
  measurementId: "G-6JE5FEPSM8",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db: Firestore = getFirestore(app); // Use Firestore type explicitly
const functions = getFunctions(app);

export { auth, db, functions };
