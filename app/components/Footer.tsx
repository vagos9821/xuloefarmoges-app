import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#333333] w-full text-white p-6 flex flex-col gap-5 md:flex-row md:justify-around md:pt-10 md:mt-20">
      <div>
        <img className="md:h-[80px]" src="logo1-white.png" alt="" />
      </div>
      <div>
        <h3 className="text-xl font-bold">Αθήνα</h3>
        <p>
          <span className="underline">Διέυθυνση:</span> Τηλεμάχου 34, Περιστέρι
        </p>
        <p>
          <span className="underline">Τηλέφωνο:</span> +30 6987654321
        </p>
        <p>
          <span className="underline">Email:</span> info@xuloefarmoges.gr
        </p>
      </div>
      <div>
        <ul className="">
          <h3 className="text-xl font-bold">Μενού</h3>
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
    </div>
  );
};

export default Footer;
