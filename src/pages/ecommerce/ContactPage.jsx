
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, MessageCircle, HelpCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ContactInfoItem = ({ icon, title, text, href }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5 }}
    className="flex items-start gap-4 p-4 bg-card/50 rounded-lg"
  >
    <div className="bg-primary/10 p-3 rounded-lg text-primary">
      {React.cloneElement(icon, { size: 24 })}
    </div>
    <div>
      <h4 className="font-semibold text-lg text-foreground">{title}</h4>
      {href ? (
        <a href={href} className="text-muted-foreground hover:text-primary transition-colors">
          {text}
        </a>
      ) : (
        <p className="text-muted-foreground">{text}</p>
      )}
    </div>
  </motion.div>
);

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = React.useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    toast({
      title: "Mensaje Enviado",
      description: "Gracias por contactarnos. Tu mensaje ha sido enviado a la galaxia correcta.",
      className: "bg-card border-primary text-foreground",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="bg-background text-foreground">
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="relative py-28 md:py-40 text-center bg-cover bg-center"
        style={{ background: "linear-gradient(rgba(10,10,15,0.8), rgba(10,10,15,0.95)), url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1 
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold font-['Orbitron'] mb-4 text-slate-50"
          >
            Contacta con <span className="gradient-text-primary">Nuestra Galaxia</span>
          </motion.h1>
          <motion.p 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto"
          >
            ¿Preguntas, ideas o simplemente quieres saludar? Estamos a un mensaje de distancia luz.
          </motion.p>
        </div>
      </motion.section>

      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="glassmorphism-card p-6 md:p-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold font-['Orbitron'] mb-6 flex items-center">
                <Send size={28} className="mr-3 text-primary"/> Envíanos un Mensaje
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1.5">Nombre Completo</Label>
                    <Input id="name" placeholder="Tu Nombre Cósmico" value={formData.name} onChange={handleChange} required className="bg-input/70 placeholder:text-xs"/>
                  </div>
                  <div>
                    <Label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1.5">Email</Label>
                    <Input id="email" type="email" placeholder="tu.email@galactico.com" value={formData.email} onChange={handleChange} required className="bg-input/70 placeholder:text-xs"/>
                  </div>
                </div>
                <div>
                  <Label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-1.5">Asunto</Label>
                  <Input id="subject" placeholder="Asunto de tu Mensaje Estelar" value={formData.subject} onChange={handleChange} required className="bg-input/70 placeholder:text-xs"/>
                </div>
                <div>
                  <Label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1.5">Tu Mensaje</Label>
                  <Textarea id="message" placeholder="Escribe aquí tu consulta o saludo intergaláctico..." rows={5} value={formData.message} onChange={handleChange} required className="bg-input/70 placeholder:text-xs"/>
                </div>
                <Button type="submit" className="w-full cta-button text-base py-3" disabled={isSubmitting}>
                  {isSubmitting ? "Enviando Mensaje..." : "Enviar Mensaje a la Flota"}
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <div className="space-y-8">
              <ContactInfoItem icon={<Mail />} title="Email de Soporte" text="soporte@galacticworldd.com" href="mailto:soporte@galacticworldd.com" />
              <ContactInfoItem icon={<Phone />} title="Teléfono Espacial" text="+1 (555) GALACTIC" href="tel:+155542522842" />
              <ContactInfoItem icon={<MapPin />} title="Base Estelar Principal" text="Nebulosa del Cangrejo, Sector 7G" />
              <ContactInfoItem icon={<MessageCircle />} title="Chat en Vivo" text="Disponible de 9 AM a 5 PM (Tiempo Terrestre Estándar)" />
              <ContactInfoItem icon={<HelpCircle />} title="Preguntas Frecuentes" text="Visita nuestra sección de FAQ" href="/preguntas-frecuentes" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
