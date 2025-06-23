import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyAricQ58Q_SFrh97hbRWKglERgzET8Zv0Y",
  authDomain: "galacticworldd.firebaseapp.com",
  projectId: "galacticworldd",
  storageBucket: "galacticworldd.firebasestorage.app",
  messagingSenderId: "576099116344",
  appId: "1:576099116344:web:69f4b3f062c8dddf3d0dcd",
  measurementId: "G-901LFEQ76G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);

export const getProductos = async () => {
  const snap = await getDocs(collection(db, "productos"));
  return snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export { app, analytics };
