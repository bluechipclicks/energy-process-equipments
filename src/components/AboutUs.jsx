"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import VerticalInfiniteSlider from "./VerticalSlider";

const AboutUs = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Animation for the first set of images and text
  const leftY = useTransform(scrollYProgress, [0, 0.2], ["0%", "-100%"]);
  const rightY = useTransform(scrollYProgress, [0, 0.2], ["0%", "100%"]);

  // Sliding door animation
  const leftX = useTransform(scrollYProgress, [0.3, 0.5], ["0%", "-50%"]);
  const rightX = useTransform(scrollYProgress, [0.3, 0.5], ["0%", "50%"]);

  // Final text and image animation
  const textOpacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.5, 0.7], ["30px", "0px"]);

  return (
    <section ref={targetRef} className="h-[350vh] relative bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="absolute inset-0 flex">
          {/* Left Panel */}
          <motion.div style={{ x: leftX }} className="w-1/2 h-full relative">
            <div className="flex w-full">
              <div className="w-[30%]">
                <VerticalInfiniteSlider />
              </div>
              <div className="w-[70%]">
                <Image
                  src="/assets/applications/industrial-laundries.webp"
                  alt="Hospitality & Laundry"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-14 left-10 text-white">
                  <h2 className="max-w-xl text-6xl font-extrabold uppercase">
                    {" "}
                    Hospitality & Laundry
                  </h2>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Panel */}
          <motion.div style={{ x: rightX }} className="w-1/2 h-full relative">
            <div className="absolute inset-0">
              <Image
                src="/assets/applications/paper-industry.webp"
                alt=" Paper & Pulp Industry"
                fill
                className="object-cover"
              />
              <div className="absolute top-24 left-10 text-white">
                <h2 className="max-w-xl text-6xl font-extrabold uppercase">
                  {" "}
                  Paper & Pulp Industry
                </h2>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Final Centered Content */}
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black z-10"
        >
          <div className="text-center uppercase text-white font-extrabold z-10 mx-auto max-w-6xl">
            {/* Line 1 (Bold) */}
            <p className="text-5xl  md:text-7xl ">
              And we continuously aspire to
            </p>

            {/* Line 3 (Outlined) */}
            <p className="text-outline text-6xl  md:text-7xl ">
              Small and medium scale
            </p>

            {/* Line 4 (Bold) */}
            <p className="text-6xl  md:text-7xl ">Industries</p>
          </div>
          <button className="mt-8 px-8 py-3 border border-white text-white font-semibold rounded hover:bg-white hover:text-black transition-colors duration-300">
            KNOW MORE ABOUT US
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
