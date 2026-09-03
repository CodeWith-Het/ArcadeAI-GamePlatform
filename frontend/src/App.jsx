import Navbar from "./Home/components/Navbar";
import Hero from "./Home/components/Hero";
import Pipeline from "./Home/components/Pipeline";
import Titles from "./Home/components/Titles";
import Telemetry from "./Home/components/Telemetry";
import { CTABand, Footer } from "./Home/components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-base font-body text-text selection:bg-lime selection:text-black">
      {/* Ambient dynamic shaders + scanline, matching the reference build */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/4 h-[600px] w-[600px] rounded-full bg-lime/[0.035] blur-[160px]" />
        <div className="absolute -right-40 top-[45%] h-[500px] w-[500px] rounded-full bg-lime/[0.025] blur-[180px]" />
        <div className="absolute bottom-20 left-1/3 h-[400px] w-[700px] rounded-full bg-lime/[0.02] blur-[170px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#BFFF0006_1px,transparent_1px)] bg-[size:28px_28px] opacity-40" />
        <div className="absolute inset-0 scanline-overlay opacity-30" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Pipeline />
          <Titles />
          <Telemetry />
          <CTABand />
        </main>
        <Footer />
      </div>
    </div>
  );
}
