"use client";

import Rating from '@mui/material/Rating';
import { CgMediaPodcast } from "react-icons/cg";
import { LiaShippingFastSolid } from "react-icons/lia";
import { GoThumbsup } from "react-icons/go";
import { TbReplace } from "react-icons/tb";




import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '@mui/material';
import color2 from '../../../nextjs/color2.png'
import color3 from '../../../nextjs/color3.png'
import color4 from '../../../nextjs/color4.png'
import { useRouter } from 'next/navigation';
import { GoUpload } from "react-icons/go";
import ProductSlider from '../ProductSlider';
import { useTheme } from '@/app/context/ThemeContext';
import clientaxios from '../axiosinstance';
import ReviewForm from './ReviewForm';
import { toast } from 'react-toastify/unstyled';
import BlackScreen from '../BlackScreen';



function SingleProduct() {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const {darkmode,loading , setloading} = useTheme();
    const [counter , setcounter] = useState(5);
    const [specspage , setspecspage] = useState(true);
    const [listdata , setlistdata] = useState({});
    const [listreview , setlistreview] = useState([]);
   
    const [imagearray , setimagearray] = useState([]);

    const [rating , setrating] = useState(1);
        const [username , setusername] = useState('');
     const [comments , setcomments] = useState('');
    const [emailaddress , setemailaddress] = useState('');

     const [productimage , setproductimage] = useState();
    const [prevproimage , setprevproimage] = useState();

    const [userimage , setuserimage] = useState();
    const [prevuserimage , setprevuserimage] = useState();

    const handleProductImage = (e) => {
    
        const file = e.target.files[0];
        const image = URL.createObjectURL(file);
    
        setprevproimage(image);
        setproductimage(file);    
        
    }
    
    const handleUserImage = (e) => {
    
        const file = e.target.files[0];
        const image = URL.createObjectURL(file);
    
        setprevuserimage(image);
        setuserimage(file);    
        
    }


    const handleSubmit = async (e) => {
    
        e.preventDefault();

        setloading(true)
    
        if (prevproimage === undefined) {
    
            alert('Please Upload Product Image');
            return;
        }

        try {

            const formdata = new FormData();

            formdata.append('rating' , rating)
            formdata.append('username' , username);
            formdata.append('comments' , comments);
            formdata.append('emailaddress' , emailaddress);
            formdata.append('productid' , listdata.id);
            formdata.append('productname' , listdata.ProductName);
            formdata.append('customerimage' , userimage);
            formdata.append('productimage' , productimage);

            const res = await clientaxios.post('/api/admin/review/review-create' , formdata);

            if (res.data.success) {

              toast.success(`${res.data.msg}`)
            } else {

                toast.error(res.data.msg)
            }
            
        } catch (error) {

            if (error.response) {

                toast.error(`${error.response.data.msg}`, {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
transition: Bounce,
}) 
            } else {

                alert('Server is not responding')
            }
            
        } finally {

             GetData();
             GetList();
             window.scrollTo({
                top: '800',
                behavior: "smooth"
             })
             setloading(false)
    
        }
    }

    


    const GetList = async () => {

        setloading(true)

        try {

            const res = await clientaxios.get(`/api/admin/review/review-list/${localStorage.getItem('productid')}`);

            if (res.data.success) {

                setlistreview(res.data.Data);
            }
            
        } catch (error) {

            if (error.response) {

                alert(error.response.data.msg)
            } else {

                alert('Server is not responding')
            }
            
        } finally {

            setloading(false)
        }
    }
 
const GetData = async () => {

    setloading(true)

   try {

     const res = await clientaxios.get(`/api/admin/products/product-listbyid/${localStorage.getItem('productid')}`);

    if (res.data.success) {

        setlistdata(res.data.Data[0]);

        const images = JSON.parse(res.data.Data[0].ProductImages4);

        setimagearray(images)

    }

    
   } catch (error) {

    if(error.response) {

        alert(error.response.data.msg)
    } else {

        alert('Server is not responding')
    }
    
   } finally {

    setloading(false)
   }
}

    const handleOnChange = (e) => {

        const value = e.target.value;

        setcounter(value)
    }




useEffect(() => {

    GetData();
    GetList();


},[])







  return (
   <>
   {
    loading && <BlackScreen/>
   }
    {darkmode ? <div className='bg-[#171717] h-18'>
      
    </div> : 
    <div className='bg-white h-18'>
      
    </div>}

   
  <div className={`continer mx-auto singleprocontainer ${darkmode ? 'dark' : ''}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">

<ProductSlider jsonimagearray={imagearray}/>

  <div className='flex flex-col p-6 gap-3'>
    <Rating name="read-only" value={Number(listdata.ProductRating)} readOnly />
{darkmode ? <h2 className='text-white'>{listdata.ProductName}</h2> : <h2>{listdata.ProductName}</h2>}
{darkmode ? <span className='text-white'>70Hrs Playtime | 40mm Drivers</span> : <span>70Hrs Playtime | 40mm Drivers</span>}

{/* <div className='flex items-center gap-2'>
  <span className='newprice'>Rs.6,999</span>
{darkmode ? <span className='oldprice !text-white'>Rs.8,999</span> : <span className='oldprice'>Rs.8,999</span>}
</div> */}

 {
    darkmode ? <div className='flex gap-2 items-center procontainer'>
     <span 
className='newprice !text-2xl !font-extrabold !text-amber-500'>Rs.{Number(listdata.ProductNewPrice).toLocaleString()}</span>
    <span className='oldprice !text-white'>Rs.{Number(listdata.ProductOldPrice).toLocaleString()}</span>
   </div> :

   <div className='flex gap-2 items-center procontainer'>
     <span className='newprice !text-2xl !font-extrabold'>Rs.{Number(listdata.ProductNewPrice).toLocaleString()}</span>
    <span className='oldprice'>RS.{Number(listdata.ProductOldPrice).toLocaleString()}</span>
   </div>
   }
<div className='w-full h-10 bg-[#22D143] rounded flex items-center justify-between p-3 promotion'>
<div>
  <span className='text-white font-semibold'>
    {Number((listdata.ProductOldPrice-listdata.ProductNewPrice)/listdata.ProductOldPrice*100).toFixed(0)} % OFF</span>
</div>
<div>
  <span className='mr-2 text-white font-bold text-[18px]'>Sale Might End In</span>
  <span className='text-white font-semibold font-serif'>00h 23m 20s</span>
</div>
</div>

{darkmode ? <span className='text-white'>Color: Black</span> : <span>Color: Black</span>}
<div className='colorcategorycontainer flex items-center justify-start gap-2'>
<div className='imagewrapper w-28 h-28 border-2 border-[rgba(0,0,0,0.2)] 
rounded bg-white flex items-center justify-center p-2 cursor-pointer'>
<Image src={`${process.env.NEXT_PUBLIC_IMAGE_LINK}${listdata.ProductImages1}`} alt='Color' width={100} height={100} />
</div>
<div className='imagewrapper w-28 h-28 border-2 border-[rgba(0,0,0,0.2)] 
rounded bg-white flex items-center justify-center p-2 cursor-pointer'>
<Image src={color2} alt='Color' width={100} height={100} />
</div>
<div className='imagewrapper w-28 h-28 border-2 border-[rgba(0,0,0,0.2)] 
rounded bg-white flex items-center justify-center p-2 cursor-pointer'>
<Image src={color3} alt='Color' width={100} height={100} />
</div>
<div className='imagewrapper w-28 h-28 border-2 border-[rgba(0,0,0,0.2)] 
rounded bg-white flex items-center justify-center p-2 cursor-pointer'>
<Image src={color4} alt='Color' width={100} height={100} />
</div>
</div>

<div className='flex gap-2'>
    <Button className='!bg-[#02B290] !w-1/2'>
        <span className='text-white font-bold'>ADD TO CART</span>
    </Button>
     <Button className='!bg-[#ffff] !w-1/2 !border !border-[rgba(0,0,0,0.2)]'>
        <span className='text-black font-bold'>BUY NOW</span>
    </Button>
</div>

<div className='border border-[rgba(0,0,0,0.2)] rounded w-64 flex items-center justify-between bg-white'>
    
    <Button>
        <span className='text-black text-3xl'>-</span>
    </Button>
    <input className='text-center w-20 outline-0 font-bold'
     type="text" value={counter} onChange={handleOnChange} readOnly />
    <Button>
        <span className='text-black text-2xl'>+</span>
    </Button>
</div>

<div className='flex gap-2 justify-between'>
    <div className='w-full h-20 bg-white flex flex-col items-center justify-center border border-[rgba(0,0,0,0.2)] rounded'>
        <CgMediaPodcast className='text-[25px]'/>
        <span className='text-center text-[12px] font-bold'>1 Year Warranty</span>
    </div>
     <div className='w-full h-20 bg-white flex flex-col items-center justify-center border border-[rgba(0,0,0,0.2)] rounded'>
        <LiaShippingFastSolid className='text-[25px]'/>
        <span className='text-center text-[12px] font-bold'>Free Shipping</span>
    </div>
     <div className='w-full h-20 bg-white flex flex-col items-center justify-center border border-[rgba(0,0,0,0.2)] rounded'>
        <GoThumbsup className='text-[25px]'/>
        <span className='text-center text-[12px] font-bold'>5000 Customers</span>
    </div>
     <div className='w-full h-20 bg-white flex flex-col items-center justify-center border border-[rgba(0,0,0,0.2)] rounded'>
        <TbReplace className='text-[25px]'/>
        <span className='text-center text-[12px] font-bold'>7 Days Replacement</span>
    </div>
</div>
  </div>
</div>

<div className={`flex gap-20 p-4 mt-6 specsheading ${darkmode ? 'dark' : ''}`}>
    <h3 className={specspage ? 'text-3xl cursor-pointer' : 'text-3xl cursor-pointer opacity-70'}
    onClick={() => setspecspage(true)}>Specs</h3>
    <h3 className={specspage ? 'text-3xl cursor-pointer opacity-70' : 'text-3xl cursor-pointer'}
     onClick={() => setspecspage(false)}>Review</h3>
</div>

{
    specspage ? <div className={`grid grid-cols-1 p-4 specs ${darkmode ? 'dark' : ''}`}>
<div dangerouslySetInnerHTML={{
    __html: listdata.ProductDescription
}}>
    
</div>
</div> :

<div className='grid grid-cols-1 p-4 specs'>
<div className='w-full h-auto p-4 bg-white border border-[rgba(0,0,0,0.2)] shadow-[rgba(0,0,0,0.3)] rounded
flex flex-col gap-3 items-center justify-center'>
<span className='font-sans font-bold text-2xl'>Customer Review</span>
<div className='flex items-center gap-3'>
    <Rating value={5} size='large'></Rating>
    <span>4.81 out of 5</span>
</div>
{/* <Button className='!bg-black !text-white w-36'>
    <span>Write a Review</span>
</Button> */}
</div>

<div className='w-full h-auto p-4 bg-white border border-[rgba(0,0,0,0.2)] shadow-[rgba(0,0,0,0.3)] rounded
flex flex-wrap gap-3 items-center justify-center mt-2'>


{
    listreview.length !== 0 && listreview?.map((data) => (
        <div key={data.ReviewId} className='w-[300px] h-auto bg-white border border-[rgba(0,0,0,0.2)] shadow-[rgba(0,0,0,0.3)] rounded p-3
flex flex-col gap-2'>
<div className='flex items-center justify-between gap-3'>
    <Rating value={Number(data.ReviewRating)} size='small'></Rating>
    <span>{Number(data.ReviewRating)} out of 5</span>
</div>
<div className='flex items-center gap-2'>
    <div className='userwrapper w-[50px] h-[50px] border border-[rgba(0,0,0,0.2)] flex items-center justify-center rounded-2xl'>
<Image src={`${process.env.NEXT_PUBLIC_IMAGE_LINK}${data.CustomerImage}`} alt='User' width={100} height={100}/>
</div>
<span>{data.CustomerName}</span>
{/* <Button className='!bg-black !text-white p-2 w-[20px] h-[20px]'>
    <span className='text-[10px] capitalize'>Verified</span>
</Button> */}
</div>
<div>
    <Image src={`${process.env.NEXT_PUBLIC_IMAGE_LINK}${data.ProductImage}`} alt='HeadPhone' width={200} height={200} className='m-auto'/>
</div>
<div>
    <h6>{listdata.ProductName}</h6>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse consequatur repellat eaque, 
        repellendus obcaecati fugit quas aperiam aliquid officiis inventore reiciendis saepe rem 
        corrupti magnam vel, iste, quidem veritatis dolor?</p>
</div>
</div>

    ))
}

</div>



{/* /////////////////////////////////// Write a Review //////////////////////////////////////////////////////// */}



<ReviewForm imagearray={imagearray} values={{rating , setrating, username, setusername , comments , setcomments,
    emailaddress , setemailaddress , prevuserimage ,handleUserImage,prevproimage,handleProductImage,handleSubmit
}}/>



</div>
}



  </div>

   </>
    
  )
}

export default SingleProduct