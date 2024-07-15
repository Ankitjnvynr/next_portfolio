
"use client";

import React, { useState } from 'react';
import SocialMediaPost from './workItems/SocialMediaPost';
import OutLinedButton from './button/OutLinedButton';
import MotionGraphicsReel from './workItems/MotionGraphicsReel';



function MyWork() {
  const [noMorePost, setNoMorePost] = useState(false);

  const SocialMediaPosts = {
    image1: {
      src: '/images/divya gita satsang.jpg',
      alt: 'divya gita satsang',
    },
    image2: {
      src: 'images/Genesis Classes Pvt Ltd.jpg',
      alt: 'Abhijay Genesis Classes Pvt Ltd',
    },
    image3: {
      src: '/images/Genesis Classes Pvt Ltd TSE.jpg',
      alt: 'Genesis Classes Pvt Ltd TSE Exam',
    },
    image4: {
      src: '/images/Mars Karnal.jpg',
      alt: 'MARS Medical and Radiology Services doctor navrati',
    },
    image5: {
      src: '/images/Bs heart care  doctor services.jpg',
      alt: 'Bs heart care  doctor services',
    },
    image6: {
      src: '/images/GIEO Gita courses.jpg',
      alt: 'GIEO Gita courses',
    },
  };

  const MotionGraphicsReels = {
    vid1: '/videos/Gita jeevan geet motion graphics.mp4',
    vid2: '/videos/divy gita satsang motion graphics.mp4',
    vid3: '/videos/divy gita satsang motion graphics video.mp4',
    vid4: '/videos/Gita jeevan geet motion graphics.mp4',
    vid5: '/videos/Gita jeevan geet motion graphics.mp4',
    vid6: '/videos/Gita jeevan geet motion graphics.mp4',
  };

  return (
    <div className="px-5 md:px-20">
      {/* Graphic designing */}
      <h1
        id="Mycreativity"
        className="text-center text-3xl font-bold mt-6 mb-2 text-blue-700 "
      >
        {' '}
        My Creativity
      </h1>
      <div>
        <h2 className="text-2xl">Graphic Designs:- </h2>
        <p className="text-xl text-slate-600 text-justify">
          Mostly for the Graphic Designing I&apos;m mostly using Adobe
          Photoshop. And also I can use Canva for designing.
        </p>
        <div className="flex flex-wrap gap-2 my-3 justify-between">
          {Object.entries(SocialMediaPosts).map(([key, image], index) => {
            if (index > 5) return;
            return (
              <SocialMediaPost
                className="w-[10%] border-4  md:w-1/3"
                key={key}
                src={image.src}
                alt={image.alt}
              />
            );
          })}
        </div>
        <div className="text-center py-2 mt-2 mb-3 ">
          {/* <Link to="/graphic-designs">
            <OutLinedButton name={noMorePost ? 'No More Data' : 'View More'} />
          </Link> */}
        </div>
      </div>
      <div>
        <h2 className="text-2xl">Motion Graphics:- </h2>
        <p className="text-xl text-slate-600 text-justify">
          To creating Motion Graphics or animations, I mostly use Adobe After
          Effects.
        </p>
        <div className="flex flex-wrap gap-2 my-3 justify-between">
          {Object.entries(MotionGraphicsReels).map(([key, src], index) => {
            if (index > 3) return;
            return <MotionGraphicsReel key={key} src={src} />;
          })}
        </div>
        <div className="text-center py-2 mt-2 mb-3 ">
          <span
            onClick={() => {
              setNoMorePost(true);
            }}
          >
            {/* <Link to="/motion-graphics">
              <OutLinedButton
                name={noMorePost ? 'No More Data' : 'View More'}
              />
            </Link> */}
          </span>
        </div>
      </div>
    </div>
  );
}

export default MyWork;
