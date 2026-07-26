'use client';

import { useState } from 'react';
import SectionHeadline from '@/components/SectionHeadline';
import ProjectCard from '@/components/ProjectCard';
import Blob from '@/components/Blob';
import { motion } from 'framer-motion';

type Category = 'all' | 'video' | '3d' | 'photography' | 'sound';

const projects = [
  {
    id: 1,
    title: 'Corporate Event Film',
    category: 'video',
    categoryLabel: 'Video',
    description: 'High-end cinematography and editing for corporate event coverage',
    tags: ['Cinematography', 'Editing', '4K', 'Color Grading'],
    image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=600&h=400&fit=crop',
  },
  {
    id: 2,
    title: 'Blender Character Animation',
    category: '3d',
    categoryLabel: '3D Animation',
    description: 'Complex character rigging and animation for commercial project',
    tags: ['Blender', 'Rigging', 'Animation', 'Rendering'],
    image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=600&h=400&fit=crop',
  },
  {
    id: 3,
    title: 'Event Photography Series',
    category: 'photography',
    categoryLabel: 'Photography',
    description: 'Comprehensive event coverage with professional post-processing',
    tags: ['Photography', 'Composition', 'Post-Processing', 'Events'],
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop',
  },
  {
    id: 4,
    title: 'Pixar Animation Sound Design',
    category: 'sound',
    categoryLabel: 'Sound Design',
    description: 'Professional sound design for feature animation film',
    tags: ['Sound Design', 'Foley', 'Mixing', 'Audio Engineering'],
  },
  {
    id: 5,
    title: 'Image Video Production',
    category: 'video',
    categoryLabel: 'Video',
    description: 'Creative image video production for brand storytelling',
    tags: ['Cinematography', 'Storytelling', 'Branding', 'Post-Production'],
    image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=600&h=400&fit=crop',
  },
  {
    id: 6,
    title: '3D Motion Graphics',
    category: '3d',
    categoryLabel: '3D Animation',
    description: 'Dynamic motion graphics and visual effects for video',
    tags: ['Motion Graphics', '3D', 'VFX', 'Blender'],
    image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=600&h=400&fit=crop',
  },
  {
    id: 7,
    title: 'Video Podcast Production',
    category: 'video',
    categoryLabel: 'Video',
    description: 'End-to-end podcast production including filming, editing, and sound',
    tags: ['Podcast', 'Editing', 'Audio', 'Production'],
  },
  {
    id: 8,
    title: 'Commercial Photography',
    category: 'photography',
    categoryLabel: 'Photography',
    description: 'Product and lifestyle photography for commercial campaigns',
    tags: ['Product Photography', 'Lighting', 'Styling', 'Editing'],
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop',
  },
];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const categories: { value: Category; label: string }[] = [
    { value: 'all', label: 'All Work' },
    { value: 'video', label: 'Video' },
    { value: '3d', label: '3D & Animation' },
    { value: 'photography', label: 'Photography' },
    { value: 'sound', label: 'Sound Design' },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-cream px-4 md:px-8 py-20">
        <Blob
          variant="lg"
          color="red"
          className="absolute -top-16 -right-24 opacity-20"
          rotation={-12}
        />
        <Blob
          variant="md"
          color="gold"
          className="absolute -bottom-16 left-0 opacity-20"
          rotation={18}
        />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="mb-12 flex flex-col gap-4">
            <span className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.35em] font-semibold text-accent-red">
              <span className="h-px w-10 bg-accent-red"></span>
              ISSUE 01 / EDITORIAL
            </span>
            <p className="text-base text-dark-black/70 max-w-2xl leading-relaxed">
              A bold showcase of cinematic storytelling, 3D movements, photography narratives, and sound design textures.
            </p>
          </div>

          <SectionHeadline
            eyebrow="Portfolio"
            title="Selected Works"
            description="A curated collection of creative projects spanning filmmaking, animation, photography, and sound design"
          />
        </div>
      </section>

      {/* Filter Section */}
      <section className="px-4 md:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-6 py-2 text-sm uppercase tracking-[0.4em] font-semibold transition-all duration-300 ${
                  activeCategory === cat.value
                    ? 'bg-dark-black text-cream shadow-[0_20px_60px_rgba(0,0,0,0.08)]'
                    : 'border border-dark-black text-dark-black hover:bg-accent-red hover:text-cream'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 md:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 auto-rows-max">
            {filteredProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                index={idx}
                title={project.title}
                category={project.categoryLabel}
                description={project.description}
                image={project.image}
                tags={project.tags}
              />
            ))}
          </div>
          <div className="mt-12 flex items-center justify-center gap-3">
            <span className="block h-0.5 w-24 bg-dark-black"></span>
            <span className="text-sm uppercase tracking-[0.35em] font-bold text-dark-black/70">issue inspired layout</span>
            <span className="block h-0.5 w-24 bg-dark-black"></span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-8 py-20 bg-accent-red text-cream">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl font-bold mb-6">Interested in Working Together?</h2>
            <p className="text-lg text-cream/90 mb-8">
              Let's discuss your project and how I can bring your vision to life.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-cream text-accent-red font-serif text-lg font-bold hover:bg-warm-gold transition-all duration-300"
            >
              Start a Project
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
