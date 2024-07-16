import Link from 'next/link';
import React from 'react'

function Navbar() {
  // const _ = require('lodash');

  const menus = {
    "Home": "/",
    "About": "/about",
    "Hire Me": "#",
    "My work": "#",
  }


  return (
    <div className=" px-5 md:px-20 ">
      <section className='h-20 sticky  flex items-center justify-between border-b mb-2 '>
        <div className="logo cursor-pointer w-[50px]"><img className='cursor-pointer w-[100%]' src="../pic.png" alt="logo" /></div>
        <ul className='flex text-3 gap-1   text-blue-700  font-semibold '>
          {
            Object.entries(menus).map(menu => {
              let link = menu[1];
              let name = menu[0];
              return <li key={name} className=' cursor-pointer hover:text-black hover:bg-blue-100  border-b-2  rounded hover:-translate-y-[2px]  transition-all'>
                <Link className='cursor-pointer p-1 md:py-2 md:px-4' href={link}>{name}</Link>
              </li>
              
              
            })
          }
          
        </ul>
      </section>

    </div>
  )
}

export default Navbar