"use client";

import React, { useState } from "react";

const testimonials = [
  {
    rating: 5,
    quote: "PrintNest delivered our branded t-shirts with incredible quality. The colors were vibrant and the print lasted even after multiple washes. Highly recommend!",
    name: "Emma Thompson",
    role: "Marketing Manager, BrandCo",
    emoji: "👩‍💼",
    bg: "#f97316",
  },
  {
    rating: 5,
    quote: "The business cards we ordered exceeded our expectations. Fast turnaround, excellent print quality, and the team was super helpful throughout the process.",
    name: "James Rodriguez",
    role: "CEO, Startup Hub",
    emoji: "🧑‍💼",
    bg: "#3b82f6",
  },
  {
    rating: 5,
    quote: "We've been using PrintNest for all our event printing needs. From flyers to banners, everything is always delivered on time and looks amazing.",
    name: "Sarah Chen",
    role: "Event Director, EventPro",
    emoji: "👩‍🎤",
    bg: "#8b5cf6",
  },
];

export default function TestimonialsSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = testimonials[activeIdx];

  return (
    <section className="py-24" style={{ background: "#f7f9fc" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-label">// TESTIMONIALS //</p>
          <h2 className="section-heading">
            What Our Clients <span className="highlight">Say</span>
          </h2>
        </div>

        {/* Review Card */}
        <div
          className="rounded-3xl p-8 lg:p-12 shadow-xl relative overflow-hidden transition-all duration-500"
          style={{ background: "#fff", border: "1px solid #e5e7eb" }}
        >
          {/* Stars */}
          <div className="flex gap-1 mb-6">
            {Array.from({ length: current.rating }).map((_, i) => (
              <span key={i} className="text-yellow-400 text-xl">★</span>
            ))}
          </div>

          {/* Quote */}
          <p className="text-gray-700 text-lg lg:text-xl leading-relaxed mb-8 italic">
            &ldquo;{current.quote}&rdquo;
          </p>

          {/* Author */}
          <div className="flex items-center gap-4">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center text-2xl flex-shrink-0"
              style={{ background: current.bg }}
            >
              {current.emoji}
            </div>
            <div>
              <p className="font-bold text-gray-900">{current.name}</p>
              <p className="text-gray-500 text-sm">{current.role}</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => setActiveIdx((activeIdx - 1 + testimonials.length) % testimonials.length)}
            className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-900 transition-colors"
          >
            ←
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: activeIdx === i ? "24px" : "8px",
                  background: activeIdx === i ? "#f97060" : "#d1d5db",
                }}
              />
            ))}
          </div>
          <button
            onClick={() => setActiveIdx((activeIdx + 1) % testimonials.length)}
            className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-900 transition-colors"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
