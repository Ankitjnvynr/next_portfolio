import React, { useState } from 'react';
import { IoShareSocialSharp } from 'react-icons/io5';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

function Social() {
  const [socials, setSocial] = useState(true);

  const showSocial = () => {
    setSocial((prev) => !prev);
  };

  return (
    <div className=" fixed top-[50%] bg-[rgba(0, 179, 255, 0.5)]  border rounded-full h-7 w-7 flex items-center justify-center backdrop-blur-sm cursor-pointer text-lg text-blue-700">
      <p className="relative">
        <IoShareSocialSharp onClick={showSocial} className=" cursor-pointer" />
        {socials && (
          <p className="relative">
            <a
              className=" cursor-pointer text-2xl  absolute top-3 text-blue-700"
              href=""
            >
              <FaGithub className=" cursor-pointer" />
            </a>
            <a
              className=" cursor-pointer text-2xl  absolute -top-1 -right-7 text-blue-700"
              href=""
            >
              <FaFacebook />
            </a>
            <a
              className=" cursor-pointer text-2xl  absolute -top-7 -right-10 text-blue-700"
              href=""
            >
              <AiFillInstagram />
            </a>
          </p>
        )}
      </p>
    </div>
  );
}

export default Social;
