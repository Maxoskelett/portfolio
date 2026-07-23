'use client';

import { useState } from 'react';
import SectionHeadline from '@/components/SectionHeadline';
import { FiMail, FiLinkedin, FiYoutube, FiInstagram } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend service
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const socialLinks = [
    {
      icon: FiMail,
      label: 'Email',
      href: 'mailto:hello@maximilian-wittwer.com',
      color: 'hover:text-warm-gold',
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      href: '#',
      color: 'hover:text-warm-gold',
    },
    {
      icon: FiYoutube,
      label: 'YouTube',
      href: '#',
      color: 'hover:text-warm-gold',
    },
    {
      icon: FiInstagram,
      label: 'Instagram',
      href: '#',
      color: 'hover:text-warm-gold',
    },
  ];

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="bg-cream px-4 md:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <SectionHeadline
            eyebrow="Get in Touch"
            title="Let's Create Something Great"
            description="I'm always open to discussing new projects, creative ideas, or opportunities"
          />
        </div>
      </section>

      {/* Contact Grid */}
      <section className="px-4 md:px-8 py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="font-serif text-3xl font-bold mb-8">Send me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm uppercase tracking-widest font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-3 bg-transparent border-b-2 border-dark-black focus:border-warm-gold outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm uppercase tracking-widest font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-3 bg-transparent border-b-2 border-dark-black focus:border-warm-gold outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm uppercase tracking-widest font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-3 bg-transparent border-b-2 border-dark-black focus:border-warm-gold outline-none transition-colors"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label className="block text-sm uppercase tracking-widest font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-0 py-3 bg-transparent border-b-2 border-dark-black focus:border-warm-gold outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-dark-black text-cream font-serif text-lg hover:bg-warm-gold hover:text-dark-black transition-all duration-300"
                >
                  {submitted ? 'Message Sent! ✓' : 'Send Message'}
                </button>
              </div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* Email */}
            <div>
              <h4 className="font-serif text-xl font-bold mb-3 text-warm-gold">Email</h4>
              <a
                href="mailto:hello@maximilian-wittwer.com"
                className="text-lg text-gray-700 hover:text-warm-gold transition-colors"
              >
                hello@maximilian-wittwer.com
              </a>
            </div>

            {/* Phone */}
            <div>
              <h4 className="font-serif text-xl font-bold mb-3 text-warm-gold">Phone</h4>
              <a
                href="tel:+49123456789"
                className="text-lg text-gray-700 hover:text-warm-gold transition-colors"
              >
                +49 (0) 123 456 789
              </a>
            </div>

            {/* Location */}
            <div>
              <h4 className="font-serif text-xl font-bold mb-3 text-warm-gold">Location</h4>
              <p className="text-lg text-gray-700">
                Germany<br />
                Available for remote & on-site projects
              </p>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-serif text-xl font-bold mb-6 text-warm-gold">Follow</h4>
              <div className="flex gap-6">
                {socialLinks.map((link, idx) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={idx}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-3xl text-dark-black ${link.color} transition-colors`}
                      aria-label={link.label}
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Response Time */}
            <div className="border-t-2 border-light-gray pt-8">
              <p className="text-sm text-gray-600">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Usually responds within 24 hours
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-8 py-20 bg-warm-gold/10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl font-bold mb-6">Ready to Start?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Whether you have a specific project in mind or want to explore possibilities, I'm here to help.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
