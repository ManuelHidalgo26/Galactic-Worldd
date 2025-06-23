// src/lib/upload.js
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";

export const subirImagen = async (archivo, nombreArchivo) => {
const storageRef = ref(storage, `productos/${nombreArchivo}`);
await uploadBytes(storageRef, archivo);
const url = await getDownloadURL(storageRef);
return url;
};
