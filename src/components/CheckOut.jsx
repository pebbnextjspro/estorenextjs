"use client"

import { useTheme } from '@/app/context/ThemeContext'
import { Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import BlackScreen from './BlackScreen';
import { toast } from 'react-toastify/unstyled';
import clientaxios from './axiosinstance';

function CheckOut() {

    const {darkmode, loading , setloading} = useTheme();
    const [counter , setcounter] = useState(5);
    const [cartitems , setcartitems] = useState([]);
    const router = useRouter();
    const invoicenumber = Date.now();
    console.log("invoicenumber" , invoicenumber)

    const CartDelete = async () => {

      setloading(true)

      try {
        const res = await clientaxios.post(`/api/admin/cart/cart-deleteall/${localStorage.getItem('userid')}`);
        if (res.data.success) {
          toast.success(res.data.Data);
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

    const handleSubmit = (e) => {

      e.preventDefault();


      setloading(true)

      Promise.all(cartitems.map((data) => {

      clientaxios.post(`/api/admin/invoice/invoice-create/${invoicenumber}` , data)     
      
      }     
    
    ))

  toast.success('Thank You for Shopping!')
    CartDelete();
    setloading(false);
    router.push('/completeorder');
    
    }

   useEffect(() => {

    

    GetItems();
   },[])
console.log('cartitems' , cartitems)
  return (
   <>
   {darkmode ? <div className='bg-[#171717] h-18'>
      
    </div> : 
    <div className='bg-white h-18'>
      
    </div>}

    {
        loading && <BlackScreen/>
      }

   <div className={darkmode ? 'container-fluid cartcontainer bg-[#171717]' : 'container-fluid cartcontainer bg-white'}>
     <div className='grid grid-cols-1 text-center'>
        <h2 className={darkmode ? 'text-white' : 'text-[#171717]'}>Your Cart</h2>
           </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
      <div className='bg-[#F5F5F5] rounded p-4'>
      <form onSubmit={handleSubmit}  className='flex flex-col gap-2' action="">
          <span className='text-2xl font-semibold'>Delivery</span>
         <select className='w-full h-12 rounded border-1 px-3 border-black' name="" id="" required>
       <option value="">Pakistan</option>
       <option value="">Lahore</option>
       </select>
      <div className='flex gap-2'>
         <input type="text" className='w-full h-12 rounded border-1 px-3 border-black focus:outline-[rgba(0,0,230,0.4)]'
       placeholder='First Name' required />
             <input type="text" className='w-full h-12 rounded border-1 px-3 border-black focus:outline-[rgba(0,0,230,0.4)]'
       placeholder='Last Name' required />
      </div>
      <input type="text" className='w-full h-12 rounded border-1 px-3 border-black focus:outline-[rgba(0,0,230,0.4)]'
       placeholder='Address' required />
        <div className='flex gap-2'>
         <input type="text" className='w-full h-12 rounded border-1 px-3 border-black focus:outline-[rgba(0,0,230,0.4)]'
       placeholder='City' required />
             <input type="text" className='w-full h-12 rounded border-1 px-3 border-black focus:outline-[rgba(0,0,230,0.4)]'
       placeholder='Postal Code (Optional)' />
       
      </div>
       <input type="text" className='w-full h-12 rounded border-1 px-3 border-black focus:outline-[rgba(0,0,230,0.4)]'
       placeholder='Phone' required/>
       <input type="email" className='w-full h-12 rounded border-1 px-3 border-black focus:outline-[rgba(0,0,230,0.4)]'
       placeholder='Email Address' required />
       
       <Button
        type='submit' className='!bg-black !text-white !font-bold'>
  <span>Complete Order</span>
</Button>
       
      </form>
      
      </div>

       <div className=' w-full flex px-7'>
<div className='w-full h-auto bg-[#F5F5F5] rounded border border-[rgba(0,0,0,0.2)] p-7 flex flex-col gap-3
sticky top-10 self-start'>
<div className='flex items-center justify-between'>
  <span className='text-[20px] font-semibold'>Total</span>
  <span className='text-[19px] font-semibold'>Rs.{Number(localStorage.getItem('totalamount')).toLocaleString('en-pk')}</span>
</div>
<div className='flex items-center justify-between'>
  <span className='text-[20px] font-semibold'>Shipping Charges</span>
  <span className='text-[18px] font-semibold'>Rs.{Number(localStorage.getItem('shipcharges')).toLocaleString('en-pk')}</span>
</div>
<div className='flex items-center justify-between'>
  <span className='text-[20px] font-semibold'>Discount</span>
  <span className='text-[17px] font-light'>-</span>
</div>
<div className='flex items-center justify-between'>
  <span className='text-[20px] font-semibold'>Grand Total</span>
  <span className='text-[23px] font-bold'>Rs.{Number(localStorage.getItem('grandtotal')).toLocaleString('en-pk')}</span>
</div>
</div>
       </div>

       
           </div>
   </div>
   </>
  )
}

export default CheckOut