import React from 'react'
import SocialMediaPost from './components/workItems/SocialMediaPost';
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

function GrapicDesigns() {
  return (
    <div className="container px-5 md:px-20">
      <h2 className="text-2xl">Graphic Designs:- </h2>
      <p className="text-xl text-slate-600 text-justify">
        Mostly for the Graphic Designing I&apos;m mostly using Adobe Photoshop.
        And also I can use Canva for designing.
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
    </div>
  );
}

export default GrapicDesigns