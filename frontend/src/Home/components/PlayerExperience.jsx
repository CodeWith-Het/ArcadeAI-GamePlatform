import Reveal from "./Reveal";

const PlayerExperience = () => {
 return (
   <section id="feedback" className="relative py-28 sm:py-36">
     <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-500/[0.04] blur-[120px]" />

     <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
       <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
         {/* Text */}
         <Reveal>
           <div>
             <span className="font-mono text-xs uppercase tracking-ultra text-lime-500/60">
               The Experience
             </span>
             <h2 className="mt-5 font-display text-3xl font-bold leading-[1.05] tracking-tighter text-bone-50 sm:text-4xl lg:text-5xl">
               YOU DON'T LEARN
               <br />
               THE CONTROLS.
               <br />
               <span className="text-gradient-lime">
                 YOU BECOME THE CONTROLLER.
               </span>
             </h2>
             <p className="mt-6 max-w-md text-lg leading-relaxed text-bone-400">
               Arcade.AI turns movement into gameplay so interaction feels
               immediate, physical and natural.
             </p>

             <div className="mt-8 flex flex-col gap-4">
               <div className="flex items-center gap-3">
                 <div className="h-px w-8 bg-lime-500/50" />
                 <span className="text-sm text-bone-200">
                   Zero setup. Just open and play.
                 </span>
               </div>
               <div className="flex items-center gap-3">
                 <div className="h-px w-8 bg-lime-500/50" />
                 <span className="text-sm text-bone-200">
                   Your body is the only hardware.
                 </span>
               </div>
               <div className="flex items-center gap-3">
                 <div className="h-px w-8 bg-lime-500/50" />
                 <span className="text-sm text-bone-200">
                   Movement becomes the language of play.
                 </span>
               </div>
             </div>
           </div>
         </Reveal>

         {/* Visual */}
         <Reveal delay={150}>
           <div className="relative">
             <div className="relative overflow-hidden rounded-3xl border border-line bg-ink-900">
               <div className="relative aspect-[4/3]">
                 <img
                   src="https://images.pexels.com/photos/5488366/pexels-photo-5488366.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                   alt="Person immersed in motion gaming"
                   className="absolute inset-0 h-full w-full object-cover opacity-50"
                   style={{
                     filter: "contrast(1.1) brightness(0.7) saturate(0.7)",
                   }}
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-ink-950/40" />
                 <div className="absolute inset-0 bg-gradient-to-r from-ink-950/40 to-transparent" />

                 {/* Corner brackets */}
                 <div className="absolute left-4 top-4 h-5 w-5 border-l-2 border-t-2 border-lime-500/40 rounded-tl" />
                 <div className="absolute right-4 top-4 h-5 w-5 border-r-2 border-t-2 border-lime-500/40 rounded-tr" />
                 <div className="absolute bottom-4 left-4 h-5 w-5 border-b-2 border-l-2 border-lime-500/40 rounded-bl" />
                 <div className="absolute bottom-4 right-4 h-5 w-5 border-b-2 border-r-2 border-lime-500/40 rounded-br" />

                 {/* Label */}
                 <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-lg border border-line bg-ink-900/70 px-3 py-1.5 backdrop-blur-md">
                   <div className="h-1.5 w-1.5 rounded-full bg-lime-500 animate-pulse-soft" />
                   <span className="font-mono text-[10px] uppercase tracking-ultra text-bone-200">
                     Player · Immersed
                   </span>
                 </div>
               </div>
             </div>

             {/* Floating stat card */}
             <div className="absolute -right-4 -top-4 rounded-2xl border border-line bg-ink-800/90 p-4 backdrop-blur-md sm:-right-6">
               <span className="font-mono text-[10px] uppercase tracking-ultra text-bone-400">
                 Latency
               </span>
               <div className="mt-1 flex items-baseline gap-1">
                 <span className="font-display text-2xl font-bold text-lime-500">
                   12
                 </span>
                 <span className="font-mono text-xs text-bone-400">ms</span>
               </div>
             </div>
           </div>
         </Reveal>
       </div>
     </div>
   </section>
 );
}

export default PlayerExperience
