"use client";
import React, { useState } from "react";
import {
  FaSearch,
  FaShoppingCart,
  FaHeart,
  FaBox,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Vector1 from "../../../../public/Vector.png";
import Vector2 from "../../../../public/Vector2.png";
import Vector3 from "../../../../public/Vector3.png";
import Vector4 from "../../../../public/vector4.png";
import Vector5 from "../../../../public/Vector5.png";
import Vector6 from "../../../../public/Vector6.png";
import Logo from "../../../../public/logo.png";

import Image from "next/image";

// Navbar Component
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav
      className="px-4 py-4 lg:py-6 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(144deg, rgba(207, 43, 111, 1) 0%, rgba(148, 32, 104, 1) 30%, rgba(27, 20, 73, 1) 55%)",
      }}
    >
      {/* Left side decorative elements */}
      <div className="absolute inset-0 z-10 hidden lg:block">
        <Image src={Vector1} alt="vector1" className="w-20 h-20" />
      </div>

      <div className="absolute top-[120px] left-[10px] z-10 hidden lg:block">
        <Image src={Vector2} alt="vector2" className="w-12 h-12" />
      </div>

      <div className="absolute top-[90px] left-[60px] z-10 hidden lg:block">
        <Image src={Vector3} alt="vector3" className="w-8 h-8" />
      </div>

      <div className="max-w-7xl mx-auto relative z-50">
        {/* Main Navbar */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-1">
            <Image src={Logo} alt="logo" className="" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-16">
            {/* Search Bar */}
            <div className="flex items-center bg-white/20 rounded-xl px-4 py-3 backdrop-blur-sm">
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent text-white placeholder-gray-300 outline-none w-[300px] xl:w-[500px]"
              />
              <FaSearch className="text-[#e46654] ml-2" />
            </div>

            {/* Right side icons */}
            <div className="flex items-center space-x-8 xl:space-x-12">
              <div className="flex items-center space-x-6 xl:space-x-12">
                <div className="flex items-center space-x-1 text-gray-300 cursor-pointer hover:text-white transition-colors">
                  <FaBox className="text-[#e46654]" />
                  <span className="text-sm">Orders</span>
                </div>
                <div className="flex items-center space-x-1 text-gray-300 cursor-pointer hover:text-white transition-colors">
                  <FaHeart className="text-[#e46654]" />
                  <span className="text-sm">Favorites</span>
                </div>
                <div className="flex items-center space-x-1 text-gray-300 cursor-pointer hover:text-white transition-colors">
                  <FaShoppingCart className="text-[#e46654]" />
                  <span className="text-sm">Cart</span>
                </div>
              </div>

              <button className="bg-[#ebb050] text-black px-4 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all">
                Sign In
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4 relative z-100">
            <div className="flex items-center space-x-3">
              <FaShoppingCart className="text-[#e46654] text-lg cursor-pointer" />
              <FaHeart className="text-[#e46654] text-lg cursor-pointer" />
            </div>
            <button
              onClick={toggleMobileMenu}
              className="text-white p-2 hover:text-[#ebb050] transition-colors"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8 xl:space-x-19 py-4 mt-4">
          <a
            href="/"
            className="text-gray-300 hover:text-yellow-300 transition-colors"
          >
            Home
          </a>
          <a
            href="/menu"
            className="text-gray-300 hover:text-yellow-300 transition-colors"
          >
            Menu
          </a>
          <a
            href="/about-us"
            className="text-gray-300 hover:text-yellow-300 transition-colors"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-yellow-300 transition-colors"
          >
            Location
          </a>
          <a
            href="/contact-us"
            className="text-gray-300 hover:text-yellow-300 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden relative z-[999] ${
          isMobileMenuOpen
            ? "max-h-screen opacity-100 visible"
            : "max-h-0 opacity-0 invisible overflow-hidden"
        }`}
      >
        <div className="px-4 py-6 space-y-4 ">
          {/* Mobile Search */}
          <div className="flex items-center bg-white/20 rounded-xl px-4 py-3 backdrop-blur-sm mb-6">
            <input
              type="text"
              placeholder="Search"
              className=" text-white placeholder-gray-300 outline-none flex-1"
            />
            <FaSearch className="text-[#e46654] ml-2" />
          </div>

          {/* Mobile Navigation Links */}
          <div className="space-y-4">
            <a
              href="/"
              className="block text-gray-300 hover:text-yellow-300 transition-colors py-2 border-b border-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="/menu"
              className="block text-gray-300 hover:text-yellow-300 transition-colors py-2 border-b border-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Menu
            </a>
            <a
              href="/about-us"
              className="block text-gray-300 hover:text-yellow-300 transition-colors py-2 border-b border-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#"
              className="block text-gray-300 hover:text-yellow-300 transition-colors py-2 border-b border-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Location
            </a>
            <a
              href="/contact-us"
              className="block text-gray-300 hover:text-yellow-300 transition-colors py-2 border-b border-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Items */}
          <div className="space-y-4 pt-4">
            <div className="flex items-center space-x-2 text-gray-300 py-2">
              <FaBox className="text-[#e46654]" />
              <span>Orders</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300 py-2">
              <FaHeart className="text-[#e46654]" />
              <span>Favorites</span>
            </div>
          </div>

          {/* Mobile Sign In Button */}
          <button
            className="w-full bg-[#ebb050] text-black px-4 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all mt-6"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Sign In
          </button>
        </div>
      </div>

      {/* Right side decorative elements - Desktop only */}
      <div className="absolute top-0 right-0 z-10 hidden lg:block">
        <Image src={Vector4} alt="vector4" className="w-20 h-20" />
      </div>

      <div className="absolute top-[120px] right-[10px] z-10 hidden lg:block">
        <Image src={Vector2} alt="vector2" className="w-12 h-12" />
      </div>

      <div className="absolute top-[90px] right-[100px] z-10 hidden lg:block">
        <Image src={Vector3} alt="vector3" className="w-8 h-8" />
      </div>

      <div className="absolute top-[140px] right-[80px] z-10 hidden lg:block">
        <Image src={Vector5} alt="vector5" className="w-10 h-10" />
      </div>

      <div className="absolute top-[140px] right-[450px] z-10 hidden xl:block">
        <Image src={Vector6} alt="vector6" className="w-12 h-12" />
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;