import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      <Link to="/">
        <img src={logo} alt="Little Lemon" className="h-10" />
      </Link>
      <ul className="flex gap-6 list-none">
        <li>
          <Link to="/" className="text-gray-800 hover:text-green-700">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-gray-800 hover:text-green-700">
            About
          </Link>
        </li>
        <li>
          <Link to="/menu" className="text-gray-800 hover:text-green-700">
            Menu
          </Link>
        </li>
        <li>
          <Link to="/booking" className="text-gray-800 hover:text-green-700">
            Reservations
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
