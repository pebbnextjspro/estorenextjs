"use client"

import { useTheme } from '@/app/context/ThemeContext'
import { Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import BlackScreen from './BlackScreen';
import clientaxios from './axiosinstance';
import { toast } from 'react-toastify/unstyled';
import { useRouter } from 'next/navigation';

function CartPage() {

    const {darkmode , loading , setloading,cartserverprice,cartserverqty , setcartserverqty,setcartserverprice} = useTheme();
    const [counter , setcounter] = useState(5);
    const [cartitems , setcartitems] = useState([]);
    const router = useRouter();
    

    const GetItems = async () => {

      setloading(true)

      try {
        const res = await clientaxios.get(`/api/admin/cart/table-list/${localStorage.getItem('userid')}`);
        if (res.data.success) {
          setcartitems(res.data.Data);
        }
      } catch (error) {
        if(error.response){
          toast.error(`${error.response.data.msg}`)
        } else {
         toast.error(`Server not responding`)
        }
      } finally {
        setloading(false)
      }
    }

     const GetCartQty = async () => {
      
         try {
      
           const res = await clientaxios.get(`/api/admin/cart/cart-qty/${localStorage.getItem('userid')}`);

      
          if (res.data.success) {

            // const sorteddata = [...res.data.Data].sort((a , b) => {

            //   return a.CategoryName.localeCompare(b.CategoryName)
            // })

            const getqty = (res.data.Data[0].ProductQty)
      
              setcartserverqty(Number(getqty));
      
          }
      
          
         } catch (error) {
      
          if(error.response) {
      
              alert(error.response.data.msg)
          } else {
      
              alert('Server is not responding')
          }
          
         }
      }

       const GetCartPrice = async () => {
            
               try {
            
                 const res = await clientaxios.get(`/api/admin/cart/cart-qty/${localStorage.getItem('userid')}`);
      
            
                if (res.data.success) {
      
                  // const sorteddata = [...res.data.Data].sort((a , b) => {
      
                  //   return a.CategoryName.localeCompare(b.CategoryName)
                  // })
      
                  const getqty = (res.data.Data[0].ProductNewPrice)
            
                    setcartserverprice(Number(getqty));
            
                }
            
                
               } catch (error) {
            
                if(error.response) {
            
                    alert(error.response.data.msg)
                } else {
            
                    alert('Server is not responding')
                }
                
               }
            }

        useEffect(() => {
if(!localStorage.getItem('userid')) {

  router.push('/login')
} else {

  GetItems();
GetCartQty();
GetCartPrice();
}


        },[])

        console.log('cartitems' , cartitems)


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

  {
    loading && <BlackScreen/>
  }

   <div className='bg-white'>
     <div className='flex p-2 items-center justify-center'>
     <h2>Your Cart</h2>
    </div>

  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full h-auto p-2 gap-2.5 cartcontainer'>

{/* ///////////////////// Table Part ///////////////////////////////////////////////////////////////////////\\\\ */}
    <div className='p-2'>

{
  cartitems?.length !== 0 && cartitems?.map((data , index) => (
 
 <div className='part1 mb-2' key={index}>
 <div className='imagecontent'>
   <div className='imagewrapper border rounded flex items-center justify-center p-2'>
    <Image src={`${process.env.NEXT_PUBLIC_IMAGE_LINK}${data.ProductImages1}`} alt='Headphone' width={100} height={100}/>
  </div>
  <div className='flex flex-col'>
    <span className='text-2xl font-semibold'>{data.ProductName}</span>
    <span className='line-clamp-2 clampwidth'>{data?.ProductDescription}</span>
     <div className='flex gap-2'>
      <span>Color:</span>
     <div style={{width: "50px" , height: "20px", backgroundColor: data.ProductColor ,
      border: "1px solid rgba(0,0,0,0.2)", borderRadius: "5px", boxShadow: "1px 1px 5px rgba(0,0,0,0.3)"
     }}>

     </div>
     </div>
       <div className='flex items-center gap-2'>
          <span className='text-[22px] text-red-600'>Rs. {Number(data.ProductNewPrice).toLocaleString('en-pk')}</span>
          <span className='text-black line-through'>Rs.{Number(data.ProductOldPrice).toLocaleString('en-pk')}</span>
        </div>
  </div>
 </div>
 <div className='border border-[rgba(0,0,0,0.2)] rounded w-52 h-[50px] flex items-center justify-between bg-white'>
    
    <Button>
        <span className='text-black text-3xl'>-</span>
    </Button>
    {/* <input className='text-center w-20 outline-0 font-bold text-black'
     type="text" value={counter} onChange={handleOnChange} readOnly /> */}
     <span>{data.TotalQty}</span>
    <Button>
        <span className='text-black text-2xl'>+</span>
    </Button>
</div>
 <div className='flex flex-col'>
  <span className='font-semibold opacity-85'>Total Price</span>
  <span className='text-2xl text-green-700'>Rs.{Number(data.TotalAmount).toLocaleString('en-pk')}</span>
 </div>

  </div>


  ))
}

</div>


{/* ///////////////////// Table Part ///////////////////////////////////////////////////////////////////////\\\\ */}

{/* ///////////////////// Priceing Part ///////////////////////////////////////////////////////////////////////\\\\ */}

<div>
 <div className=' bg-[#F5F5F5] h-auto rounded border border-[rgba(0,0,0,0.2)] flex flex-col gap-3
sticky top-10 self-start p-7'>
   <div className='flex items-center justify-between'>
  <span className='text-[20px] font-semibold'>Total</span>
  <span className='text-[19px] font-semibold'>Rs.{Number(cartserverprice)}</span>
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