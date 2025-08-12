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

  // Sliding door animation
  const leftX = useTransform(scrollYProgress, [0.3, 0.5], ["0%", "-100%"]);
  const rightX = useTransform(scrollYProgress, [0.3, 0.5], ["0%", "100%"]);

  // Final text and image animation
  const textOpacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.5, 0.7], ["30px", "0px"]);

  return (
    <section ref={targetRef} className="h-[350vh] relative bg-white">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="absolute inset-0 flex px-8">
          {/* Left Panel */}
          <motion.div
            style={{ x: leftX }}
            className="w-1/2 h-full relative border-white border bg-black"
          >
            <div className="flex w-full">
              <div className="w-[20%]">
                <VerticalInfiniteSlider title={"Vision"} />
              </div>
              <div className="w-[80%]">
                <h2 className="absolute top-28 right-4 max-w-xl text-4xl font-extrabold uppercase text-white text-right">
                  {" "}
                  To be respected as a high performance organization offering
                  sustainable solutions in energy and environment
                </h2>
                <div className="absolute -bottom-8 right-0 ">
                  <Image
                    src="/assets/india-map.svg"
                    alt="india map"
                    height={700}
                    width={500}
                    className="object-fill"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Panel */}
          <motion.div
            style={{ x: rightX }}
            className="w-1/2 h-full relative bg-black"
          >
            <div className="flex w-full">
              <div className="w-[20%]">
                <VerticalInfiniteSlider title={"Mission"} />
              </div>
              <div className="w-[80%]">
                <h2 className="absolute top-28 right-4 max-w-xl text-4xl font-extrabold uppercase text-white text-right">
                  {" "}
                  The Mission of Energy Process Equipments (EPE) is to "NEVER
                  COMPROMISE ON QUALITY & SAFETY"
                </h2>
                <div className="absolute -bottom-8 right-0 ">
                  <Image
                    src="/assets/mission.svg"
                    alt="india map"
                    height={700}
                    width={500}
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
          <div className="text-center   font-extrabold z-10 mx-auto max-w-7xl">
            {/* Line 1 (Bold) */}
            <div className="mx-auto max-w-3xl lg:text-center">
              <div className="relative w-full max-w-xs mx-auto mb-6">
                {/* Trapezoid shape */}
                <div
                  className="h-10 bg-red-600"
                  style={{
                    clipPath: "polygon(0% 100%, 10% 0%, 100% 0%, 90% 100%)",
                  }}
                ></div>

                {/* Text on top of the shape */}
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg uppercase">
                  About Us
                </div>
              </div>
            </div>
            <p className="text-5xl  md:text-4xl mb-6">
              Energy Process Equipments specializes in designing and
              manufacturing reliable boilers and heating systems, backed by 15+
              years of expertise, innovation, and strong customer service,
              ensuring high-quality solutions tailored to diverse industrial
              needs.
            </p>
            <p  className="text-5xl  md:text-4xl mb-6">
              With a dedicated team and visionary leadership, we prioritize continuous improvement, cutting-edge technology, and round-the-clock support to exceed client expectations across various industries and applications.

            </p>

            {/* Line 3 (Outlined) */}
            {/* <p className="text-outline text-6xl  md:text-7xl ">
              Small and medium scale
            </p> */}

            {/* Line 4 (Bold) */}
            {/* <p className="text-6xl  md:text-7xl ">Industries</p> */}
          </div>
        
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
