
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Trash2, Plus, Minus, ShoppingBag, Tag, Percent, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const CartItem = ({ item, onRemove, onUpdateQuantity }) => (
  <motion.div 
    layout 
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 20, transition: { duration: 0.2 } }}
    className="flex flex-col sm:flex-row items-center gap-4 py-5 border-b border-border/30"
  >
    <div className="w-24 h-28 sm:w-28 sm:h-32 rounded-md overflow-hidden bg-muted/50 flex-shrink-0">
      <img  src={item.imageSrc} alt={item.name} class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1593989185402-2bd0721e5b46" />
    </div>
    <div className="flex-grow text-center sm:text-left">
      <h3 className="text-lg font-semibold text-foreground">{item.name}</h3>
      <p className="text-sm text-muted-foreground">Talla: {item.size} / Color: {item.color}</p>
      <p className="text-md font-semibold text-primary mt-1 sm:mt-0">${item.price.toFixed(2)}</p>
    </div>
    <div className="flex items-center gap-3 mt-3 sm:mt-0">
      <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>
        <Minus size={16} />
      </Button>
      <span className="w-10 text-center text-sm font-medium">{item.quantity}</span>
      <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
        <Plus size={16} />
      </Button>
    </div>
    <p className="text-lg font-semibold text-foreground w-20 text-right hidden sm:block">${(item.price * item.quantity).toFixed(2)}</p>
    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive" onClick={() => onRemove(item.id)}>
      <Trash2 size={18} />
    </Button>
  </motion.div>
);

const CartPage = () => {
  const [cartItems, setCartItems] = React.useState([
    { id: 1, name: "Explorador Cósmico", price: 34.99, quantity: 1, imageSrc: "placeholder_cosmic_main.jpg", size: "L", color: "Negro Estelar" },
    { id: 2, name: "Vórtice Alienígena", price: 32.50, quantity: 2, imageSrc: "placeholder_alien.jpg", size: "M", color: "Azul Nebulosa" },
  ]);

  const handleRemoveItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleUpdateQuantity = (id, newQuantity) => {
    setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingCost = subtotal > 50 ? 0 : 7.99; // Envío gratis sobre $50
  const discount = 0; // Placeholder para descuentos
  const total = subtotal + shippingCost - discount;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div initial={{ opacity: 0, y:-20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }}>
        <h1 className="text-3xl md:text-4xl font-bold font-['Orbitron'] text-center mb-10">Tu Carrito Galáctico</h1>
      
        {cartItems.length === 0 ? (
          <div className="text-center py-16 glassmorphism-card p-8">
            <ShoppingBag size={64} className="mx-auto text-primary mb-6" />
            <h2 className="text-2xl font-semibold mb-3">Tu carrito está vacío</h2>
            <p className="text-muted-foreground mb-6">Parece que aún no has añadido ningún tesoro cósmico.</p>
            <Button asChild className="cta-button">
              <Link to="/tienda">Explorar Productos</Link>
            </Button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 glassmorphism-card p-6">
              <div className="hidden sm:flex text-xs text-muted-foreground uppercase font-medium mb-3 px-4">
                <span className="w-28 mr-4">Producto</span>
                <span className="flex-grow">Detalles</span>
                <span className="w-28 text-center">Cantidad</span>
                <span className="w-20 text-right">Subtotal</span>
                <span className="w-10 ml-2"></span>
              </div>
              {cartItems.map(item => (
                <CartItem 
                  key={item.id} 
                  item={item} 
                  onRemove={handleRemoveItem} 
                  onUpdateQuantity={handleUpdateQuantity} 
                />
              ))}
            </div>

            <div className="lg:col-span-1 sticky top-24">
              <Card className="shadow-xl bg-card/80 border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl font-['Orbitron']">Resumen del Pedido</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium text-foreground">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Envío Estimado</span>
                    <span className="font-medium text-foreground">{shippingCost === 0 ? "Gratis" : `$${shippingCost.toFixed(2)}`}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-green-500">
                      <span className="text-muted-foreground">Descuento</span>
                      <span className="font-medium text-green-400">-${discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="border-t border-border/30 pt-3 mt-3 flex justify-between">
                    <span className="text-lg font-semibold text-foreground">Total</span>
                    <span className="text-xl font-bold text-primary">${total.toFixed(2)}</span>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-3 pt-5">
                  <div className="w-full flex gap-2">
                    <Input placeholder="Código de descuento" className="bg-input/70 placeholder:text-xs"/>
                    <Button variant="outline" className="outline-cta-button text-xs px-3"><Tag size={14} className="mr-1"/> Aplicar</Button>
                  </div>
                  <Button className="w-full cta-button text-base py-3" asChild>
                    <Link to="/checkout">Proceder al Pago</Link>
                  </Button>
                  <p className="text-xs text-muted-foreground text-center mt-2">
                    <ShieldCheck size={12} className="inline mr-1 text-green-500"/> Pagos seguros y protegidos.
                  </p>
                </CardFooter>
              </Card>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default CartPage;
