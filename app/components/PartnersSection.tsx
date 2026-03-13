"use client";

import React from "react";

const partners = [
  { name: "Lattice", emoji: "🔷" },
  { name: "Clearbit", emoji: "🔵" },
  { name: "Airtable", emoji: "🟠" },
  { name: "Monday", emoji: "🔴" },
  { name: "Dropbox", emoji: "📦" },
  { name: "Notion", emoji: "⬛" },
];

export default function PartnersSection() {
  return (
    <section className="py-20" style={{ background: "#f7f9fc" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="section-label">// OUR PARTNERS //</p>
          <h2 className="section-heading">
            Trusted by 250+ Global IP Firms{" "}
            <br className="hidden lg:block" />
            <span className="highlight">and Legal Teams</span>
          </h2>
        </div>

        {/* Partners row */}
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-14">
          {partners.map((p, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-md cursor-pointer grayscale hover:grayscale-0"
              style={{ background: "#fff", border: "1px solid #e5e7eb" }}
            >
              <span className="text-3xl">{p.emoji}</span>
              <span className="font-bold text-gray-700 text-lg">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
