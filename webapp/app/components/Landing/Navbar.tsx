"use client";
import React, { useState, useEffect } from "react";
import { Bungee_Shade } from "next/font/google";
import { Menu, X } from "lucide-react";

const BungeeShade = Bungee_Shade({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-white/20 border-b border-white/30"
            : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center mx-4 md:mx-20 py-4">
          {/* Logo */}
          <h1
            className={`${BungeeShade.className} text-2xl md:text-5xl font-medium`}
          >
            Logo
          </h1>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex gap-6 text-lg font-medium font-sans text-black">
            <li className="cursor-pointer hover:opacity-70 transition">
              About
            </li>
            <li className="cursor-pointer hover:opacity-70 transition">
              Features
            </li>
            <li className="cursor-pointer hover:opacity-70 transition">
              Testimonials
            </li>
            <li className="cursor-pointer hover:opacity-70 transition">
              Contact Us
            </li>
          </ul>

          {/* Right Section */}
          <div className="flex items-center gap-3 font-sans">
            <button className="px-5 bg-white text-gray-900 h-10 md:h-12 rounded-full font-semibold text-sm md:text-base">
              Login
            </button>
            <button className="px-5 bg-black text-white h-10 md:h-12 rounded-full font-semibold text-sm md:text-base">
              Register
            </button>

            {/* Hamburger */}
            <button
              className="ml-2 md:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden mx-6 mb-4 rounded-3xl backdrop-blur-xl bg-black/80 text-white border border-white/10">
            <ul className="flex flex-col items-center gap-4 p-6 text-lg font-medium">
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Features</li>
              <li className="cursor-pointer">Testimonials</li>
              <li className="cursor-pointer">Contact Us</li>
            </ul>
          </div>
        )}
      </nav>

      {/* Page Content Wrapper (IMPORTANT) */}
      <div className="pt-24">
        {/* Your page content goes here */}
      </div>
    </>
  );
};

export default Navbar;