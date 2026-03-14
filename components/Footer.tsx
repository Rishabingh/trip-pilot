import { LuPlane } from "react-icons/lu";

const Footer = () => {
  return (
    <div className="bg-neutral-800 text-neutral-300">
      <div className="flex justify-around py-22">
        <div className="max-w-2xs flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <div className="bg-linear-to-r from-blue-600 to-purple-600 text-neutral-100 text-2xl p-1 rounded-lg">
              <LuPlane />
            </div>
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold text-lg">
              TripPilot
            </span>
          </div>
          <div>
            Plan your perfect trip with AI-powered itineraries and smart
            recommendations.
          </div>
        </div>

        <div>
          <ul className="text-sm flex flex-col gap-4">
            <li className="text-lg font-bold text-neutral-100">Product</li>
            <li>Features</li>
            <li>Trip Planner</li>
            <li>Working</li>
          </ul>
        </div>

        <div>
          <ul className="text-sm flex flex-col gap-4">
            <li className="text-lg font-bold text-neutral-100">Company</li>
            <li>About</li>
            <li>Blog</li>
            <li>Carrers</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <ul className="text-sm flex flex-col gap-4">
            <li className="text-lg font-bold text-neutral-300">Legal</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookie Policy</li>
            <li>Licenses</li>
          </ul>
        </div>
      </div>

      <div className="h-0.5 bg-neutral-700 w-[80%] mx-auto">

      </div>

      <div className="flex justify-center py-8">
        © 2026 TripPilot. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
