"use client";

import Image from "next/image";
import HeroImage from "@/public/Hero_picture.png";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center overflow-hidden"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between h-full">
        {/* Left: Text Content */}
        <div className="text-center md:text-left max-w-xl">
          {/* Title */}
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-[#1f1f1f] mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            Welcome to DAN MART <br className="hidden md:block" /> Supermarket
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-[#2d6a4f] mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false }}
          >
            Discover a wide range of products <br className="hidden md:block" /> and enjoy quick and easy shopping
          </motion.p>

          {/* Button */}
          <motion.a
            href="#our-product"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-green-700 transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: false }}
          >
            Shop Now
          </motion.a>
        </div>

        {/* Right: Image */}
        <motion.div
          className="mt-10 md:mt-0 md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          // transition={{ duration: 1 }}
          viewport={{ once: false }}
          animate={{
            y: [0, -10, 0], // floating animation
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <Image
            src={HeroImage}
            alt="Hero Image"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;