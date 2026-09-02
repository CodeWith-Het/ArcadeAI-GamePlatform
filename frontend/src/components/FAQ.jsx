import React, { useState } from "react";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is a CyberCrow?",
      answer:
        "A CyberCrow is a unique digital collectible built on blockchain technology. Each one has distinct characteristics and varying levels of rarity.",
    },
    {
      question: "How do I purchase a CyberCrow?",
      answer:
        "Connect your digital wallet, browse our collection, and complete the purchase using cryptocurrency. Ownership is instantly transferred to your wallet.",
    },
    {
      question: "What blockchain are CyberCrows built on?",
      answer:
        "CyberCrows are built on the Ethereum blockchain, ensuring security, transparency, and widespread compatibility.",
    },
    {
      question: "Can I trade my CyberCrow?",
      answer:
        "Yes! You can trade or sell your CyberCrow on any NFT marketplace that supports the blockchain it's built on.",
    },
    {
      question: "Are there any royalties?",
      answer:
        "Yes, original creators receive a percentage of sales when CyberCrows are resold on secondary markets.",
    },
  ];

  return (
    <section className="py-20 bg-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Questions</span> Answered
          </h2>
          <p className="text-gray-400 text-lg">
            Find answers to common questions about CyberCrows
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass-effect rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-purple-600 hover:bg-opacity-20 transition-all duration-300"
              >
                <span className="text-lg font-semibold text-left">
                  {faq.question}
                </span>
                <span
                  className={`text-2xl transition-transform duration-300 ${openIndex === index ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 border-t border-purple-500 border-opacity-30 bg-purple-600 bg-opacity-10">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};