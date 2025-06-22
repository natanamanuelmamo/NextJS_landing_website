'use client';

import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const Map = dynamic(() => import('@/components/Map'), { ssr: false });

export default function ContactPage() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted:', form);
  };

  return (
    <>
      <Header />

      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-10">
            <br />
            <br />
          <h1 className="text-4xl font-bold text-green-700">Contact Us</h1>
          <p className="text-gray-600 mt-2">We’d love to hear from you. Reach out to us anytime.</p>
        </div>

        {/* Map */}
        <div className="rounded-md overflow-hidden shadow-lg mb-10 h-96">
          <Map />
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
          {/* Phone */}
          <div className="flex flex-col items-center space-y-3">
            <div className="bg-green-700 text-white rounded-full p-4">
              📞
            </div>
            <h3 className="font-semibold text-gray-700">Phone Number</h3>
            <p className="text-gray-600">+251 92 233 3908<br />+251 91 028 5276<br />+251 91 434 3893</p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center space-y-3">
            <div className="bg-green-700 text-white rounded-full p-4">
              📧
            </div>
            <h3 className="font-semibold text-gray-700">Email Address</h3>
            <p className="text-gray-600">info@simbatech.et</p>
          </div>

          {/* Address */}
          <div className="flex flex-col items-center space-y-3">
            <div className="bg-green-700 text-white rounded-full p-4">
              📍
            </div>
            <h3 className="font-semibold text-gray-700">Office Address</h3>
            <p className="text-gray-600">Addis Ababa, Mexico Lideta<br />Merekato, 6th Floor</p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 text-gray-700">First Name</label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="First Name.."
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Last Name.."
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-1 text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address.."
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-1 text-gray-700">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message.."
              className="w-full border border-gray-300 p-2 rounded h-32 resize-none"
              required
            />
          </div>

          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </section>

      <Footer />
    </>
  );
}
