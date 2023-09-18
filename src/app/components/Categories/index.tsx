import React, { useState } from "react";
import { productsByCategory } from "@/dataProducts/productsData";
import CategoryItems from "./categoriesItems";

export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState<string>("🍕 Pizzas");
  const categoryNames = Object.keys(productsByCategory);

  return (
    <div className="p-6 md:p-5 flex justify-center">
      <div className="max-w-screen-lg">
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center">
          {categoryNames.map((categoryName) => (
            <button
              key={categoryName}
              className={`${
                selectedCategory === categoryName
                  ? "bg-colorPrimary text-white"
                  : "bg-white text-black"
              } px-4 py-2 rounded-lg shadow-md whitespace-nowrap font-medium`}
              onClick={() => setSelectedCategory(categoryName)}
            >
              {categoryName}
            </button>
          ))}
        </div>
        <CategoryItems selectedCategory={selectedCategory} />
      </div>
    </div>
  );
}
