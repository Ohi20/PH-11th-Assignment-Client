// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPRBjdjgeQETjiaIFEJOcbRCwQ5amIScg",
  authDomain: "email-password-auth2-618b2.firebaseapp.com",
  projectId: "email-password-auth2-618b2",
  storageBucket: "email-password-auth2-618b2.appspot.com",
  messagingSenderId: "218777975665",
  appId: "1:218777975665:web:8398d8cdf2817bf53a94d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const app;