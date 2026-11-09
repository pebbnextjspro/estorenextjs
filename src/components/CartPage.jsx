"use client"

import { useTheme } from '@/app/context/ThemeContext'
import { Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

function CartPage() {

    const {darkmode} = useTheme();
    const [counter , setcounter] = useState(5);


     const handleOnChange = (e) => {

        const value = e.target.value;

        setcounter(value)
    }

  return (
   <>
   {darkmode ? <div className='bg-[#171717] h-18'>
      
    </div> : 
    <div className='bg-white h-18'>
      
    </div>}

   <div className='bg-white'>
     <div className='flex p-2 items-center justify-center'>
     <h2>Your Cart</h2>
    </div>

  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full h-auto p-2 gap-2.5 cartcontainer'>

{/* ///////////////////// Table Part ///////////////////////////////////////////////////////////////////////\\\\ */}
<div className='p-2'>
 
 <div className='part1 mb-2'>
 <div className='imagecontent'>
   <div className='imagewrapper border rounded flex items-center justify-center p-2'>
    <Image src='./headphone.png' alt='Headphone' width={100} height={100}/>
  </div>
  <div className='flex flex-col'>
    <span className='text-2xl font-semibold'>Product Name</span>
    <span className='line-clamp-2 clampwidth'>Lorem, ipsum dolor sit amet consectetur
       adipisicing elit,Lorem, 
      ipsum dolor sit amet consectetur adipisicing elit</span>
      <span>Color: Black</span>
       <div className='flex items-center gap-2'>
          <span className='text-[22px] text-red-600'>Rs.5,9878</span>
          <span className='text-black line-through'>Rs.7,5487</span>
        </div>
  </div>
 </div>
 <div className='border border-[rgba(0,0,0,0.2)] rounded w-52 h-[50px] flex items-center justify-between bg-white'>
    
    <Button>
        <span className='text-black text-3xl'>-</span>
    </Button>
    <input className='text-center w-20 outline-0 font-bold text-black'
     type="text" value={counter} onChange={handleOnChange} readOnly />
    <Button>
        <span className='text-black text-2xl'>+</span>
    </Button>
</div>
 <div className='flex flex-col'>
  <span className='font-semibold opacity-85'>Total Price</span>
  <span className='text-2xl text-green-700'>Rs.5,9878</span>
 </div>

  </div>

   <div className='part1 mb-2'>
 <div className='imagecontent'>
   <div className='imagewrapper border rounded flex items-center justify-center p-2'>
    <Image src='./headphone.png' alt='Headphone' width={100} height={100}/>
  </div>
  <div className='flex flex-col'>
    <span className='text-2xl font-semibold'>Product Name</span>
    <span className='line-clamp-2 clampwidth'>Lorem, ipsum dolor sit amet consectetur
       adipisicing elit,Lorem, 
      ipsum dolor sit amet consectetur adipisicing elit</span>
      <span>Color: Black</span>
       <div className='flex items-center gap-2'>
          <span className='text-[22px] text-red-600'>Rs.5,9878</span>
          <span className='text-black line-through'>Rs.7,5487</span>
        </div>
  </div>
 </div>
 <div className='border border-[rgba(0,0,0,0.2)] rounded w-52 h-[50px] flex items-center justify-between bg-white'>
    
    <Button>
        <span className='text-black text-3xl'>-</span>
    </Button>
    <input className='text-center w-20 outline-0 font-bold text-black'
     type="text" value={counter} onChange={handleOnChange} readOnly />
    <Button>
        <span className='text-black text-2xl'>+</span>
    </Button>
</div>
 <div className='flex flex-col'>
  <span className='font-semibold opacity-85'>Total Price</span>
  <span className='text-2xl text-green-700'>Rs.5,9878</span>
 </div>

  </div>

   <div className='part1 mb-2'>
 <div className='imagecontent'>
   <div className='imagewrapper border rounded flex items-center justify-center p-2'>
    <Image src='./headphone.png' alt='Headphone' width={100} height={100}/>
  </div>
  <div className='flex flex-col'>
    <span className='text-2xl font-semibold'>Product Name</span>
    <span className='line-clamp-2 clampwidth'>Lorem, ipsum dolor sit amet consectetur
       adipisicing elit,Lorem, 
      ipsum dolor sit amet consectetur adipisicing elit</span>
      <span>Color: Black</span>
       <div className='flex items-center gap-2'>
          <span className='text-[22px] text-red-600'>Rs.5,9878</span>
          <span className='text-black line-through'>Rs.7,5487</span>
        </div>
  </div>
 </div>
 <div className='border border-[rgba(0,0,0,0.2)] rounded w-52 h-[50px] flex items-center justify-between bg-white'>
    
    <Button>
        <span className='text-black text-3xl'>-</span>
    </Button>
    <input className='text-center w-20 outline-0 font-bold text-black'
     type="text" value={counter} onChange={handleOnChange} readOnly />
    <Button>
        <span className='text-black text-2xl'>+</span>
    </Button>
</div>
 <div className='flex flex-col'>
  <span className='font-semibold opacity-85'>Total Price</span>
  <span className='text-2xl text-green-700'>Rs.5,9878</span>
 </div>

  </div>

</div>




{/* ///////////////////// Table Part ///////////////////////////////////////////////////////////////////////\\\\ */}

{/* ///////////////////// Priceing Part ///////////////////////////////////////////////////////////////////////\\\\ */}

<div>
 <div className=' bg-[#F5F5F5] h-auto rounded border border-[rgba(0,0,0,0.2)] flex flex-col gap-3
sticky top-10 self-start p-7'>
   <div className='flex items-center justify-between'>
  <span className='text-[20px] font-semibold'>Total</span>
  <span className='text-[19px] font-semibold'>Rs.5,9878</span>
</div>

<div className='flex items-center justify-between'>
  <span className='text-[20px] font-semibold'>Shipping Charges</span>
  <span className='text-[18px] font-semibold'>Rs.5,9878</span>
</div>
<div className='flex items-center justify-between'>
  <span className='text-[20px] font-semibold'>Discount</span>
  <span className='text-[17px] font-light'>10%</span>
</div>
<div className='flex items-center justify-between'>
  <span className='text-[20px] font-semibold'>Grand Total</span>
  <span className='text-[23px] font-bold'>Rs.5,9878</span>
</div>

<Link href={'/checkout'} className='linkclass'>
<Button className='!bg-black !text-white !font-bold'>
  <span>Check Out</span>
</Button>
</Link>

 </div>

</div>

{/* ///////////////////// Priceing Part ///////////////////////////////////////////////////////////////////////\\\\ */}
  </div>
   </div>
   </>
  )
}

export default CartPage