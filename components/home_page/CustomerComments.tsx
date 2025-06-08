"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { motion } from "framer-motion";
import Image from "next/image";

const customers = [
  {
    comment:
      "Fresh produce, friendly staff, and quick service—this supermarket is my go-to every week!",
    name: "Alemu Tadesse",
    city: "Addis Ababa",
    image: "/customer_pic1.png",
  },
  {
    comment:
      "Great variety and prices! The quality of goods keeps me coming back.",
    name: "Sara Getachew",
    city: "Adama",
    image: "/customer_pic1.png",
  },
  {
    comment:
      "I love the customer service here. It’s always a pleasant experience.",
    name: "Dawit Kebede",
    city: "Bahir Dar",
    image: "/customer_pic1.png",
  },
  {
    comment:
      "Clean store, good staff, and affordable prices—what more do you need?",
    name: "Lily Tesfaye",
    city: "Mekelle",
    image: "/customer_pic1.png",
  },
];

// Framer motion variants for modular animations
const cardVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const textVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
};

const starsVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};

const starChildVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const imageVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.7, delay: 0.4 } },
};

const CustomerComments = () => {
  return (
    <section className="w-full py-16 md:px-24 bg-green-50 overflow-hidden">
      {/* Section Header */}
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-green-700 leading-tight">
          What Our Beloved Customers
          <br />
          Say About Us
        </h2>
      </motion.div>

      {/* Swiper */}
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        navigation
        spaceBetween={30}
        slidesPerView={1}
      >
        {customers.map((cust, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="bg-white rounded-3xl p-10 shadow-lg mx-auto max-w-4xl text-center flex flex-col items-center space-y-6"
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: false, amount: 0.6 }} // trigger when 60% visible
            >
              {/* Comment text */}
              <motion.p
                className="text-gray-700 italic text-lg md:text-xl max-w-2xl"
                variants={textVariants}
              >
                “{cust.comment}”
              </motion.p>

              {/* Stars */}
              <motion.div
                className="flex justify-center mb-2"
                variants={starsVariants}
                initial="initial"
                animate="animate"
              >
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <motion.span
                      key={i}
                      className="text-yellow-400 text-5xl"
                      variants={starChildVariants}
                    >
                      ★
                    </motion.span>
                  ))}
              </motion.div>

              {/* Customer Image */}
              <motion.div variants={imageVariants}>
                <Image
                  src={cust.image}
                  alt={cust.name}
                  width={200}
                  height={200}
                  className="rounded-full border-4 border-green-300"
                />
              </motion.div>

              {/* Name + City */}
              <motion.div
                className="flex flex-col items-center"
                variants={textVariants}
              >
                <h4 className="font-semibold text-xl text-green-800">
                  {cust.name}
                </h4>
                <p className="text-gray-500">{cust.city}</p>
              </motion.div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CustomerComments;