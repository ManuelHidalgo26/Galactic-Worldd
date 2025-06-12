// src/lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; 
import { getAuth } from "firebase/auth";           
import { getStorage } from "firebase/storage";      

// ✅ Corregí el dominio del storageBucket 
const firebaseConfig = {
  apiKey: "AIzaSyAWZQqqFG3CDm3Qi27S8nVM6lBlpZxc8LY",
  authDomain: "galactic-worldd.firebaseapp.com",
  projectId: "galactic-worldd",
  storageBucket: "galactic-worldd.appspot.com", 
  messagingSenderId: "235508839573",
  appId: "1:235508839573:web:7c47eae58bb25e9858979c",
  measurementId: "G-8C0ZBY3GH2"
};

// 🔥 Inicializar app
const app = initializeApp(firebaseConfig);


getAnalytics(app); 

// 🔥 Exportar servicios que vas a usar
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
