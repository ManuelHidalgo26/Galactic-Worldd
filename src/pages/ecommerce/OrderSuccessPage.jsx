
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, ShoppingBag, Home } from "lucide-react";
import { motion } from "framer-motion";

const OrderSuccessPage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col items-center justify-center text-center min-h-[calc(100vh-10rem)]">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
        className="glassmorphism-card p-8 md:p-12 max-w-lg w-full"
      >
        <CheckCircle className="w-20 h-20 md:w-24 md:h-24 text-green-500 mx-auto mb-6" />
        <h1 className="text-3xl md:text-4xl font-bold font-['Orbitron'] text-foreground mb-4">
          ¡Pedido Confirmado!
        </h1>
        <p className="text-muted-foreground text-lg mb-8">
          Gracias por tu compra en Galáctic Worldd. Tu pedido ha sido procesado exitosamente y está siendo preparado para su viaje estelar.
        </p>
        <p className="text-sm text-muted-foreground mb-2">
          Recibirás un correo electrónico de confirmación con los detalles de tu pedido y el seguimiento del envío en breve.
        </p>
        <p className="text-sm text-muted-foreground mb-8">
          Número de pedido: <span className="font-semibold text-primary">GW-1701-D</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="cta-button">
            <Link to="/tienda">
              <ShoppingBag size={18} className="mr-2" /> Seguir Comprando
            </Link>
          </Button>
          <Button variant="outline" asChild className="outline-cta-button">
            <Link to="/">
              <Home size={18} className="mr-2" /> Ir al Inicio
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default OrderSuccessPage;
