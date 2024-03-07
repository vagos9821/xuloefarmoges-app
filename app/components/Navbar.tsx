import React from "react";
import MenuButton from "./MenuButton";

function Navbar() {
  return (
    <div className="h-[80px] w-full bg-[#333333] flex justify-around fixed z-10 text-white">
      <div className="flex">
        <img src="/logo-white.png" alt="" className="h-[60px] self-center" />
      </div>
      <MenuButton />
    </div>
  );
}

export default Navbar;
