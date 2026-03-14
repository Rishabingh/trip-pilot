import FeatureCard from "./FeatureCard";
import { GiStarFormation } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import { FaGlobeAsia } from "react-icons/fa";
import { MdMoneyOffCsred } from "react-icons/md";
import { TbAdjustmentsCog } from "react-icons/tb";
import { GrSecure } from "react-icons/gr";

const FeatureSection = () => {
  return (
    <div className="w-full bg-neutral-50 py-22">
      <div className="w-full flex flex-col gap-5 items-center justify-center">
        <div className="font-bold text-4xl">
          Everything You Need to Plan the Perfect Trip
        </div>
        <div className="text-neutral-600">
          Powerful features designed to make travel planning effortless and
          enjoyable.
        </div>
      </div>

      <div className="w-[80%] mx-auto grid grid-cols-3 justify-items-center py-20 gap-10">
        <FeatureCard
          logo={GiStarFormation}
          title="AI-Powered Itineraries"
          description="Get personalized travel plans based on your preferences and budget."
        />
        <FeatureCard
          logo={FaGlobeAsia}
          title="Global Coverage"
          description="Access information for destinations worldwide."
        />
        <FeatureCard
          logo={MdMoneyOffCsred}
          title="Free Access"
          description="Free to Start and No credit card is required."
        />
        <FeatureCard
          logo={FaLocationDot}
          title="Smart Recommendations"
          description="Discover hidden gems and popular attractions tailored to your interests."
        />
        <FeatureCard
          logo={TbAdjustmentsCog}
          title="Flexible Scheduling"
          description="Easily adjust your plans."
        />
        <FeatureCard
          logo={GrSecure}
          title="Secure & Private"
          description="Your travel data is encrypted and protected."
        />
      </div>
    </div>
  );
};

export default FeatureSection;
