'use client';

interface CartSummaryProps {
  subtotal: number;
//   onCheckout: () => void;
}
// onCheckout
export default function CartSummary({ subtotal}: CartSummaryProps) {
  const taxRate = 0.05; // 5% tax
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  return (
    <div className="border rounded-lg p-6 shadow-md sticky top-24 bg-white">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

      <div className="flex justify-between mb-2 text-gray-600">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>

      <div className="flex justify-between mb-2 text-gray-600">
        <span>Tax (5%)</span>
        <span>${tax.toFixed(2)}</span>
      </div>

      <div className="flex justify-between font-bold text-lg mb-4">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>

      <button
        // onClick={onCheckout}
        className="bg-green-600 hover:bg-green-700 text-white w-full py-3 rounded-lg transition"
      >
        Checkout
      </button>
    </div>
  );
}
