import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

const FinalCTA = () => {
  return (
    <section className="relative overflow-hidden py-28 sm:py-40">
      {/* Animated background */}
      <div className="absolute inset-0 bg-grid opacity-30 animate-grid-drift" />
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-500/[0.07] blur-[140px]" />

      {/* Motion lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-lime-500/10 to-transparent"
            style={{
              top: `${15 + i * 18}%`,
              left: 0,
              right: 0,
              animation: `sweep ${5 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Particles */}
      <div className="absolute inset-0">
        {[
          { top: "20%", left: "15%", delay: "0s" },
          { top: "60%", left: "80%", delay: "1s" },
          { top: "80%", left: "20%", delay: "2s" },
          { top: "30%", left: "70%", delay: "0.5s" },
          { top: "50%", left: "40%", delay: "1.5s" },
        ].map((p, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-lime-500/40"
            style={{
              top: p.top,
              left: p.left,
              animation: "float 6s ease-in-out infinite",
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Reveal>
          <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tightest text-bone-50 text-shadow-deep sm:text-6xl lg:text-7xl">
            READY TO ENTER
            <br />
            <span className="text-gradient-lime">THE ARCADE?</span>
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-bone-400">
            Your camera is already a controller.
            <br />
            See what your movement can do.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <button className="group flex w-full items-center justify-center gap-2 rounded-xl bg-lime-500 px-8 py-4 text-base font-bold text-ink-950 transition-all duration-300 hover:bg-lime-400 hover:shadow-xl hover:shadow-lime-500/30 active:scale-95 sm:w-auto">
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
    </section>
  );
};

export default FinalCTA;
