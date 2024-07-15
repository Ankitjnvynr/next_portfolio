import React from "react";

function ProgressBar({ tooltip }) {
  return (
    <>
      <div className=" relative h-1 rounded-md   flex border">
        <div className="progress w-[15%]  h-1 rounded-md bg-blue-700"></div>
        {tooltip ? (
          <span className="relative flex h-3 w-3 -translate-x-1 -translate-y-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-700 "></span>
            <span className="absolute translate-y-5 -translate-x-8 inline-flex rounded border border-blue-700 px-3 py-1 font-bold text-blue-700 ">
              BigByte
            </span>
            <span className="absolute translate-y-[14px] bg-blue-50  inline-flex  border-l rotate-45  border-t border-blue-700 h-3 w-3 "></span>
          </span>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default ProgressBar;
