import React from "react";

export const Timeline = () => {
  const events = [
    {
      date: "Q4 2025",
      title: "Core Architecture",
      description:
        "MERN backend initialized with secure JWT authentication and Admin dashboard routing.",
    },
    {
      date: "Q1 2026",
      title: "AI Engine Integration",
      description:
        "Successfully embedded MediaPipe hand tracking for real-time 3D landmark detection.",
    },
    {
      date: "Q2 2026",
      title: "Platform Launch",
      description:
        "Public release of Arcade.AI with global leaderboards and dynamic game modules.",
    },
  ];

  return (
    <section className="py-20 bg-slate-950 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 font-['Orbitron']">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Development{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Roadmap
            </span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-600"></div>

            <div className="space-y-12">
              {events.map((event, index) => (
                <div
                  key={index}
                  className={`flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className="w-1/2 px-8">
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-cyan-400 transition-colors">
                      <p className="text-cyan-400 font-bold mb-2 tracking-widest text-sm uppercase">
                        {event.date}
                      </p>
                      <h3 className="text-2xl font-bold mb-2 text-white">
                        {event.title}
                      </h3>
                      <p className="text-gray-400">{event.description}</p>
                    </div>
                  </div>
                  <div className="w-0 flex justify-center items-center">
                    <div className="w-6 h-6 rounded-full bg-cyan-400 border-4 border-slate-950 shadow-[0_0_10px_rgba(6,182,212,0.8)] z-10"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};