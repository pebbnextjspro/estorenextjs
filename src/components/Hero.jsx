'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import client from '../../public/client.png'
import Rating from '@mui/material/Rating';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import { Button } from '@mui/material';
import { useTheme } from '@/app/context/ThemeContext';
import head2 from '../../nextjs/hero/2.png'
import head1 from '../../nextjs/hero/1.png'
import head3 from '../../nextjs/hero/3.png'
import { useEffect, useState } from 'react';
import clientaxios from './axiosinstance';
import { useRouter } from 'next/navigation';



export default function Hero() {

    const {darkmode , setdarkmode} = useTheme();
    const [listdata , setlistdata] = useState([]);
    const [loading , setloading] = useState(false);

    const router = useRouter();

    const GetData = async () => {

        setloading(true)

       try {

        const res = await  clientaxios.get('/api/admin/banner/banner-list');

        if (res.data.success) {

            setlistdata(res.data.Data)
        }
        
       } catch (error) {

        alert('There is an error')
        
       } finally {

        setloading(false)
       }
    }

    const handleSubmit = (id,ProductImages4,ProductCategory) => {

        localStorage.setItem("productid" , id);
        localStorage.setItem("ProductImages4" , ProductImages4);
        localStorage.setItem("ProductCategory" , ProductCategory);

       router.push('/product')

    }

    useEffect(() => {

        GetData()
    },[])

    console.log('listdatabanner',listdata)

  return (

    
   <>

   
 {
    loading &&   <div className='w-full h-[500px] flex items-center justify-content-center'>
   <h2>Loading.....</h2>   
   </div>
 }


     <Swiper
      spaceBetween={30}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className={`mySwiper ${darkmode ? 'dark' : ''}`}
    >
    

      {

        listdata.length && listdata.map((data) => (
             <SwiperSlide>
        <div className='w-full slidercontainer'>
<div className='part1'>
{darkmode ? <h6 className='text-white'>{data.Heading1}</h6> : <h6>{data.Heading1}</h6>}
{darkmode ? <h2 className='text-white'>{data.ShortDesc}</h2> :
    <h2>{data.ShortDesc}</h2>}
    <Button onClick={() => handleSubmit(data.id,data.ProductImages4,data.ProductCategory)}>
        Buy Now
    </Button>
     <Button className='detailsbtn'>
        Details
    </Button>
  

    {
    darkmode ? <div className='flex gap-2 items-center'>
     <span className='newprice !text-3xl !font-extrabold !text-amber-500'>
        {'Rs.'+(data.NewPrice).toLocaleString('en-PK')+'/-'}</span>
    <span className='oldprice !text-2xl !text-white'>{'Rs.'+(data.OldPrice).toLocaleString('en-PK')+'/-'}</span>
   </div> :

   <div className='flex gap-2 items-center'>
     <span className='newprice !text-3xl !font-extrabold'>{'Rs.'+(data.NewPrice).toLocaleString('en-PK')+'/-'}</span>
    <span className='oldprice !text-2xl'>{'Rs.'+(data.OldPrice).toLocaleString('en-PK')+'/-'}</span>
   </div>
   }
</div>
<div className='part2'>
<Image
   src={`${process.env.NEXT_PUBLIC_IMAGE_LINK}${data.BannerImage}`}
  alt="Headphone"
  width={500}
  height={500}
/>
</div>
        </div>
     </SwiperSlide>

    
        ))
      }
      
             
    </Swiper> 
   </>
  );
}