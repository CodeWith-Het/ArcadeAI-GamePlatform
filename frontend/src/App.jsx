import React from "react";
import {
  Hero,
  Features,
  Collection,
  Steps,
  Rarity,
  Timeline,
  Team,
  FAQ,
  CTA,
  Footer,
} from "./components";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-500 selection:text-slate-950">
      <Hero />
      <Features />
      <Collection />
      <Steps />
      <Rarity />
      <Timeline />
      <Team />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;