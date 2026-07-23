'use client';

import Link from 'next/link';
import { FiGithub, FiLinkedin, FiYoutube, FiInstagram } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-dark-black text-cream border-t border-warm-gold py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-3 text-warm-gold">MW</h3>
            <p className="text-light-gray text-sm leading-relaxed">
              Filmmaker, 3D Artist, Photographer & Sound Designer crafting visual stories.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4 text-warm-gold">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-light-gray hover:text-warm-gold transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-light-gray hover:text-warm-gold transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-light-gray hover:text-warm-gold transition-colors text-sm">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-light-gray hover:text-warm-gold transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4 text-warm-gold">Follow</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-light-gray hover:text-warm-gold transition-colors text-xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiYoutube />
              </a>
              <a
                href="#"
                className="text-light-gray hover:text-warm-gold transition-colors text-xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiInstagram />
              </a>
              <a
                href="#"
                className="text-light-gray hover:text-warm-gold transition-colors text-xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiLinkedin />
              </a>
              <a
                href="#"
                className="text-light-gray hover:text-warm-gold transition-colors text-xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-warm-gold my-8"></div>

        {/* Copyright */}
        <div className="text-center text-light-gray text-xs uppercase tracking-widest">
          <p>&copy; 2024 Maximilian Wittwer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
