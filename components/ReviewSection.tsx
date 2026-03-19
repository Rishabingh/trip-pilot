import ReviewCard from "./ReviewCard"

const ReviewSection = () => {
  return (
    <div className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="flex flex-col gap-4 items-center text-center mb-12 md:mb-16">
          <h2 className="font-bold text-3xl md:text-4xl text-gray-900">
            Loved by Travelers Worldwide
          </h2>
          <p className="text-neutral-600 text-lg">
            See what our users have to say about their experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
          <ReviewCard name="Vaibhav Sharma" comment="Trip Pilot made organizing my Delhi trip so easy! The AI suggestions were spot-on." />
          <ReviewCard name="Vikas Kumar" comment="Trip Pilot did an amazing job for creating spot on plan for bharat mandapam ai impact summit" />
          <ReviewCard name="Raghav" comment="Found amazing hidden spots I would never have discovered on my own!" />
        </div>
        
      </div>
    </div>
  )
}

export default ReviewSection