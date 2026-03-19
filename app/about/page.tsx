import React from "react";
import AboutHero from "./components/AboutHero";
import { LuTarget } from "react-icons/lu";
import Image from "next/image";
import Stats from "@/components/Stats";
import LowerCallToActionSection from "@/components/LowerCallToActionSection";

const page = () => {
  return (
    <div className="w-full">
      <AboutHero />
      
      {/* Background spans full width, content is constrained by max-w-7xl */}
      <div className="w-full bg-neutral-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Text Section */}
          <div className="flex flex-col gap-5 w-full max-w-xl">
            <div className="bg-linear-to-r from-blue-600 to-purple-600 text-neutral-100 text-2xl py-2 rounded-xl w-12 flex justify-center shadow-md">
              <LuTarget />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Story</h2>
            
            <article className="text-neutral-600 text-lg leading-relaxed space-y-4">
              <p>
                Trip Pilot was born from a simple frustration: planning trips
                shouldn&apos;t be harder than the trips themselves. Me and other
                travelers who spent countless hours juggling spreadsheets and
                browser tabs, knew there had to be a better way.
              </p>
              <p>
                In 2026, we set out to build the travel planning platform we wished
                existed. Starting as a small project and a big vision, we combined
                cutting-edge AI with intuitive design to create a tool that makes
                trip planning actually enjoyable.
              </p>
              <p>
                Today, we&apos;re proud to help many travelers plan their
                dream adventures. From weekend getaways to round-the-world journeys,
                Trip Pilot has become the trusted companion for modern explorers.
              </p>
            </article>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <Image
              src={"/travel.jpg"}
              width={600}
              height={500}
              alt="travel destination image example"
              priority 
              className="w-full h-auto md:h-[500px] object-cover rounded-3xl shadow-xl"
            />
          </div>
          
        </div>
      </div>

      <Stats />
      <LowerCallToActionSection />
    </div>
  );
};

export default page;