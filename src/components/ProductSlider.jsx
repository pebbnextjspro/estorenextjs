"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import h2 from '../../nextjs/h2.png'
import h3 from '../../nextjs/h3.png'
import h4 from '../../nextjs/h4.png'




function ProductSlider({jsonimagearray}) {

    // const [jsonimagearray, setjsonimagearray] = useState([]);
    const [image, setimage] = useState();

// console.log(process.env.NEXT_PUBLIC_IMAGE_LINK+jsonimagearray[0])
//     useEffect(() => {

//         const storedImages = localStorage.getItem('ProductImages4');

//         if (storedImages) {
//             try {
//                 setjsonimagearray(JSON.parse(storedImages));
//             } catch (error) {
//                 console.log("Invalid image data", error);
//                 setjsonimagearray([]);
//             }
//         }
//     }, []);


    const handleClick = (data) => {

        setimage(data)
    }

console.log(image)
    
  return (
    <>
    <div className='h-[600px]'>
        <div className='mainimage h-3/4 flex items-center justify-center'>

       {
        image === undefined ? <Image src={`${process.env.NEXT_PUBLIC_IMAGE_LINK}${jsonimagearray[0]}`} alt='Headphone' width={500} height={500} /> :
        <Image src={`${process.env.NEXT_PUBLIC_IMAGE_LINK}${image}`} alt='Headphone' width={500} height={500} />
       }
           {/* {
image===0 ? <Image src={`${process.env.NEXT_PUBLIC_IMAGE_LINK}${jsonimagearray[0]}`} alt='Headphone' width={500} height={500} /> :
image===1 ? <Image src={`${process.env.NEXT_PUBLIC_IMAGE_LINK}${jsonimagearray[1]}`} alt='Headphone' width={500} height={500} /> :
image===2 ? <Image src={`${process.env.NEXT_PUBLIC_IMAGE_LINK}${jsonimagearray[2]}`} alt='Headphone' width={500} height={500} /> :
            ''
           } */}
        </div>
        <div className='subimage h-3/12 flex items-center justify-center overflow-hidden
        overflow-x-auto scrollbar-none cursor-pointer'>
    {
        jsonimagearray.length !== 0 && jsonimagearray.map((data , index) => (
            <div key={index}>
                <Image src={`${process.env.NEXT_PUBLIC_IMAGE_LINK}${data}`} alt='Headphone' width={100} height={100}
            onClick={() => handleClick(data)} />
            </div>
        ))
    }
    
        </div>
    </div>
    </>
  )
}

export default ProductSlider
