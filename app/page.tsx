'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import Blob from '@/components/Blob';

export default function Home() {
  return (
    <section className="min-h-screen bg-cream pt-20 pb-20 px-4 md:px-8 relative overflow-hidden">
      {/* Decorative Blobs Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 opacity-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <Blob variant="lg" color="red" />
        </motion.div>
        <motion.div
          className="absolute -bottom-20 -left-20 opacity-15"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        >
          <Blob variant="lg" color="gold" />
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Asymmetric Hero Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-screen pt-20">
          {/* Left Content - Angewinkelt */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <p className="text-accent-red font-serif text-lg tracking-widest uppercase font-bold">
                ↳ Creative Vision
              </p>
            </motion.div>

            {/* Main Heading - Angewinkelt */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              style={{ transform: 'skewY(-2deg)' }}
            >
              <h1 className="font-serif text-6xl md:text-7xl font-bold leading-tight">
                Maximilian
                <br />
                <span className="text-accent-red">Wittwer</span>
              </h1>
            </motion.div>

            {/* Subtitle with tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-wrap gap-3"
            >
              {['Filmmaker', '3D Artist', 'Photographer', 'Sound Designer'].map(
                (tag, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 border-2 border-dark-black font-medium text-sm"
                  >
                    {tag}
                  </span>
                )
              )}
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg text-gray-700 leading-relaxed font-light max-w-md"
            >
              Transforming ideas into stunning visual and sonic experiences.
              Event cinema • 3D animation • Photography • Audio design
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex gap-4 pt-4"
            >
              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent-red text-cream font-serif font-bold hover:bg-accent-red-light transition-all duration-300 skew-x-[-10deg]"
              >
                View Work
                <FiArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-accent-red text-accent-red hover:bg-accent-red hover:text-cream transition-all duration-300"
              >
                Contact
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - Visual Element mit Blob */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative h-96 md:h-full flex items-center justify-center"
          >
            {/* Main Blob Container */}
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Animated Blob Background */}
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Blob variant="lg" color="red" />
              </motion.div>

              {/* Content inside blob */}
              <div className="relative z-10 text-center">
                <motion.p
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="font-serif text-lg font-bold text-dark-black mb-2"
                >
                  Creative
                </motion.p>
                <motion.p
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="font-serif text-sm text-gray-700"
                >
                  Storyteller
                </motion.p>
              </div>
            </div>

            {/* Floating accent blob */}
            <motion.div
              animate={{ x: [0, 20, 0], y: [0, 30, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-20 right-10 opacity-30"
            >
              <Blob variant="md" color="gold" />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-500 uppercase tracking-widest">↓ Scroll to explore</p>
        </motion.div>
      </div>
    </section>
  );
}
