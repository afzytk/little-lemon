import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white px-6 py-12">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo */}
        <div className="flex flex-col items-start gap-3">
          <img src={logo} alt="Little Lemon logo" className="h-20" />
          <p className="text-gray-400 text-sm leading-relaxed">
            A family owned Mediterranean restaurant, focused on traditional
            recipes with a modern twist.
          </p>
        </div>

        {/* Nav links */}
        <div>
          <h4 className="text-[#F4CE14] font-semibold mb-4 text-sm uppercase tracking-wide">
            Navigation
          </h4>
          <ul className="flex flex-col gap-2">
            <li>
              <a
                href="#home"
                className="text-gray-400 hover:text-[#F4CE14] text-sm transition-colors duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-400 hover:text-[#F4CE14] text-sm transition-colors duration-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#menu"
                className="text-gray-400 hover:text-[#F4CE14] text-sm transition-colors duration-200"
              >
                Menu
              </a>
            </li>
            <li>
              <Link
                to="/booking"
                className="text-gray-400 hover:text-[#F4CE14] text-sm transition-colors duration-200"
              >
                Reservations
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[#F4CE14] font-semibold mb-4 text-sm uppercase tracking-wide">
            Contact
          </h4>
          <ul className="flex flex-col gap-2 text-gray-400 text-sm">
            <li>123 Lemon Street</li>
            <li>Chicago, IL 60601</li>
            <li className="mt-2">
              <a
                href="tel:+13125550199"
                className="hover:text-[#F4CE14] transition-colors"
              >
                +1 (312) 555-0199
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@littlelemon.com"
                className="hover:text-[#F4CE14] transition-colors"
              >
                hello@littlelemon.com
              </a>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="text-[#F4CE14] font-semibold mb-4 text-sm uppercase tracking-wide">
            Opening Hours
          </h4>
          <ul className="flex flex-col gap-2 text-gray-400 text-sm">
            <li className="flex justify-between gap-4">
              <span>Mon – Fri</span>
              <span>11:00 – 22:00</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Saturday</span>
              <span>10:00 – 23:00</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Sunday</span>
              <span>12:00 – 21:00</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-5xl mx-auto mt-10 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500">
        <span>
          © {new Date().getFullYear()} Little Lemon. All rights reserved.
        </span>
        <div className="flex gap-5">
          <a href="#" className="hover:text-[#F4CE14] transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-[#F4CE14] transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
