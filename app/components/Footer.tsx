import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#333333] w-full text-white p-6 flex flex-col gap-5 lg:flex-row lg:justify-around lg:pt-10 ">
      <div>
        <img className="lg:h-[80px]" src="logo1-white.png" alt="" />
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
            <a href="/">Αρχική</a>
          </li>
          <li className="self-center">
            <a href="#">Για εμάς</a>
          </li>
          <li className="self-center">
            <a href="#">Έργα</a>
          </li>
          <li className="self-center">
            <Link href="/contact-us">Επικοινωνία</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
