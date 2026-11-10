"use client"
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CircularProgress from '@mui/material/CircularProgress';


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

function BlackScreen() {

    const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    
         <div>
     
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CircularProgress aria-label="Loading…" />
        </Box>
      </Modal>
    </div>
  )
}

export default BlackScreen
