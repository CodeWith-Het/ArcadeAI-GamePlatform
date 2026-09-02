import React from "react";

export const CTA = () => {
  return (
    <section className="py-20 bg-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-effect rounded-lg p-12 text-center border-2 border-purple-500 border-opacity-50">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to <span className="gradient-text">Own a CyberCrow?</span>
          </h2>

          <p className="text-xl text-gray-300 mb-8">
            Join thousands of collectors in the digital revolution. Limited
            supply, unlimited possibilities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-white text-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
              Start Collecting Now
            </button>
            <button className="px-8 py-4 border-2 border-purple-500 rounded-lg font-semibold text-white text-lg hover:bg-purple-500 hover:bg-opacity-10 transition-all duration-300">
              Join Discord Community
            </button>
          </div>

          <div className="mt-8 text-sm text-gray-400">
            <p>
              💎 10,000 Unique CyberCrows | 🔒 Secure Blockchain | 👥 Active
              Community
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
