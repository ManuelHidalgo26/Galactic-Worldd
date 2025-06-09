
import React from "react";
import { motion } from "framer-motion";
import { Rocket, Users, Sparkles, Target, ShieldCheck, Zap } from "lucide-react";

const AboutPage = () => {
  const teamMembers = [
    { name: "Capitán Astro", role: "Fundador & Visionario Estelar", imageSrc: "placeholder_astro.jpg", bio: "Apasionado por el cosmos y la moda, Astro lanzó Galáctic Worldd para llevar el universo al guardarropa de todos." },
    { name: "Nova Diseñadora", role: "Jefa de Diseño Interestelar", imageSrc: "placeholder_nova.jpg", bio: "Con un ojo para los detalles cósmicos, Nova crea cada diseño con inspiración extraída de nebulosas y galaxias lejanas." },
    { name: "Cometa Logístico", role: "Maestro de Órbitas y Envíos", imageSrc: "placeholder_comet.jpg", bio: "Cometa asegura que tus pedidos viajen a la velocidad de la luz y lleguen seguros a tu puerto espacial." },
  ];

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="relative py-28 md:py-40 text-center bg-cover bg-center"
        style={{ background: "linear-gradient(rgba(10,10,15,0.8), rgba(10,10,15,0.95)), url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1728&q=80')" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1 
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold font-['Orbitron'] mb-4 text-slate-50"
          >
            Sobre <span className="gradient-text-primary">Galáctic Worldd</span>
          </motion.h1>
          <motion.p 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto"
          >
            Nuestra misión es fusionar la majestuosidad del cosmos con la moda urbana, creando prendas únicas que inspiran asombro y aventura.
          </motion.p>
        </div>
      </motion.section>

      {/* Our Story Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-['Orbitron'] mb-6">Nuestra Odisea Cósmica</h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed prose prose-invert max-w-none prose-p:my-2">
                <p>Galáctic Worldd nació de una fascinación compartida por los misterios del universo y una pasión por el diseño innovador. Creemos que la ropa es más que tela; es una forma de expresión, una extensión de nuestra curiosidad y un lienzo para nuestros sueños.</p>
                <p>Cada colección está cuidadosamente curada, inspirada en fenómenos astronómicos, exploraciones espaciales y la belleza infinita de las galaxias. Utilizamos materiales de alta calidad y técnicas de estampado avanzadas para asegurar que cada prenda sea una obra de arte duradera.</p>
                <p>Más que una tienda, aspiramos a ser una comunidad de soñadores, exploradores y entusiastas del espacio. Únete a nosotros en este viaje interestelar.</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="aspect-square"
            >
              <img  class="rounded-xl shadow-2xl w-full h-full object-cover" alt="Nebulosa colorida en el espacio profundo" src="https://images.unsplash.com/photo-1638406370590-c14b61ca49d9" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-['Orbitron'] mb-3">Nuestros Pilares Galácticos</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Los principios que guían nuestra travesía por el universo de la moda.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Rocket size={36} />, title: "Innovación Constante", description: "Buscamos nuevas formas de plasmar el cosmos en diseños vanguardistas." },
              { icon: <Sparkles size={36} />, title: "Calidad Estelar", description: "Compromiso con materiales premium y confección impecable." },
              { icon: <Users size={36} />, title: "Comunidad Cósmica", description: "Fomentamos la conexión entre amantes del espacio y la moda." },
              { icon: <Target size={36} />, title: "Exploración Creativa", description: "Cada prenda es un viaje, una historia del universo contada en tela." },
              { icon: <ShieldCheck size={36} />, title: "Sostenibilidad Orbital", description: "Prácticas responsables para proteger nuestro planeta y el más allá." },
              { icon: <Zap size={36} />, title: "Inspiración Infinita", description: "El universo es nuestra musa, ofreciendo posibilidades ilimitadas." },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glassmorphism-card p-6 text-center"
              >
                <div className="inline-block p-3 mb-4 bg-primary/10 rounded-full text-primary">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section Placeholder - Can be expanded if needed */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-['Orbitron'] mb-3">La Tripulación Estelar</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Conoce a los exploradores detrás de Galáctic Worldd.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="glassmorphism-card p-6 text-center"
              >
                <div className="w-32 h-32 rounded-full mx-auto mb-5 overflow-hidden border-2 border-primary/50">
                  <img  src={member.imageSrc} alt={member.name} class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1637774690422-0a7b35955c06" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                <p className="text-primary text-sm mb-2">{member.role}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
