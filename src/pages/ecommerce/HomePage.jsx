
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Zap, ShieldCheck, Truck, Star, Heart, Eye } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ProductCard = ({ producto, delay, isNew = false, onWishlistClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.5, delay }}
    className="glassmorphism-card overflow-hidden group product-card-hover relative flex flex-col"
  >
    {isNew && (
      <div className="absolute top-3 right-3 bg-primary/80 backdrop-blur-sm text-primary-foreground text-xs px-2.5 py-1 rounded-full shadow-lg z-10 font-['Orbitron'] tracking-wider">
        NUEVO
      </div>
    )}
     <button 
        onClick={() => onWishlistClick(producto.id)}
        className="absolute top-3 left-3 z-10 p-2 bg-card/50 hover:bg-primary/20 rounded-full transition-colors duration-200"
        aria-label="Añadir a lista de deseos"
      >
        <Heart size={18} className="text-foreground/70 hover:text-red-500 hover:fill-red-500/30" />
    </button>
    <Link to={`/tienda/${producto.id}`} className="block flex-grow flex flex-col">
      <div className="aspect-[3/4] bg-muted/30 overflow-hidden">
        <img 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          alt={producto.nombre}
         src={producto.imagen || "https://via.placeholder.com/300"} />
      </div>
      <div className="p-4 md:p-5 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-md lg:text-lg font-semibold text-foreground mb-1 truncate group-hover:text-primary transition-colors">{producto.nombre}</h3>
          <p className="text-primary font-bold text-lg lg:text-xl mb-3">${producto.precio}</p>
          <p className="text-sm text-muted-foreground">Talle: {producto.talle}</p>
        </div>
        <Button className="w-full cta-button text-sm py-2.5 mt-2">
          <Eye size={16} className="mr-2"/> Ver Detalles
        </Button>
      </div>
    </Link>
  </motion.div>
);

const FeatureHighlight = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-4 glassmorphism-card h-full">
    <div className="p-3.5 mb-3 bg-primary/15 rounded-full text-primary subtle-glow">
      {React.cloneElement(icon, { size: 28 })}
    </div>
    <h4 className="text-md font-semibold text-foreground mb-1.5">{title}</h4>
    <p className="text-xs text-muted-foreground">{description}</p>
  </div>
);

const HomePage = () => {
  const { toast } = useToast();
  const handleWishlistClick = (productId) => {
    toast({
      title: "Lista de deseos",
      description: `Producto ${productId} añadido/quitado de la lista de deseos`,
      className: "bg-card text-foreground border-primary",
    });
  };

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/productos')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(setProductos)
      .catch(console.error);
  }, []);

  const newArrivals = productos.slice(0, 3);

  const bestSellers = productos.slice(3, 6);

  const highlights = [
    { icon: <Zap />, title: "Diseños Únicos", description: "Estampados exclusivos inspirados en el cosmos." },
    { icon: <ShieldCheck />, title: "Calidad Premium", description: "Materiales duraderos y confortables." },
    { icon: <Truck />, title: "Envíos Seguros", description: "Recibe tu pedido en cualquier punto de la galaxia." },
    { icon: <Star />, title: "Clientes Satisfechos", description: "+1000 valoraciones de 5 estrellas." },
  ];

  return (
    <div className="flex flex-col">
      <section 
        className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center text-center text-white overflow-hidden"
        style={{ background: "linear-gradient(to bottom, rgba(10,14,20,0.6), rgba(10,14,20,0.95)), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80')", backgroundSize: 'cover', backgroundPosition: 'center center' }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6 uppercase tracking-tighter font-['Orbitron'] hero-text-shadow">
            Viste el <span className="gradient-text-primary">Universo</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed">
            Descubre remeras con diseños galácticos que te llevarán a otra dimensión. Calidad premium y estilo fuera de este mundo.
          </p>
          <Button size="lg" className="cta-button text-base md:text-lg py-3.5 px-10 md:px-12 rounded-full shadow-2xl hover:shadow-primary/60 transform hover:scale-105 transition-all duration-300" asChild>
            <Link to="/tienda">
              <ShoppingBag size={20} className="mr-2.5" />
              Explorar Colección
            </Link>
          </Button>
        </motion.div>
      </section>

      <section className="bg-background section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {highlights.map((highlight, index) => (
               <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FeatureHighlight {...highlight} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="new-arrivals" className="section-padding bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y:20 }} 
            whileInView={{ opacity:1, y:0 }} 
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3 font-['Orbitron']">Nuevos Arribos Cósmicos</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Directo desde el taller de nebulosas, lo último en moda intergaláctica.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {newArrivals.length === 0 ? (
              <p className="col-span-full text-center">No hay productos disponibles.</p>
            ) : (
              newArrivals.map((product) => (
                <ProductCard key={product.id} producto={product} onWishlistClick={handleWishlistClick} />
              ))
            )}
          </div>
        </div>
      </section>

      <section id="best-sellers" className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y:20 }} 
            whileInView={{ opacity:1, y:0 }} 
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3 font-['Orbitron']">Los Más Vendidos del Sector</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Nuestras remeras más populares, elegidas por exploradores galácticos como tú.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {bestSellers.length === 0 ? (
              <p className="col-span-full text-center">No hay productos disponibles.</p>
            ) : (
              bestSellers.map((product) => (
                <ProductCard key={product.id} producto={product} onWishlistClick={handleWishlistClick}/>
              ))
            )}
          </div>
          <div className="text-center mt-16">
            <Button size="lg" variant="outline" className="outline-cta-button border-2 text-base py-3 px-8 rounded-full hover:scale-105 transform transition-all duration-300" asChild>
              <Link to="/tienda">Ver Todos los Productos</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glassmorphism-card p-8 md:p-12 lg:p-16 overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
                className="lg:w-1/2 text-center lg:text-left"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-5 font-['Orbitron'] text-foreground">
                  Únete a la <span className="gradient-text-primary">Flota Galáctica</span>
                </h2>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                  Suscríbete a nuestro boletín para recibir noticias sobre lanzamientos, ofertas exclusivas y contenido del universo Galáctic Worldd. ¡No te pierdas ninguna estrella fugaz!
                </p>
                <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0">
                  <input type="email" placeholder="Tu email cósmico" className="flex-grow h-12 px-4 rounded-md border-input bg-input/50 text-sm placeholder:text-muted-foreground focus:ring-primary focus:border-primary transition-all duration-300" />
                  <Button type="submit" size="lg" className="cta-button h-12 rounded-md">Suscribirme Ahora</Button>
                </form>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay:0.2, type: "spring", stiffness:100 }}
                className="lg:w-2/5 mt-8 lg:mt-0"
              >
                <img 
                  className="rounded-lg shadow-2xl w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                  alt="Astronauta con traje espacial moderno mirando las estrellas"
                 src="https://images.unsplash.com/photo-1639823933284-3dba80c84a96" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
