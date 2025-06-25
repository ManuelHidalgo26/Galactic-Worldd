import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const AdminProductForm = () => {
  const [form, setForm] = useState({ nombre: "", precio: "", talle: "" });
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let imageUrl = "";
      if (image) {
        const data = new FormData();
        data.append("image", image);
        const res = await fetch("http://localhost:4000/api/upload", {
          method: "POST",
          body: data,
        });
        if (!res.ok) throw new Error("Error al subir imagen");
        const upload = await res.json();
        imageUrl = upload.url;
      }

      const res = await fetch("http://localhost:4000/api/productos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, imagen: imageUrl }),
      });
      if (!res.ok) throw new Error("Error al crear producto");
      toast({
        title: "Producto creado",
        description: "El producto se registró correctamente.",
        className: "bg-card border-primary text-foreground",
      });
      setForm({ nombre: "", precio: "", talle: "" });
      setImage(null);
    } catch (err) {
      console.error(err);
      toast({
        title: "Error",
        description: "No se pudo crear el producto.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl md:text-4xl font-bold font-['Orbitron'] mb-8 text-center">
        Nuevo Producto
      </h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto space-y-6 glassmorphism-card p-6"
      >
        <div>
          <Label htmlFor="nombre" className="block text-sm font-medium mb-1.5">
            Nombre
          </Label>
          <Input
            id="nombre"
            value={form.nombre}
            onChange={handleChange}
            required
            className="bg-input/70"
          />
        </div>
        <div>
          <Label htmlFor="precio" className="block text-sm font-medium mb-1.5">
            Precio
          </Label>
          <Input
            id="precio"
            type="number"
            value={form.precio}
            onChange={handleChange}
            required
            className="bg-input/70"
          />
        </div>
        <div>
          <Label htmlFor="talle" className="block text-sm font-medium mb-1.5">
            Talle
          </Label>
          <Input
            id="talle"
            value={form.talle}
            onChange={handleChange}
            required
            className="bg-input/70"
          />
        </div>
        <div>
          <Label htmlFor="imagen" className="block text-sm font-medium mb-1.5">
            Imagen
          </Label>
          <Input
            id="imagen"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="bg-input/70"
          />
        </div>
        <Button type="submit" className="cta-button w-full" disabled={loading}>
          {loading ? "Guardando..." : "Crear Producto"}
        </Button>
      </form>
    </div>
  );
};

export default AdminProductForm;
