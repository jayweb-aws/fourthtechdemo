// import React from "react";
// import MentoringCoachingFrom from "./mentoringCoachingForm/MentoringCoachingFrom";
// import MentoringCoachingHero from "./mentoringCoachingHero/MentoringCoachingHero";

// const MentoringCoaching = () => {
//   return (
//     <div>
//       <MentoringCoachingHero></MentoringCoachingHero>
//       {/* <MentoringCoachingFrom></MentoringCoachingFrom> */}
//     </div>
//   );
// };

// export default MentoringCoaching;

import React, { useState } from "react";
import MentoringCoachingFrom from "./mentoringCoachingForm/MentoringCoachingFrom";
import MentoringCoachingHero from "./mentoringCoachingHero/MentoringCoachingHero";

const MentoringCoaching = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="relative">
      {/* Overlay that only covers ProfessionalProfileOpt, not the whole page */}
      {showForm && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-baseline pt-20 z-50 px-2 md:px-0">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-6xl relative ">
            <MentoringCoachingFrom />
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded absolute top-2 right-2"
              onClick={() => setShowForm(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Content with reduced opacity only in this section */}
      <div className={`${showForm ? "opacity-25" : "opacity-100"} transition-opacity duration-300`}>
        <MentoringCoachingHero handleShowForm={() => setShowForm(true)} />
      </div>
    </div>
  );
};

export default MentoringCoaching;