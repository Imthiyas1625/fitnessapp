import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        mt: '40px',
        py: '20px',
        backgroundColor: '#303030',
        textAlign: 'center',
        color: 'white',
      }}
    >
      <Typography variant="h5" fontWeight="bold">
        FitFlex
      </Typography>
      <Typography variant="body2" mt={1}>
        © {new Date().getFullYear()} FitFlex | All Rights Reserved
      </Typography>
    </Box>
  );
};

export default Footer;
