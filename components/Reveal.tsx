"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/* Antes usaba whileInView (IntersectionObserver): en algunos navegadores/casos
   el detector nunca disparaba y el contenido se quedaba en opacity:0 para
   siempre, secciones enteras en negro. Ahora anima al montar, sin depender
   de ningún observer — se pierde el efecto "aparece al hacer scroll" pero
   el contenido SIEMPRE es visible. */
export function Reveal({
  children,
  delay = 0,
  y = 16,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: Math.min(delay, 0.6), ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
