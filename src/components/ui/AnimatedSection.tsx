"use client";

import { motion } from "framer-motion";

export function AnimatedSection({ children }: { children: React.ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="w-full py-12 md:py-24 lg:py-32"
    >
      {children}
    </motion.section>
  );
}
