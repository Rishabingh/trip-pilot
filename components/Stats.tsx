interface statsProps {
  users: string;
  tripsPlanned: string;
  countries: string;
}
const Stats = () => {
  return (
    <div className="bg-white h-28 md:h-44 flex items-center md:justify-around justify-between px-3 md:px-0">
      <div className="flex flex-col justify-center items-center gap-2">
        <span className="text-2xl md:text-4xl text-blue-600 font-bold">500K+</span><span>Users</span>
      </div>
      <div className="flex flex-col justify-center items-center gap-2"><span className="text-2xl md:text-4xl text-blue-600 font-bold">2M+</span><span>Trips Planned</span></div>
      <div className="flex flex-col justify-center items-center gap-2"><span className="text-2xl md:text-4xl text-blue-600 font-bold">180+</span><span>Countries</span></div>
    </div>
  )
}

export default Stats