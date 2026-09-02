import React from "react";

export const Team = () => {
  const team = [
    { name: "Het Patel", role: "Lead Full-Stack Developer", avatar: "HP" },
    { name: "Bhumik", role: "AI Integration & Systems", avatar: "B" },
    { name: "Alex Node", role: "Backend Architect", avatar: "AN" },
    { name: "Sarah Vision", role: "Computer Vision Eng", avatar: "SV" },
  ];

  return (
    <section className="py-20 bg-slate-950 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 font-['Orbitron']">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Core{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Engineers
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Built by developers who understand the craft.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="mb-4 flex justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-600 to-blue-800 flex items-center justify-center text-4xl font-bold text-white group-hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] transition-all duration-300">
                  {member.avatar}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">
                {member.name}
              </h3>
              <p className="text-cyan-400 text-sm tracking-wide">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};