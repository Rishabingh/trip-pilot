import React from "react";
import AboutHero from "./components/AboutHero";
import { LuTarget } from "react-icons/lu";
import Image from "next/image";
import Stats from "@/components/Stats";
import LowerCallToActionSection from "@/components/LowerCallToActionSection";

const page = () => {
  return (
    <div>
      <AboutHero />
      
      {/* 1. Added px-6 md:px-12 for safe padding on the sides
        2. Changed to flex-col on mobile, lg:flex-row on desktop
        3. Added items-center so it looks balanced when stacked
      */}
      <div className="bg-neutral-50 py-16 md:py-22 flex flex-col lg:flex-row items-center justify-center gap-12 px-6 md:px-12">
        
        {/* Text Section */}
        <div className="flex flex-col gap-4 w-full max-w-xl">
          <div className="bg-linear-to-r from-blue-600 to-purple-600 text-neutral-100 text-2xl py-2 rounded-lg w-10 flex justify-center shadow-md">
            <LuTarget />
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
          
          {/* Replaced <br/> with <p> tags and space-y-4 for better typography */}
          <article className="text-neutral-600 leading-relaxed space-y-4">
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
        <div className="w-full max-w-xl lg:w-1/2 flex justify-center">
          <Image
            src={"/travel.jpg"}
            width={512}
            height={480}
            alt="travel destination image example"
            priority // Keeping this from our previous fix!
            // Changed w-lg to w-full. Height is auto on mobile, fixed on md screens.
            className="w-full h-auto md:h-[480px] object-cover rounded-3xl shadow-xl"
          />
        </div>
        
      </div>

      <Stats />
      <LowerCallToActionSection />
    </div>
  );
};

export default page;
