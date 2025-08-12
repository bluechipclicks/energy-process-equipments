"use client";
// components/ProductSlider.js

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// --- SLIDER DATA ---
// Replace with your actual product data
const products = [
  {
    name: "Solid Fuel Fired Package Steam Boiler",
    image: "/assets/products/solid-fuel-fired-package-steam-boiler.png", // Replace with a different image
  },
  {
    name: "Oil / Gas Fired Package Steam Boiler",
    image: "/assets/products/oil-gas-fired-packaged-steam-boiler.png", // Replace with a different image
  },

  {
    name: "Water Wall Membrane Steam Boiler",
    image:
      "/assets/products/coal-fired-water-wall-membrane-type-steam-boiler.png",
  },
];
const textVariants = {
  hidden: {
    y: "100%", // Start from below the view
    opacity: 0,
  },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.6, 0.01, 0.05, 0.95],
    },
  }),
};
const ProductSlider = () => {
  // State to track the currently active slide index
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    // Main container for the slider section
    <div className="relative w-full  flex flex-col items-center   overflow-hidden pb-16 ">
      {/* Swiper Component Container */}
      <div className="relative w-full max-w-xs mx-auto mb-12">
      {/* Trapezoid shape */}
      <div className=" h-10 bg-red-600 clip-trapezoid-product"></div>

      {/* Text on top of the shape */}
      <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg uppercase">
       Our Products
      </div>
    </div>
      <div className="w-full h-[60vh] max-w-7xl relative mb-6">
        <Swiper
          modules={[Navigation]}
          loop={true}
          spaceBetween={50}
          slidesPerView={1}
          // Connect custom navigation buttons
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          // Update active slide index on change
          onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
          className="h-full w-full"
        >
          {products.map((product, index) => (
            <SwiperSlide
              key={product.name}
              className="relative flex items-center justify-center"
            >
              {/* Animated Background Text */}
              <div className=" text-center flex items-center justify-center z-0 overflow-hidden">
                <motion.h1
                  className="text-4xl md:text-9xl font-extrabold text-gray-200/80 "
                  // Animate based on whether this slide is the active one
                  variants={textVariants}
                  initial="hidden"
                  animate={activeSlide === index ? "visible" : "hidden"}
                >
                  {product.name}
                </motion.h1>
              </div>

              {/* Product Image */}
              <div className="relative z-10 w-full flex items-center justify-center bottom-96">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={800}
                  height={650}
                  priority={index === 0} // Prioritize loading the first image
                  className="object-contain h-[490px]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Call-to-Action Buttons */}
      <div className=" z-20 flex items-center gap-4">
        <button className="bg-black text-white py-3 px-8 rounded text-lg uppercase font-medium hover:bg-black transition-colors duration-300">
          View All Products
        </button>
      
      </div>

      {/* Custom Navigation Buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-8 lg:right-12 z-20 flex flex-col gap-3">
        {/* Next Button */}
        <button className="swiper-button-next-custom cursor-pointer border border-gray-200/80 bg-white rounded-full w-11 h-11 flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors">
          <span className="text-xl">→</span>
        </button>
        {/* Previous Button */}
        <button className="swiper-button-prev-custom cursor-pointer bg-white rounded-full border border-gray-200/80 w-11 h-11 flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors">
          <span className="text-xl">←</span>
        </button>
      </div>
    </div>
  );
};

export default ProductSlider;
