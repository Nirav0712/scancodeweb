"use client";

import React, { useState } from "react";

const featureCards = [
  {
    title: "High-Quality Printing",
    desc: "We use advanced printing technology to deliver sharp, vibrant, and durable results on every product.",
    emoji: "🖨️",
    rotate: "-25deg",
    x: "-200px",
    y: "40px",
  },
  {
    title: "Fast & Reliable Delivery",
    desc: "Enjoy on-time shipping with real-time tracking and reliable packaging to ensure safe delivery.",
    emoji: "🚚",
    rotate: "-13deg",
    x: "-90px",
    y: "10px",
  },
  {
    title: "Bulk Order Support",
    desc: "Whether you're a business or an event planner, we handle bulk orders efficiently and cost-effectively.",
    emoji: "📦",
    rotate: "0deg",
    x: "0px",
    y: "0px",
  },
  {
    title: "Secure Online Payments",
    desc: "We offer multiple secure payment methods to keep your transactions safe and hassle-free.",
    emoji: "🔒",
    rotate: "13deg",
    x: "90px",
    y: "10px",
  },
  {
    title: "Easy Customization",
    desc: "Upload your design, choose your product, and customize it exactly how you want with our intuitive tools.",
    emoji: "🎨",
    rotate: "25deg",
    x: "200px",
    y: "40px",
  },
];

export default function FeaturesFan() {
  const [activeIdx, setActiveIdx] = useState(2);

  return (
    <section className="relative py-24 overflow-hidden" style={{ background: "#eef1f8" }}>
      {/* Decorative blob */}
      <div
        className="absolute top-8 right-12 w-20 h-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 30% 30%, #ec4899 0%, #f97316 60%, #eab308 100%)",
          borderRadius: "60% 40% 50% 50% / 40% 60% 40% 60%",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="section-label">// OUR FEATURES //</p>
          <h2 className="section-heading">
            Top-Notch Tools For{" "}
            <span className="highlight">Custom Prints</span>
          </h2>
        </div>

        {/* Fan layout — Desktop */}
        <div className="hidden lg:block relative" style={{ height: "420px" }}>
          <div
            className="absolute left-1/2 bottom-0"
            style={{ transform: "translateX(-50%)" }}
          >
            {featureCards.map((card, i) => (
              <div
                key={i}
                className="absolute cursor-pointer transition-all duration-500"
                style={{
                  width: "200px",
                  bottom: "0",
                  left: "-100px",
                  transform: `rotate(${card.rotate}) translateX(${card.x}) translateY(${card.y})`,
                  transformOrigin: "bottom center",
                  zIndex: activeIdx === i ? 10 : i,
                }}
                onClick={() => setActiveIdx(i)}
              >
                <div
                  className="rounded-2xl p-5 transition-all duration-300 flex flex-col items-start gap-3"
                  style={{
                    background: activeIdx === i ? "#fff" : "#f5f5f5",
                    boxShadow: activeIdx === i
                      ? "0 20px 60px rgba(0,0,0,0.15)"
                      : "0 4px 20px rgba(0,0,0,0.06)",
                    border: activeIdx === i ? "2px solid #f97060" : "1px solid #e5e7eb",
                    minHeight: "220px",
                  }}
                >
                  <div className="text-4xl">{card.emoji}</div>
                  <h4 className="font-bold text-gray-900 text-base leading-tight">{card.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom semicircle indicator */}
          <div
            className="absolute -bottom-25 left-1/2 -translate-x-1/2 flex flex-col items-center justify-end pb-5"
            style={{
              width: "260px",
              height: "130px",
              borderRadius: "130px 130px 0 0",
              background: "#f97060",
              color: "#fff",
            }}
          >
            <p className="font-bold text-sm text-center px-4">
              {featureCards[activeIdx].title}
            </p>
            <div className="flex gap-1.5 mt-3">
              {featureCards.map((_, i) => (
                <div
                  key={i}
                  className="h-1.5 rounded-full cursor-pointer transition-all"
                  style={{
                    width: activeIdx === i ? "24px" : "8px",
                    background: activeIdx === i ? "#fff" : "rgba(255,255,255,0.4)",
                  }}
                  onClick={() => setActiveIdx(i)}
                />
              ))}
            </div>
          </div>

        </div>

        {/* Mobile — simple grid */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-5">
          {featureCards.map((card, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 bg-white shadow-md flex flex-col gap-3"
              style={{ border: "1px solid #e5e7eb" }}
            >
              <div className="text-3xl">{card.emoji}</div>
              <h4 className="font-bold text-gray-900">{card.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
