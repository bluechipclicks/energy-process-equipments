import ClientSlider from "@/components/ClientSilder";
import Hero from "@/components/Hero";
import ProductSlider from "@/components/ProductSlider";
import React from "react";
import StatsSection from "@/components/StatsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import IndustriesWeServe from "@/components/IndustriesWeServe";
import AboutUs from "@/components/AboutUs";
import GlobalPresence from "@/components/GlobalPresence";

export default function page() {
  return (
    <>
      <Hero />
      <ClientSlider />
      <ProductSlider />
      <IndustriesWeServe />
      <WhyChooseUs />
      <AboutUs />
      <GlobalPresence />
    </>
  );
}
