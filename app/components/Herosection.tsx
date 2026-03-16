"use client";

import React from "react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        // background: "linear-gradient(135deg, #2c3e8c 0%, #3b5fe2 25%, #5a40c8 55%, #7c3aed 80%, #2c3e8c 100%)",
        // minHeight: "100vh",
        backgroundImage: "url('/images/herosection/Frame1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "110vh",
      }}
    >
      {/* Decorative floating shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Triangle / arrow shape top-left */}
        <div
          className="absolute top-32 left-16 w-20 h-20 opacity-60"
          style={{
            background: "linear-gradient(135deg, #a78bfa, #06b6d4)",
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          }}
        />
        {/* Teal circle top-center-left */}
        <div
          className="absolute top-64 left-1/4 w-14 h-14 rounded-full opacity-70 animate-float"
          style={{ background: "linear-gradient(135deg, #06b6d4, #3b82f6)", border: "4px solid transparent", outline: "4px solid rgba(6,182,212,0.4)" }}
        />
        {/* Cap image top-right decorative */}
        <div
          className="absolute -top-6 right-12 w-28 h-28 rounded-2xl opacity-70 overflow-hidden animate-float-delayed"
          style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)" }}
        >
          <div className="w-full h-full flex items-center justify-center text-6xl">🧢</div>
        </div>
        {/* Small orange circle mid-right */}
        <div
          className="absolute top-1/2 right-24 w-10 h-10 rounded-full opacity-80"
          style={{ background: "linear-gradient(135deg, #f97316, #ec4899)", border: "3px solid rgba(249,115,22,0.5)" }}
        />
        {/* Teal ring - hero right side */}
        <div
          className="absolute top-72 left-[52%] w-12 h-12 rounded-full opacity-50"
          style={{ border: "4px solid #06b6d4" }}
        />
        {/* Large soft circle glow behind model */}
        <div
          className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #a78bfa 0%, transparent 70%)" }}
        />
        {/* Coral ball far right */}
        <div
          className="absolute bottom-24 right-6 w-12 h-12 rounded-full opacity-90"
          style={{ background: "#f97060" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 pb-32 lg:pb-36" style={{ paddingTop: '160px' }}>

          {/* LEFT CONTENT */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-5">
              Elevate Your Brand<br />With Every Print
            </h1>

            <p className="text-lg text-blue-100 mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed">
              Tailored printing solutions designed to match your unique vision and creative needs.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <Link
                href="/shop"
                className="pill-btn pill-btn-dark text-lg shadow-xl shadow-black/30 hover:shadow-black/50 transition-all duration-300"
              >
                Shop Now
              </Link>
              <Link
                href="#how-it-works"
                className="text-white font-semibold text-lg flex items-center gap-2 hover:gap-3 transition-all duration-300"
              >
                How it Works <span className="text-xl">→</span>
              </Link>
            </div>

            {/* Social proof + stats */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              {/* Avatar stack */}
              <div className="flex -space-x-3">
                {["🧑‍🦱", "👩‍🦱", "🧔"].map((emoji, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-lg"
                    style={{ background: ["#f97316", "#ec4899", "#3b82f6"][i] }}
                  >
                    {emoji}
                  </div>
                ))}
              </div>
              <div>
                <span className="text-2xl font-black" style={{ color: "#f97060" }}>1.5k+</span>
                <p className="text-blue-200 text-sm">Orders shipped in 2025</p>
              </div>
            </div>
          </div>

          {/* RIGHT — Model Image */}
          <div className="flex-1 relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glowing circle background */}
              <div
                className="absolute inset-0 rounded-full animate-pulse-glow"
                style={{
                  background: "radial-gradient(circle, rgba(139,92,246,0.5) 0%, transparent 70%)",
                  transform: "scale(1.3)",
                }}
              />
              {/* Model image */}
              <div
                className="relative w-72 h-80 lg:w-96 lg:h-[480px] flex items-end justify-center"
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div
                    className="w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden relative"
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      backdropFilter: "blur(2px)",
                      border: "2px solid rgba(255,255,255,0.2)",
                    }}
                  >
                    {/* Placeholder for actual model - using styled div */}
                    <div
                      className="w-full h-full bg-linear-to-br from-blue-300/30 to-purple-300/30 flex items-center justify-center text-9xl"
                    >
                      👩
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM FEATURE BOX — overlapping into next section */}
      <div className="absolute bottom-30 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4 translate-y-1/2 z-20">
        <div
          className="rounded-3xl p-8 lg:p-10 flex flex-col sm:flex-row gap-8 items-start relative overflow-hidden shadow-2xl"
          style={{ background: "#f97060" }}
        >
          {/* Feature 1 */}
          <div className="flex-1">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-4 text-3xl">
              📈
            </div>
            <h3 className="text-white text-xl font-bold mb-2">High Profit Margin</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Effective optimization of cost & quality that makes you highly profitable
            </p>
          </div>
          {/* Divider */}
          <div className="hidden sm:block w-px bg-white/30 self-stretch" />
          {/* Feature 2 */}
          <div className="flex-1">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-4 text-3xl">
              🌍
            </div>
            <h3 className="text-white text-xl font-bold mb-2">Global Shipping</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Reaching global market easily with our fast and flexible shipping solution
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}