"use client";

import React from "react";
import Link from "next/link";

const services = [
  {
    number: "SERVICES_01",
    title: "Printing Service",
    emoji: "🖨️",
    bg: "linear-gradient(135deg, #1e3a8a, #2563eb)",
  },
  {
    number: "SERVICES_02",
    title: "Business Cards",
    emoji: "💼",
    bg: "linear-gradient(135deg, #0f766e, #0891b2)",
  },
  {
    number: "SERVICES_03",
    title: "T-Shirt Printing",
    emoji: "👕",
    bg: "linear-gradient(135deg, #6b7280, #9ca3af)",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24" style={{ background: "#f0f3f9" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-14">
          <div>
            <p className="section-label">// OUR SERVICES //</p>
            <h2 className="section-heading">
              Print Solutions<br />
              for <span className="highlight">Every Need</span>
            </h2>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-4">
            <p className="text-gray-500 text-base max-w-sm">
              Custom prints, fast delivery, premium quality — tailored to your needs.
            </p>
            <Link href="/services" className="pill-btn pill-btn-gradient shadow-lg shadow-purple-500/30">
              View More
            </Link>
          </div>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <div
              key={i}
              className="relative rounded-3xl overflow-hidden group cursor-pointer shadow-xl"
              style={{ height: "340px" }}
            >
              {/* Background */}
              <div
                className="absolute inset-0 transition-all duration-500 group-hover:scale-105"
                style={{ background: svc.bg }}
              />
              {/* Emoji / visual */}
              <div className="absolute inset-0 flex items-center justify-center opacity-30 text-[10rem]">
                {svc.emoji}
              </div>
              {/* Hover overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-80 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)",
                }}
              />
              {/* Arrow button */}
              <div className="absolute top-5 right-5">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 group-hover:scale-110"
                  style={{ background: "#f97060", color: "#fff" }}
                >
                  ↗
                </div>
              </div>
              {/* Label at bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 px-6 py-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
                style={{ background: "linear-gradient(135deg, #5b5ef4, #14b8a6)" }}
              >
                <p className="text-white/70 text-xs font-bold tracking-widest mb-1">{svc.number}</p>
                <h3 className="text-white text-xl font-bold">{svc.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
