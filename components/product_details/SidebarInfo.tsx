'use client';

import { useState } from 'react';
import { Star } from 'lucide-react';

export default function SidebarInfo({ product }: { product: any }) {
  // Example for variations (you can replace with product data)
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || '');
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || '');

  return (
    <div className="border rounded-lg p-4 sticky top-20 shadow-md space-y-6">
      {/* Product Name */}
      <h2 className="text-2xl font-bold">{product.name}</h2>

      {/* Price and Discount */}
      <div className="flex items-center space-x-3">
        <p className="text-green-600 text-3xl font-bold">{product.price}</p>
        {product.discount && (
          <span className="text-red-500 text-lg font-semibold">
            -{product.discount}%
          </span>
        )}
      </div>

      {/* Rating */}
      <div className="flex items-center space-x-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={20}
            className={i < product.rating ? 'text-yellow-400' : 'text-gray-300'}
            fill={i < product.rating ? 'currentColor' : 'none'}
          />
        ))}
        <span className="text-sm text-gray-500 ml-2">({product.ratingCount} reviews)</span>
      </div>

      {/* Variations */}
      <div className="space-y-4">
        {/* Size Selection */}
        {product.sizes && (
          <div>
            <p className="font-medium mb-1">Size:</p>
            <div className="flex space-x-2">
              {product.sizes.map((size: string) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-lg ${
                    selectedSize === size
                      ? 'border-green-600 bg-green-100'
                      : 'border-gray-300 hover:border-green-400'
                  } transition`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Color Selection */}
        {product.colors && (
          <div>
            <p className="font-medium mb-1">Color:</p>
            <div className="flex space-x-2">
              {product.colors.map((color: string) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border-2 ${
                    selectedColor === color
                      ? 'border-green-600'
                      : 'border-gray-300 hover:border-green-400'
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg w-full hover:bg-green-700 transition">
          Add to Cart
        </button>
        <button className="bg-orange-500 text-white px-6 py-3 rounded-lg w-full hover:bg-orange-600 transition">
          Buy Now
        </button>
      </div>
    </div>
  );
}
