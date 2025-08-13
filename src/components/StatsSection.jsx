// components/StatsSection.jsx
"use client"
import { delay, motion } from "framer-motion";
import Image from "next/image";

const stats = [
  {
    count: "15+ Years",
    icon:"/assets/about/experience.webp",
    title: "Boiler Manufacturing Experience",
    description:
      "Designing and producing reliable, long-life boilers for diverse industrial applications for over 15 years.",
  },
  {
    count: "Since 1994",
      icon:"/assets/about/since-1994.webp",
    title: "Company Establishment",
    
    description:
      "Founded on February 25, 1994, with a strong foundation in engineering and manufacturing expertise.",
  },
  {
    count: "6+ Product",
      icon:"/assets/about/product-category.svg",
    title: "Innovative Product Line",
    description:
      "Manufacturer of IBR boilers, Thermic Fluid Systems, Hot Air Generators, DM Plants, and more.",
  },
  //   {
  //     count: '24/7',
  //     title: 'After-Sales Support',
  //     description:
  //       'Dedicated to providing prompt, reliable service around the clock to meet client needs efficiently.',
  //   },
];

export default function StatsSection() {
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
    <section className="hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.dl
            className="grid  grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8  lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((feature, index) => (
              <motion.div
                key={index}
                className={`flex flex-col border-2`}
                variants={itemVariants}
              >
                {feature.title&& (
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="flex h-28 w-52 flex-none items-center justify-center bg-red-600">
                      <Image
                        className="h-24 w-24 text-white"
                        src={feature.icon}
                        alt={feature.title}
                        height={100}
                        width={100}
                      />
                    </div>
                    <h2 className="text-xl md:text-2xl uppercase text-center max-w-xs mx-auto mt-6">
                      {feature.title}
                    </h2>
                  </dt>
                )}
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 ">
                  <p
                    className={`hidden lg:block max-w-sm px-4 text-lg font-normal ${
                      index !== 0 && "mx-auto text-center"
                    } pb-8`}
                  >
                    {feature.description}
                  </p>
                </dd>
              </motion.div>
            ))}
          </motion.dl>
        
      </div>
    </section>
  );
}
