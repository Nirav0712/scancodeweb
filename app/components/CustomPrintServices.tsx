"use client";

import React from "react";
import Link from "next/link";

export default function CustomPrintServices() {
  const services = [
    "T-Shirt Printing", "Hoodie Printing", "Tote Bag Printing",
    "Business Card Printing", "Flyer & Brochure Printing", "Packaging & Labels",
  ];

  return (
    <section className="py-24" style={{ background: "#f0f3f9" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — content */}
          <div>
            <p className="section-label">// WHAT WE DO //</p>
            <h2 className="section-heading mb-6">
              Custom Print Services{" "}
              <span className="highlight">We Offer</span>
            </h2>
            <p className="text-gray-500 text-base mb-8 leading-relaxed">
              From design to delivery, we offer a comprehensive suite of custom printing services to meet every business and personal need.
            </p>
            <ul className="space-y-3 mb-10">
              {services.map((svc, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                    style={{ background: "#f97060" }}
                  >
                    ✓
                  </span>
                  {svc}
                </li>
              ))}
            </ul>
            <Link href="/services" className="pill-btn pill-btn-dark">
              Learn More
            </Link>
          </div>

          {/* Right — image with shape overlay */}
          <div className="relative">
            <div
              className="absolute -top-8 -left-8 w-40 h-40 z-10 rounded-xl"
              style={{ background: "#2563eb" }}
            />
            <div
              className="relative z-20 rounded-2xl overflow-hidden shadow-2xl"
              style={{ height: "400px" }}
            >
              <div className="w-full h-full bg-linear-to-br from-gray-700 via-gray-800 to-gray-900 flex items-center justify-center text-8xl">
                🏭
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
