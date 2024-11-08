"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: 1,
    name: "E-commerce Platform",
    category: "web",
    image: "/project1.jpg",
    technologies: ["React", "Next.js", "Node.js"],
  },
  {
    id: 2,
    name: "AI-powered Chatbot",
    category: "ai",
    image: "/project2.jpg",
    technologies: ["Python", "TensorFlow", "NLP"],
  },
  {
    id: 3,
    name: "Crypto Wallet App",
    category: "mobile",
    image: "/project3.jpg",
    technologies: ["React Native", "Web3.js", "Ethereum"],
  },
  {
    id: 4,
    name: "Machine Learning Dashboard",
    category: "web",
    image: "/project4.jpg",
    technologies: ["React", "D3.js", "Python"],
  },
  {
    id: 5,
    name: "IoT Home Automation",
    category: "iot",
    image: "/project5.jpg",
    technologies: ["Node.js", "MQTT", "Raspberry Pi"],
  },
  {
    id: 6,
    name: "AR Product Visualization",
    category: "mobile",
    image: "/project6.jpg",
    technologies: ["Unity", "ARKit", "ARCore"],
  },
];

const categories = ["all", "web", "mobile", "ai", "iot"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section
      id="portfolio"
      className="py-20 bg-background-light dark:bg-background-dark transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-text dark:text-white"
        >
          Our Portfolio
        </motion.h2>
        <div className="flex justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`mx-2 px-4 py-2 rounded-full text-sm font-medium ${
                activeCategory === category
                  ? "bg-primary text-white dark:bg-primary-dark"
                  : "bg-secondary text-text dark:bg-secondary-dark dark:text-text-light hover:bg-primary hover:text-white dark:hover:bg-primary-dark"
              } transition duration-300`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        <AnimatePresence>
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-background-dark rounded-lg shadow-lg overflow-hidden"
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-text dark:text-white">
                    {project.name}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-secondary dark:bg-secondary-dark text-text dark:text-text-light px-2 py-1 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded transition duration-300">
                    View Project
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
