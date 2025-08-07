import Image from "next/image";
import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Img2 from "../../../../public/10.png";
import Logo from "../../../../public/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#E46654]">
      {/* Newsletter Section */}
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="flex items-center justify-center mb-4 gap-4">
            <Image className=" object-cover" src={Img2} alt="abc" />
            <h1 className="text-white text-3xl md:text-3xl font-bold">
              Stay in the Loop
            </h1>
            <Image className=" object-cover" src={Img2} alt="abc" />
          </div>

          <p className="text-white text-sm md:text-lg mb-8">
            Be the first to know about seasonal specials, discounts & more.
          </p>

          {/* Email Signup Form */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl justify-center mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="w-[400px] px-4 py-2 bg-white rounded-xl text-gray-600 placeholder-gray-400 text-lg focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="bg-[#EBB050] hover:bg-yellow-500 text-white font-bold px-4 py-2 rounded-xl text-sm transition-all duration-300">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-white/30"></div>

      {/* Main Footer Content */}
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Logo and Description */}
            <div className="space-y-6">
              {/* Logo */}

              <Image className=" object-cover h-[130px]" src={Logo} alt="abc" />

              <p className="text-white text-sm leading-relaxed max-w-sm">
                Authentic New York bagels made fresh daily in the <br></br>heart of
                Manhattan.
              </p>

              {/* Social Media Icons */}
              <div className="flex space-x-4">
                <button className="w-10 h-10 bg-white hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300">
                  <FaInstagram className="text-[orange] text-lg" />
                </button>
                <button className="w-10 h-10 bg-white hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300">
                  <FaFacebookF className="text-[orange] text-lg" />
                </button>
                <button className="w-10 h-10 bg-white hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300">
                  <FaXTwitter className="text-[orange] text-lg" />
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white text-lg font-bold mb-2">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-white text-sm hover:text-white/80 transition-colors duration-300"
                  >
                    Our Story
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white text-sm hover:text-white/80 transition-colors duration-300"
                  >
                    Menu
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white text-sm hover:text-white/80 transition-colors duration-300"
                  >
                    Catering
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white text-sm hover:text-white/80 transition-colors duration-300"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white text-sm hover:text-white/80 transition-colors duration-300"
                  >
                    Press
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-white text-lg font-bold mb-6">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FaMapMarkerAlt className="text-white text-sm mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white text-sm">247 West 46th Street</p>
                    <p className="text-white text-sm">Manhattan, NY 10036</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <FaPhone className="text-white text-sm flex-shrink-0" />
                  <p className="text-white text-sm">(212) 555-6789</p>
                </div>

                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-white text-sm flex-shrink-0" />
                  <p className="text-white text-sm">hello@manhattanbagel.co</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white text-xs">
            © 2025 Bagel Town & Deli. All rights reserved.
          </p>

          <div className="flex space-x-6">
            <a
              href="#"
              className="text-white text-xs hover:text-white/80 transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white text-xs hover:text-white/80 transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-white text-xs hover:text-white/80 transition-colors duration-300"
            >
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
