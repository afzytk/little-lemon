import restaurantLogo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="w-full bg-amber-100 border-b border-stone-200/80 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center cursor-pointer">
          <img
            src={restaurantLogo}
            alt="Little Lemon Logo"
            className="h-10 w-auto object-contain"
          />
        </div>

        <ul className="flex items-center gap-8 text-sm font-semibold text-gray-600">
          <li className="hover:text-green-500 transition cursor-pointer">
            Home
          </li>
          <li className="hover:text-green-500 transition cursor-pointer">
            Menu
          </li>
          <li className="hover:text-green-500 transition cursor-pointer">
            About
          </li>
          <li className="hover:text-green-500 transition cursor-pointer">
            Reservations
          </li>
        </ul>

        <div>
          <button className="bg-green-500 hover:bg-green-600 text-gray-600 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-xl transition-all duration-200 shadow-md shadow-orange-500/10 cursor-pointer">
            Order Online
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
