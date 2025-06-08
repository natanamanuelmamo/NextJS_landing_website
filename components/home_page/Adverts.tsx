"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState, useRef } from "react";

const adverts = [
  {
    id: 1,
    title: "Fresh Fruits,",
    titleTwo: "Pure Quality",
    discount: "Flat 10% Discount",
    image: "/advert_pic2.png",
    bgColor: "bg-green-700",
    textColor: "text-white",
    badgeColor: "bg-yellow-400 text-black",
  },
  {
    id: 2,
    title: "Fresh Vegetables",
    titleTwo: "Pure Quality",
    discount: "Flat 10% Discount",
    image: "/advert_pic2.png",
    bgColor: "bg-yellow-300",
    textColor: "text-black",
    badgeColor: "bg-lime-100 text-black",
  },
];

// Animation Variants
const cardVariants = {
  hidden: { opacity: 0, y: 50, rotate: -2, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: {
      delay: i * 0.3,
      duration: 1,
      ease: "easeOut",
      type: "spring",
      stiffness: 80,
    },
  }),
};

// Helper Component for parallax card
const ParallaxCard = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateAmount = 15; // degrees

    const newRotateX = ((y - centerY) / centerY) * -rotateAmount;
    const newRotateY = ((x - centerX) / centerX) * rotateAmount;

    rotateX.set(newRotateX);
    rotateY.set(newRotateY);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="transition-transform duration-300 will-change-transform"
    >
      {children}
    </motion.div>
  );
};

const Adverts = () => {
  return (
    <section className="py-10 relative min-h-screen w-screen bg-green-50">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        {adverts.map((advert, i) => (
          <motion.div
            key={advert.id}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={cardVariants}
          >
            <ParallaxCard>
              <div
                className={`${advert.bgColor} rounded-xl p-6 relative flex flex-col justify-between overflow-hidden min-h-[500px] md:min-h-[600px] lg:min-h-screen group transition-transform duration-500 hover:scale-[1.03] hover:shadow-2xl`}
              >
                {/* Discount Badge */}
                <motion.span
                  className={`inline-block mx-6 my-10 px-4 py-3 w-1/2 h-[50px] rounded-md text-md text-center font-bold ${advert.badgeColor}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.2, duration: 0.6 }}
                >
                  {advert.discount}
                </motion.span>

                {/* Title Text */}
                <motion.h3
                  className={`absolute mt-40 text-6xl md:text-4xl font-bold leading-tight ${advert.textColor} transition-transform duration-500 group-hover:-translate-y-2`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.2, duration: 0.6 }}
                >
                  {advert.title} <br className="hidden md:block" /> {advert.titleTwo}
                </motion.h3>

                {/* Image */}
                <div className="absolute bottom-2 right-4 w-72 h-72 md:w-96 md:h-96 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <Image
                    src={advert.image}
                    alt={advert.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </ParallaxCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Adverts;