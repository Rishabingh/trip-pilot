import React from 'react'
import FeatureHero from './components/FeatureHero'
import FeatureDetailedCard from './components/FeatureDetailedCard'
import LowerCallToActionSection from '@/components/LowerCallToActionSection'
import { GiStarFormation } from "react-icons/gi";
import { FaCalendarAlt } from "react-icons/fa";
import { format } from 'path';

const page = () => {
  return (
    <div className='w-full'>
      <FeatureHero />
      
      <div className='bg-white py-16 md:py-24'>
        {/* The Magic Container */}
        <div className='max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-20 md:gap-32'>
          
          <FeatureDetailedCard
            className=''
            logo={"/planner-form.webp"}
            title='Fill the form'
            description='just start filling the form and then if you have some custom instructions then put them in custom instruction box and then just click the button to get your plan'
            l1='Personalized suggestions'
            l2='Smart budget allocation'
            l3='Time optimization'
          />
          
          <FeatureDetailedCard
            className='lg:flex-row-reverse' // Ensure this matches the lg breakpoint from the card!
            logo={"/planner-md.webp"}
            title='Easy to read format'
            description='after clicking the button get your plan in easy to read format which is easier to understand and its step by step'
            l1='plan based on real data'
            l2='Conflict detection'
            l3='suggestions and notes'
          />
          
          {/* I tweaked the title of the 3rd one slightly so it doesn't look like a duplicate of the 1st one! */}
          <FeatureDetailedCard
            className=''
            logo={"/planner-download.webp"}
            title='Download button'
            description='now you can download this md file locally in your device to keep it or make some adjustment or view it offline whenever you need'
            l1='keep things offline for easy access'
            l2='Alternative suggestions'
            l3='standard md format'
          />

        </div>
      </div>
      
      <LowerCallToActionSection />
    </div>
  )
}

export default page