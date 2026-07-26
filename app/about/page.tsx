'use client';

import { motion } from 'framer-motion';
import SectionHeadline from '@/components/SectionHeadline';

const skills = [
  {
    category: 'Filmmaking',
    items: ['Event Cinematography', 'Image Videos', 'Podcast Production', 'Color Grading', 'Editing'],
  },
  {
    category: '3D & Animation',
    items: ['Blender Modeling', '3D Animation', 'VFX', 'Motion Graphics', 'Rendering'],
  },
  {
    category: 'Photography',
    items: ['Event Photography', 'Portrait', 'Composition', 'Post-Processing', 'Lighting'],
  },
  {
    category: 'Sound Design',
    items: ['Sound Design', 'Audio Editing', 'Foley', 'Mixing', 'Voice-Over Direction'],
  },
  {
    category: 'Design',
    items: ['UX Design', 'UI Design', 'Visual Identity', 'Web Design', 'Prototyping'],
  },
  {
    category: 'Technical',
    items: ['Adobe Suite', 'DaVinci Resolve', 'FFmpeg', 'Git', 'Web Technologies'],
  },
];

export default function About() {
  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="bg-cream px-4 md:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <SectionHeadline
            eyebrow="About Me"
            title="Creative Visionary"
            description="I transform ideas into compelling visual and audio experiences"
          />
        </div>
      </section>

      {/* Biography Section */}
      <section className="px-4 md:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-xl text-gray-700 leading-relaxed mb-6 font-light">
              I'm Maximilian Wittwer, a creative storyteller based in the intersection of film, 
              animation, and sound design. With experience across multiple disciplines, I bring a 
              comprehensive approach to creative projects.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-6 font-light">
              My journey spans event filmmaking and documentary work, 3D animation using Blender, 
              photography, and professional sound design—including the honor of sound designing a 
              feature Pixar animation film.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed font-light">
              I combine technical expertise with creative vision, backed by strong UX/UI design 
              fundamentals. Every project is approached with the philosophy that great work comes 
              from understanding both craft and audience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-4 md:px-8 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeadline
            title="Skills & Expertise"
            description="A comprehensive toolkit for creative execution"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true, margin: '-100px' }}
                className="p-6 border border-light-gray hover:border-warm-gold transition-colors"
              >
                <h3 className="font-serif text-xl font-bold mb-4 text-warm-gold">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, i) => (
                    <li
                      key={i}
                      className="text-gray-700 text-sm flex items-start"
                    >
                      <span className="inline-block w-1.5 h-1.5 bg-warm-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-8 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl font-bold mb-6">Ready to Collaborate?</h2>
            <p className="text-lg text-gray-600 mb-8">
              I'm always interested in working on meaningful projects. Let's create something extraordinary together.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-dark-black text-cream font-serif text-lg hover:bg-warm-gold hover:text-dark-black transition-all duration-300"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
