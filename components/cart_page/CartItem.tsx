'use client';

import Image from 'next/image';
import { Minus, Plus, Trash2 } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartItemProps {
  product: Product;
  onQuantityChange: (id: string, newQuantity: number) => void;
  onRemove: (id: string) => void;
}

export default function CartItem({ product, onQuantityChange, onRemove }: CartItemProps) {
  const handleDecrement = () => {
    if (product.quantity > 1) {
      onQuantityChange(product.id, product.quantity - 1);
    }
  };

  const handleIncrement = () => {
    onQuantityChange(product.id, product.quantity + 1);
  };

  const handleRemove = () => {
    onRemove(product.id);
  };

  return (
    <div className="flex items-center gap-4 border rounded-lg p-4 shadow-sm">
      {/* Product Image */}
      <div className="w-24 h-24 relative flex-shrink-0">
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          className="object-cover rounded"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-green-600 font-bold text-lg">${product.price}</p>

        {/* Quantity Controls */}
        <div className="flex items-center mt-2 space-x-3">
          <button
            onClick={handleDecrement}
            className="border px-2 py-1 rounded hover:bg-gray-100"
          >
            <Minus size={16} />
          </button>
          <span className="font-medium">{product.quantity}</span>
          <button
            onClick={handleIncrement}
            className="border px-2 py-1 rounded hover:bg-gray-100"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>

      {/* Remove Button */}
      <button
        onClick={handleRemove}
        className="text-red-500 hover:text-red-600 transition"
        title="Remove item"
      >
        <Trash2 size={40} />
      </button>
    </div>
  );
}
