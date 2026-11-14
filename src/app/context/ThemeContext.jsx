"use client";

import clientaxios from "@/components/axiosinstance";
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkmode, setdarkmode] = useState(false);
    const [dropdownactive , setdropdownactive] = useState(false);
    const [loading , setloading] = useState(false)
    const [search , setsearch] = useState('')
    const [catload , setcatload] = useState(false)
    const [categoryid ,setcategoryid ] = useState(0)
     const [categorylist , setcategorylist] = useState([]);
     const [productcolor , setproductcolor] = useState('white')

      const GeCategoryData = async () => {
      
         try {
      
           const res = await clientaxios.get(`/api/admin/category/category-list`);

      
          if (res.data.success) {

            // const sorteddata = [...res.data.Data].sort((a , b) => {

            //   return a.CategoryName.localeCompare(b.CategoryName)
            // })
      
              setcategorylist(res.data.Data);
      
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
            
                GeCategoryData();
            
            },[])

    
console.log('categoryidtheme' , categoryid)
  

  return (
    <ThemeContext.Provider value={{ darkmode, setdarkmode,dropdownactive , setdropdownactive,loading , setloading,
      search , setsearch,catload , setcatload,categoryid ,setcategoryid,categorylist , setcategorylist,
      productcolor , setproductcolor
      }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}