
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, BookOpen, Briefcase, Calendar } from "lucide-react";

const About = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sobre <span className="gradient-text">Mí</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Desarrollador web apasionado por crear experiencias digitales excepcionales
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Soy un desarrollador web con más de 5 años de experiencia creando soluciones digitales atractivas y funcionales. Mi enfoque combina diseño estético con código limpio y eficiente para ofrecer experiencias de usuario excepcionales.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Me especializo en desarrollo frontend con React, pero también tengo experiencia en backend con Node.js. Disfruto resolviendo problemas complejos y aprendiendo nuevas tecnologías para mantenerme al día con las tendencias de la industria.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Cuando no estoy codificando, me gusta explorar nuevas tecnologías, contribuir a proyectos de código abierto y compartir conocimientos con la comunidad de desarrolladores.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                    <Briefcase className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Experiencia</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      +5 años desarrollando aplicaciones web
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg">
                    <BookOpen className="text-purple-600 dark:text-purple-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Educación</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Ingeniería en Sistemas Computacionales
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg">
                    <Award className="text-green-600 dark:text-green-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Certificaciones</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Frontend Masters, AWS Certified Developer
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-lg">
                    <Calendar className="text-amber-600 dark:text-amber-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Disponibilidad</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Disponible para proyectos freelance
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
