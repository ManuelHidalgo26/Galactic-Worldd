
import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, ShoppingCart, Home, Shirt, Info, Mail, BookOpen, Heart, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const logoDark = "./public/logo_web_transparente.png";
  const isAdmin = typeof window !== 'undefined' && localStorage.getItem('isAdmin') === 'true';

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Inicio", icon: <Home size={18} /> },
    { to: "/tienda", label: "Tienda", icon: <Shirt size={18} /> },
    { to: "/blog", label: "Blog", icon: <BookOpen size={18} /> },
    { to: "/sobre-nosotros", label: "Nosotros", icon: <Info size={18} /> },
    { to: "/contacto", label: "Contacto", icon: <Mail size={18} /> },
  ];

  if (isAdmin) {
    navLinks.push({ to: "/admin/nuevo-producto", label: "Admin", icon: <Plus size={18} /> });
  }

  const activeLinkClass = "text-primary font-semibold hero-text-shadow";
  const inactiveLinkClass = "hover:text-primary transition-colors text-foreground/80 hover:hero-text-shadow";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 w-full transition-all duration-300 
                  ${isScrolled || isOpen ? "bg-background/80 backdrop-blur-xl shadow-2xl border-b border-border/30" : "bg-transparent border-b border-transparent"}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logoDark} alt="Galáctic Worldd Logo" className="h-10 sm:h-12 w-auto" />
            <span className="text-xl sm:text-2xl font-black font-['Orbitron'] tracking-wider gradient-text-primary">
              Galáctic Worldd
            </span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  `${isActive ? activeLinkClass : inactiveLinkClass} flex items-center gap-1.5 text-sm font-medium tracking-wide py-2`
                }
              >
                {link.icon}
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center space-x-2 sm:space-x-3">
             <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10 rounded-full">
              <Link to="/lista-deseos" aria-label="Lista de deseos">
                <Heart className="text-foreground/80 hover:text-primary" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10 rounded-full">
              <Link to="/carrito" aria-label="Carrito de compras">
                <ShoppingCart className="text-foreground/80 hover:text-primary" />
              </Link>
            </Button>
            <div className="hidden lg:flex items-center space-x-3">
              <Button variant="outline" className="outline-cta-button border-primary text-primary hover:bg-primary/10 rounded-full text-xs px-5 py-2.5" asChild>
                <Link to="/login">Ingresar</Link>
              </Button>
              <Button className="cta-button rounded-full text-xs px-5 py-2.5" asChild>
                <Link to="/registro">Registrarse</Link>
              </Button>
            </div>
            <div className="lg:hidden">
              <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Menu" className="hover:bg-primary/10 rounded-full">
                {isOpen ? <X size={24} className="text-foreground/80 hover:text-primary" /> : <Menu size={24} className="text-foreground/80 hover:text-primary" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden border-t border-border/30 bg-background/95"
        >
          <nav className="flex flex-col space-y-2 px-4 py-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `${
                    isActive ? activeLinkClass : inactiveLinkClass
                  } flex items-center gap-2.5 rounded-lg px-4 py-3 text-base font-medium`
                }
              >
                {link.icon}
                {link.label}
              </NavLink>
            ))}
            <div className="pt-4 flex flex-col space-y-3">
               <Button variant="outline" className="outline-cta-button w-full border-primary text-primary hover:bg-primary/10 rounded-full" asChild>
                <Link to="/login" onClick={toggleMenu}>Ingresar</Link>
              </Button>
              <Button className="cta-button w-full rounded-full" asChild>
                <Link to="/registro" onClick={toggleMenu}>Registrarse</Link>
              </Button>
            </div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
