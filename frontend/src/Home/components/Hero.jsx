import React from 'react'
import { ArrowUpRight, Hand, Eye, Activity } from "lucide-react";
import Reveal from './Reveal';

const benefits = [
  {
    num: "01",
    title: "NO CONTROLLER",
    desc: "Play with natural movement.",
  },
  {
    num: "02",
    title: "AI POWERED",
    desc: "Real-time computer vision understands your gestures.",
  },
  {
    num: "03",
    title: "BROWSER NATIVE",
    desc: "Open the website and start playing.",
  },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-32 sm:pt-36"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 bg-grid opacity-40 animate-grid-drift" />
      <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-lime-500/[0.06] blur-[120px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink-950" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Headline */}
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-line bg-ink-800/60 px-4 py-1.5 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-lime-500 animate-pulse-soft" />
              <span className="font-mono text-[11px] uppercase tracking-ultra text-bone-400">
                Computer Vision Gaming
              </span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tightest text-bone-50 text-shadow-deep sm:text-7xl lg:text-8xl">
              YOUR BODY IS
              <br />
              <span className="text-gradient-lime">THE CONSOLE.</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-bone-400 sm:text-xl">
              Play games using your hands, movement, and natural gestures.
              <br className="hidden sm:block" />
              No traditional controller required.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <button className="group flex w-full items-center justify-center gap-2 rounded-xl bg-lime-500 px-8 py-4 text-base font-bold text-ink-950 transition-all duration-300 hover:bg-lime-400 hover:shadow-xl hover:shadow-lime-500/25 active:scale-95 sm:w-auto">
                TRY THE DEMO
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
              <button className="group flex w-full items-center justify-center gap-2 rounded-xl border border-line bg-ink-800/60 px-8 py-4 text-base font-bold text-bone-50 backdrop-blur-sm transition-all duration-300 hover:border-lime-500/30 hover:bg-ink-700 active:scale-95 sm:w-auto">
                EXPLORE GAMES
                <ArrowUpRight
                  size={18}
                  className="text-bone-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
            </div>
          </Reveal>
        </div>

        {/* Hero visual: AI tracking frame */}
        <Reveal delay={400}>
          <div className="relative mx-auto mt-16 max-w-5xl">
            <div className="relative overflow-hidden rounded-3xl border border-line bg-ink-900">
              {/* Corner markers */}
              <div className="absolute left-4 top-4 z-30 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-lime-500 animate-pulse-soft" />
                <span className="font-mono text-[10px] uppercase tracking-ultra text-bone-400">
                  CAM_01 · LIVE
                </span>
              </div>
              <div className="absolute right-4 top-4 z-30 font-mono text-[10px] uppercase tracking-ultra text-bone-400">
                30 FPS
              </div>

              {/* Main visual */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9]">
                <img
                  src="https://images.pexels.com/photos/4390049/pexels-photo-4390049.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Hand gesture detected by AI camera"
                  className="absolute inset-0 h-full w-full object-cover opacity-60"
                  style={{
                    filter: "contrast(1.1) brightness(0.7) saturate(0.8)",
                  }}
                />
                {/* Dark overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-ink-950/60" />
                <div className="absolute inset-0 bg-gradient-to-r from-ink-950/60 via-transparent to-ink-950/60" />

                {/* Scan line */}
                <div className="absolute inset-0 overflow-hidden">
                  <div
                    className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-lime-500/40 to-transparent"
                    style={{ animation: "scan 4s linear infinite" }}
                  />
                </div>

                {/* Tracking landmarks */}
                <TrackingDots />

                {/* Corner brackets */}
                <CornerBrackets />

                {/* Info labels */}
                <div className="absolute bottom-5 left-5 z-30 flex flex-col gap-2 sm:bottom-6 sm:left-6">
                  <InfoTag icon={<Hand size={12} />} text="Hand detected" />
                  <InfoTag icon={<Eye size={12} />} text="Gesture recognized" />
                </div>

                <div className="absolute bottom-5 right-5 z-30 sm:bottom-6 sm:right-6">
                  <InfoTag
                    icon={<Activity size={12} />}
                    text="Confidence 98.7%"
                    highlight
                  />
                </div>
              </div>

              {/* Bottom bar */}
              <div className="flex items-center justify-between border-t border-line bg-ink-800/80 px-5 py-3 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-ultra text-bone-400">
                    Model
                  </span>
                  <span className="font-mono text-[10px] text-bone-200">
                    HandLandmark v2
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="h-1 w-20 overflow-hidden rounded-full bg-ink-600">
                    <div className="h-full w-[98%] rounded-full bg-lime-500" />
                  </div>
                  <span className="font-mono text-[10px] text-lime-500">
                    98%
                  </span>
                </div>
              </div>
            </div>

            {/* Floating accent */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-line bg-ink-800/90 px-5 py-2 backdrop-blur-md">
              <span className="font-mono text-[10px] uppercase tracking-ultra text-bone-400">
                Your camera becomes your controller
              </span>
            </div>
          </div>
        </Reveal>

        {/* Benefits */}
        <div className="mt-24 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
          {benefits.map((b, i) => (
            <Reveal key={b.num} delay={i * 100}>
              <div className="group h-full bg-ink-900 p-8 transition-colors duration-500 hover:bg-ink-800 sm:p-10">
                <span className="font-mono text-xs text-lime-500/60">
                  {b.num}
                </span>
                <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-bone-50 sm:text-2xl">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-bone-400">
                  {b.desc}
                </p>
                <div className="mt-6 h-px w-full bg-line transition-all duration-500 group-hover:w-12 group-hover:bg-lime-500/40" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrackingDots() {
  const dots = [
    { top: "32%", left: "42%", delay: "0s" },
    { top: "28%", left: "48%", delay: "0.3s" },
    { top: "25%", left: "55%", delay: "0.6s" },
    { top: "35%", left: "38%", delay: "0.9s" },
    { top: "38%", left: "60%", delay: "1.2s" },
    { top: "45%", left: "44%", delay: "1.5s" },
    { top: "48%", left: "52%", delay: "0.2s" },
    { top: "55%", left: "46%", delay: "0.5s" },
    { top: "58%", left: "54%", delay: "0.8s" },
  ];
  return (
    <>
      {dots.map((dot, i) => (
        <div
          key={i}
          className="absolute z-20"
          style={{ top: dot.top, left: dot.left }}
        >
          <div
            className="h-1.5 w-1.5 rounded-full bg-lime-500"
            style={{
              animation: `pulseSoft 2.5s ease-in-out infinite`,
              animationDelay: dot.delay,
            }}
          />
          <div
            className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-lime-500/30"
            style={{
              animation: "pulseSoft 2.5s ease-in-out infinite",
              animationDelay: dot.delay,
            }}
          />
        </div>
      ))}
      <svg
        className="absolute inset-0 z-10 h-full w-full opacity-30"
        preserveAspectRatio="none"
      >
        <line
          x1="42%"
          y1="32%"
          x2="48%"
          y2="28%"
          stroke="#BFFF00"
          strokeWidth="0.5"
        />
        <line
          x1="48%"
          y1="28%"
          x2="55%"
          y2="25%"
          stroke="#BFFF00"
          strokeWidth="0.5"
        />
        <line
          x1="38%"
          y1="35%"
          x2="44%"
          y2="45%"
          stroke="#BFFF00"
          strokeWidth="0.5"
        />
        <line
          x1="60%"
          y1="38%"
          x2="52%"
          y2="48%"
          stroke="#BFFF00"
          strokeWidth="0.5"
        />
        <line
          x1="44%"
          y1="45%"
          x2="52%"
          y2="48%"
          stroke="#BFFF00"
          strokeWidth="0.5"
        />
        <line
          x1="46%"
          y1="55%"
          x2="54%"
          y2="58%"
          stroke="#BFFF00"
          strokeWidth="0.5"
        />
        <line
          x1="44%"
          y1="45%"
          x2="46%"
          y2="55%"
          stroke="#BFFF00"
          strokeWidth="0.5"
        />
        <line
          x1="52%"
          y1="48%"
          x2="54%"
          y2="58%"
          stroke="#BFFF00"
          strokeWidth="0.5"
        />
      </svg>
    </>
  );
}

function CornerBrackets() {
  const base = "absolute h-5 w-5 border-lime-500/40 z-20";
  return (
    <>
      <div
        className={`${base} left-3 top-3 border-l-2 border-t-2 rounded-tl`}
      />
      <div
        className={`${base} right-3 top-3 border-r-2 border-t-2 rounded-tr`}
      />
      <div
        className={`${base} bottom-3 left-3 border-b-2 border-l-2 rounded-bl`}
      />
      <div
        className={`${base} bottom-3 right-3 border-b-2 border-r-2 rounded-br`}
      />
    </>
  );
}

function InfoTag({ icon, text, highlight = false }) {
  return (
    <div
      className={`flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 backdrop-blur-md ${
        highlight
          ? "border-lime-500/30 bg-lime-500/10"
          : "border-line bg-ink-900/70"
      }`}
    >
      <span className={highlight ? "text-lime-500" : "text-bone-400"}>
        {icon}
      </span>
      <span
        className={`font-mono text-[10px] uppercase tracking-ultra ${
          highlight ? "text-lime-500" : "text-bone-200"
        }`}
      >
        {text}
      </span>
    </div>
  );
}

export default Hero
