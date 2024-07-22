"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import Contact from "./Contact";

function Navbar() {
 
  // const _ = require('lodash');
  const [isOpen, setIsOpen] = useState(false);
  const [isContact, setIsContact] = useState(false);
  const pathname = usePathname();

  const changeContact = () => {setIsContact(!isContact)};

  const menus = {
    Home: "/",
    About: "/about",
    "Hire Me": "#",
    "My work": "/#Mycreativity",
  };


  return (
    <>
      <div className=" px-5 md:px-20  ">
        <section className="h-20 sticky top-0 flex items-center justify-between  mb-2 bg-white z-10">
          <div className="logo cursor-pointer w-[50px]">
            <img
              className="cursor-pointer w-full"
              src="../pic.png"
              alt="logo"
            />
          </div>
          <ul className="hidden md:flex text-lg gap-2 text-blue-700 font-semibold">
            {Object.entries(menus).map((menu) => {
              let link = menu[1];
              let name = menu[0];
              return (
                <li
                  onClick={() => {
                    setIsContact(!isContact);
                  }}
                  key={name}
                  className={`cursor-pointer ${
                    pathname == link
                      ? "text-black bg-blue-100 -translate-y-[2px]"
                      : ""
                  }  hover:text-black hover:bg-blue-100 shadow-sm rounded hover:-translate-y-[2px] transition-all`}>
                  <Link
                    className="cursor-pointer p-1 md:py-2 md:px-4"
                    href={link}>
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <RxCross2 className="h-8 w-8 text-blue-700" />
              ) : (
                <CiMenuFries className="h-8 w-8 text-blue-700" />
              )}
            </button>
          </div>
        </section>
        {isOpen && (
          <div className="md:hidden">
            <ul className="flex flex-col gap-2 text-blue-700 font-semibold">
              {Object.entries(menus).map((menu) => {
                let link = menu[1];
                let name = menu[0];
                return (
                  <li
                    onClick={() => {
                      setIsOpen(!isOpen);
                      link == "Hire Me" && setIsContact(!isContact);
                    }}
                    key={name}
                    className={`cursor-pointer `}>
                    <Link
                      className={`${
                        pathname == link
                          ? "text-black bg-blue-100 -translate-y-[2px]"
                          : ""
                      }  hover:text-black hover:bg-blue-100 shadow-sm rounded hover:-translate-y-[2px] transition-all cursor-pointer p-1 md:py-2 md:px-4`}
                      href={link}>
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      {isContact && <Contact isContact={isContact} changeContact={changeContact} />}
    </>
  );
}

export default Navbar;
