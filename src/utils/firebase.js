// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBf-R1u2VYJ7IYyqPPGcEKh8Cr95b0CBhg",
  authDomain: "netflix-gpt-581e9.firebaseapp.com",
  projectId: "netflix-gpt-581e9",
  storageBucket: "netflix-gpt-581e9.firebasestorage.app",
  messagingSenderId: "952996237884",
  appId: "1:952996237884:web:0196416beb8f15c8a7e939",
  measurementId: "G-J4FWHL5M5V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();