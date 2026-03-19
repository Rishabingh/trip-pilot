import { LuPlane } from "react-icons/lu";

const Footer = () => {
  return (
    <div className="w-full bg-neutral-900 text-neutral-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        
        {/* Top Section: Brand + Links */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8">
          
          {/* Logo + About (Left Side) */}
          <div className="w-full lg:max-w-sm flex flex-col gap-5 text-center lg:text-left items-center lg:items-start">
            <div className="flex items-center gap-2">
              <div className="bg-linear-to-r from-blue-600 to-purple-600 text-neutral-100 text-2xl p-1.5 rounded-lg">
                <LuPlane />
              </div>
              <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold text-xl">
                TripPilot
              </span>
            </div>
            <p className="text-neutral-400 leading-relaxed">
              Plan your perfect trip with AI-powered itineraries and smart recommendations. Let&apos;s explore the world together.
            </p>
          </div>

          {/* Links Grid (Right Side) - 2 cols on mobile, 3 on sm screens */}
          <div className="w-full lg:w-auto grid grid-cols-2 sm:grid-cols-3 gap-8 text-center sm:text-left">
            
            {/* Product */}
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-bold text-neutral-100">Product</h3>
              <ul className="text-neutral-400 text-sm flex flex-col gap-3">
                <li className="hover:text-white cursor-pointer transition-colors">Features</li>
                <li className="hover:text-white cursor-pointer transition-colors">Trip Planner</li>
                <li className="hover:text-white cursor-pointer transition-colors">How it Works</li>
              </ul>
            </div>

            {/* Company */}
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-bold text-neutral-100">Company</h3>
              <ul className="text-neutral-400 text-sm flex flex-col gap-3">
                <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
                <li className="hover:text-white cursor-pointer transition-colors">Blog</li>
                <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
                <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
              </ul>
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-4 col-span-2 sm:col-span-1 mt-4 sm:mt-0">
              <h3 className="text-lg font-bold text-neutral-100">Legal</h3>
              <ul className="text-neutral-400 text-sm flex flex-col gap-3">
                <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
                <li className="hover:text-white cursor-pointer transition-colors">Terms of Service</li>
                <li className="hover:text-white cursor-pointer transition-colors">Cookie Policy</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-neutral-800 my-10"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500 text-center">
          <p>© 2026 TripPilot. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">Twitter</span>
            <span className="hover:text-white cursor-pointer transition-colors">Instagram</span>
            <span className="hover:text-white cursor-pointer transition-colors">LinkedIn</span>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;