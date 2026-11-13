"use client";

import CategorySlider from "@/components/CategorySlider";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import { useEffect } from "react";

export default function Home() {

//   useEffect(() => {

// console.log("main page render");


//   },[])


  return (
    <main>
        
      <Hero/>
      <CategorySlider/>
      <Products/>
    </main>
  );
}