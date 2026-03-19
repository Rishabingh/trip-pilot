import React from 'react'

const AboutHero = () => {
  return (
    <div className='md:py-22 py-10 flex flex-col justify-center items-center'>
        <div className="font-bold text-4xl md:text-5xl leading-12 text-center md:text-left px-4 md:px-0 md:leading-20">
          Making Travel Planning <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Effortless for Everyone</span>
        </div>
        <div className="py-6 tracking-wider text-wrap max-w-2xl text-center">
          We&apos;re on a mission to help travelers discover the world with confidence, turning complex planning into delightful experiences.
        </div>
    </div>
  )
}

export default AboutHero