import React from "react";

const Gallery = () => {
  return (
    <div className="p-6 flex flex-col gap-5">
      <h1 className="text-3xl font-extrabold text-center text-black md:pt-20">
        Μερικά Από Τα Έργα Μας
      </h1>
      <div className="flex flex-wrap gap-2 justify-center align-middle max-w-[1000px]">
        <img className="w-[300px] max-h-72" src="k4.jpg" alt="" />
        <img className="w-[300px] max-h-72" src="k5.jpg" alt="" />
        <img className="w-[300px] max-h-72" src="k6.jpg" alt="" />
        <img className="w-[300px] max-h-72" src="k1.jpg" alt="" />
        <img className="w-[300px] max-h-72" src="k2.webp" alt="" />
        <img className="w-[300px] max-h-72" src="k3.webp" alt="" />
      </div>
    </div>
  );
};

export default Gallery;
