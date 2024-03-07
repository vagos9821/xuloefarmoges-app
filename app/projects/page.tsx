import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Ξυλοεφαρμογές - Έργα",
  description: "Ξυλοεφαρμογές - Έργα",
};

const page = () => {
  return (
    <div className="p-6 flex flex-col gap-20 pb-20 w-full  bg-yellow-50">
      <h1 className="text-3xl font-extrabold text-center text-black xl:pt-20">
        Μερικά Από Τα Έργα Μας
      </h1>
      <div className="flex flex-wrap gap-10 justify-center align-middle max-w-[1000px] self-center">
        <img className="w-[auto] max-h-72" src="k4.jpg" alt="" />
        <img className="w-[auto] max-h-72" src="k5.jpg" alt="" />
        <img className="w-[auto] max-h-72" src="k6.jpg" alt="" />
        <img className="w-[auto] max-h-72" src="k1.jpg" alt="" />
        <img className="w-[auto] max-h-72" src="k2.webp" alt="" />
        <img className="w-[auto] max-h-72" src="k3.webp" alt="" />
      </div>
    </div>
  );
};

export default page;
