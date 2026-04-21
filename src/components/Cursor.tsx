"use client";

import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Hide default OS cursor globally
    document.documentElement.style.cursor = "none";

    const moveCursor = (e: MouseEvent) => {
      const cursor = cursorRef.current;
      if (!cursor) return;

      cursor.style.left = (e.clientX - 7) + "px";
      cursor.style.top = (e.clientY - 7) + "px";

      // Detect if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('button, a, input, textarea, [role="button"]');
      setIsHovering(!!isInteractive);
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.documentElement.style.cursor = "";
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`fixed pointer-events-none z-[9999] transition-transform duration-300 ${isHovering ? 'scale-[1.2]' : 'scale-100'}`}
      style={{
        width: 35,
        height: 35,
        willChange: "left, top, transform"
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        style={{ 
          filter: isHovering 
            ? "drop-shadow(0px 0px 20px rgba(220, 0, 255, 0.8)) drop-shadow(0px 0px 40px rgba(0, 255, 255, 0.4))"
            : "drop-shadow(0px 0px 10px rgba(220, 0, 255, 0.4))" 
        }}
      >
        <defs>
          <linearGradient id="borderGrad" x1="20%" y1="20%" x2="70%" y2="70%">
            <stop offset="0%" stopColor="#ffee00" />    {/* Yellow Tip */}
            <stop offset="25%" stopColor="#ff22ff" />   {/* Hot Pink */}
            <stop offset="60%" stopColor="#cc00ff" />   {/* Deep Violet */}
            <stop offset="100%" stopColor="#5500aa" />  {/* Dark Purple Base */}
          </linearGradient>
          <linearGradient id="innerGrad" x1="20%" y1="20%" x2="80%" y2="80%">
            <stop offset="0%" stopColor="#090013" />
            <stop offset="50%" stopColor="#17002b" />
            <stop offset="100%" stopColor="#05000a" />
          </linearGradient>
        </defs>

        {/* 1. 3D Depth Shadow Block (shifted right and down for 3D extrusion) */}
        <path
          d="M 20 20 L 75 45 L 42 52 L 32 80 Z"
          fill="#3b006e"
          stroke="#3b006e"
          strokeWidth="10"
          strokeLinejoin="round"
          strokeLinecap="round"
          transform="translate(2, 6)"
        />

        {/* 2. Main Dark Arrow Face */}
        <path
          d="M 20 20 L 75 45 L 42 52 L 32 80 Z"
          fill="url(#innerGrad)"
          stroke="#090013"
          strokeWidth="8"
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        {/* 3. Subtle Holographic Wireframe Graphic lines */}
        <g stroke="#b833ff" strokeWidth="0.8" opacity="0.4" fill="none">
          <path d="M 33 30 Q 55 35 60 40" />
          <path d="M 35 40 Q 55 45 65 43" />
          <path d="M 30 50 Q 45 50 50 48" />
          <path d="M 28 40 Q 38 45 35 65" />
        </g>

        {/* 4. Vivid Neon Smooth Border Ring */}
        <path
          d="M 20 20 L 75 45 L 42 52 L 32 80 Z"
          fill="none"
          stroke="url(#borderGrad)"
          strokeWidth="4"
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        {/* 5. Vivid Crisp Inner Brightness line */}
        <path
          d="M 20 20 L 75 45 L 42 52 L 32 80 Z"
          fill="none"
          stroke="#ffaaf5"
          strokeWidth="1.2"
          strokeLinejoin="round"
          strokeLinecap="round"
          opacity="0.9"
        />

        {/* 6. Gold Tip */}
        <circle 
          cx="20" cy="20" r="2.5" 
          fill="#fffde0" 
          style={{ filter: "drop-shadow(0 0 5px #ffee00) drop-shadow(0 0 10px #ffee00)" }} 
        />
      </svg>
    </div>
  );
}
