"use client"; // Required for using hooks

import categoryImages from "@/utils/categoryImages";
import Image from "next/image";
import { useRouter } from "next/navigation";
import capitalizeEachWord from "@/utils/capitalize";

const CategoryCard = ({ title }) => {
  const router = useRouter();
  const imageUrl = categoryImages[title];

  const handleClick = () => {
    router.push(`/category/${title}`);
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer p-4 bg-white shadow-md rounded-md hover:shadow-lg transition-shadow duration-300"
    >
      <Image
        src={imageUrl}
        alt={title}
        width={250}
        height={400}
        className="w-full h-40 object-cover rounded-md mb-2"
        priority
      />
      <h3 className="text-lg font-semibold text-dark-black">
        {capitalizeEachWord(title)}
      </h3>
    </div>
  );
};

export default CategoryCard;
