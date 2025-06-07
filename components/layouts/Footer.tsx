"use client";

import { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Mail, LocationEditIcon, Phone } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setMessage("Please enter your email.");
      return;
    }
    if (!validateEmail(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }
    setMessage("Thank you for subscribing!");
    setEmail("");
  };

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Products", href: "#our-product" },
    { label: "Contact", href: "#contact-us" },
  ];

  return (
    <footer className="w-full bg-[#D1FFBD4D] text-black py-28 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
          <p><Mail size={22} />contact@danmart.com</p>
          <p><Phone size={22} />+1 (123) 456-7890</p>
          <p><LocationEditIcon size={22} />Addis Ababa, Bole Edna Mall</p>
        </div>

        {/* Quick Navigation */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="hover:text-[#6f4e37] transition"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Follow Us</h3>
          <div className="flex space-x-6 text-2xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-[#008000]"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-#008000]"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-[#008000]"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[#008000]"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Subscribe to Our Newsletter</h3>
          <p className="mb-4 text-black-100">
            Get the latest updates, offers, and news delivered to your inbox.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col space-y-4 max-w-sm">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-md text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#6f4e37]"
              required
            />
            <button
              type="submit"
              className="bg-[#008000] hover:bg-[#523822] text-white font-semibold py-3 rounded-md transition"
            >
              Subscribe
            </button>
            {message && (
              <p
                className={`text-sm mt-1 ${
                  message.includes("Thank") ? "text-green-400" : "text-red-400"
                }`}
              >
                {message}
              </p>
            )}
          </form>
        </div>
      </div>

      <hr className="border-gray-700 my-8" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Dan Mart. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="/privacy" className="hover:text-white transition">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-white transition">
            Terms of Service
          </a>
          <a href="#contact-us" className="hover:text-white transition">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
