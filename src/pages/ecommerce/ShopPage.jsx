import React, { useEffect, useState } from "react";

const ProductCard = ({ producto }) => (
  <div className="glassmorphism-card overflow-hidden flex flex-col">
    {producto.imagen && (
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="w-full h-60 object-cover"
      />
    )}
    <div className="p-4 flex flex-col flex-grow">
      <h3 className="text-lg font-semibold mb-1 truncate">{producto.nombre}</h3>
      <p className="text-primary font-bold">${producto.precio}</p>
      <p className="text-sm text-muted-foreground mt-1">Talle: {producto.talle}</p>
    </div>
  </div>
);

const ShopPage = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
  const cargar = async () => {
    try {
      const res = await fetch('http://localhost:4000/api/productos');
      if (!res.ok) throw new Error('Network response was not ok');
      const data = await res.json();
      setProductos(data);
    } catch (e) {
      console.error(e);
    }
  };
  cargar();
}, []);


  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl md:text-5xl font-black mb-8 text-center font-['Orbitron'] hero-text-shadow">
        Productos
      </h1>
      {productos.length === 0 ? (
        <p className="text-center">No hay productos disponibles.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productos.map((p) => (
            <ProductCard key={p.id} producto={p} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ShopPage;
