import React from 'react'
import FeatureHero from './components/FeatureHero'
import FeatureDetailedCard from './components/FeatureDetailedCard'
import LowerCallToActionSection from '@/components/LowerCallToActionSection'
import { GiStarFormation } from "react-icons/gi";
import { FaCalendarAlt } from "react-icons/fa";

const page = () => {
  return (
    <div className='w-full'>
      <FeatureHero />
      
      <div className='bg-white py-16 md:py-24'>
        {/* The Magic Container */}
        <div className='max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-20 md:gap-32'>
          
          <FeatureDetailedCard
            className=''
            logo={GiStarFormation}
            title='AI-Powered Recommendations'
            description='Our advanced AI analyzes millions of data points to suggest the perfect destinations, activities, and experiences tailored to your preferences.'
            l1='Personalized suggestions'
            l2='Smart budget allocation'
            l3='Time optimization'
          />
          
          <FeatureDetailedCard
            className='lg:flex-row-reverse' // Ensure this matches the lg breakpoint from the card!
            logo={FaCalendarAlt}
            title='Intelligent Scheduling'
            description='Automatically organize your trip with optimal timing, considering opening hours, distances, and popular times to visit attractions.'
            l1='Auto-scheduling'
            l2='Conflict detection'
            l3='Real-time adjustments'
          />
          
          {/* I tweaked the title of the 3rd one slightly so it doesn't look like a duplicate of the 1st one! */}
          <FeatureDetailedCard
            className=''
            logo={GiStarFormation}
            title='Dynamic Adjustments'
            description='Plans change, and so does your itinerary. Instantly adapt your schedule based on weather, mood, or unexpected closures.'
            l1='Real-time weather tracking'
            l2='Alternative suggestions'
            l3='One-click reordering'
          />

        </div>
      </div>
      
      <LowerCallToActionSection />
    </div>
  )
}

export default page