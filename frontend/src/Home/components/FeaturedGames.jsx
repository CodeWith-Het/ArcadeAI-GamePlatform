import { Play, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

const featuredGame = {
  title: "Classic Duck",
  category: "Precision Shooter",
  desc: "Aim, fire, and hit moving targets using just your hand. Precision meets nostalgia in this reimagined arcade classic.",
  image:
    "https://images.pexels.com/photos/4836384/pexels-photo-4836384.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  status: "READY",
};

const games = [
  {
    title: "Clay Shooter",
    category: "Action / Tracking",
    desc: "Track and intercept fast-moving clay targets with your gaze and hand.",
    image:
      "https://images.pexels.com/photos/221683/pexels-photo-221683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    status: "READY",
  },
  {
    title: "Speed Run",
    category: "Movement / Reflex",
    desc: "Dodge, sprint, and react. Your body controls the pace.",
    image:
      "https://images.pexels.com/photos/33995258/pexels-photo-33995258.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    status: "READY",
  },
  {
    title: "Neural Shield",
    category: "Defense / Gesture",
    desc: "Raise your hands to deploy shields. Gesture to deflect incoming threats.",
    image:
      "https://images.pexels.com/photos/5588798/pexels-photo-5588798.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    status: "READY",
  },
];

const FeaturedGames = () => {
  return (
    <section id="demo" className="relative py-28 sm:py-36">
      <div className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-lime-500/[0.04] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <span className="font-mono text-xs uppercase tracking-ultra text-lime-500/60">
                Game Library
              </span>
              <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tighter text-bone-50 sm:text-5xl lg:text-6xl">
                PLAY THE ARCADE
              </h2>
              <p className="mt-4 text-lg text-bone-400 sm:text-xl">
                Choose a game. Move. Play.
              </p>
            </div>
            <button className="group flex items-center gap-2 text-sm font-medium text-bone-400 transition-colors hover:text-lime-500">
              View all games
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Featured large card */}
          <Reveal>
            <div className="group relative h-full min-h-[420px] cursor-pointer overflow-hidden rounded-3xl border border-line bg-ink-900">
              {/* Image */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={featuredGame.image}
                  alt={featuredGame.title}
                  className="h-full w-full object-cover opacity-50 transition-all duration-700 group-hover:scale-105 group-hover:opacity-65"
                  style={{
                    filter: "contrast(1.05) brightness(0.8) saturate(0.9)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-ink-950/60 to-transparent" />
              </div>

              {/* Status badge */}
              <div className="absolute left-5 top-5 z-20 flex items-center gap-1.5 rounded-full border border-lime-500/20 bg-ink-900/80 px-3 py-1 backdrop-blur-sm">
                <div className="h-1.5 w-1.5 rounded-full bg-lime-500 animate-pulse-soft" />
                <span className="font-mono text-[10px] uppercase tracking-ultra text-lime-500">
                  {featuredGame.status}
                </span>
              </div>

              {/* Featured label */}
              <div className="absolute right-5 top-5 z-20">
                <span className="font-mono text-[10px] uppercase tracking-ultra text-bone-400">
                  Featured
                </span>
              </div>

              {/* Content */}
              <div className="relative z-10 flex h-full flex-col justify-end p-7 sm:p-10">
                <span className="font-mono text-xs uppercase tracking-ultra text-lime-500/70">
                  {featuredGame.category}
                </span>
                <h3 className="mt-3 font-display text-3xl font-bold tracking-tight text-bone-50 sm:text-4xl">
                  {featuredGame.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-bone-200/80">
                  {featuredGame.desc}
                </p>
                <button className="mt-6 flex w-fit items-center gap-2 rounded-xl bg-lime-500 px-6 py-3 text-sm font-bold text-ink-950 transition-all duration-300 hover:bg-lime-400 hover:shadow-lg hover:shadow-lime-500/20 active:scale-95">
                  <Play size={16} className="fill-ink-950" />
                  PLAY NOW
                </button>
              </div>
            </div>
          </Reveal>

          {/* Smaller cards */}
          <div className="grid gap-6 sm:grid-cols-1">
            {games.map((game, i) => (
              <Reveal key={game.title} delay={i * 120}>
                <div className="group relative h-full min-h-[180px] cursor-pointer overflow-hidden rounded-3xl border border-line bg-ink-900 transition-all duration-500 hover:border-lime-500/20">
                  <div className="flex h-full">
                    {/* Image */}
                    <div className="relative w-2/5 shrink-0 overflow-hidden">
                      <img
                        src={game.image}
                        alt={game.title}
                        className="h-full w-full object-cover opacity-50 transition-all duration-700 group-hover:scale-110 group-hover:opacity-65"
                        style={{
                          filter:
                            "contrast(1.05) brightness(0.8) saturate(0.9)",
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-ink-900" />
                    </div>

                    {/* Content */}
                    <div className="relative flex flex-1 flex-col justify-between p-6">
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10px] uppercase tracking-ultra text-lime-500/70">
                            {game.category}
                          </span>
                          <div className="flex items-center gap-1">
                            <div className="h-1 w-1 rounded-full bg-lime-500 animate-pulse-soft" />
                            <span className="font-mono text-[9px] uppercase tracking-ultra text-bone-400">
                              {game.status}
                            </span>
                          </div>
                        </div>
                        <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-bone-50 sm:text-2xl">
                          {game.title}
                        </h3>
                        <p className="mt-2 text-xs leading-relaxed text-bone-400">
                          {game.desc}
                        </p>
                      </div>
                      <button className="mt-4 flex w-fit items-center gap-1.5 text-sm font-bold text-bone-50 transition-colors group-hover:text-lime-500">
                        <Play size={14} className="fill-current" />
                        PLAY NOW
                        <ArrowUpRight
                          size={14}
                          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedGames
