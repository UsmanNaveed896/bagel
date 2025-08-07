import React from "react";
import { HiLocationMarker, HiClock } from "react-icons/hi";

export default function AboutSection5() {
  return (
    <div
      className="min-h-screen  px-4 py-16"
      style={{
        background:
          "linear-gradient(282deg,rgba(27, 20, 73, 1) 0%, rgba(148, 32, 104, 1) 69%, rgba(255, 42, 131, 1) 99%)",
      }}
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-sm sm:text-sm lg:text-2xl xl:text-2xl font-bold text-white mb-2 sm:mb-6">
            Visit Our Locations
          </h1>
          <p className="text-white/90 text-sm md:text-xl max-w-4xl mx-auto leading-relaxed">
            Whether you're a New Yorker or just visiting, Ess-a-Bagel is a
            must-visit for an authentic bagel experience that lives up to the
            city's culinary reputation.
          </p>
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {/* Midtown Manhattan */}
          <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-white text-2xl font-bold mb-6">
              Midtown Manhattan
            </h2>

            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3 text-white/90">
                <HiLocationMarker className="w-5 h-5 flex-shrink-0" />
                <span className="text-base">
                  831 3rd Avenue, New York, NY 10022
                </span>
              </div>

              <div className="flex items-center justify-center gap-3 text-white/90">
                <HiClock className="w-5 h-5 flex-shrink-0" />
                <span className="text-base">Mon-Sun: 6:00 AM - 4:00 PM</span>
              </div>
            </div>
          </div>

          {/* Upper West Side */}
          <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-white text-2xl font-bold mb-6">
              Upper West Side
            </h2>

            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3 text-white/90">
                <HiLocationMarker className="w-5 h-5 flex-shrink-0" />
                <span className="text-base">
                  2239 Broadway, New York, NY 10024
                </span>
              </div>

              <div className="flex items-center justify-center gap-3 text-white/90">
                <HiClock className="w-5 h-5 flex-shrink-0" />
                <span className="text-base">Mon-Sun: 6:30 AM - 5:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-white text-pink-600 font-semibold py-3 px-8 rounded-xl hover:bg-gray-50 transition-colors w-full sm:w-auto">
            Find Directions
          </button>
          <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-xl hover:bg-white/10 transition-colors w-full sm:w-auto">
            View Full Menu
          </button>
        </div>
      </div>
    </div>
  );
}
