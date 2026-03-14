import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const LowerCallToActionSection = () => {
  return (
    <div className="justify-center py-22 flex flex-col gap-10">
      <div className="w-full flex flex-col gap-5 items-center justify-center">
        <div className="font-bold text-4xl">Ready to Plan Your Next Adventure?</div>
        <div className="text-neutral-600">
          Join thousands of travelers who trust TravelPlan to create unforgettable experiences.
        </div>
      </div>

      <div className="flex gap-10 justify-center">
        <button className="bg-linear-to-r from-blue-600 to-purple-600 text-white w-48 justify-center py-3 rounded-lg flex items-center gap-2">
          Start Planning Free <FaLongArrowAltRight />
        </button>
        <button className="bg-white py-3 rounded-lg w-48">
          See How it Works
        </button>
      </div>
      <div className="mx-auto text-neutral-500">
        No credit card required • Free to start • Cancel anytime
      </div>
    </div>
  );
};

export default LowerCallToActionSection;
