import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A modern e-commerce platform with real-time inventory management, user authentication, and payment integration",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Web App",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com",
    link: "https://demo.com"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A responsive portfolio website with dark mode, animations, and modern design principles",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Frontend",
    technologies: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    github: "https://github.com"
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration features",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Web App",
    technologies: ["React", "Firebase", "Material-UI", "Redux"],
    link: "https://demo.com"
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "A weather dashboard showing real-time weather data with beautiful visualizations",
    image: "https://images.unsplash.com/photo-1592210454319-9046a7b5d9c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Frontend",
    technologies: ["React", "OpenWeather API", "Chart.js", "Tailwind"],
    github: "https://github.com",
    link: "https://demo.com"
  },
  {
    id: 5,
    title: "Social Media Dashboard",
    description: "A comprehensive social media analytics dashboard with real-time data tracking",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Web App",
    technologies: ["React", "Node.js", "PostgreSQL", "D3.js"],
    github: "https://github.com"
  },
  {
    id: 6,
    title: "Recipe Finder App",
    description: "A recipe finder application with search functionality and detailed recipe information",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Frontend",
    technologies: ["React", "Spoonacular API", "Tailwind", "Framer Motion"],
    link: "https://demo.com"
  }
];

const categories = ["All", "Web App", "Frontend", "Backend"];

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = projects.filter(project => 
    selectedCategory === "All" ? true : project.category === selectedCategory
  );

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50 via-secondary-50 to-accent-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 opacity-50" />
      
      <div className="container mx-auto relative">
        <motion.h2 
          className="section-title bg-clip-text text-transparent bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        
        <div className="flex justify-center mb-12 space-x-4">
          {categories.map(category => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map(project => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="project-card group relative overflow-hidden"
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              {/* Hover overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  scale: hoveredProject === project.id ? 1.1 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
              
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <motion.span
                      key={tech}
                      className="px-2 py-1 text-sm rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900 text-primary-700 dark:text-primary-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                      whileHover={{ scale: 1.1, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      GitHub
                    </motion.a>
                  )}
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary-600 hover:text-secondary-700 dark:text-secondary-400 dark:hover:text-secondary-300"
                      whileHover={{ scale: 1.1, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 