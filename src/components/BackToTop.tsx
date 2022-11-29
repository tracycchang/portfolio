import React, { useState } from 'react'
import { ArrowUpIcon } from '@heroicons/react/24/outline'
import { Button } from '@mui/material';

export default function BackToTop() {

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const position = window.pageYOffset;
    if (position > 50){
      setVisible(true)
    }
    else {
      setVisible(false)
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
  });
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };

  return (
    <div className="rounded-md shadow">
      <Button
        variant='contained'
        onClick={scrollToTop}
        sx={{
          position: 'fixed',
          left: '95%',
          top: '93%',
          zIndex: '1',
          display: visible ? 'inline' : 'none',
          backgroundColor: '#7F8AF6',
          '&:hover': {
            backgroundColor: "#8f91a7",
         },
        }}
       >
        {/* &uarr;  */}
        <ArrowUpIcon></ArrowUpIcon>
        {/* up arrow */}
      </Button>
    </div> 
  )
}