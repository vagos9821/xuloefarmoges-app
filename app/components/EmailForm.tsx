import React from "react";
import { useState } from "react";

const EmailForm = () => {
  return (
    <form
      action="https://api.web3forms.com/submit"
      method="POST"
      className="flex flex-col max-w-[1000px] gap-2 lg:w-1/2"
    >
      <input
        type="hidden"
        name="access_key"
        value="YOUR_ACCESS_KEY_HERE"
      ></input>

      <label htmlFor="name">Όνοματεπώνυμο*</label>
      <input
        type="text"
        name="name"
        placeholder="Το ονοματεπώνυμο σας"
        required
        className="bg-[#333333] p-2 rounded-lg text-white"
      ></input>

      <label htmlFor="number">Τηλέφωνο*</label>
      <input
        type="number"
        name="number"
        placeholder="Το τηλέφωνο σας"
        required
        className="bg-[#333333] p-2 rounded-lg text-white [appearance:textfield] "
      ></input>

      <label htmlFor="email">E-mail*</label>
      <input
        type="email"
        name="email"
        placeholder="Το e-mail σας"
        required
        className="bg-[#333333] p-2 rounded-lg text-white"
      ></input>

      <label htmlFor="message">Μήνυμα*</label>
      <textarea
        name="message"
        placeholder="Το μήνυμα σας"
        required
        className="bg-[#333333] p-2 rounded-lg text-white"
      ></textarea>

      <div className="h-captcha" data-captcha="true"></div>

      <button
        type="submit"
        className="bg-[#333333] rounded-full w-fit p-2 text-white hover:underline self-center"
      >
        Submit Form
      </button>
      <script src="https://web3forms.com/client/script.js" async defer></script>
    </form>
  );
};

export default EmailForm;
