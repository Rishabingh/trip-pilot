import ReviewCard from "./ReviewCard"

const ReviewSection = () => {
  return (
    <div className="w-full bg-white py-22">
      <div className="w-full flex flex-col gap-5 items-center justify-center">
        <div className="font-bold text-4xl">
          Loved by Travelers Worldwide
        </div>
        <div className="text-neutral-600">
          See what our users have to say about their experience.
        </div>
      </div>

      <div className="w-[80%] mx-auto grid grid-cols-3 justify-items-center py-20 gap-10">
        <ReviewCard
          name="Vaibhav Sharma"
          comment="Trip Pilot made organizing my Delhi trip so easy! The AI suggestions were spot-on."
        />
        <ReviewCard
          name="Vikas Kumar"
          comment="Trip Pilot did an amazing job for creating spop on plan for bharat mandapam ai impact summit"
        />
        <ReviewCard
          name="Raghav"
          comment="Found amazing hidden spots I would never have discovered on my own!"
        />
      </div>
    </div>
  )
}

export default ReviewSection