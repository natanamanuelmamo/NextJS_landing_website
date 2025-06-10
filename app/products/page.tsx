"use client";

import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import Breadcrumb from "@/components/products_page/Breadcrumb";
import CategoryList from "@/components/products_page/CategoryList";
import SortFilterBar from "@/components/products_page/SortFilterBar";
import ProductsGrid from "@/components/products_page/ProductsGrid";
import { useState } from "react";

export default function ProductsPage() {
  // Example: categories and selectedCategory state
  const categories = ["All", "Fruits", "Vegetables", "Snacks", "Drinks", "Electronics", "kitchen", "crops",
     "soaps", "packed", "sweet", "furniture", "categOne", "categTwo", "categthree", "categfour", "categfive",
     "categsix", "others"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="flex flex-col min-h-screen bg-[#D1FFBD4D]">
      <Header />

      <main className="flex-grow px-6 md:px-24 py-8">
        {/* Breadcrumb */}
        <Breadcrumb currentCategory={selectedCategory} />

        {/* Page Title Section */}
        <section className="w-full h-[300px] flex flex-col justify-center items-center text-center px-8 py-20">
          <h1 className="text-4xl md:text-6xl font-bold text-green-700 mb-4 animate-fadeInUp">
            Our Products
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl animate-fadeInUp delay-200">
            Browse through our wide selection of quality products and categories. 
            Freshness and value you can trust!
          </p>
        </section>
        

        {/* Category List */}
        <CategoryList
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* Sort & Filter */}
        <SortFilterBar />

        {/* Products Grid */}
        <ProductsGrid selectedCategory={selectedCategory} />
      </main>

      <Footer />
    </div>
  );
}
