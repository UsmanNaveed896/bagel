"use client";
import React, { useState } from "react";
import Img from "../../../../public/36.png";
import { HiPhone, HiX, HiSupport, HiLocationMarker, HiClock } from "react-icons/hi";
import { HiChevronDown } from "react-icons/hi";
import Img1 from '../../../../public/37.png'
import Image from "next/image";
import FAQSection from "./faqs";
const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
    agreeToTerms: false,
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const subjectOptions = [
    "General Inquiry",
    "Catering Services",
    "Customer Service",
    "Feedback",
    "Special Orders",
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubjectSelect = (subject) => {
    setFormData((prev) => ({ ...prev, subject }));
    setIsDropdownOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  return (
    <>
      <div
        className=" bg-no-repeat bg-cover bg-center min-h-[400px]"
        style={{
          backgroundImage: `url(${Img.src})`,
        }}
      >
        <div className="flex justify-center">
          <div className="container max-w-[1150px] pt-28">
            <h1 className="text-xl md:text-3xl md:text-start text-center lg:text-5xl font-semibold leading-tight tracking-tight mb-6 text-white">
              Contact Us
            </h1>

            <div className=" space-x-2 text-xl text-white md:text-start text-center">
              <span>Get in Touch with Ess-a-Bagel</span>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="min-h-screen bg-[#E4B688] px-4 py-16 flex items-center justify-center">
        <div className="max-w-7xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* General Inquiries */}
            <div className="bg-[#D39E79] backdrop-blur-sm rounded-2xl p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HiPhone className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-white text-xl font-semibold">
                  General Inquiries
                </h2>
              </div>

              <div className="space-y-3 text-white/90">
                <p className="text-lg font-medium">(212) 980-1010</p>
                <p className="text-base">info@essabagel.com</p>
                <p className="text-sm">Mon-Sun: 6:00 AM - 6:00 PM</p>
              </div>
            </div>

            {/* Catering Services */}
            <div className="bg-[#D39E79] backdrop-blur-sm rounded-2xl p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HiX className="w-8 h-8 text-white rotate-45" />
                </div>
                <h2 className="text-white text-xl font-semibold">
                  Catering Services
                </h2>
              </div>

              <div className="space-y-3 text-white/90">
                <p className="text-lg font-medium">(212) 980-1015</p>
                <p className="text-base">catering@essabagel.com</p>
                <p className="text-sm">24-hour advance notice required</p>
              </div>
            </div>

            {/* Customer Service */}
            <div className="bg-[#D39E79] backdrop-blur-sm rounded-2xl p-8 text-center md:col-span-2 lg:col-span-1">
              <div className="mb-6">
                <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HiSupport className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-white text-xl font-semibold">
                  Customer Service
                </h2>
              </div>

              <div className="space-y-3 text-white/90">
                <p className="text-lg font-medium">(212) 980-1020</p>
                <p className="text-base">feedback@essabagel.com</p>
                <p className="text-sm">We value your feedback</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third Section */}

      <div className="min-h-screen bg-gradient-to-br from-[#E46654] via-[#E46654] to-[#EBB050] px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-sm sm:text-sm lg:text-2xl xl:text-2xl font-bold text-white mb-2 sm:mb-6">
              Send Us a Message
            </h1>
            <p className="text-white/90 text-lg md:text-xl">
              Have a question or special request? We'd love to hear from you.
            </p>
          </div>

          {/* Form */}
          <div className="bg-[#FC8474] backdrop-blur-sm rounded-3xl p-8 md:p-12">
            <div className="space-y-6">
              {/* First Row - Full Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/30 border-0 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/40 backdrop-blur-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/30 border-0 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/40 backdrop-blur-sm"
                    required
                  />
                </div>
              </div>

              {/* Second Row - Phone and Subject */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/30 border-0 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/40 backdrop-blur-sm"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Subject
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full px-4 py-3 bg-white/30 border-0 rounded-xl text-white text-left focus:outline-none focus:ring-2 focus:ring-white/40 backdrop-blur-sm flex items-center justify-between"
                    >
                      <span>{formData.subject}</span>
                      <HiChevronDown
                        className={`w-5 h-5 transition-transform ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg z-10">
                        {subjectOptions.map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => handleSubjectSelect(option)}
                            className="w-full px-4 py-3 text-left text-gray-800 hover:bg-white/50 first:rounded-t-xl last:rounded-b-xl transition-colors"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us how we can help you..."
                  rows={6}
                  className="w-full px-4 py-3 bg-white/30 border-0 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/40 backdrop-blur-sm resize-none"
                  required
                />
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  className="w-5 h-5 rounded border-2 border-white/50 bg-white/30 text-white focus:ring-2 focus:ring-white/40 mt-0.5"
                  required
                />
                <label htmlFor="terms" className="text-white text-sm">
                  I agree to the Privacy Policy and Terms of Service
                </label>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  className="bg-white text-orange-500 font-semibold py-3 px-8 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section4 */}
      <div className="min-h-screen bg-[#E4B688] px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-sm sm:text-sm lg:text-2xl xl:text-2xl font-bold text-white mb-2 sm:mb-6">
              Visit Our Locations
            </h1>
            <p className="text-white/90 text-lg">
              Find us at one of our convenient NYC locations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Side - Map */}
            <div className="backdrop-blur-sm rounded-2xl p-6 h-fit">
             <Image src={Img1} alt="abc" />
            </div>

            {/* Right Side - Location Cards */}
            <div className="space-y-6">
              {/* Midtown Manhattan */}
              <div className="bg-[#D39E79] backdrop-blur-sm rounded-2xl p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-white text-xl font-semibold">
                    Midtown Manhattan
                  </h2>
                  <button className="bg-white text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                    Get Directions
                  </button>
                </div>

                <div className="space-y-3 text-white/90">
                  <div className="flex items-center gap-3">
                    <HiLocationMarker className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">
                      831 3rd Avenue, New York, NY 10022
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <HiPhone className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">(212) 980-1010</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <HiClock className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">Mon-Sun: 6:00 AM - 4:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Upper West Side */}
              <div className="bg-[#D39E79] backdrop-blur-sm rounded-2xl p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-white text-xl font-semibold">
                    Upper West Side
                  </h2>
                  <button className="bg-white text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                    Get Directions
                  </button>
                </div>

                <div className="space-y-3 text-white/90">
                  <div className="flex items-center gap-3">
                    <HiLocationMarker className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">
                      2239 Broadway, New York, NY 10024
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <HiPhone className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">(212) 595-8003</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <HiClock className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">Mon-Sun: 6:30 AM - 5:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Brooklyn Heights */}
              <div className="bg-[#D39E79] backdrop-blur-sm rounded-2xl p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-white text-xl font-semibold">
                    Brooklyn Heights
                  </h2>
                  <button className="bg-white text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                    Get Directions
                  </button>
                </div>

                <div className="space-y-3 text-white/90">
                  <div className="flex items-center gap-3">
                    <HiLocationMarker className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">
                      145 Montague Street, Brooklyn, NY 11201
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <HiPhone className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">(718) 858-4024</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <HiClock className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">Mon-Sun: 7:00 AM - 4:30 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FAQSection/>
    </>
  );
};

export default ContactUs;
