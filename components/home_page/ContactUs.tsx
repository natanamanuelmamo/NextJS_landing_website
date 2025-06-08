"use client";

import { motion } from "framer-motion";

const ContactUs = () => {
  // Framer motion variants
  const containerVariants = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const formVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fieldVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.4 } },
  };

  return (
    <section className="w-full py-16 px-6 md:px-24" id="contact">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, amount: 0.6 }}
        variants={containerVariants}
        className="max-w-4xl mx-auto"
      >
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-green-700">
            Contact Us
          </h2>
          <p className="text-gray-600 mt-3 text-lg">
            We'd love to hear from you! Please fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>

        {/* Form */}
        <motion.form
          className="space-y-6"
          variants={formVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
        >
          {/* Name and Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
              variants={fieldVariants}
            />
            <motion.input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
              variants={fieldVariants}
            />
          </div>

          {/* Message Textarea */}
          <motion.textarea
            placeholder="Your Message"
            rows={6}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
            variants={fieldVariants}
          ></motion.textarea>

          {/* Submit Button */}
          <motion.div className="text-center" variants={buttonVariants}>
            <button
              type="submit"
              className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-all duration-300 shadow-md"
            >
              Send Message
            </button>
          </motion.div>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default ContactUs;