"use client"

import React, { useEffect } from 'react'
import clientaxios from './axiosinstance';

function CookiesLayout() {
     const GetCookies = async () => {

        try {

            const res = await clientaxios.get('/api/admin/cookie/get-cookie');
             if (res) {

                localStorage.setItem('userid' , res.data.visitor_id);
             }
            
        } catch (error) {

            console.log(error)
            
        }
    }


    useEffect(() => {
GetCookies();

    },[])

  return (
    <div>
      
    </div>
  )
}

export default CookiesLayout
