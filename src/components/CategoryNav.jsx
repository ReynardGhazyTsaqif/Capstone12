import React from "react";
import { Link } from "react-router-dom";

const CategoryNav = () => {
  const categories = ["Sport", "Medical", "Business", "Education"];

  return (
    <div className="flex flex-wrap md:flex-nowrap items-center justify-start gap-4 px-10 py-4">
      {categories.map((cat, idx) => (
        <Link
          key={idx}
          to={`/${cat.toLowerCase()}`}
          className="px-10 py-1  cursor-pointer border border-black rounded-full hover:bg-gray-100"
        >
          {cat}
        </Link>
      ))}
    </div>
  );
};

export default CategoryNav;
