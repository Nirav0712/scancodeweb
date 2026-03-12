"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
// import Newsletter from "./Newsletter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socials: {
    icon: React.ElementType;
    href: string;
    label: string;
    color: string;
  }[] = [
      { icon: FaFacebookF, href: "#", label: "Facebook", color: "hover:bg-[#1877f2]" },
      { icon: FaTwitter, href: "#", label: "Twitter", color: "hover:bg-[#1da1f2]" },
      { icon: FaInstagram, href: "#", label: "Instagram", color: "hover:bg-[#e4405f]" },
      { icon: FaPinterestP, href: "#", label: "Pinterest", color: "hover:bg-[#bd081c]" },
    ];

  // Updated footer columns based on the image
  const footerColumns: { title: string; links: string[] }[] = [
    {
      title: "Printing & Scanning Solutions",
      links: [
        "Barcode Label Printer",
        "Print Engine",
        "Barcode Scanners",
        "Mobile Computers & Tablets",
      ],
    },
    {
      title: "Labels",
      links: [
        "Plain Labels",
        "Pre Printed Labels",
        "Shrink Sleeves",
        "In-Mold Labels",
        "Thermal Transfer Ribbons",
      ],
    },
  ];

  const payments = ["Visa", "Mastercard", "PayPal", "Apple Pay"];

  return (
    <>
      {/* mt-48 */}
      <footer className="relative pt-90 ">

        {/* <div className="bg-white"></div> */}
        {/* Newsletter */}
        <div className="max-w-7xl mx-auto px-4 relative z-10 -mb-50">
          {/* Decorative background elements */}
          {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-linear-to-r from-[#1e3a5f]/10 to-[#345f8c]/10 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-linear-to-r from-[#345f8c]/10 to-[#1e3a5f]/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
          </div> */}

          {/* Main Card - Light Theme */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-[0_-10px_25px_rgba(243_244_246/0.5)] shadow-gray-500 border border-gray-100/50 overflow-hidden relative ">
            {/* <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #1e3a5f 1px, transparent 0)`,
              backgroundSize: '32px 32px'
            }}></div> */}

            {/* <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-[#1e3a5f]/20 via-[#345f8c]/20 to-[#1e3a5f]/20 p-0.5 -m-0.5"></div> */}
            <div className="relative bg-white rounded-3xl p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">

                <div className="max-w-xl text-center lg:text-left">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-linear-to-r from-[#1e3a5f]/10 to-[#345f8c]/10 rounded-full text-sm mb-6 border border-[#1e3a5f]/20">
                    <span className="w-2 h-2 rounded-full bg-linear-to-r from-[#1e3a5f] to-[#345f8c] animate-pulse"></span>
                    <span className="text-[#1e3a5f] font-medium">📬 Newsletter</span>
                  </span>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                    <span className="bg-linear-to-r from-[#1e3a5f] to-[#345f8c] bg-clip-text text-transparent">
                      Join Now for
                    </span>
                    <br />
                    <span className="text-gray-800">Special Deals</span>
                  </h2>

                  <p className="text-gray-600 mb-8 text-lg max-w-lg mx-auto lg:mx-0">
                    Get early access to exclusive deals, offers, and updates delivered straight to your inbox.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center gap-4 max-w-lg mx-auto lg:mx-0">
                    <div className="relative w-full group">
                      <div className="absolute -inset-0.5 bg-linear-to-r from-[#1e3a5f] to-[#345f8c] rounded-full opacity-30 group-hover:opacity-50 blur transition duration-500"></div>
                      <div className="relative">
                        <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-[#1e3a5f] transition-colors duration-300" />
                        <input
                          type="email"
                          placeholder="Enter your email address"
                          className="w-full px-12 py-4 rounded-full border-2 border-gray-200 text-gray-800 outline-none focus:border-[#1e3a5f] focus:ring-4 focus:ring-[#1e3a5f]/20 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                        />
                      </div>
                    </div>

                    <button className="relative group w-full sm:w-auto">
                      <div className="absolute -inset-0.5 bg-linear-to-r from-[#1e3a5f] to-[#345f8c] rounded-full opacity-75 group-hover:opacity-100 blur group-hover:blur-md transition duration-500"></div>
                      <div className="relative px-8 py-4 bg-linear-to-r from-[#1e3a5f] to-[#345f8c] rounded-full font-semibold text-white hover:shadow-xl hover:shadow-[#1e3a5f]/25 transition-all duration-300 transform group-hover:scale-105 whitespace-nowrap">
                        Subscribe Now
                      </div>
                    </button>
                  </div>

                  <div className="flex items-center justify-center lg:justify-start gap-6 mt-6">
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-400 text-xl">★</span>
                      <span className="text-yellow-400 text-xl">★</span>
                      <span className="text-yellow-400 text-xl">★</span>
                      <span className="text-yellow-400 text-xl">★</span>
                      <span className="text-yellow-400 text-xl">★</span>
                      <span className="text-gray-600 text-sm ml-2">4.9/5</span>
                    </div>
                    <span className="text-gray-400 text-sm">|</span>
                    <span className="text-gray-600 text-sm">10k+ subscribers</span>
                  </div>
                </div>

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

          </div>

          <style jsx>{`
                @keyframes float {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-15px); }
                }
                
                @keyframes float-delayed {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-20px); }
                }
                
                @keyframes pulse-slow {
                  0%, 100% { opacity: 0.3; }
                  50% { opacity: 0.6; }
                }
                
                .animate-float {
                  animation: float 4s ease-in-out infinite;
                }
                
                .animate-float-delayed {
                  animation: float-delayed 4.5s ease-in-out infinite;
                }
                
                .animate-pulse-slow {
                  animation: pulse-slow 4s ease-in-out infinite;
                }
                
                .delay-1000 {
                  animation-delay: 1s;
                }
              `}</style>
        </div>

        <div>
          <img className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat top-30 h-auto w-full" src="/images/footer/Frame1.png" alt="Frame1.png" />
        </div>

        <div className="relative pt-40 pb-8 overflow-hidden text-white-800">



          {/* Main Footer */}
          <div className="max-w-7xl mx-auto px-4 mt-20 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Logo and Company Description - Updated to match image */}
              <div className="lg:col-span-1">
                <Image
                  src="/images/scancode-logo.webp"
                  alt="SCANCODE"
                  width={160}
                  height={45}
                  className="mb-6 brightness-0 invert"
                />

                <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                  Delivering product labels and innovative auto identification solutions with unmatched quality and expertise since 2016.
                </p>

                <div className="flex gap-3">
                  {socials.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <Link
                        key={index}
                        href={social.href}
                        aria-label={social.label}
                        className="w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center 
                    text-gray-300 hover:text-white hover:scale-110 transition-all duration-300 relative overflow-hidden group border border-gray-700"
                      >
                        <span
                          className={`absolute inset-0 ${social.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                        ></span>
                        <Icon className="relative z-10 text-sm" />
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Footer Columns - Updated with new content */}
              {footerColumns.map((column, index) => (
                <div key={index} className="lg:col-span-1">
                  <h3 className="font-semibold text-lg mb-6 relative inline-block text-white">
                    {column.title}
                    <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-linear-to-r from-[#4f8bc9] to-[#6aa6e0]"></span>
                  </h3>

                  <ul className="space-y-3">
                    {column.links.map((link, i) => (
                      <li key={i}>
                        <Link
                          href="#"
                          className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 text-sm"
                        >
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Contact - Updated with new contact info from image */}
              <div className="lg:col-span-1">
                <h3 className="font-semibold text-lg mb-6 relative inline-block text-white">
                  Get in Touch
                  <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-linear-to-r from-[#4f8bc9] to-[#6aa6e0]"></span>
                </h3>

                <div className="space-y-4">
                  <div className="flex gap-3">
                    <FaPhone className="text-[#6aa6e0] shrink-00" />
                    <a href="tel:+919427061888" className="text-gray-300 hover:text-white transition-colors duration-200">
                      +91 9427061888
                    </a>
                  </div>

                  <div className="flex gap-3">
                    <FaEnvelope className="text-[#6aa6e0] shrink-0" />
                    <a href="mailto:contact@scancodeautoid.com" className="text-gray-300 hover:text-white transition-colors duration-200 break-all">
                      contact@scancodeautoid.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom */}
            <div className="mt-16 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © {currentYear} SCANCODE. All rights reserved.
              </p>

              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-400">We accept:</span>
                <div className="flex gap-2">
                  {payments.map((pay, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-800/70 backdrop-blur-sm border border-gray-700 rounded-full text-xs text-gray-300"
                    >
                      {pay}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-6 text-sm">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Terms
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Privacy
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>

      </footer>
    </>
  );
}