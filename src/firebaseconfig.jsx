// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXAlJ4mViQUeagYfLevu4hoXoUdlQpxgA",
  authDomain: "drone-low.firebaseapp.com",
  projectId: "drone-low",
  storageBucket: "drone-low.appspot.com",
  messagingSenderId: "404235660980",
  appId: "1:404235660980:web:687afb7b605070de0331e1",
  measurementId: "G-EZ3YK25MW4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)