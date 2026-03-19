import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const LowerCallToActionSection = () => {
  return (
    <div className="w-full bg-neutral-50 py-16 md:py-24 border-t border-neutral-100">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-8 md:gap-10 text-center">
        
        <div className="flex flex-col gap-4 items-center">
          <h2 className="font-bold text-3xl md:text-4xl text-gray-900">
            Ready to Plan Your Next Adventure?
          </h2>
          <p className="text-neutral-600 text-lg">
            Join thousands of travelers who trust Trip Pilot to create unforgettable experiences.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button className="bg-linear-to-r from-blue-600 to-purple-600 text-white w-full sm:w-56 justify-center py-3.5 rounded-xl flex items-center gap-2 font-medium shadow-md hover:shadow-lg transition-all">
            Start Planning Free <FaLongArrowAltRight />
          </button>
          <button className="bg-white w-full sm:w-48 py-3.5 rounded-xl font-medium border border-neutral-200 hover:bg-neutral-50 transition-all">
            See How it Works
          </button>
        </div>
        
        <div className="text-neutral-500 text-sm font-medium">
          No credit card required • Free to start • Cancel anytime
        </div>
        
      </div>
    </div>
  );
};

export default LowerCallToActionSection;
