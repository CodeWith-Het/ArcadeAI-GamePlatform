import { Camera, Eye, Activity, Gamepad2, ArrowDown } from "lucide-react";
import Reveal from "./Reveal";

const steps = [
  {
    num: "01",
    icon: Camera,
    title: "Camera",
    desc: "Your webcam captures movement.",
  },
  {
    num: "02",
    icon: Eye,
    title: "AI Vision",
    desc: "Computer vision detects your movement.",
  },
  {
    num: "03",
    icon: Activity,
    title: "Tracking",
    desc: "Hand and body landmarks become precise input.",
  },
  {
    num: "04",
    icon: Gamepad2,
    title: "Play",
    desc: "Your movement becomes the game control.",
  },
];

const HowItWorks = () => {
   return (
     <section className="relative py-28 sm:py-36">
       <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
         <Reveal>
           <div className="text-center">
             <span className="font-mono text-xs uppercase tracking-ultra text-lime-500/60">
               The Pipeline
             </span>
             <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tighter text-bone-50 sm:text-5xl lg:text-6xl">
               HOW IT WORKS
             </h2>
           </div>
         </Reveal>

         {/* Desktop: horizontal flow */}
         <div className="mt-16 hidden lg:block">
           <div className="flex items-stretch gap-0">
             {steps.map((step, i) => (
               <Reveal
                 key={step.num}
                 delay={i * 120}
                 className="flex flex-1 items-stretch"
               >
                 <div className="group relative flex-1 rounded-3xl border border-line bg-ink-900 p-8 transition-all duration-500 hover:border-lime-500/20">
                   <div className="flex items-center justify-between">
                     <span className="font-mono text-sm text-lime-500/60">
                       {step.num}
                     </span>
                     <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-ink-800 transition-all duration-500 group-hover:border-lime-500/30 group-hover:bg-lime-500/5">
                       <step.icon
                         size={22}
                         className="text-bone-400 transition-colors duration-500 group-hover:text-lime-500"
                       />
                     </div>
                   </div>
                   <h3 className="mt-8 font-display text-2xl font-bold tracking-tight text-bone-50">
                     {step.title}
                   </h3>
                   <p className="mt-2 text-sm leading-relaxed text-bone-400">
                     {step.desc}
                   </p>
                 </div>
                 {i < steps.length - 1 && (
                   <div className="flex items-center px-3">
                     <ArrowDown
                       size={20}
                       className="-rotate-90 text-bone-600"
                     />
                   </div>
                 )}
               </Reveal>
             ))}
           </div>
         </div>

         {/* Mobile: vertical flow */}
         <div className="mt-12 flex flex-col gap-4 lg:hidden">
           {steps.map((step, i) => (
             <Reveal key={step.num} delay={i * 100}>
               <div className="group relative rounded-2xl border border-line bg-ink-900 p-6 transition-all duration-500 hover:border-lime-500/20">
                 <div className="flex items-start gap-5">
                   <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-line bg-ink-800 transition-all duration-500 group-hover:border-lime-500/30 group-hover:bg-lime-500/5">
                     <step.icon
                       size={22}
                       className="text-bone-400 transition-colors duration-500 group-hover:text-lime-500"
                     />
                   </div>
                   <div className="flex-1">
                     <div className="flex items-center gap-3">
                       <span className="font-mono text-sm text-lime-500/60">
                         {step.num}
                       </span>
                       <h3 className="font-display text-xl font-bold tracking-tight text-bone-50">
                         {step.title}
                       </h3>
                     </div>
                     <p className="mt-1.5 text-sm leading-relaxed text-bone-400">
                       {step.desc}
                     </p>
                   </div>
                 </div>
               </div>
               {i < steps.length - 1 && (
                 <div className="flex justify-center py-1">
                   <ArrowDown size={18} className="text-bone-600" />
                 </div>
               )}
             </Reveal>
           ))}
         </div>
       </div>
     </section>
   );
}

export default HowItWorks
