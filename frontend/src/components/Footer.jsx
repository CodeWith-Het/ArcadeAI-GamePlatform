import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-50 border-t border-purple-500 border-opacity-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">
              CyberCrows
            </h3>
            <p className="text-gray-400">
              Own the future with unique digital collectibles.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  Collection
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Community</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  Telegram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  Medium
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  Whitepaper
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-purple-500 border-opacity-30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; 2024 CyberCrows. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-purple-400 transition">
                🐦 Twitter
              </a>
              <a href="#" className="hover:text-purple-400 transition">
                💬 Discord
              </a>
              <a href="#" className="hover:text-purple-400 transition">
                📱 Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
