import FeatureCard from "./FeatureCard";
import { GiStarFormation } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import { FaGlobeAsia } from "react-icons/fa";
import { MdMoneyOffCsred } from "react-icons/md";
import { TbAdjustmentsCog } from "react-icons/tb";
import { GrSecure } from "react-icons/gr";

const FeatureSection = () => {
  return (
    <div className="w-full bg-neutral-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col gap-4 items-center text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="font-bold text-3xl md:text-4xl text-gray-900">
            Everything You Need to Plan the Perfect Trip
          </h2>
          <p className="text-neutral-600 text-lg">
            Powerful features designed to make travel planning effortless and enjoyable.
          </p>
        </div>

        {/* Grid - Added sm:grid-cols-2 for tablets! */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
          <FeatureCard logo={GiStarFormation} title="AI-Powered Itineraries" description="Get personalized travel plans based on your preferences and budget." />
          <FeatureCard logo={FaGlobeAsia} title="Global Coverage" description="Access information for destinations worldwide." />
          <FeatureCard logo={MdMoneyOffCsred} title="Free Access" description="Free to Start and No credit card is required." />
          <FeatureCard logo={FaLocationDot} title="Smart Recommendations" description="Discover hidden gems and popular attractions tailored to your interests." />
          <FeatureCard logo={TbAdjustmentsCog} title="Flexible Scheduling" description="Easily adjust your plans." />
          <FeatureCard logo={GrSecure} title="Secure & Private" description="Your travel data is encrypted and protected." />
        </div>
        
      </div>
    </div>
  );
};

export default FeatureSection;