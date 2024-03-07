import React from "react";
import EmailForm from "../components/EmailForm";
// import Map from "../components/Map";

const page = () => {
  return (
    <div className="text-black bg-yellow-50 p-6 w-full flex flex-col gap-10 justify-center align-middle lg:px-80">
      <div className="py-10">
        <h1 className="text-3xl font-extrabold">Επικοινωνήστε Μαζί Μας</h1>
      </div>
      <div className="text-black bg-yellow-50 p-6 w-full flex flex-col gap-10 lg:flex-row">
        <div className="flex flex-col gap-10 lg:w-1/2 ">
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-bold">Ελάτε σε Επικοινωνία</h2>
            <p>
              Σας ευχαριστούμε για το ενδιαφέρον σας για τις υπηρεσίες μας! Αν
              έχετε απορίες ή θα θέλατε να μας προσλάβετε για εργασία, μην
              διστάσετε να επικοινωνήσετε μαζί μας. Η ομάδα μας είναι αφοσιωμένη
              στο να σας παρέχει κορυφαία εξυπηρέτηση και υπηρεσίες, καθώς
              είμαστε έτοιμοι να δουλέψουμε μαζί σας για να κάνουμε το όνειρο
              σας πραγματικότητα.
            </p>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col justify-center align-middle w-full text-center lg:flex-row lg:justify-start lg:gap-5">
              <img src="mail.svg" alt="" className="h-[60px]" />
              <div className="lg:text-left">
                <h4 className="font-bold">E-mail</h4>
                <p>info@xuloefarmoges.gr</p>
              </div>
            </div>
            <div className="flex flex-col justify-center align-middle w-full text-center lg:flex-row lg:justify-start lg:gap-5">
              <img src="phone.svg" alt="" className="h-[60px]" />
              <div className="lg:text-left">
                <h4 className="font-bold">Τηλέφωνο</h4>
                <p>+30 6987654321</p>
              </div>
            </div>
            <div className="flex flex-col justify-center align-middle w-full text-center lg:flex-row lg:justify-start lg:gap-5">
              <img src="address.svg" alt="" className="h-[60px]" />
              <div className="lg:text-left">
                <h4 className="font-bold">Διεύθυνση</h4>
                <p>Αθήνα, Περιστέρι, Τηλεμάχου 34</p>
              </div>
            </div>
          </div>
        </div>
        <EmailForm />
      </div>
      <div className="self-center pb-10">
        <img src="message.svg" alt="" />
      </div>
      {/* <Map /> */}
    </div>
  );
};

export default page;
