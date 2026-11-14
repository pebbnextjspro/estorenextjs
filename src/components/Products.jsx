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

    const {darkmode , setdarkmode ,catload , setcatload, categoryid,categorylist,setcategoryid,
      productcolor , setproductcolor
    } = useTheme();

        const [listdata , setlistdata] = useState([]);
      
        const router = useRouter();
    
         const GetData = async () => {
          
             try {
          
               const res = await clientaxios.get(`/api/admin/products/product-listnextjs`);
    
          
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

           const GetDataByCat = async () => {
          
             try {
          
    const res = await clientaxios.get(`/api/admin/products/product-listbycategory/${categoryid}`);
    
          
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

             const GetDataByColor = async () => {
          
             try {
          
    const res = await clientaxios.get(`/api/admin/products/product-listbycolor/${categoryid}/${productcolor}`);
    
          
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

    const handleAllItemClick = () => {

     setcategoryid(0)
     setproductcolor('')
    
    }

const handleColorChange = (e) => {

  const value = e.target.value;

  setproductcolor(value) 

} 

    const Scrolling = () => {

      window.scrollTo({
        behavior: "smooth",
        top: 850
      })
    }


            useEffect(() => {
                
            if (categoryid === 0) {

              GetData();
            } else {

                GetDataByCat()
              Scrolling();
            }

                
                },[categoryid])

                       useEffect(() => {
                
                   if (productcolor === '') {

              GetData();
            } else {

                GetDataByColor()
             
            }              

                
                },[productcolor])


                  useEffect(() => {
                
              GetData()

            return () => setcategoryid(0)
                
                },[])


    
          


  return (
  <>


  <div className='w-full h-auto rounded bg-white grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 xl:grid-cols-4
  items-center justify-center p-2 gap-2.5 mb-5'>
  <div>
{/* 
    <div>
      <ul>
          {
      listdata?.length !== 0 && listdata?.map((data) => (
<div onClick={() => handleColorChange(data.ProductColor)}>
  <li>{data.ProductColor}</li>
</div>
      ))
    }
      </ul>
    </div> */}
     
  <select
  className="block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base outline-0 shadow-xs placeholder:text-body"
  onChange={handleColorChange}
  defaultValue=""
>
  <option
    value=""
    disabled
    style={{ textTransform: "capitalize" }}
  >
    Choose Color
  </option>

  {listdata?.length > 0 &&
    listdata.map((data) => (
      <option
        key={data.id}
        style={{
          backgroundColor: data.ProductColor,
          color: "white",
          textTransform: "capitalize",
        }}
        value={data.ProductColor}
      >
        {data.ProductColor}
      </option>
    ))}
</select>
  </div>
  <div className='flex items-center pricefilter'>
   <input type="text" className='w-1/2 h-12 rounded border p-2' placeholder='Price Min'/>
   <span>-</span>
   <input type="text" className='w-1/2 h-12 rounded border p-2' placeholder='Price Max'/>
  </div>
  <div>
   <select
  defaultValue=""
  className="block w-full px-3 py-2.5 
  bg-neutral-secondary-medium border border-default-medium text-heading text-sm outline-0 rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
>
  <option value="" disabled>Choose Rating</option>
  <option value="US">United States</option>
  <option value="CA">Canada</option>
  <option value="FR">France</option>
  <option value="DE">Germany</option>
</select>
  </div>
  <div>
    <Button className='w-full h-12 bg-black text-white' onClick={handleAllItemClick}>
      <span>All Items</span>
    </Button>
  </div>

  </div>

  {/* {
    darkmode ? <div className="w-full h-40 bg-[#171717] flex items-center justify-center text-white">
    <h2 className="opacity-80">All Products</h2>
  </div> :

  <div className="w-full h-20 bg-white flex items-center justify-center text-black">
    <h2 className="opacity-80">All Products</h2>
  </div>
  } */}



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