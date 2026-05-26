const SpecialCard = ({ image, name, price, description }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden flex flex-col shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-56 object-cover" />
        <span className="absolute top-3 right-3 bg-[#F4CE14] text-black font-semibold text-sm px-3 py-1 rounded-full">
          {price}
        </span>
      </div>

      <div className="px-6 py-6 flex flex-col flex-1">
        <h3 className="font-semibold text-xl mb-3 text-[#1a1a1a]">{name}</h3>
        <p className="text-gray-500 text-sm leading-relaxed flex-1">
          {description}
        </p>

        <a
          href="#"
          className="mt-6 bg-[#495E57] hover:bg-[#3a4d46] text-white text-sm font-semibold px-5 py-3 rounded-xl text-center transition-colors duration-200"
        >
          Order Now
        </a>
      </div>
    </div>
  );
};

export default SpecialCard;
