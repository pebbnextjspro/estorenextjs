// "use client";

// import React, { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import Image from "next/image";
// import { useTheme } from "@/app/context/ThemeContext";
// import axios from "axios";

// function CategorySlider() {
  
//     const {darkmode , setdarkmode} = useTheme();
//     const [categorydata , setcategorydata] = useState([]);
//     const [loading , setloading] = useState(false);

//     const GetData = async () => {

//       setloading(true)

//     try {

// const res = await axios.get('http://localhost:4000/api/admin/category/category-list');

// if (res.status) {

//   setcategorydata(res.data.Data)
// } else {

//   alert(res.data.msg)
// }
      
//     } catch (error) {

//       alert('DB Error')
      
//     } finally {

//        setloading(false)
//     }


//     }

//     useEffect(() => {

//       GetData();


//     },[])

//   return (


//    <>
//    {loading && <h2>Loading....</h2>}
//     <section className="category-section">
    
       
//         <Swiper
//           modules={[Navigation, Pagination]}
//           spaceBetween={20}
//           slidesPerView={2}
//           navigation
//         //   pagination={{ clickable: true }}
//           breakpoints={{
//             576: {
//               slidesPerView: 3,
//             },
//             768: {
//               slidesPerView: 4,
//             },
//             992: {
//               slidesPerView: 5,
//             },
//             1200: {
//               slidesPerView: 6,
//             },
//           }}
//           className={`categorySwiper ${darkmode ? 'dark' : ''}`}
//         >
//  {
//   categorydata.map((item) => (
//     <SwiperSlide className="!flex !flex-col !items-center !justify-center !bg-white !p-7 !rounded-2xl
//     !w-40 !h-40 !cursor-pointer categoryslider">
             
//                 <Image
//                   src={`http://localhost:4000/uploads/${item.CategoryImgUrl}`}
//                   alt='headphone'
//                   width={100}
//                   height={100}
//                 />

//                 <span className="text-center">{item.CategoryName}</span>
             
//             </SwiperSlide>
//   ))
//  }

  

 
//         </Swiper>
//     </section>
//    </>
//   );
// }

// export default CategorySlider;

"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { useTheme } from "@/app/context/ThemeContext";
import head2 from '../../nextjs/hero/2.png'
import head1 from '../../nextjs/hero/1.png'
import head3 from '../../nextjs/hero/3.png'
import head4 from '../../nextjs/hero/4.png'
import head5 from '../../nextjs/hero/5.png'
import head6 from '../../nextjs/hero/6.png'
import head7 from '../../nextjs/hero/7.png'
import head8 from '../../nextjs/hero/8.png'

function CategorySlider() {
  
    const {darkmode , setdarkmode} = useTheme();

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
 <SwiperSlide className="!flex !flex-col !items-center !justify-center !bg-white !p-7 !rounded-2xl
  !w-40 !h-40 !cursor-pointer categoryslider">
          
                <Image
                  src={head1}
                  alt='headphone'
                  width={100}
                  height={100}
                />

                
            </SwiperSlide>
 <SwiperSlide className="!flex !flex-col !items-center !justify-center !bg-white !p-7 !rounded-2xl
  !w-40 !h-40 !cursor-pointer categoryslider">
          
                <Image
                  src={head2}
                  alt='headphone'
                  width={100}
                  height={100}
                />

                
            </SwiperSlide>
 <SwiperSlide className="!flex !flex-col !items-center !justify-center !bg-white !p-7 !rounded-2xl
  !w-40 !h-40 !cursor-pointer categoryslider">
          
                <Image
                  src={head3}
                  alt='headphone'
                  width={100}
                  height={100}
                />

                
            </SwiperSlide>
 <SwiperSlide className="!flex !flex-col !items-center !justify-center !bg-white !p-7 !rounded-2xl
  !w-40 !h-40 !cursor-pointer categoryslider">
          
                <Image
                  src={head4}
                  alt='headphone'
                  width={100}
                  height={100}
                />

                
            </SwiperSlide>
 <SwiperSlide className="!flex !flex-col !items-center !justify-center !bg-white !p-7 !rounded-2xl
  !w-40 !h-40 !cursor-pointer categoryslider">
          
                <Image
                  src={head5}
                  alt='headphone'
                  width={100}
                  height={100}
                />

                
            </SwiperSlide>
 <SwiperSlide className="!flex !flex-col !items-center !justify-center !bg-white !p-7 !rounded-2xl
  !w-40 !h-40 !cursor-pointer categoryslider">
          
                <Image
                  src={head6}
                  alt='headphone'
                  width={100}
                  height={100}
                />

                
            </SwiperSlide>
 <SwiperSlide className="!flex !flex-col !items-center !justify-center !bg-white !p-7 !rounded-2xl
  !w-40 !h-40 !cursor-pointer categoryslider">
          
                <Image
                  src={head7}
                  alt='headphone'
                  width={100}
                  height={100}
                />

                
            </SwiperSlide>
 

 
        </Swiper>
    </section>
   </>
  );
}

export default CategorySlider;