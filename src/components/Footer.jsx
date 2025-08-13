// components/Footer.js

import React from "react";
import { FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black px-6 lg:px-8">
      {/* Top Section */}
      <div className="relative">
        <div className="container max-w-7xl mx-auto py-9 md:py-16">
          <div className="grid gap-4 md:gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {/* Column 1: Brand and Description */}
            <div className="lg:col-span-2">
              <Link href="/" className="font-logo text-6xl text-gray-800 ">
                <Image
                  src="/assets/epe.png"
                  alt="Energy Process Equipments (EPE)"
                  height={120}
                  width={360}
                />
              </Link>
              <p className="text-gray-400 mt-4 max-w-xl">
                Energy Process Equipments (EPE) has been designing and
                manufacturing boilers for over 15 years, thus developing a
                reputation for producing reliable and long-life products. Since
                its inception on February 25, 1994, the company is catering to
                various requirements involving an assortment of specifications
                of boilers for diverse applications.
              </p>
            </div>

            {/* Column 2: Product Links */}
            <div className="mt-4">
              <div className="relative w-full max-w-2xl mx-auto mb-4">
                {/* Trapezoid shape */}
                <div className=" h-8 bg-[#DB251F] clip-trapezoid-footer"></div>

                {/* Text on top of the shape */}
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold  uppercase">
                 QUICK LINKS
                </div>
              </div>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                   Infrastructure
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Our Clients
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                  Industrires We Serve
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Services Links */}
            <div className="mt-4">
              <div className="relative w-full max-w-2xl mx-auto mb-4">
                {/* Trapezoid shape */}
                <div className=" h-8 bg-[#DB251F] clip-trapezoid-footer"></div>

                {/* Text on top of the shape */}
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold  uppercase">
                  Our Products
                </div>
              </div>

              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    IBR Boiler
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Small Industrial Boiler [SIB]
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Small Industrial Boiler [SIB]
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Hot Air Generators
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Section: Contact Info and Appointment */}
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-2 lg:px-4 ">
        {/* Contact Info (White background) */}
        <div className="bg-white text-black p-8 flex-grow w-full lg:w-3/4">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4">
              <div className="bg-gray-200 p-3 rounded-full">
                <FaPhoneAlt className="text-black h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold">Info Heading</p>
                <p className="text-gray-600">(021) 0125658958</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-gray-200 p-3 rounded-full">
                <FaEnvelope className="text-black h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold">Email Us:</p>
                <p className="text-gray-600">yourwebmail@h.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-gray-200 p-3 rounded-full">
                <FaClock className="text-black h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold">Opening Hours:</p>
                <p className="text-gray-600">Mon-Fri: 8am - 7pm</p>
              </div>
            </div>
          </div>
        </div>

        {/* Schedule Button (Orange background) */}
        <div className="bg-red-600 text-white flex items-center justify-center p-4 md:p-8 w-full lg:w-1/4">
          <button className="font-bold text-lg hover:opacity-90 transition-opacity">
            Schedule An Appointment
          </button>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="bg-black border-t border-gray-700">
        <div className="container mx-auto px-6 lg:px-8 py-6">
          <p className="text-center text-gray-500 text-sm">
            © Copyright 2024 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
