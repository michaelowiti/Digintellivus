

// src/components/Footer.tsx
'use client';

import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6 md:flex md:justify-between md:items-start">
        {/* Company Info */}
        <div className="mb-8 md:mb-0">
          <h2 className="text-2xl font-bold text-indigo-500">Digintellivus</h2>
          <p className="mt-2 text-gray-300 max-w-xs">
            Empowering businesses with intelligent digital solutions that drive growth and innovation.
          </p>
        </div>

        {/* Quick Links */}
        <div className="mb-8 md:mb-0">
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-indigo-400 transition-colors">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-indigo-400 transition-colors">About Us</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-indigo-400 transition-colors">Contact</a>
            </li>
            <li>
              <a href="/services" className="hover:text-indigo-400 transition-colors">Services</a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-2xl">
            <a href="#" aria-label="LinkedIn" className="hover:text-indigo-400">
              <FaLinkedin />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-indigo-400">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-indigo-400">
              <FaFacebook />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-indigo-400">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Digintellivus. All rights reserved.
      </div>
    </footer>
  );
}
