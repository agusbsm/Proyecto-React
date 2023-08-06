// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADuRF7oryZBQ7XAfzC6vUpl2VgN7c5xT0",
  authDomain: "coderreact-59377.firebaseapp.com",
  projectId: "coderreact-59377",
  storageBucket: "coderreact-59377.appspot.com",
  messagingSenderId: "564126193900",
  appId: "1:564126193900:web:1cdcac1fc849a179536dc9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
