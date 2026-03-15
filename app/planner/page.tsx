import React from "react";
import TripDetailsForm from "./components/TripDetailsForm";
import TravelPlanResult from "./components/TravelPlanResult";

const page = () => {
  return (
    <div>
      <TripDetailsForm />
      <div className="py-10">
        <TravelPlanResult
          markdown={`# Paris Travel Plan 🇫🇷

## Day 1
- Visit **Eiffel Tower**
- Walk along the **Seine River**
- Dinner near *Montmartre*

## Day 2
- Louvre Museum
- Notre Dame Cathedral
- Evening cruise

### Budget Breakdown
| Item | Cost |
|-----|-----|
| Hotel | $800 |
| Food | $300 |
| Transport | $120 |
        `}
        />
      </div>
    </div>
  );
};

export default page;
