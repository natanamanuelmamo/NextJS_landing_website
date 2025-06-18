import BreadcrumbCart from "@/components/cart_page/BreadcrumbCart";
import Cart from "@/components/cart_page/Cart";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";


const CartItems = [
    { id: "1", name: "Apple", price: 1.20, image: "/product1.png", quantity: 1},
    { id: "2", name: "Orange", price: 1.20, image: "/product2.png", quantity: 1},
    { id: "3", name: "Banana", price: 1.20, image: "/product3_new1.png", quantity: 1},
];



export default function CartPage() {
  return (
    <div className="bg-[#D1FFBD4D] min-h-screen">
      <Header />

      <main className="max-w-7xl mx-auto px-4 pt-6 pb-16">
        <BreadcrumbCart />

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-green-700 mb-2">Your Cart</h1>
          <p className="text-gray-600">
            Review your selected items, update quantities, and proceed to checkout.
          </p>
        </div>
        
        <Cart cartItems={CartItems} />
        {/* <div className="justify-center items-center">
        <Cart cartItems={CartItems} />
        </div> */}
      </main>

      <Footer />
    </div>
  );
}
