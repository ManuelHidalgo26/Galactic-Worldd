import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAWZQqqFG3CDm3Qi27S8nVM6lBlpZxc8LY",
  authDomain: "galactic-worldd.firebaseapp.com",
  projectId: "galactic-worldd",
  storageBucket: "galactic-worldd.firebasestorage.app",
  messagingSenderId: "235508839573",
  appId: "1:235508839573:web:7c47eae58bb25e9858979c",
  measurementId: "G-8C0ZBY3GH2",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);

export const getProductos = async () => {
  const snap = await getDocs(collection(db, "productos"));
  return snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export { app, analytics };
