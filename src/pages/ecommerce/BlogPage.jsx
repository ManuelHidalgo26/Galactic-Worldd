
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CalendarDays, UserCircle, Tag as TagIcon, ArrowRight } from "lucide-react";

const BlogPostCard = ({ title, excerpt, author, date, category, imageSrc, slug, delay }) => (
  <motion.article
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay }}
    className="glassmorphism-card overflow-hidden group product-card-hover flex flex-col"
  >
    <Link to={`/blog/${slug}`} className="block">
      <div className="aspect-video bg-muted/50 overflow-hidden">
        <img 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          alt={title}
         src="https://images.unsplash.com/photo-1504983875-d3b163aba9e6" />
      </div>
      <div className="p-5 md:p-6 flex-grow flex flex-col">
        <div>
          <div className="flex items-center text-xs text-muted-foreground mb-2">
            <div className="flex items-center mr-3"><CalendarDays size={14} className="mr-1 text-primary/70"/> {date}</div>
            <div className="flex items-center"><UserCircle size={14} className="mr-1 text-primary/70"/> {author}</div>
          </div>
          <h2 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{title}</h2>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">{excerpt}</p>
        </div>
        <div className="mt-auto flex justify-between items-center">
          <Button variant="link" className="p-0 text-primary hover:text-accent">
            Leer Más <ArrowRight size={16} className="ml-1.5"/>
          </Button>
          <div className="flex items-center text-xs text-primary/80 bg-primary/10 px-2 py-1 rounded-full">
            <TagIcon size={12} className="mr-1"/> {category}
          </div>
        </div>
      </div>
    </Link>
  </motion.article>
);

const BlogPage = () => {
  const blogPosts = [
    {
      slug: "secretos-del-universo-en-tu-remera",
      title: "Los Secretos del Universo Plasmados en Tu Remera",
      excerpt: "Descubre cómo nuestros diseñadores se inspiran en nebulosas, galaxias y fenómenos cósmicos para crear estampados únicos que cuentan historias.",
      author: "Dr. Cosmos",
      date: "15 Mayo, 2025",
      category: "Diseño",
      imageSrc: "placeholder_blog_design.jpg",
      delay: 0.1
    },
    {
      slug: "algodon-organico-moda-sostenible-galactica",
      title: "Algodón Orgánico: Moda Sostenible para Exploradores Galácticos",
      excerpt: "Conoce los beneficios del algodón orgánico y por qué elegimos materiales sostenibles para nuestras prendas, cuidando tanto tu piel como el planeta Tierra.",
      author: "Stella Nova",
      date: "10 Mayo, 2025",
      category: "Sostenibilidad",
      imageSrc: "placeholder_blog_cotton.jpg",
      delay: 0.2
    },
    {
      slug: "guia-estilo-combina-tus-remeras-cosmicas",
      title: "Guía de Estilo: Cómo Combinar tus Remeras Cósmicas",
      excerpt: "Te damos ideas y consejos para lucir tus remeras de Galáctic Worldd en cualquier ocasión, desde un look casual hasta uno más audaz para eventos especiales.",
      author: "Astro Fashionista",
      date: "05 Mayo, 2025",
      category: "Estilo",
      imageSrc: "placeholder_blog_style.jpg",
      delay: 0.3
    },
     {
      slug: "ultimas-tendencias-moda-espacial",
      title: "Últimas Tendencias en Moda Espacial: Lo que Veremos en 2025",
      excerpt: "Un vistazo a los colores, texturas y motivos que dominarán la moda inspirada en el espacio el próximo año. ¡Prepárate para despegar!",
      author: "Orion Observer",
      date: "01 Mayo, 2025",
      category: "Tendencias",
      imageSrc: "placeholder_blog_trends.jpg",
      delay: 0.4
    }
  ];

  return (
    <div className="bg-background text-foreground">
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="relative py-28 md:py-40 text-center bg-cover bg-center"
        style={{ background: "linear-gradient(rgba(10,10,15,0.8), rgba(10,10,15,0.95)), url('https://images.unsplash.com/photo-1506703719100-a0f3dc48c728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1 
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold font-['Orbitron'] mb-4 text-slate-50 hero-text-shadow"
          >
            Blog <span className="gradient-text-primary">Galáctico</span>
          </motion.h1>
          <motion.p 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto"
          >
            Explora nuestras últimas noticias, artículos de inspiración cósmica y consejos de estilo interestelar.
          </motion.p>
        </div>
      </motion.section>

      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogPostCard key={post.slug} {...post} />
            ))}
          </div>
          <div className="mt-16 text-center">
            <Button variant="outline" className="outline-cta-button border-2 text-base py-3 px-8 rounded-full">Cargar Más Artículos</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
