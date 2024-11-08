"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, Database, Cpu, Globe, Zap } from "lucide-react";

const services = [
  {
    name: "React & Next.js Development",
    icon: Code,
    description: "Building modern, fast, and scalable web applications",
  },
  {
    name: "Mobile App Development",
    icon: Smartphone,
    description:
      "Creating native and cross-platform mobile apps for iOS and Android",
  },
  {
    name: "Node.js & Backend Services",
    icon: Database,
    description: "Developing robust and efficient server-side applications",
  },
  {
    name: "AI & Machine Learning",
    icon: Cpu,
    description: "Implementing intelligent solutions to solve complex problems",
  },
  {
    name: "Web3 & Blockchain",
    icon: Globe,
    description: "Building decentralized applications and smart contracts",
  },
  {
    name: "Performance Optimization",
    icon: Zap,
    description: "Enhancing application speed and efficiency",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 bg-secondary dark:bg-secondary-dark transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-text dark:text-white"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background-light dark:bg-background-dark rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300"
            >
              <service.icon className="w-12 h-12 text-primary dark:text-primary-dark mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-text dark:text-white">
                {service.name}
              </h3>
              <p className="text-text dark:text-text-light">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
