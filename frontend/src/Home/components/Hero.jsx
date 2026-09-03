const STATS = [
  { label: "6.02ms Engine Latency", sub: "Zero Frame Drop Pipeline" },
  { label: "120 FPS WebGPU Native", sub: "Sub-Millimeter Tracking" },
  { label: "Zero Cloud Data Transfer", sub: "Isolated Browser Sandbox" },
];

const Hero = () => {
  return (
    <section
      id="hero"
      className="mx-auto flex min-h-[900px] max-w-7xl flex-col items-center justify-between px-4 pb-12 pt-10 sm:px-6"
    >
      {/* Announcement pill */}
      <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-lime/20 bg-surface/90 px-4 py-1.5 backdrop-blur-xl">
        <span className="flex h-2 w-2 animate-ping rounded-full bg-lime" />
        <span className="label-caps text-muted">WebGPU Zero-Latency Chromium Runtime</span>
        <span className="text-outline">/</span>
        <span className="telemetry-readout font-semibold text-lime">Zero Dongles</span>
      </div>

      {/* Headline */}
      <div className="max-w-5xl space-y-4 text-center">
        <h1 className="font-display text-4xl font-extrabold uppercase tracking-tight text-text sm:text-6xl">
          Your Body Is <br className="hidden sm:inline" />
          <span className="text-lime drop-shadow-[0_0_35px_rgba(191,255,0,0.35)]">
            The Console.
          </span>
        </h1>
        <p className="mx-auto max-w-2xl font-light leading-relaxed text-muted">
          Powered by real-time neural computer vision and WebGPU compute shaders.
          Sub-millimeter kinematic gesture tracking directly inside your browser
          canvas with zero cloud latency.
        </p>
      </div>

      {/* Biometric HUD orbit */}
      <div className="relative my-8 flex h-72 w-full max-w-2xl items-center justify-center sm:h-96">
        <div className="absolute h-72 w-72 animate-pulse-ring rounded-full border border-lime/15 sm:h-96 sm:w-96" />
        <div
          className="absolute h-56 w-56 animate-spin rounded-full border border-dashed border-lime/20 sm:h-72 sm:w-72"
          style={{ animationDuration: "40s" }}
        />
        <div className="absolute h-36 w-36 rounded-full border border-lime/10 sm:h-48 sm:w-48" />

        <div className="glow-lime-subtle relative z-10 flex h-44 w-44 items-center justify-center rounded-full border border-lime/30 bg-base shadow-2xl backdrop-blur-2xl sm:h-56 sm:w-56">
          <div className="flex h-16 w-16 animate-pulse items-center justify-center rounded-full border border-lime/40 bg-surface text-lime">
            <span className="material-symbols-outlined text-3xl font-bold">terminal</span>
          </div>

          <div className="telemetry-readout absolute -top-3 left-1/2 -translate-x-1/2 rounded border border-lime/30 bg-surface px-2 py-0.5 text-lime">
            X: 14.28 // Y: -02.14 // Z: 0.89
          </div>
          <div className="telemetry-readout absolute -bottom-3 right-4 rounded border border-lime/30 bg-surface px-2 py-0.5 text-lime">
            Confidence: 99.8%
          </div>
          <div className="telemetry-readout absolute left-2 top-1/3 rounded border border-lime/15 bg-surface px-2 py-0.5 text-muted">
            P-Index: [0, 4, 8, 12, 16, 20]
          </div>
        </div>

        <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-lime/30 to-transparent" />
        <div className="absolute inset-y-0 w-px bg-gradient-to-b from-transparent via-lime/30 to-transparent" />
      </div>

      {/* CTA cluster */}
      <div className="flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
        <button className="glow-lime-subtle flex w-full items-center justify-center gap-3 rounded-xl border border-lime/50 bg-surface px-8 py-4 text-sm font-bold uppercase tracking-wider text-lime transition-all duration-200 hover:scale-105 hover:border-lime hover:bg-lime/10 sm:w-auto">
          <span className="h-2.5 w-2.5 animate-ping rounded-full bg-lime" />
          Initialize Neural Link
          <span className="material-symbols-outlined text-lg">bolt</span>
        </button>
        <a
          href="#telemetry"
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-lime/20 bg-base px-8 py-4 text-sm font-bold uppercase tracking-wider text-text transition-all duration-200 hover:border-lime/60 hover:bg-surface hover:text-lime sm:w-auto"
        >
          Explore Telemetry
          <span className="material-symbols-outlined text-lg text-lime">monitoring</span>
        </a>
      </div>

      <div className="mt-14 grid w-full max-w-3xl grid-cols-1 gap-px border border-outline-variant bg-outline-variant sm:grid-cols-3">
        {STATS.map((stat) => (
          <div key={stat.label} className="bg-base px-4 py-3 text-left">
            <div className="label-caps flex items-center gap-1.5 text-text">
              <span className="h-1 w-1 rounded-full bg-lime" />
              {stat.label}
            </div>
            <div className="mt-1 text-[10px] text-muted">{stat.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
