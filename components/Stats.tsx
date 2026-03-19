interface statsProps {
  users: string;
  tripsPlanned: string;
  countries: string;
}

const Stats = () => {
  return (
    <div className="w-full bg-white border-y border-neutral-100">
      <div className="max-w-7xl mx-auto py-10 md:py-16 flex flex-row flex-wrap justify-center md:justify-around items-center gap-8 md:gap-12 px-6">
        <div className="flex flex-col items-center gap-1">
          <span className="text-3xl md:text-5xl text-blue-600 font-bold">500K+</span>
          <span className="text-neutral-500 font-medium">Users</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-3xl md:text-5xl text-blue-600 font-bold">2M+</span>
          <span className="text-neutral-500 font-medium">Trips Planned</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-3xl md:text-5xl text-blue-600 font-bold">180+</span>
          <span className="text-neutral-500 font-medium">Countries</span>
        </div>
      </div>
    </div>
  );
};

export default Stats;