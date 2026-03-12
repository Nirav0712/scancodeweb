import React from "react";


export default function Footer() {
  return (
    <>

<div className="bg-gradient-to-b from-[#0b0e14] to-[#111827] pt-40 pb-16 text-white relative">

      {/* Newsletter Card */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-r from-[#ff8a7a] via-[#a855f7] to-[#3b82f6] rounded-3xl p-12 flex flex-col md:flex-row items-center justify-between overflow-hidden">

          {/* Left Content */}
          <div className="max-w-xl">
            <h2 className="text-4xl font-semibold mb-4">
              Join Now for Special Deals <br /> & Updates
            </h2>

            <p className="text-white/80 mb-6">
              Get early access to exclusive deals, offers, and updates.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-4 rounded-full w-72 text-black outline-none"
              />

              <button className="bg-orange-400 hover:bg-orange-500 px-8 py-4 rounded-full font-semibold transition">
                Subscribe
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="mt-8 md:mt-0">
            <img
              src="/girl.png"
              alt="model"
              className="w-72 object-contain"
            />
          </div>

        </div>
      </div>

      {/* Footer Links */}
      <div className="max-w-7xl mx-auto px-6 mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">

        {/* Logo Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">PrintNest</h2>

          <p className="text-gray-400 mb-6">
            Stay connected for updates, exclusive deals, helpful tips,
            & printing inspiration.
          </p>

          <div className="flex gap-4">
            <div className="w-10 h-10 border border-gray-500 rounded-full flex items-center justify-center">
              f
            </div>

            <div className="w-10 h-10 border border-gray-500 rounded-full flex items-center justify-center">
              t
            </div>

            <div className="w-10 h-10 border border-gray-500 rounded-full flex items-center justify-center">
              i
            </div>

            <div className="w-10 h-10 border border-gray-500 rounded-full flex items-center justify-center">
              p
            </div>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-semibold text-lg mb-6">Useful Links</h3>

          <ul className="space-y-3 text-gray-400">
            <li>About Us</li>
            <li>Our Blog</li>
            <li>Start a Return</li>
            <li>Our Products</li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="font-semibold text-lg mb-6">Information</h3>

          <ul className="space-y-3 text-gray-400">
            <li>Our Services</li>
            <li>Pricing Plan</li>
            <li>Faq</li>
            <li>Our Products</li>
          </ul>
        </div>

        {/* Other Pages */}
        <div>
          <h3 className="font-semibold text-lg mb-6">Other Pages</h3>

          <ul className="space-y-3 text-gray-400">
            <li>My Account</li>
            <li>Shipping</li>
            <li>Contact & Support</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-6">Keep In Touch</h3>

          <p className="text-gray-400 mb-4">
            2118 Thornridge Cir. <br />
            Syracuse, Connecticut 35624
          </p>

          <p className="text-gray-400 mb-2">
            tranthuy.nute@gmail.com
          </p>

          <p className="text-xl font-semibold">
            (252) 555-0126
          </p>
        </div>

      </div>

    </div>


    
    </>
  );
  
}

