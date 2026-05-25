import { Link } from "react-router-dom";
import HeroImage from "../assets/HeroImage.jpg";

const Hero = () => {
  return (
    <section className="bg-[#495E57] px-6 py-12 flex justify-between items-center">
      <div>
        <h1 className="text-[#F4CE14] text-5xl font-medium">Little Lemon</h1>
        <h2 className="text-white text-2xl mb-4">Chicago</h2>
        <p className="text-white max-w-xs mb-6">
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <Link
          to="/booking"
          className="bg-[#F4CE14] text-black font-semibold px-6 py-3 rounded-lg"
        >
          Reserve a Table
        </Link>
      </div>
      <img
        src={HeroImage}
        alt="Food"
        className="w-48 h-56 object-cover rounded-xl hidden md:block"
      />
    </section>
  );
};

export default Hero;
