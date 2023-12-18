// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase-admin/firestore";
import { initializeApp } from "firebase/app";
import { get } from "http";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSgumZ-4pvhHKJQTJmPUkM66EB87T_NHU",
  authDomain: "portfolio-site-1cc5f.firebaseapp.com",
  projectId: "portfolio-site-1cc5f",
  storageBucket: "portfolio-site-1cc5f.appspot.com",
  messagingSenderId: "445435355809",
  appId: "1:445435355809:web:21ba0e0621a4426c8606e0",
  measurementId: "G-6JE5FEPSM8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app };
