"use client";

import React from "react";

const words = [
  "Brand T-Shirts",
  "Scaling",
  "Trendy",
  "Printing",
  "Custom T-Shirts",
  "Wear Your Brand",
  "Quality Prints",
  "Fast Delivery",
];

const text = words.join(" / ") + " / ";

export default function MarqueeBanner() {
  return (
    <div className="relative overflow-hidden" style={{ margin: "100px 0", transformOrigin: "center" }}>
      {/* First banner — left to right */}
      <div
        className="py-8 mb-2 relative"
        style={{
          background: "linear-gradient(90deg, #e830a8 0%, #f97316 30%, #eab308 60%, #14b8a6 90%)",
        }}
      >
        <div className="flex animate-marquee whitespace-nowrap">
          {[text, text, text, text].map((t, i) => (
            <span key={i} className="text-white font-bold text-xl lg:text-2xl px-2 shrink-0">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Second banner — right to left */}
      <div
        className="py-8 mb-20 overflow-hidden relative"
        style={{
          background: "linear-gradient(90deg, #3b82f6 0%, #6c4fdc 40%, #ec4899 80%, #3b82f6 100%)",
          transform: "rotate(-3deg)"
        }}
      >
        <div className="flex animate-marquee whitespace-nowrap">
          {[text, text, text, text].map((t, i) => (
            <span key={i} className="text-white font-bold text-xl lg:text-2xl px-2 shrink-0">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
