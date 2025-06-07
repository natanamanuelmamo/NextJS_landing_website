"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "@/public/logo.svg";
import { Menu, X, Search, ShoppingCart } from "lucide-react";

const Header = () => {
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");
      if (!hero) return;

      const rect = hero.getBoundingClientRect();
      setScrolledPastHero(rect.bottom <= 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Product", href: "#our-product" },
    { label: "Contact Us", href: "#contact-us" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolledPastHero
          ? "bg-[#D1FFBD4D] text-[#1f1f1f] shadow-md backdrop-blur-md bg-opacity-90"
          : "bg-transparent text-black"
      }`}
    >
      <div className="container mx-auto px-4 py-5 flex items-center justify-between">
        {/* Logo */}
        <Image src={Logo} alt="Dan-Mart Logo" height={160} width={160} />

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="block md:hidden"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition hover:text-[#6f4e37]"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}

          {/* Search Icon */}
          <button aria-label="Search" className="hover:text-[#6f4e37] transition">
            <Search size={22} />
          </button>

          {/* Cart Icon */}
          <button aria-label="Cart" className="hover:text-[#6f4e37] transition">
            <ShoppingCart size={22} />
          </button>
        </nav>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div
          className={`md:hidden px-4 pb-4 transition-colors duration-300 ${
            scrolledPastHero
              ? "bg-white text-[#1f1f1f]"
              : "bg-transparent text-white"
          }`}
        >
          <div className="flex flex-col gap-4 mt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-lg font-medium transition hover:text-[#6f4e37]"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-4 mt-2">
              <button aria-label="Search" className="hover:text-[#6f4e37] transition">
                <Search size={22} />
              </button>
              <button aria-label="Cart" className="hover:text-[#6f4e37] transition">
                <ShoppingCart size={22} />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
