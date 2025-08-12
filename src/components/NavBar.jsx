// components/Header.js

import Image from 'next/image';
import Link from 'next/link';

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
  return (
    <header className="w-full py-5 bg-white shadow-sm fixed z-30">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-4">
        {/* Left Navigation Links */}
          <div className="flex flex-col items-center mx-12 filter drop-shadow-[3px_3px_3px_rgba(0,0,0,0.1)]">
         
          <Link href="/" className="font-logo text-6xl text-gray-800">
            <Image src="/assets/epe.png" alt="Energy Process Equipments (EPE)" height={120} width={360}/>
          </Link>
        </div>

        <ul className="flex items-center gap-12">
          {navLinks.left.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className=" font-light uppercase tracking-wider text-gray-600 hover:text-black transition-colors duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Logo */}
      
      
      </nav>
    </header>
  );
};

export default NavBar;