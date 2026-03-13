"use client";

import React from "react";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="relative py-24 overflow-hidden" style={{ background: "#f0f3f9" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — Images collage */}
          <div className="relative">
            {/* Dot pattern background */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: "radial-gradient(circle, #6c4fdc 1.5px, transparent 1.5px)",
                backgroundSize: "28px 28px",
              }}
            />
            {/* Main image */}
            <div
              className="relative z-10 w-64 h-80 lg:w-72 lg:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
              style={{ marginLeft: "0" }}
            >
              <div className="w-full h-full bg-linear-to-br from-gray-700 to-gray-900 flex items-center justify-center text-8xl">
                🖨️
              </div>
            </div>
            {/* Overlapping second image */}
            <div
              className="absolute bottom-0 right-0 z-20 w-48 h-52 lg:w-56 lg:h-60 rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
            >
              <div className="w-full h-full bg-linear-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-7xl">
                🎨
              </div>
            </div>
            {/* Years of experience badge */}
            <div
              className="absolute -top-6 -right-4 lg:right-8 z-30 w-32 h-32 lg:w-36 lg:h-36 rounded-2xl flex flex-col items-center justify-center shadow-2xl"
              style={{ background: "#121212", color: "#fff" }}
            >
              <span className="text-4xl lg:text-5xl font-black" style={{ color: "#fff" }}>14+</span>
              <span className="text-xs font-bold text-center leading-tight mt-1 text-gray-400 uppercase tracking-widest">
                Years of<br />Experience
              </span>
            </div>
          </div>

          {/* RIGHT — Content */}
          <div>
            <p className="section-label">// ABOUT PRINTING //</p>
            <h2 className="section-heading mb-6">
              Quality Prints Backed by{" "}
              <span className="highlight">Experience</span>
            </h2>
            <p className="text-gray-600 text-base mb-8 leading-relaxed">
              We deliver reliable, high-quality print solutions backed by years of industry
              expertise and customer satisfaction.
            </p>

            {/* Feature list */}
            <div className="space-y-6 mb-10">
              {[
                {
                  icon: "🛍️",
                  title: "Vast Product Range",
                  desc: "Explore a wide variety of print solutions, flyers, t-shirts, and packaging.",
                },
                {
                  icon: "🤝",
                  title: "Trusted by Businesses",
                  desc: "From individuals to businesses, our satisfied clients trust us for consistent quality.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 text-2xl"
                    style={{ background: "#fef3f2", border: "1px solid #fecaca" }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/shop" className="pill-btn pill-btn-gradient text-base shadow-lg shadow-purple-500/30">
              See Our Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
