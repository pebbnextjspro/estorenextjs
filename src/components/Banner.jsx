"use client"
import { Button } from '@mui/material'
import React from 'react'

function Banner() {
  return (
    <>
    <div className="page-container w-full h-10 bg-red-600 flex items-center justify-center py-6 gap-2">
      <div className='absolute left-11 moving'>

      </div>
    <h6 className='text-white'>Additional 14% off Coupen Code: </h6>
    <Button style={{color: "green" ,fontWeight: "bold", background: "yellow"}}>Pakistan</Button>
    </div>
    </>
  )
}

export default Banner