"use client"

import Link from 'next/link';
import React, { useState } from 'react'
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";


function Navbar() {
  // const _ = require('lodash');
  const [isOpen, setIsOpen] = useState(false);
  const menus = {
    "Home": "/",
    "About": "/about",
    "Hire Me": "#",
    "My work": "#",
  }


  return (
    <div className=" px-5 md:px-20 ">
      <section className='h-20 sticky top-0 flex items-center justify-between border-b mb-2 bg-white z-10'>
        <div className="logo cursor-pointer w-[50px]">
          <img className='cursor-pointer w-full' src="../pic.png" alt="logo" />
        </div>
        <ul className='hidden md:flex text-lg gap-2 text-blue-700 font-semibold'>
          {
            Object.entries(menus).map(menu => {
              let link = menu[1];
              let name = menu[0];
              return (
                <li key={name} className='cursor-pointer hover:text-black hover:bg-blue-100 border-b-2 rounded hover:-translate-y-[2px] transition-all'>
                  <Link className='cursor-pointer p-1 md:py-2 md:px-4' href={link}>{name}</Link>
                </li>
              )
            })
          }
        </ul>
        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <RxCross2 className="h-8 w-8 text-blue-700" /> : <CiMenuFries className="h-8 w-8 text-blue-700" />}
          </button>
        </div>
      </section>
      {isOpen && (
        <div className="md:hidden">
          <ul className='flex flex-col gap-2 text-blue-700 font-semibold'>
            {
              Object.entries(menus).map(menu => {
                let link = menu[1];
                let name = menu[0];
                return (
                  <li key={name} className='cursor-pointer hover:text-black hover:bg-blue-100 border-b-2 rounded hover:-translate-y-[2px] transition-all'>
                    <Link className='cursor-pointer p-2' href={link}>{name}</Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar