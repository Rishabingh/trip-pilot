import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";
const Hero = () => {
  return (
    // Added container bounds: w-full max-w-7xl mx-auto
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-32 flex flex-col lg:flex-row items-center justify-between gap-12">
      <div className="w-full max-w-2xl flex flex-col items-center lg:items-start text-center lg:text-left">
        <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-tight md:leading-tight">
          Plan Your Dream Trip in <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Minutes</span>
        </h1>
        <p className="py-6 md:py-8 text-neutral-600 text-lg tracking-wide max-w-xl">
          Create personalized itineraries with AI-powered recommendations. Save time, discover amazing places, and make every journey unforgettable.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link className="bg-linear-to-r from-blue-600 to-purple-600 text-white w-full sm:w-56 justify-center py-3.5 rounded-xl flex items-center gap-2 font-medium shadow-md hover:shadow-lg transition-all"
          href={'/planner'}
          >
            Start Planning Free <FaLongArrowAltRight />
          </Link>
          <button className="bg-white w-full sm:w-48 py-3.5 rounded-xl font-medium border border-neutral-200 hover:bg-neutral-50 transition-all">
            See How it Works
          </button>
        </div>
      </div>
      
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
        <Image
          src={'/travel.jpg'}
          width={512}
          height={480}
          alt="travel destination image example"
          priority
          // Swapped w-lg for w-full max-w-lg so it shrinks on phones!
          className="w-full max-w-lg h-auto md:h-[480px] object-cover rounded-3xl shadow-2xl"
        />
      </div>
    </div>
  );
};

export default Hero;