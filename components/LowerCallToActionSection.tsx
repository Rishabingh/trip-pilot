import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const LowerCallToActionSection = () => {
  return (
    <div className="justify-center py-10 md:py-22 flex flex-col gap-10">
      <div className="w-full flex flex-col gap-5 items-center justify-center">
        <div className="font-bold text-3xl text-center md:text-left md:text-4xl">Ready to Plan Your Next Adventure?</div>
        <div className="text-neutral-600 text-center md:text-left">
          Join thousands of travelers who trust TravelPlan to create unforgettable experiences.
        </div>
      </div>

      <div className="flex gap-5 md:gap-10 justify-center md:flex-row flex-col px-6 md:px-0">
        <button className="bg-linear-to-r from-blue-600 to-purple-600 text-white md:w-48 justify-center py-3 rounded-lg flex items-center gap-2">
          Start Planning Free <FaLongArrowAltRight />
        </button>
        <button className="bg-white py-3 rounded-lg md:w-48">
          See How it Works
        </button>
      </div>
      <div className="mx-auto text-neutral-500 text-sm md:text-base">
        No credit card required • Free to start • Cancel anytime
      </div>
    </div>
  );
};

export default LowerCallToActionSection;
