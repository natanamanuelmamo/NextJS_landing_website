"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type ProductsGridProps = {
  selectedCategory: string;
};

// Example mock products (keep your same list for now)
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
];

// Animation Variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.6, ease: "easeOut" },
  }),
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", delay: 0.2 } },
};

export default function ProductsGrid({ selectedCategory }: ProductsGridProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 24;

  const filteredProducts =
    selectedCategory === "All"
      ? allProducts
      : allProducts.filter((p) => p.category === selectedCategory);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="flex flex-col gap-8 w-full">
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentProducts.map((product, i) => (
          <motion.div
            key={product.id}
            className="border rounded-xl p-4 flex flex-col items-center text-center shadow hover:shadow-2xl hover:scale-[1.03] transition duration-300 bg-white"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            {/* Image */}
            <motion.img
              src={product.image}
              alt={product.name}
              className="w-32 h-32 object-contain mb-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={imageVariants}
            />

            {/* Product Name */}
            <h4 className="font-semibold text-lg text-green-700 mb-2">
              {product.name}
            </h4>

            {/* Product Price */}
            <p className="text-gray-500 mb-2">{product.price}</p>

            {/* Button */}
            <motion.button
              className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 hover:scale-105 transition"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={buttonVariants}
            >
              Add to Cart
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-8 flex-wrap">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-full border ${
            currentPage === 1 ? "bg-gray-200 text-gray-500" : "bg-green-100 text-green-700 hover:bg-green-200"
          } transition`}
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => index + 1).map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`px-4 py-2 rounded-full border ${
              currentPage === number
                ? "bg-green-600 text-white"
                : "bg-green-100 text-green-700 hover:bg-green-200"
            } transition`}
          >
            {number}
          </button>
        ))}

        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-full border ${
            currentPage === totalPages
              ? "bg-gray-200 text-gray-500"
              : "bg-green-100 text-green-700 hover:bg-green-200"
          } transition`}
        >
          Next
        </button>
      </div>
    </div>
  );
}