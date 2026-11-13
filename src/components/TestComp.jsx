"use client"
import React, { useEffect, useState } from 'react'
import clientaxios from './axiosinstance';

function TestComp() {

    const [arraysort , setarraysort] = useState([{ID: 1, Name: 'Ali' , LastName: 'Zahid'},
        {ID: 2, Name: 'Musa' , LastName: 'Nadir'},
        {ID: 3, Name: 'Qasim' , LastName: 'Ali'},
        {ID: 4, Name: 'Bhutta' , LastName: 'Bashir'}
    ])

    const sorteddata = [...arraysort].sort((a , b) => {

       return a.Name.localeCompare(b.Name)
        
    })
    


     const [listdata , setlistdata] = useState([]);
     const [search , setsearch] = useState('')
    
    
          const GetData = async () => {
          
             try {
          
               const res = await clientaxios.get(`/api/admin/products/product-list`);
          
              if (res.data.success) {
          
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
    
        
    
          useEffect(() => {
          
              GetData();
            
             
          
          },[])
    

  return (
   <>
    <div>
      <h2>Test</h2>
      <h2>Test</h2>
      <h2>Test</h2>
      <h2>Test</h2>
      <h2>Test</h2>
      <h2>Test</h2>
      <h2>Test</h2>
      
    </div>
    {/* <div>
        <input type="text" value={search}  onChange={(e) => setsearch(e.target.value)} placeholder='search' />
    </div>
    <table>
        <thead>
            <tr>
                <th>PRoductname</th>
                <th>oldprice</th>
                <th>productdes</th>
            </tr>
        </thead>
        <tbody>
           {
            listdata?.filter((data) => {
                if (search === '') {

                    return data
                } else {

                    return (
                        data.ProductImages2?.toLowerCase().includes(search) || 
                        data.ProductName?.toLowerCase().includes(search)
                    )
                }
            }).map((data) => (
                 <tr>
                 <td>{data.ProductName}</td>
                <td>{'Rs.'+Number(data.ProductOldPrice).toLocaleString("en-pk")}</td>
                <td>{data.ProductImages2}</td>
            </tr>
            ))
           }
        </tbody>
    </table> */}
   </>
  )
}

export default TestComp
