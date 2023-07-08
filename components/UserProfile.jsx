'use client';
import { Avatar, Container, Typography } from '@mui/material'
import React from 'react';
import '../styles/global.css';

// I created this compoent for resuseability 
const UserProfile = ({userWidth}) => {
  
  return (
    <Container  className={userWidth ? 'fullwidth' : 'nav-Width'} sx={{ display: 'flex',justifyContent:'space-between',alignItems: 'center',gap:'2rem', color:'white'}}>
      <Avatar className={userWidth ? 'full-Avatar': 'nav-Avatar'} src='/public/profile.avif' alt='profile'/>
      <Typography variant='h6'>Jordan</Typography>
    </Container>
  )
}

export default UserProfile