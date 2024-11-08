"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
        >
          About Us
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <Image
              src="/team-photo.jpg"
              alt="Our Team"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="md:w-1/2 md:pl-12"
          >
            <h3 className="text-2xl font-semibold mb-4 text-pink-600 dark:text-pink-400">
              Our Mission
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              At TechInnovate, we are passionate about leveraging cutting-edge
              technologies to create innovative solutions that drive business
              growth and enhance user experiences. Our team of expert developers
              and designers work tirelessly to deliver high-quality applications
              that push the boundaries of what's possible in the digital world.
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>Expert team with diverse skills</li>
              <li>Commitment to continuous learning and innovation</li>
              <li>Focus on delivering measurable results for our clients</li>
              <li>Agile development methodology for faster time-to-market</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
