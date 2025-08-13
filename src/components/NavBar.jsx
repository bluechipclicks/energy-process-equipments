// components/Header.js
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

// Navigation links data for easier mapping
const navLinks = {
  left: [
    { href: '/home', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/portfolio', label: 'Products' },
    { href: '/blog', label: 'Infrastructure' },
    { href: '/contact', label: 'Our Clients' },
  ],
};

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full py-5 bg-white shadow-sm fixed z-30">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 gap-4">
        {/* Logo */}
        <div className="flex flex-col items-center filter drop-shadow-[3px_3px_3px_rgba(0,0,0,0.1)]">
          <Link href="/" className="font-logo text-6xl text-gray-800">
            <Image src="/assets/epe.png" alt="Energy Process Equipments (EPE)" height={120} width={360} className=' h-10 md:h-14'/>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-12 mt-6">
          {navLinks.left.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-light uppercase tracking-wider text-gray-600 hover:text-black transition-colors duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Burger Icon for tablet and mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <FiMenu className="h-6 w-6 text-gray-600 mt-4" />
          </button>
        </div>

        {/* Mobile Menu (Slide-in from right) */}
        <div
          className={`md:hidden fixed top-0 right-0 h-full bg-white w-64 shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-end p-4">
            <button onClick={toggleMenu}>
              <FiX className="h-6 w-6 text-white bg-red-600 rounded-full p-2" />
            </button>
          </div>
          <ul className="flex flex-col gap-8 mt-8 px-6">
            {navLinks.left.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-light uppercase tracking-wider text-gray-600 hover:text-black transition-colors duration-300"
                  onClick={toggleMenu} // Close menu on link click
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;