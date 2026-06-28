"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const HALF = 400;
    const onMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${e.clientX - HALF}px, ${e.clientY - HALF}px)`;
      }
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[1] w-[800px] h-[800px] rounded-full"
      style={{
        background: "radial-gradient(circle, var(--glow) 0%, transparent 70%)",
        willChange: "transform",
      }}
    />
  );
}
