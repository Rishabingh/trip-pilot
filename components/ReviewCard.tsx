import { MdOutlineStarPurple500 } from "react-icons/md";

interface FeatureCardProps {
  name: string;
  comment: string;
}

const ReviewCard = ({ name, comment }: FeatureCardProps) => {
  return (
    <div className="bg-neutral-50 rounded-3xl p-4 flex flex-col gap-3 w-sm shadow-md">
      <div className="text-yellow-400 flex">
        <MdOutlineStarPurple500 />
        <MdOutlineStarPurple500 />
        <MdOutlineStarPurple500 />
        <MdOutlineStarPurple500 />
        <MdOutlineStarPurple500 />
      </div>
      <div className="text-neutral-600"><i>&#34;{comment}&#34;</i></div>
      <div className="text-lg font-medium">~{name}</div>
    </div>
  );
};

export default ReviewCard;
