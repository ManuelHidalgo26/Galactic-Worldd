// src/lib/productos.js
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export const getProductos = async () => {
try {
    const productosRef = collection(db, "productos");
    const snapshot = await getDocs(productosRef);
    return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
    }));
} catch (error) {
    console.error("Error al obtener productos:", error);
    return [];
}
};
