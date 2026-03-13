"use client";

import React from "react";

const features = [
  {
    icon: "🖨️",
    title: "Premium Print Quality",
    desc: "We use advanced printing technology to ensure vibrant colors, sharp details.",
  },
  {
    icon: "🚚",
    title: "Fast & Reliable Delivery",
    desc: "Your orders are processed quickly and delivered on time, deadline or event.",
  },
  {
    icon: "🔧",
    title: "Easy Customization",
    desc: "Upload your design, choose your product, and customize it exactly how you want.",
  },
  {
    icon: "🛡️",
    title: "Trusted by Hundreds",
    desc: "From individuals to businesses, our satisfied clients trust us for consistent quality.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0f0f1a 0%, #1a1040 40%, #0f172a 70%, #0f0f1a 100%)",
      }}
    >
      {/* Glowing orb center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none animate-pulse-glow"
        style={{
          background: "radial-gradient(circle, rgba(236,72,153,0.35) 0%, rgba(139,92,246,0.25) 40%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-3">// WHY CHOOSE US //</p>
          <h2 className="text-3xl lg:text-5xl font-black text-white">
            Why Clients Love Working <br />
            <span style={{ color: "#f97060" }} className="underline underline-offset-8 decoration-2">With Us</span>
          </h2>
        </div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feat, i) => (
            <div
              key={i}
              className="rounded-2xl p-7 flex flex-col gap-4 group hover:scale-[1.02] transition-all duration-300 cursor-default"
              style={{
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
              }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl"
                style={{ background: "rgba(255,255,255,0.1)" }}
              >
                {feat.icon}
              </div>
              <h3 className="text-white font-bold text-xl">{feat.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
