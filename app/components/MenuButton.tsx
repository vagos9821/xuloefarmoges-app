"use client";
import { useRef } from "react";
import React, { useState } from "react";
import Link from "next/link";

const MenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="flex flex-col justify-center items-center h-auto opacity-100 xl:h-0 xl:opacity-0">
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
      
          ${isOpen ? "opacity-100 h-fit" : "opacity-0 h-0 hidden"}`}
        >
          <li className="self-center">
            <Link className="hover:underline focus:underline" href="/">
              Αρχική
            </Link>
          </li>
          <li className="self-center">
            <Link className="hover:underline focus:underline" href="about-us">
              Για εμάς
            </Link>
          </li>
          <li className="self-center">
            <Link className="hover:underline focus:underline" href="projects">
              Έργα
            </Link>
          </li>
          <li className="self-center">
            <Link className="hover:underline focus:underline" href="contact-us">
              Επικοινωνία
            </Link>
          </li>
        </ul>
      </div>

      <ul className="h-0 hidden opacity-0 w-0 xl:w-full xl:h-auto xl:opacity-100 xl:flex flex-row gap-20 ">
        <li className="">
          <Link className="hover:underline focus:underline" href="/">
            Αρχική
          </Link>
        </li>
        <li className="">
          <Link className="hover:underline focus:underline" href="about-us">
            Για εμάς
          </Link>
        </li>
        <li className="">
          <Link className="hover:underline focus:underline" href="projects">
            Έργα
          </Link>
        </li>
        <li className="">
          <Link className="hover:underline focus:underline" href="contact-us">
            Επικοινωνία
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuButton;
