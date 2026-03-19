import React from 'react'
import FeatureHero from './components/FeatureHero'
import FeatureDetailedCard from './components/FeatureDetailedCard'
import LowerCallToActionSection from '@/components/LowerCallToActionSection'
import { GiStarFormation } from "react-icons/gi";
import { FaCalendarAlt } from "react-icons/fa";

const page = () => {
  return (
    <div className='py-10'>
      <FeatureHero />
      <div className='py-22 bg-white flex flex-col gap-20'>
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
        className='md:flex-row-reverse'
        logo={FaCalendarAlt}
        title='Intelligent Scheduling'
        description='Automatically organize your trip with optimal timing, considering opening hours, distances, and popular times to visit attractions.'
        l1='Auto-scheduling'
        l2='Conflict detection'
        l3='Real-time adjustments'
        />
        <FeatureDetailedCard
        className=''
        logo={GiStarFormation}
        title='AI-Powered Recommendations'
        description='Our advanced AI analyzes millions of data points to suggest the perfect destinations, activities, and experiences tailored to your preferences.'
        l1='Personalized suggestions'
        l2='Smart budget allocation'
        l3='Time optimization'
        />
      </div>
      <LowerCallToActionSection />
    </div>
  )
}

export default page