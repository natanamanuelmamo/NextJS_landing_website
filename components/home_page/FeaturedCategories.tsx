"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  { name: "Fruits & Vegetables", image: "/category1.png" },
  { name: "Dairy Products", image: "/category2.png" },
  { name: "Bakery & Pastries", image: "/category3.png" },
  { name: "Meat & Seafood", image: "/category4.png" },
  { name: "Beverages", image: "/category5.png" },
];

const duplicatedCategories = [...categories, ...categories];

const FeaturedCategories = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(duplicatedCategories.length / itemsPerPage);

  const scrollToPage = (pageIndex: number) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.3;
      scrollRef.current.scrollTo({
        left: scrollAmount * pageIndex,
        behavior: "smooth",
      });
      setCurrentPage(pageIndex);
    }
  };

  const scroll = (direction: "left" | "right") => {
    const nextPage =
      direction === "left"
        ? Math.max(currentPage - 1, 0)
        : Math.min(currentPage + 1, totalPages - 1);
    scrollToPage(nextPage);
  };

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => {
        const next = (prev + 1) % totalPages;
        scrollToPage(next);
        return next;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-[#f0ffec]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <motion.h2
            className="text-5xl font-bold text-green-700"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            Featured Categories
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false }}
          >
            <ShoppingBag size={54} className="text-green-700" />
          </motion.div>
        </div>

        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-green-100"
          >
            <ChevronLeft />
          </button>

          {/* Carousel */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 no-scrollbar scroll-smooth px-10"
          >
            {duplicatedCategories.map((category, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 flex flex-col items-center w-80 cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: false }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 8px 20px rgba(0, 128, 0, 0.2)",
                }}
              >
                <div className="w-64 h-64 bg-white rounded-full flex items-center justify-center shadow-md mb-3 transition-transform">
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={160}
                    height={160}
                    className="object-contain"
                  />
                </div>
                <p className="text-center text-md font-bold text-[#1f1f1f]">
                  {category.name}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-green-100"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToPage(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === currentPage ? "bg-green-700" : "bg-green-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;