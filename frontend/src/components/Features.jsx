import React from "react";

export const Features = () => {
  const features = [
    {
      title: "Unique Design",
      description:
        "Each CyberCrow is one-of-a-kind with distinctive visual characteristics and traits.",
      icon: "🎨",
    },
    {
      title: "Secure Ownership",
      description:
        "Built on blockchain technology ensuring complete ownership and authenticity of your NFT.",
      icon: "🔐",
    },
    {
      title: "Community Power",
      description:
        "Join a thriving community with exclusive access to events, airdrops, and benefits.",
      icon: "👥",
    },
  ];

  return (
    <section className="py-20 bg-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            What Makes <span className="gradient-text">CyberCrows</span>{" "}
            Different
          </h2>
          <p className="text-gray-400 text-lg">
            Discover the unique features that set CyberCrows apart from the rest
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-effect rounded-lg p-8 hover:border-purple-400 hover:border-opacity-100 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
