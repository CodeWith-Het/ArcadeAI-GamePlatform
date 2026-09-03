const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between rounded-full border border-lime/15 bg-surface/85 px-5 shadow-2xl shadow-black/80 backdrop-blur-2xl">
        <a href="#hero" className="group flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-lime" />
          </span>
          <span className="font-display text-sm font-semibold uppercase tracking-wider text-text transition-colors group-hover:text-lime">
            Arcade.AI
          </span>
          <span className="label-caps hidden rounded-full border border-lime/30 bg-surface-high px-2 py-0.5 text-lime sm:inline-block">
            v2.5-PROD
          </span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          <a href="#hero" className="font-display text-sm border-b-2 border-lime pb-1 text-lime">
            Store
          </a>
          <a href="#arsenal" className="text-sm text-muted transition-colors hover:text-text">
            Library
          </a>
          <a href="#leaderboard" className="text-sm text-muted transition-colors hover:text-text">
            Leaderboard
          </a>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 rounded-full border border-lime/20 bg-base px-3 py-1 sm:flex">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime" />
            <span className="telemetry-readout font-semibold text-lime/90">28 ONLINE</span>
          </div>

          <a
            href="#telemetry"
            title="View System Telemetry"
            className="rounded-full p-2 text-muted transition-all hover:bg-surface-high hover:text-lime"
          >
            <span className="material-symbols-outlined text-[20px]">terminal</span>
          </a>

          <div className="hidden items-center gap-2 rounded-full border border-lime/15 bg-surface-high px-3 py-1.5 transition-all hover:border-lime/40 sm:flex">
            <div className="flex h-5 w-5 items-center justify-center rounded-full border border-lime/40 bg-base text-[10px] font-bold text-lime">
              CH
            </div>
            <span className="label-caps text-text">CodeWith-Het</span>
          </div>

          <button className="group relative overflow-hidden rounded-full p-[1px] transition-all duration-200 active:scale-95">
            <span className="relative flex items-center gap-2 rounded-full border border-lime/40 bg-surface px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-lime shadow-[0_0_0_rgba(191,255,0,0)] transition-all group-hover:border-lime group-hover:bg-lime/10 group-hover:shadow-[0_0_15px_rgba(191,255,0,0.25)]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime" />
              Deploy Engine
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
