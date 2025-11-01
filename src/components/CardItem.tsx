import { useState } from "react";

interface CardItemProps {
  image: string;
  name: string;
  description: string;
  price: number;
}

const CardItem = ({ image, name, description, price }: CardItemProps) => {
    const [liked, setLiked] = useState(false);

    const toggleLike = () =>
        {
setLiked(prev => !prev);
        } 
  return (
    <div className="relative bg-gray-200 shadow-lg/30 h-[500px] w-[340px] rounded-xl overflow-visible mb-6">
      <div className="flex justify-end pt-4 pr-4">
        <svg
      onClick={toggleLike}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 640"
      className={`size-6 cursor-pointer transition-colors duration-300 ${
        liked ? "fill-red-600" : "fill-none stroke-red-600"
      }`}
      strokeWidth="40"
    >
      <path d="M442.9 144C415.6 144 389.9 157.1 373.9 179.2L339.5 226.8C335 233 327.8 236.7 320.1 236.7C312.4 236.7 305.2 233 300.7 226.8L266.3 179.2C250.3 157.1 224.6 144 197.3 144C150.3 144 112.2 182.1 112.2 229.1C112.2 279 144.2 327.5 180.3 371.4C221.4 421.4 271.7 465.4 306.2 491.7C309.4 494.1 314.1 495.9 320.2 495.9C326.3 495.9 331 494.1 334.2 491.7C368.7 465.4 419 421.3 460.1 371.4C496.3 327.5 528.2 279 528.2 229.1C528.2 182.1 490.1 144 443.1 144z" />
    </svg>

      </div>

      <div className="flex justify-center">
        <img className="object-cover h-80" src={image} alt={name} />
      </div>

      <div className="text-left pl-5 mb-20">
        <h1 className="font-bold text-lg">{name}</h1>
        <p className="text-sm">{description}</p>
        <p className="font-bold mt-2">Rs. {price}</p>
      </div>

      <button className="absolute left-1/2 -bottom-5 -translate-x-1/2 bg-red-600 text-white rounded-md px-6 py-2 font-bold shadow-lg">
        + ADD TO CART
      </button>
    </div>
  );
};

export default CardItem;
