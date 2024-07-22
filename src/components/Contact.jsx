import React from 'react'
import { IoPhonePortrait } from 'react-icons/io5';
import { IoIosMail, IoMdClose } from "react-icons/io";
import { FaWhatsappSquare } from "react-icons/fa";


function Contact({ isContact, changeContact }) {
  return (
    <div className="z-50 flex flex-col items-center justify-center fixed top-0 left-0 w-full h-screen backdrop-blur-sm gap-3">
      <div className="flex flex-col items-center justify-center bg-blue-100 gap-3 shadow-xl p-6 rounded-3xl relative">
        <IoMdClose
          onClick={() => {
            changeContact
          }}
          className="absolute top-0 right-0 bg-white text-lg rounded-full cursor-pointer"
        />
        <h3 className="text-3xl font-bold text-blue-700">Hire Me!</h3>
        <div className="flex gap-1 items-center justify-center font-bold bg-white p-3 px-9 rounded-xl">
          <IoPhonePortrait />
          <FaWhatsappSquare /> 8930840560
        </div>
        <div className="flex gap-1 items-center justify-center font-bold  bg-white p-3 px-9 rounded-xl">
          <IoIosMail /> ankitbkana@outlook.com
        </div>
      </div>
    </div>
  );
}

export default Contact