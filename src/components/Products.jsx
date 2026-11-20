import React, { useEffect, useState } from 'react'
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import { RiShoppingCart2Fill } from "react-icons/ri";
import Image from 'next/image';
import { useTheme } from '@/app/context/ThemeContext';
import clientaxios from './axiosinstance';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify/unstyled';
import SelectColor from './SelectColor';
import BlackScreen from './BlackScreen';


function Products() {

    const {darkmode , setdarkmode ,catload , setcatload, categoryid,categorylist,setcategoryid,
      productmaxprice , setproductmaxprice,setproductcolor,productcolor,setactivecontext,setcartcounter,cartcounter,
      loading , setloading,cartserverqty , setcartserverqty,cartserverprice , setcartserverprice,
      cartshipcharges , setcartshipcharges
    } = useTheme();

        const [listdata , setlistdata] = useState([]);
        const [minprice , setminprice] = useState(100);
        const [maxprice , setmaxprice] = useState(0);
      
        const router = useRouter();

          const GetCartShipCharges = async () => {
      
         try {
      
           const res = await clientaxios.get(`/api/admin/cart/cart-qty/${localStorage.getItem('userid')}`);

      
          if (res.data.success) {

            // const sorteddata = [...res.data.Data].sort((a , b) => {

            //   return a.CategoryName.localeCompare(b.CategoryName)
            // })

            const getqty = (res.data.Data[0].ProductShipCharges)
      
              setcartshipcharges(Number(getqty));
      
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
              
             } finally {

              setproductcolor("Select Color")
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

            const GetDataByPrice = async () => {
          
             try {
          
    const res = await clientaxios.get(`/api/admin/products/product-listbypricenext/${productmaxprice}/${categoryid}`);
    
          
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
    setproductcolor("Select Color")
     setproductmaxprice(0)
     setactivecontext(false)
    
    }



const handlePriceClick = () => {

  if (categoryid === 0) {

    toast.error('First Select Category')
  } else if (productmaxprice === 0) {

        toast.error('Please Insert Max')


  } else {

    GetDataByPrice()
  }
 
}

const handleColorClick = () => {

  if (categoryid === 0) {

    toast.error('First Select Category')
  } else if (productcolor === "Select Color") {

        toast.error('Please Insert Max')


  } else {

    GetDataByColor()
  }
 
}

const handleKeyDown = (e) => {

if (e.key === "Enter") {

  GetDataByPrice();
}
}



const handlePriceChange = (e) => {

  const value = e.target.value;

  setproductmaxprice(value)

}
    const Scrolling = () => {

      window.scrollTo({
        behavior: "smooth",
        top: 850
      })
    }

    const handleCartButton = async (ProductId,ProductName,ProductImages2,ProductColor,
      ProductNewPrice,ProductOldPrice,ProductQty,UserId,InvoiceNumber,ProductImages1,ProductShipCharges) => {

        setloading(true)

      try {

        if (!localStorage.getItem('userid')) {

          toast.error('Please Sign IN');
          return
        }

        const res = await clientaxios.post('/api/admin/cart/cart-create' , {ProductId,ProductName,ProductImages2,ProductColor,
      ProductNewPrice,ProductOldPrice,ProductQty,UserId,InvoiceNumber,ProductImages1,ProductShipCharges});

      if (res.data.success) {

        toast.success(res.data.msg)
      } else {

        toast.error(res.data.msg)
      }
        
      } catch (error) {

        if (error.response) {

          toast.error(error.response.data.msg)
        } else {

          toast.error('Server is not responding')
        }
        
      } finally {

        setloading(false);
        GetCartQty();
        GetCartPrice();
        GetCartShipCharges();
      }

      

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
                
              GetData();
              GetCartQty();
                      GetCartPrice();
                      GetCartShipCharges();

                    


            return () => setcategoryid(0)
                
                },[])


  return (
  <>

{
 loading &&  <BlackScreen/>
}
  <div className='w-full h-auto rounded bg-white grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 xl:grid-cols-4
  items-center justify-center p-2 gap-2.5'>
  <div className='flex'>
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

    <SelectColor arraydata={listdata}/>
     <Button className='capitalize! bg-black! h-12! ml-2! text-white!' onClick={handleColorClick}>
      <span className='text-[10px]! font-semibold'>Get Data</span>
    </Button>
     
  
  </div>
  <div className='flex items-center pricefilter'>
   <input type="number" value={minprice} readOnly 
    onChange={(e) => setminprice(e.target.value)}
    className='w-1/2 h-12 rounded border p-2 caret-amber-50 cursor-default' placeholder='Price Min'/>
   <span>-</span>
   <input type="number" value={productmaxprice}  onChange={handlePriceChange} onKeyDown={handleKeyDown}
   onClick={() => setproductmaxprice('')}
    className='w-1/2 h-12 rounded border p-2' placeholder='Price Max'/>
    <Button className='capitalize! bg-black! h-12! ml-2! text-white!' onClick={handlePriceClick}>
      <span className='text-[10px]! font-semibold'>Get Data</span>
    </Button>
  </div>
  
  <div>
   <select
  defaultValue=""
  disabled
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
     className='newprice text-2xl! font-extrabold! text-amber-500!'>{'Rs.'+Number(data.ProductNewPrice).toLocaleString("en-pk")}</span>
    <span 
    className='oldprice text-white!'>{'Rs.'+Number(data.ProductOldPrice).toLocaleString("en-pk")}</span>
   </div> :

   <div className='flex gap-2 items-center procontainer'>
     <span className='newprice text-2xl! font-extrabold!'>{'Rs.'+Number(data.ProductNewPrice).toLocaleString("en-pk")}</span>
    <span className='oldprice'>{'Rs.'+Number(data.ProductOldPrice).toLocaleString("en-pk")}</span>
   </div>
   }
    <div className='flex gap-2 items-center'>
    <Button onClick={() => handleCartButton(data.id,data.ProductName,data.ProductImages2,data.ProductColor,
      data.ProductNewPrice,data.ProductOldPrice,1,localStorage.getItem('userid'),1,data.ProductImages1,
      data.ProductShipCharges)}>
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