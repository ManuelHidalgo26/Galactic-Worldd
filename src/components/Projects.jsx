
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "Plataforma de comercio electrónico completa con carrito de compras, pagos y gestión de pedidos.",
      image: "ecommerce-platform",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 2,
      title: "Dashboard Analytics",
      description:
        "Panel de control interactivo para visualizar datos empresariales con gráficos y reportes personalizables.",
      image: "dashboard-analytics",
      tags: ["React", "D3.js", "Firebase", "Tailwind CSS"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 3,
      title: "Social Media App",
      description:
        "Aplicación de redes sociales con funciones de publicación, comentarios, likes y mensajería en tiempo real.",
      image: "social-media-app",
      tags: ["React", "Socket.io", "Express", "PostgreSQL"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "Sitio web de portfolio moderno y responsive con animaciones suaves y diseño atractivo.",
      image: "portfolio-website",
      tags: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
      demoLink: "#",
      codeLink: "#",
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mis <span className="gradient-text">Proyectos</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Una selección de mis trabajos más recientes y destacados
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <Card className="project-card h-full flex flex-col">
                  <div className="overflow-hidden h-56 relative">
                    <img  
                      alt={`Proyecto: ${project.title}`} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                     src="https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0" />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between mt-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-1"
                      asChild
                    >
                      <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                        <span>Código</span>
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="flex items-center gap-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      asChild
                    >
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <span>Demo</span>
                        <ExternalLink size={16} />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <Button
              variant="outline"
              className="border-blue-500 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/30"
              asChild
            >
              <a href="#" target="_blank" rel="noopener noreferrer">
                Ver más proyectos en GitHub
                <Github className="ml-2" size={16} />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
