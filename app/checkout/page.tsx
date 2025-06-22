import Image from "next/image";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";

export default function CheckoutPage() {
  const paymentOptions = [
    {
      name: "Commercial Bank of Ethiopia",
      logo: "/cbe.jpg",
      account: "1000123456789",
    },
    {
      name: "Bank of Abyssinia",
      logo: "/boa.png",
      account: "2020567890123",
    },
    {
      name: "Telebirr",
      logo: "/telebirr.jpg",
      account: "0912345678",
    },
    {
      name: "Chapa",
      logo: "/chapa.jpg",
      account: "",
    },
    {
      name: "Dashen Bank",
      logo: "/boa.png",
      account: "3000456789012",
    },
    {
      name: "Awash Bank",
      logo: "/boa.png",
      account: "4000789012345",
    },
  ];

  return (
    <div className="bg-[#D1FFBD4D] min-h-screen">
      <Header />

      <main className="max-w-6xl mx-auto px-4 pt-8 pb-16">
        <h1 className="text-3xl mt-10 font-bold text-green-700 mb-6">Checkout</h1>

        <div className="mb-10">
          <h2 className="text-lg font-semibold text-gray-700">Your Purchase Sum</h2>
          <p className="text-4xl font-bold text-green-600 mt-2">ETB 5,250.00</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Select Payment Option</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            {paymentOptions.map((option, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 bg-white flex flex-col items-center shadow hover:shadow-md transition"
              >
                <Image
                  src={option.logo}
                  alt={option.name}
                  width={60}
                  height={60}
                  className="mb-2"
                />
                <h3 className="font-medium text-center text-green-700 mb-1">{option.name}</h3>
                {option.account && (
                  <p className="text-sm text-gray-600">Acct No: {option.account}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Confirm Your Payment</h2>

          <form className="space-y-4">
            <div>
              <label className="block mb-1 font-medium text-gray-700">Payment Method</label>
              <select className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">
                {paymentOptions.map((opt, i) => (
                  <option key={i} value={opt.name}>{opt.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">Your Name</label>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">Upload Payment Receipt</label>
              <div className="border-dashed border-2 border-gray-300 rounded p-6 flex flex-col items-center justify-center cursor-pointer hover:border-green-500">
                <svg className="w-10 h-10 text-gray-400 mb-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5V17a2.5 2.5 0 002.5 2.5H18A2.5 2.5 0 0020.5 17v-.5M7 10l5-5m0 0l5 5m-5-5v12" />
                </svg>
                <p className="text-gray-600">Click to upload or drag and drop</p>
                <input type="file" className="hidden" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition"
            >
              Confirm Payment
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
