import React from 'react';
import { Box } from '@mui/material';
import HeroBannerImage from '../assets/images/banner2.png';

const HeroBanner = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'flex-start', // Push image to the left
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        overflow: 'hidden',
      }}
    >
      {/* Left Side - Image Container */}
      <Box
        component="img"
        src={HeroBannerImage}
        alt="Banner"
        sx={{
          width: '80%', // Covers most of the screen, adjust as needed
          height: '100%',
          objectFit: 'cover', // Ensures the image covers the entire left side
        }}
      />
    </Box>
  );
};

export default HeroBanner;
