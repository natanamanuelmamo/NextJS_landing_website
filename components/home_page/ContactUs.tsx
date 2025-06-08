"use client";

import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <section className="w-full py-16 px-6 md:px-24" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-green-700">
            Contact Us
          </h2>
          <p className="text-gray-600 mt-3 text-lg">
            We'd love to hear from you! Please fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>

        <form className="space-y-6">
          {/* Name and Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Message Textarea */}
          <textarea
            placeholder="Your Message"
            rows={6}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          ></textarea>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-all duration-300 shadow-md"
            >
              Send Message
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactUs;


