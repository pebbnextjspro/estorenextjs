"use client"

import { useTheme } from '@/app/context/ThemeContext';
import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";


function SelectColor({arraydata}) {

    const {productcolor , setproductcolor , activecontext , setactivecontext} = useTheme();
   
  return (


   <>
   
   <div className='relative z-10' onClick={() => setactivecontext(!activecontext)}>
      <input type="text" value={productcolor} onChange={(e) => setproductcolor(e.target.value)}
      className='className="block w-full px-3 py-2.5 bg-neutral-secondary-medium border
  border-default-medium text-heading text-sm rounded-base outline-0 shadow-xs placeholder:text-body cursor-pointer
  caret-amber-50 capitalize'/>
  <IoIosArrowDown className='absolute right-2 bottom-3 '/>
 {
    activecontext &&  <div className='absolute border w-full bg-white py-2 overflow-hidden overflow-y-scroll h-62.5'>
    <ul className='flex flex-col gap-2 px-2!'>
        {/* <li className='text-[18px] !w-full h-[35px] hover:bg-blue-600 hover:text-white'>Data</li>
      <li className='text-[18px] !w-full h-[35px] hover:bg-blue-600 hover:text-white'>Data</li> */}
      {
        arraydata?.length !== 0 && arraydata?.map((data) => (
            <div className='flex items-center justify-between cursor-pointer' key={data.id}>
                <li onClick={() => setproductcolor(data.ProductColor)}
                className='text-[18px] cursor-pointer capitalize'>{data.ProductColor}</li>
                <div className='w-7.5 h-7.5 rounded-full' style={{backgroundColor: data.ProductColor}}>
                 
                </div>
            </div>
        ))
      }
    </ul>
  </div>
 }
   </div>
    
   </>
  )
}

export default SelectColor
