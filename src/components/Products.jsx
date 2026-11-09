import React from 'react'
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import { RiShoppingCart2Fill } from "react-icons/ri";
import Image from 'next/image';
import { useTheme } from '@/app/context/ThemeContext';
import Link from 'next/link';
import head2 from '../../nextjs/hero/2.png'
import head1 from '../../nextjs/hero/1.png'
import head3 from '../../nextjs/hero/3.png'
import head4 from '../../nextjs/hero/4.png'
import head5 from '../../nextjs/hero/5.png'
import head6 from '../../nextjs/hero/6.png'
import head7 from '../../nextjs/hero/7.png'
import head8 from '../../nextjs/hero/8.png'

function Products() {

    const {darkmode , setdarkmode} = useTheme();


  return (
  <>
  {
    darkmode ? <div className="w-full h-40 bg-[#171717] flex items-center justify-center text-white">
    <h2 className="opacity-80">All Products</h2>
  </div> :

  <div className="w-full h-20 bg-white flex items-center justify-center text-black">
    <h2 className="opacity-80">All Products</h2>
  </div>
  }

    <div className={`productcontainer mb-7 ${darkmode ? 'dark' : ''}`}>
    
{/* <div>
  <h2 className="opacity-80">All Products</h2>
</div> */}
      
{/* //////////////////////////////////////////////////////////////////////////////////////////////// */}



       <div className={`productwrapper ${darkmode ? 'dark' : ''}`}>
      <Link href={'/product'}>
      <div className='cursor-pointer imagewrapper relative'>
        {/* ///////////////// */}
    <Image src={head1} alt='HeadPhone' width={200} height={200}/> 
    <div className='discountbanner absolute'>
     <span>20%</span> 
    </div>
    
    <div>
       <FaHeart className='wishbutton absolute top-5 right-2' style={{color: "green"}} />     
    </div>
    <div>
      <FaEye className='viewbtn'/>
    </div>
      </div>
      </Link>
      <div className='contentwrapper ms-2'>
    <div className='productnamecontainer'>
       <Tooltip>
         {/* ///////////////// */}
        <span className={`productname ${darkmode ? 'dark' : ''}`}>Head Phone</span>
      </Tooltip>      
    </div>
     <div className='productnamecontainer'>
       <Tooltip>
        <span className={`description line-clamp-2 ${darkmode ? 'dark' : ''}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid iure aperiam non est temporibus debitis accusantium
             molestiae fugit. Quaerat aperiam optio ullam consectetur itaque officiis perspiciatis eos corporis dolor alias?</span>
      </Tooltip>      
    </div>
    <Rating name="read-only" value={5} readOnly size='small' />
    {/* <div className='flex gap-1 items-center'>
      <span className='newprice'>Rs. 6554</span>
    <span className={`oldprice ${darkmode ? 'dark' : ''}`}>Rs. 6554</span>
    </div> */}

     {
    darkmode ? <div className='flex gap-2 items-center procontainer'>
     <span className='newprice !text-2xl !font-extrabold !text-amber-500'>RS.900</span>
    <span className='oldprice !text-white'>RS.900</span>
   </div> :

   <div className='flex gap-2 items-center procontainer'>
     <span className='newprice !text-2xl !font-extrabold'>RS.900</span>
    <span className='oldprice'>RS.900</span>
   </div>
   }
    <div className='flex gap-2 items-center'>
    <Button >
          <RiShoppingCart2Fill/></Button>
   
    <span className='stock'>IN STOCK</span>
    </div>
      </div>
      </div>

      {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}

    <div className={`productwrapper ${darkmode ? 'dark' : ''}`}>
      <Link href={'/product'}>
      <div className='cursor-pointer imagewrapper relative'>
        {/* ///////////////// */}
    <Image src={head2} alt='HeadPhone' width={200} height={200}/> 
    <div className='discountbanner absolute'>
     <span>20%</span> 
    </div>
    
    <div>
       <FaHeart className='wishbutton absolute top-5 right-2' style={{color: "green"}} />     
    </div>
    <div>
      <FaEye className='viewbtn'/>
    </div>
      </div>
      </Link>
      <div className='contentwrapper ms-2'>
    <div className='productnamecontainer'>
       <Tooltip>
         {/* ///////////////// */}
        <span className={`productname ${darkmode ? 'dark' : ''}`}>Air Pods</span>
      </Tooltip>      
    </div>
     <div className='productnamecontainer'>
       <Tooltip>
        <span className={`description line-clamp-2 ${darkmode ? 'dark' : ''}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid iure aperiam non est temporibus debitis accusantium
             molestiae fugit. Quaerat aperiam optio ullam consectetur itaque officiis perspiciatis eos corporis dolor alias?</span>
      </Tooltip>      
    </div>
    <Rating name="read-only" value={5} readOnly size='small' />
    {/* <div className='flex gap-1 items-center'>
      <span className='newprice'>Rs. 6554</span>
    <span className={`oldprice ${darkmode ? 'dark' : ''}`}>Rs. 6554</span>
    </div> */}
     {
    darkmode ? <div className='flex gap-2 items-center procontainer'>
     <span className='newprice !text-2xl !font-extrabold !text-amber-500'>RS.900</span>
    <span className='oldprice !text-white'>RS.900</span>
   </div> :

   <div className='flex gap-2 items-center procontainer'>
     <span className='newprice !text-2xl !font-extrabold'>RS.900</span>
    <span className='oldprice'>RS.900</span>
   </div>
   }
    <div className='flex gap-2 items-center'>
    <Button >
          <RiShoppingCart2Fill/></Button>
   
    <span className='stock'>IN STOCK</span>
    </div>
      </div>
      </div>

      {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}


       <div className={`productwrapper ${darkmode ? 'dark' : ''}`}>
      <Link href={'/product'}>
      <div className='cursor-pointer imagewrapper relative'>
        {/* ///////////////// */}
    <Image src={head3} alt='HeadPhone' width={200} height={200}/> 
    <div className='discountbanner absolute'>
     <span>20%</span> 
    </div>
    
    <div>
       <FaHeart className='wishbutton absolute top-5 right-2' style={{color: "green"}} />     
    </div>
    <div>
      <FaEye className='viewbtn'/>
    </div>
      </div>
      </Link>
      <div className='contentwrapper ms-2'>
    <div className='productnamecontainer'>
       <Tooltip>
         {/* ///////////////// */}
        <span className={`productname ${darkmode ? 'dark' : ''}`}>HandFree</span>
      </Tooltip>      
    </div>
     <div className='productnamecontainer'>
       <Tooltip>
        <span className={`description line-clamp-2 ${darkmode ? 'dark' : ''}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid iure aperiam non est temporibus debitis accusantium
             molestiae fugit. Quaerat aperiam optio ullam consectetur itaque officiis perspiciatis eos corporis dolor alias?</span>
      </Tooltip>      
    </div>
    <Rating name="read-only" value={5} readOnly size='small' />
    {/* <div className='flex gap-1 items-center'>
      <span className='newprice'>Rs. 6554</span>
    <span className={`oldprice ${darkmode ? 'dark' : ''}`}>Rs. 6554</span>
    </div> */}

     {
    darkmode ? <div className='flex gap-2 items-center procontainer'>
     <span className='newprice !text-2xl !font-extrabold !text-amber-500'>RS.900</span>
    <span className='oldprice !text-white'>RS.900</span>
   </div> :

   <div className='flex gap-2 items-center procontainer'>
     <span className='newprice !text-2xl !font-extrabold'>RS.900</span>
    <span className='oldprice'>RS.900</span>
   </div>
   }
    <div className='flex gap-2 items-center'>
    <Button >
          <RiShoppingCart2Fill/></Button>
   
    <span className='stock'>IN STOCK</span>
    </div>
      </div>
      </div>

      {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}


       <div className={`productwrapper ${darkmode ? 'dark' : ''}`}>
      <Link href={'/product'}>
      <div className='cursor-pointer imagewrapper relative'>
        {/* ///////////////// */}
    <Image src={head4} alt='HeadPhone' width={200} height={200}/> 
    <div className='discountbanner absolute'>
     <span>20%</span> 
    </div>
    
    <div>
       <FaHeart className='wishbutton absolute top-5 right-2' style={{color: "green"}} />     
    </div>
    <div>
      <FaEye className='viewbtn'/>
    </div>
      </div>
      </Link>
      <div className='contentwrapper ms-2'>
    <div className='productnamecontainer'>
       <Tooltip>
         {/* ///////////////// */}
        <span className={`productname ${darkmode ? 'dark' : ''}`}>NeckBuds</span>
      </Tooltip>      
    </div>
     <div className='productnamecontainer'>
       <Tooltip>
        <span className={`description line-clamp-2 ${darkmode ? 'dark' : ''}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid iure aperiam non est temporibus debitis accusantium
             molestiae fugit. Quaerat aperiam optio ullam consectetur itaque officiis perspiciatis eos corporis dolor alias?</span>
      </Tooltip>      
    </div>
    <Rating name="read-only" value={5} readOnly size='small' />
    {/* <div className='flex gap-1 items-center'>
      <span className='newprice'>Rs. 6554</span>
    <span className={`oldprice ${darkmode ? 'dark' : ''}`}>Rs. 6554</span>
    </div> */}

     {
    darkmode ? <div className='flex gap-2 items-center procontainer'>
     <span className='newprice !text-2xl !font-extrabold !text-amber-500'>RS.900</span>
    <span className='oldprice !text-white'>RS.900</span>
   </div> :

   <div className='flex gap-2 items-center procontainer'>
     <span className='newprice !text-2xl !font-extrabold'>RS.900</span>
    <span className='oldprice'>RS.900</span>
   </div>
   }
    <div className='flex gap-2 items-center'>
    <Button >
          <RiShoppingCart2Fill/></Button>
   
    <span className='stock'>IN STOCK</span>
    </div>
      </div>
      </div>

      {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}


       <div className={`productwrapper ${darkmode ? 'dark' : ''}`}>
      <Link href={'/product'}>
      <div className='cursor-pointer imagewrapper relative'>
        {/* ///////////////// */}
    <Image src={head5} alt='HeadPhone' width={200} height={200}/> 
    <div className='discountbanner absolute'>
     <span>20%</span> 
    </div>
    
    <div>
       <FaHeart className='wishbutton absolute top-5 right-2' style={{color: "green"}} />     
    </div>
    <div>
      <FaEye className='viewbtn'/>
    </div>
      </div>
      </Link>
      <div className='contentwrapper ms-2'>
    <div className='productnamecontainer'>
       <Tooltip>
         {/* ///////////////// */}
        <span className={`productname ${darkmode ? 'dark' : ''}`}>Power Bank</span>
      </Tooltip>      
    </div>
     <div className='productnamecontainer'>
       <Tooltip>
        <span className={`description line-clamp-2 ${darkmode ? 'dark' : ''}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid iure aperiam non est temporibus debitis accusantium
             molestiae fugit. Quaerat aperiam optio ullam consectetur itaque officiis perspiciatis eos corporis dolor alias?</span>
      </Tooltip>      
    </div>
    <Rating name="read-only" value={5} readOnly size='small' />
    {/* <div className='flex gap-1 items-center'>
      <span className='newprice'>Rs. 6554</span>
    <span className={`oldprice ${darkmode ? 'dark' : ''}`}>Rs. 6554</span>
    </div> */}

     {
    darkmode ? <div className='flex gap-2 items-center procontainer'>
     <span className='newprice !text-2xl !font-extrabold !text-amber-500'>RS.900</span>
    <span className='oldprice !text-white'>RS.900</span>
   </div> :

   <div className='flex gap-2 items-center procontainer'>
     <span className='newprice !text-2xl !font-extrabold'>RS.900</span>
    <span className='oldprice'>RS.900</span>
   </div>
   }
    <div className='flex gap-2 items-center'>
    <Button >
          <RiShoppingCart2Fill/></Button>
   
    <span className='stock'>IN STOCK</span>
    </div>
      </div>
      </div>

      {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}


       <div className={`productwrapper ${darkmode ? 'dark' : ''}`}>
      <Link href={'/product'}>
      <div className='cursor-pointer imagewrapper relative'>
        {/* ///////////////// */}
    <Image src={head6} alt='HeadPhone' width={200} height={200}/> 
    <div className='discountbanner absolute'>
     <span>20%</span> 
    </div>
    
    <div>
       <FaHeart className='wishbutton absolute top-5 right-2' style={{color: "green"}} />     
    </div>
    <div>
      <FaEye className='viewbtn'/>
    </div>
      </div>
      </Link>
      <div className='contentwrapper ms-2'>
    <div className='productnamecontainer'>
       <Tooltip>
         {/* ///////////////// */}
        <span className={`productname ${darkmode ? 'dark' : ''}`}>Smart Watch</span>
      </Tooltip>      
    </div>
     <div className='productnamecontainer'>
       <Tooltip>
        <span className={`description line-clamp-2 ${darkmode ? 'dark' : ''}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid iure aperiam non est temporibus debitis accusantium
             molestiae fugit. Quaerat aperiam optio ullam consectetur itaque officiis perspiciatis eos corporis dolor alias?</span>
      </Tooltip>      
    </div>
    <Rating name="read-only" value={5} readOnly size='small' />
    {/* <div className='flex gap-1 items-center'>
      <span className='newprice'>Rs. 6554</span>
    <span className={`oldprice ${darkmode ? 'dark' : ''}`}>Rs. 6554</span>
    </div> */}

     {
    darkmode ? <div className='flex gap-2 items-center procontainer'>
     <span className='newprice !text-2xl !font-extrabold !text-amber-500'>RS.900</span>
    <span className='oldprice !text-white'>RS.900</span>
   </div> :

   <div className='flex gap-2 items-center procontainer'>
     <span className='newprice !text-2xl !font-extrabold'>RS.900</span>
    <span className='oldprice'>RS.900</span>
   </div>
   }
    <div className='flex gap-2 items-center'>
    <Button >
          <RiShoppingCart2Fill/></Button>
   
    <span className='stock'>IN STOCK</span>
    </div>
      </div>
      </div>
   

      

      
      

      
      
    </div>
  </>
  )
}

export default Products