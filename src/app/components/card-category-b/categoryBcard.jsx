import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const CategoryBCard = ({
  name,
  price,
  description,
  icon,
  vegan,
  glutenFree,
  onClick,
}) => {
  console.log(icon, "icon");
  return (
    <div
      className="bg-[#d39e79] p-4 rounded-lg text-center cursor-pointer"
      onClick={onClick}
    >
      <Image
        src={icon}
        alt={name}
        className="w-32 h-32 mx-auto mb-2 object-cover rounded-full"
      />
      <h3 className="text-lg font-bold text-white">{name}</h3>
      <p className="text-sm text-white mb-2">{description}</p>
      {vegan && <FaCheckCircle className="text-white inline mr-1" />}
      {glutenFree && <FaCheckCircle className="text-white inline" />}
      <div className="flex justify-between items-center">
        <p className="text-xl font-semibold mt-2 text-white">{price}</p>
        <button className="mt-2 text-sm bg-white text-[#FC8474] px-4 py-2 rounded-lg hover:bg-gray-100">
          Add to Order
        </button>
      </div>
    </div>
  );
};

export default CategoryBCard;
