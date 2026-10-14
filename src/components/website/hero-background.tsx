"use client";

import React, { useEffect, useRef } from "react";

interface Pulse {
  h: boolean;
  x: number;
  y: number;
  v: number;
}

export function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let mouseX = -999;
    let mouseY = -999;
    let isHovered = false;

    const gridSize = 40;
    const pulses: Pulse[] = [];

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const handleResize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const dpr = window.devicePixelRatio || 1;
      width = parent.clientWidth;
      height = parent.clientHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      isHovered = true;
    };

    const handleMouseLeave = () => {
      isHovered = false;
    };

    const parentEl = canvas.parentElement;
    if (parentEl) {
      parentEl.addEventListener("mousemove", handleMouseMove);
      parentEl.addEventListener("mouseleave", handleMouseLeave);
    }

    const spawnPulse = () => {
      const isHorizontal = Math.random() < 0.5;
      pulses.push({
        h: isHorizontal,
        x: isHorizontal
          ? -60
          : Math.round((Math.random() * width) / gridSize) * gridSize,
        y: isHorizontal
          ? Math.round((Math.random() * height) / gridSize) * gridSize
          : -60,
        v: 1.5 + Math.random() * 2,
      });
    };

    const drawGlow = (x: number, y: number, radius: number, alpha: number) => {
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
      gradient.addColorStop(0, `rgba(255, 106, 0, ${alpha})`); // Orange Glow
      gradient.addColorStop(1, "rgba(255, 106, 0, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);
    };

    const render = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      let targetX = mouseX;
      let targetY = mouseY;
      if (!isHovered) {
        targetX = width / 2 + Math.cos(time * 0.0006) * width * 0.35;
        targetY = height / 2 + Math.sin(time * 0.0009) * height * 0.3;
      }

      // 1. Static base grid
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
      ctx.beginPath();
      for (let i = 0; i <= width; i += gridSize) {
        ctx.moveTo(i + 0.5, 0);
        ctx.lineTo(i + 0.5, height);
      }
      for (let j = 0; j <= height; j += gridSize) {
        ctx.moveTo(0, j + 0.5);
        ctx.lineTo(width, j + 0.5);
      }
      ctx.stroke();

      // 2. Cursor proximity illuminated grid (Orange)
      const cursorGradient = ctx.createRadialGradient(
        targetX,
        targetY,
        0,
        targetX,
        targetY,
        180
      );
      cursorGradient.addColorStop(0, "rgba(255, 106, 0, 0.75)");
      cursorGradient.addColorStop(1, "rgba(255, 106, 0, 0)");

      ctx.strokeStyle = cursorGradient;
      ctx.beginPath();
      for (let i = 0; i <= width; i += gridSize) {
        ctx.moveTo(i + 0.5, 0);
        ctx.lineTo(i + 0.5, height);
      }
      for (let j = 0; j <= height; j += gridSize) {
        ctx.moveTo(0, j + 0.5);
        ctx.lineTo(width, j + 0.5);
      }
      ctx.stroke();

      // Radial ambient orange glow
      drawGlow(targetX, targetY, 220, 0.15);

      // 3. Traveling line pulses (Orange)
      if (!prefersReducedMotion && Math.random() < 0.04) {
        spawnPulse();
      }

      for (let k = pulses.length - 1; k >= 0; k--) {
        const p = pulses[k];
        if (p.h) p.x += p.v;
        else p.y += p.v;

        const tailX = p.h ? p.x - 70 : p.x;
        const tailY = p.h ? p.y : p.y - 70;

        const lineGradient = ctx.createLinearGradient(tailX, tailY, p.x, p.y);
        lineGradient.addColorStop(0, "rgba(255, 106, 0, 0)");
        lineGradient.addColorStop(1, "rgba(255, 140, 40, 0.9)");

        ctx.strokeStyle = lineGradient;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(tailX + 0.5, tailY + 0.5);
        ctx.lineTo(p.x + 0.5, p.y + 0.5);
        ctx.stroke();

        if (p.x > width + 80 || p.y > height + 80) {
          pulses.splice(k, 1);
        }
      }

      animationFrameId = requestAnimationFrame((t) => render(t));
    };

    animationFrameId = requestAnimationFrame((t) => render(t));

    return () => {
      window.removeEventListener("resize", handleResize);
      if (parentEl) {
        parentEl.removeEventListener("mousemove", handleMouseMove);
        parentEl.removeEventListener("mouseleave", handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}


// "use client";

// import React, { useEffect, useRef } from "react";

// interface Pulse {
//   h: boolean;
//   x: number;
//   y: number;
//   v: number;
// }

// export function HeroBackground() {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     let animationFrameId: number;
//     let width = 0;
//     let height = 0;
//     let mouseX = -999;
//     let mouseY = -999;
//     let isHovered = false;

//     const gridSize = 40;
//     const pulses: Pulse[] = [];

//     const prefersReducedMotion = window.matchMedia(
//       "(prefers-reduced-motion: reduce)"
//     ).matches;

//     const handleResize = () => {
//       const parent = canvas.parentElement;
//       if (!parent) return;

//       const dpr = window.devicePixelRatio || 1;
//       width = parent.clientWidth;
//       height = parent.clientHeight;

//       canvas.width = width * dpr;
//       canvas.height = height * dpr;
//       ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);

//     const handleMouseMove = (e: MouseEvent) => {
//       const rect = canvas.getBoundingClientRect();
//       mouseX = e.clientX - rect.left;
//       mouseY = e.clientY - rect.top;
//       isHovered = true;
//     };

//     const handleMouseLeave = () => {
//       isHovered = false;
//     };

//     const parentEl = canvas.parentElement;
//     if (parentEl) {
//       parentEl.addEventListener("mousemove", handleMouseMove);
//       parentEl.addEventListener("mouseleave", handleMouseLeave);
//     }

//     const spawnPulse = () => {
//       const isHorizontal = Math.random() < 0.5;
//       pulses.push({
//         h: isHorizontal,
//         x: isHorizontal
//           ? -60
//           : Math.round((Math.random() * width) / gridSize) * gridSize,
//         y: isHorizontal
//           ? Math.round((Math.random() * height) / gridSize) * gridSize
//           : -60,
//         v: 1.5 + Math.random() * 2,
//       });
//     };

//     const drawGlow = (x: number, y: number, radius: number, alpha: number) => {
//       const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
//       gradient.addColorStop(0, `rgba(225, 225, 225, ${alpha})`); // Soft Silver / Grey Glow
//       gradient.addColorStop(1, "rgba(225, 225, 225, 0)");
//       ctx.fillStyle = gradient;
//       ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);
//     };

//     const render = (time: number) => {
//       ctx.clearRect(0, 0, width, height);

//       let targetX = mouseX;
//       let targetY = mouseY;
//       if (!isHovered) {
//         targetX = width / 2 + Math.cos(time * 0.0006) * width * 0.35;
//         targetY = height / 2 + Math.sin(time * 0.0009) * height * 0.3;
//       }

//       // 1. Static base grid (Dark Grey)
//       ctx.lineWidth = 1;
//       ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
//       ctx.beginPath();
//       for (let i = 0; i <= width; i += gridSize) {
//         ctx.moveTo(i + 0.5, 0);
//         ctx.lineTo(i + 0.5, height);
//       }
//       for (let j = 0; j <= height; j += gridSize) {
//         ctx.moveTo(0, j + 0.5);
//         ctx.lineTo(width, j + 0.5);
//       }
//       ctx.stroke();

//       // 2. Cursor proximity illuminated grid (Light Grey / White)
//       const cursorGradient = ctx.createRadialGradient(
//         targetX,
//         targetY,
//         0,
//         targetX,
//         targetY,
//         180
//       );
//       cursorGradient.addColorStop(0, "rgba(200, 200, 200, 0.6)"); // Soft Grey stroke
//       cursorGradient.addColorStop(1, "rgba(200, 200, 200, 0)");

//       ctx.strokeStyle = cursorGradient;
//       ctx.beginPath();
//       for (let i = 0; i <= width; i += gridSize) {
//         ctx.moveTo(i + 0.5, 0);
//         ctx.lineTo(i + 0.5, height);
//       }
//       for (let j = 0; j <= height; j += gridSize) {
//         ctx.moveTo(0, j + 0.5);
//         ctx.lineTo(width, j + 0.5);
//       }
//       ctx.stroke();

//       // Radial ambient glow
//       drawGlow(targetX, targetY, 220, 0.12);

//       // 3. Traveling line pulses (Light Grey)
//       if (!prefersReducedMotion && Math.random() < 0.04) {
//         spawnPulse();
//       }

//       for (let k = pulses.length - 1; k >= 0; k--) {
//         const p = pulses[k];
//         if (p.h) p.x += p.v;
//         else p.y += p.v;

//         const tailX = p.h ? p.x - 70 : p.x;
//         const tailY = p.h ? p.y : p.y - 70;

//         const lineGradient = ctx.createLinearGradient(tailX, tailY, p.x, p.y);
//         lineGradient.addColorStop(0, "rgba(200, 200, 200, 0)");
//         lineGradient.addColorStop(1, "rgba(240, 240, 240, 0.8)");

//         ctx.strokeStyle = lineGradient;
//         ctx.lineWidth = 1.5;
//         ctx.beginPath();
//         ctx.moveTo(tailX + 0.5, tailY + 0.5);
//         ctx.lineTo(p.x + 0.5, p.y + 0.5);
//         ctx.stroke();

//         if (p.x > width + 80 || p.y > height + 80) {
//           pulses.splice(k, 1);
//         }
//       }

//       animationFrameId = requestAnimationFrame((t) => render(t));
//     };

//     animationFrameId = requestAnimationFrame((t) => render(t));

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       if (parentEl) {
//         parentEl.removeEventListener("mousemove", handleMouseMove);
//         parentEl.removeEventListener("mouseleave", handleMouseLeave);
//       }
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="absolute inset-0 w-full h-full pointer-events-none"
//     />
//   );
// }



// // "use client";

// // import React, { useEffect, useRef } from "react";

// // interface Pulse {
// //   h: boolean;
// //   x: number;
// //   y: number;
// //   v: number;
// // }

// // export function HeroBackground() {
// //   const canvasRef = useRef<HTMLCanvasElement | null>(null);

// //   useEffect(() => {
// //     const canvas = canvasRef.current;
// //     if (!canvas) return;

// //     const ctx = canvas.getContext("2d");
// //     if (!ctx) return;

// //     let animationFrameId: number;
// //     let width = 0;
// //     let height = 0;
// //     let mouseX = -999;
// //     let mouseY = -999;
// //     let isHovered = false;

// //     const gridSize = 40;
// //     const pulses: Pulse[] = [];

// //     // Check for reduced motion preference
// //     const prefersReducedMotion = window.matchMedia(
// //       "(prefers-reduced-motion: reduce)"
// //     ).matches;

// //     // Resize canvas with pixel ratio scaling
// //     const handleResize = () => {
// //       const parent = canvas.parentElement;
// //       if (!parent) return;

// //       const dpr = window.devicePixelRatio || 1;
// //       width = parent.clientWidth;
// //       height = parent.clientHeight;

// //       canvas.width = width * dpr;
// //       canvas.height = height * dpr;
// //       ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
// //     };

// //     handleResize();
// //     window.addEventListener("resize", handleResize);

// //     // Track cursor relative to section container
// //     const handleMouseMove = (e: MouseEvent) => {
// //       const rect = canvas.getBoundingClientRect();
// //       mouseX = e.clientX - rect.left;
// //       mouseY = e.clientY - rect.top;
// //       isHovered = true;
// //     };

// //     const handleMouseLeave = () => {
// //       isHovered = false;
// //     };

// //     const parentEl = canvas.parentElement;
// //     if (parentEl) {
// //       parentEl.addEventListener("mousemove", handleMouseMove);
// //       parentEl.addEventListener("mouseleave", handleMouseLeave);
// //     }

// //     const spawnPulse = () => {
// //       const isHorizontal = Math.random() < 0.5;
// //       pulses.push({
// //         h: isHorizontal,
// //         x: isHorizontal
// //           ? -60
// //           : Math.round((Math.random() * width) / gridSize) * gridSize,
// //         y: isHorizontal
// //           ? Math.round((Math.random() * height) / gridSize) * gridSize
// //           : -60,
// //         v: 1.5 + Math.random() * 2,
// //       });
// //     };

// //     const drawGlow = (x: number, y: number, radius: number, alpha: number) => {
// //       const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
// //       gradient.addColorStop(0, `rgba(59, 130, 246, ${alpha})`); // Atlantic Blue glow
// //       gradient.addColorStop(1, "rgba(59, 130, 246, 0)");
// //       ctx.fillStyle = gradient;
// //       ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);
// //     };

// //     const render = (time: number) => {
// //       ctx.clearRect(0, 0, width, height);

// //       // Smooth default target if cursor isn't active
// //       let targetX = mouseX;
// //       let targetY = mouseY;
// //       if (!isHovered) {
// //         targetX = width / 2 + Math.cos(time * 0.0006) * width * 0.35;
// //         targetY = height / 2 + Math.sin(time * 0.0009) * height * 0.3;
// //       }

// //       // 1. Static base grid
// //       ctx.lineWidth = 1;
// //       ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
// //       ctx.beginPath();
// //       for (let i = 0; i <= width; i += gridSize) {
// //         ctx.moveTo(i + 0.5, 0);
// //         ctx.lineTo(i + 0.5, height);
// //       }
// //       for (let j = 0; j <= height; j += gridSize) {
// //         ctx.moveTo(0, j + 0.5);
// //         ctx.lineTo(width, j + 0.5);
// //       }
// //       ctx.stroke();

// //       // 2. Cursor proximity illuminated grid
// //       const cursorGradient = ctx.createRadialGradient(
// //         targetX,
// //         targetY,
// //         0,
// //         targetX,
// //         targetY,
// //         180
// //       );
// //       cursorGradient.addColorStop(0, "rgba(59, 130, 246, 0.75)"); // Electric Blue stroke
// //       cursorGradient.addColorStop(1, "rgba(59, 130, 246, 0)");

// //       ctx.strokeStyle = cursorGradient;
// //       ctx.beginPath();
// //       for (let i = 0; i <= width; i += gridSize) {
// //         ctx.moveTo(i + 0.5, 0);
// //         ctx.lineTo(i + 0.5, height);
// //       }
// //       for (let j = 0; j <= height; j += gridSize) {
// //         ctx.moveTo(0, j + 0.5);
// //         ctx.lineTo(width, j + 0.5);
// //       }
// //       ctx.stroke();

// //       // Radial ambient glow
// //       drawGlow(targetX, targetY, 220, 0.15);

// //       // 3. Traveling electric pulses along grid lines
// //       if (!prefersReducedMotion && Math.random() < 0.04) {
// //         spawnPulse();
// //       }

// //       for (let k = pulses.length - 1; k >= 0; k--) {
// //         const p = pulses[k];
// //         if (p.h) p.x += p.v;
// //         else p.y += p.v;

// //         const tailX = p.h ? p.x - 70 : p.x;
// //         const tailY = p.h ? p.y : p.y - 70;

// //         const lineGradient = ctx.createLinearGradient(tailX, tailY, p.x, p.y);
// //         lineGradient.addColorStop(0, "rgba(59, 130, 246, 0)");
// //         lineGradient.addColorStop(1, "rgba(96, 165, 250, 0.9)");

// //         ctx.strokeStyle = lineGradient;
// //         ctx.lineWidth = 1.5;
// //         ctx.beginPath();
// //         ctx.moveTo(tailX + 0.5, tailY + 0.5);
// //         ctx.lineTo(p.x + 0.5, p.y + 0.5);
// //         ctx.stroke();

// //         if (p.x > width + 80 || p.y > height + 80) {
// //           pulses.splice(k, 1);
// //         }
// //       }

// //       animationFrameId = requestAnimationFrame((t) => render(t));
// //     };

// //     animationFrameId = requestAnimationFrame((t) => render(t));

// //     return () => {
// //       window.removeEventListener("resize", handleResize);
// //       if (parentEl) {
// //         parentEl.removeEventListener("mousemove", handleMouseMove);
// //         parentEl.removeEventListener("mouseleave", handleMouseLeave);
// //       }
// //       cancelAnimationFrame(animationFrameId);
// //     };
// //   }, []);

// //   return (
// //     <canvas
// //       ref={canvasRef}
// //       className="absolute inset-0 w-full h-full pointer-events-none"
// //     />
// //   );
// // }