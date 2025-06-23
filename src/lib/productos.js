// src/lib/productos.js

export const getProductos = async () => {
  try {
    const res = await fetch('/api/productos');
    if (!res.ok) throw new Error('Network response was not ok');
    return await res.json();
  } catch (error) {
    console.error('Error al obtener productos:', error);
    return [];
  }
};
