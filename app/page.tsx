"use client";

import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import Hero from "@/components/home_page/Hero";
import FeaturedCategories from "@/components/home_page/FeaturedCategories";
import Adverts from "@/components/home_page/Adverts";
import FeaturedProducts from "@/components/home_page/FeaturedProducts";


export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#D1FFBD4D]">
      <Header />

      <main className="flex-grow">
        {/* Hero (About) Section */}
        <section id="about" className="h-screen ">
          <Hero />
        </section>

        {/* Featured Categories Section */}
        <section id="featured-categories" className="min-h-screen flex items-center justify-center py-20">
          <FeaturedCategories />
        </section>

        {/* Adverts Section */}
        <section id="adverts" className="min-h-screen flex items-center justify-center py-20">
          <Adverts />
        </section>

        {/* Featured Categories Section */}
        <section id="featured-Products" className="min-h-screen flex items-center justify-center px-24 py-20">
          <FeaturedProducts />
        </section>

        {/* Contact Us Section */}
        {/* <section id="contact-us" className="min-h-screen flex items-center justify-center px-4">
        </section> */}
      </main>


      <Footer />
    </div>
  );
}
