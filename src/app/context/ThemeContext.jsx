"use client";

import clientaxios from "@/components/axiosinstance";
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkmode, setdarkmode] = useState(false);
    const [dropdownactive , setdropdownactive] = useState(false);

    // const [prodata , setprodata] = useState([]);

    // const GetProData = async () => {

    //   try {

    //     const res = await clientaxios.get('/api/admin/products/product-list');

    //     if (res.data.success) {

    //       setprodata(res.data.Data)
    //     }
        
    //   } catch (error) {
        
    //     if (error.response) {

    //       alert(error.response.data.msg)
    //     }

    //     else {

    //       alert('server is not responding')
    //     }
    //   }
    // }

    // useEffect(() => {

    //   GetProData();

    // },[])

    // console.log("prodata" , prodata)
  

  return (
    <ThemeContext.Provider value={{ darkmode, setdarkmode,dropdownactive , setdropdownactive }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}