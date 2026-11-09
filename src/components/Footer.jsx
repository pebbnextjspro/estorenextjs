"use client"

import Image from 'next/image'
import React from 'react'
import { FaFacebookF, FaTwitter, FaXbox } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaCircleArrowRight, FaX } from "react-icons/fa6";
import { useTheme } from '@/app/context/ThemeContext';
import { FaPhone } from "react-icons/fa";
import { RiHomeOfficeFill } from "react-icons/ri";
import { MdLocalPostOffice } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";



export default function Footer() {

  const {darkmode} = useTheme();

  return (



 <>

 <div className={`footcontainer w-full h-full container-fluid ${darkmode ? 'dark' : ''}`}>
<div className={`contentcontainer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5
  p-7 container-fluid ${darkmode ? 'dark' : ''}`}>
  <div>
<Image src='./logo.png' width={200} height={200} alt='Logo' />
  </div>
<div className='flex justify-self-start flex-col'>
{
  darkmode ? <span className='mb-5 font-semibold text-white'>Quick Links</span> :
  <span className='mb-5 font-semibold'>Quick Links</span>
}

  <ul className={`p-0 text-[17px] opacity-90 flex flex-col gap-2 cursor-pointer capitalize ${darkmode ? 'dark' : ''}`}>
   <li>Head Phone</li>
   <li>Ear Buds</li>
   <li>Smart Watches</li>
   <li>Men Smart Watches</li>
   <li>Women Smart Watches</li>
   <li>Sports Smart Watches</li>
   <li>Blogs</li>
  </ul>
</div>

<div className='flex justify-self-start flex-col'>
{
  darkmode ? <span className='mb-5 font-semibold text-white'>Support</span> :
  <span className='mb-5 font-semibold'>Support</span>
}

  <ul className={`p-0 text-[17px] opacity-90 flex flex-col gap-2 cursor-pointer capitalize ${darkmode ? 'dark' : ''}`}>
   <li>FAQs</li>
   <li>track your order</li>
   <li>warranty register</li>
   <li>shipping details</li>
   <li>terms & conditions</li>
   <li>contact</li>
  </ul>
</div>

<div className='flex justify-self-start flex-col'>
{
  darkmode ? <span className='mb-5 font-semibold text-white'>Policy</span> :
  <span className='mb-5 font-semibold'>Policy</span>
}

  <ul className={`p-0 text-[17px] opacity-90 flex flex-col gap-2 cursor-pointer capitalize ${darkmode ? 'dark' : ''}`}>
   <li>privacy policy</li>
   <li>warranty policy</li>
   <li>private policy</li>
   <li>corporate policy</li>
   <li>register complain</li>
  </ul>
</div>

<div className='flex justify-self-start flex-col'>
{
  darkmode ? <span className='mb-5 font-semibold text-white'>Follow Us</span> :
  <span className='mb-5 font-semibold'>Follow Us</span>
}

  <ul className={`p-0 text-[17px] opacity-90 flex flex-col gap-2 cursor-pointer !text-3xl capitalize ${darkmode ? 'dark' : ''}`}>
   <li><FaFacebookF/></li>
   <li><RiInstagramFill/></li>
   <li><FaYoutube/></li>
   <li><FaTwitter/></li>
   <li><FaTiktok/></li>
  </ul>
</div>
  

</div>
 </div>
  {/* <div className={`footercontainer ${darkmode ? 'darkmode' : ''}`}>
<div className='border border-3 w-full'>
  <div className='flex part1 items-center justify-center  gap-2 ml-4'>
  <div className={`phonenumber flex items-center justify-between ${darkmode ? 'darkmode' : ''}`}>
<FaPhone/>
<span>+971 55 591 1818</span>
</div>

<div className={`phonenumber flex items-center justify-between ${darkmode ? 'darkmode' : ''}`}>
<RiHomeOfficeFill/>
<span>Emirates Islamic Bank Building, Office 333, First Floor, Al der Street, near Al Twar Center, Al Yahya 2, Dubai</span>
</div>

<div className={`phonenumber flex items-center justify-between ${darkmode ? 'darkmode' : ''}`}>
<MdLocalPostOffice/>
<span>ahmadali@gmail.com</span>
</div>
</div>

<div className={`socialicons ${darkmode ? 'darkmode' : ''}`}>
<FaFacebookF/>
<IoLogoWhatsapp/>
<RiInstagramFill/>
</div>
</div>
    </div> */}

   
 </>
  )
}
