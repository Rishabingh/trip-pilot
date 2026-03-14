import Image from "next/image"
import { FaLongArrowAltRight } from "react-icons/fa";
const Hero = () => {
  return (
    <div className="py-32 flex justify-center gap-10">
      <div className="max-w-xl">
        <div className="font-bold text-6xl leading-20">
          Plan Your Dream Trip in <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Minutes</span>
        </div>
        <div className="py-10 tracking-wider">
          Create personalized itineraries with AI-powered recommendations. Save time, discover amazing places, and make every journey unforgettable.
        </div>
        <div className="flex gap-10">
          <button className="bg-linear-to-r from-blue-600 to-purple-600 text-white w-48 justify-center py-3 rounded-lg flex items-center gap-2">
            Start Planning Free <FaLongArrowAltRight />
          </button>
          <button className="bg-white py-3 rounded-lg w-48">
            See How it Works
          </button>
        </div>
      </div>
      <div>
        <Image
          src={'/travel.jpg'}
          width={512}
          height={480}
          alt="travel destination image example"
          className="w-lg h-120 object-cover rounded-2xl"
        />
      </div>
    </div>
  )
}

export default Hero