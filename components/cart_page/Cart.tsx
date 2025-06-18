'use client';

import { useState } from 'react';
import CartItem from './CartItem';
import CartSummary from './CartSummary';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export default function Cart({ cartItems }: { cartItems: Product[] }) {
  const [items, setItems] = useState<Product[]>(cartItems);

  const handleQuantityChange = (id: string, newQuantity: number) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemove = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
        <p className="text-gray-600 mb-4">
          Looks like you haven’t added anything to your cart yet.
        </p>
        <a
          href="/products"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
        >
          Continue Shopping
        </a>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Cart Items */}
      <div className="md:col-span-2 space-y-4">
        {items.map(product => (
          <CartItem
            key={product.id}
            product={product}
            onQuantityChange={handleQuantityChange}
            onRemove={handleRemove}
          />
        ))}
      </div>

      {/* Cart Summary */}
      <CartSummary subtotal={total} />
    </div>
  );
}









// 'use client';

// import { useState } from 'react';
// import CartItem from './CartItem';
// import CartSummary from './CartSummary';

// interface Product {
//   id: string;
//   name: string;
//   price: number;
//   image: string;
//   quantity: number;
// }

// export default function Cart({ cartItems }: { cartItems: Product[] }) {
//   const [items, setItems] = useState<Product[]>(cartItems);

//   const handleQuantityChange = (id: string, newQuantity: number) => {
//     setItems(prev =>
//       prev.map(item =>
//         item.id === id ? { ...item, quantity: newQuantity } : item
//       )
//     );
//   };

//   const handleRemove = (id: string) => {
//     setItems(prev => prev.filter(item => item.id !== id));
//   };

//   const total = items.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   if (items.length === 0) {
//     return (
//       <div className="text-center py-16">
//         <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
//         <p className="text-gray-600 mb-4">
//           Looks like you haven’t added anything to your cart yet.
//         </p>
//         <a
//           href="/products"
//           className="inline-block bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
//         >
//           Continue Shopping
//         </a>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-3/4 flex flex-col md:grid-cols-3 gap-6">
//       {/* Cart Items */}
//       <div className="md:col-span-2 space-y-4">
//         {items.map(product => (
//           <CartItem
//             key={product.id}
//             product={product}
//             onQuantityChange={handleQuantityChange}
//             onRemove={handleRemove}
//           />
//         ))}
//       </div>

//       {/* Cart Summary */}
//       <CartSummary subtotal={total} />
//     </div>
//   );
// }
