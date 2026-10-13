"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Terminal, ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[calc(100vh-4rem)] flex flex-col justify-between items-center overflow-hidden border-b border-neutral-800 bg-black text-white px-6 py-8">
      {/* Background Radial Glow & Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.15)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      {/* Top spacer to balance vertical flex centering */}
      <div className="h-4" />

      {/* Main Content Center */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 my-auto">
        {/* Version Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-mono text-orange-400 backdrop-blur-md"
        >
          <Sparkles className="h-3.5 w-3.5" />
          <span>Introducing AtlanticUI v0.1.0</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-500"
        >
          Elevate Your Web UI with <br />
          <span className="text-orange-500">Fluid Animations</span> & Motion
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto text-base sm:text-lg text-neutral-400 font-normal leading-relaxed"
        >
          A curated collection of copy-paste React, Framer Motion, and Tailwind CSS components designed to make modern landing pages feel alive.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
        >
          <Link
            href="/docs/spotlight"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 rounded-xl bg-orange-500 hover:bg-orange-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition duration-200"
          >
            <span>Explore Components</span>
            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            href="https://github.com/chefcookscode/AtlanticUI"
            target="_blank"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 px-6 py-3.5 text-sm font-semibold text-neutral-200 transition duration-200"
          >
            <Terminal className="h-4 w-4 font-mono text-neutral-400" />
            <span>GitHub Repository</span>
          </Link>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ opacity: { delay: 0.5 }, y: { repeat: Infinity, duration: 2 } }}
        className="relative z-10 text-xs font-mono tracking-widest text-neutral-500 uppercase flex flex-col items-center space-y-1 cursor-pointer pt-4"
      >
        <span>SCROLL DOWN</span>
        <ChevronDown className="h-4 w-4 text-orange-500" />
      </motion.div>
    </section>
  );
}


// "use client";

// import React from "react";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { ArrowRight, Sparkles, Terminal } from "lucide-react";

// export function HeroSection() {
//   return (
//     <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 border-b border-neutral-800 bg-black text-white">
//       {/* Background Radial Glow & Grid Pattern */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.12)_0%,transparent_65%)] pointer-events-none" />
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

//       <div className="relative max-w-5xl mx-auto px-6 text-center space-y-8">
//         {/* Version Badge */}
//         <motion.div
//           initial={{ opacity: 0, y: 15 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="inline-flex items-center space-x-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3.5 py-1.5 text-xs font-mono text-orange-400 backdrop-blur-md"
//         >
//           <Sparkles className="h-3.5 w-3.5" />
//           <span>Introducing AtlanticUI v0.1.0</span>
//         </motion.div>

//         {/* Main Headline */}
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.1 }}
//           className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-500"
//         >
//           Elevate Your Web UI with <br />
//           <span className="text-orange-500">Fluid Animations</span> & Motion
//         </motion.h1>

//         {/* Subtitle */}
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="max-w-2xl mx-auto text-base sm:text-lg text-neutral-400 font-normal leading-relaxed"
//         >
//           A curated collection of copy-paste React, Framer Motion, and Tailwind CSS components designed to make modern landing pages feel alive.
//         </motion.p>

//         {/* CTA Buttons */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.3 }}
//           className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
//         >
//           <Link
//             href="/docs/spotlight"
//             className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 rounded-xl bg-orange-500 hover:bg-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition duration-200"
//           >
//             <span>Explore Components</span>
//             <ArrowRight className="h-4 w-4" />
//           </Link>

//           <Link
//             href="https://github.com/chefcookscode/AtlanticUI"
//             target="_blank"
//             className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 px-6 py-3 text-sm font-semibold text-neutral-200 transition duration-200"
//           >
//             <Terminal className="h-4 w-4 font-mono text-neutral-400" />
//             <span>GitHub Repository</span>
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// }