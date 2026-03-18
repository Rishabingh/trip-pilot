"use client";
import { FaMapMarkerAlt } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { FaDollarSign } from "react-icons/fa";
import { IoSparkles } from "react-icons/io5";
import React from "react";
import { useState } from "react";

interface Props {
  setResult: React.Dispatch<React.SetStateAction<string>>;
  resultRef: React.RefObject<HTMLDivElement | null>;
}

const TripDetailsForm = ({ setResult, resultRef }: Props) => {
  const [destination, setDestination] = useState<string>("");
  const [budget, setBudget] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [instructions, setInstructions] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("/api/plan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        destination,
        duration: duration ? Number(duration) : null,
        budget: budget ? Number(budget) : null,
        instructions,
      }),
    });

    const data = await res.json();
    console.log(data);
    setLoading(false);
    setResult(data.res);
    //scrolling result section on screen
    setTimeout(() => {
      resultRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
    // resetting form
    setDestination("");
    setBudget("");
    setDuration("");
    setInstructions("");
  };

  return (
    <div className="py-10">
      <div className="bg-white w-[80%] max-w-4xl shadow-xl rounded-2xl mx-auto p-8">
        {/* Title */}
        <h2 className="text-2xl font-semibold mb-6">Trip Details</h2>

        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          {/* Grid Inputs */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Destination */}
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2 text-sm font-medium">
                <FaMapMarkerAlt size={18} className="text-blue-500" />
                Destination
              </label>

              <input
                type="text"
                placeholder="e.g., Paris, France"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="bg-gray-100 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Duration */}
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2 text-sm font-medium">
                <CiCalendar size={18} className="text-blue-500" />
                Trip Duration (Day)
              </label>

              <input
                type="number"
                inputMode="numeric"
                placeholder="e.g., 7"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="bg-gray-100 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Budget */}
            <div className="flex flex-col gap-2 col-span-1">
              <label className="flex items-center gap-2 text-sm font-medium">
                <FaDollarSign size={18} className="text-blue-500" />
                Travel Budget (INR)
              </label>

              <input
                type="number"
                inputMode="numeric"
                placeholder="e.g., 7000"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="bg-gray-100 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Instructions */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">
              Custom Instructions (Optional)
            </label>

            <textarea
              rows={4}
              placeholder="Add any specific preferences, interests, or requirements. For example: 'I love museums and local food', 'Prefer budget-friendly options', 'Interested in adventure activities', etc."
              className="bg-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400 resize-none"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
            />
          </div>

          {/* Button */}
          <div className="flex flex-col items-center gap-2">
            <button
              className={`flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium
              bg-linear-to-r  hover:opacity-90 transition ${loading ? "from-neutral-700 to-gray-800 cursor-not-allowed" : "from-blue-400 to-purple-500"} `}
              type="submit"
              disabled={loading}
            >
              <IoSparkles size={18} />
              {loading ? "Thinking..." : "Generate Travel Plan"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TripDetailsForm;
