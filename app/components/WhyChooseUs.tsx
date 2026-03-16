"use client";

import Image from "next/image";
import React from "react";

const featuresLeft = [
  {
    icon: "🖨️",
    title: "Premium Print Quality",
    desc: "We use advanced printing technology to ensure vibrant colors, sharp details.",
  },
  {
    icon: "🔧",
    title: "Easy Customization",
    desc: "Upload your design, choose your product, and customize it exactly how you want.",
  },
];

const featuresRight = [
  {
    icon: "🚚",
    title: "Fast & Reliable Delivery",
    desc: "Your orders are processed quickly and delivered on time, deadline or event.",
  },
  {
    icon: "🤝",
    title: "Trusted by Hundreds",
    desc: "From individuals to businesses, our satisfied clients trust us for consistent quality.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="relative py-20 overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(120deg,#f97316 0%,#db2777 40%,#7c3aed 70%,#2563eb 100%)",
      }}
    >
      {/* Header */}
      <div className="text-center">
        <p className="text-sm tracking-widest uppercase opacity-80">
          // WHY CHOOSE US //
        </p>

        <h2 className="text-4xl lg:text-5xl font-bold mt-3">
          Why Clients Love Working <br />
          <span className="text-pink-400 underline underline-offset-8">
            With Us
          </span>
        </h2>
      </div>

      {/* Main layout */}
      <div className="max-w-8xl mx-auto  grid lg:grid-cols-3 gap-10 items-center ">

        {/* LEFT FEATURES */}
        <div className="flex flex-col gap-8 items-end">
          {featuresLeft.map((feat, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-xl w-70  text-center"
            >
              {/* <div className="text-6xl mb-4">{feat.icon}</div> */}
              <div className="group text-center p-6">
                <div className="text-5xl transition-transform duration-300 group-hover:scale-145">
                  {feat.icon}
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2">{feat.title}</h3>
              <p className="text-xl opacity-80">{feat.desc}</p>
            </div>
          ))}
        </div>

        {/* CENTER IMAGE */}
        <div className="relative flex justify-center top-28">

          {/* Animated Colored Circles */}

          <div className="absolute w-125 h-[500px] rounded-full bg-pink-400/20 animate-[ping_10s_ease-in-out_infinite]"></div>

          <div className="absolute w-[450px] h-[450px] rounded-full bg-purple-400/20 animate-[ping_10s_ease-in-out_infinite] [animation-delay:1s]"></div>

          <div className="absolute w-[400px] h-[400px] rounded-full bg-indigo-400/20 animate-[ping_10s_ease-in-out_infinite] [animation-delay:2s]"></div>

          <div className="absolute w-[350px] h-[350px] rounded-full bg-blue-400/20 animate-[ping_10s_ease-in-out_infinite] [animation-delay:3s]"></div>

          <div className="absolute w-[300px] h-[300px] rounded-full bg-fuchsia-400/20 animate-[ping_10s_ease-in-out_infinite] [animation-delay:4s]"></div>

          <div className="absolute w-[250px] h-[250px] rounded-full bg-cyan-400/20 animate-[ping_10s_ease-in-out_infinite] [animation-delay:5s]"></div>

          <div className="absolute w-[200px] h-[200px] rounded-full bg-violet-400/20 animate-[ping_10s_ease-in-out_infinite] [animation-delay:6s]"></div>

          {/* Glow Center */}
          <div className="absolute w-[150px] h-[150px] rounded-full bg-white/20 blur-3xl"></div>
          <Image
            src="/images/whychooseusperson1.webp"
            alt="printer"
            width={800}
            height={900}
            className="relative z-10 w-137.5 lg:w-150 h-auto"
          />

        </div>

        {/* RIGHT FEATURES */}
        <div className="flex flex-col gap-8 ">
          {featuresRight.map((feat, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-xl  w-70  text-center"
            >
              <div className="group text-center p-6">
                <div className="text-5xl transition-transform duration-300 group-hover:scale-145">
                  {feat.icon}
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2">{feat.title}</h3>
              <p className="text-xl opacity-80">{feat.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}