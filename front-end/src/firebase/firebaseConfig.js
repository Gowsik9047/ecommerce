// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCd4GZOVxRNXsbopzQURE_wwrzhxeM2FJQ",
  authDomain: "agk-e-commerce.firebaseapp.com",
  projectId: "agk-e-commerce",
  storageBucket: "agk-e-commerce.firebasestorage.app",
  messagingSenderId: "944903943333",
  appId: "1:944903943333:web:665a6835623a9a2bf3c94c",
  measurementId: "G-BCJKDX2CJY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
