import Image from "next/image"
import { FaLongArrowAltRight } from "react-icons/fa";
const Hero = () => {
  return (
    <div className="md:py-32 py-12 md:flex justify-center gap-10">
      <div className="max-w-xl">
        <div className="font-bold text-4xl md:text-6xl md:leading-20 leading-12 text-center md:text-left">
          Plan Your Dream Trip in <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Minutes</span>
        </div>
        <div className="py-10 tracking-wider md:px-0 px-6 text-center md:text-left">
          Create personalized itineraries with AI-powered recommendations. Save time, discover amazing places, and make every journey unforgettable.
        </div>
        <div className="flex gap-5 md:gap-10 md:flex-row flex-col px-6 md:px-0">
          <button className="bg-linear-to-r from-blue-600 to-purple-600 text-white md:w-48 justify-center py-3 rounded-lg flex items-center gap-2">
            Start Planning Free <FaLongArrowAltRight />
          </button>
          <button className="bg-white py-3 rounded-lg md:w-48">
            See How it Works
          </button>
        </div>
      </div>
      <div className="mt-6 md:mt-0 p-1 md:p-0">
        <Image
          src={'/travel.jpg'}
          width={512}
          height={480}
          alt="travel destination image example"
          className="w-lg h-120 object-cover rounded-2xl"
          priority
        />
      </div>
    </div>
  )
}

export default Hero