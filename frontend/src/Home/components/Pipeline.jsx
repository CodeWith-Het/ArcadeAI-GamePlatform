const LEFT_CARDS = [
  {
    icon: "videogame_asset_off",
    title: "Zero Controllers.",
    body: "Hardware decoupling directly inside the WebAssembly sandbox. No calibration protocols, zero proprietary dongles, and no Bluetooth signal degradation.",
    stamp: "PHYSICAL LAYER: ELIMINATED",
  },
  {
    icon: "memory",
    title: "Sub-5ms Inference.",
    body: "100% on-device WebGPU neural tensor execution. Camera sensor buffers never leave client VRAM, ensuring absolute cryptographic privacy.",
    stamp: "INFERENCE: 3.84ms @ 120Hz",
  },
];

const RIGHT_CARDS = [
  {
    icon: "pinch",
    title: "21-Point Kinematics.",
    body: "Sub-millimeter gesture mapping for finger-gun trigger snaps, dual-palm spherical shields, and micro-twitch directional steering.",
    stamp: "DEGREES OF FREEDOM: 21 DOF",
  },
  {
    icon: "security",
    title: "Strict Air-Gap.",
    body: "Video buffers are instantly discarded after coordinate extraction. No raw visual telemetry ever touches persistent disk or network sockets.",
    stamp: "SECURITY AUDIT: VERIFIED",
  },
];

const FeatureCard = ({ icon, title, body, stamp }) => (
  <div className="group relative overflow-hidden rounded-2xl border border-lime/15 bg-surface/90 p-6 backdrop-blur-xl transition-all hover:border-lime/50">
    <div className="mb-4 flex h-8 w-8 items-center justify-center rounded bg-lime/10 text-lime">
      <span className="material-symbols-outlined text-[20px]">{icon}</span>
    </div>
    <h3 className="mb-2 font-display text-lg font-semibold text-text">{title}</h3>
    <p className="text-sm leading-relaxed text-muted">{body}</p>
    <div className="telemetry-readout mt-4 border-t border-outline-variant pt-4 text-lime">
      {stamp}
    </div>
  </div>
);

const Pipeline = () => {
  return (
    <section className="mx-auto max-w-7xl border-t border-outline-variant px-4 py-16 sm:px-6">
      <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <div className="label-caps mb-2 tracking-widest text-lime">// Architecture Specification</div>
          <h2 className="font-display text-3xl font-bold text-text sm:text-4xl">
            Neural Skeletal Pipeline.
          </h2>
        </div>
        <p className="max-w-md text-sm text-muted">
          Continuous mathematical conversion of standard 720p optical camera
          feeds into deterministic 3D kinetic rig positions inside the browser
          thread.
        </p>
      </div>

      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-3">
          {LEFT_CARDS.map((c) => (
            <FeatureCard key={c.title} {...c} />
          ))}
        </div>

        {/* Center kinetic rig visualizer */}
        <div className="glow-lime-subtle relative mx-auto flex aspect-square w-full max-w-lg items-center justify-center rounded-3xl border border-lime/25 bg-base p-8 lg:col-span-6">
          <div className="pointer-events-none absolute inset-6 rounded-2xl border border-dashed border-lime/20" />

          <div className="relative flex h-full w-full flex-col items-center justify-center">
            <svg
              viewBox="0 0 200 240"
              className="h-4/5 w-4/5 text-lime drop-shadow-[0_0_15px_rgba(191,255,0,0.5)]"
              fill="none"
            >
              <path d="M100 220 L100 170" stroke="#BFFF00" strokeDasharray="2 2" strokeWidth="1.5" />
              <path d="M100 170 L50 140 L30 110 L20 85" stroke="#BFFF00" strokeOpacity="0.8" strokeWidth="1.5" />
              <path d="M100 170 L75 115 L68 75 L62 40" stroke="#BFFF00" strokeOpacity="0.8" strokeWidth="1.5" />
              <path d="M100 170 L100 110 L100 68 L100 30" stroke="#BFFF00" strokeOpacity="0.8" strokeWidth="1.5" />
              <path d="M100 170 L125 115 L132 75 L138 40" stroke="#BFFF00" strokeOpacity="0.8" strokeWidth="1.5" />
              <path d="M100 170 L150 135 L165 105 L175 80" stroke="#BFFF00" strokeOpacity="0.8" strokeWidth="1.5" />
              <path d="M50 140 L75 115 L100 110 L125 115 L150 135 Z" fill="rgba(191,255,0,0.06)" stroke="#BFFF00" strokeWidth="1" />
              <circle cx="100" cy="220" fill="#BFFF00" r="4" />
              <circle cx="100" cy="170" fill="#D8FF8A" r="5" />
              <circle cx="50" cy="140" fill="#F2F5EE" r="3" />
              <circle cx="30" cy="110" fill="#F2F5EE" r="3" />
              <circle cx="20" cy="85" fill="#BFFF00" r="4" />
              <circle cx="75" cy="115" fill="#F2F5EE" r="3" />
              <circle cx="68" cy="75" fill="#F2F5EE" r="3" />
              <circle cx="62" cy="40" fill="#BFFF00" r="4" />
              <circle cx="100" cy="110" fill="#F2F5EE" r="3" />
              <circle cx="100" cy="68" fill="#F2F5EE" r="3" />
              <circle cx="100" cy="30" fill="#D8FF8A" r="5" />
              <circle cx="125" cy="115" fill="#F2F5EE" r="3" />
              <circle cx="132" cy="75" fill="#F2F5EE" r="3" />
              <circle cx="138" cy="40" fill="#BFFF00" r="4" />
              <circle cx="150" cy="135" fill="#F2F5EE" r="3" />
              <circle cx="165" cy="105" fill="#F2F5EE" r="3" />
              <circle cx="175" cy="80" fill="#BFFF00" r="4" />
            </svg>

            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-lime/25 bg-surface/95 px-4 py-2">
              <div className="telemetry-readout flex items-center gap-2 text-lime">
                <span className="h-2 w-2 animate-pulse rounded-full bg-lime" />
                Tracking: Pose_Right
              </div>
              <div className="telemetry-readout text-muted">FPS: 120 // Jitter: &lt;0.04mm</div>
            </div>
          </div>
        </div>

        <div className="space-y-6 lg:col-span-3">
          {RIGHT_CARDS.map((c) => (
            <FeatureCard key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pipeline;
