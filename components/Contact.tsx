"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to an API)
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
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
          Contact Us
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-semibold mb-6 text-text dark:text-white">
              Get in Touch
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-text dark:text-text-light font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-border-light dark:border-border-dark rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark bg-white dark:bg-background-dark text-text dark:text-white"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-text dark:text-text-light font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-border-light dark:border-border-dark rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark bg-white dark:bg-background-dark text-text dark:text-white"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-text dark:text-text-light font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 border border-border-light dark:border-border-dark rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark bg-white dark:bg-background-dark text-text dark:text-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded transition duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-semibold mb-6 text-text dark:text-white">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-primary dark:text-primary-dark mr-4" />
                <span className="text-text dark:text-text-light">
                  info@addege.com
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-primary dark:text-primary-dark mr-4" />
                <span className="text-text dark:text-text-light">
                  +1 (555) 123-4567
                </span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-primary dark:text-primary-dark mr-4" />
                <span className="text-text dark:text-text-light">
                  123 Tech Street, Innovation City, 12345
                </span>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4 text-text dark:text-white">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                {/* Add social media icons and links here */}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
