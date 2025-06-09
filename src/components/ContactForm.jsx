
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Mensaje enviado",
        description: "Gracias por contactarme. Te responderé lo antes posible.",
        duration: 5000,
        className: "bg-card text-foreground border-border", 
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-card rounded-xl shadow-md p-6 border border-border/60">
      <h3 className="text-2xl font-semibold mb-6 text-foreground">Envíame un mensaje</h3>
      
      <div className="space-y-4">
        <div>
          <Label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
            Nombre completo
          </Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Tu nombre"
            className="bg-input text-foreground placeholder:text-muted-foreground"
          />
        </div>
        
        <div>
          <Label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
            Correo electrónico
          </Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="tu@email.com"
            className="bg-input text-foreground placeholder:text-muted-foreground"
          />
        </div>
        
        <div>
          <Label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">
            Asunto
          </Label>
          <Input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder="Asunto del mensaje"
            className="bg-input text-foreground placeholder:text-muted-foreground"
          />
        </div>
        
        <div>
          <Label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
            Mensaje
          </Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            placeholder="Escribe tu mensaje aquí..."
            className="bg-input text-foreground placeholder:text-muted-foreground"
          />
        </div>
        
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full cta-gradient hover:opacity-90"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-primary-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Enviando...
            </span>
          ) : (
            <span className="flex items-center justify-center">
              <Send className="mr-2" size={16} />
              Enviar mensaje
            </span>
          )}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
