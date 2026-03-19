import { FaRegDotCircle } from "react-icons/fa";
import { IconType } from "react-icons";

interface FeatureDetailedCardProps {
  className?: string;
  logo: IconType;
  title: string;
  description: string;
  l1: string;
  l2: string;
  l3: string;
}

const FeatureDetailedCard = ({className, logo: Logo, title, description, l1, l2, l3}: FeatureDetailedCardProps) => {
  return (
    <div className={`flex md:flex-row flex-col gap-10 justify-center ${className}`}>
      <div className="max-w-lg flex flex-col gap-3 px-4 md:px-0">
        <div className="bg-linear-to-r from-blue-600 to-purple-600 text-neutral-100 text-2xl py-2 rounded-lg w-10 flex justify-center">
          <Logo />
        </div>
        <div className="text-3xl font-bold">{title}</div>
        <div className="text-lg text-neutral-600">
         {description}
        </div>
        <div className="mt-2">
          <ul className="flex gap-3 flex-col text-neutral-700">
            <li className="flex gap-2 items-center"><FaRegDotCircle className="text-green-500 shrink-0" /> {l1}</li>
            <li className="flex gap-2 items-center"><FaRegDotCircle className="text-green-500 shrink-0" /> {l2}</li>
            <li className="flex gap-2 items-center"><FaRegDotCircle className="text-green-500 shrink-0" /> {l3}</li>
          </ul>
        </div>
      </div>
      
      {/* FIXED: Changed w-md to w-full max-w-md and added min-h-[200px] for mobile */}
      <div className="w-full max-w-md min-h-62.5 rounded-xl bg-linear-to-r from-red-100 via-purple-100 to-blue-100 items-center justify-center shadow-md flex mx-auto md:mx-0">
        <Logo className="text-6xl text-purple-500 opacity-80" />
      </div>
    </div>
  );
};

export default FeatureDetailedCard;
