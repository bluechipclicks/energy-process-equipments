"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import VerticalInfiniteSlider from "./VerticalSlider";
import StatsSection from "./StatsSection";

const AboutUs = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Sliding door animation
  const leftX = useTransform(scrollYProgress, [0.3, 0.5], ["0%", "-100%"]);
  const rightX = useTransform(scrollYProgress, [0.3, 0.5], ["0%", "100%"]);

  // Final text and image animation
  const textOpacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.5, 0.7], ["30px", "0px"]);

  return (
    <section
      ref={targetRef}
      className="h-[350vh] md:h-[280vh] relative bg-black"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden ">
        <div className="absolute inset-0 flex flex-col md:flex-row">
          {/* Left Panel */}
          <motion.div
            style={{ x: leftX }}
            className="w-full md:w-1/2 h-full relative border-white border"
          >
            <div className="flex w-full">
              <div className="w-[20%]">
                <VerticalInfiniteSlider title={"Vision"} />
              </div>
              <div className="w-[80%]">
                <h2 className="absolute top-28 right-4 max-w-64 lg:max-w-md text-lg md:text-3xl font-extrabold uppercase text-white text-right">
                  {" "}
                  To be respected as a high performance organization offering
                  sustainable solutions in energy and environment
                </h2>
                <div className="absolute -bottom-4 right-0 ">
                  <Image
                    src="/assets/india.svg"
                    alt="india map"
                    height={600}
                    width={400}
                    className="object-fill"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Panel */}
          <motion.div
            style={{ x: rightX }}
            className="w-full md:w-1/2 h-full relative bg-black border border-white"
          >
            <div className="flex w-full">
              <div className="w-[20%]">
                <VerticalInfiniteSlider title={"Mission"} />
              </div>
              <div className="w-[80%]">
                <h2 className="absolute top-28 right-4 max-w-64 lg:max-w-md text-3xl font-extrabold uppercase text-white text-right">
                  {" "}
                  The Mission of Energy Process Equipments (EPE) is to "NEVER
                  COMPROMISE ON QUALITY & SAFETY"
                </h2>
                <div className="absolute -bottom-4 right-0 ">
                  <Image
                    src="/assets/mission.svg"
                    alt="india map"
                    height={600}
                    width={400}
                    className="object-fill"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      
        {/* Final Centered Content */}
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="absolute inset-0 flex flex-col items-center justify-center text-black bg-white z-10"
        >
          
          <div className="text-center   font-extrabold z-10 mx-auto max-w-7xl px-6 lg:px-0">
            {/* Line 1 (Bold) */}
            <div className="mx-auto max-w-3xl lg:text-center mt-24 md:mt-12">
              <div className="relative w-full max-w-xs mx-auto mb-6">
                {/* Trapezoid shape */}
                <div
                  className="h-10 bg-red-600"
                  style={{
                    clipPath: "polygon(0% 100%, 10% 0%, 100% 0%, 90% 100%)",
                  }}
                ></div>

                {/* Text on top of the shape */}
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl uppercase">
                  About Us
                </div>
              </div>
            </div>
            <p className="text-lg  md:text-xl lg:text-4xl mb-4 md:mb-10 max-w-6xl mx-auto">
              Energy Process Equipments specializes in designing and
              manufacturing reliable boilers and heating systems, backed by 15+
              years of expertise, innovation, and strong customer service,
              ensuring high-quality solutions tailored to diverse industrial
              needs.
            </p>
            <p className="text-lg  md:text-4xl mb-8 md:hidden">
              With a dedicated team and visionary leadership, we prioritize
              continuous improvement and
               support to exceed client expectations across
              various industries and applications.
            </p>
            <StatsSection />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
