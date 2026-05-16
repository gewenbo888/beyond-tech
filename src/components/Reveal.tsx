"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

export default function Reveal({
  children, delay = 0, y = 16, className,
}: { children: ReactNode; delay?: number; y?: number; className?: string }) {
  const reduced = useReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >{children}</motion.div>
  );
}
