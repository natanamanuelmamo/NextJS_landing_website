'use client';

import { Star } from 'lucide-react';

export default function ProductInfo({ product }: { product: any }) {
  return (
    <div className="border rounded-lg p-4 mb-4 shadow-md space-y-3">
      {/* Product Name */}
      <h2 className="text-2xl font-bold text-green-700">{product.name}</h2>

      {/* Product Detail */}
      <p className="text-gray-700 text-base">{product.detail}</p>

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
        <span className="text-sm text-gray-500 ml-2">
          ({product.ratingCount} reviews)
        </span>
      </div>
    </div>
  );
}
