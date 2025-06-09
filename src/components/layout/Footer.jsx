
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, ArrowUp, CreditCard, ShieldCheck, Sparkles } from "lucide-react";

const Footer = () => {
  const logoDark = "/logo-galactic-worldd-dark.svg";
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
    { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
    { icon: <Youtube size={20} />, href: "#", label: "Youtube" },
  ];

  const companyLinks = [
    { to: "/sobre-nosotros", label: "Sobre Galáctic Worldd" },
    { to: "/contacto", label: "Contacto" },
    { to: "/blog", label: "Blog Galáctico" },
    { to: "/carreras", label: "Trabaja con Nosotros (Vacantes Cósmicas)" },
  ];
  
  const helpLinks = [
    { to: "/preguntas-frecuentes", label: "Preguntas Frecuentes (FAQ)" },
    { to: "/envios", label: "Información de Envíos y Entregas" },
    { to: "/devoluciones", label: "Política de Devoluciones y Cambios" },
    { to: "/guia-tallas", label: "Guía de Tallas Interestelar" },
  ];

  const legalLinks = [
     { to: "/terminos", label: "Términos y Condiciones de Uso" },
     { to: "/privacidad", label: "Política de Privacidad Universal" },
     { to: "/cookies", label: "Política de Cookies Cósmicas" },
  ];


  return (
    <footer className="bg-card/50 text-muted-foreground border-t border-border/30 pt-16 pb-8 subtle-glow">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-10 mb-12">
          <div className="xl:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <img src={logoDark} alt="Galáctic Worldd Logo" className="h-10 w-auto" />
              <span className="text-2xl font-black font-['Orbitron'] tracking-wider gradient-text-primary">
                Galáctic Worldd
              </span>
            </Link>
            <p className="text-sm mb-4 max-w-md">
              Explora el universo del estilo con nuestras remeras de diseños únicos y calidad profesional. Viste la galaxia, una estrella a la vez.
            </p>
            <div className="flex items-center gap-3 text-sm mb-5">
                <CreditCard size={20} className="text-primary"/> <span>Pagos Seguros</span> <ShieldCheck size={20} className="text-green-400 ml-1.5"/>
            </div>
             <p className="text-xs text-primary flex items-center gap-1.5">
              <Sparkles size={14} /> Diseños exclusivos, stock limitado.
            </p>
          </div>

          <div>
            <h5 className="font-['Orbitron'] font-semibold text-foreground mb-4 text-md">Nuestra Galaxia</h5>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-xs hover:text-primary transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-['Orbitron'] font-semibold text-foreground mb-4 text-md">Soporte Estelar</h5>
            <ul className="space-y-2">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-xs hover:text-primary transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h5 className="font-['Orbitron'] font-semibold text-foreground mb-4 text-md">Legal Cósmico</h5>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-xs hover:text-primary transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/30 flex flex-col-reverse sm:flex-row justify-between items-center">
          <p className="text-[10px] text-center sm:text-left mt-6 sm:mt-0 text-muted-foreground/70">
            &copy; {new Date().getFullYear()} Galáctic Worldd. Todos los derechos reservados. Forjado en las estrellas.
          </p>
          <div className="flex items-center gap-2.5">
            <div className="flex space-x-2.5">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2 rounded-full bg-secondary/10 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300 subtle-glow-hover"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            <button
              onClick={scrollToTop}
              className="group p-2 rounded-full bg-secondary/10 hover:bg-primary/20 transition-all duration-300 subtle-glow-hover"
              aria-label="Volver arriba"
            >
              <ArrowUp size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
