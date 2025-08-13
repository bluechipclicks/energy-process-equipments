import Image from "next/image";
import ReusableTitle from "./ReusableTitle";

const clients = [
  "/assets/clients/l-and-t-logo.webp",
  "/assets/clients/benzo.webp",
  "/assets/clients/electrotherm.webp",
  "/assets/clients/l-and-t-logo.webp",
  "/assets/clients/benzo.webp",
  "/assets/clients/electrotherm.webp",
  "/assets/clients/l-and-t-logo.webp",
  "/assets/clients/benzo.webp",
  "/assets/clients/electrotherm.webp",
];

export default function ClientSlider() {
  // Duplicate list for seamless infinite effect
  const allClients = [...clients, ...clients];

  return (
    <section className="w-full overflow-hidden md:pt-12 pb-9 md:pb-16 ">
      <div className="relative group">
        <div className="flex animate-slide gap-8 w-max">
          {allClients.map((src, index) => (
            <div key={index} className="flex items-center justify-center ">
              <Image
                src={src}
                alt={`Client ${index + 1}`}
                width={320}
                height={120}
                className=" grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto  text-center pt-4 md:pt-12 px-6">
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
               Your Growth Partner               </div>
              </div>
            </div>
        <p className=" max-w-5xl mx-auto">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Exercitationem fugit voluptates earum, atque harum, ratione neque
          illum fuga omnis commodi repellendus distinctio praesentium dolores
          quo aspernatur molestias sit at alias ratione neque
          illum fuga omnis commodi repellendus distinctio praesentium dolores
          quo aspernatur molestias sit at alias.
        </p>
      </div>
    </section>
  );
}
