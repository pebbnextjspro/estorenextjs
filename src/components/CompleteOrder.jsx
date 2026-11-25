"use client"


import { useTheme } from '@/app/context/ThemeContext';
import { Button } from '@mui/material';
import React, { useEffect } from 'react'
import clientaxios from './axiosinstance';

function CompleteOrder() {

     const {darkmode,setcartserverprice,setcartserverqty} = useTheme();


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
     
           if (error.response) {
     
             alert(error.response.data.msg)
           } else {
     
             alert('Server is not responding')
           }
     
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
     
           if (error.response) {
     
             alert(error.response.data.msg)
           } else {
     
             alert('Server is not responding')
           }
     
         }
       }

       useEffect(() => {

        GetCartPrice();
        GetCartQty();

       },[])
     

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
