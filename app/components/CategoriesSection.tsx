"use client";

import React from "react";
import Link from "next/link";

const categories = [
  {
    label: "Hoodies",
    emoji: "🧥",
    bg: "#1a1a2e",
    color: "#ec4899",
  },
  {
    label: "Tote Bags",
    emoji: "👜",
    bg: "#0f766e",
    color: "#34d399",
  },
  {
    label: "T-Shirts",
    emoji: "👕",
    bg: "#84cc16",
    color: "#fff",
  },
  {
    label: "Business Cards",
    emoji: "💳",
    bg: "#f43f5e",
    color: "#fff",
  },
  {
    label: "Branded Items",
    emoji: "🎁",
    bg: "#818cf8",
    color: "#fff",
  },
];

export default function CategoriesSection() {
  return (
    <section
      className="relative pt-48 pb-24"
      style={{ background: "#f0f3f9" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="section-label">// TOP CATEGORIES //</p>
          <h2 className="section-heading">
            Explore Our Print{" "}
            <span className="highlight">Categories</span>
          </h2>
        </div>

        {/* Category circles */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-12 mb-14">
          {categories.map((cat, i) => (
            <Link
              href="/shop"
              key={i}
              className="flex flex-col items-center gap-3 group cursor-pointer"
            >
              <div
                className="w-32 h-32 lg:w-40 lg:h-40 rounded-full flex items-center justify-center shadow-lg
                  transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl"
                style={{ background: cat.bg }}
              >
                <span className="text-6xl lg:text-7xl">{cat.emoji}</span>
              </div>
              <span className="text-gray-800 font-semibold text-base tracking-wide">
                {cat.label}
              </span>
            </Link>
          ))}
        </div>

        {/* View More button */}
        <div className="text-center">
          <Link
            href="/shop"
            className="pill-btn pill-btn-gradient text-lg shadow-lg shadow-purple-500/30"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
}
