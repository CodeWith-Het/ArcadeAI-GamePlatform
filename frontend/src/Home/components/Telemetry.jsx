const METRICS = [
  { label: "[WebGPU_Context_Status]", value: "Initialized_Canvas_0", strong: true },
  { label: "[WGSL_Shader_Compilation]", value: "0.0041ms // Optimal" },
  { label: "[Memory_Footprint]", value: "18.4 MB (VRAM Allocated)", strong: true },
  { label: "[Frame_Jitter_Variance]", value: "±0.0018 ms", soft: true },
  { label: "[Optical_Inference_Pipeline]", value: "120 Samples/Sec" },
];

// Bar heights (%) and opacities mirror the reference sparkline, with the peak
// bar carrying the acid-lime glow.
const BARS = [45, 60, 35, 70, 50, 85, 65, 95, 55, 40, 75, 60];

const LEADERBOARD = [
  { rank: 1, name: "Bhumik", tag: "Apex Titan", stat: "Accuracy: 98.4% // Duck Sniper", elo: "4,890", top: true },
  { rank: 2, name: "CodeWith-Het", tag: "Master Operator", stat: "Accuracy: 97.6% // Neural Shield", elo: "4,720" },
  { rank: 3, name: "Aria Chen", stat: "Accuracy: 96.1% // Clay Skeet", elo: "4,510" },
  { rank: 4, name: "Marcus Vance", stat: "Accuracy: 95.8% // Speed Run", elo: "4,390" },
];

const Telemetry = () => {
  return (
    <section id="telemetry" className="mx-auto max-w-7xl border-t border-outline-variant px-4 py-16 sm:px-6">
      <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <div className="label-caps mb-2 tracking-widest text-lime">// High Frequency Monitor</div>
          <h2 className="font-display text-3xl font-bold text-text sm:text-4xl">
            Telemetry &amp; Leaderboard.
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 animate-ping rounded-full bg-lime" />
          <span className="telemetry-readout font-bold text-lime">All Sensors Synced</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Live diagnostic terminal */}
        <div className="telemetry-readout flex flex-col justify-between rounded-3xl border border-lime/20 bg-surface p-6 lg:col-span-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-outline-variant pb-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full border border-red-400/50 bg-[#370B08]" />
                <span className="h-3 w-3 rounded-full border border-lime/40 bg-[#182405]" />
                <span className="h-3 w-3 rounded-full bg-lime" />
                <span className="ml-2 text-xs font-bold tracking-wide text-text">Edge_AI_Daemon://v2.5</span>
              </div>
              <span className="label-caps text-lime">Stream: Active</span>
            </div>

            <div className="space-y-3 text-xs leading-relaxed">
              {METRICS.map((m) => (
                <div key={m.label} className="flex justify-between text-muted">
                  <span>{m.label}</span>
                  <span className={`${m.strong ? "font-bold " : ""}${m.soft ? "text-[#D8FF8A]" : "text-lime"} ${m.soft ? "font-bold" : ""}`}>
                    {m.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-outline-variant bg-base p-4">
              <div className="mb-2 flex items-center justify-between text-xs">
                <span className="text-muted">Real-Time Inference Latency Tick</span>
                <span className="font-bold text-lime">3.82ms</span>
              </div>
              <div className="flex h-16 items-end gap-1.5 pt-2">
                {BARS.map((h, i) => {
                  const isPeak = h === Math.max(...BARS);
                  return (
                    <div
                      key={i}
                      style={{ height: `${h}%`, opacity: isPeak ? 1 : 0.3 + h / 150 }}
                      className={`w-full rounded-t bg-lime ${isPeak ? "shadow-[0_0_10px_rgba(191,255,0,0.8)]" : ""}`}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-outline-variant pt-4 text-xs text-muted">
            <span>Socket Protocol: Webrtc_Data</span>
            <span className="font-bold text-lime">Ping: 0.1ms (Local Loopback)</span>
          </div>
        </div>

        {/* Global leaderboard */}
        <div className="flex flex-col justify-between rounded-3xl border border-lime/20 bg-surface p-6 backdrop-blur-2xl lg:col-span-6">
          <div>
            <div className="mb-6 flex items-center justify-between">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-text">
                <span className="material-symbols-outlined text-lime">leaderboard</span>
                Global Spatial Leaderboard
              </h3>
              <span className="label-caps text-muted">Season 04 // Live</span>
            </div>

            <div className="space-y-3">
              {LEADERBOARD.map((p) => (
                <div
                  key={p.rank}
                  className={`flex items-center justify-between rounded-2xl border p-3.5 transition-all hover:scale-[1.01] ${
                    p.top
                      ? "glow-lime-subtle border-lime/60 bg-base hover:border-lime"
                      : "border-outline-variant bg-base hover:border-lime/30"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${
                        p.top
                          ? "bg-lime text-black"
                          : "border border-outline-variant bg-surface text-muted"
                      }`}
                    >
                      {p.rank}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-text">{p.name}</span>
                        {p.tag && (
                          <span className="label-caps rounded border border-lime/30 bg-lime/10 px-2 py-0.5 text-[9px] font-bold text-lime">
                            {p.tag}
                          </span>
                        )}
                      </div>
                      <div className="telemetry-readout text-muted">{p.stat}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`stat-counter text-lg ${p.top ? "text-lime" : "text-text"}`}>{p.elo}</div>
                    <div className="label-caps text-muted">Elo Points</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-outline-variant pt-4">
            <span className="telemetry-readout text-muted">Your Current Global Standing</span>
            <span className="telemetry-readout font-bold text-lime">Rank #2 (99.98th Percentile)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Telemetry;
