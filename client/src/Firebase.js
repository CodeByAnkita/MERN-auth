// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-6d363.firebaseapp.com",
  projectId: "mern-auth-6d363",
  storageBucket: "mern-auth-6d363.appspot.com",
  messagingSenderId: "397861064323",
  appId: "1:397861064323:web:695d25860f8d492b1a55b6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
