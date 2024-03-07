import { Playfair_Display } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const playFair = Playfair_Display({
  subsets: ["latin"],
});

const Hero1 = () => {
  return (
    <div className=" bg-[url('/slide-2.jpg')] bg-cover w-full h-[600px] flex flex-col justify-center align-middle text-center text-white gap-10 p-6 ">
      <Head>{""}</Head>
      <h1
        className={`${playFair.className} text-4xl font-extrabold tracking-widest`}
      >
        Κάνουμε Τα Όνειρα Σας Πραγματικότητα
      </h1>
      <p>
        Προσφέρουμε σε κάθε πελάτη υπηρεσίες ειδικά σχεδιασμένες για τις ανάγκες
        και τις απαιτήσεις του.
      </p>
      <button
        className="border-white border-2 p-2 rounded-full self-center  bg-none
      hover:bg-[#ffffff30]  "
      >
        <Link href="contact-us"> Επικοινωνήστε</Link>
      </button>
    </div>
  );
};

export default Hero1;
