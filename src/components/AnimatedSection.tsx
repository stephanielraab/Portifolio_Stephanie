"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { reveal } from "@/lib/animations";

type Props = {
  children: ReactNode;
};

export function AnimatedSection({ children }: Props) {
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
