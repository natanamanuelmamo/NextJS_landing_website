"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.5, duration: 1, ease: "easeOut" },
  }),
};

const Adverts = () => {
  return (
    <section className="py-10 relative h-screen w-screen">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        {adverts.map((advert, i) => (
          <motion.div
            key={advert.id}
            className={`${advert.bgColor} rounded-xl p-6 relative flex flex-col justify-between overflow-hidden min-h-screen transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl`}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            {/* Discount Badge */}
            <span
              className={`inline-block mx-6 my-10 px-4 py-3 w-1/2 h-[50px] rounded-md text-md text-center font-bold ${advert.badgeColor}`}
            >
              {advert.discount}
            </span>

            {/* Title Text */}
            <h3
              className={`absolute mt-40 text-8xl md:text-3xl font-bold leading-tight ${advert.textColor}`}
            >
              {advert.title} <br className="hidden md:block" /> {advert.titleTwo}
            </h3>

            {/* Image */}
            <div className="absolute bottom-2 right-4 w-96 h-96">
              <Image
                src={advert.image}
                alt={advert.title}
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Adverts;


