import React from "react";

export const Steps = () => {
  const steps = [
    {
      number: 1,
      title: "Calibrate Camera",
      description:
        "Allow webcam access to let the MediaPipe engine map your hand landmarks in real-time.",
      icon: "📷",
    },
    {
      number: 2,
      title: "Lock Targets",
      description:
        "Use your index finger to control the crosshair and track moving targets across the screen.",
      icon: "🎯",
    },
    {
      number: 3,
      title: "Pull the Trigger",
      description:
        "Drop your thumb towards your index finger to fire. Speed and accuracy determine your score.",
      icon: "⚡",
    },
  ];

  return (
    <section className="py-20 bg-slate-950 font-['Orbitron']">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Three Steps to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Play
            </span>
          </h2>
          <p className="text-gray-400 text-lg font-sans">
            No downloads. No controllers. Just your hands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-sans">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-24 left-1/2 w-1/2 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-30"></div>
              )}

              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 font-bold text-2xl text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                  {step.number}
                </div>

                <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-8 text-center hover:border-cyan-400 transition-colors">
                  <div className="text-5xl mb-4">{step.icon}</div>
                  <h3 className="text-2xl font-bold mb-3 text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};