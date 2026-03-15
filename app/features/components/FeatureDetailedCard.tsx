
import { FaRegDotCircle } from "react-icons/fa";
import { IconType } from "react-icons";

interface FeatureDetailedCard {
  className?: string;
  logo: IconType;
  title: string;
  description: string;
  l1: string;
  l2: string;
  l3: string;
}

const FeatureDetailedCard = ({className, logo: Logo, title, description, l1, l2, l3}: FeatureDetailedCard) => {
  return (
    <div className={`flex gap-10 justify-center ${className}`}>
      <div className="max-w-lg flex flex-col gap-3">
        <div className="bg-linear-to-r from-blue-600 to-purple-600 text-neutral-100 text-2xl py-2 rounded-lg w-10 flex justify-center">
          <Logo />
        </div>
        <div className="text-3xl font-bold">{title}</div>
        <div className="text-lg ">
         {description}
        </div>
        <div>
          <ul className="flex gap-3 flex-col">
            <li className="flex gap-1 items-center">
              <FaRegDotCircle className="text-green-500" />
              {l1}
            </li>
            <li className="flex gap-1 items-center">
              <FaRegDotCircle className="text-green-500" />
              {l2}
            </li>
            <li className="flex gap-1 items-center">
              <FaRegDotCircle className="text-green-500" />
              {l3}
            </li>
          </ul>
        </div>
      </div>
      <div className="w-md bg-linear-to-r from-red-100 via-purple-100 to-blue-100 items-center justify-center shadow-md flex">
        <Logo className="text-4xl" />
      </div>
    </div>
  );
};

export default FeatureDetailedCard;
