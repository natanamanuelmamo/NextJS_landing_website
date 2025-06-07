"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaStar, FaPlus } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import classNames from "classnames";

const products = Array(4).fill([
  {
    id: 1,
    name: "Organic Apples",
    image: "/product1.png",
    price: 2.99,
    rating: 4,
  },
  {
    id: 2,
    name: "Fresh Milk",
    image: "/product2.png",
    price: 1.49,
    rating: 5,
  },
  {
    id: 3,
    name: "Whole Wheat Bread",
    image: "/product3_new1.png",
    price: 3.29,
    rating: 3,
  },
  {
    id: 4,
    name: "Chicken Breast",
    image: "/product4_new1.png",
    price: 6.99,
    rating: 4,
  },
  {
    id: 5,
    name: "Orange Juice",
    image: "/product5_new1.png",
    price: 2.59,
    rating: 5,
  },
]).flat();

const chunk = (arr: any[], size: number) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );

const slides = chunk(products, 8); // 8 products per slide (2 rows x 4 columns)

export const FeaturedProducts = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => resetTimeout();
  }, [current]);

  return (
    <section className="py-12 px-4 bg-green-50">
      {/* Header */}
      <div className="flex items-center justify-center gap-2 mb-8">
        <h2 className="text-5xl font-bold text-green-700">Featured Products</h2>
        <FaCartShopping className="text-green-600 text-5xl" />
      </div>

      {/* Carousel */}
      <div className="overflow-hidden relative">
        <div
          className="whitespace-nowrap transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((group, index) => (
            <div
              key={index}
              className="inline-flex flex-wrap justify-center gap-6 w-full px-4 md:grid-cols-1"
              style={{ width: "100%" }}
            >
              {group.map((product, i) => (
                <div
                  key={i}
                  className="w-[200px] bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 animate-fade-in"
                >
                  <div className="relative bg-white rounded-lg p-3">
                    <div className="rounded-lg overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={200}
                        height={200}
                        className="object-contain"
                      />
                    </div>
                    <button className="absolute bottom-2 right-2 bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition">
                      <FaPlus size={14} />
                    </button>
                  </div>
                  <h3 className="mt-2 text-sm font-semibold">{product.name}</h3>
                  <div className="flex text-yellow-500 text-sm">
                    {[...Array(5)].map((_, idx) => (
                      <FaStar
                        key={idx}
                        className={classNames({ "text-gray-300": idx >= product.rating })}
                      />
                    ))}
                  </div>
                  <p className="mt-1 text-green-600 font-bold">${product.price.toFixed(2)}</p>
                  <button className="mt-2 w-full bg-green-600 text-white py-1 rounded hover:bg-green-700 transition">
                    Buy Now
                  </button>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-6">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={classNames(
                "h-2 w-2 rounded-full mx-1 cursor-pointer transition",
                {
                  "bg-green-600": current === index,
                  "bg-gray-300": current !== index,
                }
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;








