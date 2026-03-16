"use client";

import React from "react";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="relative py-24 overflow-hidden"
      style={{
        backgroundImage: "url('/images/herosection/Frame3.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "85vh"
      }}>

      <svg
        className="pn-choose-1-bg-shape-2"
        width="218"
        height="102"
        viewBox="0 0 218 102"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="draw-path"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M91.413 67.4804C85.8114 79.5331 76.6691 89.8783 60.6915 97.5141C46.3723 104.36 26.9537 102.37 14.2774 94.9399C4.70036 89.3245 -1.027 80.7344 0.152888 70.9035C0.85197 65.0948 4.04354 58.5965 11.0879 51.9387C18.9375 44.5226 30.8616 42.4461 41.1764 42.3169C56.3136 42.1286 71.4717 46.0471 85.3469 52.231C85.9885 49.9703 86.5413 47.6642 87.0322 45.319C89.6637 32.7353 90.6249 19.0849 93.1159 5.37073L94.0952 9.21655e-05L104.847 1.97877L103.873 7.35418C101.359 21.1633 100.382 34.911 97.7269 47.5806C97.0444 50.8496 96.2505 54.0474 95.3108 57.1653C108.625 64.4236 122.89 74.816 137.378 82.0145C149.554 88.0677 161.851 91.93 173.856 88.4762C181.781 86.1942 189.458 80.6963 196.923 70.8948C201.214 65.2662 203.454 58.0408 205.494 51.3463L207.091 46.1266L217.546 49.3427L215.95 54.5623C213.539 62.4573 210.688 70.8882 205.624 77.5296C196.002 90.1592 185.862 96.7058 175.637 99.3203C165.352 101.944 154.868 100.588 144.407 96.8952C126.238 90.479 108.102 76.7593 91.4155 67.4828L91.413 67.4804ZM81.5932 62.5122C68.9669 56.787 55.1548 53.0722 41.3363 53.2426C33.6007 53.3376 24.4889 54.3313 18.6003 59.8897C12.9413 65.2372 10.5005 70.081 10.9858 74.5085C11.4482 78.7045 14.5211 82.1296 18.6268 84.7983C28.4351 91.1806 44.3498 93.2023 55.9612 87.6533C69.3074 81.2782 76.9098 72.59 81.5932 62.5122Z"
        />
      </svg>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — Images collage */}
          <div className="relative">
            {/* Dot pattern background */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: "",
                backgroundSize: "28px 28px",
              }}
            />
            {/* Main image */}
            <div
              className="relative z-10 w-64 h-80 lg:w-90 lg:h-130 rounded-2xl overflow-hidden shadow-2xl"
              style={{ marginLeft: "0" }}
            >
              <div className="w-full h-full bg-linear-to-br from-gray-700 to-gray-900 flex items-center justify-center text-8xl">
                🖨️
              </div>
            </div>
            {/* Overlapping second image */}
            <div
              className="absolute bottom-25 right-20 z-20 w-48 h-52 lg:w-60 lg:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
            >
              <div className="w-full h-full bg-linear-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-7xl">
                🎨
              </div>
            </div>
            {/* Years of experience badge */}
            {/* <div
              className="absolute -top-6 -right-4 lg:right-8 z-30 w-32 h-32 lg:w-36 lg:h-36 rounded-2xl flex flex-col items-center justify-center shadow-2xl"
              style={{ background: "#121212", color: "#fff" }}
            >
              <span className="text-4xl lg:text-5xl font-black" style={{ color: "#fff" }}>14+</span>
              <span className="text-xs font-bold text-center leading-tight mt-1 text-gray-400 uppercase tracking-widest">
                Years of<br />Experience
              </span>
            </div> */}
          </div>

          {/* RIGHT — Content */}
          <div>
            <p className="section-label">// ABOUT PRINTING //</p>
            <h2 className="section-heading mb-6">
              Quality Prints Backed by{" "}
              <span className="highlight">Experience</span>
            </h2>
            <p className="text-gray-600 text-base mb-8 leading-relaxed">
              We deliver reliable, high-quality print solutions backed by years of industry
              expertise and customer satisfaction.
            </p>

            {/* Feature list */}
            <div className="space-y-6 mb-10">
              {[
                {
                  icon: "🛍️",
                  title: "Vast Product Range",
                  desc: "Explore a wide variety of print solutions, flyers, t-shirts, and packaging.",
                },
                {
                  icon: "🤝",
                  title: "Trusted by Businesses",
                  desc: "From individuals to businesses, our satisfied clients trust us for consistent quality.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 text-2xl"
                    style={{ background: "#fef3f2", border: "1px solid #fecaca" }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/shop" className="pill-btn pill-btn-gradient text-base shadow-lg shadow-purple-500/30">
              See Our Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
