"use client";

import Image from "next/image";

const products = [
  { name: "Single Origin Espresso", image: "/sample.jpeg" },
  { name: "Signature Blend", image: "/sample.jpeg" },
  { name: "Cold Brew Beans", image: "/sample.jpeg" },
  { name: "Single Origin Espresso", image: "/sample.jpeg" },
  { name: "Signature Blend", image: "/sample.jpeg" },
  { name: "Cold Brew Beans", image: "/sample.jpeg" },
];

export default function Products() {
  return (
    <section id="products" className="relative py-20 min-h-screen">
      <div className="relative container mx-auto px-4 text-center max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Explore Our Coffee Selections
        </h2>
        <p className="text-gray-600 italic text-lg mb-10 max-w-xl mx-auto">
          Crafted with passion, roasted to perfection — every sip tells a story.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <div
              key={i}
              className="relative w-full h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black/40 text-white p-4 text-left">
                <h3 className="text-lg font-semibold">{product.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
