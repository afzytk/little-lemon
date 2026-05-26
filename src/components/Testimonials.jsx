import Maria from "../assets/Maria.jpg";
import James from "../assets/James.jpg";
import Abigail from "../assets/Abigail.jpg";
import Tom from "../assets/Tom.jpg";

const reviews = [
  {
    name: "Maria",
    rating: 5,
    text: "Amazing food and great atmosphere!",
    avatar: Maria,
  },
  {
    name: "James",
    rating: 4,
    text: "Best Mediterranean food in Chicago.",
    avatar: James,
  },
  {
    name: "Abigail",
    rating: 5,
    text: "The lemon dessert is absolutely divine.",
    avatar: Abigail,
  },
  {
    name: "Tom",
    rating: 4,
    text: "Lovely place for a family dinner.",
    avatar: Tom,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#495E57] px-10 py-14">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-white text-4xl font-medium mb-10 text-center">
          What our customers say!
        </h2>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={r.avatar}
                className="w-20 h-20 rounded-full object-cover mb-4"
                alt={r.name}
              />
              <span className="font-semibold text-base mb-1">{r.name}</span>
              <p className="text-yellow-400 text-xl mb-3">
                {"★".repeat(r.rating)}
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
