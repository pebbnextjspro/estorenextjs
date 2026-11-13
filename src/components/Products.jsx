import React, { useEffect, useState } from 'react'
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import { RiShoppingCart2Fill } from "react-icons/ri";
import Image from 'next/image';
import { useTheme } from '@/app/context/ThemeContext';
import Link from 'next/link';
import head1 from '../../nextjs/hero/1.png'
import clientaxios from './axiosinstance';
import { useRouter } from 'next/navigation';


function Products() {

    const {darkmode , setdarkmode} = useTheme();

        const [listdata , setlistdata] = useState([]);
        const router = useRouter();
    
         const GetData = async () => {
          
             try {
          
               const res = await clientaxios.get(`/api/admin/products/product-list`);
    
          
              if (res.data.success) {
    
                // const sorteddata = [...res.data.Data].sort((a , b) => {
    
                //   return a.CategoryName.localeCompare(b.CategoryName)
                // })
          
                  setlistdata(res.data.Data);
          
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

       router.push('/product')

    }
    
            useEffect(() => {
                
                    GetData();
                
                },[])
    
                console.log('productlist' , listdata)
          


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



     {
      listdata?.length !== 0 && listdata?.map((data) => (
          <div key={data.id}
           className={`productwrapper ${darkmode ? 'dark' : ''}`}>
    
      <div className='cursor-pointer imagewrapper relative'
      onClick={() => handleSubmit(data.id,data.ProductImages4,data.ProductCategory)}>
        {/* ///////////////// */}
    <Image src={`${process.env.NEXT_PUBLIC_IMAGE_LINK}${data.ProductImages1}`} alt='HeadPhone' width={200} height={200}/> 
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
      
      <div className='contentwrapper ms-2'>
    <div className='productnamecontainer'>
       <Tooltip>
         {/* ///////////////// */}
        <span className={`productname ${darkmode ? 'dark' : ''}`}>{data.ProductName}</span>
      </Tooltip>      
    </div>
     <div className='productnamecontainer'>
       <Tooltip>
        <span className={`description line-clamp-2 ${darkmode ? 'dark' : ''}`}>{data.ProductImages2}</span>
      </Tooltip>      
    </div>
    <Rating name="read-only" value={5} readOnly size='small' />
    {/* <div className='flex gap-1 items-center'>
      <span className='newprice'>Rs. 6554</span>
    <span className={`oldprice ${darkmode ? 'dark' : ''}`}>Rs. 6554</span>
    </div> */}

     {
    darkmode ? <div className='flex gap-2 items-center procontainer'>
     <span 
     className='newprice !text-2xl !font-extrabold !text-amber-500'>{'Rs.'+Number(data.ProductNewPrice).toLocaleString("en-pk")}</span>
    <span 
    className='oldprice !text-white'>{'Rs.'+Number(data.ProductOldPrice).toLocaleString("en-pk")}</span>
   </div> :

   <div className='flex gap-2 items-center procontainer'>
     <span className='newprice !text-2xl !font-extrabold'>{'Rs.'+Number(data.ProductNewPrice).toLocaleString("en-pk")}</span>
    <span className='oldprice'>{'Rs.'+Number(data.ProductOldPrice).toLocaleString("en-pk")}</span>
   </div>
   }
    <div className='flex gap-2 items-center'>
    <Button >
          <RiShoppingCart2Fill/></Button>
   
    <span className='stock'>IN STOCK</span>
    </div>
      </div>
      </div>
      ))
     }

   
      
    </div>
  </>
  )
}

export default Products