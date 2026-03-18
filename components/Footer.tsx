import { LuPlane } from "react-icons/lu";

const Footer = () => {
  return (
    <div className="bg-neutral-800 text-neutral-300">
      
      <div className="flex flex-col md:flex-row justify-around gap-10 md:gap-0 px-6 md:px-0 py-14 md:py-22">
        
        {/* Logo + About */}
        <div className="max-w-xs flex flex-col gap-5 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <div className="bg-linear-to-r from-blue-600 to-purple-600 text-neutral-100 text-2xl p-1 rounded-lg">
              <LuPlane />
            </div>
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold text-lg">
              TripPilot
            </span>
          </div>

          <div className="text-sm md:text-base">
            Plan your perfect trip with AI-powered itineraries and smart
            recommendations.
          </div>
        </div>

        {/* Product */}
        <div className="text-center md:text-left">
          <ul className="text-sm flex flex-col gap-3 md:gap-4">
            <li className="text-lg font-bold text-neutral-100">Product</li>
            <li>Features</li>
            <li>Trip Planner</li>
            <li>Working</li>
          </ul>
        </div>

        {/* Company */}
        <div className="text-center md:text-left">
          <ul className="text-sm flex flex-col gap-3 md:gap-4">
            <li className="text-lg font-bold text-neutral-100">Company</li>
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Legal */}
        <div className="text-center md:text-left">
          <ul className="text-sm flex flex-col gap-3 md:gap-4">
            <li className="text-lg font-bold text-neutral-300">Legal</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookie Policy</li>
            <li>Licenses</li>
          </ul>
        </div>

      </div>

      {/* Divider */}
      <div className="h-0.5 bg-neutral-700 w-[90%] md:w-[80%] mx-auto"></div>

      {/* Bottom */}
      <div className="flex justify-center text-sm md:text-base py-6 md:py-8 px-4 text-center">
        © 2026 TripPilot. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;