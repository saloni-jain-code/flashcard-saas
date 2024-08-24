// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "flashcardsaas-7846e.firebaseapp.com",
  projectId: "flashcardsaas-7846e",
  storageBucket: "flashcardsaas-7846e.appspot.com",
  messagingSenderId: "522370272998",
  appId: "1:522370272998:web:acc58564408d84a3843527",
  measurementId: "G-RXQ6K188CB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;