import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-10 py-4">
        {/* Logo */}
        <a href="#home">
          <img src={logo} alt="Little Lemon" className="h-10" />
        </a>

        {/* Nav links */}
        <ul className="flex gap-8 list-none">
          <li>
            <a
              href="#home"
              className="text-gray-800 hover:text-[#495E57] font-medium transition-colors duration-200"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-gray-800 hover:text-[#495E57] font-medium transition-colors duration-200"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#menu"
              className="text-gray-800 hover:text-[#495E57] font-medium transition-colors duration-200"
            >
              Menu
            </a>
          </li>
          <li>
            <Link
              to="/booking"
              className="bg-[#F4CE14] hover:bg-yellow-400 transition-colors duration-200 text-black font-semibold px-5 py-2 rounded-lg"
            >
              Reservations
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
