"use client"
import { Button } from '@mui/material';
import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useTheme } from '@/app/context/ThemeContext';
import { useRouter } from 'next/navigation';

const style = {
  position: 'absolute',
  top: "110px",
  left: "50%",
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function Search() {

     const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const {dropdownactive , setdropdownactive , search , setsearch} = useTheme();
    const router = useRouter()

    const handleClick = () => {

      setdropdownactive(!dropdownactive);
      router.push('/');
      setsearch('');
    }

  return (
    <>
     <div>
          
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
           
            </Box>
          </Modal>
        </div>


    <div className='searchbar' onClick={handleClick}>
        <input value={search} onChange={(e) => setsearch(e.target.value)}
         type="text" className='!w-[600px] !h-[45px] bg-[#E6E6E6] rounded-md px-3 outline-0 searchinput' />
        <Button ><IoSearchOutline size={25}/></Button>
        {/* <div className='dropdown'>

        </div> */}
    </div>
    </>
  )
}

export default Search