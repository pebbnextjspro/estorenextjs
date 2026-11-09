import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


function BlackPage() {
  return (
    <>
     <div className='absolute z-3'>
    <Box sx={{ display: 'flex' }}>
      <CircularProgress aria-label="Loading…" />
    </Box>
 </div>
   <div className='absolute z-3'>
    <Box sx={{ display: 'flex' }}>
      <CircularProgress aria-label="Loading…" />
    </Box>
 </div>
   <div className='absolute z-3'>
    <Box sx={{ display: 'flex' }}>
      <CircularProgress aria-label="Loading…" />
    </Box>
 </div>
   <div className='absolute z-3'>
    <Box sx={{ display: 'flex' }}>
      <CircularProgress aria-label="Loading…" />
    </Box>
 </div>
   <div className='absolute z-3'>
    <Box sx={{ display: 'flex' }}>
      <CircularProgress aria-label="Loading…" />
    </Box>
 </div>
    </>
  )
}

export default BlackPage
