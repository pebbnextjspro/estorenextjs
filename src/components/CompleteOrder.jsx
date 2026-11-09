"use client"


import { useTheme } from '@/app/context/ThemeContext';
import { Button } from '@mui/material';
import React from 'react'

function CompleteOrder() {

     const {darkmode} = useTheme();

  return (
   <>
    {darkmode ? <div className='bg-[#171717] h-18'>
      
    </div> : 
    <div className='bg-white h-18'>
      
    </div>}

    <div className='w-full h-dvh flex items-center justify-center flex-col gap-4 p-7'>
        <h2>Your Product will be dispached to your address</h2>
        <Button className='w-1/2 !bg-red-700 text-white p-2'><span>Cancel Order</span></Button>
    </div>
   </>
  )
}

export default CompleteOrder
