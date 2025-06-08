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

const CustomerComments = () => {
  return (
    <section className="w-full py-16 md:px-24 bg-green-50">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-5xl font-bold text-green-700 leading-tight">
          What Our Beloved Customers
          <br />
          Say About Us
        </h2>
      </div>

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
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-10 shadow-lg mx-auto max-w-4xl text-center flex flex-col items-center space-y-6"
            >
              <p className="text-gray-700 italic text-lg md:text-xl max-w-2xl">
                “{cust.comment}”
              </p>

              <div className="flex justify-center mb-2">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i} className="text-yellow-400 text-5xl">★</span>
                  ))}
              </div>

              <Image
                src={cust.image}
                alt={cust.name}
                width={200}
                height={200}
                className="rounded-full border-4 border-green-300"
              />

              <div>
                <h4 className="font-semibold text-xl text-green-800">
                  {cust.name}
                </h4>
                <p className="text-gray-500">{cust.city}</p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CustomerComments;









