import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'

const Navbar = () => {
  return (
    <Stack direction='row' justifyContent='space-around' sx={{ gap: { sm: '122px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px='20px' >
      <Link to='/' style={{ textDecoration: 'none', fontSize: '36px', fontWeight: 'bold', color: '#3A1212' }}>
        FitFlex
      </Link>

      <Stack direction='row' gap='40px' fontSize='24px' alignItems='flex-end'>
        <Link to='/' style={{ textDecoration:'none', color:'#3A1212', borderBottom:'3px solid #5c5b5b' }}>Home</Link>
        <a href='#exercises' style={{ textDecoration:'none', color:'#5c5b5b' }}>Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar
