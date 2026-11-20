"use client";

import CategorySlider from "@/components/CategorySlider";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import { useEffect } from "react";
import { useTheme } from "./context/ThemeContext";
import { useRouter } from "next/navigation";

export default function Home() {

  const { headeractive , setheaderactive } = useTheme()
  const router = useRouter();

  useEffect(() => {

if (!localStorage.getItem('userid')) {
  router.push('/login')
} else {

  setheaderactive(true)

}

  },[])


  return (
    <main>
        
      <Hero/>
      <CategorySlider/>
      <Products/>
    </main>
  );
}