import React from "react";

export const Collection = () => {
  const items = [
    { id: 1, rarity: "Legendary" },
    { id: 2, rarity: "Epic" },
    { id: 3, rarity: "Rare" },
    { id: 4, rarity: "Uncommon" },
    { id: 5, rarity: "Rare" },
    { id: 6, rarity: "Epic" },
  ];

  return (
    <section className="py-20 bg-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Browse the <span className="gradient-text">CyberCrows</span>{" "}
            Collection
          </h2>
          <p className="text-gray-400 text-lg">
            Explore our exclusive collection of digital artworks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-lg overflow-hidden cursor-pointer"
            >
              <div className="h-64 bg-gradient-to-br from-purple-600 to-pink-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold">
                    View Details
                  </button>
                </div>
              </div>
              <div className="p-4 bg-gray-900">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">CyberCrow #{item.id}</span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.rarity === "Legendary"
                        ? "bg-yellow-500 text-black"
                        : item.rarity === "Epic"
                          ? "bg-purple-500 text-white"
                          : "bg-blue-500 text-white"
                    }`}
                  >
                    {item.rarity}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-purple-500 rounded-lg font-semibold hover:bg-purple-500 hover:bg-opacity-10 transition-all duration-300">
            View All Items
          </button>
        </div>
      </div>
    </section>
  );
};
