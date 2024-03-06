import React from "react";

const Hero2 = () => {
  return (
    <div className="w-full flex flex-col md:flex-row md:align-middle md:px-80 md:pt-20">
      <div className="text-black flex flex-col gap-5 p-6 md:justify-center">
        <h1 className="text-3xl font-extrabold">
          Η Ονειρική Σου Κουζίνα Σε Περιμένει
        </h1>
        <p className="mr-10">
          Ειμαστε αφοσιωμένοι στο να παρέχουμε στους πελάτες μας άψογη
          εξυπηρέτηση προσφέροντας και στους εργάζομενους μας την καλύτερη
          εκπαίδευση και φιλικό εργασιακό περιβάλλον.
        </p>
        <p className="mr-10">
          Καταλαβαίνουμε ότι η κουζίνα είναι η καρδιά του σπιτιού και πρέπει να
          είναι σχεδιασμένη ώστε να αντικατοπτρίζει το στιλ σας, καθώς και να
          είναι πρακτική για το μαγειρικό σας πάθος.
        </p>
        <button className="border-2 border-black w-fit p-2 rounded-full self-center hover:bg-[#00000030]">
          Δείτε Έργα
        </button>
      </div>
      <div>
        <img className="p-6" src="slide-1.webp" alt="" />
      </div>
    </div>
  );
};

export default Hero2;
