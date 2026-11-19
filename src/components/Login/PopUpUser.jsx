"use client"
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CircularProgress from '@mui/material/CircularProgress';
import { useTheme } from '@/app/context/ThemeContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "100%",
  bgcolor: 'transparent',
  height: "100%",
  display: "flex" , 
  alignItems: "center" , 
  justifyContent: "center"
  
};

function PopUpUser() {

    const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {popupuseractive , setpopupuseractive} = useTheme()
  const router = useRouter();

  const handleLogin = () => {

    setpopupuseractive(false);
    router.push('/login')
  }

    const handleSignOut = () => {

    setpopupuseractive(false);
    router.push('/login');
    localStorage.setItem('userid' , '')
  }


  return (
    
         <div>
     
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
        
      >
        <Box sx={style}>
         <div className='w-25 h-25 bg-white rounded-2xl shadow-amber-100 relative flex items-center justify-center' 
        >
           <div  onClick={() => setpopupuseractive(false)}
            className='w-10 h-10 flex items-center justify-center border p-2
           rounded-full bg-red-700 text-white font-bold absolute -right-4 -top-4 cursor-pointer'>
            X
           </div>
           <div>
            {
                localStorage.getItem('userid') ?
                <div>
                    <div onClick={handleSignOut}>
                        <h2>Sign Out</h2>
                    </div>
                </div> :
               <div onClick={handleLogin} className='cursor-pointer'>
            
                 <h2>Login</h2>
               
               </div>
            }
           </div>
          </div>
         
        </Box>
      </Modal>
    </div>
  )
}

export default PopUpUser
