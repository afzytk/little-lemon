import SpecialCard from "./SpecialCard";
import GreekSalad from "../assets/greek-salad.jpg";
import Bruchetta from "../assets/bruchetta.svg";
import LemonDessert from "../assets/lemon-dessert.jpg";

const dishes = [
  {
    name: "Greek Salad",
    price: "$12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    image: GreekSalad,
  },
  {
    name: "Bruschetta",
    price: "$5.99",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh tomatoes and basil.",
    image: Bruchetta,
  },
  {
    name: "Lemon Dessert",
    price: "$5.00",
    description:
      "We only use the freshest ingredients to prepare our lemon dessert, ensuring a bright, zesty finish to your meal that will leave you wanting more.",
    image: LemonDessert,
  },
];

const Specials = () => {
  return (
    <section id="menu" className="px-10 py-14 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header row */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-medium">This week's specials!</h2>
          <button className="bg-[#F4CE14] hover:bg-yellow-400 transition-colors duration-200 px-6 py-2 rounded-lg font-semibold">
            Online Menu
          </button>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dishes.map((dish) => (
            <SpecialCard key={dish.name} {...dish} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specials;
