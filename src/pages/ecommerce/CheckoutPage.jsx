
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { User, Mail, MapPin, Phone, CreditCard, ShieldCheck, ShoppingBag, ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";

const CheckoutPage = () => {
  const cartSummary = {
    items: [
      { id: 1, name: "Explorador Cósmico", price: 34.99, quantity: 1, imageSrc: "placeholder_cosmic_main.jpg" },
      { id: 2, name: "Vórtice Alienígena", price: 32.50, quantity: 2, imageSrc: "placeholder_alien.jpg" },
    ],
    subtotal: 100.00,
    shipping: 0.00,
    total: 100.00,
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <Button variant="outline" asChild className="mb-8 outline-cta-button hover:bg-primary/10">
          <Link to="/carrito"><ChevronLeft size={18} className="mr-1.5" /> Volver al Carrito</Link>
        </Button>
        <h1 className="text-3xl md:text-4xl font-bold font-['Orbitron'] text-center mb-10">Finalizar Compra</h1>

        <div className="grid lg:grid-cols-3 gap-10 items-start">
          {/* Formulario de Checkout */}
          <form className="lg:col-span-2 space-y-8">
            <Card className="glassmorphism-card p-2">
              <CardHeader>
                <CardTitle className="text-xl font-['Orbitron'] flex items-center"><User className="mr-2 text-primary"/> Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="grid sm:grid-cols-2 gap-6">
                <InputWithIcon icon={<User size={16}/>} id="firstName" label="Nombre" placeholder="Tu Nombre" />
                <InputWithIcon icon={<User size={16}/>} id="lastName" label="Apellido" placeholder="Tu Apellido" />
                <InputWithIcon icon={<Mail size={16}/>} id="email" label="Correo Electrónico" type="email" placeholder="tu@email.com" className="sm:col-span-2"/>
                <InputWithIcon icon={<Phone size={16}/>} id="phone" label="Teléfono (opcional)" type="tel" placeholder="+54 9 11 XXXX XXXX" />
              </CardContent>
            </Card>

            <Card className="glassmorphism-card p-2">
              <CardHeader>
                <CardTitle className="text-xl font-['Orbitron'] flex items-center"><MapPin className="mr-2 text-primary"/> Dirección de Envío</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <InputWithIcon icon={<MapPin size={16}/>} id="address" label="Dirección" placeholder="Calle Falsa 123" />
                <div className="grid sm:grid-cols-2 gap-6">
                  <InputWithIcon id="apartment" label="Apartamento, suite, etc. (opcional)" placeholder="Piso 3, Depto A" />
                  <InputWithIcon id="city" label="Ciudad" placeholder="Ciudad Gótica" />
                </div>
                <div className="grid sm:grid-cols-3 gap-6">
                  <SelectInput id="country" label="País" placeholder="Selecciona País" options={["Argentina", "Chile", "Uruguay"]} />
                  <SelectInput id="state" label="Provincia/Estado" placeholder="Selecciona Provincia" options={["Buenos Aires", "Córdoba", "Santa Fe"]} />
                  <InputWithIcon id="zip" label="Código Postal" placeholder="C1234ABC" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="glassmorphism-card p-2">
              <CardHeader>
                <CardTitle className="text-xl font-['Orbitron'] flex items-center"><CreditCard className="mr-2 text-primary"/> Método de Pago</CardTitle>
                <CardDescription className="text-xs">Todas las transacciones son seguras y encriptadas.</CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup defaultValue="credit-card" className="space-y-3">
                  <Label className="flex items-center space-x-3 p-4 border border-border/50 rounded-lg hover:border-primary transition-colors cursor-pointer has-[:checked]:border-primary has-[:checked]:ring-1 has-[:checked]:ring-primary">
                    <RadioGroupItem value="credit-card" id="credit-card" />
                    <span>Tarjeta de Crédito/Débito</span>
                  </Label>
                  <Label className="flex items-center space-x-3 p-4 border border-border/50 rounded-lg hover:border-primary transition-colors cursor-pointer has-[:checked]:border-primary has-[:checked]:ring-1 has-[:checked]:ring-primary">
                    <RadioGroupItem value="mercado-pago" id="mercado-pago" />
                    <span>Mercado Pago</span>
                  </Label>
                  {/* Placeholder para campos de tarjeta */}
                  <div className="space-y-4 pt-3 pl-8 border-l-2 border-primary/30 ml-2">
                     <InputWithIcon id="card-number" label="Número de Tarjeta" placeholder="•••• •••• •••• ••••" />
                     <div className="grid grid-cols-2 gap-4">
                        <InputWithIcon id="card-expiry" label="Vencimiento (MM/AA)" placeholder="MM/AA" />
                        <InputWithIcon id="card-cvc" label="CVC" placeholder="•••" />
                     </div>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            <div className="flex justify-end pt-4">
              <Button type="submit" size="lg" className="cta-button text-base py-3 px-8">
                <ShieldCheck size={18} className="mr-2"/> Pagar ${cartSummary.total.toFixed(2)}
              </Button>
            </div>
          </form>

          {/* Resumen del Pedido */}
          <div className="lg:col-span-1 sticky top-24">
            <Card className="shadow-xl bg-card/80 border-border/50">
              <CardHeader>
                <CardTitle className="text-lg font-['Orbitron'] flex items-center"><ShoppingBag className="mr-2 text-primary"/>Resumen del Pedido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {cartSummary.items.map(item => (
                  <div key={item.id} className="flex items-center justify-between text-sm py-2 border-b border-border/30 last:border-b-0">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-14 rounded bg-muted/50 overflow-hidden">
                        <img  src={item.imageSrc} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground truncate max-w-[150px]">{item.name}</p>
                        <p className="text-xs text-muted-foreground">Cant: {item.quantity}</p>
                      </div>
                    </div>
                    <p className="font-medium text-foreground">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
                <div className="pt-3 space-y-1.5 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium text-foreground">${cartSummary.subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Envío</span>
                    <span className="font-medium text-foreground">{cartSummary.shipping === 0 ? "Gratis" : `$${cartSummary.shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="border-t border-border/50 pt-2 mt-2 flex justify-between">
                    <span className="text-md font-semibold text-foreground">Total</span>
                    <span className="text-lg font-bold text-primary">${cartSummary.total.toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const InputWithIcon = ({ icon, id, label, className, ...props }) => (
  <div className={className}>
    <Label htmlFor={id} className="block text-xs font-medium text-muted-foreground mb-1.5">{label}</Label>
    <div className="relative">
      {icon && <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">{icon}</div>}
      <Input id={id} className={`bg-input/70 placeholder:text-xs ${icon ? 'pl-9' : ''}`} {...props} />
    </div>
  </div>
);

const SelectInput = ({ id, label, placeholder, options, className }) => (
  <div className={className}>
    <Label htmlFor={id} className="block text-xs font-medium text-muted-foreground mb-1.5">{label}</Label>
    <Select>
      <SelectTrigger id={id} className="bg-input/70 text-sm">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map(opt => <SelectItem key={opt} value={opt.toLowerCase().replace(" ", "-")}>{opt}</SelectItem>)}
      </SelectContent>
    </Select>
  </div>
);

export default CheckoutPage;
