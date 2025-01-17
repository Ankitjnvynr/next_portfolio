
"use client";

import React, { useEffect, useState } from 'react'
import SocialMediaPost from './components/workItems/SocialMediaPost';


//  const SocialMediaPosts = {
//    image1: {
//      src: '/images/divya gita satsang.jpg',
//      alt: 'divya gita satsang',
//    },
//    image2: {
//      src: 'images/Genesis Classes Pvt Ltd.jpg',
//      alt: 'Abhijay Genesis Classes Pvt Ltd',
//    },
//    image3: {
//      src: '/images/Genesis Classes Pvt Ltd TSE.jpg',
//      alt: 'Genesis Classes Pvt Ltd TSE Exam',
//    },
//    image4: {
//      src: '/images/Mars Karnal.jpg',
//      alt: 'MARS Medical and Radiology Services doctor navrati',
//    },
//    image5: {
//      src: '/images/Bs heart care  doctor services.jpg',
//      alt: 'Bs heart care  doctor services',
//    },
//    image6: {
//      src: '/images/GIEO Gita courses.jpg',
//      alt: 'GIEO Gita courses',
//    },
//  };

function GrapicDesigns() {

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
    <div className="container  px-5 md:px-20">
      <h2 className="text-2xl">Graphic Designs:- </h2>
      <p className="text-xl text-slate-600 text-justify">
        Mostly for the Graphic Designing I&apos;m mostly using Adobe Photoshop.
        And also I can use Canva for designing.
      </p>
      <div className="flex flex-wrap gap-2 my-3 justify-between">
        {SocialMediaPosts.map((creative) => {
          
          return (
            <SocialMediaPost
              className="w-[10%] border-4  md:w-1/3"
              key={creative._id}
              src={`/creatives/${creative.fileName}`}
              alt={creative.title}
            />
          );
        })}
      </div>
    </div>
  );
}

export default GrapicDesigns