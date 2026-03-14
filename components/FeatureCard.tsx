import { IconType } from "react-icons";

interface FeatureCardProps {
  title: string;
  description: string;
  logo: IconType;
}

const FeatureCard = ({title, description, logo: Logo}: FeatureCardProps) => {
  return (
    <div className="bg-white rounded-3xl p-4 flex flex-col gap-3 w-sm shadow-md">
      <div className="bg-linear-to-r from-blue-600 to-purple-600 text-neutral-100 text-2xl py-2 rounded-lg w-10 flex justify-center">
        <Logo />
      </div>
      <div className="text-lg font-bold">
        {title}
      </div>
      <div className="text-neutral-600">
        {description}
      </div>
    </div>
  )
}

export default FeatureCard