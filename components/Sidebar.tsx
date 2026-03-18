import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = ({ className }: { className: string }) => {
  const page = usePathname();

  return (
    <aside
      className={`${className} fixed top-17 right-0 bottom-0 w-64 min-h-screen overflow-x-hidden bg-white/60 backdrop-blur-lg shadow-2xs
       flex flex-col p-6 z-30`}
    >
      <ul className="flex flex-col gap-8 text-neutral-500 items-center">
        <li className={`${page === "/" ? "text-blue-600" : ""}`}>
          <Link href="/">Home</Link>
        </li>
        <li className={`${page === "/features" ? "text-blue-600" : ""}`}>
          <Link href="/features">Features</Link>
        </li>
        <li className={`${page === "/planner" ? "text-blue-600" : ""}`}>
          <Link href="/planner">Planner</Link>
        </li>
        <li className={`${page === "/about" ? "text-blue-600" : ""}`}>
          <Link href="/about">About</Link>
        </li>
      </ul>

      <div className="flex gap-4 flex-col py-12 justify-center items-center">
        <Link
          href="/planner"
          className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 text-sm rounded-lg text-center"
        >
          Start Planning
        </Link>
        <Link href="/login">Sign In</Link>
      </div>
    </aside>
  );
};

export default Sidebar
