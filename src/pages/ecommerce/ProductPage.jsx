
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Star, ShoppingCart, Zap, ShieldCheck, MessageSquare, ChevronLeft, Heart, Share2, Ruler, Package, Minus, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";


const ProductPage = () => {
  const { productId } = useParams();

  const product = {
    id: productId,
    name: "Explorador Cósmico Avanzado",
    price: "34.99",
    originalPrice: "45.00",
    description: "Sumérgete en la vastedad del universo con esta remera de diseño exclusivo. Fabricada con algodón 100% orgánico de primera calidad, ofrece un confort estelar y una durabilidad que resistirá tus viajes más audaces por la galaxia. El estampado utiliza tintas ecológicas de alta definición que capturan la belleza de nebulosas lejanas y constelaciones brillantes. Ideal para tus misiones diarias o para destacar en cualquier evento astronómico.",
    details: [
      "Material: 100% Algodón Orgánico Peinado",
      "Peso del tejido: 180 g/m²",
      "Estampado: Serigrafía de alta definición con tintas ecológicas",
      "Corte: Regular fit, unisex",
      "Cuello: Redondo con ribete",
      "Etiqueta: Estampada para mayor comodidad (sin etiqueta de tela)",
      "Origen: Diseñado en la Tierra, inspirado en el Cosmos"
    ],
    shippingInfo: "Envío estándar (3-5 días hábiles). Envío express disponible (1-2 días hábiles). Devoluciones gratuitas en 30 días.",
    images: [
      { id: 1, src: "placeholder_cosmic_main.jpg", alt: "Vista frontal de la remera Explorador Cósmico" },
      { id: 2, src: "placeholder_cosmic_detail.jpg", alt: "Detalle del estampado de la remera Explorador Cósmico" },
      { id: 3, src: "placeholder_cosmic_back.jpg", alt: "Vista trasera de la remera Explorador Cósmico" },
      { id: 4, src: "placeholder_cosmic_model.jpg", alt: "Modelo vistiendo la remera Explorador Cósmico" },
    ],
    rating: 4.8,
    reviewsCount: 125,
    category: "Espacio Profundo",
    tags: ["Cosmos", "Galaxias", "Premium", "Algodón Orgánico"],
    availableSizes: ["S", "M", "L", "XL", "XXL"],
    availableColors: ["Negro Estelar", "Azul Nebulosa", "Gris Cometa"],
    stock: 15,
  };
  
  const reviews = [
    { id: 1, author: "Alex R.", rating: 5, date: "2025-04-20", comment: "¡Increíble calidad y el diseño es espectacular! Se siente muy cómoda." },
    { id: 2, author: "Viajero Estelar", rating: 4, date: "2025-04-15", comment: "Muy buena remera, el estampado es nítido. Tardó un poco el envío pero valió la pena." },
    { id: 3, author: "Luna Love", rating: 5, date: "2025-04-10", comment: "Me encanta, es mi nueva remera favorita. ¡El algodón orgánico se siente genial!" },
  ];

  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedSize, setSelectedSize] = useState(product.availableSizes[1]);
  const [selectedColor, setSelectedColor] = useState(product.availableColors[0]);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleWishlistToggle = () => setIsWishlisted(!isWishlisted);

  if (!product) {
    return <div className="container mx-auto text-center py-20">Producto no encontrado.</div>;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Button variant="outline" asChild className="mb-8 outline-cta-button hover:bg-primary/10 rounded-full">
          <Link to="/tienda"><ChevronLeft size={18} className="mr-1.5" /> Volver a la Tienda</Link>
        </Button>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
          <motion.div initial={{ opacity:0, x:-30 }} animate={{ opacity:1, x:0 }} transition={{ duration:0.6, delay:0.1 }}>
            <div className="aspect-[4/5] rounded-xl overflow-hidden glassmorphism-card p-2 mb-4 relative">
              <img  src={selectedImage.src} alt={selectedImage.alt} className="w-full h-full object-cover rounded-lg transition-all duration-300 ease-in-out" />
              <Badge variant="outline" className="absolute top-4 left-4 bg-background/70 backdrop-blur-sm text-xs border-primary/30 text-primary/90">
                {product.category}
              </Badge>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((img) => (
                <button
                  key={img.id}
                  onClick={() => setSelectedImage(img)}
                  className={`aspect-square rounded-md overflow-hidden border-2 transition-all duration-200 subtle-glow-hover
                              ${selectedImage.id === img.id ? "border-primary ring-2 ring-primary/50" : "border-border/50 hover:border-primary/70"}`}
                >
                  <img  src={img.src} alt={`Thumbnail ${img.alt}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity:0, x:30 }} animate={{ opacity:1, x:0 }} transition={{ duration:0.6, delay:0.2 }} className="space-y-5">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold font-['Orbitron'] text-foreground mb-1.5">{product.name}</h1>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className={i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground/40"} />
                  ))}
                  <span className="text-sm text-muted-foreground">({product.reviewsCount} reseñas)</span>
                </div>
                 {product.stock > 0 && product.stock < 20 && (
                  <Badge variant="destructive" className="text-xs animate-pulse font-semibold">¡Últimas {product.stock} unidades!</Badge>
                )}
                {product.stock === 0 && (
                   <Badge variant="outline" className="text-xs border-destructive/50 text-destructive font-semibold">AGOTADO</Badge>
                )}
              </div>
              <div className="flex items-baseline gap-2">
                <p className="text-3xl font-bold text-primary">${product.price}</p>
                {product.originalPrice && (
                  <p className="text-lg text-muted-foreground line-through">${product.originalPrice}</p>
                )}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="size-selector" className="text-xs font-medium text-muted-foreground">TALLA:</Label>
                <Select value={selectedSize} onValueChange={setSelectedSize}>
                  <SelectTrigger id="size-selector" className="w-full bg-input/70 rounded-md text-sm">
                    <SelectValue placeholder="Selecciona talla" />
                  </SelectTrigger>
                  <SelectContent>
                    {product.availableSizes.map(size => (
                      <SelectItem key={size} value={size}>{size}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="color-selector" className="text-xs font-medium text-muted-foreground">COLOR:</Label>
                <Select value={selectedColor} onValueChange={setSelectedColor}>
                  <SelectTrigger id="color-selector" className="w-full bg-input/70 rounded-md text-sm">
                    <SelectValue placeholder="Selecciona color" />
                  </SelectTrigger>
                  <SelectContent>
                    {product.availableColors.map(color => (
                      <SelectItem key={color} value={color}>{color}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <Label htmlFor="quantity" className="text-xs font-medium text-muted-foreground">CANTIDAD:</Label>
              <div className="flex items-center border border-border rounded-md">
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-r-none" onClick={() => setQuantity(q => Math.max(1, q - 1))}><Minus size={14}/></Button>
                <Input type="number" id="quantity" value={quantity} readOnly className="h-9 w-12 text-center border-y-0 border-x bg-transparent text-sm focus-visible:ring-0 focus-visible:ring-offset-0"/>
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-l-none" onClick={() => setQuantity(q => q + 1)}><Plus size={14}/></Button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-3">
              <Button size="lg" className="cta-button flex-1 text-base rounded-md py-3" disabled={product.stock === 0}>
                <ShoppingCart size={18} className="mr-2" /> {product.stock === 0 ? "Agotado" : "Añadir al Carrito"}
              </Button>
              <Button 
                size="icon" 
                variant="outline" 
                className={`outline-cta-button p-3 rounded-md ${isWishlisted ? 'bg-primary/20 border-primary text-primary' : ''}`}
                onClick={handleWishlistToggle}
                aria-label="Añadir a lista de deseos"
              >
                <Heart size={20} className={isWishlisted ? "fill-primary" : ""} />
              </Button>
               <Button size="icon" variant="outline" className="outline-cta-button p-3 rounded-md" aria-label="Compartir producto">
                <Share2 size={20} />
              </Button>
            </div>

            <div className="space-y-2 pt-4 border-t border-border/30 text-xs">
              <div className="flex items-center gap-2 text-muted-foreground"><Zap size={14} className="text-primary" /><span>Diseño exclusivo Galáctic Worldd.</span></div>
              <div className="flex items-center gap-2 text-muted-foreground"><ShieldCheck size={14} className="text-green-400" /><span>Materiales de alta calidad y durabilidad.</span></div>
              <div className="flex items-center gap-2 text-muted-foreground"><Ruler size={14} className="text-sky-400" /><span>Consulta la <Link to="/guia-tallas" className="underline hover:text-primary">Guía de Tallas</Link>.</span></div>
              <div className="flex items-center gap-2 text-muted-foreground"><Package size={14} className="text-orange-400" /><span>Envíos rápidos y seguros a todo el cosmos.</span></div>
            </div>
            
            <div className="flex flex-wrap gap-1.5">
              {product.tags.map(tag => (
                <Badge key={tag} variant="outline" className="text-[10px] border-primary/20 text-primary/70 bg-primary/5 px-1.5 py-0.5">{tag}</Badge>
              ))}
            </div>
          </motion.div>
        </div>

        <Tabs defaultValue="description" className="mt-16">
          <TabsList className="grid w-full grid-cols-3 md:w-1/2 lg:w-1/3 mx-auto bg-input/50 rounded-lg">
            <TabsTrigger value="description">Descripción</TabsTrigger>
            <TabsTrigger value="details">Detalles</TabsTrigger>
            <TabsTrigger value="reviews">Reseñas ({product.reviewsCount})</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="mt-6 glassmorphism-card p-6 rounded-lg text-sm">
            <h3 className="font-semibold text-lg mb-3 font-['Orbitron']">Descripción Cósmica</h3>
            <p className="text-foreground/90 leading-relaxed whitespace-pre-line">{product.description}</p>
          </TabsContent>
          <TabsContent value="details" className="mt-6 glassmorphism-card p-6 rounded-lg text-sm">
            <h3 className="font-semibold text-lg mb-4 font-['Orbitron']">Especificaciones Técnicas</h3>
            <ul className="space-y-2 list-disc list-inside text-foreground/90">
              {product.details.map((detail, i) => <li key={i}>{detail}</li>)}
            </ul>
            <h4 className="font-semibold text-md mt-6 mb-2 font-['Orbitron']">Información de Envío</h4>
            <p className="text-foreground/90">{product.shippingInfo}</p>
          </TabsContent>
          <TabsContent value="reviews" className="mt-6 glassmorphism-card p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-6 font-['Orbitron']">Opiniones de Otros Exploradores</h3>
            <div className="space-y-6 mb-8">
              {reviews.map(review => (
                <div key={review.id} className="pb-4 border-b border-border/30 last:border-b-0">
                  <div className="flex items-center mb-1.5">
                    <div className="flex items-center mr-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className={i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground/40"} />
                      ))}
                    </div>
                    <h4 className="font-semibold text-sm text-foreground mr-2">{review.author}</h4>
                    <span className="text-xs text-muted-foreground">{review.date}</span>
                  </div>
                  <p className="text-sm text-foreground/80">{review.comment}</p>
                </div>
              ))}
            </div>
            <h4 className="font-semibold text-md mb-3 font-['Orbitron']">Deja tu Propia Reseña Cósmica</h4>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="Tu nombre estelar" className="bg-input/70 text-sm"/>
                <Select> 
                  <SelectTrigger className="bg-input/70 text-sm"><SelectValue placeholder="Tu valoración (1-5 estrellas)"/></SelectTrigger>
                  <SelectContent>
                    {[1,2,3,4,5].map(s => <SelectItem key={s} value={String(s)}>{s} Estrella{s > 1 ? 's': ''}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <Textarea placeholder="Escribe tu reseña aquí..." rows={4} className="bg-input/70 text-sm"/>
              <Button type="submit" className="cta-button">Enviar Reseña</Button>
            </form>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default ProductPage;
