"use client";

type ProductsGridProps = {
  selectedCategory: string;
};

// Example mock products (replace with real data later)
const allProducts = [
  { id: 1, name: "Apple", category: "Fruits", price: "$1.20", image: "/product1.png" },
  { id: 2, name: "Banana", category: "Fruits", price: "$0.80", image: "/product2.png" },
  { id: 3, name: "Carrot", category: "Vegetables", price: "$1.00", image: "/product3_new1.png" },
  { id: 4, name: "Chips", category: "Snacks", price: "$2.50", image: "/product4_new1.png" },
  { id: 5, name: "Apple", category: "Fruits", price: "$1.20", image: "/product1.png" },
  { id: 6, name: "Banana", category: "Fruits", price: "$0.80", image: "/product2.png" },
  { id: 7, name: "Carrot", category: "Vegetables", price: "$1.00", image: "/product3_new1.png" },
  { id: 8, name: "Chips", category: "Snacks", price: "$2.50", image: "/product4_new1.png" },
  { id: 9, name: "Apple", category: "Fruits", price: "$1.20", image: "/product1.png" },
  { id: 10, name: "Banana", category: "Fruits", price: "$0.80", image: "/product2.png" },
  { id: 11, name: "Carrot", category: "Vegetables", price: "$1.00", image: "/product3_new1.png" },
  { id: 12, name: "Chips", category: "Snacks", price: "$2.50", image: "/product4_new1.png" },
  { id: 13, name: "Apple", category: "Fruits", price: "$1.20", image: "/product1.png" },
  { id: 14, name: "Banana", category: "Fruits", price: "$0.80", image: "/product2.png" },
  { id: 15, name: "Carrot", category: "Vegetables", price: "$1.00", image: "/product3_new1.png" },
  { id: 16, name: "Chips", category: "Snacks", price: "$2.50", image: "/product4_new1.png" },
  { id: 17, name: "Apple", category: "Fruits", price: "$1.20", image: "/product1.png" },
  { id: 18, name: "Banana", category: "Fruits", price: "$0.80", image: "/product2.png" },
  { id: 19, name: "Carrot", category: "Vegetables", price: "$1.00", image: "/product3_new1.png" },
  { id: 20, name: "Chips", category: "Snacks", price: "$2.50", image: "/product4_new1.png" },
  { id: 21, name: "Apple", category: "Fruits", price: "$1.20", image: "/product1.png" },
  { id: 22, name: "Banana", category: "Fruits", price: "$0.80", image: "/product2.png" },
  { id: 23, name: "Carrot", category: "Vegetables", price: "$1.00", image: "/product3_new1.png" },
  { id: 24, name: "Chips", category: "Snacks", price: "$2.50", image: "/product4_new1.png" },
  { id: 25, name: "Apple", category: "Fruits", price: "$1.20", image: "/product1.png" },
  { id: 26, name: "Banana", category: "Fruits", price: "$0.80", image: "/product2.png" },
  { id: 27, name: "Carrot", category: "Vegetables", price: "$1.00", image: "/product3_new1.png" },
  { id: 28, name: "Chips", category: "Snacks", price: "$2.50", image: "/product4_new1.png" },
  { id: 29, name: "Apple", category: "Fruits", price: "$1.20", image: "/product1.png" },
  { id: 30, name: "Banana", category: "Fruits", price: "$0.80", image: "/product2.png" },
  { id: 31, name: "Carrot", category: "Vegetables", price: "$1.00", image: "/product3_new1.png" },
  { id: 32, name: "Chips", category: "Snacks", price: "$2.50", image: "/product4_new1.png" },
  { id: 33, name: "Apple", category: "Fruits", price: "$1.20", image: "/product1.png" },
  { id: 34, name: "Banana", category: "Fruits", price: "$0.80", image: "/product2.png" },
  { id: 35, name: "Carrot", category: "Vegetables", price: "$1.00", image: "/product3_new1.png" },
  { id: 36, name: "Chips", category: "Snacks", price: "$2.50", image: "/product4_new1.png" },
  // Add more products...
];

export default function ProductsGrid({ selectedCategory }: ProductsGridProps) {
  const filteredProducts =
    selectedCategory === "All"
      ? allProducts
      : allProducts.filter((p) => p.category === selectedCategory);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredProducts.map((product) => (
        <div
          key={product.id}
          className="border rounded-lg p-4 flex flex-col items-center text-center shadow hover:shadow-lg transition"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-32 h-32 object-contain mb-4"
          />
          <h4 className="font-semibold text-lg text-green-700 mb-2">
            {product.name}
          </h4>
          <p className="text-gray-500 mb-2">{product.price}</p>
          <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
