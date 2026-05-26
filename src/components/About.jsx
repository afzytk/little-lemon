import restaurant from "../assets/restaurant.jpg";
import Chefs from "../assets/Mario-and-Adrian.jpg";

const About = () => {
  return (
    <section className="px-10 py-14 bg-white" id="about">
      <div className="max-w-6xl mx-auto flex justify-between items-center gap-12">
        {/* Text content */}
        <div className="max-w-md">
          <h2 className="text-5xl font-medium mb-2">Little Lemon</h2>
          <h3 className="text-3xl text-gray-500 mb-6">Chicago</h3>
          <p className="text-gray-600 leading-relaxed text-base">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist. Founded in 1995 by
            two brothers, Adrian and Mario.
          </p>
        </div>

        {/* Images */}
        <div className="flex gap-6 relative shrink-0">
          <img
            src={restaurant}
            className="w-56 h-72 object-cover rounded-2xl object-[30%]"
            alt="Restaurant"
          />
          <img
            src={Chefs}
            className="w-56 h-72 object-cover rounded-2xl mt-10 object-[85%]"
            alt="Chefs"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
