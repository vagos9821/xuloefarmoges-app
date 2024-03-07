import React from "react";

const Hero3 = () => {
  return (
    <div className="p-6 flex flex-col lg:px-80 lg:pt-20 lg:flex-row">
      <div>
        <img src="workers.svg" alt="" />
      </div>
      <div className="text-black flex flex-col gap-5 lg:w-1/2 lg:justify-center">
        <h1 className="text-3xl font-extrabold">
          Εξειδίκευση και Καινοτομία Κουζινών Που Σας Εμπνεύουν
        </h1>
        <p>
          Το προσωπικό μας είναι φτιαγμένο από επαγγελματίες που θα σας
          οδηγήσουν από τον σχεδιασμό του χώρου στην εγκατάσταση του. Τα πολλά
          χρόνια εμπειρίας μας προέρχονται από την βοήθεια των βασικών δομών και
          μυστικών μας.
        </p>
      </div>
    </div>
  );
};

export default Hero3;
