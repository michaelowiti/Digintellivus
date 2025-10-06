// src/components/Header.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAIHover, setIsAIHover] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const aiServices = [
    "AI Consulting",
    "Chatbot Development",
    " ⚖️AI Compliance & Governance",
    "AI thought Leadership",
    "Natural Language Processing",
    "Intelligent Automation",
  ];

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'AI', path: '/AI', hasDropdown: true },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },    
    { name: 'Who We Help', path: '/who-we-help' },
    { name: 'Contact', path: '/contactUs' },
  ];

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo / Brand */}
        <Link href="/" className="text-2xl font-bold text-indigo-600">
          Digintellivus
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 font-medium text-gray-700 relative">
          {navLinks.map(link => (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => link.hasDropdown && setIsAIHover(true)}
              onMouseLeave={() => link.hasDropdown && setIsAIHover(false)}
            >
              <Link
                href={link.path}
                className="hover:text-indigo-500 transition-colors"
              >
                {link.name}
              </Link>

              {/* AI Dropdown */}
              {link.hasDropdown && isAIHover && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-50">
                  <h4 className="text-lg font-semibold mb-2">AI Services</h4>
                  <ul className="space-y-1">
                    {aiServices.map((service, idx) => (
                      <li
                        key={idx}
                        className="hover:bg-indigo-50 cursor-pointer px-2 py-1 rounded transition"
                      >
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            {isOpen ? <HiOutlineX className="h-6 w-6" /> : <HiOutlineMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-2 px-6 py-4">
            {navLinks.map(link => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className="block py-2 text-gray-700 font-medium hover:text-indigo-500"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
