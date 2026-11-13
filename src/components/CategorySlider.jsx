"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { useTheme } from "@/app/context/ThemeContext";

import clientaxios from "./axiosinstance";

function CategorySlider() {
  
    const {darkmode , setdarkmode} = useTheme();
    const [listdata , setlistdata] = useState([]);

     const GetData = async () => {
      
         try {
      
           const res = await clientaxios.get(`/api/admin/category/category-list`);

      
          if (res.data.success) {

            // const sorteddata = [...res.data.Data].sort((a , b) => {

            //   return a.CategoryName.localeCompare(b.CategoryName)
            // })
      
              setlistdata(res.data.Data);
      
          }
      
          
         } catch (error) {
      
          if(error.response) {
      
              alert(error.response.data.msg)
          } else {
      
              alert('Server is not responding')
          }
          
         }
      }

        useEffect(() => {
            
                GetData();
            
            },[])

      

  return (
   <>
  {
    darkmode ? <div className="w-full h-20 bg-[#171717] flex items-center justify-center text-white">
    <h2 className="opacity-80">Categories</h2>
  </div> :

  <div className="w-full h-20 bg-white flex items-center justify-center text-black">
    <h2 className="opacity-80">Categories</h2>
  </div>
  }
    <section className="category-section">
    
       
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={2}
          navigation
        //   pagination={{ clickable: true }}
          breakpoints={{
            576: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            992: {
              slidesPerView: 5,
            },
            1200: {
              slidesPerView: 6,
            },
          }}
          className={`categorySwiper  ${darkmode ? 'dark' : ''}`}
        >
 

 {
  listdata?.length !== 0 && listdata?.map((data) => (
    <SwiperSlide
    key={data.id} className="!flex !flex-col !items-center !justify-center !bg-white !p-7 !rounded-2xl
  !w-40 !h-40 !cursor-pointer categoryslider">
          
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMAGE_LINK}${data.CategoryImgUrl}`}
                  alt='headphone'
                  width={100}
                  height={100}
                />                
            </SwiperSlide>
  ))
 }
 

 
        </Swiper>
    </section>
   </>
  );
}

export default CategorySlider;