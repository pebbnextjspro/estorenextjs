"use client";

import CategorySlider from "@/components/CategorySlider";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import { useEffect } from "react";
import { useTheme } from "./context/ThemeContext";
import { useRouter } from "next/navigation";
import clientaxios from "@/components/axiosinstance";
import axios from "axios";

export default function Home() {

  const { headeractive , setheaderactive } = useTheme()
  const router = useRouter();



  const GetCookie = async () => {

    try {

      const res = await clientaxios.get('/api/admin/cookie/get-cookie');

      console.log('cookie response' , res);
      localStorage.setItem('userid' , res.data.visitorId)
      
    } catch (error) {

      console.log('coockie error' , error)
      
    }

  }

  useEffect(() => {


  setheaderactive(true)


//  fetch("http://192.168.1.109:4000/api/admin", {
//             method: "GET",
//             credentials: "include"
//         })
//         .then(res => res.json())
//         .then(data => {
//             console.log("Visitor Information:", data);
//         })
//         .catch(error => {
//             console.log("Visitor Error:", error);
//         });

GetCookie()
  },[])


  return (
    <main>
        
      <Hero/>
      <CategorySlider/>
      <Products/>
    </main>
  );
}