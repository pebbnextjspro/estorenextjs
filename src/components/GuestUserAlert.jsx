"use client"
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useTheme } from '@/app/context/ThemeContext';
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

function GuestUserAlert() {

    const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {popupuseractive , setpopupuseractive} = useTheme()
  const router = useRouter();

 


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
         
          </div>
         
        </Box>
      </Modal>
    </div>
  )
}

export default GuestUserAlert
