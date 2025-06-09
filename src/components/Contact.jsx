
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";

const ContactSection = () => {
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
    <section id="contact" className="section-padding bg-muted/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Contáctanos</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              ¿Tienes alguna pregunta o necesitas ayuda? Estamos aquí para asistirte.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            <motion.div variants={itemVariants}>
              <ContactInfo />
            </motion.div>

            <motion.div variants={itemVariants}>
              <ContactForm />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
