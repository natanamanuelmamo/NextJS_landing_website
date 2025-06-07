// "use client";

// import React, { useRef } from "react";
// import Image from "next/image";
// import { ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react";

// const categories = [
//   { name: "Fruits & Vegetables", image: "/category1.png" },
//   { name: "Dairy Products", image: "/category2.png" },
//   { name: "Bakery & Pastries", image: "/category3.png" },
//   { name: "Meat & Seafood", image: "/category4.png" },
//   { name: "Beverages", image: "/category5.png" },
// ];

// // Duplicate for scrolling effect
// const duplicatedCategories = [...categories, ...categories];

// const FeaturedCategories = () => {
//   const scrollRef = useRef<HTMLDivElement>(null);

//   const scroll = (direction: "left" | "right") => {
//     if (scrollRef.current) {
//       const { scrollLeft, clientWidth } = scrollRef.current;
//       const scrollAmount = clientWidth * 0.4;

//       scrollRef.current.scrollTo({
//         left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <section className="py-12 bg-[#f0ffec]">
//       <div className="container mx-auto px-4">
//         {/* Header with icon */}
//         <div className="flex items-center justify-between mb-8">
//           <h2 className="text-5xl font-bold text-green-700">Featured Categories</h2>
//           <ShoppingBag size={54} className="text-green-700" />
//         </div>

//         {/* Category Carousel */}
//         <div className="relative">
//           {/* Arrows */}
//           <button
//             onClick={() => scroll("left")}
//             className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-green-100"
//           >
//             <ChevronLeft />
//           </button>

//           <div
//             ref={scrollRef}
//             className="flex overflow-x-auto gap-6 no-scrollbar scroll-smooth px-10"
//           >
//             {duplicatedCategories.map((category, index) => (
//               <div
//                 key={index}
//                 className="flex-shrink-0 flex flex-col items-center w-80"
//               >
//                 <div className="w-64 h-64 bg-white rounded-full flex items-center justify-center shadow-md mb-3">
//                   <Image
//                     src={category.image}
//                     alt={category.name}
//                     width={160}
//                     height={160}
//                     className="object-contain"
//                   />
//                 </div>
//                 <p className="text-center text-md font-medium text-[#1f1f1f]">
//                   {category.name}
//                 </p>
//               </div>
//             ))}
//           </div>

//           <button
//             onClick={() => scroll("right")}
//             className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-green-100"
//           >
//             <ChevronRight />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedCategories;










"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react";

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
          <h2 className="text-5xl font-bold text-green-700">Featured Categories</h2>
          <ShoppingBag size={54} className="text-green-700" />
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
              <div
                key={index}
                className="flex-shrink-0 flex flex-col items-center w-80"
              >
                <div className="w-64 h-64 bg-white rounded-full flex items-center justify-center shadow-md mb-3">
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
              </div>
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















