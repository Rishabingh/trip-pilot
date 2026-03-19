"use client";
import { LuPlane } from "react-icons/lu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const page = usePathname();
  const [sideBarOpen, setSideBarOpen] = useState<boolean>(false);

  const handleLinkClick = () => {
    setSideBarOpen(false);
  }

  return (
    <>
      <nav className="fixed z-50 top-0 left-0 right-0 h-17 items-center flex justify-between py-3 px-6 bg-white/60 backdrop-blur-lg shadow-2xs">
        <div className="flex items-center gap-2">
          <div className="bg-linear-to-r from-blue-600 to-purple-600 text-neutral-100 text-2xl p-1 rounded-lg">
            <LuPlane />
          </div>
          <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold text-lg">
            TripPilot
          </span>
        </div>
        <ul className="md:flex hidden gap-10 text-neutral-500">
          <li className={`${page === "/" ? "text-blue-600" : ""}`}>
            <Link href={"/"}>Home</Link>
          </li>
          <li className={`${page === "/features" ? "text-blue-600" : ""}`}>
            <Link href={"/features"}>Features</Link>
          </li>
          <li className={`${page === "/planner" ? "text-blue-600" : ""}`}>
            <Link href={"/planner"}>Planner</Link>
          </li>
          <li className={`${page === "/about" ? "text-blue-600" : ""}`}>
            <Link href={"/about"}>About</Link>
          </li>
        </ul>

        <div className="md:flex hidden gap-6 items-center">
          <Link href={"/login"}>Sign In</Link>
          <Link
            href="/planner"
            className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 text-sm rounded-lg"
          >
            Start Planning
          </Link>
        </div>

        <div
          className="md:hidden block z-30"
          onClick={() => setSideBarOpen((prev) => !prev)}
        >
          {sideBarOpen ? <RxCross1 size={24} /> : <IoMdMenu size={24} />}
        </div>
      </nav>

      <Sidebar
        className={`${sideBarOpen ? "translate-x-0" : "translate-x-full"} transform transition-transform duration-300 ease-in-out`}
        handleLinkClick = {handleLinkClick}
      />
    </>
  );
};

export default Navbar;
