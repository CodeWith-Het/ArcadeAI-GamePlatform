const MARQUEE_ITEMS = [
  "Initialize Your Neural Link",
  "Enter The Arcade.AI",
  "Zero Hardware Controllers",
  "100% WebGPU Native",
];

const MarqueeRow = () => (
  <div className="flex select-none items-center space-x-8 whitespace-nowrap font-display text-4xl font-extrabold uppercase tracking-tight text-outline/20 sm:text-6xl">
    {MARQUEE_ITEMS.map((item) => (
      <span key={item} className="contents">
        <span className="transition-colors hover:text-lime">{item}</span>
        <span className="font-light text-lime">—</span>
      </span>
    ))}
  </div>
);

const CTABand = () => {
  return (
    <section className="overflow-hidden border-t border-outline-variant bg-base py-16">
      <div className="animate-marquee whitespace-nowrap">
        <MarqueeRow />
        <MarqueeRow />
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="w-full border-t border-outline-variant bg-base">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:px-6 md:flex-row">
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
          <span className="font-display text-sm font-bold uppercase tracking-wider text-text">
            Arcade.AI
          </span>
          <span className="hidden text-outline sm:inline">|</span>
          <span className="telemetry-readout text-muted">
            Systems Operational // Arcade.AI Protocol 2026 // All Rights Reserved
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <a href="#" className="telemetry-readout text-muted transition-colors duration-150 hover:text-lime">
            Privacy Protocol
          </a>
          <a href="#" className="telemetry-readout text-muted transition-colors duration-150 hover:text-lime">
            Security Kernel
          </a>
          <a href="#" className="telemetry-readout text-muted transition-colors duration-150 hover:text-lime">
            Terminal API
          </a>
          <a href="#" className="telemetry-readout flex items-center gap-1.5 text-muted transition-colors duration-150 hover:text-lime">
            <span className="h-2 w-2 rounded-full bg-lime" />
            Node Status
          </a>
        </div>
      </div>
    </footer>
  );
};

export { CTABand, Footer };
