"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export interface DropdownSection {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface MorphingDropdownNavProps {
  brandLogo?: React.ReactNode;
  sections: DropdownSection[];
  actions?: React.ReactNode;
  className?: string;
}

export function MorphingDropdownNav({
  brandLogo = <span className="text-lg font-bold tracking-tight text-white">Atlantic</span>,
  sections,
  actions,
  className,
}: MorphingDropdownNavProps) {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [prevIndex, setPrevIndex] = useState<number | null>(null);

  const navRef = useRef<HTMLDivElement>(null);
  const activeSection = sections.find((s) => s.id === activeTab);

  const handleTabHover = (id: string) => {
    const currentIndex = sections.findIndex((s) => s.id === id);
    if (prevIndex !== null && currentIndex !== prevIndex) {
      setDirection(currentIndex > prevIndex ? "right" : "left");
    }
    setPrevIndex(currentIndex);
    setActiveTab(id);
  };

  return (
    <nav
      ref={navRef}
      onMouseLeave={() => {
        setActiveTab(null);
        setPrevIndex(null);
      }}
      className={cn(
        "relative z-50 flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-950/80 px-6 py-3 backdrop-blur-md text-white shadow-xl max-w-4xl mx-auto",
        className
      )}
    >
      {/* Brand Logo */}
      <div className="flex items-center space-x-2">{brandLogo}</div>

      {/* Navigation Items */}
      <div className="flex items-center space-x-1">
        {sections.map((section) => (
          <button
            key={section.id}
            onMouseEnter={() => handleTabHover(section.id)}
            className={cn(
              "px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-150",
              activeTab === section.id
                ? "text-white bg-neutral-900"
                : "text-neutral-400 hover:text-neutral-200"
            )}
          >
            {section.label}
          </button>
        ))}
      </div>

      {/* Right CTA Actions */}
      <div className="flex items-center space-x-3">{actions}</div>

      {/* Dynamic Morphing Popover */}
      <AnimatePresence>
        {activeSection && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
          >
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/95 p-6 shadow-2xl backdrop-blur-xl text-neutral-200"
            >
              <motion.div
                key={activeTab}
                initial={{
                  opacity: 0,
                  x: direction === "right" ? 15 : -15,
                }}
                animate={{ opacity: 1, x: 0 }}
                exit={{
                  opacity: 0,
                  x: direction === "right" ? -15 : 15,
                }}
                transition={{ duration: 0.18 }}
              >
                {activeSection.content}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}