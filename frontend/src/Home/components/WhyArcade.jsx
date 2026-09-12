import { Hand, Globe, Eye } from "lucide-react";
import Reveal from "./Reveal";

const features = [
  {
    num: "01",
    icon: Hand,
    title: "PLAY NATURALLY",
    desc: "Turn hand and body movement into gameplay.",
  },
  {
    num: "02",
    icon: Globe,
    title: "BUILT FOR THE BROWSER",
    desc: "No specialized hardware or traditional controller required.",
  },
  {
    num: "03",
    icon: Eye,
    title: "POWERED BY COMPUTER VISION",
    desc: "Real-time vision interprets movement and converts it into game input.",
  },
];


const WhyArcade = () => {
   return (
     <section id="about" className="relative py-28 sm:py-36">
       <div className="absolute left-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-lime-500/[0.04] blur-[100px]" />

       <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
         <Reveal>
           <div className="max-w-3xl">
             <span className="font-mono text-xs uppercase tracking-ultra text-lime-500/60">
               The Platform
             </span>
             <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tighter text-bone-50 sm:text-5xl lg:text-6xl">
               WHY ARCADE.AI?
             </h2>
             <p className="mt-5 text-xl leading-relaxed text-bone-400 sm:text-2xl">
               Games should respond to people, not just buttons.
             </p>
           </div>
         </Reveal>

         <div className="mt-16 grid gap-6 lg:grid-cols-3">
           {features.map((f, i) => (
             <Reveal key={f.num} delay={i * 150}>
               <div className="group relative h-full overflow-hidden rounded-3xl border border-line bg-ink-900 p-8 transition-all duration-500 hover:border-lime-500/20 sm:p-10">
                 {/* Hover glow */}
                 <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-lime-500/0 blur-[60px] transition-all duration-700 group-hover:bg-lime-500/[0.08]" />

                 <div className="relative">
                   <div className="flex items-center justify-between">
                     <span className="font-mono text-sm text-lime-500/60">
                       {f.num}
                     </span>
                     <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-ink-800 transition-all duration-500 group-hover:border-lime-500/30 group-hover:bg-lime-500/5">
                       <f.icon
                         size={22}
                         className="text-bone-400 transition-colors duration-500 group-hover:text-lime-500"
                       />
                     </div>
                   </div>

                   <h3 className="mt-8 font-display text-2xl font-bold leading-tight tracking-tight text-bone-50">
                     {f.title}
                   </h3>
                   <p className="mt-3 text-base leading-relaxed text-bone-400">
                     {f.desc}
                   </p>

                   <div className="mt-8 flex items-center gap-2">
                     <div className="h-px flex-1 bg-line transition-all duration-500 group-hover:w-16 group-hover:bg-lime-500/30" />
                     <span className="font-mono text-[10px] uppercase tracking-ultra text-bone-600 transition-colors duration-500 group-hover:text-lime-500/60">
                       Learn more
                     </span>
                   </div>
                 </div>
               </div>
             </Reveal>
           ))}
         </div>
       </div>
     </section>
   );
}

export default WhyArcade

