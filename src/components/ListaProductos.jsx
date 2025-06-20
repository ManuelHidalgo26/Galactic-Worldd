import { useEffect, useState } from "react";
import { getProductos } from "../lib/productos";

const ListaProductos = () => {
const [productos, setProductos] = useState([]);
const [loading, setLoading] = useState(true);      
const [error, setError] = useState(null);           

useEffect(() => {
    const fetchProductos = async () => {
    try {
        const data = await getProductos();
        setProductos(data);
    } catch (err) {
        setError("Error al cargar productos.");
        console.error(err);
    } finally {
        setLoading(false);
    }
    };

    fetchProductos();
}, []);

if (loading) return <p>Cargando productos...</p>;
if (error) return <p>{error}</p>;

return (
    <div>
    <h2>Productos disponibles</h2>
    {productos.length === 0 ? (
        <p>No hay productos disponibles.</p>
    ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {productos.map(p => (
            <div
            key={p.id}
            style={{
                border: "1px solid #ccc",
                padding: "10px",
                borderRadius: "8px",
                width: "200px",
            }}
            >
            <h3>{p.nombre}</h3>
            <p><strong>Precio:</strong> ${p.precio}</p>
            <p><strong>Talle:</strong> {p.talle}</p>
            </div>
        ))}
        </div>
    )}
    </div>
);
};

export default ListaProductos;
