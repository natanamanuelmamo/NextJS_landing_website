"use client";

type CategoryListProps = {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
};

export default function CategoryList({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryListProps) {
  return (
    <div className="flex space-x-4 mb-6 overflow-x-auto pb-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-4 py-2 rounded-full border 
            ${
              selectedCategory === category
                ? "bg-green-600 text-white border-green-700"
                : "bg-white text-gray-700 border-gray-300 hover:bg-green-50"
            } transition duration-300`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
