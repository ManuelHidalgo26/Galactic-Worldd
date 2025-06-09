
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider"; 
import { Search, ListFilter, X, Palette, Shirt, Tag as TagIcon, Star, Zap, Heart, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ProductItemCard = ({ id, name, price, imageSrc, category, onWishlistClick }) => (
  <motion.div 
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.3 }}
    className="glassmorphism-card overflow-hidden group product-card-hover flex flex-col relative"
  >
    <button 
        onClick={() => onWishlistClick(id)}
        className="absolute top-3 right-3 z-10 p-2 bg-card/50 hover:bg-primary/20 rounded-full transition-colors duration-200"
        aria-label="Añadir a lista de deseos"
      >
        <Heart size={18} className="text-foreground/70 hover:text-red-500 hover:fill-red-500/30" />
    </button>
    <Link to={`/tienda/${id}`} className="block flex-grow flex flex-col">
      <div className="aspect-[3/4] bg-muted/30 overflow-hidden">
        <img 
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          alt={name}
         src="https://images.unsplash.com/photo-1582897631533-1e85a72cb821" />
      </div>
      <div className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <span className="text-xs text-primary font-medium mb-1 block uppercase tracking-wider">{category}</span>
          <h3 className="text-md font-semibold text-foreground mb-1 truncate group-hover:text-primary transition-colors">{name}</h3>
        </div>
        <div className="mt-2">
          <p className="text-primary font-bold text-lg">${price}</p>
        </div>
      </div>
    </Link>
    <div className="p-4 border-t border-border/30">
      <Button className="w-full cta-button text-sm py-2.5">
        <Eye size={16} className="mr-2"/> Ver Producto
      </Button>
    </div>
  </motion.div>
);


const ShopPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 100]);

  const handleWishlistClick = (productId) => {
    console.log(`Producto ${productId} añadido/quitado de la lista de deseos en ShopPage`);
  };

  const allProducts = [
    { id: "cosmic-explorer", name: "Explorador Cósmico", price: "29.99", imageSrc: "placeholder_cosmic.jpg", category: "Espacio", color: "Negro", size: "M", rating: 4.5, new: true },
    { id: "alien-vortex", name: "Vórtice Alienígena", price: "32.50", imageSrc: "placeholder_alien.jpg", category: "Aliens", color: "Azul Oscuro", size: "L", rating: 4.8 },
    { id: "galaxy-car", name: "Auto Galáctico", price: "28.00", imageSrc: "placeholder_galaxy_car.jpg", category: "Vehículos", color: "Gris", size: "S", rating: 4.2 },
    { id: "nebula-dream", name: "Sueño Nebular", price: "35.00", imageSrc: "placeholder_nebula.jpg", category: "Abstracto", color: "Multicolor", size: "XL", rating: 4.9, new: true },
    { id: "rocket-launch", name: "Despegue Cohete", price: "30.00", imageSrc: "placeholder_rocket.jpg", category: "Espacio", color: "Blanco", size: "M", rating: 4.0 },
    { id: "planet-ring", name: "Anillos Planetarios", price: "31.00", imageSrc: "placeholder_planet_ring.jpg", category: "Planetas", color: "Negro", size: "L", rating: 4.6 },
    { id: "star-cluster", name: "Cúmulo Estelar", price: "27.50", imageSrc: "placeholder_star_cluster.jpg", category: "Estrellas", color: "Azul Noche", size: "M", rating: 4.3 },
    { id: "moon-phases", name: "Fases Lunares", price: "29.00", imageSrc: "placeholder_moon.jpg", category: "Luna", color: "Gris Oscuro", size: "S", rating: 4.7, new: false },
    { id: "deep-space-odyssey", name: "Odisea Espacio Profundo", price: "38.00", imageSrc: "placeholder_odyssey.jpg", category: "Espacio", color: "Negro", size: "XL", rating: 4.9 },
    { id: "constellation-map", name: "Mapa Constelaciones", price: "26.50", imageSrc: "placeholder_constellation.jpg", category: "Estrellas", color: "Blanco", size: "S", rating: 4.1, new: true },
  ];

  const filteredProducts = allProducts.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    parseFloat(product.price) >= priceRange[0] &&
    parseFloat(product.price) <= priceRange[1]
  );
  
  const categories = ["Todas", "Espacio", "Aliens", "Vehículos", "Abstracto", "Planetas", "Estrellas", "Luna"];
  const colors = ["Todos", "Negro", "Azul Oscuro", "Gris", "Multicolor", "Blanco", "Azul Noche"];
  const sizes = ["Todos", "XS", "S", "M", "L", "XL", "XXL"];
  const sortOptions = [
    { value: "relevant", label: "Relevancia", icon: <ListFilter size={16} className="mr-2"/> },
    { value: "price_asc", label: "Precio: Bajo a Alto", icon: <ListFilter size={16} className="mr-2"/>},
    { value: "price_desc", label: "Precio: Alto a Bajo", icon: <ListFilter size={16} className="mr-2"/>},
    { value: "newest", label: "Más Nuevos", icon: <Zap size={16} className="mr-2"/>},
    { value: "rating", label: "Mejor Valorados", icon: <Star size={16} className="mr-2"/>},
  ];


  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-black mb-3 font-['Orbitron'] hero-text-shadow">Nuestra Colección Galáctica</h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">Encuentra la remera perfecta para tu próxima aventura interestelar.</p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-8">
        <AnimatePresence>
        {(filtersOpen || window.innerWidth >= 1024) && (
          <motion.aside 
            key="filters-sidebar"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50, transition: { duration: 0.2 } }}
            transition={{ duration: 0.3 }}
            className="w-full lg:w-1/4 xl:w-1/5 space-y-6 p-6 glassmorphism-card self-start rounded-lg"
          >
            <div className="flex justify-between items-center lg:hidden">
              <h2 className="text-xl font-semibold font-['Orbitron']">Filtros</h2>
              <Button variant="ghost" size="icon" onClick={() => setFiltersOpen(false)}>
                <X size={20} />
              </Button>
            </div>
            
            <div>
              <Label htmlFor="search-product" className="block text-sm font-medium text-foreground mb-1.5">Buscar Producto</Label>
              <div className="relative">
                <Input 
                  type="text" 
                  id="search-product" 
                  placeholder="Nombre de remera..." 
                  className="pl-10 bg-input/80 text-foreground placeholder:text-muted-foreground/70 rounded-md text-sm" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
            </div>

            <FilterGroup title="Categorías" icon={<TagIcon size={18} className="mr-2"/>}>
              {categories.map(cat => (
                <CheckboxItem key={cat} id={`cat-${cat}`} label={cat} />
              ))}
            </FilterGroup>

            <FilterGroup title="Color" icon={<Palette size={18} className="mr-2"/>}>
              {colors.map(col => (
                <CheckboxItem key={col} id={`col-${col}`} label={col} />
              ))}
            </FilterGroup>
            
            <FilterGroup title="Talla" icon={<Shirt size={18} className="mr-2"/>}>
              <div className="flex flex-wrap gap-2">
                {sizes.map(size => (
                  <Button key={size} variant="outline" size="sm" className="text-xs bg-input/50 hover:bg-primary/10 hover:border-primary rounded-md">
                    {size}
                  </Button>
                ))}
              </div>
            </FilterGroup>

            <div>
              <Label className="block text-sm font-medium text-foreground mb-2">Rango de Precio</Label>
              <Slider
                defaultValue={[0,100]}
                min={0}
                max={100}
                step={5}
                value={priceRange}
                onValueChange={setPriceRange}
                className="my-3"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
            
            <Button variant="outline" className="w-full outline-cta-button rounded-md">Limpiar Filtros</Button>

          </motion.aside>
        )}
        </AnimatePresence>

        <main className="w-full lg:w-3/4 xl:w-4/5">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
            <Button variant="outline" className="lg:hidden outline-cta-button rounded-md w-full sm:w-auto" onClick={() => setFiltersOpen(true)}>
              <ListFilter size={18} className="mr-2"/> Mostrar Filtros
            </Button>
            <p className="text-sm text-muted-foreground hidden lg:block">{filteredProducts.length} productos encontrados</p>
            <Select defaultValue="relevant">
              <SelectTrigger className="w-full sm:w-[220px] bg-input/80 text-sm rounded-md">
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map(opt => (
                  <SelectItem key={opt.value} value={opt.value} className="flex items-center">
                    {opt.icon} {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {filteredProducts.length > 0 ? (
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
              {filteredProducts.map((product) => (
                <ProductItemCard key={product.id} {...product} onWishlistClick={handleWishlistClick} />
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-16 glassmorphism-card rounded-lg">
              <img  src="/empty-search.svg" alt="No se encontraron productos con forma de planeta triste" class="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 text-muted-foreground opacity-70" src="https://images.unsplash.com/photo-1665218627423-47e531284a4c" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Sin Resultados Cósmicos</h3>
              <p className="text-muted-foreground">Intenta ajustar tus filtros o términos de búsqueda para encontrar tu próxima remera estelar.</p>
            </div>
          )}

          <div className="mt-12 flex justify-center">
            <Button variant="outline" className="outline-cta-button mx-1 rounded-md text-xs px-3 py-1.5">Anterior</Button>
            <Button variant="outline" className="outline-cta-button mx-1 rounded-md text-xs px-3 py-1.5 bg-primary/10">1</Button>
            <Button variant="ghost" className="mx-1 rounded-md text-xs px-3 py-1.5 hover:bg-primary/10">2</Button>
            <Button variant="ghost" className="mx-1 rounded-md text-xs px-3 py-1.5 hover:bg-primary/10">3</Button>
            <Button variant="outline" className="outline-cta-button mx-1 rounded-md text-xs px-3 py-1.5">Siguiente</Button>
          </div>
        </main>
      </div>
    </div>
  );
};

const FilterGroup = ({ title, icon, children }) => (
  <div className="border-b border-border/30 pb-4">
    <h3 className="text-md font-semibold text-foreground mb-3 flex items-center">
      {icon} {title}
    </h3>
    <div className="space-y-1.5">
      {children}
    </div>
  </div>
);

const CheckboxItem = ({ id, label }) => (
  <div className="flex items-center space-x-2">
    <Checkbox id={id} className="data-[state=checked]:bg-primary data-[state=checked]:border-primary rounded-[4px] border-muted-foreground/50"/>
    <Label htmlFor={id} className="text-xs font-normal text-muted-foreground hover:text-foreground cursor-pointer">
      {label}
    </Label>
  </div>
);

export default ShopPage;
