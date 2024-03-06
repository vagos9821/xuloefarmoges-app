"use client";
import { useRef } from "react";
import React, { useState } from "react";

const MenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="flex flex-col justify-center items-center h-auto opacity-100 md:h-0 md:opacity-0">
        <button onClick={handleClick} className="cursor-pointer w-full h-1/3">
          <span
            className={`bg-white block transition-all duration-300 ease-out
                          h-0.5 w-8 rounded-sm  ${
                            isOpen
                              ? "rotate-45 translate-y-1"
                              : "-translate-y-1.5"
                          }`}
          ></span>
          <span
            className={`bg-white block transition-all duration-300 ease-out
                          h-0.5 w-8 rounded-sm my-0.5 ${
                            isOpen ? "opacity-0" : "opacity-100"
                          }`}
          ></span>
          <span
            className={`bg-white block transition-all duration-300 ease-out
                          h-0.5 w-8 rounded-sm ${
                            isOpen
                              ? "-rotate-45 -translate-y-1"
                              : "translate-y-1.5"
                          }`}
          ></span>
        </button>
        <ul
          className={`bg-[#333333a2] flex flex-col fixed top-[80px] transition-all ease-in-out w-1/2  gap-20 p-5 text-white align-middle
      
          ${isOpen ? "opacity-100 h-full" : "opacity-0 h-0"}`}
        >
          <li className="self-center">
            <a href="#">Αρχική</a>
          </li>
          <li className="self-center">
            <a href="#">Για εμάς</a>
          </li>
          <li className="self-center">
            <a href="#">Έργα</a>
          </li>
          <li className="self-center">
            <a href="#">Επικοινωνία</a>
          </li>
        </ul>
      </div>

      <ul className="h-0 opacity-0 w-0 md:w-full md:h-auto md:opacity-100 flex flex-row gap-20 ">
        <li className="">
          <a href="#">Αρχική</a>
        </li>
        <li className="">
          <a href="#">Για εμάς</a>
        </li>
        <li className="">
          <a href="#">Έργα</a>
        </li>
        <li className="">
          <a href="#">Επικοινωνία</a>
        </li>
      </ul>
    </div>
  );
};

export default MenuButton;
