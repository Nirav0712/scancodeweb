"use client";

import React from "react";
import Image from "next/image";
import { FaEnvelope } from "react-icons/fa";

export default function Newsletter() {
  return (
    <section className="relative -mb-70 bg-white overflow-hidden">

      {/* Decorative Blur Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-linear-to-r from-[#1e3a5f]/10 to-[#345f8c]/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-linear-to-r from-[#345f8c]/10 to-[#1e3a5f]/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden relative">

          {/* Pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, #1e3a5f 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          ></div>

          <div className="relative p-8 lg:p-12">

            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

              {/* LEFT CONTENT */}
              <div className="max-w-xl text-center lg:text-left">

                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-linear-to-r from-[#1e3a5f]/10 to-[#345f8c]/10 rounded-full text-sm mb-6 border border-[#1e3a5f]/20">
                  <span className="w-2 h-2 rounded-full bg-linear-to-r from-[#1e3a5f] to-[#345f8c] animate-pulse"></span>
                  <span className="text-[#1e3a5f] font-medium">
                    📬 Newsletter
                  </span>
                </span>

                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  <span className="bg-linear-to-r from-[#1e3a5f] to-[#345f8c] bg-clip-text text-transparent">
                    Join Now for
                  </span>
                  <br />
                  <span className="text-gray-800">Special Deals</span>
                </h2>

                <p className="text-gray-600 mb-8 text-lg">
                  Get early access to exclusive deals and updates delivered to
                  your inbox.
                </p>

                {/* EMAIL INPUT */}
                <div className="flex flex-col sm:flex-row items-center gap-4">

                  <div className="relative w-full group">

                    <div className="absolute -inset-0.5 bg-linear-to-r from-[#1e3a5f] to-[#345f8c] rounded-full opacity-30 blur group-hover:opacity-50 transition"></div>

                    <div className="relative">

                      <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                      <input
                        type="email"
                        placeholder="Enter your email address"
                        className="w-full px-12 py-4 rounded-full border border-gray-200 text-gray-800 outline-none focus:ring-2 focus:ring-[#1e3a5f]/30"
                      />

                    </div>

                  </div>

                  <button className="relative group w-full sm:w-auto">

                    <div className="absolute -inset-0.5 bg-linear-to-r from-[#1e3a5f] to-[#345f8c] rounded-full opacity-75 blur group-hover:opacity-100"></div>

                    <div className="relative px-8 py-4 bg-linear-to-r from-[#1e3a5f] to-[#345f8c] text-white font-semibold rounded-full hover:scale-105 transition">
                      Subscribe Now
                    </div>

                  </button>

                </div>

                {/* REVIEWS */}
                <div className="flex items-center justify-center lg:justify-start gap-6 mt-6">

                  <div className="flex items-center gap-1 text-yellow-400 text-xl">
                    ★★★★★
                    <span className="text-gray-600 text-sm ml-2">4.9/5</span>
                  </div>

                  <span className="text-gray-400 text-sm">|</span>

                  <span className="text-gray-600 text-sm">
                    10k+ subscribers
                  </span>

                </div>

              </div>

              {/* RIGHT IMAGE */}
              <div className="relative w-72 h-72 hidden lg:block">

                <div className="absolute inset-0 bg-linear-to-r from-[#1e3a5f]/30 to-[#345f8c]/30 rounded-full blur-3xl animate-pulse-slow"></div>

                <div className="relative w-full h-full animate-float">

                  <Image
                    src="/girl.png"
                    alt="Newsletter"
                    fill
                    className="object-contain drop-shadow-2xl"
                  />

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>

    </section>
  );
}