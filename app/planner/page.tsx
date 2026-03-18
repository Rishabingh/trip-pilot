"use client"
import { useRef } from "react";
import { useState } from "react";
import TripDetailsForm from "./components/TripDetailsForm";
import TravelPlanResult from "./components/TravelPlanResult";

const Page = () => {
  const [result, setResult] = useState<string>("")
  const resultRef = useRef<HTMLDivElement | null>(null);
  return (
    <div>
      <TripDetailsForm setResult={setResult} resultRef={resultRef}/>
      <div className="py-10" ref={resultRef}>
        <TravelPlanResult
          markdown={result}
        />
      </div>
    </div>
  );
};

export default Page;
