import React from 'react';

const viewImg = (e) => {
  console.log(e.target.src);
};

function SocialMediaPost({ src, alt }) {
  return (
    <div className="w-[48.5%]  m-0 p-0  border  md:w-[32.8%] shadow-xl hover:shadow-2xl hover:scale-[0.99] transition-all ">
      <img
        onClick={viewImg}
        className="rounded w-[100%] p-0 m-0 cursor-pointer"
        src={src}
        alt={alt}
      />
    </div>
  );
}

export default SocialMediaPost;
