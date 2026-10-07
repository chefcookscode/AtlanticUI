import React from "react";
import { MorphingDropdownNav, DropdownSection } from "@/components/ui/morphing-dropdown-nav";
import { Shield, Zap, Layers, Sparkles, Code2, Rocket } from "lucide-react";

const sections: DropdownSection[] = [
  {
    id: "products",
    label: "Products",
    content: (
      <div className="w-80 space-y-4">
        <h4 className="text-xs font-mono font-semibold uppercase text-neutral-400 tracking-wider">
          Platform Primitives
        </h4>
        <div className="grid grid-cols-1 gap-3">
          <a href="#" className="flex items-start space-x-3 p-2 rounded-lg hover:bg-neutral-800/60 transition">
            <Zap className="h-5 w-5 text-orange-400 mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-semibold text-white">Motion Engine</p>
              <p className="text-xs text-neutral-400">Spring physics tuned for 60FPS UI.</p>
            </div>
          </a>
          <a href="#" className="flex items-start space-x-3 p-2 rounded-lg hover:bg-neutral-800/60 transition">
            <Shield className="h-5 w-5 text-orange-400 mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-semibold text-white">Type Safe</p>
              <p className="text-xs text-neutral-400">Strict TypeScript interface guarantees.</p>
            </div>
          </a>
        </div>
      </div>
    ),
  },
  {
    id: "resources",
    label: "Resources",
    content: (
      <div className="w-[420px] space-y-4">
        <h4 className="text-xs font-mono font-semibold uppercase text-neutral-400 tracking-wider">
          Documentation & Community
        </h4>
        <div className="grid grid-cols-2 gap-3">
          <a href="#" className="flex items-start space-x-2.5 p-2 rounded-lg hover:bg-neutral-800/60 transition">
            <Code2 className="h-4 w-4 text-orange-400 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-white">Component Registry</p>
              <p className="text-xs text-neutral-400">Copy-paste primitives.</p>
            </div>
          </a>
          <a href="#" className="flex items-start space-x-2.5 p-2 rounded-lg hover:bg-neutral-800/60 transition">
            <Rocket className="h-4 w-4 text-orange-400 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-white">Starters</p>
              <p className="text-xs text-neutral-400">Next.js App Router templates.</p>
            </div>
          </a>
        </div>
      </div>
    ),
  },
];

export function MorphingDropdownDemo() {
  return (
    <div className="w-full py-12 flex justify-center items-start min-h-[380px]">
      <MorphingDropdownNav
        sections={sections}
        actions={
          <button className="px-3.5 py-1.5 text-xs font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-lg transition">
            Get Started
          </button>
        }
      />
    </div>
  );
}