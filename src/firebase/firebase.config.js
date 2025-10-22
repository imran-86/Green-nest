// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWOZbduhRLcDZg70qtFdRGiiYMtQ91fu0",
  authDomain: "my-green-nest.firebaseapp.com",
  projectId: "my-green-nest",
  storageBucket: "my-green-nest.firebasestorage.app",
  messagingSenderId: "374141861081",
  appId: "1:374141861081:web:40c69f6ba4723b7251d2c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;