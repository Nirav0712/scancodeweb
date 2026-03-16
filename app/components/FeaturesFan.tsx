"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ─── Card Data ────────────────────────────────────────────────────────────────

const CARDS = [
  {
    emoji: "🖨️",
    title: "High-Quality Printing",
    desc: "Advanced printing technology for sharp, vibrant, durable results on every product — every time.",
  },
  {
    emoji: "🚚",
    title: "Fast & Reliable Delivery",
    desc: "On-time shipping with real-time tracking and secure packaging, so your order arrives perfectly.",
  },
  {
    emoji: "📦",
    title: "Bulk Order Support",
    desc: "Whether you're a business or event planner, we handle bulk orders efficiently and cost-effectively.",
  },
  {
    emoji: "🔒",
    title: "Secure Online Payments",
    desc: "Multiple secure payment methods keep every transaction safe, fast, and completely hassle-free.",
  },
  {
    emoji: "🎨",
    title: "Easy Customization",
    desc: "Upload your design, choose a product, and customize it exactly how you want with our intuitive tools.",
  },
];

// ─── Arc Math ─────────────────────────────────────────────────────────────────

/**
 * Given a progress value (0 → 1) and the number of cards,
 * compute the angle (in degrees) for each card on the arc.
 *
 * Arc spans from 165° (far left) to 15° (far right) — upper semicircle.
 * At progress=0 the first card is centered (90°); others fan out to the right.
 * Scrolling moves cards leftward → each card visits the center in turn.
 */
const ARC_START = 195; // left tip angle (degrees)
// const ARC_END = 15;    // right tip angle (degrees)
const ARC_END = 15;
const ARC_CENTER = 90; // top of arc (degrees)

function getCardAngles(progress: number, numCards: number) {
  // totalArc is the travel distance of the orbit in degrees
  const totalArc = ARC_START - ARC_END; // 150°
  // spacing between cards
  const spacing = totalArc / (numCards - 1); // e.g. 37.5° for 5 cards

  // At progress=0 → first card at center (90°)
  // At progress=1 → last card at center (90°)
  // centerOffset shifts which card is at 90° based on progress
  const activeFloat = progress * (numCards - 1);

  return CARDS.map((_, i) => {
    const offset = i - activeFloat;
    const angle = ARC_CENTER + offset * spacing;
    return angle;
  });
}

function polarToXY(angleDeg: number, radius: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: radius * Math.cos(rad),
    y: -radius * Math.sin(rad), // negative because y grows downward in DOM
  };
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function FeaturesFan() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const activeLabelRef = useRef<HTMLParagraphElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // ── Mobile detection ──────────────────────────────────────────────────────
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // ── GSAP ScrollTrigger ─────────────────────────────────────────────────────
  useEffect(() => {
    if (isMobile) return; // mobile uses plain layout, no GSAP

    gsap.registerPlugin(ScrollTrigger);

    const wrapper = wrapperRef.current;
    const sticky = stickyRef.current;
    if (!wrapper || !sticky) return;

    const numCards = CARDS.length;

    // Radius changes with viewport
    const getRadius = () => {
      if (window.innerWidth >= 1280) return 400;
      if (window.innerWidth >= 1024) return 340;
      return 260;
    };

    // Place cards initially (progress = 0)
    const setCardPositions = (progress: number) => {
      const angles = getCardAngles(progress, numCards);
      const radius = getRadius();
      const activeFloat = progress * (numCards - 1);
      const activeIndex = Math.round(activeFloat);

      setActiveIdx(activeIndex);

      // Update label text directly (avoids React re-render lag)
      if (activeLabelRef.current) {
        activeLabelRef.current.textContent = CARDS[activeIndex].title;
      }

      // Update progress bar
      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${(progress * 100).toFixed(1)}%`;
      }

      angles.forEach((angle, i) => {
        const el = cardRefs.current[i];
        if (!el) return;

        const { x, y } = polarToXY(angle, radius);
        // Rotate card perpendicular to arc tangent
        const cardRotation = -(angle - 90);

        // Active card: full opacity, scale 1.1
        // Adjacent cards: slightly faded, smaller
        const distFromActive = Math.abs(i - activeFloat);
        const scale = gsap.utils.clamp(0.7, 1.1, 1.1 - distFromActive * 0.12);
        const opacity = gsap.utils.clamp(0.3, 1, 1 - distFromActive * 0.22);
        const zIndex = Math.round(100 - distFromActive * 10);

        gsap.set(el, {
          x,
          y,
          rotation: cardRotation,
          scale,
          opacity,
          zIndex,
          transformOrigin: "center center",
        });
      });
    };

    // Initial placement
    setCardPositions(0);

    // Create ScrollTrigger — pin section while scrolling through cards
    const scrollDistance = numCards * 350; // px of scroll per card

    const st = ScrollTrigger.create({
      trigger: wrapper,
      start: "top top",
      end: `+=${scrollDistance}`,
      pin: sticky,
      pinSpacing: true,
      scrub: 1.2,
      onUpdate: (self) => {
        setCardPositions(self.progress);
      },
    });

    // Refresh on resize
    const handleResize = () => {
      setCardPositions(st.progress);
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      st.kill();
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  // ─── Mobile scroll reveal ──────────────────────────────────────────────────
  const [mobileProgress, setMobileProgress] = useState(0);
  const mobileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isMobile) return;
    const handleScroll = () => {
      const el = mobileRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, 1 - rect.bottom / (vh + rect.height)));
      setMobileProgress(p);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  // ─── Helpers ───────────────────────────────────────────────────────────────
  const radius = typeof window !== "undefined"
    ? window.innerWidth >= 1280 ? 400 : window.innerWidth >= 1024 ? 340 : 260
    : 340;

  // Semi-circle SVG dimensions (2R wide × R tall)
  const svgW = radius * 2 + 50;
  const svgH = radius + 30;

  return (
    <div ref={wrapperRef}>
      {/* ── Sticky stage (GSAP pins this on desktop) ──────────────────────── */}
      <div
        ref={stickyRef}
        className="hidden md:flex flex-col items-center justify-center min-h-screen overflow-hidden"
        style={{ background: "#eef1f8" }}
      >
        {/* Section header */}
        <div className="text-center pt-10 pb-4 z-20 relative">
          <p className="section-label">// OUR FEATURES //</p>
          <h2 className="section-heading">
            Top-Notch Tools For{" "}
            <span className="highlight">Custom Prints</span>
          </h2>
        </div>

        {/* Arc stage */}
        <div
          className="relative flex-1 w-full flex items-end justify-center"
          style={{ minHeight: `${svgH + 40}px`, paddingBottom: "0px" }}
        >
          {/* ── Fixed semi-circle ─────────────────────────────────────────── */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
            style={{ width: svgW, height: svgH }}
          >
            <svg
              width={svgW}
              height={svgH}
              viewBox={`0 0 ${svgW} ${svgH}`}
              style={{ overflow: "visible" }}
            >
              {/* Outer glow ring */}
              <path
                d={`M 30 ${svgH} A ${radius} ${radius} 0 0 1 ${svgW - 30} ${svgH}`}
                fill="none"
                stroke="rgba(249,112,96,0.18)"
                strokeWidth="18"
                strokeLinecap="round"
              />
              {/* Main arc */}
              <path
                d={`M 30 ${svgH} A ${radius} ${radius} 0 0 1 ${svgW - 30} ${svgH}`}
                fill="none"
                stroke="rgba(249,112,96,0.45)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="8 6"
              />
              {/* Filled semi-circle shape */}
              <path
                d={`M 30 ${svgH} A ${radius} ${radius} 0 0 1 ${svgW - 30} ${svgH} Z`}
                fill="url(#arcFill)"
              />
              <defs>
                <radialGradient id="arcFill" cx="50%" cy="100%" r="100%">
                  <stop offset="0%" stopColor="#f97060" stopOpacity="0.22" />
                  <stop offset="100%" stopColor="#f97060" stopOpacity="0.04" />
                </radialGradient>
              </defs>
            </svg>

            {/* Center label + progress — inside the semi-circle */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center justify-end pb-4"
              style={{ width: radius * 1.1, height: svgH * 0.55 }}
            >
              <p
                ref={activeLabelRef}
                className="font-bold text-center px-4 leading-tight text-coral"
                style={{
                  fontSize: "clamp(0.85rem, 1.4vw, 1.1rem)",
                  color: "#f97060",
                  maxWidth: "200px",
                }}
              >
                {CARDS[activeIdx].title}
              </p>

              {/* Progress bar */}
              <div className="mt-3 w-32 h-1.5 bg-white/40 rounded-full overflow-hidden">
                <div
                  ref={progressBarRef}
                  className="h-full rounded-full transition-none"
                  style={{ background: "#f97060", width: "0%" }}
                />
              </div>

              {/* Dot indicators */}
              {/* <div className="flex gap-2 mt-2">
                {CARDS.map((_, i) => (
                  <div
                    key={i}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: activeIdx === i ? 20 : 7,
                      height: 7,
                      background:
                        activeIdx === i
                          ? "#f97060"
                          : "rgba(249,112,96,0.35)",
                    }}
                  />
                ))}
              </div> */}
            </div>
          </div>

          {/* ── Cards orbiting the arc ─────────────────────────────────────── */}
          <div
            className="absolute bottom-60 right-265"
            style={{ transform: "translateX(-50%)" }}
          >
            {CARDS.map((card, i) => (
              <div
                key={i}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className="absolute"
                style={{
                  width: "clamp(150px, 20vw, 200px)",
                  // Initial off-screen position handled by GSAP
                  willChange: "transform, opacity",
                }}
              >
                <div
                  className="rounded-2xl p-5 flex flex-col gap-3 select-none cursor-pointer hover:scale-105 transition-all duration-300 h-80"
                  style={{
                    background: "rgba(255,255,255,0.95)",
                    boxShadow:
                      i === activeIdx
                        ? "0 24px 64px rgba(249,112,96,0.25), 0 4px 16px rgba(0,0,0,0.08)"
                        : "0 4px 24px rgba(0,0,0,0.07)",
                    border:
                      i === activeIdx
                        ? "2px solid #f97060"
                        : "1px solid rgba(229,231,235,0.8)",
                    transition: "border 0.3s, box-shadow 0.3s",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <div className="text-4xl leading-none">{card.emoji}</div>
                  <h4 className="font-bold text-gray-900 text-sm leading-snug">
                    {card.title}
                  </h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative blobs */}
        <div
          className="absolute top-10 right-10 w-20 h-20 pointer-events-none rounded-full opacity-40"
          style={{
            background:
              "radial-gradient(circle, #f97060 0%, #f97316 60%, #eab308 100%)",
            animation: "blob 9s infinite",
          }}
        />
        <div
          className="absolute bottom-20 left-8 w-14 h-14 pointer-events-none rounded-full opacity-25"
          style={{
            background: "radial-gradient(circle, #6c4fdc 0%, #3b5fe2 100%)",
            animation: "blob 12s infinite reverse",
          }}
        />
      </div>

      {/* ── Mobile Layout (< md) ─────────────────────────────────────────────── */}
      <div
        ref={mobileRef}
        className="md:hidden py-20 px-4"
        style={{ background: "#eef1f8" }}
      >
        <div className="text-center mb-12">
          <p className="section-label">// OUR FEATURES //</p>
          <h2 className="section-heading">
            Top-Notch Tools For{" "}
            <span className="highlight">Custom Prints</span>
          </h2>
        </div>

        {/* Centered mini semi-circle */}
        <div className="flex justify-center mb-10">
          <div
            className="flex flex-col items-center justify-end pb-4"
            style={{
              width: 200,
              height: 100,
              borderRadius: "100px 100px 0 0",
              background:
                "linear-gradient(to top, rgba(249,112,96,0.9), rgba(249,112,96,0.5))",
            }}
          >
            <p className="font-bold text-white text-xs text-center px-3 leading-tight">
              Our Features
            </p>
            <div className="flex gap-1.5 mt-2">
              {CARDS.map((_, i) => (
                <div
                  key={i}
                  className="h-1.5 rounded-full"
                  style={{
                    width: 7,
                    background: "rgba(255,255,255,0.6)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-lg mx-auto">
          {CARDS.map((card, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 bg-white shadow-md flex flex-col gap-3"
              style={{
                border: "1px solid #e5e7eb",
                opacity: Math.min(1, 0.4 + mobileProgress * 1.5),
                transform: `translateY(${Math.max(0, 30 - mobileProgress * 80)}px)`,
                transition: `opacity 0.5s ease ${i * 80}ms, transform 0.5s ease ${i * 80}ms`,
              }}
            >
              <div className="text-3xl">{card.emoji}</div>
              <h4 className="font-bold text-gray-900 text-sm">{card.title}</h4>
              <p className="text-gray-500 text-xs leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}