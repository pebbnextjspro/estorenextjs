"use client"

import { useTheme } from '@/app/context/ThemeContext'
import { Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

function CheckOut() {

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

   <div className={darkmode ? 'container-fluid cartcontainer bg-[#171717]' : 'container-fluid cartcontainer bg-white'}>
     <div className='grid grid-cols-1 text-center'>
        <h2 className={darkmode ? 'text-white' : 'text-[#171717]'}>Your Cart</h2>
           </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
      <div className='bg-[#F5F5F5] rounded p-4'>
      <form  className='flex flex-col gap-2' action="">
          <span className='text-2xl font-semibold'>Delivery</span>
         <select className='w-full h-12 rounded border-1 px-3 border-black' name="" id="">
       <option value="">Pakistan</option>
       <option value="">Lahore</option>
       </select>
      <div className='flex gap-2'>
         <input type="text" className='w-full h-12 rounded border-1 px-3 border-black focus:outline-[rgba(0,0,230,0.4)]'
       placeholder='First Name' />
             <input type="text" className='w-full h-12 rounded border-1 px-3 border-black focus:outline-[rgba(0,0,230,0.4)]'
       placeholder='Last Name' />
      </div>
      <input type="text" className='w-full h-12 rounded border-1 px-3 border-black focus:outline-[rgba(0,0,230,0.4)]'
       placeholder='Address' />
        <div className='flex gap-2'>
         <input type="text" className='w-full h-12 rounded border-1 px-3 border-black focus:outline-[rgba(0,0,230,0.4)]'
       placeholder='City' />
             <input type="text" className='w-full h-12 rounded border-1 px-3 border-black focus:outline-[rgba(0,0,230,0.4)]'
       placeholder='Postal Code (Optional)' />
       
      </div>
       <input type="text" className='w-full h-12 rounded border-1 px-3 border-black focus:outline-[rgba(0,0,230,0.4)]'
       placeholder='Phone' required/>
       <input type="email" className='w-full h-12 rounded border-1 px-3 border-black focus:outline-[rgba(0,0,230,0.4)]'
       placeholder='Email Address' required />
       <Link href={'/completeorder'}>
       <Button type='submit' className='!bg-black !text-white !font-bold'>
  <span>Complete Order</span>
</Button>
       </Link>
      </form>
      
      </div>

       <div className=' w-full flex px-7'>
<div className='w-full h-auto bg-[#F5F5F5] rounded border border-[rgba(0,0,0,0.2)] p-7 flex flex-col gap-3
sticky top-10 self-start'>
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
</div>
       </div>

       
           </div>
   </div>
   </>
  )
}

export default CheckOut