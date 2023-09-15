// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7Xgjx1d3b9BeHfb7cC7_ZHMbnhKSRxzw",
  authDomain: "portfolio-9a8cb.firebaseapp.com",
  projectId: "portfolio-9a8cb",
  storageBucket: "portfolio-9a8cb.appspot.com",
  messagingSenderId: "761788317562",
  appId: "1:761788317562:web:fe29dac04545bed52fa0c3",
  measurementId: "G-5EX9E9E471",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
