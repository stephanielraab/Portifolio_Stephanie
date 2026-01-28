"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

interface SectionProps {
  id: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({
  id,
  title,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 ${className}`}
    >
      <div className="max-w-6xl mx-auto px-6 scroll-mt-16 md:scroll-mt-24">
        {title && (
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-brand-text"
          >
            {title}
          </motion.h2>
        )}

        {children}
      </div>
    </section>
  );
}
