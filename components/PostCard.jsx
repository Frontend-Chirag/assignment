'use client'

import '../styles/global.css';
import { Card, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { UserProfile } from '.';
import { FavoriteRounded, CommentSharp, ShareSharp } from '@mui/icons-material';
import axios from 'axios';
import Image from 'next/image';


const PostCard = () => {
  // adding state to store data 
   const [post, setPost] = useState([]);
  //  useEffect for fetching data from /app/api/posts/route.js
   useEffect(() => {
    const fetchPostData = async () => {
     try {
      const response = await axios.get('/api/posts');
      const data =  response.data;
      // console.log(data);
      setPost(data);
     } catch (error) {
      console.log(error);
     }
    };
     
     fetchPostData();
   },[]);

  return (

    <div className='flex flex-col gap-8 mt-5 w-full h-auto justify-center items-center'>
      {/* map over post and render data according to usage */}
      {post.map((posts, index) => (
        <Card  key={index} sx={{width:'450px', height:'550px',color:'white', backgroundColor:'rgba(14, 14, 14, 0.926)', padding:'0.8rem 1rem', borderRadius: '10px'}} >
        <UserProfile userWidth/>
        <Image src={posts.postimage} className='flex mt-7 mb-7' alt='postImage'/>
        <Typography variant='body1' >{posts.description}</Typography>
        <Typography variant='h6' sx={{ display:'flex',width:'100%', height: '5rem', justifyContent:'center',alignItems:'center',color:'white',gap:'2rem'}}>
         <span><FavoriteRounded/> Like</span> 
         <span><CommentSharp/> comment</span> 
         <span><ShareSharp/> share</span>
        </Typography>
      </Card>
      ))}
    </div>
  )
}

export default PostCard