"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const OurStory = () => {
  // Typing effect states
  const fullText = `Founded in 2020, DAN MART was created to bring affordable, fresh and high-quality goods to local families – with a focus on excellent customer service and trusted products. We continue to grow every day.
  Founded in 2020, DAN MART was created to bring affordable, fresh and high-quality goods to local families – with a focus on excellent customer service and trusted products. We continue to grow every day.`;
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 60); // typing speed (ms)

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      {/* Background Image */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        <Image
          src="/our_story.jpg"
          alt="Our Story Background"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-white opacity-70"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.7 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: false }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-start px-8 md:px-20">
        <motion.div
          className="max-w-xl text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ staggerChildren: 0.3 }}
        >
          {/* Heading */}
          <motion.h2
            className="text-3xl font-bold text-green-700 mb-4"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            OUR Story
          </motion.h2>

          {/* Typing Text */}
          <motion.p
            className="text-gray-700 mb-6 text-lg font-medium leading-relaxed whitespace-pre-line"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {displayedText}
            <span className="border-r-2 border-green-700 ml-1 animate-pulse" />
          </motion.p>

          {/* Button */}
          <motion.button
            className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-800 transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: false }}
          >
            Learn more
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory;