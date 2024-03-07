import React from "react";

const GraphicSection = () => {
  return (
    <div className="flex flex-col justify-center align-middle p-6 gap-10 text-black lg:px-80 lg:pt-20 lg:flex-row">
      <div className="flex flex-col justify-center align-middle text-center gap-2">
        <img className="h-[80px]" src="worker.svg" alt="" />
        <h1 className="text-2xl font-bold">
          Έχουμε Ειδικούς και Ευπαρσουσίστη Ομάδα
        </h1>
        <p>
          Η επίτευξη της τελειότητας μέσα από χρόνια εμπειρίας και προσωπικής
          εργασίας.
        </p>
      </div>
      <div className="flex flex-col justify-center align-middle text-center gap-2">
        <img className="h-[80px]" src="kitchen.svg" alt="" />
        <h1 className="text-2xl font-bold">Κουζίνα Που Διαρκεί</h1>
        <p>Εξέλιξε την κουζίνα σου με περιβάλλοντικές και βιόσιμες λύσεις.</p>
      </div>
      <div className="flex flex-col justify-center align-middle text-center gap-2">
        <img className="h-[80px]" src="tag.svg" alt="" />
        <h1 className="text-2xl font-bold">Πάρε Την Γνώμη Των Ειδικών</h1>
        <p>Ξεκλείδωσε τον ονειρικό σου χώρο με την βοήθεια του προσωπικού.</p>
      </div>
    </div>
  );
};

export default GraphicSection;
