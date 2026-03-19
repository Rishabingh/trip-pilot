import React from 'react'

const AboutHero = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-16 md:py-24 flex flex-col justify-center items-center text-center">
      <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
        Making Travel Planning <br className="hidden md:block" />
        <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Effortless for Everyone
        </span>
      </h1>
      <p className="py-6 text-neutral-600 text-lg tracking-wide max-w-2xl">
        We&apos;re on a mission to help travelers discover the world with confidence, turning complex planning into delightful experiences.
      </p>
    </div>
  )
}

export default AboutHero;