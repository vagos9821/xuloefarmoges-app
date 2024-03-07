import React from "react";
import MenuButton from "./MenuButton";
import Link from "next/link";

function Navbar() {
  return (
    <div className="h-[80px] w-full bg-[#333333] flex justify-around fixed z-10 text-white">
      <div className="flex">
        <Link href="/" className="self-center">
          <img src="/logo-white.png" alt="" className="h-[60px] " />
        </Link>
      </div>
      <MenuButton />
    </div>
  );
}

export default Navbar;
