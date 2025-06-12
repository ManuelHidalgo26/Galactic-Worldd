// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWZQqqFG3CDm3Qi27S8nVM6lBlpZxc8LY",
  authDomain: "galactic-worldd.firebaseapp.com",
  projectId: "galactic-worldd",
  storageBucket: "galactic-worldd.firebasestorage.app",
  messagingSenderId: "235508839573",
  appId: "1:235508839573:web:7c47eae58bb25e9858979c",
  measurementId: "G-8C0ZBY3GH2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
