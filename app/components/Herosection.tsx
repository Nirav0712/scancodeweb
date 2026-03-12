"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCheckCircle, FaGlobe, FaChartLine } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden text-center items-center ">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/2 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div>
        <img src="/images/herosection/Frame2.png" alt="Frame2.png" className="absolute inset-0 bg-cover bg-center bg-no-repeat h-300 w-full" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 py-16 lg:py-24">

          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full px-4 py-2 mb-6 border border-blue-100">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse"></span>
              <span className="text-sm font-medium text-gray-700">✨ Premium Printing Solutions</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Elevate Your Brand
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                With Every Print
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Tailored printing solutions designed to match your unique vision and creative needs.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <Link
                href="#"
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-blue-600/25 transition-all duration-300 transform hover:scale-105"
              >
                Shop Now
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gray-100 text-gray-700 font-semibold rounded-full hover:bg-gray-200 transition-all duration-300"
              >
                How it Works
                <span className="text-lg">→</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-8">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-gray-900">1.5k+</div>
                <div className="text-sm text-gray-500">Orders shipped in 2025</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image/Illustration */}
          <div className="flex-1 relative">
            <div className="relative w-full h-[500px]">
              {/* Main image container - replace with your actual image */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-3xl opacity-10"></div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse animation-delay-2000"></div>

              {/* You can add your actual image here */}
              {/* <Image
                src="/your-hero-image.png"
                alt="Printing Solutions"
                fill
                className="object-contain"
                priority
              /> */}

              {/* Floating feature cards */}
              <div className="absolute -left-12 top-20 bg-white rounded-2xl shadow-xl p-4 max-w-[220px] animate-float border border-gray-100">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaChartLine className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">High Profit Margin</h4>
                    <p className="text-xs text-gray-500 mt-1">Effective optimization of cost & quality that makes you highly profitable</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-12 bottom-20 bg-white rounded-2xl shadow-xl p-4 max-w-[220px] animate-float-delayed border border-gray-100">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaGlobe className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Global Shipping</h4>
                    <p className="text-xs text-gray-500 mt-1">Reaching global market easily with our fast and flexible shipping solution</p>
                  </div>
                </div>
              </div>

              {/* Stats card */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500" />
                  <span className="text-sm font-medium text-gray-700">Premium Quality</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom feature row for mobile/tablet */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-16 lg:hidden">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <FaChartLine className="text-green-600 text-xl" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">High Profit Margin</h4>
                <p className="text-sm text-gray-500 mt-1">Effective optimization of cost & quality that makes you highly profitable</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <FaGlobe className="text-blue-600 text-xl" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Global Shipping</h4>
                <p className="text-sm text-gray-500 mt-1">Reaching global market easily with our fast and flexible shipping solution</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-white rounded-3xl p-8 lg:p-12 w-200 h-150">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">

          <div className="relative w-72 h-72 lg:w-80 lg:h-80 hidden lg:block group">
            <div className="absolute inset-0 bg-linear-to-r from-[#1e3a5f]/30 to-[#345f8c]/30 rounded-full blur-3xl animate-pulse-slow"></div>

            <div className="relative w-full h-full animate-float">
              <div className="absolute -inset-4 bg-linear-to-r from-[#1e3a5f]/20 to-[#345f8c]/20 rounded-full blur-2xl"></div>
              <div className="relative w-full h-full">
                <Image
                  src="/girl.png"
                  alt="Happy customer with prints"
                  fill
                  className="object-contain drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
            </div>

            <div className="absolute -left-12 top-12 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-xl animate-float border border-[#1e3a5f]/10">
              <div className="flex items-center gap-2">
                <span className="text-2xl">✨</span>
                <div>
                  <span className="text-[#1e3a5f] font-bold block">30% OFF</span>
                  <span className="text-xs text-gray-500">First order</span>
                </div>
              </div>
            </div>

            <div className="absolute -right-12 bottom-12 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-xl animate-float-delayed border border-[#345f8c]/10">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🎨</span>
                <div>
                  <span className="text-[#345f8c] font-bold block">Free Shipping</span>
                  <span className="text-xs text-gray-500">On orders $50+</span>
                </div>
              </div>
            </div>

            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-gray-200">
              <span className="text-[#1e3a5f] font-semibold">Limited time offer</span>
            </div>
          </div>

        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 4.5s ease-in-out infinite;
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #e5e7eb 1px, transparent 1px),
            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
          background-size: 24px 24px;
        }
      `}</style>
    </section>
  );
}