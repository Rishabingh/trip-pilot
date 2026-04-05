import { FaRegDotCircle } from "react-icons/fa";
import Image from "next/image";

interface FeatureDetailedCardProps {
  className?: string;
  logo: string;
  title: string;
  description: string;
  l1: string;
  l2: string;
  l3: string;
}

const FeatureDetailedCard = ({className, logo: Logo, title, description, l1, l2, l3}: FeatureDetailedCardProps) => {
  return (
    <div className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-center justify-between w-full ${className}`}>
      
      {/* Text Side */}
      <div className="w-full lg:w-1/2 flex flex-col gap-5">
        <div className="bg-linear-to-r from-blue-600 to-purple-600 text-neutral-100 text-2xl py-2 rounded-xl w-12 flex justify-center shadow-md">
          {/* <Logo /> */}
        </div>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h3>
        <p className="text-lg text-neutral-600 leading-relaxed">
         {description}
        </p>
        <div className="mt-2">
          <ul className="flex gap-4 flex-col text-neutral-700">
            <li className="flex gap-3 items-center"><FaRegDotCircle className="text-green-500 shrink-0 text-lg" /> <span className="text-lg">{l1}</span></li>
            <li className="flex gap-3 items-center"><FaRegDotCircle className="text-green-500 shrink-0 text-lg" /> <span className="text-lg">{l2}</span></li>
            <li className="flex gap-3 items-center"><FaRegDotCircle className="text-green-500 shrink-0 text-lg" /> <span className="text-lg">{l3}</span></li>
          </ul>
        </div>
      </div>
      
      {/* Graphic Side (Replaces the w-md fixed width) */}
      <div className="w-full lg:w-1/2 min-h-75 md:min-h-100 rounded-3xl bg-linear-to-br from-blue-50 via-purple-50 to-red-50 flex items-center justify-center shadow-inner border border-neutral-100 relative">
        <Image
          alt="image explaning features"
          src={Logo}
          fill
          className="absolute object-contain"
        />
        {/* <Logo className="text-8xl md:text-[120px] text-purple-400 opacity-60 drop-shadow-lg" /> */}
      </div>

    </div>
  );
};

export default FeatureDetailedCard;
