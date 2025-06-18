import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import ProductGallery from '@/components/product_details/ProductGallery';
import ProductInfo from '@/components/product_details/ProductInfo';
import ProductHighlights from '@/components/product_details/ProductHighlights';
import SidebarInfo from '@/components/product_details/SidebarInfo';
import FeaturedProducts from '@/components/product_details/RecommendedProducts';
import BreadcrumbProduct from '@/components/product_details/BreadcrumbProduct';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const productId = params.id;


  const mockProduct = {
    id: productId,
    name: "Nike Air Jordan",
    detail: 'Nike Air Jordan made in USA in 2024. Limited edition.',
    price: "$19.99",
    discount: 20,
    images: ["/Nike2.jpg", "/Nike1.jpg", "/Nike4.jpg"],
    description: "- Breathable mesh upper\n- Lightweight cushioning\n- Durable rubber outsole\n- Made in USA, 2024 edition\n- Available in multiple colors and sizes",
    variations: ["Red", "Blue", "Green"],
    seller: "Supermarket Inc.",
    rating: 4,
    ratingCount: 152,
    sizes: ['38', '39', '40', '41', '42', '43'],
    colors: ['black', '#8B4513', '#A0522D'],
    reviewsCount: 23,
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#D1FFBD4D]">
        <Header />

        {/* <main> */}

        {/* <BreadcrumbProduct productName={mockProduct.name} /> */}
        {/* Page Title Section */}
        <section className="w-full h-[300px] flex flex-col justify-center items-center text-center px-8 py-20">
          <BreadcrumbProduct productName={mockProduct.name} />
          <h1 className="text-4xl md:text-6xl font-bold text-green-700 mb-4 animate-fadeInUp">
            Product Details
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl animate-fadeInUp delay-200">
            Take a look at the datails of the item you selected. Look how it looks and 
            how much it costs. Then add it too your cart with your other items or buy it directly!
          </p>
        </section>

        <div className="max-w-7xl mx-auto  px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Image Gallery */}
        <div className="lg:col-span-2">
            <ProductInfo product={mockProduct}/>
            <ProductGallery images={mockProduct.images} />
            <ProductHighlights description={mockProduct.description} />
        </div>

        {/* Right: Sidebar with info and actions */}
        <SidebarInfo product={mockProduct} />
        </div>

        <section id="featured-Products" className="min-h-screen flex items-center justify-center px-24 py-20">
          <FeaturedProducts />
        </section>

        {/* </main> */}

        <Footer />
    </div>
  );
}
