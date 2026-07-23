'use client';

import { motion } from 'framer-motion';

interface SectionHeadlineProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export default function SectionHeadline({
  eyebrow,
  title,
  description,
}: SectionHeadlineProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: '-100px' }}
      className="mb-16 text-center"
    >
      {eyebrow && (
        <p className="text-warm-gold font-serif text-lg tracking-widest uppercase mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-dark-black">
        {title}
      </h2>
      {description && (
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
