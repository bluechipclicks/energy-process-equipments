import AnimatedSection from '@/components/IndustriesWeServe'
import ClientSlider from '@/components/ClientSilder'
import Hero from '@/components/Hero'
import ProductSlider from '@/components/ProductSlider'
import React from 'react'
import StatsSection from '@/components/StatsSection'

export default function page() {
  return (

    <>
    <Hero/>
    <ClientSlider/>
    <ProductSlider/>
    <AnimatedSection/>
    <StatsSection/>
    </>
  )
}
