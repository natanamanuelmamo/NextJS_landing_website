"use client";

import Image from "next/image";
import HeroImage from "@/public/Hero_picture.png"; // make sure the image is in public or imported correctly

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center overflow-hidden"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between h-full">
        {/* Left: Text Content */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1f1f1f] mb-6">
            Welcome to DAN MART <br className="hidden md:block" /> Supermarket
          </h1>
          <p className="text-lg md:text-xl text-[#2d6a4f] mb-8">
            Discover a wide range of products <br className="hidden md:block" /> and enjoy quick and easy shopping
          </p>
          <a
            href="#our-product"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-green-700 transition"
          >
            Shop Now
          </a>
        </div>

        {/* Right: Image */}
        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
          <Image
            src={HeroImage}
            alt="Hero Image"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;





