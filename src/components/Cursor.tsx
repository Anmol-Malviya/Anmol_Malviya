"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const outerRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const isHoveringRef = useRef(false);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const curX = useRef(0);
  const curY = useRef(0);
  const rafId = useRef<number>(0);

  useEffect(() => {
    // Hide cursor on touch devices
    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) return;

    document.documentElement.style.cursor = "none";

    const onMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;

      const target = e.target as HTMLElement;
      isHoveringRef.current = !!target.closest('button, a, input, textarea, [role="button"]');

      // Move the small dot immediately for snappiness
      const dot = dotRef.current;
      if (dot) {
        dot.style.left = e.clientX - 3 + "px";
        dot.style.top = e.clientY - 3 + "px";
      }
    };

    const lerp = (a: number, b: number, n: number) => a + (b - a) * n;

    const SIZE = 35;

    const animate = () => {
      curX.current = lerp(curX.current, mouseX.current, 0.12);
      curY.current = lerp(curY.current, mouseY.current, 0.12);

      const outer = outerRef.current;
      if (outer) {
        outer.style.left = curX.current - SIZE / 2 + "px";
        outer.style.top = curY.current - SIZE / 2 + "px";

        const hovering = isHoveringRef.current;
        outer.style.transform = hovering ? "scale(1.5)" : "scale(1)";
        (outer.children[0] as SVGElement).style.filter = hovering
          ? "drop-shadow(0px 0px 20px rgba(220, 0, 255, 0.8)) drop-shadow(0px 0px 40px rgba(0, 255, 255, 0.4))"
          : "drop-shadow(0px 0px 10px rgba(220, 0, 255, 0.4))";
      }

      rafId.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId.current);
      document.documentElement.style.cursor = "";
    };
  }, []);

  return (
    <>
      {/* Lagged outer cursor */}
      <div
        ref={outerRef}
        className="hidden md:block fixed pointer-events-none z-[9999] transition-transform duration-300"
        style={{ width: 35, height: 35, willChange: "left, top, transform" }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          style={{ transition: "filter 0.2s ease" }}
        >
          <defs>
            <linearGradient id="borderGrad" x1="20%" y1="20%" x2="70%" y2="70%">
              <stop offset="0%" stopColor="#ffee00" />
              <stop offset="25%" stopColor="#ff22ff" />
              <stop offset="60%" stopColor="#cc00ff" />
              <stop offset="100%" stopColor="#5500aa" />
            </linearGradient>
            <linearGradient id="innerGrad" x1="20%" y1="20%" x2="80%" y2="80%">
              <stop offset="0%" stopColor="#090013" />
              <stop offset="50%" stopColor="#17002b" />
              <stop offset="100%" stopColor="#05000a" />
            </linearGradient>
          </defs>
          {/* 3D depth shadow */}
          <path
            d="M 20 20 L 75 45 L 42 52 L 32 80 Z"
            fill="#3b006e"
            stroke="#3b006e"
            strokeWidth="10"
            strokeLinejoin="round"
            strokeLinecap="round"
            transform="translate(2, 6)"
          />
          {/* Main arrow face */}
          <path
            d="M 20 20 L 75 45 L 42 52 L 32 80 Z"
            fill="url(#innerGrad)"
            stroke="#090013"
            strokeWidth="8"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          {/* Holographic wireframe lines */}
          <g stroke="#b833ff" strokeWidth="0.8" opacity="0.4" fill="none">
            <path d="M 33 30 Q 55 35 60 40" />
            <path d="M 35 40 Q 55 45 65 43" />
            <path d="M 30 50 Q 45 50 50 48" />
            <path d="M 28 40 Q 38 45 35 65" />
          </g>
          {/* Neon border */}
          <path
            d="M 20 20 L 75 45 L 42 52 L 32 80 Z"
            fill="none"
            stroke="url(#borderGrad)"
            strokeWidth="4"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          {/* Crisp inner brightness line */}
          <path
            d="M 20 20 L 75 45 L 42 52 L 32 80 Z"
            fill="none"
            stroke="#ffaaf5"
            strokeWidth="1.2"
            strokeLinejoin="round"
            strokeLinecap="round"
            opacity="0.9"
          />
          {/* Gold tip */}
          <circle
            cx="20"
            cy="20"
            r="2.5"
            fill="#fffde0"
            style={{ filter: "drop-shadow(0 0 5px #ffee00) drop-shadow(0 0 10px #ffee00)" }}
          />
        </svg>
      </div>

      {/* Snappy inner dot — follows mouse instantly */}
      <div
        ref={dotRef}
        className="hidden md:block fixed pointer-events-none z-[10000]"
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "#ffaaf5",
          boxShadow: "0 0 6px #cc00ff",
          willChange: "left, top",
        }}
      />
    </>
  );
}
