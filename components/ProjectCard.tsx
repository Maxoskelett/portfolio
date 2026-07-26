'use client';

import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image?: string;
  tags: string[];
  links?: {
    demo?: string;
    github?: string;
  };
  index?: number;
}

export default function ProjectCard({
  title,
  category,
  description,
  image,
  tags,
  links,
  index = 0,
}: ProjectCardProps) {
  const rotations = [0, -2, 3, -1, 2];
  const rotation = rotations[index % rotations.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: (index % 2) * 0.1 }}
      viewport={{ once: true, margin: '-100px' }}
      className="group relative"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-accent-red/5 -skew-y-2" />
        <div className="relative bg-white border-2 border-dark-black p-6 hover:border-accent-red transition-all duration-300 hover:shadow-[0_25px_80px_rgba(0,0,0,0.08)]">
          {image && (
            <div className="mb-6 aspect-[16/11] bg-light-gray overflow-hidden relative rounded-[28px] border border-dark-black">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-accent-red opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </div>
          )}

          <div className="mb-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-dark-black text-cream text-xs uppercase tracking-widest font-bold rounded-full">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-red"></span>
              {category}
            </span>
          </div>

          <h3
            className="font-serif text-2xl font-bold mb-3 group-hover:text-accent-red transition-colors"
            style={{ transform: 'skewY(-1deg)' }}
          >
            {title}
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 border border-accent-red text-accent-red text-[0.7rem] uppercase tracking-[0.2em] rounded-full font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>

          {links && (
            <div className="flex flex-wrap gap-4 pt-4 border-t border-light-gray">
              {links.demo && (
                <a
                  href={links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent-red hover:text-dark-black transition-colors text-sm font-bold"
                >
                  <FiExternalLink size={16} /> View
                </a>
              )}
              {links.github && (
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent-red hover:text-dark-black transition-colors text-sm font-bold"
                >
                  <FiGithub size={16} /> Code
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
