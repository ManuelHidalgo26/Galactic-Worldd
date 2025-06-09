
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Trash2, ShoppingBag, HeartCrack, Eye } from "lucide-react";
import { motion } from "framer-motion";

const WishlistItemCard = ({ item, onRemove, onAddToCart }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
    className="glassmorphism-card p-4 flex flex-col sm:flex-row items-center gap-4 group"
  >
    <div className="w-28 h-36 sm:w-32 sm:h-40 rounded-md overflow-hidden bg-muted/50 flex-shrink-0">
      <img 
        class="w-full h-full object-cover group-hover:scale-105 transition-transform"
        alt={item.name}
       src="https://images.unsplash.com/photo-1666358069309-e0d0acb8aacb" />
    </div>
    <div className="flex-grow text-center sm:text-left">
      <Link to={`/tienda/${item.id}`}>
        <h3 className="text-lg font-semibold text-foreground hover:text-primary transition-colors">{item.name}</h3>
      </Link>
      <p className="text-sm text-muted-foreground">{item.category}</p>
      <p className="text-xl font-bold text-primary mt-1">${item.price}</p>
    </div>
    <div className="flex flex-col sm:flex-row items-center gap-2 mt-3 sm:mt-0">
      <Button size="sm" className="cta-button w-full sm:w-auto text-xs" onClick={() => onAddToCart(item)}>
        <ShoppingBag size={16} className="mr-1.5" /> Añadir al Carrito
      </Button>
      <Button size="sm" variant="outline" className="outline-cta-button w-full sm:w-auto text-xs" onClick={() => onRemove(item.id)}>
        <Trash2 size={16} className="mr-1.5" /> Quitar
      </Button>
    </div>
  </motion.div>
);

const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState([
    { id: "alien-vortex", name: "Vórtice Alienígena", price: "32.50", imageSrc: "placeholder_alien.jpg", category: "Aliens" },
    { id: "nebula-dream", name: "Sueño Nebular", price: "35.00", imageSrc: "placeholder_nebula.jpg", category: "Abstracto" },
  ]);

  const handleRemoveItem = (itemId) => {
    setWishlistItems(prevItems => prevItems.filter(item => item.id !== itemId));
    // TODO: Add toast notification
  };

  const handleAddToCart = (item) => {
    console.log("Añadido al carrito:", item);
    // TODO: Add logic to add to cart and remove from wishlist, plus toast
    handleRemoveItem(item.id);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold font-['Orbitron'] text-center mb-10 hero-text-shadow">
          Mi Lista de Deseos Cósmicos
        </h1>
      
        {wishlistItems.length === 0 ? (
          <div className="text-center py-16 glassmorphism-card p-8 rounded-lg">
            <HeartCrack size={64} className="mx-auto text-primary mb-6 opacity-70" />
            <h2 className="text-2xl font-semibold mb-3 text-foreground">Tu Lista de Deseos está Vacía</h2>
            <p className="text-muted-foreground mb-6">
              Parece que aún no has guardado ninguna estrella fugaz. ¡Explora nuestros productos y encuentra tus favoritos!
            </p>
            <Button asChild className="cta-button rounded-full">
              <Link to="/tienda"><Eye size={18} className="mr-2"/> Explorar Productos</Link>
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            {wishlistItems.map(item => (
              <WishlistItemCard 
                key={item.id} 
                item={item} 
                onRemove={handleRemoveItem} 
                onAddToCart={handleAddToCart} 
              />
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default WishlistPage;
