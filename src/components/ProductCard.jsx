"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa"; // Import the star icon from react-icons

const ProductCard = ({ product }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md hover:shadow-lg transition-shadow duration-300">
      <Image
        src={product.image}
        alt={product.title}
        className="h-40 w-full object-cover rounded-md"
        width={300}
        height={300}
      />
      <div className="mt-2">
        <h3 className="text-lg font-semibold text-dark-black">
          {product.title}
        </h3>
        <p className="text-light-black">${product.price}</p>
        <div className="flex items-center mt-2">
          <FaStar className="text-yellow-500 mr-1" /> {/* Star Icon */}
          <span className="text-dark-black">{product.rating.rate}</span>{" "}
          {/* Rating Number */}
          <span className="text-gray-600 ml-2">
            ({product.rating.count} reviews)
          </span>{" "}
          {/* Review Count */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
