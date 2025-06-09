
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, Database, Layout, Server, Settings, Smartphone } from "lucide-react";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout className="text-blue-600 dark:text-blue-400" size={24} />,
      skills: [
        { name: "HTML5/CSS3", level: 95 },
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "React.js", level: 92 },
        { name: "Vue.js", level: 85 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Framer Motion", level: 80 },
      ],
    },
    {
      title: "Backend",
      icon: <Server className="text-purple-600 dark:text-purple-400" size={24} />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 88 },
        { name: "Python/Django", level: 75 },
        { name: "RESTful APIs", level: 90 },
        { name: "GraphQL", level: 78 },
      ],
    },
    {
      title: "Bases de Datos",
      icon: <Database className="text-green-600 dark:text-green-400" size={24} />,
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "Firebase", level: 88 },
        { name: "Redis", level: 70 },
      ],
    },
    {
      title: "Desarrollo Móvil",
      icon: <Smartphone className="text-amber-600 dark:text-amber-400" size={24} />,
      skills: [
        { name: "React Native", level: 82 },
        { name: "Flutter", level: 75 },
        { name: "Responsive Design", level: 95 },
      ],
    },
    {
      title: "DevOps",
      icon: <Settings className="text-red-600 dark:text-red-400" size={24} />,
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 78 },
        { name: "CI/CD", level: 75 },
        { name: "AWS", level: 80 },
      ],
    },
    {
      title: "Otros",
      icon: <Code className="text-indigo-600 dark:text-indigo-400" size={24} />,
      skills: [
        { name: "TypeScript", level: 85 },
        { name: "Testing (Jest, Cypress)", level: 80 },
        { name: "UI/UX Design", level: 75 },
        { name: "SEO", level: 78 },
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mis <span className="gradient-text">Habilidades</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Tecnologías y herramientas con las que trabajo
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-2 rounded-lg">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.2 + skillIndex * 0.1 }}
                          className="h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <div className="inline-flex flex-wrap justify-center gap-2">
              {[
                "JavaScript", "TypeScript", "React", "Node.js", "Express", 
                "MongoDB", "PostgreSQL", "HTML5", "CSS3", "Tailwind CSS", 
                "Git", "Docker", "AWS", "Firebase", "Redux", "GraphQL", 
                "Jest", "Cypress", "Webpack", "Vite"
              ].map((tech, index) => (
                <span key={index} className="skill-badge">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
