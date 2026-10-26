"use client";

import { useRef } from "react";

export default function SpotlightCard({ children, className = "" }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={`spotlight ${className}`}
    >
      <div className="relative flex h-full flex-col">{children}</div>
    </div>
  );
}