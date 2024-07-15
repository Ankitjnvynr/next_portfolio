import React from "react";
import {
  SiAdobeaftereffects,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiCanva,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiMeta,
  SiPhp,
  SiReact,
} from "react-icons/si";
import { FaWordpressSimple } from "react-icons/fa6";



function Skills() {
  return (
    <div className="mt-2 mb-10 md:mb-20 px-5 md:px-20">
      <h1 className="text-center text-3xl font-bold mt-6 mb-2 text-blue-700 ">
        Skills
      </h1>
      <div className=" grid grid-cols-1 gap-4 lg:grid-cols-3 md:gap-5 md:grid-cols-2 xl:grid-cols-4">
        <div className="flex items-center gap-2 text-2xl font-bold w-full ">
          <SiAdobephotoshop className=" text-cyan-700 text-5xl" />{" "}
          <div className="w-full my-3"> 
            Adobe Photoshop
            <div className=" relative h-1 rounded-md w-full   flex border">
              <div className=" w-[85%]  h-1 rounded-md bg-blue-700"></div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-2xl font-bold">
          <SiAdobepremierepro className=" text-cyan-700 text-5xl" />{" "}
          <div className="w-full my-3">
            Adobe Premiere Pro
            <div className=" relative h-1 rounded-md   flex border">
              <div className=" w-[55%]  h-1 rounded-md bg-blue-700"></div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-2xl font-bold">
          <SiAdobeaftereffects className=" text-cyan-700 text-5xl" />{" "}
          <div className="w-full my-3">
            Adobe After Effects
            <div className=" relative h-1 rounded-md   flex border">
              <div className=" w-[65%]  h-1 rounded-md bg-blue-700"></div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-2xl font-bold">
          <SiCanva className=" text-cyan-700 text-5xl" />{" "}
          <div className="w-full my-3">
            Canva
            <div className=" relative h-1 rounded-md   flex border">
              <div className=" w-[85%]  h-1 rounded-md bg-blue-700"></div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-2xl font-bold">
          <SiHtml5 className=" text-cyan-700 text-5xl" />{" "}
          <div className="w-full my-3">
            HTML
            <div className=" relative h-1 rounded-md   flex border">
              <div className=" w-[90%]  h-1 rounded-md bg-blue-700"></div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-2xl font-bold">
          <SiCss3 className=" text-cyan-700 text-5xl" />{" "}
          <div className="w-full my-3">
            CSS
            <div className=" relative h-1 rounded-md   flex border">
              <div className=" w-[80%]  h-1 rounded-md bg-blue-700"></div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-2xl font-bold">
          <SiJavascript className=" text-cyan-700 text-5xl" />{" "}
          <div className="w-full my-3">
            JavaScript
            <div className=" relative h-1 rounded-md   flex border">
              <div className=" w-[65%]  h-1 rounded-md bg-blue-700"></div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-2xl font-bold">
          <FaWordpressSimple  className=" text-cyan-700 text-5xl" />{" "}
          <div className="w-full my-3">
            Wordpress
            <div className=" relative h-1 rounded-md   flex border">
              <div className=" w-[90%]  h-1 rounded-md bg-blue-700"></div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-2xl font-bold">
          <SiMeta className=" text-cyan-700 text-5xl" />{" "}
          <div className="w-full my-3">
            Facebook Meta Ads
            <div className=" relative h-1 rounded-md   flex border">
              <div className=" w-[50%]  h-1 rounded-md bg-blue-700"></div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-2xl font-bold">
          <SiPhp className=" text-cyan-700 text-5xl" />{" "}
          <div className="w-full my-3">
            Php
            <div className=" relative h-1 rounded-md   flex border">
              <div className=" w-[75%]  h-1 rounded-md bg-blue-700"></div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-2xl font-bold">
          <SiReact className=" text-cyan-700 text-5xl" />{" "}
          <div className="w-full my-3">
            React
            <div className=" relative h-1 rounded-md   flex border">
              <div className=" w-[40%]  h-1 rounded-md bg-blue-700"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
