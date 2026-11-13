"use client";

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
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

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import clientaxios from './axiosinstance';
import { useRouter } from 'next/navigation';

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


  const {darkmode , setdarkmode , dropdownactive , setdropdownactive,search , setsearch} = useTheme();
  const [sidebaractive , setsidebaractive] = useState(false);
      const [open, setOpen] = useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);
      const [listdata , setlistdata] = useState([]);
      const [searchmobile , setsearchmobile] = useState('');

      const router = useRouter();

      const handleSearchIcon = () => {

        setOpen(true);
        router.push('/');
        setsearchmobile('');
      }

      const handleLogo = () => {

      

        router.push('/')
      }


      const GetData = async () => {
      
         try {
      
           const res = await clientaxios.get(`/api/admin/products/product-list`);
      
          if (res.data.success) {

            const sorteddata = [...res.data.Data].sort((a , b) => {

              return a.ProductName.localeCompare(b.ProductName)
            })
      
              setlistdata(sorteddata);
      
          }
      
          
         } catch (error) {
      
          if(error.response) {
      
              alert(error.response.data.msg)
          } else {
      
              alert('Server is not responding')
          }
          
         }
      }

         const handleSubmit = (id,ProductImages4,ProductCategory) => {

        localStorage.setItem("productid" , id);
        localStorage.setItem("ProductImages4" , ProductImages4);
        localStorage.setItem("ProductCategory" , ProductCategory);
        setOpen(false);
        setdropdownactive(false)

       router.push('/product')

    }


       
    

      useEffect(() => {
      
          GetData();
         
       
      
      },[])



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
              <input type="text" value={searchmobile} onChange={(e) => setsearchmobile(e.target.value)}
              placeholder='Search' className='outline-1 w-70 !h-[35px] bg-[#E6E6E6] rounded-md px-3 outline-0' /> 
              <div className='w-[270px] h-80 absolute left-1 top-9 py-2 px-1 listcont'>
                <ul>
                   {
  listdata?.length !== 0 && listdata?.filter((data) => {
    if (searchmobile === '') {

      return data;
    } else {

      return  data.ProductName?.toLowerCase().includes(searchmobile.trim().toLowerCase());
    }
  }).map((data) => (
     <li key={data.id} className='flex items-center justify-between'
                   onClick={() => handleSubmit(data.id,data.ProductImages4,data.ProductCategory)}>
              <div>
                <span className='font-semibold'>{data.ProductName}</span>
                <div className='flex flex-col'>
    <span className='text-[15px] text-red-500 font-semibold'>{'Rs.'+Number(data.ProductNewPrice).toLocaleString("en-pk")}</span>
    <span className='text-[12px] text-black font-semibold line-through'>{'Rs.'+Number(data.ProductOldPrice).toLocaleString("en-pk")}</span>
   </div>
              </div>
              <div className='imagewrapper w-[80px] h-[80px] flex items-center justify-center border rounded p-3 shadow-2xl'>
<Image src={`${process.env.NEXT_PUBLIC_IMAGE_LINK}${data.ProductImages1}`} alt="headphone" width={100} height={100} className='object-contain' />
   </div>
            </li>
  ))
 }


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
      <div onClick={handleLogo}
       className={`logo cursor-pointer ${darkmode ? 'dark' : ''}`}>

<Image src={logo} alt='Logo'  width={120} height={120}/>

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

      <div className='desktopsearch' onClick={handleSearchIcon}>
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


 {
  listdata?.length !== 0 && listdata?.filter((data) => {
    if (search === '') {

      return data
    } else {

      return data.ProductName?.toLowerCase().includes(search.trim().toLowerCase())
    }
  }).map((data) => (
     <li key={data.id} className='flex items-start justify-between py-2 cursor-pointer' 
     style={{borderBottom: "1px solid rgba(0,0,0,0.2)"}}
  onClick={() => handleSubmit(data.id,data.ProductImages4,data.ProductCategory)}>
   <div className='flex gap-2'>
    <div className='imagewrapper w-[80px] h-[80px] flex items-center justify-center border rounded p-3'>
<Image src={`${process.env.NEXT_PUBLIC_IMAGE_LINK}${data.ProductImages1}`} alt="headphone" width={100} height={100} className='object-contain' />
   </div>
   <div>
    <span className='text-[18px] font-semibold'>{data.ProductName}</span>
    <span className='line-clamp-2 w-[200px]'>{data.ProductImages2}</span>
   </div>
   </div>

   <div className='flex flex-col'>
    <span className='text-[20px] text-red-500 font-semibold'>{'Rs.'+Number(data.ProductNewPrice).toLocaleString("en-pk")}</span>
    <span className='text-[18px] text-black font-semibold line-through'>{'Rs.'+Number(data.ProductOldPrice).toLocaleString("en-pk")}</span>
   </div>
   
  </li>  
  ))
 }
 
</ul>
        </div>
        <Button className='cancebutton' onClick={() => setdropdownactive(false)}>
         <span>X</span>
        </Button>
    </div>
    </header>
    </>
  )
}
