"use client";

import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../../public/logo.png'
import Link from 'next/link'
import Search from './Search'
import { CiShoppingCart } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { useTheme } from '@/app/context/ThemeContext';
import { IoIosMenu } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { Button } from '@mui/material';
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import head2 from '../../nextjs/hero/2.png'
import head1 from '../../nextjs/hero/1.png'
import head3 from '../../nextjs/hero/3.png'
import head4 from '../../nextjs/hero/4.png'
import head5 from '../../nextjs/hero/5.png'
import head6 from '../../nextjs/hero/6.png'
import head7 from '../../nextjs/hero/7.png'
import head8 from '../../nextjs/hero/8.png'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  // display: "flex",
  // alignItems: "center",
  // justifyContent: "center"
};








export default function Header() {


  const {darkmode , setdarkmode , dropdownactive , setdropdownactive} = useTheme();
  const [sidebaractive , setsidebaractive] = useState(false);
      const [open, setOpen] = useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);


  return (
    <>
       
         <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className='mobilemodelcontainer'
          >
          <Box sx={style}>          
             <div className='relative'>
              <input type="text"
              placeholder='Search' className='outline-1 w-[280px] !h-[35px] bg-[#E6E6E6] rounded-md px-3 outline-0' /> 
              <div className='w-[270px] h-80 absolute left-1 top-9 py-2 px-1 listcont'>
                <ul>
                   <li className='flex items-center justify-between'
                   onClick={handleClose}>
              <div>
                <span className='font-semibold'>Product Name</span>
                <div className='flex flex-col'>
    <span className='text-[15px] text-red-500 font-semibold'>Rs.8,00/-</span>
    <span className='text-[12px] text-black font-semibold line-through'>Rs.9,00/-</span>
   </div>
              </div>
              <div className='imagewrapper w-[80px] h-[80px] flex items-center justify-center border rounded p-3 shadow-2xl'>
<Image src={head1} alt="headphone" width={100} height={100} className='object-contain' />
   </div>
            </li>

<li className='flex items-center justify-between'
                   onClick={handleClose}>
              <div>
                <span className='font-semibold'>Product Name</span>
                <div className='flex flex-col'>
    <span className='text-[15px] text-red-500 font-semibold'>Rs.8,00/-</span>
    <span className='text-[12px] text-black font-semibold line-through'>Rs.9,00/-</span>
   </div>
              </div>
              <div className='imagewrapper w-[80px] h-[80px] flex items-center justify-center border rounded p-3 shadow-2xl'>
<Image src={head2} alt="headphone" width={100} height={100} className='object-contain' />
   </div>
            </li>
            <li className='flex items-center justify-between'
                   onClick={handleClose}>
              <div>
                <span className='font-semibold'>Product Name</span>
                <div className='flex flex-col'>
    <span className='text-[15px] text-red-500 font-semibold'>Rs.8,00/-</span>
    <span className='text-[12px] text-black font-semibold line-through'>Rs.9,00/-</span>
   </div>
              </div>
              <div className='imagewrapper w-[80px] h-[80px] flex items-center justify-center border rounded p-3 shadow-2xl'>
<Image src={head3} alt="headphone" width={100} height={100} className='object-contain' />
   </div>
            </li>
            <li className='flex items-center justify-between'
                   onClick={handleClose}>
              <div>
                <span className='font-semibold'>Product Name</span>
                <div className='flex flex-col'>
    <span className='text-[15px] text-red-500 font-semibold'>Rs.8,00/-</span>
    <span className='text-[12px] text-black font-semibold line-through'>Rs.9,00/-</span>
   </div>
              </div>
              <div className='imagewrapper w-[80px] h-[80px] flex items-center justify-center border rounded p-3 shadow-2xl'>
<Image src={head4} alt="headphone" width={100} height={100} className='object-contain' />
   </div>
            </li>
            <li className='flex items-center justify-between'
                   onClick={handleClose}>
              <div>
                <span className='font-semibold'>Product Name</span>
                <div className='flex flex-col'>
    <span className='text-[15px] text-red-500 font-semibold'>Rs.8,00/-</span>
    <span className='text-[12px] text-black font-semibold line-through'>Rs.9,00/-</span>
   </div>
              </div>
              <div className='imagewrapper w-[80px] h-[80px] flex items-center justify-center border rounded p-3 shadow-2xl'>
<Image src={head5} alt="headphone" width={100} height={100} className='object-contain' />
   </div>
            </li>
            <li className='flex items-center justify-between'
                   onClick={handleClose}>
              <div>
                <span className='font-semibold'>Product Name</span>
                <div className='flex flex-col'>
    <span className='text-[15px] text-red-500 font-semibold'>Rs.8,00/-</span>
    <span className='text-[12px] text-black font-semibold line-through'>Rs.9,00/-</span>
   </div>
              </div>
              <div className='imagewrapper w-[80px] h-[80px] flex items-center justify-center border rounded p-3 shadow-2xl'>
<Image src={head6} alt="headphone" width={100} height={100} className='object-contain' />
   </div>
            </li>
            <li className='flex items-center justify-between'
                   onClick={handleClose}>
              <div>
                <span className='font-semibold'>Product Name</span>
                <div className='flex flex-col'>
    <span className='text-[15px] text-red-500 font-semibold'>Rs.8,00/-</span>
    <span className='text-[12px] text-black font-semibold line-through'>Rs.9,00/-</span>
   </div>
              </div>
              <div className='imagewrapper w-[80px] h-[80px] flex items-center justify-center border rounded p-3 shadow-2xl'>
<Image src={head7} alt="headphone" width={100} height={100} className='object-contain' />
   </div>
            </li>
            
              </ul>
              </div>
              </div>          
            </Box>
          </Modal>
    <div className={`sidebarcontainer ${sidebaractive ? 'active' : ''}`}>
    <div className='sidebarnew relative px-2'>
<IoIosArrowDroprightCircle onClick={() => setsidebaractive(!sidebaractive)}/>
 <div className={`logosidebar ${darkmode ? 'dark' : ''}`}>
<Link href={'http://www.google.com'}>
<Image src={logo} alt='Logo' width={90} height={90}/>
</Link> 

      </div>
      <div className='categories mt-10'>
     {/* <Button>
         <h6>Categories</h6>
        <IoIosArrowDown/>
     </Button> */}
        <ul>
         
            <Link href={'/'}>
            <li><Button>
              <span>Home</span>
              </Button></li>
            </Link>
          <li><Button>
              <span>About Us</span>
              </Button></li>
          <li><Button>
              <span>New Arrival</span>
              </Button></li>
          <li><Button>
              <span>Top Collection</span>
              </Button></li>
          <li><Button>
              <span>Contact Us</span>
              </Button></li>

               <li><Button className='wishbutton'>
               
              <span>Wish List</span>
               <CiHeart/>
              </Button></li>

               <li><Button className='wishbutton'>
              
              <span>Login/Register</span>
                <CiUser/>
              </Button></li>
         
        </ul>
      </div>
    </div>
    </div>
    <header className={`myheader ${darkmode ? 'dark' : ''}`}>
      <div className='page-container flex items-center justify-between border-b-[0.5px] border-[rgba(0,0,0,0.2)] px-3 py-2'>
        <div className='menubar'onClick={() => setsidebaractive(!sidebaractive)}>
 {
          darkmode ? <IoIosMenu color='white' size={30}/> : <IoIosMenu color='black' size={30}/>
        }
        </div>
      <div className={`logo ${darkmode ? 'dark' : ''}`}>
<Link href={'/'}>
<Image src={logo} alt='Logo'  width={120} height={120}/>
</Link> 
      </div>
      <div>
      <Search/>
    </div>

  
    <div className='flex gap-2 items-center'>
      
<div className={`darkmodecontainer ${darkmode ? 'dark' : ''}`}>
{
  darkmode ? <CiDark onClick={() => setdarkmode(false)} size={30} /> : 
 <MdDarkMode onClick={() => setdarkmode(true)} size={30} />
}
</div>

      <Link href={'/wishlist'} className='flex justify-center items-center relative wishiconcontainer'>
    {darkmode ? <CiHeart style={{color: "#fff"}} size={35} onClick={() => alert('ckucj')}/> :
     <CiHeart style={{color: "#000"}}
     size={35} onClick={() => alert('ckucj')}/>}
   <span className='w-6 h-6 bg-red-500 rounded-full flex justify-center items-center text-white font-bold
   absolute -top-2 -right-2'>10</span>
      </Link>
{/* //////////////////////////////////////////////////////////// Mobile Search //////////////////////////////////////// */}

      <div className='desktopsearch' onClick={() => setOpen(true)}>
        {
          darkmode ? <IoSearchOutline color='white' size={30}/> : <IoSearchOutline color='black' size={30}/>
        }
      </div>
{/* //////////////////////////////////////////////////////////// Mobile Search //////////////////////////////////////// */}      

      <Link href={'/cart'} className='flex justify-center items-center relative'>
      {darkmode ? <CiShoppingCart style={{color: "#fff"}} size={35}/> : <CiShoppingCart style={{color: "#000"}} size={35}/>}
   <span className='w-6 h-6 bg-red-500 rounded-full flex justify-center items-center text-white font-bold
   absolute -top-2 -right-2'>10</span>
      </Link>

       <Link href={'/user'} className='flex justify-center items-center relative logincontainer'>
      {darkmode ? <CiUser style={{color: "#fff"}} size={35}/> : <CiUser style={{color: "#000"}} size={35}/>}
      </Link>
      
    </div>

    
    
    </div>

    <div className={`dropdown ${dropdownactive ? 'active' : ''}`}>
        <div className='listdropdown p-0'>
<ul className='p-0'>


  <li className='flex items-start justify-between py-2 cursor-pointer' style={{borderBottom: "1px solid rgba(0,0,0,0.2)"}}
  onClick={() => setdropdownactive(false)}>
   <div className='flex gap-2'>
    <div className='imagewrapper w-[80px] h-[80px] flex items-center justify-center border rounded p-3'>
<Image src={head1} alt="headphone" width={100} height={100} className='object-contain' />
   </div>
   <div>
    <span className='text-[18px] font-semibold'>Product Name</span>
    <span className='line-clamp-2 w-[200px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas dolorum dolores minima laborum expedita dolor itaque. 
      Ipsa accusantium debitis cupiditate sequi. A dolorem dolore quibusdam hic! Quis hic necessitatibus doloribus.</span>
   </div>
   </div>

   <div className='flex flex-col'>
    <span className='text-[20px] text-red-500 font-semibold'>Rs.8,00/-</span>
    <span className='text-[18px] text-black font-semibold line-through'>Rs.9,00/-</span>
   </div>
   
  </li>

   <li className='flex items-start justify-between py-2 cursor-pointer' style={{borderBottom: "1px solid rgba(0,0,0,0.2)"}}
  onClick={() => setdropdownactive(false)}>
   <div className='flex gap-2'>
    <div className='imagewrapper w-[80px] h-[80px] flex items-center justify-center border rounded p-3'>
<Image src={head2} alt="headphone" width={100} height={100} className='object-contain' />
   </div>
   <div>
    <span className='text-[18px] font-semibold'>Head Phone</span>
    <span className='line-clamp-2 w-[200px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas dolorum dolores minima laborum expedita dolor itaque. 
      Ipsa accusantium debitis cupiditate sequi. A dolorem dolore quibusdam hic! Quis hic necessitatibus doloribus.</span>
   </div>
   </div>

   <div className='flex flex-col'>
    <span className='text-[20px] text-red-500 font-semibold'>Rs.8,00/-</span>
    <span className='text-[18px] text-black font-semibold line-through'>Rs.9,00/-</span>
   </div>
   
  </li>

   <li className='flex items-start justify-between py-2 cursor-pointer' style={{borderBottom: "1px solid rgba(0,0,0,0.2)"}}
  onClick={() => setdropdownactive(false)}>
   <div className='flex gap-2'>
    <div className='imagewrapper w-[80px] h-[80px] flex items-center justify-center border rounded p-3'>
<Image src={head3} alt="headphone" width={100} height={100} className='object-contain' />
   </div>
   <div>
    <span className='text-[18px] font-semibold'>Product Name</span>
    <span className='line-clamp-2 w-[200px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas dolorum dolores minima laborum expedita dolor itaque. 
      Ipsa accusantium debitis cupiditate sequi. A dolorem dolore quibusdam hic! Quis hic necessitatibus doloribus.</span>
   </div>
   </div>

   <div className='flex flex-col'>
    <span className='text-[20px] text-red-500 font-semibold'>Rs.8,00/-</span>
    <span className='text-[18px] text-black font-semibold line-through'>Rs.9,00/-</span>
   </div>
   
  </li>

   <li className='flex items-start justify-between py-2 cursor-pointer' style={{borderBottom: "1px solid rgba(0,0,0,0.2)"}}
  onClick={() => setdropdownactive(false)}>
   <div className='flex gap-2'>
    <div className='imagewrapper w-[80px] h-[80px] flex items-center justify-center border rounded p-3'>
<Image src={head4} alt="headphone" width={100} height={100} className='object-contain' />
   </div>
   <div>
    <span className='text-[18px] font-semibold'>Product Name</span>
    <span className='line-clamp-2 w-[200px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas dolorum dolores minima laborum expedita dolor itaque. 
      Ipsa accusantium debitis cupiditate sequi. A dolorem dolore quibusdam hic! Quis hic necessitatibus doloribus.</span>
   </div>
   </div>

   <div className='flex flex-col'>
    <span className='text-[20px] text-red-500 font-semibold'>Rs.8,00/-</span>
    <span className='text-[18px] text-black font-semibold line-through'>Rs.9,00/-</span>
   </div>
   
  </li>

   <li className='flex items-start justify-between py-2 cursor-pointer' style={{borderBottom: "1px solid rgba(0,0,0,0.2)"}}
  onClick={() => setdropdownactive(false)}>
   <div className='flex gap-2'>
    <div className='imagewrapper w-[80px] h-[80px] flex items-center justify-center border rounded p-3'>
<Image src={head5} alt="headphone" width={100} height={100} className='object-contain' />
   </div>
   <div>
    <span className='text-[18px] font-semibold'>Product Name</span>
    <span className='line-clamp-2 w-[200px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas dolorum dolores minima laborum expedita dolor itaque. 
      Ipsa accusantium debitis cupiditate sequi. A dolorem dolore quibusdam hic! Quis hic necessitatibus doloribus.</span>
   </div>
   </div>

   <div className='flex flex-col'>
    <span className='text-[20px] text-red-500 font-semibold'>Rs.8,00/-</span>
    <span className='text-[18px] text-black font-semibold line-through'>Rs.9,00/-</span>
   </div>
   
  </li>

   <li className='flex items-start justify-between py-2 cursor-pointer' style={{borderBottom: "1px solid rgba(0,0,0,0.2)"}}
  onClick={() => setdropdownactive(false)}>
   <div className='flex gap-2'>
    <div className='imagewrapper w-[80px] h-[80px] flex items-center justify-center border rounded p-3'>
<Image src={head6} alt="headphone" width={100} height={100} className='object-contain' />
   </div>
   <div>
    <span className='text-[18px] font-semibold'>Product Name</span>
    <span className='line-clamp-2 w-[200px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas dolorum dolores minima laborum expedita dolor itaque. 
      Ipsa accusantium debitis cupiditate sequi. A dolorem dolore quibusdam hic! Quis hic necessitatibus doloribus.</span>
   </div>
   </div>

   <div className='flex flex-col'>
    <span className='text-[20px] text-red-500 font-semibold'>Rs.8,00/-</span>
    <span className='text-[18px] text-black font-semibold line-through'>Rs.9,00/-</span>
   </div>
   
  </li>

   <li className='flex items-start justify-between py-2 cursor-pointer' style={{borderBottom: "1px solid rgba(0,0,0,0.2)"}}
  onClick={() => setdropdownactive(false)}>
   <div className='flex gap-2'>
    <div className='imagewrapper w-[80px] h-[80px] flex items-center justify-center border rounded p-3'>
<Image src={head7} alt="headphone" width={100} height={100} className='object-contain' />
   </div>
   <div>
    <span className='text-[18px] font-semibold'>Product Name</span>
    <span className='line-clamp-2 w-[200px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas dolorum dolores minima laborum expedita dolor itaque. 
      Ipsa accusantium debitis cupiditate sequi. A dolorem dolore quibusdam hic! Quis hic necessitatibus doloribus.</span>
   </div>
   </div>

   <div className='flex flex-col'>
    <span className='text-[20px] text-red-500 font-semibold'>Rs.8,00/-</span>
    <span className='text-[18px] text-black font-semibold line-through'>Rs.9,00/-</span>
   </div>
   
  </li>
   <li className='flex items-start justify-between py-2 cursor-pointer' style={{borderBottom: "1px solid rgba(0,0,0,0.2)"}}
  onClick={() => setdropdownactive(false)}>
   <div className='flex gap-2'>
    <div className='imagewrapper w-[80px] h-[80px] flex items-center justify-center border rounded p-3'>
<Image src="/headphone.png" alt="headphone" width={100} height={100} className='object-contain' />
   </div>
   <div>
    <span className='text-[18px] font-semibold'>Product Name</span>
    <span className='line-clamp-2 w-[200px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas dolorum dolores minima laborum expedita dolor itaque. 
      Ipsa accusantium debitis cupiditate sequi. A dolorem dolore quibusdam hic! Quis hic necessitatibus doloribus.</span>
   </div>
   </div>

   <div className='flex flex-col'>
    <span className='text-[20px] text-red-500 font-semibold'>Rs.8,00/-</span>
    <span className='text-[18px] text-black font-semibold line-through'>Rs.9,00/-</span>
   </div>
   
  </li>
   <li className='flex items-start justify-between py-2 cursor-pointer' style={{borderBottom: "1px solid rgba(0,0,0,0.2)"}}
  onClick={() => setdropdownactive(false)}>
   <div className='flex gap-2'>
    <div className='imagewrapper w-[80px] h-[80px] flex items-center justify-center border rounded p-3'>
<Image src="/headphone.png" alt="headphone" width={100} height={100} className='object-contain' />
   </div>
   <div>
    <span className='text-[18px] font-semibold'>Product Name</span>
    <span className='line-clamp-2 w-[200px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas dolorum dolores minima laborum expedita dolor itaque. 
      Ipsa accusantium debitis cupiditate sequi. A dolorem dolore quibusdam hic! Quis hic necessitatibus doloribus.</span>
   </div>
   </div>

   <div className='flex flex-col'>
    <span className='text-[20px] text-red-500 font-semibold'>Rs.8,00/-</span>
    <span className='text-[18px] text-black font-semibold line-through'>Rs.9,00/-</span>
   </div>
   
  </li>
 
</ul>
        </div>
    </div>
    </header>
    </>
  )
}
