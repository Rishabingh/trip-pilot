import { LuPlane } from "react-icons/lu";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-17 items-center flex justify-between py-3 px-6 bg-white/60 backdrop-blur-lg shadow-2xs">
      <div className="flex items-center gap-2">
        <div className="bg-linear-to-r from-blue-600 to-purple-600 text-neutral-100 text-2xl p-1 rounded-lg">
          <LuPlane />
        </div>
        <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold text-lg">TripPilot</span>
      </div>
      <ul className="flex gap-10 text-neutral-500">
        <li className="text-blue-700">Home</li>
        <li>Features</li>
        <li>Planner</li>
        <li>About</li>
      </ul>
      
      <div className="flex gap-6 items-center">
        <Link href={'/login'}>Sign In</Link>
        <Link
          href="/planner"
          className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 text-sm rounded-lg"
        >
          Start Planning
        </Link>
      </div>
    </nav>
  )
}

export default Navbar