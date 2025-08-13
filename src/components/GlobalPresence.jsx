"use client";

import { useState } from "react";
import { Map, Marker } from "pigeon-maps";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

const countries = [
  {
    name: "Bangladesh",
    icon: "/assets/globalPresence/bangladesh.svg",
    coordinates: [23.8103, 90.4125],
  },
  {
    name: "Brazil",
    icon: "/assets/globalPresence/brazil.svg",
    coordinates: [-14.235, -51.9253],
  },
  {
    name: "Denmark",
    icon: "/assets/globalPresence/denmark.svg",
    coordinates: [56.2639, 9.5018],
  },
  //   { name: "Egypt", icon:"/assets/globalPresence/",coordinates: [26.8206, 30.8025] },
  {
    name: "Germany",
    icon: "/assets/globalPresence/germany.svg",
    coordinates: [51.1657, 10.4515],
  },
  {
    name: "India",
    icon: "/assets/globalPresence/india.svg",
    coordinates: [20.5937, 78.9629],
  },
  {
    name: "Indonesia",
    icon: "/assets/globalPresence/indonesia.svg",
    coordinates: [-0.7893, 113.9213],
  },
  {
    name: "Kenya",
    icon: "/assets/globalPresence/kenya.svg",
    coordinates: [-0.0236, 37.9062],
  },
  {
    name: "Malaysia",
    icon: "/assets/globalPresence/malaysia.svg",
    coordinates: [4.2105, 101.9758],
  },
  {
    name: "Mauritius",
    icon: "/assets/globalPresence/Mauritius.svg",
    coordinates: [-20.3484, 57.5522],
  },
  {
    name: "Myanmar",
    icon: "/assets/globalPresence/myanmar.svg",
    coordinates: [21.9162, 95.956],
  },
  {
    name: "Netherlands",
    icon: "/assets/globalPresence/Netherlands.svg",
    coordinates: [52.1326, 5.2913],
  },
  {
    name: "Nigeria",
    icon: "/assets/globalPresence/nigeria.svg",
    coordinates: [9.082, 8.6753],
  },
  {
    name: "Philippines",
    icon: "/assets/globalPresence/philippines.svg",
    coordinates: [12.8797, 121.774],
  },
  //   { name: "Poland", icon:"/assets/globalPresence/",coordinates: [51.9194, 19.1451] },
  //   { name: "Singapore", icon:"/assets/globalPresence/",coordinates: [1.3521, 103.8198] },
  //   { name: "Sri Lanka", icon:"/assets/globalPresence/",coordinates: [7.8731, 80.7718] },
  //   { name: "Tanzania", icon:"/assets/globalPresence/",coordinates: [-6.369, 34.8888] },
  //   { name: "Thailand", icon:"/assets/globalPresence/",coordinates: [15.87, 100.9925] },
  //   { name: "UK", icon:"/assets/globalPresence/",coordinates: [55.3781, -3.436] },
  //   { name: "USA", icon:"/assets/globalPresence/",coordinates: [37.0902, -95.7129] },
  //   { name: "UAE", icon:"/assets/globalPresence/",coordinates: [23.4241, 53.8478] },
  //   { name: "Vietnam", icon:"/assets/globalPresence/",coordinates: [14.0583, 108.2772] },
  //   { name: "Zambia", icon:"/assets/globalPresence/",coordinates: [-13.1339, 27.8493] },
];

export default function GlobalPresence() {
  const [activeIndex, setActiveIndex] = useState(0);

  const arcGisTileProvider = (x, y, z) => {
    return `https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/${z}/${y}/${x}`;
  };

  return (
    <section className="relative h-[90vh]">
      <div className="h-full w-full z-0">
        <Map
          provider={arcGisTileProvider}
          center={countries[activeIndex].coordinates}
          zoom={6}
          attribution={false}
          minZoom={6}
          maxZoom={6}
        //   metaWheelZoom={false}
        >
          <Marker
            anchor={countries[activeIndex].coordinates}
            color="red"
          />
        </Map>
      </div>

      <div className="absolute bottom-14 left-0 right-0 z-20">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="mySwiper"
          breakpoints={{
            // when window width is >= 768px
            768: {
              slidesPerView: 5,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 5,
            },
          }}
        >
          {countries.map((country, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div
                  className={`text-center items-center py-4 justify-center flex flex-col text-xl md:text-3xl font-bold transition-all  duration-300 ${
                    isActive
                      ? " text-red-600 scale-110"
                      : " text-black scale-95"
                  }`}
                >
                  <Image
                    src={country.icon}
                    alt={country.name}
                    height={50}
                    width={100}
                    className="h-24 w-48"
                  />
                  <h3 className="pt-4">{country.name}</h3>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}