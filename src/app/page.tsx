import React from "react";
import { DocsHeader } from "@/components/website/docs-header";
import { HeroSection } from "@/components/website/hero-section";
import Link from "next/link";
import { ArrowRight, Sparkles, Layers, LayoutGrid, Navigation } from "lucide-react";

const featuredComponents = [
  {
    title: "Spotlight Card",
    description: "Radial tracking gradient light effect for feature highlights.",
    href: "/docs/spotlight",
    icon: Sparkles,
  },
  {
    title: "Bento Grid",
    description: "Interactive multi-column card layouts with hover interactions.",
    href: "/docs/bento-grid",
    icon: LayoutGrid,
  },
  {
    title: "Stacked Card Gallery",
    description: "Stacked preview gallery with subtle rotation animations.",
    href: "/docs/stacked-gallery",
    icon: Layers,
  },
  {
    title: "Expandable Navbar",
    description: "Morphing pill navbar that transforms into a flyout panel.",
    href: "/docs/expandable-navbar",
    icon: Navigation,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <DocsHeader />
      <main className="flex-1">
        <HeroSection />

        {/* Featured Components Grid Section (Full Viewport Height) */}
        <section className="min-h-screen w-full flex flex-col justify-center items-center px-6 py-16 bg-black border-b border-neutral-900">
          <div className="max-w-6xl w-full mx-auto space-y-10">
            {/* Header */}
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Featured Components
              </h2>
              <p className="text-neutral-400 text-base">
                Explore popular ready-to-use motion primitives.
              </p>
            </div>

            {/* Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredComponents.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={idx}
                    href={item.href}
                    className="group relative p-8 rounded-2xl border border-neutral-800/80 bg-neutral-900/30 hover:bg-neutral-900/80 hover:border-neutral-700 transition duration-300 flex flex-col justify-between space-y-6 min-h-[220px]"
                  >
                    <div className="space-y-4">
                      <div className="h-12 w-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:scale-105 transition-transform">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-2xl font-bold group-hover:text-orange-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-neutral-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex items-center space-x-2 text-xs font-semibold text-orange-400 pt-2">
                      <span>View Component</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}


// import React from "react";
// import { DocsHeader } from "@/components/website/docs-header";
// import { HeroSection } from "@/components/website/hero-section";
// import Link from "next/link";
// import { ArrowRight, Sparkles, Layers, LayoutGrid, Navigation } from "lucide-react";

// const featuredComponents = [
//   {
//     title: "Spotlight Card",
//     description: "Radial tracking gradient light effect for feature highlights.",
//     href: "/docs/spotlight",
//     icon: Sparkles,
//   },
//   {
//     title: "Bento Grid",
//     description: "Interactive multi-column card layouts with hover interactions.",
//     href: "/docs/bento-grid",
//     icon: LayoutGrid,
//   },
//   {
//     title: "Stacked Card Gallery",
//     description: "Stacked preview gallery with subtle rotation animations.",
//     href: "/docs/stacked-gallery",
//     icon: Layers,
//   },
//   {
//     title: "Expandable Navbar",
//     description: "Morphing pill navbar that transforms into a flyout panel.",
//     href: "/docs/expandable-navbar",
//     icon: Navigation,
//   },
// ];

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-black text-white flex flex-col">
//       <DocsHeader />
//       <main className="flex-1">
//         <HeroSection />

//         {/* Featured Components Grid Section */}
//         <section className="max-w-6xl mx-auto px-6 py-16 space-y-8">
//           <div className="flex items-center justify-between">
//             <div>
//               <h2 className="text-2xl font-bold tracking-tight">Featured Components</h2>
//               <p className="text-neutral-400 text-sm mt-1">
//                 Explore popular ready-to-use motion primitives.
//               </p>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {featuredComponents.map((item, idx) => {
//               const Icon = item.icon;
//               return (
//                 <Link
//                   key={idx}
//                   href={item.href}
//                   className="group relative p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40 hover:bg-neutral-900/80 transition duration-200 flex flex-col justify-between space-y-4"
//                 >
//                   <div className="space-y-3">
//                     <div className="h-10 w-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
//                       <Icon className="h-5 w-5" />
//                     </div>
//                     <h3 className="text-xl font-bold group-hover:text-orange-400 transition-colors">
//                       {item.title}
//                     </h3>
//                     <p className="text-neutral-400 text-sm">{item.description}</p>
//                   </div>

//                   <div className="flex items-center space-x-1 text-xs font-semibold text-orange-400 pt-2">
//                     <span>View Component</span>
//                     <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
//                   </div>
//                 </Link>
//               );
//             })}
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }



// // import { BentoGridDemo } from "@/components/demos/bento-grid-demo";
// // import { StackedGalleryDemo } from "@/components/demos/stacked-gallery-demo";
// // import { Spotlight } from "@/components/ui/spotlight";
// // import { ComponentPreview } from "@/components/website/component-preview";
// // import { bentoGridCode, spotlightCode, stackedGalleryCode } from "@/lib/code-snippets";
// // import { ExpandableNavbarDemo } from "@/components/demos/expandable-navbar-demo";
// // import { expandableNavbarCode } from "@/lib/code-snippets";


// // export default function Home() {
// //   return (
// //     <main className="min-h-screen bg-black text-white p-8 max-w-5xl mx-auto space-y-16">
// //       {/* Header */}
// //       <div className="text-center space-y-3 pt-8">
// //         <h1 className="text-5xl font-extrabold tracking-tight">AtlanticUI</h1>
// //         <p className="text-neutral-400 text-lg">Build Smarter, Ship Faster</p>
// //       </div>

// //       {/* Component 1: Spotlight */}
// //       <section className="space-y-4">
// //         <div>
// //           <h2 className="text-2xl font-bold">1. Spotlight Card</h2>
// //           <p className="text-neutral-400 text-sm mt-1">
// //             Hover over the card to reveal a dynamic mouse-following radial gradient.
// //           </p>
// //         </div>
// //         <ComponentPreview code={spotlightCode}>
// //           <Spotlight className="max-w-md text-center">
// //             <h3 className="text-xl font-semibold text-white">Interactive Spotlight</h3>
// //             <p className="mt-2 text-sm text-neutral-400">
// //               Hover over this card to see a radial gradient light effect follow your mouse.
// //             </p>
// //           </Spotlight>
// //         </ComponentPreview>
// //       </section>

// //       {/* Component 2: Bento Grid */}
// //       <section className="space-y-4">
// //         <div>
// //           <h2 className="text-2xl font-bold">2. Bento Grid</h2>
// //           <p className="text-neutral-400 text-sm mt-1">
// //             An animated feature grid with subtle lifts and responsive column spans.
// //           </p>
// //         </div>
// //         <ComponentPreview code={bentoGridCode}>
// //           <BentoGridDemo />
// //         </ComponentPreview>
// //       </section>

// //       {/* Component 3: Stacked Card Gallery */}
// //       <section className="space-y-4">
// //         <div>
// //           <h2 className="text-2xl font-bold">3. Stacked Card Gallery</h2>
// //           <p className="text-neutral-400 text-sm mt-1">
// //             An interactive stacked image card carousel with lower gallery grid navigation.
// //           </p>
// //         </div>
// //         <ComponentPreview code={stackedGalleryCode}>
// //           <StackedGalleryDemo />
// //         </ComponentPreview>
// //       </section>

// //       {/* Component 4: Expandable Navbar */}
// //       <section className="space-y-4">
// //         <div>
// //           <h2 className="text-2xl font-bold">4. Morphing Expandable Navbar</h2>
// //           <p className="text-neutral-400 text-sm mt-1">
// //             A floating pill navigation bar that expands into a full feature panel on toggle.
// //           </p>
// //         </div>
// //         <ComponentPreview code={expandableNavbarCode}>
// //           <ExpandableNavbarDemo />
// //         </ComponentPreview>
// //       </section>

// //     </main>
// //   );
// // }

// // // import { Spotlight } from "@/components/ui/spotlight";
// // // import { ComponentPreview } from "@/components/website/component-preview";
// // // import { spotlightCode } from "@/lib/code-snippets";

// // // export default function Home() {
// // //   return (
// // //     <main className="min-h-screen bg-black text-white p-8 max-w-4xl mx-auto space-y-8">
// // //       <div>
// // //         <h1 className="text-3xl font-bold">Spotlight</h1>
// // //         <p className="text-neutral-400 mt-2">
// // //           A radial highlight effect that follows the user's cursor.
// // //         </p>
// // //       </div>

// // //       <ComponentPreview code={spotlightCode}>
// // //         <Spotlight className="max-w-md text-center">
// // //           <h3 className="text-xl font-semibold text-white">Interactive Spotlight</h3>
// // //           <p className="mt-2 text-sm text-neutral-400">
// // //             Hover over this card to see a radial gradient light effect follow your mouse.
// // //           </p>
// // //         </Spotlight>
// // //       </ComponentPreview>
// // //     </main>
// // //   );
// // // }


// // // import { BentoGridDemo } from "@/components/demos/bento-grid-demo";
// // // import { Spotlight } from "@/components/ui/spotlight";

// // // export default function Home() {
// // //   return (
// // //     <main className="flex min-h-screen flex-col items-center justify-center bg-black p-6 text-white space-y-12">
// // //       <div className="text-center space-y-2">
// // //         <h1 className="text-4xl font-bold tracking-tight">AtlanticUI Components</h1>
// // //         <p className="text-neutral-400">Animated layout primitives for Next.js & Tailwind CSS.</p>
// // //       </div>

// // //       <Spotlight className="max-w-md text-center">
// // //         <h3 className="text-xl font-semibold text-white">Spotlight Effect</h3>
// // //         <p className="mt-2 text-sm text-neutral-400">
// // //           Hover over this card to see a radial gradient light effect follow your mouse cursor.
// // //         </p>
// // //       </Spotlight>

// // //       <section className="w-full max-w-4xl">
// // //         <h2 className="text-2xl font-semibold mb-6 text-center">Bento Grid Layout</h2>
// // //         <BentoGridDemo />
// // //       </section>
// // //     </main>
// // //   );
// // // }





// // // // import { Spotlight } from "@/components/ui/spotlight";

// // // // export default function Home() {
// // // //   return (
// // // //     <main className="flex min-h-screen flex-col items-center justify-center bg-black p-6 text-white">
// // // //       <h1 className="mb-8 text-4xl font-bold tracking-tight">AtlanticUI</h1>
      
// // // //       <Spotlight className="max-w-md text-center">
// // // //         <h3 className="text-xl font-semibold text-white">Spotlight Effect</h3>
// // // //         <p className="mt-2 text-sm text-neutral-400">
// // // //           Hover over this card to see a radial gradient light effect follow your mouse cursor.
// // // //         </p>
// // // //       </Spotlight>
// // // //     </main>
// // // //   );
// // // // }