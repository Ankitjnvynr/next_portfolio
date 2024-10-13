import React, { useEffect, useState } from 'react'
import Creative from './Creative';

export default function CreativesView() {
    const [SocialMediaPosts,setSocialMediaPosts]=useState([]);
    useEffect(  ()=>{
      const fetchCreatives = async ()=>{
        try {
          const response = await fetch('/api/creatives');
        const data =  await response.json();
        console.log(data.data);
        setSocialMediaPosts(data.data)
        
        } catch (error) {
          console.log('Error fetching creatives:', error);
        }
      }
  
      fetchCreatives();
    },[])
  return (
    <div className='p-2 flex gap-2 flex-wrap' >
        {SocialMediaPosts.map((post)=>
            <div key={post._id} >
                <Creative title={post.title} description={post.description} postId = {post._id} src={`/creatives/${post.fileName}`}/>
                </div>
        )}
    </div>
  )
}
