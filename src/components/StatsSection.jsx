// components/StatsSection.jsx

const stats = [
  {
    count: "15+ Years",
    title: "Boiler Manufacturing Experience",
    description:
      "Designing and producing reliable, long-life boilers for diverse industrial applications for over 15 years.",
  },
  {
    count: "Since 1994",
    title: "Company Establishment",
    description:
      "Founded on February 25, 1994, with a strong foundation in engineering and manufacturing expertise.",
  },
  {
    count: "6+ Product Categories",
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
  return (
    <section className=" py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3  gap-8 text-center">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-md  hover:shadow-md transition"
            >
              <div className="relative w-full max-w-2xl mx-auto mb-6">
                {/* Trapezoid shape */}
                <div className=" h-16 bg-red-600 clip-trapezoid-stats"></div>

                {/* Text on top of the shape */}
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl uppercase">
                  {item.count}
                </div>
              </div>
              <h4 className="mt-2 text-lg font-semibold text-gray-800  italic">
                {item.title}
              </h4>
              <p className="mt-2 text-sm text-gray-600  italic">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
