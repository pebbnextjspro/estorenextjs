import React, { useState } from 'react'
import Rating from '@mui/material/Rating';
import user from '../../../nextjs/client.png'
import { Button } from '@mui/material';
import Image from 'next/image';
import { MdRateReview } from "react-icons/md";




function ReviewForm({imagearray , values}) {

    

  return (
   <>
   <div className='w-full h-auto p-4 bg-white border border-[rgba(0,0,0,0.2)] shadow-[rgba(0,0,0,0.3)] rounded
flex flex-column items-center justify-center mt-2'>
<Button className='!flex !items-center !justify-between w-[200px] h-[50px] !bg-[#02B290] !text-white !p-2 mb-2'>
    <span className='capitalize font-semibold text-[18px]'>Write a Review</span>
    <MdRateReview className='!text-[20px]' />
</Button>
<form onSubmit={values.handleSubmit}
 action="" className='flex flex-column justify-center items-center gap-4 w-full'>
    <label htmlFor="">Rating</label>
    <Rating value={values.rating} onChange={(e) => values.setrating(e.target.value)} size='large' />

     <label htmlFor="" className='font-semibold'>Upload Your Image</label>
     <div>
                    <div className='w-40 h-40 border-0 rounded bg-white mb-2 overflow-hidden flex items-center 
                    justify-center'>

    {
    values.prevuserimage ? <Image src={values.prevuserimage} alt='image' width={100} height={100}/> :
    <Image src={user} alt='image' width={100} height={100}/>
}


            </div>
        <div className='w-40 h-10 bg-black relative flex items-center justify-center rounded-2xl'>
        <input type="file" onChange={values.handleUserImage} accept='image/*' className='w-full h-full absolute opacity-0'/>
        <span className='text-[14px] text-amber-50'>Upload Image</span>
        {/* <GoUpload className='text-4xl cursor-pointer'/> */}
     </div>
     </div>


    <label htmlFor="" className='font-semibold'>Your Name</label>
    <input type="text" required maxLength={15} className='form-control text-center' placeholder='Start Writing Here'
    value={values.username} onChange={(e) => values.setusername(e.target.value)} />

    <label htmlFor="" className='font-semibold'>Your Comments</label>
    <textarea type="text" className='form-control text-center' maxLength={200}
     placeholder='Start Writing Here' required value={values.comments} onChange={(e) => values.setcomments(e.target.value)} />


     <label htmlFor="" className='font-semibold'>Upload Product Image</label>
     <div>
                    <div className='w-40 h-40 border-0 rounded bg-white mb-2 overflow-hidden flex items-center 
                    justify-center'>
{
    values.prevproimage ? <Image src={values.prevproimage} alt='image' width={100} height={100}/> :
    <Image src={`${process.env.NEXT_PUBLIC_IMAGE_LINK}${imagearray[0]}`} alt='image' width={100} height={100}/>
}
            </div>
        <div className='w-40 h-10 bg-black relative flex items-center justify-center rounded-2xl'>
        <input type="file" required onChange={values.handleProductImage} accept='image/*' className='w-full h-full absolute opacity-0'/>
        <span className='text-[14px] text-amber-50'>Upload Image</span>
        {/* <GoUpload className='text-4xl cursor-pointer'/> */}
     </div>
     </div>


     <label htmlFor="" className='font-semibold'>Email Address</label>
    <input type="email" className='form-control text-center' required
    placeholder='Enter Your Email Address (Email will not show on Public)'
    value={values.emailaddress} onChange={(e) => values.setemailaddress(e.target.value)} />
     <Button className='w-40 h-10 bg-black relative flex items-center justify-center rounded-2xl text-white' type='submit'>
        <span>Submit Review</span>
     </Button>
</form>
</div>

   </>
  )
}

export default ReviewForm
