"use client";

import CategorySlider from "@/components/CategorySlider";
import Hero from "@/components/Hero";
import Products from "@/components/Products";

export default function Home() {
  return (
    <main>
        
      <Hero/>
      <CategorySlider/>
      <Products/>
    </main>
  );
}