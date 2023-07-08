'use client';

import React from 'react';
import UserProfile from './UserProfile';
import Link from 'next/link';
import { AppBar, Button, Container, Toolbar } from '@mui/material';


const Navbar = () => {

  return (
   <AppBar position='sticky' sx={{background:'rgba(14, 14, 14, 0.926)', boxShadow:'none'
                                , boxShadow:'0 0 10px 2px rgb(61, 60, 60)', marginBottom:'2rem', width:'100%', height:'100%'}}>
    <Toolbar>
        <Container sx={{display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'start',gap: '4rem'}}>
          <div className='flex gap-7 mt-4'>
            {/* resuseable component */}
            <UserProfile/>
            <Button sx={{color: ''}}>Logout</Button>
          </div>
          <nav className='flex gap-8 flex-col'>
            <Link href='#'>Home</Link>
            <Link href='#'>Posts</Link>
            <Link href='#'>Live</Link>
            <Link href='#'>Search</Link>
          </nav>
        </Container>
    </Toolbar>
   </AppBar>
  )
}

export default Navbar