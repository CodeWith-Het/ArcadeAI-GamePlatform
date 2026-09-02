import React from "react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen bg-dark flex items-center justify-center overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="inline-block px-6 py-2 bg-purple-900 bg-opacity-40 rounded-full backdrop-blur-md border border-purple-500 border-opacity-30">
            <p className="text-sm text-purple-200">🚀 Welcome to the Future</p>
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Own a <span className="gradient-text">CyberCrow</span>
          <br />
          Own the <span className="gradient-text">Future</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Experience the next generation of digital collectibles. Each CyberCrow
          is a unique token of power and prestige in the digital age.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
            Explore Collection
          </button>
          <button className="px-8 py-3 border-2 border-purple-500 rounded-lg font-semibold text-white hover:bg-purple-500 hover:bg-opacity-10 transition-all duration-300">
            Learn More
          </button>
        </div>

        {/* Hero image section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="h-48 md:h-64 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 opacity-60 hover:opacity-100 transition-opacity cursor-pointer"></div>
          <div className="h-48 md:h-64 rounded-lg bg-gradient-to-br from-pink-600 to-purple-600 opacity-60 hover:opacity-100 transition-opacity cursor-pointer"></div>
          <div className="h-48 md:h-64 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 opacity-60 hover:opacity-100 transition-opacity cursor-pointer"></div>
          <div className="h-48 md:h-64 rounded-lg bg-gradient-to-br from-blue-600 to-pink-600 opacity-60 hover:opacity-100 transition-opacity cursor-pointer"></div>
        </div>
      </div>
    </section>
  );
};
