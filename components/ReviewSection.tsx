import ReviewCard from "./ReviewCard"

const ReviewSection = () => {
  return (
    <div className="w-full bg-white md:py-22 py-10 px-4 md:px-0">
      <div className="w-full flex flex-col gap-5 items-center justify-center">
        <div className="font-bold text-4xl">
          Loved by Travelers Worldwide
        </div>
        <div className="text-neutral-600">
          See what our users have to say about their experience.
        </div>
      </div>

      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-3 justify-items-center py-10 md:py-20 gap-5 md:gap-10 px-4 md:px-0">
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