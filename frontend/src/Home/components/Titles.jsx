import SpotlightCard from "./SpotlightCard";

const Titles = () => {
  return (
    <section id="arsenal" className="mx-auto max-w-7xl border-t border-outline-variant px-4 py-16 sm:px-6">
      <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <div className="label-caps mb-2 flex items-center gap-2 text-lime">
            <span>The Arsenal</span>
            <span className="text-outline">//</span>
            <span>Spatial Modules</span>
          </div>
          <h2 className="font-display text-3xl font-bold text-text sm:text-4xl">
            Field-Deployed Titles.
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <span className="telemetry-readout rounded-full border border-lime/30 bg-surface px-3 py-1 text-lime">
            4 Ready To Deploy
          </span>
          <span className="telemetry-readout rounded-full border border-outline-variant bg-base px-3 py-1 text-muted">
            Web Engine Native
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        {/* Classic Duck — featured */}
        <SpotlightCard className="rounded-3xl border border-lime/15 bg-surface p-8 backdrop-blur-2xl transition-all duration-300 hover:border-lime/50 md:col-span-8">
          <div className="relative z-10 flex h-full flex-col justify-between space-y-8">
            <div className="flex items-start justify-between">
              <div>
                <span className="label-caps rounded-full border border-lime/30 bg-lime/10 px-3 py-1 text-lime">
                  Core Tier // Precision
                </span>
                <h3 className="mt-3 font-display text-2xl font-bold text-text">Classic Duck</h3>
                <p className="mt-2 max-w-md text-sm text-muted">
                  Retro-arcade precision shooter driven by index-finger point &
                  thumb snap trigger actuation. Zero crosshair jitter with
                  predictive Kalman lead filtering.
                </p>
              </div>
              <div className="text-right">
                <div className="stat-counter text-lime">1,420</div>
                <div className="label-caps text-muted">Active Operators</div>
              </div>
            </div>

            <div className="relative flex h-48 w-full items-center justify-between overflow-hidden rounded-2xl border border-outline-variant bg-base p-4">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-lime/5 to-transparent" />
              <div className="z-10 space-y-2">
                <div className="telemetry-readout text-muted">Gesture: Finger_Gun_Trigger</div>
                <div className="telemetry-readout font-bold text-lime">Trigger Snap: 42ms Duration</div>
                <div className="telemetry-readout text-muted">Hitbox Margin: 0.12 CM</div>
              </div>
              <div className="z-10 flex h-28 w-28 animate-pulse items-center justify-center rounded-full border border-lime/30 bg-lime/10">
                <span className="material-symbols-outlined text-4xl text-lime">adjust</span>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-outline-variant pt-4">
              <div className="flex items-center gap-4">
                <div className="telemetry-readout text-muted">Max Elo: 4,890</div>
                <div className="telemetry-readout text-muted">World Rank #1: Bhumik</div>
              </div>
              <button className="rounded-xl border border-lime/40 bg-surface px-5 py-2 text-xs font-bold uppercase tracking-wider text-lime transition-all hover:border-lime hover:bg-lime/15">
                Deploy Module
              </button>
            </div>
          </div>
        </SpotlightCard>

        {/* Clay Shooter */}
        <SpotlightCard className="flex flex-col justify-between rounded-3xl border border-lime/15 bg-surface p-8 backdrop-blur-2xl transition-all duration-300 hover:border-lime/50 md:col-span-4">
          <div className="space-y-6">
            <div className="flex items-start justify-between">
              <span className="label-caps rounded-full border border-lime/30 bg-lime/10 px-3 py-1 text-lime">
                Advanced Tier
              </span>
              <span className="material-symbols-outlined text-lime">sports_esports</span>
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-text">Clay Shooter</h3>
              <p className="mt-2 text-sm text-muted">
                High-velocity dual-hand skeet tracking with multi-vector
                parabolic trajectory extrapolation.
              </p>
            </div>
            <div className="space-y-1 rounded-xl border border-outline-variant bg-base p-3">
              <div className="telemetry-readout flex justify-between">
                <span className="text-muted">Dual Vector:</span>
                <span className="font-bold text-lime">Active</span>
              </div>
              <div className="telemetry-readout flex justify-between">
                <span className="text-muted">Avg Reaction:</span>
                <span className="text-text">118ms</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between border-t border-outline-variant pt-6">
            <span className="telemetry-readout text-muted">880 Operators</span>
            <button className="rounded-xl border border-lime/30 bg-base p-2.5 text-lime transition-colors hover:border-lime">
              <span className="material-symbols-outlined">play_arrow</span>
            </button>
          </div>
        </SpotlightCard>

        {/* Speed Run */}
        <SpotlightCard className="flex flex-col justify-between rounded-3xl border border-lime/15 bg-surface p-8 backdrop-blur-2xl transition-all duration-300 hover:border-lime/50 md:col-span-4">
          <div className="space-y-6">
            <div className="flex items-start justify-between">
              <span className="label-caps rounded-full border border-lime/30 bg-lime/10 px-3 py-1 text-lime">
                Velocity Tier
              </span>
              <span className="material-symbols-outlined text-lime">sprint</span>
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-text">Speed Run</h3>
              <p className="mt-2 text-sm text-muted">
                Neon kinetic obstacle sprint driven entirely by continuous
                wrist tilt and body inertia momentum.
              </p>
            </div>
            <div className="space-y-1 rounded-xl border border-outline-variant bg-base p-3">
              <div className="telemetry-readout flex justify-between">
                <span className="text-muted">Tilt Angle:</span>
                <span className="font-bold text-lime">±45° Fluid</span>
              </div>
              <div className="telemetry-readout flex justify-between">
                <span className="text-muted">FPS Recovery:</span>
                <span className="text-text">120 Fixed</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between border-t border-outline-variant pt-6">
            <span className="telemetry-readout text-muted">614 Operators</span>
            <button className="rounded-xl border border-lime/30 bg-base p-2.5 text-lime transition-colors hover:border-lime">
              <span className="material-symbols-outlined">play_arrow</span>
            </button>
          </div>
        </SpotlightCard>

        {/* Neural Shield — featured */}
        <SpotlightCard className="rounded-3xl border border-lime/15 bg-surface p-8 backdrop-blur-2xl transition-all duration-300 hover:border-lime/50 md:col-span-8">
          <div className="relative z-10 flex h-full flex-col justify-between space-y-8">
            <div className="flex items-start justify-between">
              <div>
                <span className="label-caps rounded-full border border-lime/30 bg-lime/15 px-3 py-1 text-lime">
                  Expert Tier // Defense
                </span>
                <h3 className="mt-3 font-display text-2xl font-bold text-text">Neural Shield</h3>
                <p className="mt-2 max-w-md text-sm text-muted">
                  Dual-palm volumetric forcefield deflection. Create, expand,
                  and angle spatial kinetic barriers to ricochet projectile
                  barrages back into the enemy core.
                </p>
              </div>
              <div className="text-right">
                <div className="stat-counter text-lime">2,109</div>
                <div className="label-caps text-muted">Active Operators</div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 rounded-2xl border border-outline-variant bg-base p-4 sm:grid-cols-3">
              <div>
                <div className="label-caps text-muted">Shield Expansion</div>
                <div className="mt-1 text-sm font-bold text-lime">100% (2.4m Radial)</div>
              </div>
              <div>
                <div className="label-caps text-muted">Absorption Ratio</div>
                <div className="mt-1 text-sm font-bold text-text">99.4% Kinetic</div>
              </div>
              <div>
                <div className="label-caps text-muted">Parry Window</div>
                <div className="mt-1 text-sm font-bold text-[#D8FF8A]">12ms Frame-Lock</div>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-outline-variant pt-4">
              <div className="telemetry-readout text-muted">
                Operator Peak: <span className="font-bold text-lime">CodeWith-Het</span> (4,720 ELO)
              </div>
              <button className="rounded-xl border border-lime/40 bg-surface px-5 py-2 text-xs font-bold uppercase tracking-wider text-lime transition-all hover:border-lime hover:bg-lime/15">
                Deploy Module
              </button>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
};

export default Titles;
