"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO, TechCorp",
    image: "/testimonial1.jpg",
    quote:
      "TechInnovate delivered an outstanding e-commerce platform that exceeded our expectations. Their expertise in React and Next.js resulted in a lightning-fast, user-friendly site that has significantly boosted our online sales.",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "CTO, AI Solutions",
    image: "/testimonial2.jpg",
    quote:
      "The AI-powered chatbot developed by TechInnovate has revolutionized our customer service. Their deep understanding of machine learning and natural language processing created a solution that truly understands and assists our customers.",
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "Founder, CryptoWallet",
    image: "/testimonial3.jpg",
    quote:
      "TechInnovate's expertise in Web3 and mobile app development was crucial in bringing our crypto wallet app to life. Their attention to security and user experience has made our app a leader in the blockchain space.",
  },
];
export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
        >
          Client Testimonials
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic">
                "{testimonial.quote}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
