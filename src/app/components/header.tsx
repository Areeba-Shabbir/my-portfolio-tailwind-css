import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-[#081b29] p-4 border-b-2 border-[#0b0b0a] shadow-xl">
      <div className="flex items-center justify-between">
        <a href="#" className="text-[#00abf0] text-3xl font-medium md:text-5xl">
          Areeba..
        </a>
        <ul className="hidden md:flex gap-5 items-center">
          <li>
            <Link
              href="/"
              className="text-[#00abf0] text-lg py-2 px-4 hover:bg-[#1d2740] rounded transition-all"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about-me"
              className="text-[#00abf0] text-lg py-2 px-4 hover:bg-[#1d2740] rounded transition-all"
            >
              About me
            </Link>
          </li>
          <li>
            <Link
              href="/skills"
              className="text-[#00abf0] text-lg py-2 px-4 hover:bg-[#1d2740] rounded transition-all"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-[#00abf0] text-lg py-2 px-4 hover:bg-[#1d2740] rounded transition-all"
            >
              Contact
            </Link>
          </li>
        </ul>
        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button className="text-[#00abf0] text-2xl">
            <span className="material-icons">menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex flex-col items-center gap-4 mt-4">
        <li>
          <Link
            href="/"
            className="text-[#00abf0] text-lg py-2 px-4 hover:bg-[#1d2740] rounded transition-all"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about-me"
            className="text-[#00abf0] text-lg py-2 px-4 hover:bg-[#1d2740] rounded transition-all"
          >
            About me
          </Link>
        </li>
        <li>
          <Link
            href="/skills"
            className="text-[#00abf0] text-lg py-2 px-4 hover:bg-[#1d2740] rounded transition-all"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="text-[#00abf0] text-lg py-2 px-4 hover:bg-[#1d2740] rounded transition-all"
          >
            Contact
          </Link>
        </li>
      </div>
    </div>
  );
}
