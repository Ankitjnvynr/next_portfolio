import React from "react";

function MotionGraphicsReel({src}) {
  return (
    <div className="w-[47%] md:w-[24%] flex shadow-md ">
      <video className=" cursor-pointer w-[100%] rounded" controls src={src} ></video>
    </div>
  );
}

export default MotionGraphicsReel;
