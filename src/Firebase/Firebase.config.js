// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfIPFW62xTWz5SSrp1Mv5P1b-oLVZkebM",
  authDomain: "assignment-9-a9345.firebaseapp.com",
  projectId: "assignment-9-a9345",
  storageBucket: "assignment-9-a9345.firebasestorage.app",
  messagingSenderId: "343026358542",
  appId: "1:343026358542:web:6dfebb56ea6ef6ffcc5f5f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
