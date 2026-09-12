const links = ["Home", "About", "Feedback", "Demo", "Privacy", "Terms"];

const Footer = () => {
  return (
    <footer className="relative border-t border-line bg-ink-950">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
          {/* Left */}
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-lime-500/10 border border-lime-500/20">
                <span className="font-display text-lg font-bold text-lime-500">
                  A
                </span>
              </div>
              <span className="font-display text-lg font-bold tracking-tighter text-bone-50">
                Arcade<span className="text-lime-500">.AI</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-bone-400">
              AI-powered motion gaming for the browser.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map((link) => (
              <button
                key={link}
                className="text-sm text-bone-400 transition-colors hover:text-lime-500"
              >
                {link}
              </button>
            ))}
          </nav>

          {/* Status */}
          <div className="flex items-center gap-2 rounded-full border border-line bg-ink-800/60 px-4 py-2">
            <div className="h-1.5 w-1.5 rounded-full bg-lime-500 animate-pulse-soft" />
            <span className="font-mono text-[10px] uppercase tracking-ultra text-bone-200">
              Systems operational
            </span>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 sm:flex-row">
          <span className="font-mono text-[10px] uppercase tracking-ultra text-bone-600">
            © 2026 Arcade.AI
          </span>
          <span className="font-mono text-[10px] uppercase tracking-ultra text-bone-600">
            Built for the browser
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer
