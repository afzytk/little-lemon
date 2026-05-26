import { Link } from "react-router-dom";
import HeroImage from "../assets/HeroImage.jpg";

const Hero = () => {
  return (
    <section className="bg-[#495E57] px-10 py-14">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Text content */}
        <div>
          <h1 className="text-[#F4CE14] text-5xl font-medium">Little Lemon</h1>
          <h2 className="text-white text-2xl mb-4">Chicago</h2>
          <p className="text-white max-w-xs mb-6 leading-relaxed">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link
            to="/booking"
            className="bg-[#F4CE14] hover:bg-yellow-400 transition-colors duration-200 text-black font-semibold px-6 py-3 rounded-lg"
          >
            Reserve a Table
          </Link>
        </div>

        {/* Hero image */}
        <img
          src={HeroImage}
          alt="Food"
          className="w-64 h-72 object-cover rounded-2xl hidden md:block"
        />
      </div>
    </section>
  );
};

export default Hero;
