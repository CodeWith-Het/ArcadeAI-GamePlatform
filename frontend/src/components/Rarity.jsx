import React from "react";

export const Rarity = () => {
  const tiers = [
    {
      name: "Expert AI (High Speed)",
      percentage: 5,
      color: "from-yellow-400 to-yellow-600",
    },
    { name: "Advanced AI", percentage: 15, color: "from-cyan-400 to-cyan-600" },
    {
      name: "Core Tracking",
      percentage: 30,
      color: "from-blue-500 to-blue-700",
    },
    {
      name: "Basic Motion",
      percentage: 50,
      color: "from-slate-500 to-slate-700",
    },
  ];

  return (
    <section className="py-20 bg-slate-950 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 font-['Orbitron']">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              AI Module
            </span>{" "}
            Tiers
          </h2>
          <p className="text-gray-400 text-lg">
            Distribution of game engine difficulties and target speeds.
          </p>
        </div>

        <div className="space-y-8 max-w-2xl mx-auto">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6"
            >
              <div className="flex justify-between items-center mb-3">
                <div>
                  <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                </div>
                <span
                  className={`px-4 py-2 bg-gradient-to-r ${tier.color} rounded-full text-sm font-bold text-slate-950`}
                >
                  {tier.percentage}%
                </span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
                <div
                  className={`bg-gradient-to-r ${tier.color} h-full transition-all duration-500 shadow-[0_0_10px_currentColor]`}
                  style={{ width: `${tier.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};