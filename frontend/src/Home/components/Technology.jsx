import { Cpu, Eye, Zap, Globe, Brain, Monitor } from "lucide-react";
import Reveal from "./Reveal";

const techs = [
  { icon: Cpu, label: "WebGPU" },
  { icon: Eye, label: "Computer Vision" },
  { icon: Zap, label: "Real-Time Tracking" },
  { icon: Globe, label: "Browser Runtime" },
  { icon: Brain, label: "AI Inference" },
  { icon: Monitor, label: "Game Canvas" },
];

const Technology = () => {
   return (
     <section className="relative py-28 sm:py-32">
       <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
         <Reveal>
           <div className="text-center">
             <span className="font-mono text-xs uppercase tracking-ultra text-lime-500/60">
               Under The Hood
             </span>
             <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tighter text-bone-50 sm:text-4xl lg:text-5xl">
               ENGINEERED FOR REAL-TIME PLAY
             </h2>
           </div>
         </Reveal>

         <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
           {techs.map((tech, i) => (
             <Reveal key={tech.label} delay={i * 80}>
               <div className="group flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-line bg-ink-900 p-6 text-center transition-all duration-500 hover:border-lime-500/20 hover:bg-ink-800">
                 <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-ink-800 transition-all duration-500 group-hover:border-lime-500/30 group-hover:bg-lime-500/5">
                   <tech.icon
                     size={22}
                     className="text-bone-400 transition-colors duration-500 group-hover:text-lime-500"
                   />
                 </div>
                 <span className="font-display text-sm font-medium tracking-tight text-bone-200 transition-colors duration-500 group-hover:text-bone-50">
                   {tech.label}
                 </span>
               </div>
             </Reveal>
           ))}
         </div>
       </div>
     </section>
   );
}

export default Technology
