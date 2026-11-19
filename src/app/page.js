"use client";

import CategorySlider from "@/components/CategorySlider";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import { useEffect } from "react";
import { useTheme } from "./context/ThemeContext";

export default function Home() {

  const { headeractive , setheaderactive} = useTheme()

  useEffect(() => {

setheaderactive(true)


  },[])


  return (
    <main>
        
      <Hero/>
      <CategorySlider/>
      <Products/>
    </main>
  );
}