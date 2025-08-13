
"use client";

import Image from "next/image";
import { delay, motion } from "framer-motion";

const features = [
  {
    description:
      "For over 15 years, Energy Process Equipments (EPE) has been a leading name in designing and manufacturing reliable, long-life boilers. Our reputation is built on innovation, quality, and an unwavering commitment to our clients' success.",
  },
  {
    name: "Qualified & Dedicated Experts",
    description:
      "With over 844 satisfied clients and 4 major certifications, our team of dedicated and qualified professionals brings deep engineering insight to every project.",
    icon: "/assets/why-choose-us/experts.webp",
  },
  {
    name: "Advanced Testing & Solutions",
    description:
      "Through a strong commitment to R&D, we deliver innovative solutions. Every boiler is rigorously tested for high efficiency and reliability before it leaves our factory.",
    icon: "/assets/why-choose-us/advance-testing.webp",
  },
  {
    name: "Comprehensive Industry Coverage",
    description:
      "We serve a wide variety of industrial sectors, including manufacturing firms and oil & gas plants, providing tailored boiler solutions for diverse applications.",
    icon: "/assets/why-choose-us/industry-coverage.webp",
  },
  {
    name: "Reliable After-Sales Support",
    description:
      "Our commitment extends beyond production. We offer prompt, reliable, and effective after-sales services round the clock to cater to your specific needs anytime.",
    icon: "/assets/why-choose-us/sales-support.webp",
  },
  {
    name: "Commitment to Safety & Compliance",
    description:
      'Our motto is to "NEVER COMPROMISE ON QUALITY & SAFETY". We build IBR-compliant systems to help you meet regulatory requirements and prevent costly failures.',
    icon: "/assets/why-choose-us/safety-and-compliance.webp",
  },
];

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="bg-gray-50 py-9 sm:py-16">
      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:text-center">
          <div className="relative w-full max-w-sm mx-auto mb-4 md:mb-6">
            {/* Trapezoid shape */}
            <div
              className="h-10 bg-red-600"
              style={{
                clipPath: "polygon(0% 100%, 10% 0%, 100% 0%, 90% 100%)",
              }}
            ></div>

            {/* Text on top of the shape */}
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg uppercase">
              Why Choose Us
            </div>
          </div>
        </div>
        <div className=" mt-2 sm:mt-16  lg:max-w-none">
          <motion.dl
            className="grid  grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`flex flex-col ${index !== 0 && "border-2"}`}
                variants={itemVariants}
              >
                {feature.name && (
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="flex h-16 w-40  md:h-28 md:w-52 flex-none items-center justify-center bg-red-600">
                      <Image
                        className="h-14 w-14 md:h-24 md:w-24 text-white"
                        src={feature.icon}
                        alt={feature.name}
                        height={100}
                        width={100}
                      />
                    </div>
                    <h2 className="text-xl md:text-2xl uppercase text-center max-w-xs mx-auto mt-6 text-black">
                      {feature.name}
                    </h2>
                  </dt>
                )}
                <dd className="mt-4 flex flex-auto flex-col text-sm md:text-lg  text-black">
                  <p
                    className={`max-w-md ${
                      index !== 0 && "mx-auto text-center pb-8"
                    } `}
                  >
                    {feature.description}
                  </p>
                </dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </div>
    </div>
  );
}