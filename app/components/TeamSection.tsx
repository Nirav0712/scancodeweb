"use client";

import React from "react";

const team = [
  { name: "Alex Johnson", role: "Head of Printing", emoji: "👨‍🔧", bg: "linear-gradient(135deg, #f97316, #ef4444)" },
  { name: "Maria Santos", role: "Design Lead", emoji: "👩‍🎨", bg: "linear-gradient(135deg, #8b5cf6, #ec4899)" },
  { name: "David Kim", role: "Production Manager", emoji: "🧔", bg: "linear-gradient(135deg, #3b82f6, #06b6d4)" },
  { name: "Sarah Miller", role: "Quality Control", emoji: "👩‍🔬", bg: "linear-gradient(135deg, #f59e0b, #f97316)" },
];

export default function TeamSection() {
  return (
    <section className="py-24" style={{ background: "#f0f3f9" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <p className="section-label">// MEET OUR STAFF //</p>
          <h2 className="section-heading">
            Our Dedicated Printing{" "}
            <span className="highlight">Professionals</span>
          </h2>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <div key={i} className="flex flex-col items-center gap-4 group cursor-pointer">
              {/* Arched photo frame */}
              <div
                className="w-44 h-52 relative overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105"
                style={{
                  borderRadius: "9999px 9999px 0 0",
                  background: member.bg,
                }}
              >
                <div className="w-full h-full flex items-center justify-center text-8xl">
                  {member.emoji}
                </div>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-gray-900 text-lg">{member.name}</h4>
                <p className="text-gray-500 text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
